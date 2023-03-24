import './EstateDescription.css';
import {gap} from "../../../utils/utils";
import {useNavigate} from "react-router-dom";

// function EstateDescription({title,price,images}) {
function EstateDescription({estate,scroll}) {
  const navigate = useNavigate();
  const handleOnClick = () => navigate(-1); //goBack;

  return (
    <section className="estate-description">
      <div className={`estate-description__block ${scroll > 115 ? "estate-description__block_fixed" : ""}`}>
        <div className={`estate-description__flex`}>
          <button className={`estate-description__back-button`} onClick={handleOnClick}></button>
          <div className="estate-description__favorite">
            <h1 className="estate-description__title">{estate? estate.title : ""}</h1>
            <h2 className="estate-description__subtitle">парам 1  / парам 2 / парам 3</h2>
          </div>
          <div className={`estate-description__sidebar`}>
            <p className="estate-description__price">{estate? gap(estate.price)+ " ₽" : ""}</p>
            <button className="estate-description__button">Оставить заявку</button>
          </div>
        </div>
      </div>
      <div className={scroll > 115  && "estate-description__dummy"}></div>

    </section>
  )
}

export default EstateDescription;
