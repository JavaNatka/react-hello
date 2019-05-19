import React,{ Component } from 'react';
import {Router,Route,Link,browserHistory} from 'react-router';
class Content extends Component{
  render(){
    return(
      <div>
      <h3>Facebokk Lib</h3>
      <h1><Link to="/">Home</Link></h1>
      </div>
    );
  }
}



export default Content;
