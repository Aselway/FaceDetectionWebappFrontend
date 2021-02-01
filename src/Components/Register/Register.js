import React from 'react';
import './Register.css';
class  Register extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            registerName:'',
            registerEmail:'',
            registerPassword:'',
        }
    }
    onNameChange = (event) =>{
        this.setState({registerName: event.target.value})
    }
    onEmailChange = (event) =>{
        this.setState({registerEmail: event.target.value})
    }
    onPasswordChange = (event) =>{
        this.setState({registerPassword: event.target.value})
    }
    onSubmitRegister = () =>{
        fetch(' https://whispering-basin-87015.herokuapp.com/register',{
            method: 'post',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
                name: this.state.registerName,
                email: this.state.registerEmail,
                password: this.state.registerPassword
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user.id){

                this.props.loadUser(user)
                this.props.onRouteChange('signout')
            }
            else
            alert('Invalid input')
        })
        
    }
    render(){
    return(
        <div className='registerbox'>
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center sign back">
         <main className="pa4 black-80 ">
            <div className="measure ">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0 white">Register</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f4 white" htmlFor="name">Name</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100 white" type="text" name="name"  id="name" onChange={this.onNameChange}/>
                </div>
                <div className="mt3">
                    <label className="db fw6 lh-copy f4 white" htmlFor="email-address">Email</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100 white" type="email" name="email-address"  id="email-address" onChange={this.onEmailChange}/>
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f4 white" htmlFor="password">Password</label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100 white" type="password" name="password"  id="password" onChange={this.onPasswordChange}/>
                </div>
                </fieldset>
                <div className="">
                <input className="b ph3 pv2 input-reset ba b--white bg-grey grow pointer f6 dib black br2 dim" type="submit" value="Register" onClick={this.onSubmitRegister}/>
                </div>
                <div className="lh-copy mt3">
                <p className="f6 link dim db pointer white" onClick={()=> this.props.onRouteChange('signin')}><b>Already Registered..??</b></p>
                </div>
            </div>
            </main>
            </article>
        </div>
    );
    }
}

export default Register;