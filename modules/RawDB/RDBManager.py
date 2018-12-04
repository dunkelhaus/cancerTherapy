import shutil
from IE import CreateCSV
from IE import boolMapToFreq
import sys
sys.path.insert(0, "/home/skjena/cancerTherapy/modules")
from Status.Status import Status

# GETCSV creates a csv file in the specified path
# @row: a tag, specifies whether a row is a cancer or a token
# @column: a tag, specifies whether a column is a cancer or a token

class RDBManager():
    def __init__(self, dataset):
        self.status = Status("RDBManager")
        self.dataset = dataset
        self.datapath = self.GETDATASETFILE()
        self.scaledpath = self.GETSCALEDDATASETFILE()
        self.dataframe = self.boolToFreq()

    def GETCSV(self, row, column, numRows, numCols, path):
        self.status.message(1, "GETCSV(self, row, column, numRows, numCols, path)")
        CreateCSV.createCSV(row, column, numRows, numCols, path)
        self.status.message(0, "GETCSV(self, row, column, numRows, numCols, path)")

    def boolToFreq(self):
        self.status.message(1, "boolToFreq(self)")
        df = None
        if self.dataset == "fm_mutations_independent":
            df = boolMapToFreq.getBoolFrequencies(self.datapath)
        elif self.dataset == "fm_sample_independent":
            df = boolMapToFreq.getFrequencies(self.datapath)
        else:
            df = boolMapToFreq.getCSVFrequencies(self.datapath)

        self.status.message(0, "boolToFreq(self)")
        return df

    def GETDATASETFILE(self):
        self.status.message(1, "GETDATASETFILE(self)")
        if self.dataset == "fm_mutations_independent":
            self.status.message(0, "GETDATASETFILE(self)")
            return "/home/skjena/data/fm_mutations_independent.tab"

        if self.dataset == "fm_sample_independent":
            self.status.message(0, "GETDATASETFILE(self)")
            return "/home/skjena/data/fm_sample_independent.tab"

        if self.dataset == "top10000LungMel":
            self.status.message(0, "GETDATASETFILE(self)")
            return "/home/skjena/cancerTherapy/modules/RawDB/scripts/top10000LungMel.csv"

        if self.dataset == "top1000LungMel":
            self.status.message(0, "GETDATASETFILE(self)")
            return "/home/skjena/cancerTherapy/modules/RawDB/scripts/top1000LungMel.csv"

        if self.dataset == "top100LungMel":
            self.status.message(0, "GETDATASETFILE(self)")
            return "/home/skjena/cancerTherapy/modules/RawDB/scripts/top100LungMel.csv"

        if self.dataset == "top10LungMel":
            self.status.message(0, "GETDATASETFILE(self)")
            return "/home/skjena/cancerTherapy/modules/RawDB/scripts/top10LungMel.csv"

    def GETSCALEDDATASETFILE(self):
        self.status.message(1, "GETSCALEDDATASETFILE(self)")
        if self.dataset == "fm_mutations_independent":
            self.status.message(0, "GETSCALEDDATASETFILE(self)")
            return "/home/skjena/data/scaled/fm_mutations_independent.csv"

        if self.dataset == "fm_sample_independent":
            self.status.message(0, "GETSCALEDDATASETFILE(self)")
            return "/home/skjena/data/scaled/fm_sample_independent.csv"

        if self.dataset == "top10000LungMel":
            self.status.message(0, "GETSCALEDDATASETFILE(self)")
            return "/home/skjena/data/scaled/top10000LungMel.csv"

        if self.dataset == "top1000LungMel":
            self.status.message(0, "GETSCALEDDATASETFILE(self)")
            return "/home/skjena/data/scaled/top1000LungMel.csv"

        if self.dataset == "top100LungMel":
            self.status.message(0, "GETSCALEDDATASETFILE(self)")
            return "/home/skjena/data/scaled/top100LungMel.csv"

        if self.dataset == "top10LungMel":
            self.status.message(0, "GETSCALEDDATASETFILE(self)")
            return "/home/skjena/data/scaled/top10LungMel.csv"

    def deleleDirAndContents(fileToDelete):
        path = "/home/skjena/data/" + fileToDelete + "/"
        shutil.rmtree(path)
