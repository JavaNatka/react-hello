import React,{ Component } from 'react';
import {Router,Route,Link,browserHistory} from 'react-router';
class Header extends Component{
  constructor(){
    super();
    this.state={
      name:"Unlike",
      count:0
    }
  }
  render(){
    return(
      <div>
      <h1>React Tutorial Natkamol</h1>
<h1><Link to="/">Home</Link></h1>
      </div>
    );
  }
}
export default Header;
