#!/bin/bash

: '
$1 is row tag
$2 is column tag
$3 is numRows
$4 is numCols
$5 is path
'

DIR=$5
negOne=-1
#cat /home/skjena/data/fm_sample_independent.tab | tail -n +2 > f1.tab
#sed -n 1,$3p f1.tab > f2.tab
sed -n 1,$3p /home/skjena/data/fm_sample_independent.tab > f2.tab
sed -e "s/NA/$negOne/" f2.tab > f.tab # Convert NA to -1
echo -e "CANCERS $(cat f.tab)" > d.tab
awk -v f=1 -v t=$4 '{for(i=f;i<=t;i++) printf("%s%s",$i,(i==t)?"\n":OFS)}' d.tab > file.tab
cat file.tab | tr "\ " "," > "$DIR/data.csv"

rm file.tab
rm d.tab
#rm f1.tab
rm f2.tab
rm f.tab
