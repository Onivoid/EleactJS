import React, { Component, Fragment } from 'react';
import { BrowserRouter , Route, Switch, Redirect} from 'react-router-dom';
import Layout from './layout/Layout.jsx';
import MainPage from './pages/MainPage/MainPage.jsx';

class App extends Component {

    constructor(props) {
        super(props);
        this.path = window.location.pathname;
    }

    render() {
        const initialData = this.props.initialData
            ? this.props.initialData
            : window.__INITIAL_DATA__;
        return ( 
            <BrowserRouter>
                <Layout>
                    <Route path={this.path} exact="true" component={MainPage} />
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;
