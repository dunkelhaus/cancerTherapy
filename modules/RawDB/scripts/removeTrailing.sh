#!/bin/bash
 for fname in tokenCancer.csv
 do
       cat $fname | sed 's/.$//' > tmp.tmp
       mv tmp.tmp $fname
 done
