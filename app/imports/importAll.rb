#TODO Env vars should be set by a config file
LOAD_PATH = "C:/Users/John/Documents/ruby/gross/app"
$LOAD_PATH.unshift LOAD_PATH unless $LOAD_PATH.include? LOAD_PATH

Dir.new(LOAD_PATH + "/abstractClasses").children.each do |child|
  require "abstractClasses/" + child
end

Dir.new(LOAD_PATH + "/models").children.each do |child|
  require "models/" + child
end

Dir.new(LOAD_PATH + "/controllers").children.each do |child|
  require "controllers/" + child
end

$LOAD_PATH.shift
