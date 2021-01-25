import React,{useState} from "react";
import { Link ,Redirect} from "react-router-dom";
import './style.css';
import {Button} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

const NavBar = (props) =>{
    const [loggedOut, setLoggedOut] = useState(false)


    const signOut=(e) =>{
       // props.history.push('/home')


        localStorage.clear();
        setLoggedOut(true)
      }

      if (loggedOut) {
        return <Redirect to="/SignIn" push={true} />
      }else <Button onClick={signOut}>LogOut</Button>;

    return(
        <div className="navbar">
            <div className="container">
                <div className="logo" >
                    <a href="https://eveytech.com/">
                    <img className="logoevey" src="https://eveytech.com/wp-content/uploads/2020/04/cropped-logo-5-1.png"  alt="logo evey"></img>
                    </a>
                </div>
                <ul className="ul-list"> 
                    <li className="list-item"><HomeIcon /><Link to ="/event" > Home </Link></li>
                    <li className="list-item"><Link to ="/SignIn" > SignIn </Link></li>
                    <li className="list-item"><Link to ="/SignUp" > SignUp </Link></li>
                    {/* {SignIn ? (<button className="btn btn-">Log out</button>) : (<p>You have to log in</p>)} */}
                    <Button color="light" onClick={() => signOut()}>
                    {loggedOut ? '' : 'Log out'}
                </Button>

                   
                   
                </ul>

            </div>
        </div>
    )
}

export default NavBar;