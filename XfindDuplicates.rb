require "sqlite3"
require "digest"

db = SQLite3::Database.new "gross.db"

hashed_images = Hash.new { |h,k|h[k]=[] }
dupe_ids = []

WD = "library/media/"
list = db.execute "SELECT id, folder, name FROM images"
list.each do |id, folder, name|
  fh = Digest::MD5.base64digest(File.read WD + folder + "/" + name)
  # puts fh.class
  hashed_images[fh] << id
end

hashed_images.each do |k, v|
  if v.length > 1
    dupe_ids += v
  end
end

File.open("tmp","w").write(dupe_ids)
# puts dupe_ids
# Digest::MD5.hexdigest
