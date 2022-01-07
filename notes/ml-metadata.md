# ml-metadata

Part of the [[ml-pipelines]] process, we want to understand how raw data is transformed by the pipeline, including transformation + schema + model + metrics, part of *data provenance/lineage*.

We track the transformations and inspect artifacts (as objects created throughout the pipeline) to debug and monitor training. 

## Metadata abstraction

In the #tfx Metadata module, the abstraction comprises *artifact*, *execution*, and *context*. Artifacts are created throughout the pipeline and stored,  execution includes runtime parameter information, and the grouping of artifact with execution and component is the context.

## Schema

Metadata for input data, with expectations of types, number of inputs (valency), default values, etc. For categorical data, we can store expected categories, which serve as an additional layer of data validation.

Schema should also have version control, and have environment versioning (e.g. we don't expect the same kind of data for production when compared to training, such as labels/regression targets).

Link to [[taurus-ideas]].