# Shapley values

A game theoretical description of how features in machine learning models contribute *cooperatively* towards a prediction.

The original abstraction follows with $N$ players in a game, with some scoring function $v$ such that a coalition of players $S$ can achieve a collective score $v(S)$; the total sum of payoffs the collective can obtain from cooperating. The Shapley value, $\varphi$, is the normalized contribution from any given player within the coalition:

$$\varphi_i(v) = \sum_{S\subseteq N \backslash\{i\}} \frac{\vert S \vert!(n - \vert S \vert - 1)!}{n!}(v(S \cup \{i\}) - v(S))$$

To break this down intuitively: the summation occurs over every possible coalition (i.e. combinations of players) excluding a single player (the set difference $N \backslash \{i\}$, see [[set-theory]]). The last term in the equation equates to the difference in value with [$v(S \cup \{i\})$] and without [$v(S)$] player $i$.[^1] The Shapley value given by the *average* contribution of a player computed this way.

The properties of Shapley values include:

1. Efficiency&mdash;$\sum^p_{j=1} \phi_j = \hat{f}(x) - E_X(\hat{f}(X))$
2. Symmetry&mdash;if $v(S\cup\{j\} = v(S \cup \{k\}$) for all $S\subseteq \{1,\ldots,p\} \backslash \{j,k\}$, then $\phi_j =\phi_k$.
3. Dummy&mdash;if $v(S \cup \{j\} = v(S))$ for all $S \subseteq \{1,\ldots,p\}$, then $\phi_j = 0$.
4. Additivty&mdash;Shapley values are additive, such that they can be used in [[ensembles]].

## Practical considerations

The formal definition of the Shapley value requires summation over *all combinations*/subsets of $N$, which intuitively is intractable and scales factorially. In practice, we can use Monte Carlo sampling to estimate $\varphi_i$ approximately:

$$\hat{\varphi}_i = \frac{1}{M} \sum_{m=1}^M\left(\hat{f}(x^m_{+j} - \hat{f}(x^m_{-j}))\right)$$

where $x^m_{+j}$ corresponds to a feature vector where all values except $j$ is replaced by another data point $z$ (i.e. with the player) and $x^m_{-j} replaces all values with $z$ for $M$ iterations.

[^1]: *$S$ is explicitly defined to exclude the player!* This notation is somewhat confusing...