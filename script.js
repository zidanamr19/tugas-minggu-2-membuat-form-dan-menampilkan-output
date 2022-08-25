function inputdata() {
  var openinput = document.getElementById('input').value;
  var openoutput = document.getElementById('output').value;

  var inputsection = document.querySelector('.form .input').value;
  var outputsection = document.querySelector('.form .output').value;

  var styleinputsection = getComputerStyle(inputsection);
  var styleoutputsection = getComputerStyle(outputsection);

  openinput.addEventListener('click', openreservasifunction).value;
  openoutput.addEventListener('click', openhasilreservasifunction).value;

  function openreservasifunction() {
    if (styleoutputsection.display == 'block') {
      outputsection.style.display = 'none';
      inputsection.style.display = 'block';
    }
  }
  function openhasilreservasifunction() {
    if (styleinputsection.display == 'block') {
      outputsection.style.display = 'none';
      inputsection.style.display = 'block';
    }
  }
  var inputfirstname = document.getElementById('firstname').value;
  var inputlastname = document.getElementById('lastname').value;
  var inputemail = document.getElementById('email').value;
  var inputnomor = document.getElementById('hp').value;

  var submitbutton = document.getElementById('submitbutton');
  submitbutton.addEventListener('click', submitbuttonfunction);

  var outputnama = document.getElementById('hasilnama').value;
  var outputkota = document.getElementById('hasilkota').value;
  var outputemail = document.getElementById('hasilemail').value;
  var outputhp = document.getElementById('hasilhp').value;

  function submitbutton() {
    if (inputfirstname.value == '') {
      return alert('namanya masih kosong');
    }
    if (inputlastname.value == '') {
      return alert('namanya masih kosong');
    }
    if (inputkota.value == '') {
      return alert('kakak dari mana');
    }
    if (inputemail.value == '') {
      return alert('email masih kosong');
    }
    if (email.validity.valid == false) {
      return alert('email salah');
    }
    if (inputnomor.value == '') {
      return alert('nomor hp harap diisi');
    }
    if (confirm('udah lengkap semua ya?')) {
      outputnama.innerText = inputfirstname.value + ' ' + inputlastname.value;
      outputkota.innerText = inputkota.value;
      outputemail.innerText = inputemail.value;
      outputhp.innerText = inputnomer.value;
      return alert('terima kasih telah mengisi dengan lengkap');
    }
  }
}
