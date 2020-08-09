import React, {useEffect, useState} from 'react'
import {useHistory, Link} from 'react-router-dom'
import {followUserById, getToken} from './Function'

export default function Follow({match}) {
	const history = useHistory()
	useEffect(()=>{
		console.log(match.params.id)
		if(getToken() != null){
			followUser();
			setAdd('pass')
		}
		else{
			setAdd('fail')
		}
	})

	const [add, setAdd] = useState('')
	const followUser=()=>{
		followUserById(match.params.id)
			.then((res)=>{
				console.log(res);
			})
	}
	// body...
	if(add == 'pass'){
		return (
			<div>
				Added as a follower
			</div>
		)
	}
	else{
		return(<div> Please Login to continue <br /><Link to = {'/login'}>Click here to login</Link></div>)
	}
	
}