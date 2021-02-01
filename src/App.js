import React,{Component} from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navigation from './Components/Navigation/Navigation';
//import Logo from './Components/Logo/Logo';
import SignIn from './Components/SignIn/SignIn';
import Rank from './Components/Rank/Rank';
import Register from './Components/Register/Register';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';

const particlesOptions={
  particles:{
    number:{
      value:80,
      density:{
        enable:true,
        value_area:800
      }
    }
  }
}
const initialState ={
  input:'',
  imageUrl:'data:image/jpeg;base64,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',
  box:{},
  route:'signin',
  user:{
        id: '',
        name:'',
        email:'',
        entries:0,
        joined: ''
  }
};
class App extends Component{
  constructor(){
    super() 
    this.state = initialState;
  }
  loadUser = (data) => {
    this.setState({user:
            {id: data.id,
            name:data.name,
            email: data.email,
            entries:data.entries,
            joined: data.joined}
    })
  }
  calculateFaceLocation = (data )=> {
      const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
      const image = document.getElementById('inputimage');
      const width = Number(image.width);
      const height = Number(image.height);
      return {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    }

    displayFaceBox = (box) => {
      this.setState({box: box});
     
    }
  onchange = (event) => {
    this.setState({input: event.target.value})
  }
  onclickdetect = () => {
    this.setState({imageUrl: this.state.input})
    fetch(' https://whispering-basin-87015.herokuapp.com/imageurl',{
          method:'post',
          headers:{'Content-Type' : 'application/json'},
          body: JSON.stringify({
            input: this.state.input
          })
         })
        .then(response=>response.json())
    .then(response =>{
      if(response){
        fetch(' https://whispering-basin-87015.herokuapp.com/image',{
          method:'put',
          headers:{'Content-Type' : 'application/json'},
          body: JSON.stringify({
            id: this.state.user.id
          })
         }).then(response=> response.json())
        .then(count => {
             this.setState(Object.assign(this.state.user,{entries:count}))
         })
         .catch(err=> console.log(err))
      }
      this.displayFaceBox(this.calculateFaceLocation(response))})
    .catch(err => console.log(err));
  }
  onRouteChange = (route) =>{
    if(route==='signin')
    {
        this.setState(initialState);
    }
    this.setState({route:route})
  }
   render(){
     const { route, imageUrl, box} =this.state;
    return (
      <div>
        <Particles className='particles' params={particlesOptions}/>
        <Navigation onRouteChange={this.onRouteChange} route={route}/>
        { route==='signin'
        ?
        <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser}/> 
        :
        route==='register'? <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>:
        <div>{/*<Logo />*/}
        <Rank name={this.state.user.name} entries={this.state.user.entries}/>
        <ImageLinkForm onchange={this.onchange} onclickdetect={this.onclickdetect} />
        <FaceRecognition box={box} imageUrl={imageUrl}/></div>
        }
      </div>
    );
   }
  
}

export default App;
