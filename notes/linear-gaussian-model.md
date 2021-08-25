# linear-gaussian-model

Described as a conditional distribution between two variables, $X$ and $Y$, as $P(x \vert y)$, we can factor $Y$ as a linear function of a Gaussian mean and variance:

$$p(x \vert y) = \mathcal{N}(x \vert my + b, \sigma^2)$$

In other words, the probability of $x$ given $y$ depends on a Gaussian centered around $my + b$ with constant variance $\sigma$. 