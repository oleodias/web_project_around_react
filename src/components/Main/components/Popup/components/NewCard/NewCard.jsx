export default function NewCard() {
  // O envio de verdade vem no próximo sprint. Por enquanto, só impede que o
  // navegador recarregue a página ao enviar.
  function handleSubmit(evt) {
    evt.preventDefault();
  }

  return (
    <form
      className='popup__form'
      id='new-card-form'
      name='card-form'
      noValidate
      onSubmit={handleSubmit}
    >
      <input
        className='popup__input popup__input_type_card-name'
        id='card-name-input'
        maxLength='30'
        minLength='2'
        name='name'
        placeholder='Título'
        required
        type='text'
      />
      <span className='popup__error' id='card-name-input-error'></span>
      <input
        className='popup__input popup__input_type_url'
        id='link-input'
        name='link'
        placeholder='URL da Imagem'
        required
        type='url'
      />
      <span className='popup__error' id='link-input-error'></span>
      <button className='button popup__button' type='submit'>
        Criar
      </button>
    </form>
  );
}
