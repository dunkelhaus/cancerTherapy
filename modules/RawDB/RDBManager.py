from IE import CreateCSV

# GETCSV creates a csv file in the specified path
# @row: a tag, specifies whether a row is a cancer or a token
# @column: a tag, specifies whether a column is a cancer or a token

def GETCSV(row, column, numRows, numCols, path):
    CreateCSV.createCSV(row, column, numRows, numCols, path)
