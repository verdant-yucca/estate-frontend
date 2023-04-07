import Profile_silhouette from "../../../../images/Profile-silhouette.svg";

import React, {useState} from "react";

const Review = ({review, loggedIn, onClickDeleteReview}) => {
  const handleClickDeleteReview = () => onClickDeleteReview(review._id);
  const [visibleDelButton, setVisibleDelButton] = useState(false);

  //
  return (
    <div key={'item_'+review._id} className="slider__item" onMouseEnter={()=>{setTimeout(()=>setVisibleDelButton(true), 150)}} onMouseLeave={()=>{setTimeout(()=>setVisibleDelButton(false), 300)}}>
      {loggedIn && visibleDelButton && <button key={"buttonDelete_" + review._id} type="button" className={'slider__delete element__delete_active'} onClick={handleClickDeleteReview}></button> }
      <img key={'img_'+review._id} className="slider_item_img" src={Profile_silhouette} alt=""/>
      <div key={'content_'+review._id} className="slider__item_content">
        <h2 key={'name_'+review._id} className="slider__item_name">{review.name}</h2>
        <p key={'text_'+review._id} className="slider__item_text">{review.text}</p>
      </div>
    </div>
  )
}

export default Review
