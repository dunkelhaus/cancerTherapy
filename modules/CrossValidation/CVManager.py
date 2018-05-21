#CVManager.py
"""
 Deep Learning for Cancer Therapy

 Authors:
 Kumud Ravisankaran | Valeria Brewer
 Ninad Mehta | Suraj Jena
 
    ** Fold the csv at given path into 10 datasets using FoldManager.py
    ** 9 folds: Training
    ** 1 fold: Testing
    ** Each fold is stored into a csv file and also saved into a DLL
    ** Multiprocessing used to asynchronously cross validate and send data via DataDispatcher

    - folds: the number of folds you want to fold csv into
"""
import sys
sys.path.append('../')
sys.dont_write_bytecode = True

from DLL import _DLL
from FoldManager import generateFolds
from RawDB.RDBManager import GETCSV
from crossValidation import validation
from DataDispatcher.DDManager import DispatchData

from multiprocessing import Process, Queue

def CrossValidate(path):
    # Eventually will change path to fm_mutations file given by Quon
    #path = '../../../data/test.csv'
    folds = 3

    # List will hold 10 nodes where the head is Testing and the other 9 nodes are Training data
    List = generateFolds(path, folds)

    #initialize the queues which are populated by crossValidate() and used by DispatchData()
    DDqTesting = Queue()
    DDqTraining = Queue()

    #Two processes: one to cross validate and another to begin dispatching data as soon
    #as there is something in the Queue to dispatch
    #crossValidate = Process(target=validation , args=(List,folds,DDqTesting,DDqTraining,))
    #dispatch = Process(target=DispatchData, args=(DDqTesting,DDqTraining,))
    #crossValidate.start()
    #dispatch.start()

#CrossValidate("/home/skjena/cancerTherapy/modules/RawDB/scripts/fm_mutations_independent.csv")
CrossValidate("/home/skjena/data/PPMI/ppmi_1.csv")
