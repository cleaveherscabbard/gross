# #!/usr/bin/env ruby
require 'rubygems'
require 'bundler/setup'
require 'pry'
require 'byebug'
require 'active_record'
require_relative "./app/imports/importModels.rb"

if Image.first == []
  Image.all.select{|e| e.favorite == false}.each{|e|e.update_attribute(:favorite, true); e.update_attribute(:favorite, false);}
  Image.all.select{|e| e.favorite == true}.each{|e|e.update_attribute(:favorite, false); e.update_attribute(:favorite, true);}
  Image.all.select{|e| e.softDeleted == false}.each{|e|e.update_attribute(:softDeleted, true); e.update_attribute(:softDeleted, false);}
  Image.all.select{|e| e.softDeleted == true}.each{|e|e.update_attribute(:softDeleted, false); e.update_attribute(:softDeleted, true);}
end

pry
