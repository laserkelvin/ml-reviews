# data-centric-ai


Contrasts with a model centric view of AI, which is develop a model that works well for the dataset&mdash;more like typical ML research which is to keep the data fixed (e.g. Boston housing market, MNIST) and develop models around them. 

A data centric view of AI improves on the data quality, in a way that means the model architecture is not as important. We fix the code/model, and improve on the data for example through data augmentation.

Another example of improving data, is ensuring consistency in labelling, and to eliminate duplicates. The latter could be automated using a small ML model for classifying whether pairs of duplicate structured data entries are the same, and recommending them to be merged if they are. Of course, working further upstream with how this data is collected can also improve the quality of downstream models.

Related to [[data-augmentation]] and [[training-notes]], we also want to ensure that the dataset used for training and testing is balanced. Random splits on real life imbalanced data is probably not going to do well, as we will end up with models biased against rare events.

## Validating data

With data centric AI, we also look at how data changes either as a function of time (*drift*) and/or looking at different distributions/populations (*skew*). The former can be due to seasonal changes, or just how societies evolve. A specific type of drift called *concept drift* refers to changes in the statistical properties of labels, e.g. context in NLP applications. For the latter, more convenient to format as a table:

| Type | Relationship | Note |
|--------|------------------|---|
| Dataset shift | $P_{train}(y,x) \neq P_{serve}(y,x)$  | When the whole dataset changes |
| Covariate shift |  $P_{train}(y \vert x) = P_{serve}(y \vert x)$, but $P_{train}(x) \neq P_{serve}(x)$ | When the mapping conceptually remains the same, but the input data changes |
| Concept shift |  $P_{train}(y \vert x) \neq P_{serve}(y \vert x)$, but $P_{train}(x) = P_{serve}(x)$ | When the mapping changes, however the input data doesn't |

Conceptually, we would need a pipeline that serves to continuously evaluate and validate data; nominally the same pipeline that operates on both training and "production" data. 

```Compute stats ->  validate stats -> anomaly detection -> flagging and analysis```

### Types of skew metrics

*Chebyshev distance* used for categorical features in #tfx; $D(x,y) = \rm{max}(\vert x_i-y_i \vert)$.

*Schema skew* detects discrepancies between types, e.g. `int`/`str` between training and production data.

## Lingo

**Feature store**: central repository for documented, curated features specifically for models.

**Data warehouse**: centralized repository of data, scaled up from databases, that hold structured non-volatile data for fast read.

**Data lakes**: centralized repository of data without any preprocessing whatsoever, I guess for example sensor data.