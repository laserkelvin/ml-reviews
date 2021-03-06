# deep-learning-model-abstraction


Inspired by PyTorch Lightning, I'd like to do something similar for `Flux.jl`. Otherwise, this is just to help me organize my thoughts and abstract out the parts of training and testing deep learning models.

## Scope

Naturally, there's a lot of things that *can* be done, and the question is to what extent we should encapsulate/build into the framework. Some examples include:

- Learning rate scheduling
- Adversarial training
  - Both conventional classifier and [[fast gradient sign method]] like methods.


## Ideas

### Unified interfaces

Something akin to how `forward` methods exist for every model. You could probably mimic the same effect by having something like:

```julia
# implement a base type function
(model::MLModel)(x) = forward(model::MLModel, x)
# implement model specific `forward` method
forward(resnet::ResNet, x) = ...
```

### Encapsulation

Following the philosophy in PyTorch Lightning, we have **models** and **systems** that make up a deep learning task.

Should **system** inherit from **model**? Vice versa? Or have an abstract type further up the chain?

### Composable losses

Multiple dispatch for composable loss functions. Loss at a **system** level as the sum of loss functions at the **model** level.

```julia
abstract type MLSystem end
abstract type MLModel end

loss(mls::MLSystem) = mapreduce(x->loss(x), sum, mls.models)

# define a model

struct ModelType <: MLModel end
    layers
end

loss(model::ModelType) = mse_loss(model(x), y)
```

Idea is that this abstracts out the need to abstract out loss for a collection of models, and each model deals with its own loss. _How flexible is this? Like for GANs and whatnot_

### Tying data to systems



### Training and optimizers

User defines a `configure_optimizer` method for a **system**.

```julia
function configure_optimizer(mls::MLSystem)
    # defined by user
end

# optimizer for each model
function configure_optimizers(mls::MLSystem, optim::Optimizer, lr::Real; kwargs...)
    optimizers = [optim(params(model), lr, kwargs...) for model in mls.models]
end
```

### Putting it all together

Have a high level `setup` function that readies everything.

```julia
function setup(mls::MLSystem, data::Dataset)
    optimizers = configure_optimizer(mls)

```

[//begin]: # "Autogenerated link references for markdown compatibility"
[fast gradient sign method]: <fast gradient sign method> "fast gradient sign method"
[//end]: # "Autogenerated link references"