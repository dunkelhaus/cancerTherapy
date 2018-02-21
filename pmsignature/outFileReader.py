#!/bin/python
# Writing a script to read the output of pmsignature and store it
# in appropriate data structures as necessary

# Precondition : Ignore the lines that dont give you necessary information
import numpy as np
import pandas as pd
from itertools import dropwhile
import re
import shlex

serialNumber = []
xy = ("\"")
quoted = re.compile('"[^"]*"')
def hasNumbers(inputString):
    #print(inputString)
    return any(char.isdigit() for char in inputString)
lis = []
def removeIndices(test_str):
    ret = ''
    skip1c = 0
    skip2c = 0
    for i in test_str:
        if i == '[':
            skip1c += 1
        elif i == '(':
            skip2c += 1
        elif i == ']' and skip1c > 0:
            skip1c -= 1
        elif i == ')'and skip2c > 0:
            skip2c -= 1
        elif skip1c == 0 and skip2c == 0:
            ret += i
    return ret


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
        line = line.strip()
        if hasNumbers(line) :
            line = removeIndices(line)
            for value in quoted.findall(line):
                if hasNumbers(value):
                    serialNumber.append(value)
                    serialNumber = [i.replace('"', '') for i in serialNumber]


        line = fh.readline()
print(serialNumber)
