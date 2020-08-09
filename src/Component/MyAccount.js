import React, {useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {myAccount, getToken, testfile, updateProfileInformation} from './Function'
import './CSS/myaccount.css'

export default function MyAccount(){
	useEffect(()=>{
		if(getToken() == null){
			history.push('/')
		}
		console.log()
		_loadData();
	},[])

	let profileId = 0
	const history = useHistory()
	const [items, setItems] = useState({})
	const [profile, setProfile] = useState({})
	const [message, setMessage] = useState('')

	const [updateProfile, setUpdateProfile] = useState({
		experience:'',
		skills:'',
		position:''
	})
	const [error, setError] = useState('')
	const [account, setAccount] = useState({
		username:'',
		image : ''
	})	

	let handleChange = (e) =>{
		let name = e.target.name
		let value = e.target.value
		account[name] = value
		setAccount(account);
	}

	const save = (e)=>{
		e.preventDefault();
		/*const data = new FormData();
		data.append('file', fileInput.file);*/
		console.log(account)
		testfile(account)
	}

	let handleProfileChange = (e) =>{
		let name = e.target.name
		let value = e.target.value
		updateProfile[name] = value
		setUpdateProfile(updateProfile);
	}

	const saveProfile = (e)=>{
		e.preventDefault();
		console.log(updateProfile)
		profileId = localStorage.getItem('profileId') || null
		updateProfileInformation(updateProfile,profileId)
			.then((res)=>{
				if(res && res.status === 200){
					setMessage(res.data.message);
					history.push('/myaccount')
				}
			})
			.catch((err)=>{
				console.log(err);
				setError("Profile not updated")
			})
	}

	const _loadData= ()=>{
		myAccount(localStorage.getItem('id'))
			.then((res)=>{
				if(res.status === 200){			
					const items = res.data.message
					setItems(items)
					const profile = items.profile
					localStorage.setItem('profileId', profile.profile_id)
					setProfile(profile)
					console.log(profile)
				}
				else{
					console.log(res.data.error)
				}
			})
	}

	const _renderProfile = (profile) =>{
		if(profile){
			return(
				<div class="col-md-4">
		          <div class="content-section">
		            <legend class="border-bottom mb-4">Profile Information</legend>
		            <p class='text-muted'>Your profile Information
		              <ul class="list-group">
		                <li class="list-group-item list-group-item-light"><b>Name</b> : {profile.first_name} {profile.last_name}</li>
		                <li class="list-group-item list-group-item-light"><b>Position </b>:{profile.current_position}</li>
		                <li class="list-group-item list-group-item-light"><b>Gender </b>: {profile.gender}</li>
		                <li class="list-group-item list-group-item-light"><b>Skills </b>: {profile.skills}</li>
		                <li class="list-group-item list-group-item-light"><b>Experience </b>:{profile.total_experience}</li>

		              </ul>
		            </p>
		          </div>
		        </div>
			)
		}
		else{
			return(
			<div class="col-md-4">
	          <div class="content-section">
	            <legend class="border-bottom mb-4">Profile Information</legend>
	            <p class='text-muted'>Please Fill profile Information</p>
	          </div>
	        </div>)
		}
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
				        <img class="rounded-circle account-img" src={require('./images/default.jpg')} />
				        <div class="media-body">
				          <h2 class="account-heading">{items.username}</h2>
				          <p class="text-secondary">{items.email}</p>
				          <p class="text-secondary">CreatedAt : {items.createdAt}</p>
				        </div>
				      </div>
				        <form method="POST" encType="multipart/form-data" onSubmit = {save}>  
				            <fieldset class="form-group">
				                <legend class="border-bottom mb-4">Update Account Information</legend>
				                <div class="form-group">
				                    <label htmlFor="username" class="text-info">Username:</label> <br />
					                <input type="text" name="username" id="username" class="form-control"  onChange = {handleChange} />
				                        <div class="invalid-feedback">
				                                <span>{error} </span>
				                        </div>
				                </div>
				                <div class="form-group">
				                    <label htmlFor="email" class="text-info">Email:</label> <br />
					                <input type="text" name="email" id="email" value = {items.email} class="form-control" readOnly/>
				                        <div class="invalid-feedback">
				                                <span>{error} </span>
				                        </div>
				                </div>
				                <div class="form-group">
				                     <label htmlFor="image" class="text-info">Upload Images</label> <br />
					                <input type="file" name="image" id="image"  class="form-control" onChange = {handleChange}/>
				                        <div class="invalid-feedback">
				                                <span>{error} </span>
				                        </div>
				                </div>
				                <input type = "submit" value="Update" readOnly/>
				            </fieldset>				     
				        </form>

				        <legend class="border-bottom mb-4"></legend>
				        <h1>{message} </h1>
				        <legend class="border-bottom mb-4">Update Profile Information</legend>

				        <form method="POST"onSubmit = {saveProfile}>  
				            <fieldset class="form-group">
				                
				                <div class="form-group">
				                    <label htmlFor="position" class="text-info">Current Position:</label> <br />
					                <input type="text" name="position" id="position" class="form-control"  onChange = {handleProfileChange} />
				                        <div class="invalid-feedback">
				                                <span>{error} </span>
				                        </div>
				                </div>
				                <div class="form-group">
				                    <label htmlFor="experience" class="text-info">Experience:</label> <br />
					                <input type="text" name="experience" id="experience" class="form-control"  onChange = {handleProfileChange}/>
				                        <div class="invalid-feedback">
				                                <span>{error} </span>
				                        </div>
				                </div>
				                <div class="form-group">
				                     <label htmlFor="skills" class="text-info">Skills</label> <br />
					                <input type="text" name="skills" id="skills"  class="form-control" onChange = {handleProfileChange}/>
				                        <div class="invalid-feedback">
				                                <span>{error} </span>
				                        </div>
				                </div>
				                <input type = "submit" value="Update" readOnly/>
				            </fieldset>				     
				        </form>

				        
				        

				    </div>

		        </div>
		        {_renderProfile(profile)}
		      </div>
		    </main>
		</div>
	)
}