function InfoTooltip({ isOpenPopup, onPopupClose, messageTooltip, iconTooltip }) {

  return (
    <div className={`popup ${isOpenPopup ? 'popup_active': ''}`}>
      <div className="popup__container">
        <img className="popup__icon-tooltip" src={iconTooltip} alt='tooltip' />
        <h3 className="popup__title popup__title_type_tooltip">{messageTooltip}</h3>
        <button type="button" className="popup__button-close" onClick={onPopupClose} />
      </div>
    </div>
  );
}

export default InfoTooltip;
