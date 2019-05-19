import React,{ Component } from 'react';
import {Router,Route,Link,browserHistory} from 'react-router';
//สร้าง Component
class App extends Component{

      render(){
        return(
          <div>
              <h1>KivayalInw</h1>
              <h1><a href="/header">Header</a></h1>
              <h1><Link to="/content">Content</Link></h1>
              <h1><Link to="/footer">Footer</Link></h1>
              <h1><Link to="/">Home</Link></h1>
              //Link will no refresh
          </div>
        );
      }
}

export default App;
