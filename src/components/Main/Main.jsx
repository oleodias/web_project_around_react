import { useState } from 'react';
import avatar from '../../images/avatar.jpg';
import Card from './components/Card/Card.jsx';
import Popup from './components/Popup/Popup.jsx';
import NewCard from './components/Popup/components/NewCard/NewCard.jsx';
import EditProfile from './components/Popup/components/EditProfile/EditProfile.jsx';
import EditAvatar from './components/Popup/components/EditAvatar/EditAvatar.jsx';

// Dados fictícios: os cartões virão do servidor no próximo sprint.
const cards = [
  {
    isLiked: false,
    _id: '5d1f0611d321eb4bdcd707dd',
    name: 'Vale de Yosemite',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:10:57.741Z',
  },
  {
    isLiked: false,
    _id: '5d1f064ed321eb4bdcd707de',
    name: 'Lago Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  },
];

console.log(cards);

export default function Main() {
  // Qual pop-up está aberto: null quando nenhum está. Cada pop-up é um objeto
  // { title, children } — o título e o conteúdo que o <Popup> vai mostrar.
  const [popup, setPopup] = useState(null);

  const newCardPopup = { title: 'Novo local', children: <NewCard /> };
  const editProfilePopup = {
    title: 'Editar perfil',
    children: <EditProfile />,
  };
  const editAvatarPopup = {
    title: 'Alterar a foto do perfil',
    children: <EditAvatar />,
  };

  // selectedPopup, e não popup: o mesmo nome esconderia o estado acima.
  function handleOpenPopup(selectedPopup) {
    setPopup(selectedPopup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className='content'>
      <section className='profile page__section'>
        <button
          aria-label='Alterar a foto do perfil'
          className='profile__avatar-button'
          type='button'
          onClick={() => handleOpenPopup(editAvatarPopup)}
        >
          <img alt='Foto de perfil' className='profile__image' src={avatar} />
        </button>
        <div className='profile__info'>
          <h1 className='profile__title'>Jacques Cousteau</h1>
          <button
            aria-label='Editar perfil'
            className='profile__edit-button'
            type='button'
            onClick={() => handleOpenPopup(editProfilePopup)}
          />
          <p className='profile__description'>Explorador</p>
        </div>
        <button
          aria-label='Adicionar cartão'
          className='profile__add-button'
          type='button'
          onClick={() => handleOpenPopup(newCardPopup)}
        />
      </section>

      <section className='cards page__section'>
        <ul className='cards__list'>
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              handleOpenPopup={handleOpenPopup}
            />
          ))}
        </ul>
      </section>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
