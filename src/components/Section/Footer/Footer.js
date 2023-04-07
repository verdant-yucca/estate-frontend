import React from 'react';
import './Footer.css';
import {Link, NavLink} from "react-router-dom";
import logo from "../../../images/logo/logo_white.png";
import {Button, Form, Input, Select, Space} from 'antd';
import {
  FacebookOutlined,
  LinkedinOutlined,
  SendOutlined,
  TwitterOutlined,
  WechatOutlined,
  WhatsAppOutlined
} from "@ant-design/icons";
const { Option } = Select;

function Footer() {
  const year = new Date().getFullYear();
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values.prefix+ " " +values.phone);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 60,
          margin: -15,
          padding:0,
          backgroundColor: "white",
          borderRadius: 55
        }}
      >
        <Option value="+7">+7</Option>
        <Option value="8">8</Option>
      </Select>
    </Form.Item>
  );



  return (
    <footer className="footer">
      <div className='footer__delimiter'></div>
      <div className='footer__columns'>
        <div className='footer__column'>
          <Link to="/">
            <img className={'footer__logo'} src={logo} alt="логотип" />
          </Link>
          <p className='footer__logo-text'>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing elit,Lorem ipsum dolor sit amet.</p>
        </div>
        <div className='footer__column'>
          <div className={'footer__nav'} >
            <h2 className='footer__nav-title'>Меню</h2>
            <NavLink activeClassName="active-link" className={'footer__button'} exact to="/">Главная</NavLink>
            <NavLink activeClassName="active-link" className={'footer__button'} to="/estate">Недвижимость</NavLink>
            <NavLink activeClassName="active-link" className={`footer__button`} to="/services">Услуги</NavLink>
            <NavLink activeClassName="active-link" className={`footer__button`} to="/about">О компании</NavLink>
          </div>
        </div>
        <div className='footer__column'>
          <h2 className='footer__nav-title'>Связаться с нами</h2>
          <Space>
            <TwitterOutlined className='footer__link-icon' twoToneColor="#eb2f96"/>
            <WechatOutlined className='footer__link-icon' />
            <LinkedinOutlined className='footer__link-icon' />
            <FacebookOutlined className='footer__link-icon' />
            <WhatsAppOutlined className='footer__link-icon' />
          </Space>
          <p></p>
          <p className='footer__logo-text'>введите номер и мы вам перезвоним</p>
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
              prefix: '+7',
            }}
            style={{
              maxWidth: 400,
            }}
            scrollToFirstError
          >
            <Space>
              <Form.Item
                name="phone"
                // label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: 'Пожалуйста, введите номер телефона!',
                  },
                ]}
                style={{
                  width:300,
                  margin: 0,
                  padding:0,
                  marginRight: -120
                }}
              >
                <Input
                  addonBefore={prefixSelector}
                  // style={{
                  //   width: '100%',
                  // }}
                />
              </Form.Item>

              <Form.Item
                {...tailFormItemLayout}
                style={{
                  margin:0,
                  padding:0,
                  color: "#f5d56a"
                }}
              >
                <Button type="primary" htmlType="submit"
                        style={{
                          backgroundColor: "#f5d56a",
                          color: "#46237a"
                        }}>
                  <SendOutlined />
                </Button>
              </Form.Item>
            </Space>

          </Form>
        </div>
      </div>
      <p className="footer__copyright">&copy; {year} Агентство недвижимости</p>

    </footer>
  );
}

export default Footer;
