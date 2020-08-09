import axios from 'axios'


export const register = newUser => {
	return axios.post(' http://127.0.0.1:5000/user/register', {
	    username:newUser.username,
	    email : newUser.email,
	    password : newUser.password
	  }).then((da) => {
	    console.log('Register')
	    return da;
	  }).catch((error)=>{ 
	  	console.log(error.response)
	  	return error.response;
	  })
}

export const login = newUser =>{
	return axios.post(' http://127.0.0.1:5000/user/login', {
	    email : newUser.email,
	    password : newUser.password
	  }).then((data) => {
	    console.log(data)
	    return data;
	  }).catch((error)=>{
	    console.log(error)
	    return error
	  });	
}

export const addPost = newPost =>{
	const config = {
		headers:{
			'x-access-token' : localStorage.getItem('usertoken')
		}
	}
	return axios.post('http://127.0.0.1:5000/add/post', {
	    title : newPost.title,
	    content : newPost.content
	  }, config).then((data) => {
	    console.log(data)
	    return data;
	  }).catch((error)=>{
	    console.log(error.response);
	  });
}

//http://localhost:3000/register
//https://beeceptor.com/console/postapi

export const posts = () =>{
	return axios.get('http://127.0.0.1:5000/posts')
				.then((data) => {
					return data;
				})
				.catch((error) => {
					return error.response;
				})
}

{/* Profile */}
export const addProfile = (profileData) =>{
	const config = {
		headers:{
			'x-access-token' : localStorage.getItem('usertoken')
		}
	}
	return axios.post('http://127.0.0.1:5000/user/profile',profileData, config)
			.then((data)=>{
				return data;
			})
			.catch((error) => {
				return error.response
			})
}

export const getToken = ()=>{
	return localStorage.getItem('usertoken') || null
}

{/*Users List*/}
export const usersList =(id)=>{
	const config = {
		headers:{
			'x-access-token' : localStorage.getItem('usertoken')
		}
	}
	console.log(id)
	return axios.get('http://127.0.0.1:5000/users/'+id)
			.then((data) => {
					return data;
				})
				.catch((error) => {
					return error.response;
				})
}


export const search = (q) =>{
	return axios.get('http://127.0.0.1:5000/search?search='+q)
			.then((res)=>{
				return res
			})
			.catch((e) => {
				return e.response;
			})
}


export const postbyId = (id) =>{
	return axios.get('http://127.0.0.1:5000/post/'+id)
			.then((res) =>{
				return res;
			})
			.catch((err)=>{
				return err.response
			})
}


export const postComment =(data,id)=>{
	const config = {
		headers:{
			'x-access-token' : localStorage.getItem('usertoken')
		}
	}
	return axios.patch('http://127.0.0.1:5000/'+id+'/comment',{comment: data},config)
			.then((res)=>{
				return res
				})
}

export const followUserById = (id)=>{
	const config = {
		headers:{
			'x-access-token' : localStorage.getItem('usertoken')
		}
	}
	console.log(id, config)
	return axios.post('http://127.0.0.1:5000/follow/'+id, {accept:true},config)
				.then((res)=>{
					return res;
				})
				.catch((err)=>{
					return err.response;
				})
}

{/*Account Details*/}
export const myAccount = (id)=>{
	return axios.get('http://127.0.0.1:5000/myaccount/'+id)
			.then((res)=>{
				
				return res;
			})
}


export const testfile = (data) =>{
	const config = {
		headers:{
			'x-access-token' : localStorage.getItem('usertoken')
		}
	}
	return axios.post('http://127.0.0.1:5000/test', data, config)
			.then((res)=>{
				console.log(res)
			})
			.catch((err)=>{
				console.log(err.response)
				
			})
}


export const updateProfileInformation = (data, profileId) =>{
	const config = {
		headers:{
			'x-access-token' : localStorage.getItem('usertoken')
		}
	}
	return axios.post('http://127.0.0.1:5000//updateprofile/'+profileId, data, config)
			.then((res)=>{
				console.log(res)
				return res
			})
			.catch((err)=>{
				console.log(err.response)
			})
}

export const LikePost =(post_id) =>{
	const config = {
		headers:{
			'x-access-token' : localStorage.getItem('usertoken')
		}
	}
	return axios.post('http://127.0.0.1:5000/like/post/'+post_id, {accept:true}, config)
			.then((res)=>{
				console.log(res)
				return res
			})
			.catch((err)=>{
				console.log(err.response)
			})
}

export const DisLikePost =(post_id) =>{
	const config = {
		headers:{
			'x-access-token' : localStorage.getItem('usertoken')
		}
	}
	return axios.post('http://127.0.0.1:5000/dislike/post/'+post_id, {accept:true}, config)
			.then((res)=>{
				console.log(res)
				return res
			})
			.catch((err)=>{
				console.log(err.response)
			})
}