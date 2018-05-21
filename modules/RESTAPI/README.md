# REST API Module

This module provides support for the five kinds of Rest requests supported, under the first version (/v1), namely:

## -> /v1/ "V1" [Packaged Request]

The packaged request for all tunable Version 1 network parameters. Covers NN parameters:
1. Learning Rate (Float)
2. Activation (String[10])
3. Regularization (String[10])
4. Regularization Rate (Integer)
5. Problem Type (String[20])
6. Batch Size (Integer)
7. Noise (Integer)
8. Train To Test Ratio (Float)
9. Number of Hidden Layers (Integer)
10. Network Shape (String[20])
11. Play Button (Boolean)
12. Reset Button (Boolean)
13. Next Button (Boolean)    
14. Show Test Data (Boolean)
15. Discretize (Boolean)
17. Dataset (String[20])

### Dependencies:
 N/A

## -> /v1/arguments "Arguments"

Covers NN parameters:
1. Learning Rate (Float)
2. Activation (String[10])
3. Regularization (String[10])
4. Regularization Rate (Integer)
5. Problem Type (String[20])

### Dependencies:

- Needs a valid /v1/ (packaged) request to be made before it so that all defaults are available before the Neural Net can begin training.

## -> /v1/features "Features"

Covers dis/en-abling select features from the feature set.
Need to keep track of the overall feature set currently being used.

Simplest way to do it is by keeping a boolean representative variable for each feature

#### There would be an independent feature set for each dataset. For the "Boolean" dataset, features are:
1. 5A (Boolean)
2. 5C (Boolean)
3. 5G (Boolean)
4. 5T (Boolean)
5. C>A (Boolean) [Default]
6. C>T (Boolean) [Default]
7. C>G (Boolean) [Default]
8. T>A (Boolean) [Default]
9. T>C (Boolean) [Default]
10. T>G(Boolean) [Default]
11. 3A (Boolean)
12. 3C (Boolean)
13. 3G (Boolean)
14. 3T (Boolean)

#### For the "Sample" dataset, features are:
1. C>A (Boolean) [Default]
2. C>T (Boolean) [Default]
3. C>G (Boolean) [Default]
4. T>A (Boolean) [Default]
5. T>C (Boolean) [Default]
6. T>G(Boolean) [Default]

### Dependencies:

- Needs a /v1/settings request to be made before it, so that the selected dataset is known - since the feature set is different for different datasets.
- By extension, we would also need /v1/arguments to be made, since that governs the problem type (i.e. Classification/Regression), which in turn governs the choice of datasets available,

#### --OR--

- Needs a valid /v1/ (packaged) request to be made before it so that all defaults are available before the Neural Net can begin training.

## -> /v1/state "State"

Covers these NN state parameters:
1. Batch Size (Integer)
2. Noise (Integer)
3. Train To Test Ratio (Float)
4. Number of Hidden Layers (Integer)
5. Network Shape (String[20])

### Dependencies:

- Needs a valid /v1/ (packaged) request to be made before it so that all defaults are available before the Neural Net can begin training.

## -> /v1/settings "Settings"

Covers these NN settings:
1. Dataset (String[20])
2. Weight(s)
3. Bias(es)

### Dependencies:
- Needs a /v1/state request to be made before it, to get network shape - to determine how many weights to consider | Input Layer | * {| Hidden Layer^(Num of hidden layers) |} * | Output Layer |
    - And how many biases to consider | Hidden Layer [Num of hidden layers] |  
    - Each weight in the Rest API's DB (db.sqlite3) needs to be 0 - it would only be replaced by a user defined value if we choose to accept that weight.
    - The result of what happens to that weight as the net progresses would then be available through the socket which holds a ValidationMonitor item, which monitors network state every n steps and reports it to the frontend through the same socket.
- Needs a /v1/arguments request to be made before it, so that problem type is known prior to knowing which datasets are available to select from.

#### --OR--

- Needs a valid /v1/ (packaged) request to be made before it so that all defaults are available before the Neural Net can begin training.

## -> /v1/run  "Run"

Covers NN run (execution) functionality - namely,
1. Play Button (Boolean)
2. Reset Button (Boolean)
3. Next Button (Boolean)    
4. Show Test Data (Boolean)
5. Discretize (Boolean)

### Dependencies:
- Needs a valid /v1/ request to be made before it so that all defaults are available before the Neural Net can begin training.


A call to an instantiated manager of this module [RAPIManager] would provide access to the above values within it, stored as an object for each function. All of which can be combined into a Network object, which would be provided by default in an NNManager object i.e. in it's constructor. This would make those variables available to the core of NNManager and fix the issue of availability of dynamic element values to the network.
