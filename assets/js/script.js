var toCopy  = document.getElementById( 'to-copy' ),
    btnCopy = document.getElementById( 'copy' ),
    paste   = document.getElementById( 'cleared' );

btnCopy.addEventListener( 'click', function(){
  toCopy.select();
  paste.value = '';
  
  if ( document.execCommand( 'copy' ) ) {
      btnCopy.classList.add( 'copied' );
    paste.focus();
    
      var temp = setInterval( function(){
        btnCopy.classList.remove( 'copied' );
        clearInterval(temp);
      }, 600 );
    
  } else {
    console.info( 'document.execCommand went wrong…' )
  }
  
  return false;
} );






let editor = document.querySelector("#editor");

ace.edit(editor, {
  theme: "ace/theme/cobalt",
  mode: "ace/mode/javascript",
});








const popupTrigger = document.querySelector('.popup-trigger');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');

popupTrigger.addEventListener('click', (e) => {
  popup.classList.add('show');
  document.body.style.cssText = `overflow: hidden;`;

});

popupClose.addEventListener('click', (e) => {
  popup.classList.remove('show');
  document.body.style.cssText = '';
});

// close on click on overlay

popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.classList.remove('show');
    document.body.style.cssText = '';
  }
});

// close on press of escape button

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && popup.classList.contains('show')) {
      popup.classList.remove('show');
      document.body.style.cssText = '';
    }
  });

