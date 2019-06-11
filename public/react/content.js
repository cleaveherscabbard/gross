'use strict';

const e = React.createElement;

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image_id: props.id
    };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#content-container');
ReactDOM.render(e(Content), domContainer);
