class TagsController
  def initialize(params)
    @params = params
    @db = DatabaseService.new "gross.db"
  end

  def get_tags_for_image
    image_id = @params['image_id']
    db_response = @db.get_tags_by_image_id(image_id).flatten
  end

  def validate_post_data
    tag = @params['tag']
    image_id = @params['image_id']

    #tag not empty
    return {message: "tag must not be empty"} if tag.empty?

    #tag not already exist
    #in rails there was a way to enforce uniqueness among two columns
    db_validate = @db.execute "SELECT * FROM tags WHERE image_id=#{image_id} AND tag='#{tag}'"
    if db_validate.length > 0
      return {message: "This picture already has this tag."}
    end

    return nil
  end

  def get_available_tags
    available_tags = @db.get_resource_list_from_table("tag","tags").flatten;
  end

  def post_image_tag
    begin
      tag = @params['tag']
      image_id = @params['image_id']

      data_invalid = validate_post_data
      if data_invalid
        return data_invalid
      end

      @db.insert_tag_for_image(tag, image_id)
      img_tags =  get_tags_for_image
      available_tags = get_available_tags
      return {message: "successfully tagged image", img_tags: img_tags, available_tags: available_tags}

    rescue Exception => e
      puts e.message
      puts e.backtrace
      return {message: "something went wrong while tagging the image"}
    end
  end
end
