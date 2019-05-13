require 'sinatra'
require 'sinatra/custom_logger'
require 'logger'
require 'byebug'

require_relative './public/ruby/imagesController'
require_relative './public/ruby/tagsController'
require_relative './public/ruby/favoritesController'
require_relative './public/ruby/bespokeController'
require_relative './db/readyDB.rb'

set :logger, Logger.new(STDOUT)

get '/' do
  File.read('public/HTML/index.html')
end


# images
get '/images/index' do
  controller = ImagesController.new params
  controller.get_image_ids.to_json
end

get "/images/:image_id" do
  controller = ImagesController.new params
  controller.get_image
end

post '/ghost/:image_id/ghost' do
  controller = GhostsController.new params
  controller.handle_favorite.to_json
end


# tags
post '/tags/:image_id' do
  controller = TagsController.new params
  response = controller.post_image_tag.to_json
end

get '/tags/:image_id' do
  controller = TagsController.new params
  controller.get_tags_for_image.to_json
end

# favorites
get '/favorites' do
  controller = FavoritesController.new params
  controller.get_favorites.to_json
end

post '/favorites/:image_id' do
  controller = FavoritesController.new params
  controller.handle_favorite.to_json
end

# ghost



# bespoke
get '/getState' do
  controller = BespokeController.new params
  controller.get_state.to_json
end

get '/getFilters' do
  controller = BespokeController.new params
  controller.get_filters.to_json
end
