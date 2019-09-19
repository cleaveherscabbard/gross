require 'sqlite3'
require 'byebug'
class DatabaseService < SQLite3::Database


  def get_image_ids_by_filter(**args)

    query = <<-SQL
      SELECT DISTINCT images.id
      FROM images
      LEFT JOIN tags
        ON images.id = tags.image_id
      LEFT JOIN favorites
        ON images.id = favorites.image_id
    SQL
    # LEFT JOIN ghosts
    #   ON images.id = ghosts.image_id


    # I did keep trying to construct a "where_clause_constructor" method,
    # but I felt that it ended up taking SO many parameters and be SO
    # confusing that it was better to just include the loops. It's not
    # very DRY, but it's clear, it doesn't require quite so much thinking
    # on the part of the next person to read it. I assume this is a solved
    # problem, and I just need to find it.

    #

    where_clause = " WHERE ("#(ghosts.ghost=null) AND ("

    args[:extensions].each do |ext|
      where_clause += "name LIKE '%.#{ext}' OR "
    end
    where_clause.chomp! " OR "

    if args[:folder_filters]
      where_clause += ") AND ("

      args[:folder_filters].each do |folder|
        where_clause += " images.folder='#{folder}' OR "
      end
      where_clause.chomp! " OR "
    end

    if args[:tag_filters]
      where_clause += ") AND ("

      args[:tag_filters].each do |tag|
        where_clause += " tags.tag='#{tag}' OR "
      end
      where_clause.chomp! " OR "
    end

    if args[:only_favorites]
      where_clause += ") AND ( favorites.favorite=\"true\""
    end

    where_clause += ")"

    query += where_clause
     # debugger

    return execute query
  end

  #TODO so according to this https://stackoverflow.com/questions/978061/http-get-with-request-body I shouldn't even be including a body in my search params. Barring query strings, this means my filters should be back end oriented. But... then I need to do sessions.

  def get_image_data_by_id(image_id)
    execute <<-SQL
      SELECT name, folder
      FROM images
      WHERE id=#{image_id}
      LIMIT 1
    SQL
  end



  def get_tags_by_image_id(image_id)
    execute <<-SQL
      SELECT tag
      FROM tags
      WHERE image_id=#{image_id}
    SQL
  end

  def insert_tag_for_image(tag, image_id)
    execute "INSERT INTO tags(tag, image_id) VALUES (?, ? )", [tag, image_id]
  end

  def get_resource_list_from_table(resource, table)
    execute <<-SQL
      SELECT DISTINCT #{resource} FROM #{table}
    SQL
  end

  def insert_ghost(image_id)
    execute "INSERT INTO ghosts(image_id) VALUES(?)", [image_id]
  end

  def get_favorites_index
    execute <<-SQL
      SELECT image_id FROM favorites WHERE favorite="true"
    SQL
  end

  def get_favorite_status(image_id)
    execute <<-SQL
      SELECT favorite
        FROM favorites
        WHERE image_id=#{image_id}
    SQL
  end

  def insert_favorite(image_id)
    execute "INSERT INTO favorites(image_id, favorite) VALUES (?, ?)", [image_id, "true"]
  end

  def soft_delete_favorite(image_id)
    execute <<-SQL
      UPDATE favorites
        SET favorite=\"false\"
        WHERE image_id=#{image_id}
    SQL
  end

  def reinstate_favorite(image_id)
    execute <<-SQL
      UPDATE favorites
        SET favorite=\"true\"
        WHERE image_id=#{image_id}
    SQL
  end
# UNUSED BUT ALREADY WRITTEN
  def get_all_tags_by_image_id
    execute <<-SQL
      SELECT image_id, tag
      FROM tags
      ORDER BY image_id
    SQL
  end
end
