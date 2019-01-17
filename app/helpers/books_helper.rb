module BooksHelper
  def book_cover_tag(book, options={})
    cover = if book.cover.attached?
              url_for(book.cover)
            else
              'https://via.placeholder.com/250X280'
            end
    image_tag('', options.merge({data: {'lazy-images-src': cover, controller: 'lazy-images'}}))
  end
end
