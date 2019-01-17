class Book < ApplicationRecord
  RATING_RANGE = (1..5)
  has_one_attached :cover
  default_scope { order(created_at: :desc) }
end
