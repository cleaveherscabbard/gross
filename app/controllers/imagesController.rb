# TODO move response.to_json operation to router
require 'sqlite3'
require 'byebug'

require_relative 'databaseService.rb'

class ImagesController
  @@mediaLib="./library/media"

  def initialize(params)
    @params = params
    @db = DatabaseService.new "gross.db"
  end

  def get_image_ids
    ids = Image.all
    if @params['tagFilters']
      ids = ids.tagged(@params['tagFilters'])
    end
    if @params['folderFilters']
      ids = ids.where({folder: @params['folderFilters']})
    end
    if @params['favoritesOnly']
      ids = ids.favorites
    end
    ids = ids.map{|e|e.id}.flatten
    return{image_ids: ids}
  end

  def favorite
    image = Image.find(@params[:id])
    image.favorite = !image.favorite
    image.save!
    favorites = Image.favorites.ids
    return {message: "replace with a real message", favorites: favorites}
  end

  def ghost
    image = Image.find(@params[:id])
    image.softDeleted = !image.softDeleted
    image.save!
    get_image_ids
  end

  def get_image
    image = Image.find(@params['image_id'])
    path = "#{@@mediaLib}/#{image.folder}/#{image.name}"

    return File.open(path)
  end

end
