import React from 'react' ;
import PropTypes from 'prop-types' ;

class Child extends React.Component {
    static propTypes = {
        func: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
            this.state = {
                str: '',
            };
        }
        //ここでstrの文字数に応じてisDisabled の値を更新
    onClick = () => {
        this.props.func(this.state.str) ;
    };
        //strの値を更新
    onChange = e => {
        this.setState({ str: e.target.value });
    };

    render () {
        return (
            <div>
                <input type="text" onChange={e => this.onChange(e)} />
                <input type="button" onClick={() => this.onClick()} value={'ok'} />
            </div>
        );
    }
    }

    export default Child ;
