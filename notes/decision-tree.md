# decision-tree


## Storing joint probabilities

From [[decision-making-book]], one way of storing joint discrete probabilities is with a decision tree. For example, the joint probability of $P(x,y,z)$ factored as the product of three independent variables that can be zero or one, $P(x) \times P(y) \times P(z)$. Instead of storing the full table of products, we represent things as a #tree/#graph, where each node is a variable, and the edges are whether that variable is zero or one.

The result is storing only five probabilities, as opposed to eight. The savings scale well in the limit of many possibilities/variables.

![](2021-08-25-07-40-09.png)