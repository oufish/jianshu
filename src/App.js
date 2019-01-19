import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import store from './redux/store'
class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
          <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Home}></Route>
            <Route path="/detail" exact component={Detail}></Route>
            </div>
          </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
