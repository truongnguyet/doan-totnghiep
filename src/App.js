import './App.css';
import {Switch, Route} from 'react-router-dom'
import Login from "./components/Login/Login";
import Home from "./components/Home";
import {useEffect} from "react";
import firebase from "firebase";
import {useHistory} from 'react-router-dom'
import { setGlobal} from 'reactn'

function App() {
    const history = useHistory()
    useEffect(()=>{
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setGlobal({user})
            } else {
                history.push("/signin")
            }
        });

    },[])
    return (
        <div>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route exact path={"/signin"} component={Login}/>
            </Switch>
        </div>
    );
}

export default App;
