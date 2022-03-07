---
tags: papers
---

# accelerating-neural-architecture-exploration

## [arxiv](https://arxiv.org/abs/2202.12934)

*First written*: Mar/06/2022, 16:26:53

## Summary

This work expands on using evolutionary algorithms for neural architecture search, focusing on multi-objective architectural exploration for both machine translation and image classification domains, which have been less targeted for neural architecture research. This area is interesting from an HPC perspective, since it's one of the more naturally suited tasks for HPC environments.

## Previous work

- Use "super-networks"[^1], whereby sub-networks are task specific and treated as their own individual model.
  - This doesn't get around the problem of optimization, as you still end up needing to train an extremely large number of weights (as the same in a NAS).
  - It does get around the problem of validation; if the task has significant overhead in that part of training then this provides some benefit.
- Proxy objective predictor model, where the validation step in NAS is replaced by another model
  - *I'm not sure how this approach works with cross-validation, or with testing on OOD samples?*

^[1]: I guess more like hypernetwork, where you have a generative model for architectures? From the text alone it's not clear which they're referring to, where the hypernetwork is down the line of [[bayesian-neural-networks]].

## Current work

- Experiments include NAS for a transformer super-network, and for image classification with MobileNetV3. The search space is surprisingly larger for the latter than for the former.
- NAS optimization performed with multiple learning objectives; not just constrained to a single hardware platform - compare to the typical case if latency was an objective to minimize, it would work specifically for that hardware stack only.
- This paper outlines a method the authors call *Lightweight Iterative Neural Architecture Search* (LINAS), whereby small trained performmance predictor models - which are trained online, and in this case, ridge regressors/support vector machines - are paired with genetic algorithms for less costly exploration.

### Setup

LINAS works in a set of nested loops: the first level corresponds to online training of performance predictor models, and the second level corresponds to generating samples of architectures and scoring them.

1. Randomly sample architecture search space by sampling weights ($W$) and configurations ($\Omega$), and score them based on validation metrics $f_m$.
2. Pool validation scores from the current population (if not the first iteration, this corresponds to the optimal population), and train predictors $Y_m$.
3. Use the lightweight models to score generations of models, pooling the best performing models out and using them for the next step; loop.

The authors used a widely used evolutionary algorithm NSGA-II[^2], which was specifically designed for multiobjective optimization. This is implemented in the [`pymoo` package](https://pymoo.org/). The lightweight models take the large model hyperparameters as input, encoded as just the number of dimensions, attention heads, etc. and fed into ridge/SVR regressors.

### Results

- Transformer NAS as a function of 40 design variables/hyperparameters, with the model to maximize the BLEU score with a fixed beam search size and length penalty.
- MobileNetV3 has 45 hyperparameters, and tries to maximize the top-1 accuracy on ImageNet.
- Both models additionally want to minimize latency, rather than model size.
- Main takeaway is that they claim LINAS explores hyperparameter space much more quickly, and with similar if not better validation scores than using only NSGA-II (without a proxy validation model).

[^2]: [NSGA-II](https://www.semanticscholar.org/paper/A-fast-and-elitist-multiobjective-genetic-NSGA-II-Deb-Agrawal/6eddc19efa13f7e70301908d98e85a19d6f32a02)

## Comments and questions

- Would be interested in seeing pruning as part of the NAS process, for example combined with [DA-NAS](https://arxiv.org/abs/2003.12563)
- The general problem of NAS seems to be like the same as regular Monte Carlo samplers; they are surfing the hypersphere but not actually taking chunks of volume efficiently like in nested sampling. This is evident from Figures 6/7, where you can see a logarithmic decrease in the volume explored (there is also no roof to the hypervolume)
- Not sure why MobileNetV3 has a significantly smaller hypervolume explored compared to the Transformer

## Further reading

- [Hardware-aware transformers](http://arxiv.org/abs/2005.14187)
- [Evolutionary Computation: An Overview](https://www.annualreviews.org/doi/10.1146/annurev.ecolsys.30.1.593)
- [DA-NAS](https://arxiv.org/abs/2003.12563)
- [Neural architecture search without retraining](https://arxiv.org/abs/2006.04647)
- [Multiobjective evolutionary algorithms: a comparative case study and the strength Pareto approach](http://ieeexplore.ieee.org/document/797969/)