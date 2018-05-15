#!/bin/bash

# Configuration stuff
file1= $1
num_files = 10
# Work out lines per file.

total_lines=$(wc -l <$file1)
((lines_per_file = (total_lines + num_files - 1) / num_files))
# Split the actual file, maintaining lines.
split --lines=${lines_per_file} ${file1}fold.
# Debug information

echo "Total lines     = ${total_lines}"
echo "Lines  per file = ${lines_per_file}" 
wc -l fold.*
