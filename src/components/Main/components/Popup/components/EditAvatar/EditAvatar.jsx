export default function EditAvatar() {
  // O envio de verdade vem no próximo sprint. Por enquanto, só impede que o
  // navegador recarregue a página ao enviar.
  function handleSubmit(evt) {
    evt.preventDefault();
  }

  return (
    <form
      className='popup__form'
      id='avatar-form'
      name='avatar-form'
      noValidate
      onSubmit={handleSubmit}
    >
      <input
        className='popup__input popup__input_type_url'
        id='avatar-input'
        name='avatar'
        placeholder='Link da foto'
        required
        type='url'
      />
      <span className='popup__error' id='avatar-input-error'></span>
      <button
        className='button popup__button popup__button_type_compact'
        type='submit'
      >
        Salvar
      </button>
    </form>
  );
}
