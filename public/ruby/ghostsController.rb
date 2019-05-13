require_relative 'databaseService.rb'

class GhostssController
  def initialize(params)
    @params = params
    @db = DatabaseService.new "gross.db"
  end

  def get_ghost_index
    @db.select_ghost_image_ids
  end



  def ghost_image
    image_id = @params['image_id']
    @db.insert_ghost_image_id(image_id)
    return {message: message, favorites: }
  end

end
