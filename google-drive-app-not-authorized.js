/**
@license
Copyright 2018 The Advanced REST client authors <arc@mulesoft.com>
Licensed under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License. You may obtain a copy of
the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations under
the License.
*/
import {PolymerElement} from '../../@polymer/polymer/polymer-element.js';
import {html} from '../../@polymer/polymer/lib/utils/html-tag.js';
import '../../@polymer/paper-button/paper-button.js';
import '../../@polymer/iron-flex-layout/iron-flex-layout.js';
/**
 * An element that explains why the user can't open the file with
 * the application because the app is not on file's ACL list.
 *
 * Custom property | Description | Default
 * ----------------|-------------|----------
 * `--google-drive-app-not-authorized` | Mixin applied to this elment | `{}`
 * `--google-drive-browser-title` | | `{}`
 * `--google-drive-app-not-authorized-hint-color` | | `rgba(0,0,0,0.54)`
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 * @memberof UiElements
 */
class GoogleDriveAppNotAuthorized extends PolymerElement {
  static get template() {
    return html`
    <style>
    :host {
      display: block;
      padding-left: 16px;
      padding-right: 16px;
      @apply --arc-font-body1;
      @apply --layout-vertical;
      @apply --layout-flex;
      @apply --google-drive-app-not-authorized;
    }

    h2 {
      @apply --arc-font-headline;
      @apply --google-drive-browser-title;
    }

    p {
      margin: 1em 0;
    }

    p.hint {
      margin: 1em 0;
      color: var(--google-drive-app-not-authorized-hint-color, currentColor);
    }

    .actions {
      margin: 12px 0;
    }

    .main-action {
      @apply --action-button;
      height: 36px;
      font-size: 14px;
    }

    .secondary-action {
      color: var(--secondary-action-button-color, var(--primary-color));
      height: 36px;
      font-size: 14px;
    }

    .link-info {
      background-color: rgba(0, 0, 0, 0.2);
      padding: 8px;
    }

    label {
      font-weight: 500;
    }

    code {
      display: block;
    }

    #itemViewLink:hover {
      text-decoration: underline;
      cursor: pointer;
    }
    </style>
    <h2>Open file via Drive UI</h2>
    <div>
      <p>The file <b>[[item.name]]</b> can't be opened by the app because it <b>wansn't created by this application</b>.</p>
      <p>Please, open Google Drive web application, select the file and choose "Open with" and then this application name.</p>
      <p class="hint">You have to do this only once for each file.</p>

      <section class="link-info">
        <label for="itemViewLink">Link to the file</label>
        <code id="itemViewLink" on-click="openDrive">[[item.webViewLink]]</code>
      </section>

      <div class="actions">
        <paper-button raised="" class="main-action" on-click="openDrive">Open file in Drive UI</paper-button>
        <paper-button on-click="back" class="secondary-action">Back to the list</paper-button>
      </div>
    </div>
`;
  }

  static get properties() {
    return {
      // A drive file object
      item: Object
    };
  }

  back() {
    this.dispatchEvent(new CustomEvent('back'));
  }

  openDrive() {
    const url = this.item.webViewLink;
    const e = this._dispatchOpenExtarnal(url);
    if (e.defaultPrevented) {
      return;
    }
    window.open(url);
  }

  _dispatchOpenExtarnal(url) {
    const e = new CustomEvent('open-external-url', {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {
        url
      }
    });
    this.dispatchEvent(e);
    return e;
  }
}
window.customElements.define('google-drive-app-not-authorized', GoogleDriveAppNotAuthorized);