const input    = document.querySelector('#input');
const output   = document.querySelector('#output');

input.addEventListener( 'change', upload_pdf );

async function upload_pdf() {
  const body = new FormData;

  body.append( 'file', input.files[ 0 ] );

  try {
    const res  = await fetch( '/api/translate', { method: 'POST', body } );
    const json = await res.json();

    output.textContent = json.text;
  } catch ( ex ) {
    alert( ex );
  }
}
