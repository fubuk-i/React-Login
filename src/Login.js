import React,{Component} from 'react';
import { Input,Icon, Row, Col, Button, Typography, Modal,  Form,Checkbox,Alert } from 'antd';
import {  Redirect } from 'react-router-dom';
import './App.css';
import wretch from 'wretch';
const { Text, Title } = Typography;


class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            ModalVisible: false,
            redirect: false,
            message: "",
            error: false,
        };
    }

    showModal = () => {
        this.setState({
            ModalVisible: true,
        });
      }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            ModalVisible: false,
        });
      }
    
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            ModalVisible: false,
        });
      }

      handleRegisterSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields(['RegisterUsername', 'RegisterPassword', 'RegisterConfirmPassword'],(err,values) => {
         if(!err)
            console.log('Received values of form: ', values);
           
            wretch('https://reqres.in/api/register')
            .post({ "email" : values.RegisterUsername, "password" : values.RegisterPassword})
            .res(response => console.log("response",response))
        
        });
        this.setState({
            ModalVisible: false,
        });
      }

      handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields(['email', 'password'],(err,values) => {
         if(!err)
            console.log('Received values of form: ', values);
           
            wretch('https://reqres.in/api/login')
            .post({ "email" : values.email, "password" : values.password})
            .res(response => {console.log("response",response)
                    if(response.status == 200)
                    {
                        this.setState({ redirect: true });
                    }
                    else
                    {
                        console.log("in else");
                        this.setState({message: "Invalid username or password", error:true});
                    }
                })
            .catch(error =>  {
                            console.log("in");
                            this.setState({message: "Invalid username or password", error:true});})
        
        });
        this.setState({
            ModalVisible: false,
        });
      }

        render(){
            if(this.state.redirect)
            {
                return <Redirect to='/home'/>;
            }
            const { getFieldDecorator } = this.props.form;
         
            const formItemLayout =
           {
                 labelCol: {span : 7},
                  wrapperCol: { span: 22},
                };
              console.log(this.state.error);
            return(
                <div className="container">  
                <div className="center">
                    <Title level={2}>Login </Title>
                   { this.state.error && ( <Alert
                          message={this.state.message}
                          type="error"
                          showIcon style={{width:"16rem"}}
                   />) }
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item {...formItemLayout}>
                         {getFieldDecorator('email', {
            rules: [{
                type: 'email',
                message: 'The input is not valid E-mail!',
              },{ required: true, message: 'Please input your email!' }],
          })(
            <Input addonAfter={<Icon type="user" />}   placeholder="Email Id" />,
          )}
        </Form.Item>
        <Form.Item {...formItemLayout}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input addonAfter={<Icon type="lock" />} type="password" placeholder="Password" />,
          )}
        </Form.Item>
        <Form.Item {...formItemLayout}>
          
          <Button type="primary" htmlType="submit" className="login-form-button" className="btn">
            Log in
          </Button>
          <br/>
          Don't have an account? <a onClick={this.showModal}>register now!</a>
        </Form.Item>
      </Form>
                 
                   <Modal
                        title="Register"
                        visible={this.state.ModalVisible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        
                        footer={[
                            <Button key="Cancel" onClick={this.handleCancel}>
                              Cancel
                            </Button>,
                            <Button key="RegisterSubmit" type="primary"  onClick={this.handleRegisterSubmit} >
                              Submit
                            </Button>,
                          ]}
                    >
                    <Form >
                        <Form.Item label="Email Id" {...formItemLayout}>
                        {getFieldDecorator('RegisterUsername', {
                            rules: [{
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                              },{ required: true, message: 'Please input your Email!' }],
                            }) (<Input placeholder="Email Id" />   )}
                            </Form.Item>
                         <Form.Item label="Password" {...formItemLayout}>
                         {getFieldDecorator('RegisterPassword', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                            })(<Input type="password" placeholder="Password"/>  )}
                        </Form.Item>
                       
                        <Form.Item label="Confirm Password" {...formItemLayout}>
                        {getFieldDecorator('RegisterConfirmPassword', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                            })( <Input type="password" placeholder="Password"/>  )}
                        </Form.Item>
                    </Form>
                    </Modal>
                </div>   
                </div>   
            );
        }
      
}

export default Form.create()(Login);