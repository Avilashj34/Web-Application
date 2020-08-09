import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { LikePost, getToken} from './Function'

export default function Like({match}){
	useEffect(()=>{
		console.log(match.params.id)
		if(getToken() != null && match.params.id != undefined){
			savelike()
			setAdd('pass')	
		}
		else{
			setAdd('fail')
		}
		
		
	},[])
	const [add, setAdd] = useState('')
	const [message, setMessage] = useState('')

	let savelike = () =>{

		LikePost(match.params.id).then((res)=>{
				setMessage('Post Liked')
			})
			.catch(()=>{
				setMessage('Post Liked')
			})
	}

	if(add == 'pass'){
		return (
			<div>
				<div> {message}</div>
				Thanks For Liking Post!! Happy Liking <br /> <Link to = {'/'}>Click here to go back</Link>
			</div>
		)
	}
	else{
		return(<div> Please Login to continue <br /><Link to = {'/login'}>Click here to login</Link></div>)
	}
}