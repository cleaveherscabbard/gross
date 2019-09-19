class Favorites < ApplicationRecord
  belongs_to :image,
    class_name: "Image",
    foreign_key: "image_id"
end
