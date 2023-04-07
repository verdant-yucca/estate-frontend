import './ContactInfo.css';
import ContactUsForm from "../Blocks/ContactUsForm/ContactUsForm";
import {
  FacebookOutlined,
  GooglePlusOutlined,
  MailOutlined, PhoneFilled, PhoneOutlined,
  PhoneTwoTone,
  RedditOutlined,
  TwitterOutlined
} from "@ant-design/icons";

// function EstateDescription({title,price,images}) {
function ContactInfo() {
  return (
    <section className="contact-info">
      <h2 className="contact-info__title">Контакты</h2>
      <div className={"contact-info__block"}>
        <ContactUsForm/>
        <div  className={"contact-info__column"}>



          <MailOutlined  className={"contact-info__image"}/>

           <p className={"contact-info__phone"}><PhoneFilled  className={"contact-info__image"}/> +7 (950) 000 0000</p>


          <FacebookOutlined  className={"contact-info__image"}/>
          <TwitterOutlined className={"contact-info__image"} />
          <GooglePlusOutlined  className={"contact-info__image"}/>
          <RedditOutlined  className={"contact-info__image"}/>

        </div>
      </div>


    </section>
  )
}
export default ContactInfo;
