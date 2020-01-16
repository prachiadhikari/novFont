/*var test =function(){


}*/

//react ,react dom chinxa

//var react=require('react')
//common js architecture 
//module.exports={}
//export.varname=10;


//es6 use so import use hunxa
//export default test
//exports var a=10



/*var test=(a,b)=>{
	
}

const renderer=()=>{
	document.getElementById('normal').innerHTML=
`<p>this is test
<input /></p>
<p> ${new Date().toLocaleTimeString()}</p>`;

ReactDOM.render(
	//what to render----first param
	//where to render----sec param
//the element to be created is html
	React.createElement(
		'div',//1st --actual html element to be created
		{id:'test'},//2nd----id class properties,props
		'This div is created using react',

		React.createElement('input'),
		React.createElement('p',null,new Date().toLocaleTimeString())
		),
	document.getElementById('react')
	)


}


setInterval(renderer,1000)*/


//----------------------------------------------------->
//jsx
/*const lecture="jsx"
const element= <h1>Testing{lecture}</h1>;
ReactDOM.render(element, document.getElementById('jsx'));


ReactDOM.render(element, document.getElementById('input'));


//component creation
//two type- function bases, class based
//function based,so that it can be reused
//props is use to get property value dynamically

function Input(prep){
	return <input type="text">{prep.label}</input>
}

ReactDOM.render(<Input hint="enter text" />,document.getElementById('input'))

function Button(props){

	//no need to be props it can be any name
	return <button type="Submit">{props.label}</button>  
}
//save //button vitra j chainxa tei lekne
ReactDOM.render(<Button label="save" />, document.getElementById('jsx'))
//cancel
ReactDOM.render(<Button label="cancel"/>, document.getElementById('jsxx'))


*/
//import {Component} from React
/*class Button extends React.Component{ //props inbase class

	//console.log('props')
	render(){
		<button>{this.props.label}</button>
	}

}
*/
//state
/*class H1 extends React.Component
{

	constructor()
	{
		super()//parent class ko constrotor initialise garxa
		this.state=
		{
			testVar:10,
			testVArr:"this test",
			label:"Save"
		}
	}
	
	componentWillMount()
	{//before component is render in the front
		//this.setState({label:'Cancel'})
	}
	componentDidMount()
	{//this is afetr component is render in front
		this.setState({label:'Cancel'})

	}
	//update methods
	shouldComponentUpdate(nextProps,nextState)
	{//where component should be updated
		//tall return either true /false,default is true
		console.log(this.state);
		console.log(nextState);
		//return this.state.label !==nextState.label //true
		return true;
		


	}
	componentWillUpdate(nextProps,nextState)
	{//just before component updates
		//this.setState({label:'nothing'})
		console.log(nextState)

	}
	componentDidUpdate(prevProps,prevState)
	{//afetr component update
		console.log(prevState);

	}
	//unmount
	componentWillUnmount(){

	}
	render()
	{
		console.log(this.props)
		console.log(this.props.test)
		return <h1>{this.state.label}</h1>
	}
}*/


//event handling

/*class  Button extends React.component
{
	constructor()
	{
			super()
			//bind this to submit handler
			//this.submitEventHandler=this.submitEventHandler.bind(this)
			this.state={

			}
	}
/*	 submitEventHandler(){

	}*/
	//class properties of babel

/*	submitEventHandler=(event)=>{
		//event.preventDefault();


	}
	
	render(){
		return<button>Save</button>
	}
}

//arrow function
ReactDOM.render(<Button onClick={thiis.submitEventHandler}/>,document.getElementById('jsx'))
*/


//Form

/*class LoginForm extends React.Component{
	constructor(){
		super()

		this.state={
			username:'',
			password:'',
			validationMessage:'',
			validationMessages:''


		}
		//this.handelChange=this.handelChange.bind(this)
	}
	
	handelChange=(e) =>
	{
		console.log(this.state.username)
		console.log(e.target.value);//actual value from input box is the events target

		this.setState({username:e.target.value})
		if(e.target.value.length<10){
			this.setState({validationMessage:"username is not valid"})
		}
		else
		{
			this.setState({validationMessage:"it is ok"})
		}
		
	}

	handelChanges=(e) =>
	{
		this.setState({password:e.target.value})
		if(e.target.value.length<10){
			this.setState({validationMessages:"password is not valid"})
		}
		else
		{
			this.setState({validationMessages:"it is ok"})
		}	

    }
		
	
	handelSubmit=(e) =>
	{
		e.preventDefault();

	}


	render(){
		return(
				<form onSubmit={this.handelSubmit}>
				<label>Username: 
				
				<input  name="username" value={this.state.username} 
				onChange={this.handelChange}/>
				</label>
					<p>{this.state.validationMessage}</p>

					<label>Password: 
				
				<input  name="password" type="password" value={this.state.password} 
				onChange={this.handelChanges}/>
				</label>
					<p>{this.state.validationMessages}</p>
				<input style={{backgroundColor: "lightblue"}} type="submit" value="submit"/>
				</form>
			)
	}
}
ReactDOM.render(<LoginForm/>,document.getElementById('Login'))

class Select extends React.Component{
	constructor(){
		super()
		this.state={
			selectedValue:'jquery'
		}
	}

	changeHandler=(event) =>
	{
		this.setState({selectedValue:event.target.value});
		console.log(this.state.selectedValue);
	}
	submitHandler=(event) => {
		event.preventDefault()
	}

	render(){
		return(
			<form onSubmit={this.submitHandler}>
			<label>Please select prefered frontend:</label>
			<select value={this.state.selectedValue} onChange={this.changeHandler}>
			<option value="react">react</option>
			<option value="angular">angular</option>

			<option value="vue">vue</option>
			</select>

			</form>
			)
	}
}
ReactDOM.render(<Select />,document.getElementById('select'))

*/

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import{
	BrowserRouter as Router,
	Switch,
	Link,
	Route

} from 'react-router-dom'
import{
	Nav,Container,Row,Col,Card

} from 'react-bootstrap'

import Login from './component/Login/Login' 
import Registration from './component/Registration/Registration' 



class Index extends React.Component{
	constructor(){
				super()
	}
	//routing navigation reactnavigation and many other library, ract-router for nav
	//react-router-dom
	render(){
		return(

<Container>
  <Row>
    
    <Col sm={4}>
<h2 Welcome></h2>
    </Col>
  </Row>
  <Row>
			<div> {/*//for wrapping jsx comp or use Fragment<> </>
		*/}{/*<Login />*/}

		<Router>
		<div>

		<Nav variant="pills">
  <Nav.Item>
    <Nav.Link as={Link} to="/" >Home</Nav.Link>
  </Nav.Item>
   <Nav.Item>
    <Nav.Link as={Link} to="/registration">Registration</Nav.Link>
  </Nav.Item>
   <Nav.Item>
    <Nav.Link as={Link} to="/login">Login</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
  </Nav.Item>
  
 
</Nav>

		</div>
		<Col sm={8}>
  

    </Col>

		<Switch>
{/*
		<Route path="/">

			< Home/>

		</Route>*/}
		<Route exact path="/login">

			< Login/>

		</Route>
		<Route path="/login" component={Login}/>

		</Switch>
		<Switch>
{/*
		<Route path="/">

			< Home/>

		</Route>*/}
		<Route exact path="/registration">

			< Registration/>

		</Route>
		<Route path="/registration" component={Registration}/>

		</Switch>
		</Router>
		</div>
		</Row>

		</Container>
		)
	
	}
}

ReactDOM.render(<Index/>,document.getElementById('root'))