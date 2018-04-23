import os

# createCSV calls a bash script which creates a csv in the specified path
def createCSV(rows, columns, numRows, numCols, path):
    os.system("/home/skjena/cancerTherapy/modules/RawDB/scripts/convertToCSV.sh %s %s %d %d %s" %(rows, columns, numRows, numCols, path))
