import React from 'react';
 import  './signin.css';
 import CustomButton from '../../components/customButton/customButton.js';

 class SignIn extends React.Component{
     constructor(props){
      super(props);
        this.state = {
           
            email:'',
            password:'',
            remember:' '
        };
        

      }
      handleSubmit=async event =>{
        event.preventDefault();
        let user = localStorage.getItem("signupdata");
        let savedPerson = JSON.parse(user);
        if(savedPerson.email===this.state.email && savedPerson.pass===this.state.password){
          let path = `/task`;
          this.props.history.push(path);
        }else{
          alert("user does not exist");
        }
       

        
        this.setState({ email:'', password:''});
        };
      
        handleChange=(e) =>{
            const {name,value} = e.target
            this.setState({[name]:value});
            
      
        
    };

      render(){
          return(
          
            <div className='sign-up'>
            <h1 className='title'>Log In!</h1>
            

            <form  onSubmit= {this.handleSubmit}>

               
                <fieldset className="fieldset">
                <legend className="legend-tittle">Email</legend>
                <input
                className='input'
                name="email" 
                type="email" 
                onChange={this.handleChange} 
                value={this.state.email}
                placeholder="Enter Email"
                required/>
                </fieldset>

                <fieldset className="fieldset">
                <legend className="legend-tittle">Password</legend>
                <input
                className='input'
                name="password" 
                type="password" 
                onChange={this.handleChange} 
                value={this.state.password}
                placeholder="Enter Password"
                 required/>
                </fieldset>

               
              
               
                <div className="checkbox">
                  <input type="checkbox"   name="remember" value={this.state.remember}/>
                  <span >Remember Me</span>
                </div>
                  <div className='buttons'>
                    <CustomButton type="submit">Log In</CustomButton>
                 </div>
            </form>
            </div>
          
             )
      }
 }

 export default SignIn;