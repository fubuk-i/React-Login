import React,{Component} from 'react';
import { Input,Icon, Row, Col, Button, Typography, Modal,  Form, Layout, Menu, Breadcrumb } from 'antd';
import './App.css';

class Profile extends Component {
    constructor(props){
        super(props);
        this.state={
            collapsed: false,
         };
    }

    render(){
        
        return(
            <div >
                 <div >
                 Profile Page
              </div>
            </div>
        );
    }

}

export default Profile;