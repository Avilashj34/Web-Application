import React, {useState, useEffect} from 'react'
import {postbyId} from './Function'
import './CSS/main.css'


export default function Post({match}){
	useEffect(()=>{
		console.log(match.params.id)
		fetchData();
	},[])

	const [post, setPost] =useState([]);
	const fetchData= ()=>{
		postbyId(match.params.id).then((res) =>{
			console.log(res.data.message[0]);
			const post = res.data.message[0]
			setPost(post)
			console.log(post)
		})
	}

	let _renderPost = (posts)=>{
		return(
			<div class="name">
		      	<span> <img src={require('./images/default.jpg')} alt="cat" /></span>
		        <h5>{posts.email}</h5>
		        <p>{posts.date_posted}</p>
		        <div class="hashtags">
		          {posts.title}
		        </div>
		        <div class="description">
		          {posts.content}
		        </div>
		        <div class="actions">
			        <span><a href="">👍 like</a> </span>
			        <span><a href="">👎 dislike</a> </span>
			        <span>💬 <a class="" href="">comment</a> </span>			       
			        <div class="comment-box">
			          <form action="#">
			            <input type="text" name = "comment" /><input type = "submit" value = "Add Comment" />
			          </form>
			        </div>
			      	
			      </div>
		      </div>
		)
	}
	
	let _renderComment = (item)=>{
		console.log(item)
		return(
			<div class="comment">
	          <span class="comment-name">{item.user}</span>
	          <span class="comment-text">{item.comment}</span>
	        </div>
		)
	}

	return(
		<div>
		<div className = "mains">
		{_renderPost(post)}
		</div>
		</div>
	)
}