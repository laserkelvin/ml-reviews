# linear-algebra-notes

## Matrix factorization

| Equation | Purpose |
|----------|---------|
| $A=LU$ | Elimination |
| $A=QR$ | Gram-Schmidt orthogonalization |
| $S = Q\Lambda Q^T$ | $\Lambda$ eigenvalues, $Q$ eigenvectors |
| $A = X\Lambda X^{-1}$ | |
| $A = U\Sigma V^T$ | SVD |

## Four fundamental subspaces

For matrix $A, m \times n$, rank $k$

1. Column space, $C(A)$
2. Row space, $C(A^T)$
3. Null space, $N(A)$
4. Null space, $N(A^T)$

**Dimensionality of column and row space is $k$**, which is significant as it means even for large rectangular matrices, the space that columns and rows span is constant.
 - The reason why this is significant there are a finite number of solutions to linear equations
- Null space is all solutions $Ax = 0$
- Dimension of null space is $\text{dim} = n - k$
  - $n$ variables, $k$ constraints