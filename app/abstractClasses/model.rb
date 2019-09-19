require 'active_record'

ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: 'gross.db'
)

class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def self.[](ix)
    if ix == 0
      ix = 1
      puts "warning: sql indexes start at 1"
    end
    self.find(ix)
  end
end
