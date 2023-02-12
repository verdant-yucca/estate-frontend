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
    <div className="container">
      <div className="contact-us__block">
        <form action="src/components/Section/Blocks/ContactUsForm/ContactUsForm#" onSubmit={handleContactUsSubmit}>
          <div className="topic">Связаться с нами</div>
          <div className="input-box">
            <input value={name} onChange={handleChangeName} type="text" required/>
            <label>Введите имя</label>
          </div>
          <div className="input-box">
            <input value={phoneNumber} onChange={handleChangePhoneNumber} type="text" required/>
            <label>Введите номер телефона</label>
          </div>
          <div className="message-box">
            <textarea value={message} onChange={handleChangeMessage}></textarea>
            <label>Введите сообщение</label>
          </div>
          <div className="input-box">
            <input type="submit" value="Отправить сообщение"/>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default ContactUsForm;
