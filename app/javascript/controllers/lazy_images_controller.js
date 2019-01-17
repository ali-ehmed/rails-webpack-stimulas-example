import { Controller } from "stimulus"

export default class extends Controller {
  connect() {
    let src = this.data.get('src');
    // Setting time out just to simulate heavy image loading from cloud
    setTimeout(() => { this.element.setAttribute('src', src) }, 500);
  }
}
