import './EstateDescription.css';
import {gap} from "../../../utils/utils";
import {useHistory} from "react-router-dom";

// function EstateDescription({title,price,images}) {
function EstateDescription({estate,scroll}) {
  const history = useHistory();
  const handleOnClick = () => history.goBack();

  return (
    <section className={`estate-description`}>
      <div className={`estate-description__block ${scroll > 150 ? "estate-description__block_fixed" : ""}`}>
        <button className={`estate-description__back-button ${scroll > 150 ? "estate-description__back-button_fixed" : ""}`} onClick={handleOnClick}></button>
        <div className="estate-description__favorite">
          <h1 className="estate-description__title">{estate? estate.title : ""}</h1>
          <h2 className="estate-description__subtitle">парам 1  / парам 2 / парам 3</h2>
        </div>
        <div className={`estate-description__sidebar`}>
          <p className="estate-description__price">{estate? gap(estate.price)+ " ₽" : ""}</p>
          <button className="estate-description__button">Оставить заявку</button>
        </div>
      </div>
    </section>
  )
}

export default EstateDescription;
