import {Component} from 'react'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false,
            text: '' ,
            numberText: '' ,
        };

        this.api.fetchList() ;
    }
    /**
     * メニュー関連の操作
     */
    menu = {
        open: () => {
            this.setState({ isMenuOpen: true });
        },
        close: () => {
            this.setState({ isMenuOpen: false});
        }
    };
    /**
     * API関係の操作
     */
    api = {
        fetchList: () => {
            this.props.dispatch(fetchList()) ;
        },
        requestChangeList: (text, index) => {
            this.props.dispatch(requestChangeList(text, index)) ;
        }
    };
    /**
     * ページ関係の操作
     */
    page = {
        back: () => {
            this.props.history.back() ;
        },
        next: () => {
            this.props.history.push('./next');
        }
    };
    /**
     * コールバック関数
     */
    callbacks = {
        onSubmit: () => {
            const {text, numberText } = this.state;
        }
    }
}