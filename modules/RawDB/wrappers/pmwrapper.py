#/bin/python

# Write a wrapper class enclosing interactions with pmsignature
# Making it easier for other .py scripts to access this script instead of an Rcpp call to pmsignature

#First use preprocess.py to convert data to mfv format
#Then use cnnCancerTherapy/init/pmsinit.py which uses cnnCancerTherapy/init/pmsinit.R to get pmsignature
#pmsinit.py creates outXX.txt files and stores them in cnnCancerTherapy/out/

import preprocess
# some_file.py
import sys
sys.path.append('../init')
import pmsinit

preprocess.readTable()
preprocess.symbolTableConversion()
preprocess.writeFile()

pmsinit.initialize()
