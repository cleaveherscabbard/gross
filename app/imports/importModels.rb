LOAD_PATH = "C:/Users/John/Documents/ruby/gross/app"
$LOAD_PATH.unshift LOAD_PATH unless $LOAD_PATH.include? LOAD_PATH

require "abstractClasses/model.rb"

Dir.new(LOAD_PATH + "/models").children.each do |child|
  require "models/" + child
end

$LOAD_PATH.shift
