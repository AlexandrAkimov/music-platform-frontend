import React, { useEffect } from 'react'
import MainLayout from "./layouts/MainLayout";
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import AuthLayout from "./layouts/AuthLayout";
import Auth from './pages/Auth';
import { useTypedSelector } from './hooks/useTypedSelector';
import { useActions } from './hooks/useActions';
import RouteHistory from './RouteHistory';
import history from './history';

interface ProvideAuthProps {
  component: any
}

function App() {
  const {isAuth} = useTypedSelector(state => state.user)
  const {checkAuth} = useActions()

  const ProvideAuth: React.FC<ProvideAuthProps> = ({ component }) => {
    return localStorage.token ? component : <Navigate to='/login' />
  }

  useEffect(() => {
    if(localStorage.token) {
      checkAuth()
    } 
  }, [])
  
  const routes = (
    <Routes>
      <Route path="/" element={<ProvideAuth component={<Home />} />}></Route>
      <Route path="/about" element={<ProvideAuth component={<About />} />}></Route>
      <Route path="/login" element={<Auth />} ></Route>
    </Routes>
  )

  return (
    <RouteHistory history={history}>
      {isAuth ? <MainLayout>{routes}</MainLayout> : <AuthLayout>{routes}</AuthLayout>}
    </RouteHistory>
  );
}

export default App;
