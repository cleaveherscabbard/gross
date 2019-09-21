require 'rubygems'
require 'bundler/setup'

require "sqlite3"
require "set"
require "fileutils"

FileUtils.cp("gross.db","db/backups/#{Time.now().to_i}_gross.db.backup")



db = SQLite3::Database.new "gross.db"

# TODO add column for extension
db.execute <<-SQL
   CREATE TABLE IF NOT EXISTS images (
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     name varchar(50) NOT NULL,
     folder varchar(50)
   );
SQL

db.execute <<-SQL
   CREATE TABLE IF NOT EXISTS tags (
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     tag varchar(50) NOT NULL,
     image_id integer NOT NULL,
     FOREIGN KEY (image_id) REFERENCES images(id)
   );
  SQL

db.execute <<-SQL
   CREATE TABLE IF NOT EXISTS favorites (
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     image_id integer NOT NULL,
     favorite BOOLEAN,
     FOREIGN KEY (image_id) REFERENCES images(id)
   );
  SQL

db.execute <<-SQL
   CREATE TABLE IF NOT EXISTS ghosts (
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     image_id integer NOT NULL,
     ghost BOOLEAN,
     FOREIGN KEY (image_id) REFERENCES images(id)
   );
  SQL

# 0: possibleDuplicate, 1: confirmedDuplicate

  # db.execute <<-SQL
  #    CREATE TABLE IF NOT EXISTS duplicates (
  #      id INTEGER PRIMARY KEY AUTOINCREMENT,
  #      confirmed BOOLEAN
  #      image_id integer NOT NULL,
  #      FOREIGN KEY (image_id) REFERENCES images(id)
  #    );
  #   SQL

  # db.execute <<-SQL
  #    CREATE TABLE IF NOT EXISTS sets (
  #      id INTEGER PRIMARY KEY AUTOINCREMENT,
  #      set_id INTEGER,
  #      image_id integer NOT NULL,
  #      FOREIGN KEY (image_id) REFERENCES images(id)
  #    );
  #   SQL

  # db.execute <<-SQL
  #    CREATE TABLE IF NOT EXISTS tagSets (
  #      id INTEGER PRIMARY KEY AUTOINCREMENT,
  #      name, varchar(50) NOT NULL,
  #    );
  #   SQL

  # db.execute <<-SQL
  #    CREATE TABLE IF NOT EXISTS tagsJoinTagSets (
  #      id INTEGER PRIMARY KEY AUTOINCREMENT,
  #      set_id INTEGER,
  #      image_id integer NOT NULL,
  #      FOREIGN KEY (image_id) REFERENCES images(id)
  #    );
  #   SQL

# update entries in folders
media = Dir.new("library/media")
media.each_child do |subd|
  alreadySaved = Set.new
  db.execute("SELECT name FROM images WHERE folder='#{subd}'").flatten.each do |name|
    alreadySaved.add subd+name
  end

  Dir.new(media.path + "/" + subd).each_child do |filename|
    unless alreadySaved.include? subd+filename
      db.execute "INSERT INTO images(name, folder) VALUES (?, ? )", [filename, subd]
    end
  end

end



db.close
