


function main(){
  function initialize(){

    this.state = {
      image_ids: [],
      image_id: 1,
      available_folders: [],
      available_tags: [],
      favorites: new Set()
    };

    this.content = document.getElementById("content");

    // ReactDOM.render(
    //   React.createElement(
    //     'img',
    //     {id:"content", src: "/images/" + this.state.image_id},
    //     null
    //   ),
    // //     Content,null, null
    // //     // {
    // //           // image_id: state.image_id}
    // //           // src
    // //   ),
    //   document.getElementById('content-container')
    // );

    this.urldata = document.getElementById("urldata");

    this.img_tags = document.getElementById("img-tags");
    this.tag_txt = document.getElementById("tag-txt");
    this.tag_btn= document.getElementById("tag-btn");

    this.filter_btn = document.getElementById("filter-btn");
    this.all_btn = document.getElementById("filter-all");
    this.none_btn = document.getElementById("filter-none");
    this.tag_filters = document.getElementById("tag-filters");
    this.fvt_btn = document.getElementById("fvt-btn");
    this.gst_btn = document.getElementById("gst-btn");
    this.dup_btn = document.getElementById("dup-btn");

    this.feedback = document.getElementById("feedback");


    getState((JSONdata)=>{
      let data = JSON.parse(JSONdata);
      let image_ids = data.image_ids;
      let image_id = getRandomImageId(image_ids);
      let available_folders = data.folders;
      let available_tags = data.tags;
      let favorites = data.favorites;
      const newState = {
        image_ids,
        image_id,
        available_folders,
        available_tags,
        favorites
      };

      updateState(newState);
    })
  }

  function updateState(someObj){
    keys = Object.keys(someObj)

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

    keys.forEach( (k)=>{
      state[k] = someObj[k];
    } );

    if (keys.includes('available_folders') ){
      updateFiltersNode('available_folders', true);
    }

    if (keys.includes('available_tags') ){
      updateFiltersNode('available_tags', false);
    }

    if (keys.includes('image_id') ){
      updateImageState(state['image_id']);
    }

    console.log(this.state);
  }

  function updateImageState(image_id){
    src = `/images/${image_id}`;
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

  function updateFeedback(message){
    feedback.innerHTML = message;
    setTimeout(()=>{feedback.innerHTML = ""}, 3000)
  }

  function updateFavorites(favArray){
    state['favorites'].clear()

    favArray.forEach((e)=>{state['favorites'].add(e)})

    if(state['favorites'].has(state.image_id)){
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
  }

  function getRandomImageId(ary){
    return ary[Math.floor(Math.random()*ary.length)];
  }

  function getRandomPicture(){
    let image_id = getRandomImageId(state.image_ids);
    updateState({image_id});
  }

  function getTagFilters(){
    let tagFilters = [];

    q = $(".tag-filters");
    q.each((i)=>{
      if( q[i].checked === true){
        customLabel = q[i].id.slice(12)
        tagFilters.push(customLabel)
      }
    })
    return tagFilters;
  }

  function getNextImageId(){
    if(state.image_id===state.image_ids[state.image_ids.length-1]){
      return state.image_ids[0];
    } else {
      let currentIndex = state.image_ids.indexOf(state.image_id);
      return state.image_ids[currentIndex+1];
    }
  }

  function addKeyControls(){
    document.addEventListener("keydown", handleKeyDown);
    function handleKeyRight(){
      let newState = {};
      newState["image_id"] = getNextImageId();
      updateState(newState);
    }

    function handleKeyLeft(){
      let newState;
      if(state.image_id===state.image_ids[0]){
        newState = {image_id: state.image_ids[state.image_ids.length-1] };
      } else {
        let index = state.image_ids.indexOf(state.image_id);
        newState = {image_id: state.image_ids[index - 1]};
      }
      updateState(newState);
    }

    function handleKeyDown(e){

      k = e.key

      if (k=="ArrowLeft"){
        handleKeyLeft();
      }
      if(k=="ArrowRight"){
        handleKeyRight();
      }
      if(k==" "){
        e.preventDefault();
        getRandomPicture();
      }
      if(k=="Enter"){

      }
      if(k=="9"){
        e.preventDefault();
        gst_btn.click();
      }
    }
  }

  function updateimg_tagsNode(tags){
    img_tags.textContent = "";
    tags.forEach( (tag)=>{
      img_tags.textContent += `${tag}, `;
    })
  }

  function initializeFavoriteButton(){
    function handleFavoriteImageResponse(JSONData){
      let data = JSON.parse(JSONData);
      let message = data.message;
      let favorites = data.favorites;
      updateState({message, favorites});

    }

    function favoriteImage(e){
      e.preventDefault();
      postFavoriteImage(state.image_id, handleFavoriteImageResponse);
    }

    fvt_btn.addEventListener("click", favoriteImage);

  }

  function initializeGhostButton(){
    function handleGhostImageResponse(JSONData){
      let data = JSON.parse(JSONData);
      let message = data.message;
      let image_ids = data.image_ids;
      let image_id = getNextImageId();
      updateState({image_ids, image_id});
    }

    function ghostImage(e){
      e.preventDefault();
      tag_filters = getTagFilters();
      postGhostImage(
        state.image_id,
        {tag_filters},
        handleGhostImageResponse
      );
    }
    gst_btn.innerHTML=emoji.ghost;
    gst_btn.addEventListener("click", ghostImage);
  }


  function initializeTagButton(){
    function handleTagImageResponse(JSONData){
      let data = JSON.parse(JSONData);
      let available_tags = data.available_tags;
      let img_tags = data.img_tags;
      let message = data.message;
      const newState = {
        available_tags,
        message
      }
      //todo test this
      updateState(newState);

      updateimg_tagsNode(img_tags);

    }

    function tagImage(e){
      e.preventDefault();
      const data = {tag: tag_txt.value};
      tag_txt.value = "";
      postTagImage(state.image_id, data, handleTagImageResponse);
    }

    tag_btn.addEventListener("click", tagImage);

    tag_txt.addEventListener("keyup",(e)=>{
      e.preventDefault();
      if (e.key == "Enter" ){
        tag_btn.click();
      }
    });
  }

  function initializeFilterButton(){

    function filter_image_ids(e){
      e.preventDefault();
      // debugger

      tagFilters = getTagFilters();

      getImageIds({tagFilters},(JSONData)=>{
        let data = JSON.parse(JSONData);

        let image_ids = data.image_ids;
        let image_id = getRandomImageId(image_ids);

        const newState = {
          image_ids,
          image_id,
        };

        updateState(newState);
      })
    }
    filter_btn.addEventListener("click", filter_image_ids)
  }

  initialize();
  addKeyControls();
  initializeTagButton();
  initializeFavoriteButton();
  initializeGhostButton();
  initializeFilterButton();
}




document.addEventListener('DOMContentLoaded',()=>{
  main();
})
