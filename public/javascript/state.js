export default class State{
  constructor(){
      this.image_ids = {},
      this.image_id = 1,
      this.available_folders = [],
      this.available_tags = [],
      favorites: new Set()


  }

  update(newState){
    keys = Object.keys(newState);
    this.updateActionsBefore()
    console.log(this.state);
  }

  updateActionsBefore(){
    if (keys.includes('favorites') ){
      updateFavorites(someObj['favorites']);
      delete someObj['favorites'];
      keys = keys.filter(
        (key) => {
          return key !== "favorites"
        }
      )
    }

    if (keys.includes('message') ){
      updateFeedback(someObj['message']);
      delete someObj['message'];
      keys = keys.filter(
        (key) => {
          return key !== "message"
        }
      )
    }
  }

  updateActionsAfter(){
    if (keys.includes('available_folders') ){
      updateFiltersNode('available_folders', true);
    }

    if (keys.includes('available_tags') ){
      updateFiltersNode('available_tags', false);
    }

    if (keys.includes('image_id') ){
      updateImageState(state['image_id']);
    }
  }

  updateImageState(image_id){
    src = `http://localhost:4567/images/${image_id}`;
    content.src = src;

    urldata.innerHTML = state['image_id']+": ";

    getTags(image_id, (JSONData)=>{
      let tags = JSON.parse(JSONData);
      updateimg_tagsNode(tags);
    })

    if(state['favorites'].has(image_id)){
      fvt_btn.innerHTML = emoji.moon_on;
    } else {
      fvt_btn.innerHTML = emoji.moon_off;
    }

  }

  function updateFiltersNode(filter, defaultState){
    //get usefull values from filter name
    let filterClass = filter.slice(10,-1);
    filterClass += "-filter";
    filterType = filterClass += "s";

    let parent = document.getElementById(filterType);
    parent.innerHTML = "";
    let options = state[filter].sort();
    options.forEach((option)=>{
      let div = document.createElement("div");

      let cb = document.createElement("input");
      cb.type = "checkbox";
      cb.className = filterClass;
      cb.id = `${filterType}-${option}`;
      cb.customLabel = option;
      cb.defaultChecked = defaultState;

      let label = document.createElement("label");
      label.for = cb.id;
      label.textContent = option;

      div.appendChild(cb);
      div.appendChild(label);
      parent.appendChild(div);
    })

    function getRandomImageId(ary){
      return ary[Math.floor(Math.random()*ary.length)];
    }
  }


}
