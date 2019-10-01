import React, { Component } from 'react';

function calcTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

class App extends Component {
    constructor(props) {
        super(props) ;
        this.state = {
            list: [1,2,3,4,5]
        };
    }

    render () {
        const {list} = this.state;
        const total = calcTotal(list) ;
        return (
            <div>
                <span>{total}</span>
            </div>
        );
    }
}
export default App;
