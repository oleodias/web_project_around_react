export default function RemoveCard() {
  // A exclusão de verdade vem no próximo sprint. Por enquanto, só impede que
  // o navegador recarregue a página ao enviar.
  function handleSubmit(evt) {
    evt.preventDefault();
  }

  return (
    <form
      className='popup__form popup__form_type_confirm'
      id='confirm-form'
      name='confirm-form'
      onSubmit={handleSubmit}
    >
      <button
        className='button popup__button popup__button_type_compact'
        type='submit'
      >
        Sim
      </button>
    </form>
  );
}
