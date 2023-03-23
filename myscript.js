document.getElementById('id_speech').onclick = () => {
  let lang =document.getElementById('id_lang').value;
  let rate=document.getElementById('id_rate').value;
  let text =document.getElementById('id_text').value;

  let option = {};
  option['lang'] = lang;
  option['rate'] = parseFloat(rate);

  chrome.tts.speak(text, option);
}