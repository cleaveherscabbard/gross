# #!/usr/bin/env ruby
require 'pry'
require 'sqlite3'
require 'byebug'
#
@db = SQLite3::Database.new('gross.db');
db = @db

def get_tables
  @db.execute <<SQL
        SELECT name FROM sqlite_master
            WHERE type='table'
            ORDER BY name;"
SQL
end

Pry.hooks.add_hook(:after_read, "find_query") do |string,  pry|
    if string.start_with?("x")
      pry.eval_string = "db.execute '#{string[2... -1]}'"
    end
end


pry
