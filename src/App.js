import logo from './logo.svg';
import './App.css';
import { GoogleAuthProvider,getAuth,signInWithPopup,GithubAuthProvider ,signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import initializeAuthentication from './Firebase/Firebase.initialize';
import { useState } from 'react';
function App() {
const [user, setUser]= useState({})
  initializeAuthentication()
  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider();


const handleGoogleSingIn= () =>{
  const auth = getAuth();
  signInWithPopup(auth, googleProvider)
  .then(result=>{
  const {displayName, email, photoURL}=result.user
  const loggedIn= {
    name:displayName, 
    email:email, 
    photo:photoURL
  }
  setUser(loggedIn)
  })
}

const handleGitSingIn = ()=>{
  const auth = getAuth();
  signInWithPopup(auth,  githubProvider)
  .then(result=>{
    console.log(result.user)
    const {displayName, email, photoURL}=result.user
  const logged={
    name:displayName,
    email:email, 
    photo:photoURL
  }
  setUser(logged)
  })
  
}


const singOutHandle= () =>{
  const auth = getAuth();
  signOut(auth)
  .then(()=>{
    setUser({})
  })

}

const stylish = {
  display:'flex',
  boxShadow:'3px 4px 8px 0',
  width:'500px',
  margin:'0 auto',
  alignItems:'center',
  padding:'10px',
  backgroundColor:'#e3c7ff',
  borderRadius:'20px'
}

const h1= {
  marginLeft:'10px'
}

const imgStyle= {
  borderRadius:'50%',
  width:'60px',
  height:'60px'
}
  return (
    <div className="App">
    { !user.name ?
        <div>
        <button onClick={handleGoogleSingIn}>sign in</button>
        <button onClick={handleGitSingIn}>git sign in</button>
        </div>:
        <button onClick={singOutHandle}>sign out</button>
    }

     <div>
     { user.email && <div>
       <div style={stylish} >
         <img style= {imgStyle} src={user.photo} alt="" />
         <h4 style={h1}>{user.name}</h4>
       </div>
      </div>}
     </div>

     <div>
     { user.name && <div>
       <div style={stylish} >
         <img style= {imgStyle} src={user.photo} alt="" />
         <h4 style={h1}>{user.name}</h4>
         
       </div>
      </div>}
     </div>

      
    </div>
  );
}

export default App;
