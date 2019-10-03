'use-strict';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.state
        console.log(props);
        console.log("here");
    }

    render() {
        var id = this.props.state.image_id;
        const url = "http://localhost:4567/images/" + id;

        return (
            <img
                id="content"
                src={url}
            />
        );
    }
}

export default Content;
