# decision-theory

- Must be acyclic, directed graphs like [[bayesian-network]].

## Notation

| Expression | Description |
|------------|-------------|
| $A \succ B$ | Prefer $A$ over $B$ |
| $A \sim B$ | Indifference over either |
| $A \succeq B$ | Prefer $A$ over $B$ or indifferent |

### Node types

- A *chance* node represents a stochastic variable, noted by circles
- A *decision* node represents a decision variable, noted by squares
- A *utility* node represents a [[utility]] variable, noted by diamonds and cannot have children

### Edge types

- A *conditional* edge ends in a chance node, and indicates the uncertainty in the chance node conditioned by its parent values
- An *informational* edge ends in a decision node, indicating the node was made based on the values of its parents. Usually drawn with dashed lines, or omitted.
- A *functional* edge is similar to the informational edge, but for utility nodes.

The figure below demonstrates the abstraction, albeit not in a particularly linear way. The utility node represents the joint values of the decision to treat or not, and on the chance we have the disease. The chance of disease is conditioned on the three observables test results.

Concretely, we can *solve* the decision network by iteratively solving each scenario, and maximizing the utility value $U(T,D)$. The choices/decisions made that maximizes the utility is referred to as a *rational decision*.

![](assets/2021-09-13-16-43-39.png)

- [[lottery]]
- [[markov-decision-process]]

[//begin]: # "Autogenerated link references for markdown compatibility"
[bayesian-network]: bayesian-network "bayesian-network"
[utility]: utility "utility"
[lottery]: lottery "lottery"
[markov-decision-process]: markov-decision-process "markov-decision-process"
[//end]: # "Autogenerated link references"