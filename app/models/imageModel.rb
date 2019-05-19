class Image < ApplicationRecord
  has_many :tags,
    class_name: "Tag",
    foreign_key: "image_id"

  default_scope {where(softDeleted: false)}
  scope :favorites, -> {where(favorite: true)}
  scope :in_folders, ->(*args){
    where(folder: args)
  }

  scope :tagged, ->(*args){
    includes(:tags).where(
      tags: {
        tag: args
      }
    )
  }

  def self.folders
    all.map{|e|e.folder}
  end

  def initialize(params)
    @params = params
  end

  def tag_names
    self.tags.map{|e|e['tag']}
  end

  def delete
    self.softDeleted=true
  end
end
