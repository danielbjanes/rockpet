
/**
 * List of objects we are storing and their names
 * 'mesh' -> Our mesh
 */



/**
 * Saves to localstorage
 * @param {*} name lookup dictionary name
 * @param {*} value value of what you want to save
 */
export function save(name, value) {
  localStorage.setItem(name, JSON.stringify(value))
}


/**
 * retrieve item from local storage
 * @param {*} name key of item
 */
export function retrieve(name) {
  var value = JSON.parse(localStorage.getItem(name))
  return value;
}
