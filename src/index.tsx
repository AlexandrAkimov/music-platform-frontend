import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.min.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import { UserActionTypes } from './store/types/user';
import history from './history';
import { $authHost } from './api/axios-interceptors';

const UNAUTHORIZED = 401;
const {dispatch} = store; // direct access to redux store.

const authInterceptorResponse = (error: any) => {
  if (!error.response) return
  if (error.response.status === UNAUTHORIZED) {
    localStorage.token = ''
    dispatch({type: UserActionTypes.AUTH_USER_ERROR, payload: ''})
    history.replace('/login')
  } 
}

$authHost.interceptors.response.use(response => response, authInterceptorResponse)

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);


