# scoring rule

See:
> T. Gneiting and A. E. Raftery. Strictly proper scoring rules, prediction, and estimation. Journal of the American Statistical Association, 102(477):359–378, 2007 
for a review.

Using the formalism in [[scalable-uncertainties-from-deep-ensembles]]:

Ascribe a numerical score to a predictive distribution $p_\theta (y \vert x)$ that rewards calibrated predictions; higher is better. 

Scoring function $S(p_\theta, (y, x))$ that evaluates the quality of predictive distribution $p_\theta(y \vert x)$ relative to an event $y \vert x \sim q(y \vert x)$ with $q$ being the true distribution. i.e. assess how well distribution $p_\theta$ encodes the true process $q$, given data $y \vert x$ is drawn from $q$. $S$ is maximized when $p_\theta \rightarrow q$.