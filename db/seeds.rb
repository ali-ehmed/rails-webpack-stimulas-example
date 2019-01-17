BOOKS = [
  {
    title: 'PostGIS in Action',
    author: 'Regina O. Obe and Leo S. Hsu',
    isbn: '9781935182269',
    description: 'PostGIS in Action teaches readers of all levels to write spatial queries that solve real-world problems. It first gives you a background in vector-based GIS and then quickly moves into analyzing, viewing, and mapping data.',
    cover: {
      path: File.join(File.dirname(__FILE__ ), 'data', 'post_gis.png'),
      filename: 'post_gis.png'
    }
  },
  {
    title: 'Think Like a Data Scientist ',
    author: 'Brian Godsey',
    isbn: '9781633430273',
    description: 'Think Like a Data Scientist presents a step-by-step approach to data science, combining analytic, programming, and business perspectives into easy-to-digest techniques and thought processes for solving real world data-centric problems.',
    cover: {
      path: File.join(File.dirname(__FILE__ ), 'data', 'data_sc.png'),
      filename: 'data_sc.png'
    }
  },
  {
    title: 'Ruby In Practice',
    author: 'Jeremy McAnally and Assaf Arkin',
    isbn: '9781933988474',
    description: 'Like Ruby itself, Ruby in Practice will make you more productive. The book shows you practical techniques and strategies for small projects and large-scale environments. A cookbook-style reference, it gives you concrete examples of systems integration, messaging, web development, and databases, all in a clear problem/ solution format.',
    cover: {
      path: File.join(File.dirname(__FILE__ ), 'data', 'ruby.png'),
      filename: 'ruby.png'
    }
  }
]

BOOKS.each do |book_info|
  book = Book.create(book_info.without(:cover))
  book.cover.attach(io: File.open(book_info[:cover][:path]), filename: book_info[:cover][:filename])
end

