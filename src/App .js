import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router, Route, Link, Switch } from 'react-router-dom';
import boy from "./boy.png";
import wallet from "./wallet.jpeg";
import target from "./target.jpg";


class Home extends React.Component {
  render() {
	return (
	  <div id="home">
	  	<header id="nav_bar">
			<ul>
				<li><a href="/Home">Home</a></li>
				<li><a href="/About">About us</a></li>
				<li><a href="/Login">Log in</a></li>
				<li><a href="/Signin">Sign in</a></li>
			</ul>
		</header>
		<body id="home_body">
			<h1>LifeAcc</h1>
				<br/>
				<h3>Your caretacker,Your Account Book</h3>
				<br/><br/>
				<button>Sign_in For Free</button><br/><br/>
	  		
				<p><img src={boy} />
		   		<h2>Ever wondered where your money goes??</h2>
		   		If you are also worried at the speed your wallet gets empty without remembering a single thing you buyied , you are at the right place!	   Now you dont have to remember what,when and where? We are here to take care off your the 3Ws. </p>
				<br/><br/>
				<p>Dont know how to act sustainabily?Just leave to our intelligent *name_app* . Take your all new0 handy and dynamic account book wherever you go. *name_app* will take care off all your savings and expenditures.<img src={wallet} /></p>
				<br/>
				<p><img src={target} />Want to analyse
  where you got wrong  using your earnings?Try our latest feature GRAPHY. Set targets and get notified iff gone wrong anywhere and anytime.</p>
	  		
		</body>
	  	<footer id="footer">
			<p>Contact:help.lifeacc@gmail.com</p><br/>
			<form>
				<label for="sugg">Your valuable suggestions</label>
				<br/>
				<input type="text" id="sugg" name="suggestions" />
			</form>
	 	 </footer>
	  </div>
	);
     }
}

const About = () => (
		<div id="about">
			<header id="nav_bar">
				<ul>
					<li>Home</li>
					<li>About us</li>
					<li>Log out</li>
				</ul>
	  		</header>
			<body id="about_body">
	  			
				<p>blah blah bla</p>
	 		 </body>
			<footer id="footer">
				<p>You are logged in as User_name</p>
				<br/>
				<form>
					<label for="sugg">Your valuable suggestions</label>
					<br/>
					<input type="text" id="sugg" name="suggestions" />
				</form>
	  		</footer>
		</div>
		);
	




class Login extends React.Component{
	render() {
	  return(
		<div id="login">
		
			<header id="nav_bar">
				<ul>
					<li>Home</li>
					<li>About us</li>
			
				</ul>
	  		</header>
	  		<body id="body_in">
				<h1>Log In</h1>
	     			 <form>
					<label id="username">Username:</label><br />
					<input type="text" id="username" name="username" />
					<br/>
					<label id="pass">Password:</label><br />
					<input type="password" id="pass" name="password" />
					<br/>
	      			</form>
	      			<button><a href="/home/saloni/Desktop/myhtml/main2.html">Log In</a></button>
	  		</body>
		</div>
		);
	}
}




class Signin extends React.Component {
	render() {
	  return(
		<div id="signin">
	  		<header id="nav_bar">
				<ul>
					<li>Home</li>
					<li>About us</li>
			
				</ul>
	  		</header>
	  		<body id="signin">
				<h1>Sign In</h1>
	      			<form>
					<label id="username">Username:</label><br/>
					<input type="text" id="username" name="username" />
					<br />
					<label id="pass">Password:</label><br />
					<input type="password" id="pass" name="password" />
					<br />
					<label id="pass">Confirm Password:</label><br />
					<input type="password" id="pass" name="password" />
					<br />
					<label id="email">Email:</label><br />
					<input type="email" id="email" name="eamil" />
					<br />
	      			</form>
	      			<button><a href="/home/saloni/Desktop/myhtml/login.html">Sign In</a></button>
	  		</body>
	
		</div>
	  );
	}
}
export { Signin, Login, About }

	

/*ReactDOM.render(
	  <BrowserRouter>
	    <div>	
		<Route exact={ true } path = "/" component = {App} />
		<Route path = "/Home" component = {App} />
		<Route path = "/About us" component = {About} />
		<Route path = "/Log in" component = {Login} />
		<Route path = "/Sign in" component = {Signin} />
	    </div>
	</BrowserRouter>,
 document.getElementById('app'))*/

/*const Main = () => (
    <BrowserRouter>
        <div>
	  <aside>
        	<Link to={`/`}>Home</Link>
        	<Link to={`/About`}>About</Link>
		<Link to={`/Login`}>Login</Link>
        	<Link to={`/Signin`}>Signin</Link>
          </aside>		
	  <main>	
            <Route exact path="/" component={App} />
            <Route path="/Home" component={App} />
	    <Route exact path = "/About" component = {About} />
	    <Route path = "/Login" component = {Login} />
	    <Route path = "/Signin" component = {Signin} />
	  </main>
        </div>
    </BrowserRouter>
);*/
class App extends React.Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        <div>
            
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/About" component={About} />
              <Route path="/Login" component={Login} />
	      <Route path="/Signin" component={Signin} />
            </Switch>
            
        </div>
      </BrowserRouter>
      </div>
    );
  }
}
export default App ;
/*ReactDOM.render(<App />, document.getElementById("root"));*/
			


