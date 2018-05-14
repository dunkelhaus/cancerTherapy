import tensorflow
import os
from __future__ import print_function

class Status():
    def __init__(self, name):
        self.name = name

    def message(self, code, process):
        if code == 0:
            print("Completed process %s (%s) successfully.", %(process, self.name))

        elif code == 1:
            print("Entering process %s (%s) ...", %(process, self.name))

        elif code == 2:
            print("Error in %s.", %(process))

        elif code == 3:
        	print("Training status: Complete. Model ready for testing. \n Successfully trained a DNN of shape %s" %(process))

        elif code == 4:
        	accuracy = '\nTest set accuracy: {accuracy:0.3f}\n'.format(**process)
        	print("Testing status: Complete. Model ready to make predictions.\n %s" %(accuracy))