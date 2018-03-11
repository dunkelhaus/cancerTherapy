#!/usr/bin/python
"""
Deep Learning for Cancer Therapy

Authors:
Kumud Ravisankaran | Valeria Brewer
Ninad Mehta | Suraj Jena

A custom TensorFlow Estimator for a DNNClassifier for pmsignature classification.

This code runs the files: ./DNNClassifierModel.py, and ./pmsignature.py
"""
# REVIEW Do Not Run
#=======================================================

from __future__ import absolute_import
from __future__ import division
from __future__ import print_function

import argparse
import tensorflow as tf

import pmsignature
import DNNClassifierModel
from DNNClassifierModel import classifierModel

# the CLI argument parser called argparse used to grab the [optional]
# batch_size and train_steps arguments from the console-in
parser = argparse.ArgumentParser()
parser.add_argument('--batch_size', default=100, type=int, help='batch size')
parser.add_argument('--train_steps', default=1000, type=int,
                    help='number of training steps')

#REVIEW EVERY LINE CAREFULLY
#HACK Comment sections out while testing to help go 1by1
#XXX Priority 1
def main(argv):
    """
    NAME: main (dnnClassifier)
    INPUTS: (argv: list) - A list of the command line arguments, if any.
    RETURN: (void)
    PURPOSE: The beginning point of the program to implement a DNNClassifier with 2 Hidden Layers [or Y depending on our design],
                    and classify sample input data defined in the below main method to compute test results in real-time,
                    to observe and test the classifier's functionality.
    """
    # accept command line parser arguments using argparse's Parser
    args = parser.parse_args(argv[1:])

    # TODO
    # Fetch the data from the dataset  - done by load_data() in pmsignature/pmsignature.py
    (train_x, train_y), (test_x, test_y) = pmsignature.load_data()

    feature_columns = []
    # for each key in the train_x dictionary
    #REVIEW after data loads successfully
    for key in train_x.keys():
        # append a numeric feature column to the list, with key same as the training set key
        feature_columns.append(tf.feature_column.numeric_column(key=key))

    # Build DNN with 2 hidden layers, and 10, 10 units respectively (for each layer) [units are the number of output neurons]
    # take hidden_units from DNNClassifierModel which checks for changes in networkShape
    # May need to *wait* for DNNClassifierModel.networkShape() to return with value
    classifier = tf.estimator.Estimator(
        model_fn=classifierModel,
        params={
            # Send the feature columns in params
            'feature_columns' : feature_columns,
            # Enter hidden layer units, 2 of X nodes each [used 10 as a placeholder]
            'hidden_units' : [10, 10],
            # The model must choose between X classes [3 used as placeholder]
            'n_classes' : 3,
        }
    )

    # Train the model
    # Provide a lambda function to the train method for the actual input function with (features, labels, batch_size)
    # Take batch size from DNNClassifierModel which checks for changes in value
    # May need to *wait* for DNNClassifierModel.batchSize() to return with value
    classifier.train(
        input_fn=lambda:pmsignature.train_input_fn(train_x, train_y, args.batch_size),
        steps=args.train_steps)

    # Evaluate the model
    # Provide a lambda function to the evaluate function of the classifier, which is pmsignature's eval input print_function
    # Basically above 2 methods are wrappers for the original, our train/eval_input_fn from pmsignature
    eval_result = classifier.evaluate(
        input_fn=lambda:pmsignature.train_input_fn(train_k))

    print('\nTest set accuracy: {accuracy:0.3f}\n'.format(**eval_result))

    # Generate Predictions from the model
    # expected holds the expected classes to be classified into
    expected = ['BRCA', 'Lung Adeno', 'Other']
    # Predict x holds the test data to be used to display results after the model has been trained and evaluated
    predict_x = {
        'mutation' : [5, 3, 1]
        'fivea' : [3, 2, 4]
        'fivet' : [2, 1, 3]
        'threea' : [2, 4, 1]
        'threet' : [1, 4, 2]
    }

    # The same function as evaluate calls through it's lambda, eval_input_fn from pmsignature.py is called here
    # But in predict mode - that function handles two modes, predict and evaluate
    # This takes predict_x as it's labels if no labels are provided, and
    predictions = classifier.predict(
        input_fn=lambda:iris_data.eval_input_fn(predict_x, labels = None, batch_size=args.batch_size))

    # Loop through the tuple list of (predictions, expected) which holds the predictions for each ith value in all 3 columns
    # of the predict_x dict, giving predictions for those sample values after the model has been trained and evaluated (i.e. "learned")
    for pred_dict, expec in zip(predictions, expected)
        # prints the predictions
        template = ('\nPrediction is "{}" ({:.1f}%), expected "{}"')
        # class_id of the prediction
        class_id = pred_dict['class_ids'][0]
        # Prediction probability of the class id selected above - the prediction
        probability = pred_dict['probabilities'][class_id]
        # print the correct answer's label, it's probability scaled into a percentage, and the expected class from the list
        print(template.format(pmsignature.TUMOR[class_id],
                              100 * probability, expec))

if __name__ == "__main__":
    # maintains a verbose tensorflow log
    tf.logging.set_verbosity(tf.logging.INFO)
    # runs the tensorflow app defined in the main method
    tf.app.run(main)
