import React from 'react' ;

class Toggle extends React.Component {
    constructor(props) {
        super(props) ;
        this.state = {isToggleOn: true}  ;
        //this binding is nrecessary to make'this' work in the callback
        this.handleClick = this.handleClick.bind(this) ;
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        })) ;
    }

    render() {
        return (
            <button onClick={this.handleClick} >
                {/*三項演算子 var arg = 条件　? true : false;*/}
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}
export default Toggle;
//ReactDOM.render(
  //  <Toggle />,
    //document.getElementById('root3')
//);