function toggleText() {
  let text = document.querySelector('#text');
  let button = document.querySelector('.toggle-text-button');
  button.addEventListener('click', () => {
    if (!text.hasAttribute('hidden')){
    text.hidden = true;
  }else if (text.hasAttribute('hidden')){
text.removeAttribute("hidden");
  }
  })
}
