# feature-selection

Selecting features (either supervised or not) is part of the learning process, both for an algorithm and for the human.

## Statistical tests

Correlation between features can help reveal what features are important:

**Pearson's correlation coefficient** shows linear relationships, scaled between -1 and 1:

$$\rho_{X,Y} = \frac{\mathrm{cov}(X,Y)}{\sigma_X, \sigma_Y}$$

where $\sigma$ is the standard deviation, and $\mathrm{cov}$ is the covariance between $X$ and $Y$ values.

**Kendall Tau rank** looks at monotonic relationships with small sample size: compares agreements (concordant) and disagreements (discordant) between variables/columns, and gives a coefficient between -1 and 1, with zero indicating no correlation.

$$\tau = \frac{C - D}{C + D} $$

**Spearman's rank** quantifies how readily the relationship between two variables can be expressed with a monotonic function, scaling between -1 and 1 with the former being a decreasing monotonic function, and the latter an increasing one. This requires sorted data to ascribe a *rank* to each observation, probably better explained with Julia:

```julia
using Statistics

X = rand(100); Y = rand(100)
x_rank = sortperm(X); y_rank = sortperm(Y)

r_s(x_rank, y_rank) = cov(x_rank, y_rank) / (std(x_rank) * std(y_rank))
```

**$\chi^2$ test** #needs-expanding

**Mutual information** #needs-expanding