# TODO move response.to_json operation to router
require 'sqlite3'
require 'byebug'

require_relative 'databaseService.rb'


class BespokeController
  def initialize(params)
    @params = params
    @db = DatabaseService.new "gross.db"
  end

  def get_state
    folders = Image.folders.uniq
    tags = Tag.tags.uniq
    image_ids = ImagesController.new(@params).get_image_ids[:image_ids]
    favorites = Image.favorites
    data = {
      folders: folders,
      tags: tags,
      image_ids: image_ids,
      favorites: favorites
    }

  end



  def get_filters
    folders = Image.folders.uniq
    tags = Tag.tags.uniq
    return { folders: folders, tags: tags}
  end





end
