import './About.css'
import ContactUsForm from "../../Section/Blocks/ContactUsForm/ContactUsForm";
import { Col, Row } from 'antd';
import ContactInfo from "../../Section/ContactInfo/ContactInfo";

const About = () => {
  return (
    <>
      <section className='about__banner'>
        <div className='about__shadow'></div>
      </section>
      <ContactInfo/>

    </>
  )
}

export default About;
