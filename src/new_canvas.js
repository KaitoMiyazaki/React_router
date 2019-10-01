import React, {Component} from 'react' ;
import { Stage, Layer, Rect, Text } from 'react-konva';

const Sample = (props) => {
    const isToggleOn = props.isToggleOn;
    if (isToggleOn) {
        return <Rect 
        x={20}
        y={20}
        width={100}
        height={100}
        fill={'green'}
        shadowblur={10}
        />
    } else {
      return <Rect 
      x={20}
      y={20}
      width={100}
      height={100}
      fill={'red'}
      shadowblur={5}
      />
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.bindOn = this.handleClickOn.bind(this);
        this.bindOff = this.handleClickOff.bind(this);
        this.state = {
            isToggleOn: true,
        };
    }
    handleClickOn() {
        this.setState({isToggleOn: true});
        console.log("on");
    };
    handleClickOff() {
        this.setState({isToggleOn: false});
        console.log("off");
    };
    render () {
        return (
            <div>
            <Stage width={200} height={200}>
                <Layer>
                    <Sample isToggleOn={this.state.isToggleOn} />
                </Layer>
            </Stage>
            <div>
                <input type="button" onClick={this.bindOn} name={"ON"} value={"ON"} />
                <input type="button" onClick={this.bindOff} name={"OFF"} value={"OFF"} />
            </div>
            </div>
        );
    }
}

export default App;