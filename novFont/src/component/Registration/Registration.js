import React from 'react'
import Axios from 'axios'
import {Redirect} from 'react-router-dom';
import{

	Form,Button,Col,Row

} from 'react-bootstrap'



class Registration extends React.Component{
	constructor(){
			super()
			this.state={
				username:'',
				password:'',
				validationMessage:'',
				redirect:false
			}
	}
	usernameChangeHandler= (event) => {

		// this.setState({username:event.target.value})

		if (event.target.value.length<6){
			this.setState({validationMessage:'username should require more than 6 charecter'})
		}
		this.setState({username:event.target.value})

	}

	passwordChangeHandler= (event) => {
		this.setState({password:event.target.value})

	}
	formsubmitHandler= (e) => {
		e.preventDefault()
		// console.log(this.state)
		var headers={
			'Content-Type':'application/json'

		}
		var data ={
			username:this.state.username,
			password:this.state.password
		}

		//1st url, 2 data js obj, 3 header js obj
		Axios.post('http://localhost:3002/registration', data,headers)
		.then((response) => {

			console.log(response);

			if(response.status === 200){
				this.setState({redirect:true})
			}

		})
		.catch((err) => {

		})

		//call api to post data use Axiospacjage which is external
	}


	render(){

		// what to render based on state
		console.log(this.state.redirect)
		if(this.state.redirect){

			return (

				<Redirect to='/login' />

				)

			console.log('asdasdas')
		}

		return(


					<Form onSubmit={this.formsubmitHandler}>
					  <Form.Row>
					    <Form.Group as={Col} controlId="formGridEmail">
					      <Form.Label>Email</Form.Label> 
					      <Form.Control type="email" placeholder="Enter email"  value={this.state.username} onChange={this.usernameChangeHandler}/>
					      <Form.Text className="text-muted">
					      {this.state.validationMessage}
					    </Form.Text>
					    </Form.Group>

					    <Form.Group as={Col} controlId="formGridPassword">
					      <Form.Label>Password</Form.Label>
					      <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.passwordChangeHandler} />
					    </Form.Group>
					  </Form.Row>

					 

					  <Button variant="primary" type="submit">
					    Submit
					  </Button>
					</Form>

			)

	}
}
export default Registration