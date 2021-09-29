---
tags: training-set, test-set, validation-set
---

# model-evaluation


## Splitting datasets

From "Pattern Recognition and Neural Networks":

>– Training set: A set of examples used for learning, that is to fit the parameters of the classifier.

> – Validation set: A set of examples used to tune the parameters of a classifier, for example to choose the number of hidden units in a neural network.

> – Test set: A set of examples used only to assess the performance of a fully-specified classifier.

So generally speaking, if no hyperparameter tuning is performed, the dataset used to evaluate generalization is the test set. There is a semantic&mdash;albeit nuanced&mdash;difference between the two that depends on what exactly you're doing.