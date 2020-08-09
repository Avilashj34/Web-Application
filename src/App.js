import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Component/Login'
import Register from './Component/Register'
import Home from './Component/Home'
import AddPost from './Component/AddPost'
import Nav from './Component/Nav'
import Profile from './Component/Profile'
import Samole from './Component/Sample'
import Users from './Component/Users'
import Post from './Component/Post'
import Follow from './Component/Follow'
import MyAccount from './Component/MyAccount'
import LikePost from './Component/LikePost'
import DisLikePost from './Component/DisLikePost'



import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("usertoken"));
  return (
    <Router>
      <div className="App">  
          <Nav isAuth = {loggedIn}/> 
          <Switch>
            <Route exact path = "/"   component = {Home} /> 
            <Route exact path = "/login" component = {Login} />
            <Route exact path = "/register" component = {Register} /> 
            <Route exact path = "/addprofile" component = {Profile} /> 
            <Route exact path = "/addpost" component = {AddPost} /> 
            <Route exact path = "/sample" component = {Samole} /> 
            <Route exact path = "/users" component = {Users} />
            <Route exact path = "/follow/:id" component = {Follow} />
            <Route exact path = "/myaccount" component = {MyAccount} />
            <Route exact path = "/like/:id" component = {LikePost} />
            <Route exact path = "/dislike/:id" component = {DisLikePost} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;


// https://stackoverflow.com/questions/6044309/sqlalchemy-how-to-join-several-tables-by-one-query

// https://www.youtube.com/watch?v=Law7wfdg_ls