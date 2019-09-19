class Tag < ApplicationRecord
  belongs_to :image,
    class_name: "Image",
    foreign_key: "image_id"

  def self.tags
    all.map{|e|e.tag}
  end
end
