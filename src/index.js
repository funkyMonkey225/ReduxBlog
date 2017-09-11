import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/postsindex';
import PostsNew from './components/postsnew';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                {/*Put most specific routes at top of list*/}
                <Switch>
                    <Route path="/posts/new" component={PostsNew} />
                    <Route path="/" component={PostsIndex} />
                </Switch>
            </div>
        </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
