import React, {useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {addPost} from './Function'
import './CSS/myaccount.css'

function AddPost(){
	useEffect(()=>{
		if(!localStorage.getItem('usertoken')){
			history.push('/')
		}
	})
	const history = useHistory()
	const [error, SetError] = useState('');
	const [message, SetMessage] = useState('');
	let [post,setPost] = useState({
		title : '',
		content : ''
	});

	let handleChange = (e) => {
		let name = e.target.name;
		let value = e.target.value;
		post[name] = value;
		setPost(post);
	}

	let save = (e) =>{
		e.preventDefault()
		addPost(post).then((res)=>{
			console.log(res)
		}).catch((err)=>{
			SetError("Error ocured Try again after some time")
		})
	}

	return(
		<div>

			<main role="main" class="container">
		      <div class="row">
		        <div class="col-md-8">
		                <div class="alert alert-{{ category }}">
		                  {error}
		                </div>      		
		       		<div class="content-section">
				      <div class="media">
				      </div>
				        <form method="POST" encType="multipart/form-data" onSubmit = {save}>  
				            <fieldset class="form-group">
				                <legend class="border-bottom mb-4">What would you like to share today?</legend>
				                <div class="form-group">
				                    <label htmlFor="username" class="text-info">Title:</label> <br />
					                <input type = "text" name = "title"id="username" class="form-control"  onChange = {handleChange} />
				                        <div class="invalid-feedback">
				                                <span>{error} </span>
				                        </div>
				                </div>
						        <div class="form-group">
				                     <label htmlFor="image" class="text-info">Content:-</label> <br />
					                <textarea cols = "20" rows = "5" name = "content"  class="form-control" onChange = {handleChange}/>
				                        <div class="invalid-feedback">
				                                <span>{error} </span>
				                        </div>
				                </div>
				                <input type = "submit" value = "Add Post" />
				            </fieldset>				     
				        </form>

				        <legend class="border-bottom mb-4"></legend>
				        <h1>{message} </h1>
				        
				        
				        
				        

				    </div>

		        </div>
		        
		      </div>
		    </main>

		</div>
	)
}

export default AddPost;