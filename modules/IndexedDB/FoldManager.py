#FoldManager.py
"""
 Deep Learning for Cancer Therapy

 Authors:
 Kumud Ravisankaran | Valeria Brewer
 Ninad Mehta | Suraj Jena

"""
import sys
sys.dont_write_bytecode = True

import csv
import os

def generateFolds(path, List, folds):
    num_folds = folds
    output_name_template='fold_%s.csv'
    output_path='/home/skjena/data/testData/'
    keep_headers=False

    #determine number of rows in csv file, calculate how many rows per fold
    with open(path,'r') as csvfile:
        row_count = sum(1 for row in csvfile)-1
        fold_rows = row_count/num_folds
        row_limit = fold_rows

    #split dataset into folds storing each fold into a csv file
    with open(path, 'r') as readfile:
        reader = csv.reader(readfile)
        header = reader.next()
        current_piece = 1
        current_out_path = os.path.join(output_path, output_name_template  % current_piece)
        List.append(current_out_path)
        with open(current_out_path, 'w') as foldfile:
            current_out_writer = csv.writer(foldfile, delimiter=',')
            current_out_writer.writerow(header)
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
                    current_out_writer.writerow(header)
                current_out_writer.writerow(row)
    return List
