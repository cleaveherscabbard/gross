require_relative 'databaseService.rb'

class FavoritesController
  def initialize(params)
    @params = params
    @db = DatabaseService.new "gross.db"
  end

  def get_favorites
    @db.get_favorites_index.flatten
  end

  def handle_favorite
    image_id = @params['image_id']
    status = @db.get_favorite_status(image_id)
    message = "Image favorited";
    if status.empty?
      db_response = @db.insert_favorite(image_id)
    elsif status[0][0] == "true"
      db_response = @db.soft_delete_favorite(image_id)
      message = "image un-favorited"
    elsif status[0][0] == "false"
      db_response = @db.reinstate_favorite(image_id)
    end

    return {message: message, favorites: get_favorites}
  end

end
