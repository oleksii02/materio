import './App.css';
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar/Navbar";
import BackToTop1 from "./components/UI/BackToTop1";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import AccountSettings from "./pages/AccountSettings";


function App() {
    return (<div className="App">
            <header><Navbar/></header>
            <BackToTop1/>
            <Router>
                <Switch>
                    <Route exact path='/' component={Profile}/>
                    <Route exact path='/account_settings' component={AccountSettings}/>

                </Switch>
            </Router>
            <footer>
                <div>
                    <p>
                        © 2023, Made with
                        <span>&nbsp;❤&nbsp;️</span>
                        by &nbsp;
                        <a href="https://mui.com/store/contributors/themeselection/">ThemeSelection</a>
                    </p>
                </div>
            </footer>

        </div>);
}

export default App;
