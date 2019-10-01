import React from 'react' ;

class Parent2 extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            value1: 'foo' ,
            value2: ['bar', 'baz'],
        };
        this.handleClick = this.handleClick.bind(this) ;
    }
    handleClick() {
        this.setState(() => {
            return {value1: 'bar' } ;
        });
    }
    render () {
        return (
            <div>
                <child data={this.state.value1} handleClick={this.handleClick} />
            </div>
        );
    }
}

const child = (props) => (
    <div onClick={props.handleClick} >
        {props.data}
    </div>
);
child.propTypes ={
    handleClick: React.propTypes.func,
    data: React.propTypes.string,
};

export default Parent2;

