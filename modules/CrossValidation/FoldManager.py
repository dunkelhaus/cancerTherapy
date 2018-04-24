#FoldManager.py
# Used https://gist.github.com/jrivero/1085501 to split CSV into multiple files

"""
    Given a path to a csv file, generateFolds(path) should take this csv file
    and create 10 folds inserting each fold into a list.

    returns: DLL object with 10 nodes each containing a fold of data
"""
import sys
sys.dont_write_bytecode = True

from DLL import _DLL
import csv
import os

def generateFolds(path):
    List = _DLL()
    num_folds = 10
    #delimiter=','
    output_name_template='fold_%s.csv'
    output_path='.'
    keep_headers=False

    # Open up CSV file from specified path and fold data into 10
    # Each fold of data will be added to the list by performing:
    # List.append(fold)
    # Also generate a CSV for each fold

    with open(path,'r') as csvfile:
        row_count = sum(1 for row in csvfile)
        print "row_count: ",row_count
        fold_rows = row_count/num_folds
        print "fold_rows: ", fold_rows
        #split(csvfile, fold_rows)
        row_limit = fold_rows

        reader = csv.reader(csvfile, delimiter=',')
        current_piece = 1
        current_out_path = os.path.join(
             output_path,
             output_name_template  % current_piece
        )
        current_out_writer = csv.writer(open(current_out_path, 'w'), delimiter=',')
        current_limit = row_limit
        if keep_headers:
            print "B"
            headers = reader.next()
            current_out_writer.writerow(headers)
        for i, row in enumerate(reader):
            print "C"
            if i + 1 > current_limit:
                print "D"
                current_piece += 1
                current_limit = row_limit * current_piece
                current_out_path = os.path.join(
                   output_path,
                   output_name_template  % current_piece
                )
                current_out_writer = csv.writer(open(current_out_path, 'w'), delimiter=',')
                if keep_headers:
                    print "E"
                    current_out_writer.writerow(headers)
            print "F"
            current_out_writer.writerow(row)


'''
def split(filehandler, row_limit, delimiter=',', output_name_template='fold_%s.csv', output_path='.', keep_headers=False):
    """
    Splits a CSV file into multiple pieces.

    A quick bastardization of the Python CSV library.
    Arguments:
        `row_limit`: The number of rows you want in each output file. 10,000 by default.
        `output_name_template`: A %s-style template for the numbered output files.
        `output_path`: Where to stick the output files.
        `keep_headers`: Whether or not to print the headers in each output file.
    Example usage:

        >> from toolbox import csv_splitter;
        >> csv_splitter.split(open('/home/ben/input.csv', 'r'));

    """
    print "A"
    reader = csv.reader(filehandler, delimiter=',')
    current_piece = 1
    current_out_path = os.path.join(
         output_path,
         output_name_template  % current_piece
    )
    current_out_writer = csv.writer(open(current_out_path, 'w'), delimiter=',')
    current_limit = row_limit
    if keep_headers:
        print "B"
        headers = reader.next()
        current_out_writer.writerow(headers)
    for i, row in enumerate(reader):
        print "C"
        if i + 1 > current_limit:
            print "D"
            current_piece += 1
            current_limit = row_limit * current_piece
            current_out_path = os.path.join(
               output_path,
               output_name_template  % current_piece
            )
            current_out_writer = csv.writer(open(current_out_path, 'w'), delimiter=',')
            if keep_headers:
                print "E"
                current_out_writer.writerow(headers)
        print "F"
        current_out_writer.writerow(row)
'''
