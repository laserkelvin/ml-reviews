# ml-ops


Development of machine learning pipelines, from data to model training[^1] to deployment.

The main ideas include [[scalability]] of models, both in terms of training and in terms of [[ml-deployment]]/inference, and making sure everything works well and is maintainable throughout the lifecycle of a project.

Key concept is to maximize coupling between stages of *scoping*, *data*, *modeling*, and *deployment* so that you can go back to prior steps with minimal effort and iterate.

Some articles on the topic:

- [Nvidia blog](https://blogs.nvidia.com/blog/2020/09/03/what-is-mlops/)
- [An entire course on the topic](https://fall2019.fullstackdeeplearning.com/)

Part of the challenge in MLOps is to deliver performance beyond good training and testing metrics. A few reasons for when "*good isn't good enough* are like unfair algorithms (e.g. discrimination), uninterpretable models, and more primitively when the application data comes from a different distribution or domain.

[^1]: See [[training-notes]]