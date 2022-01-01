# ml-monitoring


## Notes from the Coursera [[ml-ops]] course

Idea is to find metrics/statistics to monitor in real time that indicate something going wrong in the pipeline. Automate via setting thresholds to flag issues.

Start with redundant metrics, and gradually whittle down to necessary ones. #idea would be to also train a random forest to find important metrics. These provide feedback in the loop of [[ml-deployment]] to traffic to performance analysis. By analogy, ML goes from data to experiment to analysis.

### Examples of metrics

*Software*: memory, compute, latency, throughput, server load

*Input*: Average input length, noise RMS, number of missing values

*Output*: Number of NaNs, number of times user redoes search, 

The types of metric depend on the task: user data has more inertia than say trading data.