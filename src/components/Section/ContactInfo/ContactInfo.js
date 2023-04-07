import './ContactInfo.css';
import ContactUsForm from "../Blocks/ContactUsForm/ContactUsForm";

// function EstateDescription({title,price,images}) {
function ContactInfo() {
  return (
    <section className="contact-info">
      <h2 className="contact-info__title">Контакты</h2>
      <ContactUsForm/>
      <div className={"contact-info__column"}>
        Test text Test text Test text Test text Test text Test text
      </div>

    </section>
  )
}
export default ContactInfo;
