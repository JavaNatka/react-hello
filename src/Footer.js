import React,{ Component } from 'react';
import {Router,Route,Link,browserHistory} from 'react-router';
class Footer extends Component{
  render(){
    return(
      <div>
       <h3>Copyright Kivayal-2019</h3>
       <h1><a href="/">Home</a></h1>
      </div>
    );
  }
}
export default Footer;
