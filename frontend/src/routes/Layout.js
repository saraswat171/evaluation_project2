
import React from 'react'
import { BrowserRouter as Router ,Route , Routes, Navigate } from 'react-router-dom';

import SignUp from '../pages/Signup/Signup';
  import Login from '../pages/Login/Login';
  import Home from '../pages/Home/Home';

 import NotFound from '../pages/Notfound/Notfound';

function Layout() {
  const userData = JSON.parse(localStorage.getItem('user'))
  const PrivateRoute = ({ children }) => {
    const isAuth = localStorage.getItem("token");
    return isAuth === null ? <Navigate to="/Login" /> : <>{children}</>;
  };
  // const customerRouter=[
  //   {
  //     path:'/check',
  //     component:<NotFound />
  //   }
  // ]
  
  return (
   <Router>

    <Routes>
        <Route path='/Login' Component={Login} />
        <Route path='/' Component={SignUp} />
        <Route path='/home'   element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }/>
           {/* <Route path='/profile'   element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }/>
           <Route path='/dashboard'   element={
            <PrivateRoute>
             <Dashboard/>
            </PrivateRoute>
          }/>
           <Route path='/about'   element={
            <PrivateRoute>
            <About/>
            </PrivateRoute>
          }/>
           <Route path='/records'   element={
            <PrivateRoute>
            <Records/>
            </PrivateRoute>
          }/>
              <Route path='/editpage'   element={
            <PrivateRoute>
            <EditPage/>
            </PrivateRoute>
          }/>
           <Route path='/getbook'   element={
            <PrivateRoute>
         <Getbook/>
            </PrivateRoute>
          }/>
           
           */}
           {/* {userData && (userData?.role === 'student') && customerRouter.map((route, index) => {
            return <Route key={index} path={route.path} element={
              <PrivateRoute>
             {route.component}
                 </PrivateRoute>} />;
          })} */}
         <Route path="*" element={<NotFound />} />
       
    </Routes>

   </Router>
  )
}

export default Layout
