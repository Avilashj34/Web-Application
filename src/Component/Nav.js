import React, {Component, useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {getToken} from './Function'

export default function Nav(props){
    let history = useHistory();

    useEffect(()=>{
        console.log(props)
    })

    function logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        history.push("/login")
    }

        if(props.isAuth !== null){
        return(
                <div class="bs-example">
            <nav class="navbar navbar-expand-md navbar-light bg-light">
                <a href="/" class="navbar-brand">Linkedln</a>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav">
                        <a href="/users" class="nav-item nav-link active">Users</a>
                        <a href="/addpost" class="nav-item nav-link">Add Post</a>
                        <a href="#" class="nav-item nav-link disabled" tabindex="-1">Reports</a>
                    </div>
                    <div class="navbar-nav ml-auto">
                        <a href="/myaccount" class="nav-item nav-link">My Account</a>
                        <a href="" onClick= {logOut} class="nav-item nav-link">Logout</a>
                    </div>
                </div>
            </nav>
        </div>
            ) 
            }
            else{
                return(
                <div class="bs-example">
            <nav class="navbar navbar-expand-md navbar-light bg-light">
                <a href="/" class="navbar-brand">Comming Soon</a>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav">
                        <a href="/" class="nav-item nav-link active">Home</a>
                       
                        <a href="/users" class="nav-item nav-link">Users</a>
                        <a href="#" class="nav-item nav-link disabled" tabindex="-1">Reports</a>
                        
                    </div>
                    
                    <div class="navbar-nav ml-auto">
                        <a href="/login" class="nav-item nav-link">Login</a>
                        <a href="/register" class="nav-item nav-link">Register</a>
                    </div>
                </div>
            </nav>
        </div>
    ) 
    }
    
    }

