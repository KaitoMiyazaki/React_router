import React, { Component } from 'react' ;
import { Stage, Layer, Rect, Text } from 'react-konva' ;
import konva from 'konva';
//import propTypes from 'prop-types'

class ColoredRect extends React.Component {
    constructor(props) {
    super(props);
    this.bindfunc = this.changeColor.bind(this);
    this.state = {
        color: 'red',
        isToggleOn: false
    };
    
}
    changeColor(props) {
        const isToggleOn = props.isToggleOn;
        function hogehoge() {
        if (isToggleOn) {
            this.setState({color: 'green'});
        } else {
            this.setState({color: 'red'})
        }};
    };

    render() {
        return (
            <div>
                <ErrorBoundary>
                <Child func={this.bindfunc} />
                </ErrorBoundary>
                <div>
                    <ErrorBoundary>
                        <Rect 
                        x={20}
                        y={20}
                        width={100}
                        height={100}
                        fill={this.state.color}
                        shadowblur={5}
                        />
                    </ErrorBoundary>
                </div>
            </div>
        );
    }
}
class Child extends Component {
    //static propTypes = {
      //  func: propTypes.func.isRequierd,
    //};

    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
        };
    };
    handleClickOn() {
        this.setState({ isToggleOn: true});
        this.props.func(this.state.isToggleOn) ;
    }
    handleClickOff() {
        this.setState({ isToggleOn: false});
        this.props.func(this.state.isToggleOn) ;
    };
    
    render() {
        return (
            <div>
                <ErrorBoundary>
                <input type="button" onClick={this.handleClickOn} value={'ON'} />
                </ErrorBoundary>
                {/*<input type="button" onClick={this.handleClickOff} value={"OFF"} />*/}
            </div>
        );
    }
}

class App3 extends Component {
    render () {
        return (
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    <ColoredRect />
                </Layer>
            </Stage>
        );
    }
};

export default App3;

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }
    
    componentDidCatch(error, errorInfo) {
      // Catch errors in any components below and re-render with error message
      this.setState({
        error: error,
        errorInfo: errorInfo
      })
      // You can also log error messages to an error reporting service here
    }
    
    render() {
      if (this.state.errorInfo) {
        // Error path
        return (
          <div>
            <h2>Something went wrong.</h2>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          </div>
        );
      }
      // Normally, just render children
      return this.props.children;
    }  
  }

  const Sample = (props) => {
      const isToggleOn = props.isToggleOn;
      if (isToggleOn) {
          <Rect 
          x={20}
          y={20}
          width={100}
          height={100}
          fill={'green'}
          shadowblur={5}
          />
      } else {
        <Rect 
        x={20}
        y={20}
        width={100}
        height={100}
        fill={'red'}
        shadowblur={5}
        />
      }
  }