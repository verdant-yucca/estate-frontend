import PopupWithForm from '../PopupWithForm/PopupWithForm';
import './PopupWithConfirmation.css';

function DeleteEstatePopup({ isOpen, onClickClosePopups, estateID, onSubmitDeleteEstate }) {
  const handleSubmit = e => {
    e.preventDefault();
    onSubmitDeleteEstate(estateID);
  };
  return (
    <PopupWithForm title="Вы уверены?" name="form-confirm" buttonSave="Да"
                   isOpen={isOpen} onPopupClose={onClickClosePopups} onSubmit={handleSubmit} />
  );
}
export default DeleteEstatePopup;
