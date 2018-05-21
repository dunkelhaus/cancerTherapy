## REST API Module

This module provides support for the five kinds of Rest requests supported, under the first version (/v1), namely:

# -> /v1/arguments "Arguments"

Covers NN parameters:
1. Learning Rate (Float)
2. Activation (String[10])
3. Regularization (String[10])
4. Regularization Rate (Integer)
5. Problem Type (String[20])

# -> /v1/features "Features"

Covers dis/en-abling select features from the feature set.
Need to keep track of the overall feature set currently being used.

Simplest way to do it is by keeping a boolean representative variable for each feature

There would be an independent feature set for each dataset. For the "Boolean" dataset, features are:
1. 5A (Boolean)
2. 5C (Boolean)
3. 5G (Boolean)
4. 5T (Boolean)
5. C>A (Boolean)
6. C>T (Boolean)
7. C>G (Boolean)
8. T>A (Boolean)
9. T>C (Boolean)
10. T>G(Boolean)
11. 3A (Boolean)
12. 3C (Boolean)
13. 3G (Boolean)
14. 3T (Boolean)

For the "Sample" dataset, features are:
1. C>A (Boolean)
2. C>T (Boolean)
3. C>G (Boolean)
4. T>A (Boolean)
5. T>C (Boolean)
6. T>G(Boolean)

# -> /v1/state "State"

Covers these NN state parameters:
1. Batch Size (Integer)
2. Noise (Integer)
3. Train To Test Ratio (Float)
4. Number of Hidden Layers (Integer)
5. Network Shape (String[20])

# -> /v1/settings "Settings"

Covers these NN settings:
1. Dataset (String[20])
2. Weight(s) (String[20])
3. Bias(es)

# -> /v1/run  "Run"

Covers NN run (execution) functionality - namely,
1. Play Button (Boolean)
2. Reset Button (Boolean)
3. Next Button (Boolean)
4. Show Test Data (Boolean)
5. Discretize (Boolean)
