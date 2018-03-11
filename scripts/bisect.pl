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
open(my $lungadL1, '>>', 'lungadL1.out'); # Configure out file for lungadL1

while($line = <TAB>) {
    if ($count == 0) { # This is for the header line
        print $headerline $line;
        close $headerline;
        $count++;
    }
    if ($count == 1) { # This is for the header line
        print $lungadL1 $line;
        close $lungadL1;
        $count++;
    }
    else {
        print "Running through other lines here. \n"
    }
}
print "Done. \n";
