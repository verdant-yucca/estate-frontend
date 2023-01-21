import "./ContactUsForm.css";
import imgContact from './../../images/contact.png';
import api from "../../utils/api";
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
    <div className="main">
    <div className="container">
      <div className="content">
        <div className="image-box">
          <img src={imgContact} alt=""/>
        </div>
        <form action="#" onSubmit={handleContactUsSubmit}>
          <div className="topic">Send us a message</div>
          <div className="input-box">
            <input value={name} onChange={handleChangeName} type="text" required/>
            <label>Enter your name</label>
          </div>
          <div className="input-box">
            <input value={phoneNumber} onChange={handleChangePhoneNumber} type="text" required/>
            <label>Enter your phone</label>
          </div>
          <div className="message-box">
            <textarea value={message} onChange={handleChangeMessage}></textarea>
            <label>Enter your message</label>
          </div>
          <div className="input-box">
            <input type="submit" value="Send Message"/>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default ContactUsForm;
