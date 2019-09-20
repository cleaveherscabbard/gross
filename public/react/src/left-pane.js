'use strict';
class Content extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    console.log("here");
  }

  render() {
    return (
      <img
        id="content"
        // src={'/images/' + this.props.img_id}
      />
    );
  }
}

class ContentData extends React.Component {
  render(){
    return (
      <div className="horizontal-list box" id="data">
        <div id="urldata"></div>
        <div id="img-tags"></div>
      </div>
    )
  }
}

class TagControls extends React.Component {
  render(){
    return (
      <div id="tag-controls" className="txt-ctrl">
        <input type="text" id="tag-txt"></input>
        <button type="button" id="tag-btn" >TAG</button>
      </div>
    )
  }
}

class JumpControls extends React.Component {
  render(){
    <div id="jmp-controls" className="txt-ctrl">
      <input type="text" name="" value="" id="jmp-txt" />
      <button type="button" id="jmp-btn" >JUMP</button>
    </div>
  }
}

class LeftPane extends React.Component {
  constructor(props) {
    console.log("constructing left pane");
    super(props);
  }

  renderFeedback(){
      return(<div id="feedback"></div>);
  }

  render(){
    return (
      <div className="pane" id="left-pane">
        <Content />
        <ContentData />
        <TagControls />
      </div>
    )
  }
}

// let leftPaneContainer = document.querySelector('#left-pane-container');
// ReactDOM.render(<LeftPane />, leftPaneContainer);
