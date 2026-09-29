import ImagePopup from '../Popup/components/ImagePopup/ImagePopup.jsx';
import RemoveCard from '../Popup/components/RemoveCard/RemoveCard.jsx';

export default function Card(props) {
  const { card, handleOpenPopup } = props;
  const { name, link, isLiked } = card;

  // O pop-up da imagem não tem título: o <Popup> usa isso para aplicar o
  // modificador de imagem e não desenhar o <h3>.
  const imageComponent = { children: <ImagePopup card={card} /> };
  const removeCardPopup = { title: 'Tem certeza?', children: <RemoveCard /> };

  const likeButtonClassName = `card__like-button ${
    isLiked ? 'card__like-button_is-active' : ''
  }`;

  return (
    <li className='card'>
      <img
        alt={name}
        className='card__image'
        src={link}
        onClick={() => handleOpenPopup(imageComponent)}
      />
      <button
        aria-label='Excluir cartão'
        className='card__delete-button'
        type='button'
        onClick={() => handleOpenPopup(removeCardPopup)}
      />
      <div className='card__description'>
        <h2 className='card__title'>{name}</h2>
        <button
          aria-label='Curtir cartão'
          className={likeButtonClassName}
          type='button'
        />
      </div>
    </li>
  );
}
