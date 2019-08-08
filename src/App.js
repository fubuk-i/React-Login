import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Input,Icon, Row, Col, Button, Typography, Modal,  Form, Layout, Menu, Breadcrumb } from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import Login from './Login';
import Home from './Home';
import Profile from './Profile';
import NavBar from './NavBar';
import Records from './Records';
import Setting from './Settings';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const LoginContainer = () => (
  <div>
    
    <Route exact path="/" component={Login}/>
  </div>
)


 const DefaultContainer = () => (
    <div>
   <Layout style={{ minHeight: '100vh' }}>
   
     <NavBar />
  

   <Layout>
     <Header style={{ background: '#001529', padding: 0, position: 'fixed', zIndex: 1, width: '100%'  }} />
       <Content >
     
         <Switch>
          
           <Route exact path="/home" component={Home}/>
           <Route exact path="/profile" component={Profile}/>
           <Route exact path="/records" component={Records}/>
           <Route exact path="/setting" component={Setting}/>
           </Switch>
       </Content>
    
   
</Layout>
 </Layout>
    </div>
 )

class App extends Component {
  
  render() {

    return (
    <div>

        <Switch>
          
            <Route exact path="/" component={LoginContainer}/>
            <Route component={DefaultContainer}/>

          
        </Switch>

      
    </div>
   
    );
  }
}

export default App;
