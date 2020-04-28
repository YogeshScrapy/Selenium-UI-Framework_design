import { getTypes } from "@bit/kubric.redux.reducks.utils";

export default getTypes([
  'FILE_UPLOAD',
  'DROP_UPLOAD',
  'VARIANT_UPLOAD',
  'PROFILE_PIC_UPLOAD',
  'FOLDER_UPLOAD',
  'ASSETS_FETCHED',
  'UPLOAD_MODAL',
  'ENABLE_GRID',  
  'SET_FORM',
  'HIDE_ASSETS',
  'ASSET_SELECTED',
  'SHOW_ASSETS',
  'SHOW_TASKS',
  'DISALLOW_EXACT_PATH',
  'ALLOW_EXACT_PATH',
  'SHOW_MODAL',
  'HIDE_MODAL',
  'IS_VARIANT',
  'DELETE_VARIANT_DIALOG',
  'MOUSE_ENTER',
  'MOUSE_LEAVE',
  'VARIANT_DIALOG',
  'SET_URL_SHARE',
  'UNSET_URL_SHARE',
  'SET_PATH',
  'SHOW_DELETE_MODAL',
  'SELECT_FIRST_FILTER',
  'FOLDER_FILTER_SELECTED',
  'TOGGLE_FILTERS',
  'HIDE_DELETE_MODAL',
  'SAVE_UPLOAD_DATA',
  'FOLDER_CLICKED',
  'SET_EXACT_PATH',
  'PURGE_SELECTED_TEAMS',
  'TAG_ASSETS',
  'SHARE_FOLDERS',
  'SHOW_WARNING_MODAL',
  'HIDE_WARNING_MODAL',
  'SHOW_UPLOAD_MENU',
  'HIDE_UPLOAD_MENU',
  'SHARE_ASSETS',
  'PURGE_FOLDERS',
  'FOLDER_UPDATE',

  /* TRANSFORM */
  'TRANSFORM_EDIT',
  'PURGE_TRANSFORM_DATA',
  'SHOW_TRANSFORMATION',
  'HIDE_TRANSFORMATION',

  
  'FOLDER_DELETE',
  'FOLDER_CREATE',
  'OPEN_RENAME',
  'CLOSE_RENAME',
  'CHANGE_FOLDER_DETAILS',
  'SAVE_FILTERS',
  'FETCH_FOLDERS',
  'SAVE_LAST_DATA',
  'FOLDER_ASSETS_FETCHED',
  'SHOW_FOLDER_DETAILS',
  'HIDE_FOLDER_DETAILS',
  'SHOW_PATH',
  'HIDE_PATH',
  'FULL_SCREEN_MODE',

  /*For Bulk Annotation Form*/
  'TAG_ADDED',
  'TAG_DELETED',
  'CHANGED_ATTRIBUTE',
  'DELETED_ATTRIBUTE',

  /* Shutterstock*/
  'SHOW_LICENSE_MODAL',
  'RETRY_UPLOAD_ASSETS',
  'HIDE_LICENSE_MODAL',
  'SELECTED_SUBSCRIPTION',

  /*Edit Panel */
  'ASSET_SELECTED',
  'ATTRIBUTE_DELETED',
  'ATTRIBUTE_CHANGED',

  // uploads in folders
  'FOLDER_UPLOADS_FETCHED',
  'ASSET_UPLOAD_INITIATED'
], `kubric/assets`);