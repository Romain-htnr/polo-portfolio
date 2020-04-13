class Project < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  belongs_to :skill
end
