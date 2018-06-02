import sys
sys.path.append('/home/skjena/cancerTherapy/modules')

from NeuralNet.management import NNManager
from NNManager import NNManager

if __name__ == "__main__":
    network = Network()
    neuralNet = NNManager("/home/skjena/data/fm_mutations_independent/trainingFolds_1.csv", "/home/skjena/data/fm_mutations_independent/testingFolds_1.csv")
    neuralNet.modelZero()
