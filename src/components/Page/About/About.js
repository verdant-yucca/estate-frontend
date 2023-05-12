import './About.css'
import ContactUsForm from "../../Section/Blocks/ContactUsForm/ContactUsForm";
import { Col, Row } from 'antd';
import ContactInfo from "../../Section/ContactInfo/ContactInfo";

const About = () => {
  function handleClick() {
    let a = 1;
    let b = 2;
  }
  return (
    <>
      <section className='about__banner'>
        <div className='about__shadow'></div>
      </section>
      <ContactInfo/>
      <button onClick={handleClick}>click me</button>

    </>
  )
}

export default About;
