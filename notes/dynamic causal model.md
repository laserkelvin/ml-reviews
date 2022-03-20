# dynamic causal model

A type of causal model; for the case of [[causal-navigation-by-continuous-time-neural-networks]], given a dynamical system governed by:

$$\frac{d\mathrm{x}}{dt} = F_\theta(\mathrm{x}(t), \mathrm{I}(t))$$

we can factorize $F_\theta$ into:

$$\frac{d\mathrm{x}}{dt} = (A + \mathrm{I}(t)B)\mathrm{x}(t) + C\mathrm{I}(t)$$

where $A, B, C$ are partial derivatives of $F_\theta$ with respect to node hidden states $\mathrm{x}(t)$ and inputs $\mathrm{I}(t)$.