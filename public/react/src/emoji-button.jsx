export default class EmojiButton extends React.Component{
  constructor(props){
    super(props);
    this.id = props.id + "-btn";
    this.graphic = props.emoji;
  }

  render(){
    return (
      <button type="button" id={this.id} className="float-right-btn emj-btn"></button>
    )
  }
}
