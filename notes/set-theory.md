# Set theory

Summary:

| Name | Notation ($\LaTeX$) |
|---|---|
| Union | $A \cup B$ (cup) |
| Intersection | $A \cap B$ (cap) |
| Set difference | $A \backslash B$ (backslash) |
| Symmetric difference | $A \triangle B$ (triangle) |
| Cartesian product | $A \times B$ (times) |
| Power set | $\mathcal{P}(A)$ (mathcal{P}) |

---

## Union

For sets $A,B$, the union is written as $A \cup B$, which is the set of all objects that are members of $A$ or $B$ or both. 

$$A=\{1,2,3\}, B=\{2,3,4\}, A\cup B = \{1,2,3,4\}$$

## Intersection

For sets $A,B,$ the intersection is written as $A \cap B$, and is the set of objects contained in both $A$ *and* $B$:

$$A=\{1,2,3\}, B=\{2,3,4\}, A\cup B = \{2,3\}$$

## Difference

### Set difference

The asymmetric difference between two sets, for example $A \backslash B$, is the subset of $A$ that is not in $B$, and for $B \backslash A$ the converse:

$$A \backslash B = \{1\}, B \backslash A = \{4\}$$

### Symmetric difference

The symmetric difference of $A,B$ is written as $A \triangle B$ or $A \ominus B$, and comprises the mutually exclusive members of $A,B$:

$$A \triangle B = \{1,4\}$$

The symmetric difference is also equivalent to the set difference of the union and the intersection:

$$ (A \cup B) \backslash (A \cap B)$$

## Cartesian product

The Cartesian product of two sets $A,B$ gives all possible ordered pairs $(a,b)$:

$$A \times B = \{1,2\}, \{1,3\}, \ldots \{3,4\}$$

## Power set

The power set of $A$, written as $\mathcal{P}(A)$, comprises all subsets of $A$:

$$\mathcal{P}(A) = \{ \{\}, \{1\}, \{2\}, \{1,2\}, \ldots \}
