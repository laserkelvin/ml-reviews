# training-notes

Here is a checklist of milestones for developing and testing model architectures: if we don't do well in one step, probably a good idea to go back one.  This more or less pertains to the *model* part of the [[ml-ops]] lifecycle.

1. Synthetic data flows through the model (i.e. you receive an output without errors).
2. The output looks qualitatively correct; arrays in the expected shape, and there are no `NaN`s.
3. Real training data flows through the model (e.g. PyTorch Lightning does a batch of validation data).
4. Successfully iterate through a single training epoch.
5. The training loss goes down over several training epochs.
6. The training metric does not behave unexpectedly; for example `NaN` or negative for minimization.
7. Model is able to overfit a (small) training set.
8. Does well on the full training set.
9. Does well on dev/test sets.
10. Does well on application metrics and/or project goals.[^1]

## Error analysis

One thing I haven't really done in the past, which might be helpful is to take smaller subsets of data and annotate tags of my own that might be helpful in diagnosing why a model performs poorly in any of checklist items.

[^1]: Probably depends on who you ask, but the project goals should probably be defined well before the beginning of this list 😅