require 'active_record'

FileUtils.cp("gross.db","db/backups/LAST_UPDATE_BEFORE_MIGRATION_#{Time.now().to_i}_gross.db.backup")

ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: 'gross.db'
)


puts ActiveRecord::Base.connection.columns("images").map{|e|e.name}
ActiveRecord::Schema.define do
  add_column :images, :softDeleted, :boolean, default: false
end
puts ActiveRecord::Base.connection.columns("images").map{|e|e.name}
