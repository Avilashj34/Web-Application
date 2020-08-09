import React, {Component} from 'react'
import './CSS/users.css'
import {Link} from 'react-router-dom'
import {usersList, search, getToken} from './Function'
import './CSS/search.css'



class Users extends Component{
	constructor(){
		super();
		this.state = {
			query : '',
			users : [],
			ready : false,
			error : '',
			load : true
		}
	}

	 handleInputChange = (event) =>{
        this.setState({
        	query : event.target.value
        })  
    }

    searchData = (e) =>{
    	e.preventDefault()
    	
    	console.log(this.state.query)
    	search(this.state.query)
    		.then((res) =>{
    			console.log(res)
    			if(res.status == 200){
    				console.log(res.data.message)
    				this.setState({
    					users : res.data
    				})
    			}
    			else{
    				this.setState({
    					load : false
    				})
    			}
    			
    		})
    		.catch((error) =>{
    			console.log(error)
    			this.setState({
    				error:"Error Occured"
    			})
    		})
    	
    }

	componentDidMount(){
		this.setState({
			ready: false
		});

		usersList(localStorage.getItem('id')).then((res) =>{
					console.log(res.data)
					console.log(res.data)
					if(res.data){
						this.setState({
							users:res.data, 
							ready:true,
							searchString :res.data.message
						})
					}
				})
				.catch((e)=>{
					console.log(e)
					this.setState({
						error : 'No data found',
						ready : true
					})
				});
		}


	_renderMethod(users){
		if(users.message && users.message.length > 0){
		return(
			
			<div  className = "cards">
            	{users.message.map(item=>(
            		<div>{this._renderData(item)}</div>
            		))}
			</div>
		)
	}
	}



	_renderData(data){
		return(
			<div>
				<div className="card">
				  <img src={require('./images/default.jpg')} alt="John" style={{width:'100%'}} />
				  <h1>{data.first_name} </h1>
				  <h4>{data.last_name}</h4>
				  <b>------------------------------------------</b>
				  <p className="title">{data.current_position}</p>
				  <p>{data.total_experience}</p>
				  {data.skills}
				  <p><Link to= {`/follow/${data.profile_id}`}>Follow</Link></p>
				</div>
			</div>
		)
	}

	_renderLoading(){
		return <div> Loading ..... </div>
	}

	render(){
		const {users, ready, error, load} = this.state

		if(!ready){
			return(
				<div>
	            	{this._renderLoading()}
				</div>
			)
		}
		else{
			if(load){
				return(
				<div>
					<div className= "search">
						<form onSubmit = {this.searchData}>
						  <input type="text" name="search" placeholder="Search.." onChange = {this.handleInputChange}/>
						</form>
					</div>
					<div>
						{users.message.length > 0 ? this._renderMethod(users) : <h1> No result Found</h1>}
					</div>
				</div>				
			)
			}
			else{
				return(<div>
									<h1> No result Found</h1>
								</div>)
			}
		}
	}
}


export default Users;
