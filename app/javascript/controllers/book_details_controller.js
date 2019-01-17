import { Controller } from "stimulus"

export default class extends Controller {
  connect() {
    let bookId = this.data.get('id');
    this.readMoreLink = document.querySelector(`a.read-more[data-book-id='${bookId}']`);
    this.readMoreLink.classList.add('d-none');
  }

  readLess(event) {
    Rails.stopEverything(event);
    this.element.remove();
    this.readMoreLink.classList.remove('d-none');
  }

  rate(event) {
    let rate = event.target.getAttribute('data-rate');
    let url  = this.data.get('bookUrl');
    let data  = new FormData();
    data.set('rating', rate);

    Rails.ajax({
      url: url,
      type: 'put',
      data: data,
      dataType: 'json',
      error: () => { console.log('Error') },
      success: (book) => {
        let ratingStars = this.element.querySelectorAll('.rating .fa-star');
        let ratingStarsReadOnly = document.querySelectorAll(`.rating-read-only[data-book-id='${book.id}'] .fa-star`);
        this.updateRating(book.rating, ratingStars);
        this.updateRating(book.rating, ratingStarsReadOnly);
      }
    });
  }

  updateRating(rating, elements) {
    for (let [index, element] of elements.entries()) {
      if (index < rating ) {
        element.classList.remove('far');
        element.classList.add('fas');
      } else {
        element.classList.remove('fas');
        element.classList.add('far');
      }
    }
  }
}
