import 'babel-polyfill';
import dva from 'dva';
//import { browserHistory, hashHistory } from 'dva/router';
import createLoading from 'dva-loading';
import createHistory from 'history/createBrowserHistory'
import { message } from 'antd';
import './utils/func';
import './index.less';
import { useRouterHistory } from 'dva/router';
import { createHashHistory } from 'history';


const ERROR_MSG_DURATION = 3; // 3 秒

// 1. Initialize
const app = dva({
  ...createLoading({
    effects: true,
  }),
  //history: createHistory(),
  onError(e) {
    console.dir(e);
    //message.error(e.message, ERROR_MSG_DURATION);
  },
});

// 2. Plugins
//app.use(createLoading({
//  effects: true,
//}));

// 3. Model
app.model(require('./models/app').default)

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
