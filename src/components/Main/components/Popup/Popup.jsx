export default function Popup(props) {
  // children é o conteúdo do pop-up; onClose vem do Main e volta o estado
  // do pop-up para null.
  const { onClose, title, children } = props;

  return (
    <div className='popup'>
      <div
        className={`popup__content ${
          !title ? 'popup__content_content_image' : ''
        }`}
      >
        <button
          aria-label='Fechar pop-up'
          className='popup__close'
          type='button'
          onClick={onClose}
        />
        {title && <h3 className='popup__title'>{title}</h3>}
        {children}
      </div>
    </div>
  );
}
