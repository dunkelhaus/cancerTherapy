import shutil
from IE import CreateCSV

# GETCSV creates a csv file in the specified path
# @row: a tag, specifies whether a row is a cancer or a token
# @column: a tag, specifies whether a column is a cancer or a token


class RDBManager():
        
    def GETCSV(row, column, numRows, numCols, path):
        CreateCSV.createCSV(row, column, numRows, numCols, path)

    def GETDATASETFILE(csvFile):
        if csvFile == "fm_mutations_independent":
            return "/home/skjena/cancerTherapy/modules/RawDB/scripts/fm_mutations_independent.csv"

        if csvFile == "fm_sample_independent":
            return "/home/skjena/cancerTherapy/modules/RawDB/scripts/fm_sample_independent.csv"

        if csvFile == "top10000LungMel":
            return "/home/skjena/cancerTherapy/modules/RawDB/scripts/top10000LungMel.csv"

        if csvFile == "top1000LungMel":
            return "/home/skjena/cancerTherapy/modules/RawDB/scripts/top1000LungMel.csv"

        if csvFile == "top100LungMel":
            return "/home/skjena/cancerTherapy/modules/RawDB/scripts/top100LungMel.csv"

        if csvFile == "top10LungMel":
            return "/home/skjena/cancerTherapy/modules/RawDB/scripts/top10LungMel.csv"

    def deleleDirAndContents(fileToDelete):
        path = "/home/skjena/data/" + fileToDelete + "/"
        shutil.rmtree(path)
