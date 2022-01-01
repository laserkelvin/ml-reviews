# data-centric-ai


Contrasts with a model centric view of AI, which is develop a model that works well for the dataset&mdash;more like typical ML research which is to keep the data fixed (e.g. Boston housing market, MNIST) and develop models around them. 

A data centric view of AI improves on the data quality, in a way that means the model architecture is not as important. We fix the code/model, and improve on the data for example through data augmentation.

Another example of improving data, is ensuring consistency in labelling, and to eliminate duplicates. The latter could be automated using a small ML model for classifying whether pairs of duplicate structured data entries are the same, and recommending them to be merged if they are. Of course, working further upstream with how this data is collected can also improve the quality of downstream models.

Related to [[data-augmentation]] and [[training-notes]], we also want to ensure that the dataset used for training and testing is balanced. Random splits on real life imbalanced data is probably not going to do well, as we will end up with models biased against rare events.