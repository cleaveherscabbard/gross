class EmojiButton extends React.Component{
  constructor(props){
    super(props);
    this.props.id += "-btn";
    this.graphic = props.emoji;
  }

  render(){
    return (
      <button type="button" id={this.props.id + "-btn"} className="float-right-btn emj-btn"></button>
    )
  }
}
