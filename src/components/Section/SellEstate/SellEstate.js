import './SellEstate.css';
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
function SellEstate() {
  return (
    <section className="sell-estate">
      <h2 className="sell-estate__title">Продажа недвижимости</h2>
      <div className={"sell-estate__block"}>

        <div  className={"sell-estate__column sell-estate__column_align-start"}>
          <h3 className={"sell-estate__subtitle"}>Готовите недвижимость к продаже? Мы в два счета найдем на нее покупателя!</h3>
          <p className={"sell-estate__address"}>Быстро и безопасно оформим продажу вашей недвижимости, если вы обратитесь к нам в агентство
            «ООО Продажа недвижимости». Мы возьмем на себя все хлопоты по документам, вам останется только получить свои деньги!</p>

          <h3 className={"sell-estate__subtitle"}>Где агентство размещает информацию от собственников о продаже объектов недвижимости?</h3>
          <ul className={"sell-estate__list"}>
            <li className={"sell-estate__list-item"}>Каталог недвижимости в офисах агентства</li>
            <li className={"sell-estate__list-item"}>База объектов на сайте агентства</li>
            <li className={"sell-estate__list-item"}>На тематических электронных площадках, за счёт агентства недвижимости</li>
          </ul>
          <p className={"sell-estate__address"}> &nbsp; Когда по объекту определяется покупатель, собственнику назначается персональный агент по недвижимости,
            который представляет его интересы.
          </p>

          <h3>Подайте заявку на продажу недвижимости в любом офисе агентства, по телефону или письмом на  эл. почту.</h3>


        </div>

        <div  className={"sell-estate__column"}>
          <ContactUsForm/>
        </div>

      </div>


    </section>
  )
}
export default SellEstate;
