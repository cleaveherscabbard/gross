# require 'active_record'
# require 'pry'
#
# FileUtils.cp("gross.db","db/backups/LAST_UPDATE_BEFORE_MIGRATION_#{Time.now().to_i}_gross.db.backup")
#
# ActiveRecord::Base.establish_connection(
#   adapter: 'sqlite3',
#   database: 'gross.db'
# )
# puts ActiveRecord::Base.connection.columns("images").map{|e|e.name}
#
# ActiveRecord::Schema.define do
#   add_column :images, :favorite, :boolean, default: false
# end
#
# puts ActiveRecord::Base.connection.columns("images").map{|e|e.name}



# class ApplicationRecord < ActiveRecord::Base
#   self.abstract_class = true
# end

# pry

# ActiveRecord::Schema.define do
#   change_table :images do |t|
#     t.boolean ghost
#   end
# end
