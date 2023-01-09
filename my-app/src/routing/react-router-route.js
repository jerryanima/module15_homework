import React from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

const Home = () => <div>Home</div>
const About = () => <div>About</div>
const BlockPosts = () => <div>BlockPosts</div>

class ReactRouterRoute extends React.Component {
    render() {
        return (
            <Router>
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/about" >About</Link></li>
                    <li><Link to="/block-posts"></Link></li>
                </ul>
                <Route path="/" exact component = {Home}/>
                <Route path="/about" component = {About}/>
                <Route path="/block-posts" component = {BlockPosts}/>
            </Router>
        );
    }
}

export default ReactRouterRoute;