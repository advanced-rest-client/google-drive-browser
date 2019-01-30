/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   google-drive-browser.html
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

/// <reference path="../polymer/types/polymer-element.d.ts" />
/// <reference path="../polymer/types/lib/utils/render-status.d.ts" />
/// <reference path="../iron-pages/iron-pages.d.ts" />
/// <reference path="../iron-ajax/iron-ajax.d.ts" />
/// <reference path="../paper-progress/paper-progress.d.ts" />
/// <reference path="../iron-flex-layout/iron-flex-layout.d.ts" />
/// <reference path="../error-message/error-message.d.ts" />
/// <reference path="../arc-icons/arc-icons.d.ts" />
/// <reference path="../events-target-behavior/events-target-behavior.d.ts" />
/// <reference path="google-drive-authorize.d.ts" />
/// <reference path="google-drive-list-view.d.ts" />
/// <reference path="google-drive-app-not-authorized.d.ts" />

declare namespace UiElements {

  /**
   * A file browser for Google Drive
   *
   * Required properties are `accessToken` and `apiKey`.
   *
   * ## List sizing
   *
   * The list uses `iron-list` which requires to be sized. It has to have
   * a height otherwise it will have height of 0.
   *
   * You can use flex layout to streach the component to the height of the page
   * or just add `height: 100%` to the element styles.
   *
   * ## Styling
   *
   * Custom property | Description | Default
   * ----------------|-------------|----------
   * `--google-drive-browser` | Mixin applied to the element | `{}`
   * `--arc-font-headline` | Mixin applied to the header | `{}`
   * `--action-button` | Mixin applied to the main action button | `{}`
   * `--secondary-action-button-color` | Color of the secondary acction button | `--primary-color`
   * `--google-drive-browser-title` | Mixin applied to the headers | `{}`
   */
  class GoogleDriveBrowser extends
    ArcBehaviors.EventsTargetBehavior(
    Object) {

    /**
     * True if Google Drive operation pending
     */
    loading: boolean|null|undefined;

    /**
     * File search term entered by the user.
     */
    query: string|null|undefined;

    /**
     * List of files retreived from Drive API.
     */
    items: any[]|null|undefined;

    /**
     * OAuth2 scope for drive.
     */
    scope: string|null|undefined;

    /**
     * An error message from the API if any.
     */
    errorMessage: string|null|undefined;

    /**
     * If set it generates a query to Google Drive that contains query to file
     * properies.
     * E.g. (part of the query):
     * ```
     * and properties has { key='propertyKey' and value='propertyValue'}
     * ```
     *
     * Keys of this object will be put into the `key` part of query and
     * value of the key to the `value` property.
     *
     * For example:
     * ```
     * queryProperties = {
     *   'isExport': true
     * }
     * ```
     */
    queryProperties: object|null|undefined;

    /**
     * If true then it uses a negation for `queryProperties` (adding `not`)
     * before the query
     */
    queryPropertiesNegation: boolean|null|undefined;

    /**
     * A `pageSize` property value to be send to Drive endpoint.
     */
    querySize: number|null|undefined;

    /**
     * Mime type of the file to search.
     */
    mimeType: string|null|undefined;

    /**
     * Currently opened view
     */
    readonly selectedView: number|null|undefined;

    /**
     * Query parameters to be set with a file query call.
     */
    readonly queryParams: object|null|undefined;

    /**
     * OAuth 2 access token.
     */
    accessToken: string|null|undefined;

    /**
     * API key that is required to use the API
     */
    apiKey: string|null|undefined;

    /**
     * Used when paginating over results, returned from Drive API.
     */
    _nextPageToken: string|null|undefined;

    /**
     * Current drive file ID.
     */
    _fileId: string|null|undefined;

    /**
     * True when there's no more result for current query.
     */
    readonly hasMore: boolean|null|undefined;

    /**
     * A fileds projection requested from the Drive API.
     * Fields listed here are returned by the Drive query endpoint.
     */
    readonly fieldsProjection: string|null|undefined;
    _attachListeners(node: any): void;
    _detachListeners(node: any): void;

    /**
     * Handler for the `google-signin-success` event. If the `scope`
     * property set on the `detail` object matches `scope` set on this element
     * then it sets the `accessToken` property from detail's `token` property.
     */
    _signedinHandler(e: CustomEvent|null): void;

    /**
     * Handler for the `google-signin-success` custom event.
     * Clears the `accessToken` property.
     */
    _signoutHandler(): void;

    /**
     * Checks if current `scope` matches passed `scope` value.
     *
     * @param scope Scope to check
     * @returns True if `scope` set on this element matches passed value.
     */
    _hasScope(scope: String|null): Boolean|null;

    /**
     * Chooses a view depending on athorization value.
     */
    _initView(): any;

    /**
     * Resets the view when token value change.
     */
    _accessTokenChanged(token: any): void;

    /**
     * Forces the view to display list view.
     */
    showList(): void;

    /**
     * Query for the files on Google Drive.
     */
    _queryFiles(): void;

    /**
     * Builds the query (`q`) parameter for Google Drive API.
     *
     * @returns A value for the `q` query parameter
     */
    _buildQuery(): String|null;

    /**
     * Updates the `queryParams` property for current UI state.
     */
    _setQueryParameters(): void;

    /**
     * Sets the authorization header on the Ajax request objects. It affects
     * query and download requests.
     *
     * @param at Access token value. If empty it clears the headers.
     */
    _setAuthHeader(at: String|null): void;
    refresh(): void;

    /**
     * Called when user accept search query.
     */
    _onSearch(e: CustomEvent|null): void;

    /**
     * Reset current query data.
     */
    _resetQuery(): void;

    /**
     * Handler for the Drive list response.
     */
    _onDriveListResponse(): void;

    /**
     * Ajax call to Drive API error handler
     */
    _handleDriveApiError(e: CustomEvent|null): void;

    /**
     * If an item wasn't created by the application or never opened by it,
     * it is not possible to open an item with the API> User has to gi to
     * Drive UI and opend with ARC using Drive UI.
     * This opens the page that describe the issue.
     */
    _explainAppNotAuthorized(file: object|null): void;

    /**
     * Handler when user select a file from file picker.
     */
    _onOpenFile(e: CustomEvent|null): void;

    /**
     * Download and read a Google Drive item.
     *
     * @param id An item ID. This will show an error if the file wasn't created by this app
     * (e.g. old version of the app).
     */
    _downloadFile(id: String|null): void;

    /**
     * Ajax call success handler for file download.
     */
    _handleDownloadResponse(): void;

    /**
     * Handles event sent by the list to display download info.
     */
    _appNotAuthorizedHandler(e: any): void;
  }
}

interface HTMLElementTagNameMap {
  "google-drive-browser": UiElements.GoogleDriveBrowser;
}