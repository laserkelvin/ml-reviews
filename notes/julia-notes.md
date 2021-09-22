# julia-notes

## LaTeX unicode

`\scrS` for the fancy script ${S}$ used in MDP states.

## Helpful cheatsheet to Julia commands

[Julia cheatsheet](https://juliadocs.github.io/Julia-Cheat-Sheet/)

## Useful macros

```julia
using BenchmarkTools

@btime
```

### Broadcasting functions with single arguments

For function `f` that takes arguments `a` and `b`, sometimes we want to map the values of `b` with `f`, where `a` is a scalar. The thing to do is to wrap the `Ref` method around the single input argument:

```julia
f(a, b) = a + b
f.(Ref(a), b)
```

### Composing functions

```julia
f1(x) = sin(cos(x))
f2 = sin \circ cos
```

### Anonymous functions

In Python, we write `lambda` functions that are oneshot:

```python
map(lambda x: int(x), [2., 5., 8.])
```

The `lambda` function is mapped over the list of floats. In Julia, we don't write `lambda`, but use the `->` syntax:

```julia
map(x -> convert(Int, x), [2. 5. 8.])
```