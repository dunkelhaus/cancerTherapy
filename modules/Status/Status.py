import tensorflow
import os
from __future__ import print_function

class Status():
    def __init__(self, name):
        self.name = name

    def message(self, process, code):
        if code == 0:
            print("Completed process %s (%s) successfully.", %(process, self.name))

        elif code == 1:
            print("Entering process %s (%s) ...", %(process, self.name))

        else code == 2:
            print("Error in %s.", %(process)
