function getNextFolder(){
  folders = Object.keys(state.list);
  fidx = folders.image_idOf(state.folder);
  if ( fidx + 1 === folders.length ) {
    return folders[0];
  } else {
    return folders[fidx + 1];
  }
}

function getPreviousFolder(){
  folders = Object.keys(state.list);
  fin = folders.image_idOf(state.folder);
  if ( fin === 0 ) {
    return folders[folders.length - 1];
  } else {
    return folders[fin - 1];
  }
}

function getRandomFolder(){
    keys = Object.keys(list)
    len = keys.length;
    rand = Math.floor(Math.random() * len);
    return keys[rand];
  }
