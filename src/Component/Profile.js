import React, {Component, useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import './CSS/style.css'
import {addProfile} from './Function'

function Profile(){

	useEffect(()=>{
		if(!localStorage.getItem('usertoken')){
			history.push('/')
		}
	})

	const history = useHistory()

	const [profile, setProfile] = useState({
		firstName:'',
		lastName:'',
		gender:'',
		skills:'',
		currentPosition:'',
		totalExp :''
	})

	let handleChange= (e)=>{
		let name = e.target.name
		let value = e.target.value
		profile[name] = value
		setProfile(profile);
	}

	let save = (e) =>{
		e.preventDefault()
		console.log(profile);
		addProfile(profile)
			.then((res)=>{
				console.log(res)
				history.push('/');
			})
			.catch((err)=>{
				console.log(err)
			})
	}

	return(
			<div class="container">
		       <table class="table table-striped">
		          <tbody>
		             <tr>
		                <td colspan="1">
		                   <form class="well form-horizontal" onSubmit= {save}>
		                      <fieldset>
		                         <div class="form-group">
		                            <label class="col-md-4 control-label">First Name</label>
		                            <div class="col-md-80 inputGroupContainer">
		                               <div class="input-group">
		                               <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
		                               <input id="firstName" name="firstName" placeholder="First Name" class="form-control" required="true" type="text" onChange = {handleChange}/>
		                               </div>
		                            </div>
		                         </div>
		                         <div class="form-group">
		                            <label class="col-md-4 control-label">Last Name</label>
		                            <div class="col-md-80 inputGroupContainer">
		                               <div class="input-group">
		                               <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
		                               <input id="lastName" name="lastName" placeholder="Last Name" class="form-control" required="true" type="text" onChange = {handleChange}/>
		                               </div>
		                            </div>
		                         </div>
		                         <div class="form-group">
		                            <label class="col-md-4 control-label">Gender</label>
		                            <div class="col-md-80 inputGroupContainer">
		                               <div class="input-group">
		                               <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
		                               <input id="gender" name="gender" placeholder="Gender" class="form-control" required="true" type="text" onChange = {handleChange}/>
		                               </div>
		                            </div>
		                         </div>
		                         <div class="form-group">
		                            <label class="col-md-4 control-label">Skills</label>
		                            <div class="col-md-80 inputGroupContainer">
		                               <div class="input-group"><span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
		                               <input id="skills" name="skills" placeholder="Skills" class="form-control" required="true" type="text" onChange = {handleChange}/>
		                               </div>
		                            </div>
		                         </div>
		                         
		                         <div class="form-group">
		                            <label class="col-md-4 control-label">Current Position</label>
		                            <div class="col-md-80 inputGroupContainer">
		                               <div class="input-group">
		                               <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
		                               <input id="currentPosition" name="currentPosition" placeholder="Current Position" class="form-control" required="true"  type="text" onChange = {handleChange}/>
		                               </div>
		                            </div>
		                         </div>
		                         
		                         <div class="form-group">
		                            <label class="col-md-4 control-label">Total Experience</label>
		                            <div class="col-md-80 inputGroupContainer">
		                               <div class="input-group">
		                               <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
		                               <input id="totalExp" name="totalExp" placeholder="Total Experience" class="form-control" required="true" type="text" onChange = {handleChange}/></div>
		                            </div>
		                         </div>
		                        
		                          <div class="form-group">
					                    
					                    <input type="submit" name="submit" class="btn btn-info btn-md" value="submit"/>
					                </div>
		                      </fieldset>
		                   </form>
		                </td>
		                
		             </tr>
		          </tbody>
		       </table>
    </div>
	)
}

export default Profile;