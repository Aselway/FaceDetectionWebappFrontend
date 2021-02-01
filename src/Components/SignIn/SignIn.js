import React from 'react'
import './SignIn.css'
class SignIn extends React.Component{
        constructor(props){
            super(props);
            this.state ={
                signInEmail:'',
                signInPassword:'',
            }
        }
        onEmailChange = (event) =>{
            this.setState({signInEmail: event.target.value})
        }
        onPasswordChange = (event) =>{
            this.setState({signInPassword: event.target.value})
        }
        onSubmitSignIn = () =>{
            fetch(' https://whispering-basin-87015.herokuapp.com/signin',{
                method: 'post',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify({
                    email: this.state.signInEmail,
                    password: this.state.signInPassword
                })
            })
            .then(response=> response.json())
            .then(data => {
                if(data.id){
                    this.props.loadUser(data)
                    this.props.onRouteChange('signout')
                }
                else
                alert('Wrong Email ID or Password')
            })
            
        }
        render(){
            return(
                <div className="signinblock">
                    <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center sign">
                 <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0 white">Sign In</legend>
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
                        <input className="b ph3 pv2 input-reset ba b--white bg-greyt grow pointer f6 dib black br2 dim" type="submit" value="Sign in" onClick={this.onSubmitSignIn}/>
                        </div>
                        <div className="lh-copy mt3">
                        <p className="f6 link dim db pointer white" onClick={()=> this.props.onRouteChange('register')}><b>Register</b></p>
                        </div>
                    </div>
                    </main>
                    </article>
                </div>
        
    
    );
}
}

export default SignIn;