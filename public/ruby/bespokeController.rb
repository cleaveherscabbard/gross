# TODO move response.to_json operation to router
require 'sqlite3'
require 'byebug'

require_relative 'databaseService.rb'
require_relative 'imagesController'

class BespokeController
  def initialize(params)
    @params = params
    @db = DatabaseService.new "gross.db"
  end

  def get_state
    folders = @db.get_resource_list_from_table("folder","images").flatten
    tags = @db.get_resource_list_from_table("tag","tags").flatten
    image_ids = ImagesController.new(@params).get_image_ids[:image_ids]
    favorites = FavoritesController.new(@params).get_favorites
    data = {
      folders: folders,
      tags: tags,
      image_ids: image_ids,
      favorites: favorites
    }

  end



  def get_filters
    folders = @db.get_resource_list_from_table("folder","images").flatten;
    tags = @db.get_resource_list_from_table("tag","tags").flatten;
    return { folders: folders, tags: tags}
  end


  def getListByFolder
    list = Hash.new { |list, folder| list[folder] = [] }

    db_response = db.execute <<-SQL
      SELECT id, folder
      FROM images
    SQL

    db_response.each do |id, folder|
      list[folder] << id
    end
    return list

  end


end
