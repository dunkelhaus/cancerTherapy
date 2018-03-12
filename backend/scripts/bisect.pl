#!/usr/bin/perl

# Bisect fm_sample_independent.tab
# Filename provided in command line

# Usage: bisect.pl fm_sample_independent.tab > out-file

use bytes;

# Take input from file
$samplefile = shift;
open(TAB, "<$samplefile") or die "Can't open file $samplefile \n";

$count = 0;
open(my $headerline, '>>', 'headerline.out'); # Configure out file for headerline
open(my $lungad1, '>>', 'lungad1.out'); # Configure out file for lungad_1
open(my $melanoma1, '>>', 'melanoma1.out'); # Configure out file for melanoma_1

while($line = <TAB>) {
    if ($count == 0) { # This is for the header line
        print $headerline $line;
        close $headerline;
    }
    else {
        if ($count == 2) { # This is for the lungad_1 line
            print $lungad1 $line;
            close $lungad1;
        }
	    else {
            if ($count == 44) { # This is for the melanoma_1 row
                print $melanoma1 $line;
                close $melanoma1;
            }
            else {
                print "Other lines \n";
            }
        }
    }
    $count++;
}

print "Done. \n";
