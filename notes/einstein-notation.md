# einstein-notation


## Julia

In Julia, `Tullio.jl` provides a high level interface for writing operations in Einstein notation. It adds a degree of flexibility over `torch` and `numpy` versions of `einsum` by being written _in_ Julia, so you can include additional operations (i.e. not just sums!).

In a Pluto notebook I was looking at doing fast sums of Gaussians, at least as fast as one can without doing approximations. Symbolically, what we want to do is this:

$$S_m = \sum_n^N G_n(x_m)$$

As in the spectral intensity at index $m$ (used for indexing the frequency) is given by the summation over Gaussian $n$. The very first way I thought was to do matrix-matrix multiplication, however that involves allocating incredibly large arrays ($M\times N$), which is not very performant.

You could do it piecemeal as well, and just broadcast that function over $x$:

```julia
function sum_over_gauss(x, A::Vector{T}, c::Vector{T}, w::Vector{T})
    y = zero(x)
    for i in eachindex(A, c, w)
        y += gaussian(x, A[i], c[i], w[i])
    end
    return y
end

# broadcast over x
y = sum_over_gauss.(x, Ref(A), Ref(c), Ref(w))
```

This way you'll minimize the number of allocations, however is not as performant as it could be with Einstein summation (for reasons that still ellude me). With `Tullio.jl`, you can write the same summation implicitly:

```julia
@tullio s[m] := gaussian(x[m], A[n], c[n], w[n])
```

According to my `@benchmark`, it runs faster and comparable number of allocations as the low level summation.