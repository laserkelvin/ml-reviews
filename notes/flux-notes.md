---
tags: julia, flux
---

# flux-notes

## Batching

Because Julia is column contiguous, the "observation" dimension is different from Python/`sklearn`. We expect arrays to be shape $[F, N]$ for $F$ features, and $N$ observations.

For this reason, if you're working with single feature regression datasets (i.e. like a toy function, $f(x) = x^3$) then you will want to add a feature dimension with a function like this:

```julia
add_dim(x::Vector) = reshape(x, 1, size(x)...)
```

Which makes a matrix of dimension `[1, length(x)]`.

## Merging/splitting in `Chain`

Basically follows [this tutorial](https://fluxml.ai/Flux.jl/stable/models/advanced/). For splitting, we define a `Split` struct like so:

```julia
begin
	# custom split layer
	struct Split{T}
	  paths::T
	end

    # constructor method that collects each path into a single array
	Split(paths...) = Split(paths)

    # make a functor for splitting, so that Chain will recognize it?
	Flux.@functor Split

    # make a functor for Split, so that it maps the output of the previous layer onto
    # every single path afterwards.
	(m::Split)(x::AbstractArray) = tuple(map(f -> f(x), m.paths))
end
```

The better way to do this is to use the `Parallel` "layer" in Flux. Logically it resembles a `mapreduce`: you send the input to a variable amount of sinks, and the outputs are combined by an `op`.

```julia
model = Chain(
	Dense(5, 10, relu),
	Parallel(
		vcat,
		[Dense(10, 2) for _ in 1:5]...
	)
)
```

This "model" takes a 5-feature input, and transforms to 10-features. The 10-feature arrays are then passed to 5 fully-connected layers, each with an output of 2-features. The `vcat` operation merges the arrays together in the feature dimension, yielding a 10-feature array.