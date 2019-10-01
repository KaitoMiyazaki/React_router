import React, {Component} from 'react' ;
import propTypes from 'prop-types' ;

const Button = (props) => {
    const {buttonText} = props;
    return (
        <button onClick={props.onClick}>{buttonText}</button>
    );
};

Button.propTypes = {
    buttonText: propTypes.string,
    onClick: propTypes.func
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: 'click me!'
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        console.log('click!');
        this.setState({buttonText: "clicked"});
    }

    render() {
        const {buttonText} = this.state;
        return (
            <div>
                <Button
                buttonText={buttonText}
                onClick={this.onClick}
                />
            </div>
        );
    }
}

export default App;