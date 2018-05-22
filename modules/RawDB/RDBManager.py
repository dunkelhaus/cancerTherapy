from IE import CreateCSV

# GETCSV creates a csv file in the specified path
# @row: a tag, specifies whether a row is a cancer or a token
# @column: a tag, specifies whether a column is a cancer or a token


class RDBMamager():
        
    def GETCSV(row, column, numRows, numCols, path):
        CreateCSV.createCSV(row, column, numRows, numCols, path)

    def GETDATASETFILE(csvFile):
        if csvFile == "fm_mutations_independent.tab":
            return "/home/skjena/cancerTherapy/modules/RawDB/scripts/fm_mutations_independent.csv"

        if csvFile == "fm_sample_independent.tab":
            return "/home/skjena/cancerTherapy/modules/RawDB/scripts/fm_sample_independent.csv"
