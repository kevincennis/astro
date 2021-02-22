const input    = document.querySelector('#input');
const output   = document.querySelector('#output');

input.addEventListener( 'change', upload_pdf );

async function upload_pdf() {
  const body = new FormData;

  body.append( 'file', input.files[ 0 ] );

  output.textContent = '🤔 working on it...';

  try {
    const res  = await fetch( '/api/translate', { method: 'POST', body } );
    const json = await res.json();

    if ( json.text.trim() === '' ) {
      output.textContent = 'No astro data found.';
      return;
    }

    output.textContent = json.text;
  } catch ( ex ) {
    output.textContent = ex;
  }
}
