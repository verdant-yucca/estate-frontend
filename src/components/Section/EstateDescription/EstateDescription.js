import PhotoSlider from "../Blocks/PhotoSlider/PhotoSlider";
import './EstateDescription.css';
import {gap} from "../../../utils/utils";

// function EstateDescription({title,price,images}) {
function EstateDescription({estate,scroll}) {
// function EstateDescription() {
  return (
    <section className="estate-description">
      <div className="estate-description__favorite">
        <h1 className="estate-description__title">{estate? estate.title : ""}</h1>
        <h2 className="estate-description__subtitle">парам 1  / парам 2 / парам 3</h2>
        <PhotoSlider images={estate? estate.images : ""}/>
      </div>
      <div className={`estate-description__sidebar ${scroll > 50 ? "backButtonActive" : ""}`}>
          <p className="estate-description__price">{estate? gap(estate.price)+ " ₽" : ""}</p>
          <button className="estate-description__button">Оставить заявку</button>
      </div>
    </section>
  )
}

export default EstateDescription;
