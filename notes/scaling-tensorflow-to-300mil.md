---
tags: papers, scaling-ml, hpc
---

# scaling-tensorflow-to-300mil

## [arxiv](https://arxiv.org/abs/2109.09541)

*First written*: Sep/22/2021, 12:23:32

## Summary

This is a case study paper on scaling up prediction systems in Tensorflow from hard coded systems using logistic regression and factorization machines. The paper details work at a company called Zemanta, which operates as a real-time bidding system for online advertising; they handle:

- Over a million bid requests per second
- A low latency requirment (auctions have a maximum response time of 100 milliseconds)

- The bidder application is written in Golang, wrapping Tensorflow.
- They dismiss a lot of GPU usage based on cost; I'm not sure but I infer CPU usage solely?
  - Also use of sparse models better suited for CPUs, apparently.

### Speed ups

- Binary data = 25% speedup over CSV
- Pack many requests into single batches
  - Reduces overhead in function calls, and hits vectorized routines
  - Does this mean computation is grouped into FIFO packets/bursts?
- Initial models were slower than custom mechanisms, but used profiling to heavily improve performance
  - Removal of redundant reshaping and transform operations
  - *Adam optimizer was 50% slower than Adagrad*
  - Adagrad was deterimental to performance, however, so they used `LazyAdam` which brings it up to 40%

Conclusions from the paper:

> In this extended abstract, we described the process of transitioning machine learning models to the TensorFlow framework and serving them at a large scale. The key challenges we faced in our use case were related to compute resources, prediction latency, and training throughput. By implementing autobatching in serving, we halved TF’s CPU usage and retained acceptable latencies. Along with thoroughly understanding the models, we also put effort into putting together an efficient training pipeline: using a binary data format instead of CSV, utilizing the TF profiler to remove bottlenecks in the models, and using the correct optimizer have all brought significant speedups. We have also implemented many other smaller and more specific optimizations such as stripping the optimizer weights to reduce the saved model size. Overall, using TF has brought significant lifts in business metrics and vastly increased the speed of research. To make the best use of it, we are continuing to optimize our pipelines and serving stack.

## Comments

- Generally serve as a case for some things to look out for. For #intel-research, I'd be interested look further into distributed sparse modeling