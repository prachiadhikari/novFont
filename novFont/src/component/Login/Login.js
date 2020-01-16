import React from 'react'
// import Button from '../Button/Button'
import {
	Button
} from 'react-bootstrap'


class Login extends React.Component{
	constructor(){
			super()
	}
	render(){
		return(
			<div>
					<form>
				<label>Username: 
				
				<input  name="username" type="text" hint="Please Enter Username
			"/>

				</label>

					<label>Password: 
				
				<input  name="password" type="password" />
				</label>
			
<Button variant="primary">Login</Button>
				</form>
				</div>

			)

	}
}
export default Login