# wandb-notes


Trying to conceptualize how to build in the *Weights and Biases* abstractions into standardized PyTorch workflows.

- Version track data and models with `Artifacts`
- Use [`Tables`](https://docs.wandb.ai/guides/data-vis) to do high level data and model visualization

## `Artifact` abstraction

See [this link](https://docs.wandb.ai/guides/artifacts/artifacts-core-concepts) for the explanation for how data is tracked, using a simple toy example.

Data is uploaded to a Google bucket; alternatively, [reference artifacts](https://docs.wandb.ai/guides/artifacts/references) is kind of like `dvc` and stores metadata, and acts a softlink. This can be done with something like this:

```python
run = wandb.init()
artifact = wandb.Artifact('mnist', type='dataset')
artifact.add_reference('file:///mount/datasets/mnist/')
run.log_artifact(artifact)
```

The workflow does have some redundancy, however, in order to actually have the artifact tracking.

```python
run = wandb.init()
artifact = run.use_artifact('mnist:latest', type='dataset')
artifact_dir = artifact.download()
```

> For filesystem references, a `download()` operation copies the files from the referenced paths to construct the artifact directory. In the above example, the contents of `/mount/datasets/mnist` will be copied into the directory `artifacts/mnist:v0/`. If an artifact contains a reference to a fail that was overwritten, then `download()` will throw an error as the artifact can no longer be reconstructed.