import React,{Component} from 'react';
import { Input,Icon, Row, Col, Button, Typography, Modal,  Form, Layout, Menu, Breadcrumb } from 'antd';
import './App.css';
import { Link, Route, Switch, NavLink  } from 'react-router-dom'; 

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class NavBar extends Component {
    constructor(props){
        super(props);
        this.state={
            collapsed: false,
         };
    }
    
    onCollapse = collapsed => {
      console.log(collapsed);
      this.setState({ collapsed });
    };
   

    render(){
        return(
            <div>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} >
                   <div className="logo" /> 
                            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                                <Menu.Item key="1">
                                    <Icon type="home" />
                                    <span>Home</span>
                                    <NavLink  to='/home' />
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Icon type="profile" />
                                    <span>Profile</span>
                                    <NavLink  to='/profile' />
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Icon type="unordered-list" />
                                    <span>Record list</span>
                                    <NavLink  to='/records' />
                                </Menu.Item>
                                <Menu.Item key="4">
                                    <Icon type="setting" />
                                    <span>Settings</span>
                                    <NavLink  to='/setting' />
                                </Menu.Item>
                                <Menu.Item key="5">
                                    <Icon type="poweroff" />
                                    <span>Logout</span>
                                    <NavLink  to='/' />
                                </Menu.Item>
                           
                            </Menu>
                  
                            </Sider>
            </div>
        );
    }

}

export default NavBar;