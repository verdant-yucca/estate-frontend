import PopupWithForm from '../PopupWithForm/PopupWithForm';
import './DeleteReviewPopup.css';

function DeleteReviewPopup({ isOpenPopup, onClickClosePopups, ReviewID, onSubmitDeleteReview }) {
  const handleSubmit = e => {
    e.preventDefault();
    onSubmitDeleteReview(ReviewID);
  };
  return (
    <PopupWithForm title="Вы уверены?" name="form-confirm" buttonSave="Да"
                   isOpenPopup={isOpenPopup} onPopupClose={onClickClosePopups} onSubmit={handleSubmit} />
  );
}
export default DeleteReviewPopup;
