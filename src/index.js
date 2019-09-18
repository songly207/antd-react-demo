import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import { ConfigProvider, DatePicker, message } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

import 'antd/dist/antd.css';
import './index.css';

import App from './maincpn/App';
import About from './maincpn/About';
import Inbox from './maincpn/Inbox'; 

import * as serviceWorker from './serviceWorker';
moment.locale('zh-cn');

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div style={{ float: "right", marginLeft: 5 }}>
                <span>{this.state.date.toLocaleTimeString()}</span>
            </div>
        );
    }
}


export default class MainPage extends Component {

    // constructor(props){
    //     super(props)
    //     this.state = {
    //         date: null,
    //         dfDate: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()
    //     }
    //     this.handleChange =     this.handleChange.bind(this)
    // }
    state = {
        date: null,
        dfDate: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()
    }

    UNSAFE_componentWillMount(){
        console.log(this.state.dfDate)
    };
    componentDidMount(){
        console.log(this.state.dfDate)
    };
    componentDidUpdate(){
    };
    handleChange = date => {
        this.setState({ date }, ()=>{
            message.info(`您选择的日期是: ${date ? date.format('YYYY-MM-DD') : '未选择'}`)
        });
    };
    // handleChange(date){
    //     this.setState({ date }, () => {
    //         message.info(`您选择的日期是: ${date ? date.format('YYYY-MM-DD') : '未选择'}`)
    //     });
    // }
    render() {
        let date = this.state.date;
        const dateFormat = 'YYYY/MM/DD';
        return (
            <ConfigProvider locale={zhCN}>
                <Router>
                    <div>
                        <ul className="nav">
                            <li><Link to="/">App</Link></li>
                            <li><Link to="/About">About</Link></li>
                            <li><Link to="/Inbox">Inbox</Link></li>
                            <div style={{ float: "right" }}>
                                <Clock />
                                <div style={{ float: "right" }}>
                                    当前日期：
                                    {   
                                        date ? 
                                        date.format('YYYY-MM-DD'): 
                                            <DatePicker defaultValue={ moment(this.state.dfDate, dateFormat) } onChange={this.handleChange} />
                                    }
                                </div>
                            </div>
                        </ul>
                        <Route exact path="/" component={App} />
                        <Route path="/About" component={About} />
                        <Route path="/Inbox" component={Inbox} />
                    </div>
                </Router>
            </ConfigProvider>
        )
    }
}

ReactDOM.render(<MainPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
