#!/usr/bin/perl
use strict;
use warnings;

use Text::CSV;

my @data;   # 2D array for CSV data
my $file = 'tokenCancer.csv';

my $csv = Text::CSV->new;
open my $fh, '<', $file or die "Could not open $file: $!";

while( my $row = $csv->getline( $fh ) ) {
    #shift @$row;        # throw away first value
    push @data, $row;

}
foreach my $row (@data) {
    foreach my $element (@$row) {
        print $element, ' '
    }
    print "\n"
}
#print $data[0][1], "\n";
