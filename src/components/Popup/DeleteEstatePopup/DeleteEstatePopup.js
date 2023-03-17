import PopupWithForm from '../PopupWithForm/PopupWithForm';
import './DeleteEstatePopup.css';

function DeleteEstatePopup({ isOpenPopup, onClickClosePopups, estateID, onSubmitDeleteEstate }) {
  const handleSubmit = e => {
    e.preventDefault();
    onSubmitDeleteEstate(estateID);
  };
  return (
    <PopupWithForm title="Вы уверены?" name="form-confirm" buttonSave="Да"
                   isOpenPopup={isOpenPopup} onPopupClose={onClickClosePopups} onSubmit={handleSubmit} />
  );
}
export default DeleteEstatePopup;
