import { Controller } from 'stimulus';
import * as FilePond from 'filepond';
import { DirectUpload } from "activestorage";
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

export default class extends Controller {
  connect() {
    const form         = document.querySelector('form');
    const hiddenField  = document.createElement('input');
    const submitButton = form.querySelector(`input[type='submit']`);

    FilePond.registerPlugin(FilePondPluginImagePreview);
    const pond = FilePond.create(this.element);
    const url  = this.data.get('server-url');
    FilePond.setOptions({
      imagePreviewMaxHeight: 500,
      instantUpload: false,
      server: {
        process: (fieldName, file, metadata, load, error, progress, abort) => {
          let upload = new DirectUpload(file, url);
          upload.create((_error_, blob) => {
            if (_error_) {
              error('Failed To Upload!');
            } else {
              hiddenField.setAttribute('name', this.element.getAttribute('name'));
              hiddenField.setAttribute('type', 'hidden');
              hiddenField.setAttribute('value', blob.signed_id);
              form.appendChild(hiddenField);
              load(blob.signed_id);
            }
          });
          }
        }
    });
    form.addEventListener('submit', (event) => {
      if (!hiddenField.value) {
        Rails.stopEverything(event);
        pond.processFile();
      }
    });
    const fpond = document.querySelector('.filepond--root');
    fpond.addEventListener('FilePond:processfile', () => {
      this.element.remove();
      Rails.enableElement(submitButton);
      submitButton.click();
    });
  }
}