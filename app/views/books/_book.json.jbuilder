json.extract! book, :id, :title, :author, :isbn, :rating, :description, :created_at, :updated_at
json.url book_url(book, format: :json)
