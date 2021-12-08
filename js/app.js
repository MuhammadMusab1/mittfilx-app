const form = document.querySelector('.search');

form.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
  e.preventDefault()
  const input = document.querySelector('input');
  if (input.value !== '') {
    console.log(input.value);
    input.value = '';
  } else {
    return;
  }
}