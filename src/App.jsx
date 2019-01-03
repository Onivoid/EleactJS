import React, { Component, Fragment } from 'react';
import { BrowserRouter , Route} from 'react-router-dom';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const initialData = this.props.initialData
            ? this.props.initialData
            : window.__INITIAL_DATA__;
        return (
          <BrowserRouter>
            <div>
              <p>app ready !</p>
            </div>
          </BrowserRouter>
        );
    }
}

export default App;
