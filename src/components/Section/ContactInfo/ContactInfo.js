import './ContactInfo.css';
import ContactUsForm from "../Blocks/ContactUsForm/ContactUsForm";
import {
  EnvironmentOutlined,
  FacebookOutlined,
  GooglePlusOutlined, LinkedinOutlined,
  MailOutlined, PhoneFilled,
  TwitterOutlined, WechatOutlined
} from "@ant-design/icons";
import React from "react";

// function EstateDescription({title,price,images}) {
function ContactInfo() {
  return (
    <section className="contact-info">
      <h2 className="contact-info__title">Контакты</h2>
      <div className={"contact-info__block"}>
        <div  className={"contact-info__column"}>
          <ContactUsForm/>
        </div>

        <div  className={"contact-info__column"}>
          <h3 className={"contact-info__subtitle"}>Контактная информация</h3>
          <p className={"contact-info__address margin-bottom"}>В данном разделе вы можете ознакомиться с контактной информацией</p>

          <h3 className={"contact-info__phone"}><PhoneFilled  className={"contact-info__image"}/> +7 (950) 451 23 67</h3>
          <p className={"contact-info__address"}><EnvironmentOutlined/>  &nbsp; г. Ангарск, Карла Маркса 170, этаж 3 </p>
          <p className={"contact-info__address margin-bottom"}><MailOutlined/> &nbsp; contact@superestate.ru</p>

          <h3 className={"contact-info__subtitle"}>Будьте с нами в соцсетях</h3>
          <div>
            <TwitterOutlined className={"contact-info__social-image"} />
            <WechatOutlined className="contact-info__social-image" />
            <LinkedinOutlined  className={"contact-info__social-image"}/>
            <FacebookOutlined  className={"contact-info__social-image"}/>
            <GooglePlusOutlined  className={"contact-info__social-image"}/>
          </div>


        </div>
      </div>


    </section>
  )
}
export default ContactInfo;
