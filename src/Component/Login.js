import React, {useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {login} from './Function'
import './CSS/account.css'

function Login(){
	useEffect(()=>{
		if(localStorage.getItem('usertoken')){
			history.push('/')
		}
	})

	const history = useHistory()
	const [error, setError] = useState('');
	const [account, setAccount] = useState({
		email : '',
		password : ''
	});

	let handleChange = (e) =>{
		let name = e.target.name
		let value = e.target.value
		account[name] = value
		setAccount(account);
	}

	let save = (e) =>{
		e.preventDefault()
		login(account).then((res) =>{
			
			if (res && res.status === 200){
				localStorage.setItem('usertoken', res.data['token']);
				localStorage.setItem('id', res.data['id']);
				history.push('/');
			}
			else{
				
				setError(res.data.error)
				console.log(res.data.error)
			}
			
		})
		.catch((err) =>{
			console.log(err)
			setError('Server is not responding');
		})
	}
	return(
		<div id = "main">
			<div id ="login">
				<h3 class="text-center text-white pt-5">Login form</h3>
				<div class="container">
		            <div id="login-row" class="row justify-content-center align-items-center">
		                <div id="login-column" class="col-md-6">
		                    <div id="login-box" class="col-md-12">
		                        <form id="login-form" class="form" method="post" onSubmit = {save}>
					                {error}
					                <h3 class="text-center text-info">Login</h3>
					                <div class="form-group">
					                	<label for="email" class="text-info">Username:</label> <br />
					                	<input type="text" name="email" id="email" class="form-control" onChange = {handleChange}/>
					                </div>
					                <div class="form-group">
					                    <label for="password" class="text-info">Password:</label><br />
					                    <input type="text" name="password" id="password" class="form-control" onChange = {handleChange}/>
					                </div>
					                <div class="form-group">
					                    <label for="remember-me" class="text-info"><span>Remember me</span> 
					                    <span><input id="remember-me" name="remember-me" type="checkbox" /></span></label><br/>
					                    <input type="submit" name="submit" class="btn btn-info btn-md" value="submit"/>
					                </div>
					            </form>
					            <Link to={'/register'}> Register Here</Link>
		                    </div>
		                </div>
		            </div>
	        	</div>
	   		</div>
   		</div>
	);
}

export default Login;