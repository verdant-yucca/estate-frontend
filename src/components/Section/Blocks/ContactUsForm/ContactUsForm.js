import "./ContactUsForm.css";
import api from "../../../../utils/api";
import {useState} from "react";

function ContactUsForm() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const handleChangeName = e => setName(e.target.value);
  const handleChangePhoneNumber = e => setPhoneNumber(e.target.value);
  const handleChangeMessage = e => setMessage(e.target.value);

  const handleContactUsSubmit = (e) => {
    e.preventDefault();
    api.telegramMessage("FormContactUs", name, phoneNumber, message)
      .then(() => console.log("УраУраУра"))
      .catch(err => console.log("Отправка сообщения не адалась. Ошибка: ", err))
  };

  return (
    <>
    {/*<section className="main" id='section-contact-us'>*/}
    <div className="contact-us__block__container">
      <div className="contact-us__block">
        <form action="src/components/Section/Blocks/ContactUsForm/ContactUsForm#" onSubmit={handleContactUsSubmit}>
          <div className="contact-us__topic">Связаться с нами</div>
          <div className="contact-us__input-box">
            <input className="contact-us__input" value={name} onChange={handleChangeName} type="text" required/>
            <label className="contact-us__block__label">Введите имя</label>
          </div>
          <div className="contact-us__input-box">
            <input className="contact-us__input" value={phoneNumber} onChange={handleChangePhoneNumber} type="text" required/>
            <label className="contact-us__block__label">Введите номер телефона</label>
          </div>
          <div className="contact-us__message-box">
            <textarea className="contact-us__textarea" value={message} onChange={handleChangeMessage}></textarea>
            <label className="contact-us__block__label">Введите сообщение</label>
          </div>
          <div className="contact-us__input-box">
            <input className="contact-us__input" type="submit" value="Отправить сообщение"/>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default ContactUsForm;
