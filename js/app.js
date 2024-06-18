document.getElementById('icon1').addEventListener('click', function (evitarEvento) {
    evitarEvento.preventDefault()
    document.getElementById('icon1').style.display = 'none';
    document.getElementById('icon2').style.display = 'inline';
});

document.getElementById('icon2').addEventListener('click', function (evitarEvento) {
    evitarEvento.preventDefault()
    document.getElementById('icon2').style.display = 'none';
    document.getElementById('icon1').style.display = 'inline';
});
let btnProf = document.getElementById('btnLogin').addEventListener('click', function(){
    window.location.href = "profile.html"

});

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})