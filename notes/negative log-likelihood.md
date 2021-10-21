# negative log-likelihood

A metric for optimizing the log likelihood of a model; by minimizing the negative log likelihood, you maximize the log likelihood (i.e. the most likely set of parameters for a given model that the data originated from).

For target `y`, and predicted Gaussian mean `mu` and variance `var`:

```julia
begin
  function nll(mu, var, y)
    return log(var^2) / 2 + (y - mu)^2 / (2 * var^2) + eps(Float32)
  end

  function log_likelihood(mu, y)
    return -0.5 * log(2 * pi) - sum((y .- mu).^2 ./ 2)
end
```