#!/bin/bash

: '
$1 is row tag
$2 is column tag
$3 is numRows
$4 is numCols
$5 is path
'

DIR=$5
cat fm_sample_independent.tab | tail -n +2 > f1.tab
sed -n 1,$3p f1.tab > f.tab
awk -v f=1 -v t=$4 '{for(i=f;i<=t;i++) printf("%s%s",$i,(i==t)?"\n":OFS)}' f.tab > file.tab
cat file.tab | tr "\ " "," > "$DIR/data.csv"
rm file.tab
rm f1.tab
rm f.tab
