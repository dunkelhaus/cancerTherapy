# Essentially the main for NeuralNet
import trainingManager as tr
import testingManager as te
import evalManager as ev



def execTrain():
    #Call Train
    print("Calling the train function in trainingManager")
    tr.train()

def execTest():
    #Call Test
    print("Calling the test function in testingManager")
    te.test()

def execEval():
    #Call Eval
    print("Calling the eval function in evalManager")
    ev.evaluate()
