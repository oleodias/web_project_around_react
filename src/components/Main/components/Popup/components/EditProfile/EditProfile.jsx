export default function EditProfile() {
  // O envio de verdade vem no próximo sprint. Por enquanto, só impede que o
  // navegador recarregue a página ao enviar.
  function handleSubmit(evt) {
    evt.preventDefault();
  }

  return (
    <form
      className='popup__form'
      id='edit-profile-form'
      name='profile-form'
      noValidate
      onSubmit={handleSubmit}
    >
      <input
        className='popup__input popup__input_type_name'
        id='name-input'
        maxLength='40'
        minLength='2'
        name='name'
        placeholder='Nome'
        required
        type='text'
      />
      <span className='popup__error' id='name-input-error'></span>
      <input
        className='popup__input popup__input_type_description'
        id='description-input'
        maxLength='200'
        minLength='2'
        name='about'
        placeholder='Sobre mim'
        required
        type='text'
      />
      <span className='popup__error' id='description-input-error'></span>
      <button className='button popup__button' type='submit'>
        Salvar
      </button>
    </form>
  );
}
