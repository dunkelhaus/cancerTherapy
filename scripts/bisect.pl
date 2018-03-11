#!/usr/bin/perl

# Bisect fm_sample_independent.tab
# Filename provided in command line

# Usage: bisect.pl fm_sample_independent.tab > out-file

use bytes;

# Take input from file
$samplefile = shift;
open(TAB, "<$samplefile") or die "Can't open file $samplefile \n";

$count = 0;
open(my $fh, '>>', 'headerline.out'); # Configure out file
while($line = <TAB>) {
    if ($count < 1) {
        print $fh $line;
        close $fh;
        $count++;
    }
    else {
        print "Running through other lines here."
    }
}
print "Done. \n";
