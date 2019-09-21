LOAD_PATH = "/home/uberguby/Workspace/gross/app"
$LOAD_PATH.unshift LOAD_PATH unless $LOAD_PATH.include? LOAD_PATH

require "abstractClasses/model.rb"

Dir.each_child(LOAD_PATH + "/models") do |child|
  require "models/" + child
end

$LOAD_PATH.shift
