import React, {Component} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {posts, getToken, postComment} from './Function'
import './CSS/main.css'

class Home extends Component{
	constructor(props){
		super(props);
		this.state = {
			posts : [],
			ready : false,
			error : '',
			comment : '',
			postId : 0,
			likemessage : ''
		}
	}

	save = (e)=>{		
		e.preventDefault();
		console.log(typeof(e.target[0].value), this.state.comment)
		postComment(this.state.comment,e.target[0].value)
					.then((res) =>{
						console.log(res);
						this.props.history.push('/');
					})
					.catch((err)=>{
						this.setState({
							error:"Error Occured"
						})
					})

	}

	handleChange=(event)=>{
		this.setState({

			comment : event.target.value
		})
		
	}

	
	componentDidMount(){
		this.setState({
			ready: false	
		});

		posts().then((res) => {
			this.setState({
				posts : res.data.message,
				ready : true
			})
			console.log(this.state.posts)
		}).catch((err)=>{
			console.log(err)
			this.setState({
				error : 'No data found',
				ready : true
			})
		});
	}

	_renderPost(posts){
		return(
			<div class="name">
			{()=> this.setState({postId: `${posts.post_id}`})}
		      	<span> <img src={require('./images/default.jpg')} alt="cat" /></span>
		        <h5>{posts.email}</h5>
		        <p>{posts.date_posted}</p>
		        <div class="hashtags">
		          <Link to= {`/post/${posts.post_id}`}>{posts.title}</Link>
		        </div>
		        <div class="description">
		          {posts.content}
		        </div>
		        {this.state.likemessage}
		        <div class="actions">
			       {this._renderLikes(posts.post_id,posts.likes)}
			       {this._renderDisLikes(posts.post_id,posts.dislikes)}
			        <span>💬 <a class="" href="">comment</a> </span>			       
			        <div class="comment-box">
			          <form method = "post" onSubmit = {this.save}>
			          	<input type="hidden" name = "id" value = {posts.post_id} />
			            <input type="text" name ="comment" onChange = {this.handleChange}/><input type = "submit" value = "Add Comment" />
			          </form>
			        </div>
			      	<div class="comments">
				      	<h3>Comments</h3>
				      	{posts.comments.map(item => this._renderComment(item))}
			      	</div>
			     </div>
		      </div>
		)
	}
	
	_renderLikes(id,likes){
		return(
			<span>{likes}<Link to= {`/like/${id}`}>👍 like</Link>  </span>
		)
	}

	_renderDisLikes(id,dislikes){
		return(
			 <span>{dislikes}<Link to= {`/dislike/${id}`}>👎 dislike</Link> </span>
		)
	}

	_renderComment(item){
		return(
			<div class="comment">
	          <span class="comment-name">{item.user}</span>
	          <span class="comment-text">{item.comment}</span>
	          <span><a href="">  👍 </a> </span>
	          <span><a href="">  👎 </a> </span>
	        </div>
		)
	}

	render(){
		const {posts, ready, error} = this.state
		if(!ready){
			return <div> Loading....</div>
		}
		
		return(
			
			<div className = "mains">
			{error}
			{posts.map(item =>(
				<div class="post"> 
				      {this._renderPost(item)}     
				</div>
				))}
			</div>
		)
		
	}
}

export default Home;