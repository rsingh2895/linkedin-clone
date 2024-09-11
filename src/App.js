import { createBrowserRouter, Outlet, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Notification from './components/Notification';
import Error from './components/Error'
import Home from './components/Home';
import Footer from './components/Footer';
import Network from './components/Network';
import Messages from './components/Messages';
import Jobs from './components/Jobs';
import Login from './components/Login';
import Profile from './components/Profile';
import { PostsProvider } from './context/PostContext'
import CreatePost from './components/CreatePost';
import ProfileCard from './components/ProfileCard';

const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <PrivateRoute user={localStorage.getItem('user')}>
        <App />
      </PrivateRoute>
    ),
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home user={localStorage.getItem('user')} />
      },
      {
        path: '/notification',
        element: <Notification />
      },
      {
        path: '/network',
        element: <Network />
      },
      {
        path: '/message',
        element: <Messages />
      },
      {
        path: '/jobs',
        element: <Jobs />
      },
      {
        path: '/profile',
        element: <ProfileCard />
      },
      // {
      //   path: '/create-post',
      //   element: <CreatePost />
      // }
    ]
  },
  {
    path: '/login',
    element: <Login /> // The login page for non-authenticated users
  }
])

function PrivateRoute({ children }) {
  const user = JSON.parse(localStorage.getItem('user'));
  return user ? children : <Navigate to="/login" />;
}

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check localStorage for user
    const savedUser = localStorage.getItem('user');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);
  return (

    <PostsProvider>
      <div className='bg-slate-200'>
        <Header />
        <div className='m-8 flex w-[95%]'>
          <Outlet />
          <div className='w-1/4 '>
            <Footer />
          </div>

        </div>
      </div>
    </PostsProvider>

  );
}

export default routes;
