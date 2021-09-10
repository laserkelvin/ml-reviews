# kernel-density-estimation


A form of nonparametric modeling, where the number of parameters scales with the number of data points. Given observations $o_{i:n}$, the probability density is given by:

$$p(x) = \frac{1}{n}\sum_{i=1}^n\phi(x-o_i)$$

for some kernel function $\phi$. The density basically decays smoothly away from data points. The Julia code really is incredibly descriptive and simple: the two functions below return anonymous functions that evaluate when passed `x`.

```julia
gaussian_kernel(b) = x -> pdf(Normal(0,b), x)
kde(phi, O) = x -> sum([phi(x - o) for o in O]) / length(O)

# unit Gaussian
X = rand(100);
estimator = kde(gaussian_kernel(1.), X)
# evaluate density at 0.1 based on 100 random data points
estimator(0.1)
```