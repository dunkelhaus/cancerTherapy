#FoldManager.py
# Used https://gist.github.com/jrivero/1085501 to split CSV into multiple files

"""
    Given a path to a csv file, generateFolds(path) will:
        - split the csv dataset into a specified number of folds (num_folds)
        - store each fold in a csv file within specified directory (output_path)
        - store each fold in a linked list, DLL, where each node contains a fold
        - stores file_X.csv wher X = {1,2,3,..} within data directory outside of cancerTherapy

    returns: DLL object with 10 nodes each containing a fold of data
"""
import sys
sys.dont_write_bytecode = True

from DLL import _DLL
import csv
import os

def generateFolds(path, folds):
    List = _DLL()
    num_folds = folds
    output_name_template='fold_%s.csv'
    output_path='../../../data/'
    keep_headers=False

    #determine number of rows in csv file, calculate how many rows per fold
    with open(path,'r') as csvfile:
        row_count = sum(1 for row in csvfile)
        fold_rows = row_count/num_folds
        row_limit = fold_rows

    #split dataset into folds storing each fold into a csv file
    with open(path, 'r') as readfile:
        reader = csv.reader(readfile)
        current_piece = 1
        current_out_path = os.path.join(output_path, output_name_template  % current_piece)
        List.append(current_out_path)
        with open(current_out_path, 'w') as foldfile:
            current_out_writer = csv.writer(foldfile, delimiter=',')
            current_limit = row_limit
            for i in range(0,row_count):
                row = reader.next()
                if i + 1 > current_limit:
                    current_piece += 1
                    current_limit = row_limit * current_piece
                    current_out_path = os.path.join(
                       output_path,
                       output_name_template  % current_piece
                    )
                    List.append(current_out_path)
                    current_out_writer = csv.writer(open(current_out_path, 'w'), delimiter=',')
                current_out_writer.writerow(row)
    return List
