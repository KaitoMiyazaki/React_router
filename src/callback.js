import React from 'react' ;
import Child from './Child' ;

class Parent extends React.Component {

    constructor(props) {
        super(props) ;

        this.bindFunc = this.func.bind(this) ;
        
        this.state = {
            str: '',
            isDisabled: true,
        };
    }

    func(str) {

        if(str.length > 10) {
            this.setState({isDisabled: false}) ;
        } else {
            this.setState({isDisabled: true}) ;
        }
    };

    render() {
        return (
            <div>
                <Child func={this.bindFunc} />
                <input
                type='button'
                disabled={this.state.isDisabled}
                value={'submit'}
                />
            </div>
        );
    }
}

export default Parent;