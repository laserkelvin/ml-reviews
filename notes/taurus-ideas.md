# taurus-ideas

Julia package for MLOps, abstraction for reproducible data processing and monitoring. Draw inspiration from #tfx and PyTorch Lightning.

Things to consider:

1. Inter package operability/dependencies.`flux`, etc
2. Scalability
3. Plotting summaries

## Data processing pipeline

Implement components as `struct`s:

```julia
abstract type AbstractDataProcess end
name(d::AbstractDataProcess) = Symbol(typeof(d))
# monitoring workflows as a subtype, which specializes in finding outliers
abstract type AbstractDataMonitor <: AbstractDataProcess end
# where we want to transform the input data
abstract type AbstractDataTransform <: AbstractDataProcess end
# alert when comparisons are wrong
abstract type AbstractDataComparison <: AbstractDataProcess end

# examples of concrete types
struct RangeMonitor{T} <: AbstractDataMonitor 
    min::T
    max::T
end
(op::RangeMonitor)(x) = begin min_violations = x .< op.min; max_violations = x .> op.max; (min=min_violations, max=max_violations)
end

struct MinMaxNormalization <: AbstractDataProcess end
(s::MinMaxNormalization)(x) = begin x_min = minimum(x); x_max = maximum(x); @. (x - x_min) / (x_max - x_min) end
```

Implement a controller as a `struct`:

```julia
# define base pipeline, which can then subtype into training, validation, testing, and production
abstract type AbstractDataPipeline end

components(a::AbstractDataPipeline) = a.components
# write a function that iterates over the mapping, pairing the right data
# to the right operation

abstract type AbstractTrainingPipeline <: AbstractDataPipeline end
abstract type AbstractValidationPipeline <: AbstractDataPipeline end
abstract type AbstractTestingPipeline <: AbstractDataPipeline end
abstract type AbstractProductionPipeline <: AbstractDataPipeline end

struct TrainingPipeline <: AbstractTrainingPipeline
    components
    mapping             # define a mapping for each component in the pipeline
end
```
