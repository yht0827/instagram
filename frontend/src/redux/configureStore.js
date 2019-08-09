import { createStore, combineReducers, applyMiddleware } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { composeWithDevTools } from "redux-devtools-extension";
import { i18nState } from "redux-i18n";
import photos from "redux/modules/photos";
import user from "redux/modules/user";

const env = process.env.NODE_ENV;

const history = createBrowserHistory(); // 이전 state 볼수 있다.

const middlewares = [thunk, routerMiddleware(history)]; // 미들웨어 생성

if (env === "development") {
  const { logger } = require("redux-logger"); // console창에 로고를 보여준다.( 리듀서 확인)
  middlewares.push(logger);
}

const reducer = combineReducers({
  user,
  photos,
  router: connectRouter(history), // 라우터에 히스토리 오브젝트를 준다.
  i18nState
});

let store;

if (env === "development") {
  store = initialState =>
    createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));
} else {
  store = initialState => createStore(reducer, applyMiddleware(...middlewares));
}

export { history };

export default store();
