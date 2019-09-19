'use strict';

class FilterList extends React.Component {

  render(){
    return (
      <div className="filter-list-container box">
        <button type="button" id="filter-all">ALL</button>
        <button type="button" id="filter-none">NONE</button>
        <div className="filter-list" id={this.props.idt + "-filters"}></div>
      </div>
    )
  }
}

class RightPane extends React.Component {

  constructor(props){
    console.log("constructing right pane");
    super(props);
  }

  render(){
    return (
      <div id="right-pane" className="pane">
        <div className="section-title box">FILTERS
          <button type="button" id="filter-btn">FILTER</button>
                <button type="button" id="fvt-btn" className="float-right-btn emj-btn"></button>
                <button type="button" id="dup-btn" className="float-right-btn emj-btn"></button>
                <EmojiButton id="gst" emoji={emoji.ghost} />


        </div>

        <div id="filter-lists">
          <FilterList idt="folder"/>
          <FilterList idt="tag" />
        </div>

      </div>
    )
  }
}

// let rightPaneContainer = document.querySelector('#right-pane-container');
// ReactDOM.render(<RightPane />, rightPaneContainer);
