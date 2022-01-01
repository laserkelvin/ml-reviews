# ml-ops


Development of machine learning pipelines, from data to model training[^1] to deployment.

The main ideas include [[scalability]] of models, both in terms of training and in terms of [[ml-deployment]]/inference, and making sure everything works well and is maintainable throughout the lifecycle of a project.

Key concept is to maximize coupling between stages of *scoping*, *data*, *modeling*, and *deployment* so that you can go back to prior steps with minimal effort and iterate.

Some articles on the topic:

- [Nvidia blog](https://blogs.nvidia.com/blog/2020/09/03/what-is-mlops/)
- [An entire course on the topic](https://fall2019.fullstackdeeplearning.com/)

Part of the challenge in MLOps is to deliver performance beyond good training and testing metrics. A few reasons for when "*good isn't good enough* are like unfair algorithms (e.g. discrimination), uninterpretable models, and more primitively when the application data comes from a different distribution or domain. This part is considered in [[ml-auditing]].

## Scoping

The first step of the MLOps lifecycle is to work out what the ways ML can improve something, how to measure performance, and what kind of resources are needed/available. In a way we're defining ML as a solution to a problem that may or may not be immediately obvious.

Part of the scoping process is *diligence*: an assessment on feasibility, cost, and value. The first can be determined by a literature search, or seeing if others have done something similar, and establish a baseline (may be human level performance). 

The scoping of value needs to reconcile ML metrics (e.g. loss, accuracy) with application metrics/value, for example revenue for businesses, societal benefits, or degree of  automation for data analysis. 

The scoping of cost involves defining milestones and resources needed/available. We want to define deliverables, how performance can be measured, a timeline for when this can be feasibly done, and finally the resources/people needed to achieve this.

[^1]: See [[training-notes]]