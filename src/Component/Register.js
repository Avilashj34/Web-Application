import React, {useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {register} from './Function'

function Register(){

	useEffect(()=>{
		if(localStorage.getItem('usertoken')){
			history.push('/home')
		}
	})

	const history = useHistory();

	let [account, setAccount] = useState({
		username : '',
		email : '',
		password : ''
	});

	let [message, setMessage] = useState('')
	

	let handleChange = (e)=>{
		let name = e.target.name
		let value = e.target.value
		account[name] = value
		setAccount(account);
	}

	let save = (e) =>{
		e.preventDefault()
		register(account).then((res) => {
			if(res.status === 201){
				console.log(res.data['message'])
				setMessage(res.data['message'])
				history.push('/login')
			}
			else{
				console.log(res);
				setMessage(res.data['error'])
			}
		})
		console.log(account)
	} 

	return(
		<div id = "main">
			<div id ="register">
				<h3 class="text-center text-white pt-5">Registration form</h3>
				<div class="container">
		            <div id="register-row" class="row justify-content-center align-items-center">
		                <div id="register-column" class="col-md-6">
		                    <div id="register-box" class="col-md-12">
		                        <form id="register-form" class="form" method="post" onSubmit = {save}>
					                <h3 class="text-center text-info">Register</h3>
					                <div class="form-group">
					                	<label for="username" class="text-info">Username:</label> <br />
					                	<input type="text" name="username" id="username" class="form-control" onChange = {handleChange} />
					                </div>
					                <div class="form-group">
					                    <label for="email" class="text-info">Email:</label><br />
					                    <input type="text" name="email" id="email" class="form-control" onChange = {handleChange} />
					                </div>	
					                <div class="form-group">
					                    <label for="password" class="text-info">Password:</label><br />
					                    <input type="text" name="password" id="password" class="form-control" onChange = {handleChange}/>
					                </div>
					                <div class="form-group">
					                    <label for="remember-me" class="text-info"></label><br/>
					                    <input type="submit" class="btn btn-info btn-md" value="submit"/>
					                </div>
					            </form>
					            <Link to={'/login'}> Login Here</Link>
		                    </div>
		                </div>
		            </div>
	        	</div>
	   		</div>
   		</div>
	)
}

export default Register;