import sys
sys.path.append('/home/skjena/cancerTherapy/modules')

from NeuralNet.management import NNManager
from NNManager import NNManager

if __name__ == "__main__":
    neutralNet = NNManager("/home/skjena/data/testData/trainingFolds_1.csv", "/home/skjena/data/testData/testingFold_1.csv")
