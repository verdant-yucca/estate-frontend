import './PhotoSlider.css'
import {useState} from 'react';

const PhotoSlider = ({ArrayImages, CardId, onSliderClick}) => {
  const style = {

  }

  const [checked, setChecked] = useState(false);
  const slidesInput = [];
  const slidesLabel = [];
  const slidesImage = [];
  let i = 0;
  let keyid2 = 0;

  ArrayImages.forEach((Photo) => {
    let keyId = Photo.split('.').join('');
    keyid2+=1;
    i+=1;
    const isChecked = i===1;
    slidesInput.push(
      isChecked ?
        <input key={`'input_' + ${keyId}+ ${keyid2}`} type="radio"  name="point" id={'slide' + {i}} defaultChecked/>
        :
        <input key={`'input_' + ${keyId}+ ${keyid2}`} type="radio" name="point" id={'slide' + {i}}/>
    );
    slidesLabel.push(
      // <label className={checked ? 'slide_button' : ''} onClick={() => {setChecked( !checked)}} key={`'label_' + ${keyId}+ ${keyid2}`}  htmlFor={'slide' + {i}}></label>
      <label className={checked ? 'slide_button' : ''} onClick={() => {setChecked( !checked)}} key={`'label_' + ${keyId}+ ${keyid2}`}  htmlFor={'slide' + {i}}></label>
    );
    slidesImage.push(
      <img key={`'img_' + ${keyId}+ ${keyid2}`}  className="slides" src={'https://api.verdant-yucca.ru/images/estate/' + Photo} alt={keyId}/>
    );
  })

  return (
    // <div onClick={onSliderClick} className="wrapper">
    <div key={'wrapper_'+CardId} className="wrapper">
      {slidesInput}
      <div key={'slider_'+CardId} className="slider">
        {slidesImage}
      </div>
      <div key={'controls_'+CardId} className="controls">
        {slidesLabel}
      </div>
    </div>
  );
};
export default PhotoSlider;
