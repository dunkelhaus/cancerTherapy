#!/usr/bin/ruby
require 'csv'
require 'pp'

file = '/home/skjena/data/testData/fold_2.csv'
rows = CSV.parse(file, headers: true, converters: [CSV::Converters[:float]])
pp rows[1]
