# ml-auditing

The auditing process is to formally evaluate the performance of a new pipeline beyond training/testing metrics. Basically ask *where can the model go wrong?* Examples include:

1. Data and model bias
2. Frequency of specific types of errors (e.g. misclassified groups)
3. Performance on rare events

Part of the auditing process involves designing adequate metrics that probe these aspects of the model as part of the [[ml-ops]] lifecycle. Discussions with the customer/collaborator will also help identify possible reasons.