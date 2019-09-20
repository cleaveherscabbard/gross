class Root extends React.Component {
  render(){
    return (
      <div className="pane" id="root">
        <LeftPane />
        <RightPane />
      </div>
    )
  }
}

let rootContainer = document.querySelector('#root-container');
ReactDOM.render(<Root />, rootContainer);
