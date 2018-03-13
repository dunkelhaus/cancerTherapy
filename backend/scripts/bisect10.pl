#!/usr/bin/perl

# Bisect fm_sample_independent.tab
# Filename provided in command line

# Usage: bisect10.pl fm_sample_independent.tab > out-file

use bytes;

# Take input from file
$samplefile = shift;
open(TAB, "<$samplefile") or die "Can't open file $samplefile \n";

$count = 0;
# open(my $headerline, '>>', 'headerline.out'); # Configure out file for headerline
open(my $lungad10, '>>', 'lungad10.out'); # Configure out file for lungad_1
open(my $melanoma10, '>>', 'melanoma10.out'); # Configure out file for melanoma_1

while($line = <TAB>) {
    if ($count == 0) { # This is for the header line
        print "Hi \n";
    }
    else {
        if ($count == 1) { # This is for the lungad_10 line
            print $lungad10 $line;
            close $lungad10;
        }
	    else {
            if ($count == 43) { # This is for the melanoma_10 row
                print $melanoma10 $line;
                close $melanoma10;
            }
            else {
                print "Other lines \n";
            }
        }
    }
    $count++;
}

print "Done. \n";
