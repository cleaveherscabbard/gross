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
    folder_filters = @params['folderFilters']
    tag_filters = @params['tagFilters']
    favorites_only = @params['favoritesOnly']
    debugger
    db_response = @db.get_image_ids_by_filter(
      extensions: ["png", "jpg", "gif"],
      folder_filters: folder_filters,
      tag_filters: tag_filters,
      favorites_only: favorites_only
    ).flatten
    return{image_ids: db_response}
  end

  def ghost_image
    image_id = @params['image_id']
    @db.insert_ghost(image_id)
    get_image_ids

  end

  def get_image
    image_id = @params['image_id']
    db_response = @db.get_image_data_by_id(image_id)

    return 404 if db_response.empty?

    mediaLib="./library/media"
    filename, folder = db_response[0]
    path = "#{mediaLib}/#{folder}/#{filename}"

    return File.open(path)
  end

end
