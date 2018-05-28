#!/usr/bin/ruby
require_relative './helpers'
require 'csv'

print_memory_usage do
  print_time_spent do
    sum = 0

    CSV.foreach('/home/skjena/data/out/fm_sample_independent.csv', headers: true) do |row|
      
    end

    puts "Sum: #{sum}"
  end
end

