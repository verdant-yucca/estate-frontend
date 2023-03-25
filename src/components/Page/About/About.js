import './About.css'
import ContactUsForm from "../../Section/Blocks/ContactUsForm/ContactUsForm";
import { Col, Row } from 'antd';

const About = () => {
  return (
    <>
      <section className='about__banner'>
        <div className='about__shadow'></div>
      </section>
      <section className='about__contact-us'>

        <Row gutter={[16, 16]} align={"middle"}>
          <Col span={10} push={0}>
            <ContactUsForm />
          </Col>
          <Col span={10} push={0}>
            <ContactUsForm />
          </Col>
        </Row>
      </section>

    </>
  )
}

export default About;
