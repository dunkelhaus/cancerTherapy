#!/usr/bin/python
"""
Deep Learning for Cancer Therapy

Authors:
Kumud Ravisankaran | Valeria Brewer
Ninad Mehta | Suraj Jena

Defines methods to use to help loading mutation signature data,
and returning the read end of the pipeline to be read from by the network.

This code runs in correlation with ./DNNClassifierModel.py,
overseen by ./__main_.py
"""
# REVIEW Do Not Run
#=======================================================

import pandas as pd
import tensorflow as tf

from wrappers import pmwrapper

TRAIN_URL = "" # only if downloading data
TEST_URL = "" # only if downloading data

CSV_COLUMN_NAMES = ['Sequence', 'Melanoma[1]',
                    'LungAdeno[1]', 'Melanoma[10]', 'LungAdeno[10]']
TUMOR = ['Melanoma', 'LungAdeno']

#TODO Implementation - incomplete method
#TODO Documentation
#XXX Priority 3
def download():
    """
    NAME: download (dnnClassifier)
    INPUTS: (name : type)
    RETURN: (type)

    PURPOSE:
    """
    # if downloading any online datasets, place them in train_path and test_path
    train_path = ""
    test_path = ""
    return train_path, test_path

#TODO Implementation - incomplete method
#TODO Documentation
#XXX Priority 2
def load_data(y_name='Tumor'):
    """
    NAME: load_data (dnnClassifier)
    INPUTS: (name : type)
    RETURN: (type)

    PURPOSE: Should return the Quon dataset as (train_x, train_y), (test_x, test_y).
    """
    # use below line if downloading data
    # train_path, test_path = download()

    train = [] # the training data
    # Split into x: training data and y: groundtruths
    train_x, train_y = train, train.pop(y_name)

    # if file is a csv and readable, use the pandas read_csv
    test = pd.read_csv(test_path, names=CSV_COLUMN_NAMES, header=0)
    test_x, test_y = test, test.pop(y_name)

    return (train_x, train_y), (test_x, test_y)

#TODO Documentation
#REVIEW Implementation by (cc: TensorFlow)
#XXX Priority 2
def train_input_fn(features, labels, batch_size):
    """
    NAME: train_input_fn (dnnClassifier)
    INPUTS: (name : type)
    RETURN: (type)

    PURPOSE: An input function for training.
    """
    # Convert the inputs to a Dataset.
    dataset = tf.data.Dataset.from_tensor_slices((dict(features), labels))

    # Shuffle, repeat, and batch the examples.
    dataset = dataset.shuffle(1000).repeat().batch(batch_size)

    # Return the read end of the pipeline.
    return dataset.make_one_shot_iterator().get_next()

#REVIEW Implementation by (cc: TensorFlow)
#TODO Documentation
#XXX Priority 2
def eval_input_fn(features, labels, batch_size):
    """
    NAME: train_input_fn (dnnClassifier)
    INPUTS: (name : type)
    RETURN: (type)

    PURPOSE: An input function for evaluation & prediction.
    """
    features=dict(features)
    if labels is None:
        # No labels, use only features.
        inputs = features
    else:
        inputs = (features, labels)

    # Convert the inputs to a Dataset.
    dataset = tf.data.Dataset.from_tensor_slices(inputs)

    # Batch the examples
    assert batch_size is not None, "batch_size must not be None"
    dataset = dataset.batch(batch_size)

    # Return the read end of the pipeline.
    return dataset.make_one_shot_iterator().get_next()

"""
Below code is by TensorFlow (cc: TensorFlow.org)
"""
#REVIEW extra code
# The remainder of this file contains a simple example of a csv parser,
#     implemented using a the `Dataset` class.

# `tf.parse_csv` sets the types of the outputs to match the examples given in
#     the `record_defaults` argument.
CSV_TYPES = [[0.0], [0.0], [0.0], [0.0], [0]]

def _parse_line(line):
    # Decode the line into its fields
    fields = tf.decode_csv(line, record_defaults=CSV_TYPES)

    # Pack the result into a dictionary
    features = dict(zip(CSV_COLUMN_NAMES, fields))

    # Separate the label from the features
    label = features.pop('Tumor')

    return features, label


def csv_input_fn(csv_path, batch_size):
    # Create a dataset containing the text lines.
    dataset = tf.data.TextLineDataset(csv_path).skip(1)

    # Parse each line.
    dataset = dataset.map(_parse_line)

    # Shuffle, repeat, and batch the examples.
    dataset = dataset.shuffle(1000).repeat().batch(batch_size)

    # Return the read end of the pipeline.
    return dataset.make_one_shot_iterator().get_next()
