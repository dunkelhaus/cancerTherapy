import sys
sys.path.append('/home/skjena/cancerTherapy/modules')

from NeuralNet.management import NNManager
from NNManager import NNManager

if __name__ == "__main__":
    neuralNet = NNManager("/home/skjena/data/oldtestData/trainingFolds_1.csv", "/home/skjena/data/oldtestData/testingFold_1.csv")
    neuralNet.modelZero()
