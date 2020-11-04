import React from 'react';
 import  './signup.css';
 import CustomButton from '../../components/customButton/customButton.js';
 
 class SignUp extends React.Component{
     constructor(props){
      super(props);
        this.state = {
            username:'',
            email:'',
            password:'',
            confirmpassword:'',
            terms:false,
           
           
        };
        

      }
      handleSubmit=(event) =>{
        event.preventDefault();
        const{email,password,confirmpassword,terms}=this.state;
        if(password!==confirmpassword){
            alert("password don't match");
            return;
        }
        if(terms!==true){
          alert("please accept terms & conditions");
          return;
        }
       
        let data={email:email, pass:password}
        localStorage.setItem('signupdata',JSON.stringify(data));
        let path = `/signin`;
        this.props.history.push(path);
        this.setState({ username:'',email:'', password:'',confirmpassword:''});
        };
      
        handleChange=(e) =>{
          const {name,value} = e.target;
          this.setState({[name]:value});
          };
        handleClick=()=>{
          this.setState({terms :!this.state.terms});
          console.log(this.state.terms);
        }

      render(){
          return(
            <div className='signup-back'>
            <div className='sign-up'>
            <h1 className='title'>Sign Up!</h1>
            

            <form  onSubmit= {this.handleSubmit}>

                <fieldset className="fieldset">
                <legend className="legend-tittle">Username</legend>
                <input
                className='input'
                name="username" 
                type="text" 
                onChange={this.handleChange} 
                value={this.state.username}
                placeholder="Enter User Name"
                required/>
                </fieldset>
                
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

                <fieldset className="fieldset">
                <legend className="legend-tittle">Confirm</legend>
                 <input
                 className='input'
                 name="confirmpassword" 
                 type="password" 
                 onChange={this.handleChange} 
                 value={this.state.confirmpassword}
                 placeholder="Confirm Password"
                  required/>
                </fieldset>

              
               
                <div className="checkbox">
                  <input type="checkbox"  onClick={this.handleClick}/>
                  <span > I accept the terms & conditions</span>
                </div>
                  <div className='buttons'>
                    <CustomButton type="submit">Sign Up</CustomButton>
                 </div>
            </form>
            </div>
            </div>
          
             )
      }
 }

 export default SignUp;