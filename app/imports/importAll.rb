#TODO Env vars should be set by a config file
# also this should be run in a container
LOAD_PATH = "/home/uberguby/Workspace/gross/app"
$LOAD_PATH.unshift LOAD_PATH unless $LOAD_PATH.include? LOAD_PATH

Dir.children(LOAD_PATH + "/abstractClasses").each do |child|
  require "abstractClasses/" + child
end

Dir.children(LOAD_PATH + "/models").each do |child|
  require "models/" + child
end

Dir.children(LOAD_PATH + "/controllers").each do |child|
  require "controllers/" + child
end

$LOAD_PATH.shift
