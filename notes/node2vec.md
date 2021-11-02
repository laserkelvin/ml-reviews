# node2vec


Method to generate node embeddings that encapsulate local neighborhood information, inspired from the `word2vec` model.

- Graph nodes, however are not sequential like words, so learning is done through random walks
- Biased random walk encodes transition probabilities based on connectivity:
  - If connected to origin, $\alpha = 1$
  - If one degree of separation from origin, $\alpha = 1/p$
  - If two degrees of separation from origin, $\alpha = 1/p$
  - Gives a parameterized exploration versus exploitation tradeoff
  - $\pi$ (transition probability) weighted by $\alpha$ and edge weight
  - Deepwalk is equivalent to $p,q=1$

Learning objective is maximizing the node and neighborhood likelihoods:

$$\sum_{u \in V} \log P_f (N_s(u) \vert u)$$

i.e. maximizing the log likelihood of a neighborhood given a node $u$.

This, however, is difficult because in order to compute probability you need the whole graph: `node2vec` uses negative sampling 