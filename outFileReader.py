#!/bin/python
# Writing a script to read the output of pmsignature and store it
# in appropriate data structures as necessary

# Precondition : Ignore the lines that dont give you necessary information
import numpy as np
import pandas as pd
from itertools import dropwhile
import re

def hasNumbers(inputString):
    return any(char.isdigit() for char in inputString)

with open('./out/out7.txt') as fh:
    # Skip initial comments that starts with #
    while True:
        line = fh.readline()
        # break while statement if it is not a comment line
        # i.e. does not startwith #
        if not line.startswith('#'):
            break

    # Second while loop to process the rest of the file
    while line:
        if hasNumbers(line) :
           print(line)
        line = fh.readline()
