#!/usr/bin/perl

# Bisect fm_sample_independent.tab
# Filename provided in command line

# Usage: bisect.pl fm_sample_independent.tab > out-file

use bytes;

# Take input from file
$samplefile = shift;
open(TAB, "<$samplefile") or die "Can't open file $samplefile \n";

open(my $fh, '>>', 'headerline.out');
print $fh <TAB>;
close $fh;
print "Done. \n";
