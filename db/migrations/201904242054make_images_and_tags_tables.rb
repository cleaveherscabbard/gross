def query
  <<-SQL
     create table if not exists images (
       id INTEGER PRIMARY KEY,
       name varchar(50) NOT NULL,
       folder varchar(50),
     );

     create table tags (
       primary_key INTEGER PRIMARY KEY,
       image_id integer, NOT NULL,
       FOREIGN KEY (image_id) REFERENCES images(id)
     );
   SQL
end
