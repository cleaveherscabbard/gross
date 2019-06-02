function getImageIds(data, callback){
  $.get('/images/index', data, callback);
}

function getImage(image_id, callback){
  $.get(`/images/${image_id}`, callback);
}

function postGhostImage(image_id, data, callback){
  $.post(`/ghost/${image_id}`, data, callback);
}

function postTagImage(image_id, data, callback){
  $.post(`/tags/${image_id}`, data, callback);
}

function postFavoriteImage(image_id, callback){
  $.post(`/favorites/${image_id}`, callback);
}



function getTags(image_id, callback){
  $.get(`/tags/${image_id}`, callback)
}

function getFavoriteImage(image_id, callback){
  $.get(`/favorites/${image_id}`, callback)
}
function getState(callback){
  $.get('/getState', callback);
}

function getFilters(callback){
  // debugger
  $.get('/getFilters', callback);
}
