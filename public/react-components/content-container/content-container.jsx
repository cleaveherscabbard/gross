'use strict';

class Content extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {

    return <img
      id="content"
      src={'/images/' + this.props.img_id}
      />
  }
}

// export function getContentClass(){
//   return Content;
// }

// function renderContentContainer(image_id){
  // ReactDOM.render(<Content src={"/images/"+this.state.image_url}/>, document.getElementById('content-container'));
  // ReactDOM.render(<Content />, document.getElementById('content-container'));
// }
