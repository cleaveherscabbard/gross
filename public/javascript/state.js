export default class StateManager{
  constructor(obj){
    Object.keys(obj).forEach((key)=>{
      this[key] = obj[key]
    })
  }

  update(newState){
    keys = Object.keys(newState);


  }

  addProp(name,value){
    this[name] = value;
  }


}


//
// export function getGrossState(){
//   state = new StateManager();
//   state.add("image_ids", []);
//   state.add("image_id", 1);
//   state.add(available_folders, []);
//   state.add("available_tags", []);
//   state.add("favorites": new Set());
// }
