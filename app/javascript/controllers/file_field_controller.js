import { Controller } from 'stimulus';
import * as FilePond from 'filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

export default class extends Controller {
  connect() {
    console.log(this.element);
    FilePond.registerPlugin(FilePondPluginImagePreview);
    FilePond.create(this.element);
    FilePond.setOptions({
      imagePreviewMaxHeight: 500
    });
  }
}