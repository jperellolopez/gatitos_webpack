import $ from './jquery-2.1.0.min.js';

var names = ['Tiger', 'Samuel', 'Leeloo',
             'Bella', 'Mo', 'Sly',
             'Beezy', 'Maple', 'Rodney',
             'Yonce', 'Reginald', 'Winifred'];

var ages  = ['9 Weeks', '12 Weeks', '3 Months',
             '8 Weeks', '1 Year', '15 Weeks',
             '4 Months', '2 Months', '14 Weeks',
             '6 Months', '10 Weeks', '8 Months'];

var vaccines = [1,3,0,3,2,4,3,2]

$('.kittens').find('li').each( function(i, el) {
  var img = $(el).find('img');
  var name = $(el).find('.name');
  var age = $(el).find('.age');
  var vaccine = $(el).find('.vaccines');

  var w = 250;
  var h = 250;

  img.attr('src', 'http://placekitten.com/'+w+'/'+h+'?image='+i);
  name.text(names[i]);
  age.text(ages[i]);
  vaccine.html('<strong>Vaccines: </strong>' + vaccines[i]);
});


// Formulario de contacto
const exampleModal = document.getElementById('exampleModal')
  if (exampleModal) {
    exampleModal.addEventListener('show.bs.modal', event => {
      // Button that triggered the modal
      const button = event.relatedTarget
      // Extract info from data-bs-* attributes
      const recipient = button.getAttribute('data-bs-whatever')
      // If necessary, you could initiate an Ajax request here
      // and then do the updating in a callback.

      // Update the modal's content.
      const modalTitle = exampleModal.querySelector('.modal-title')
      const modalBodyInput = exampleModal.querySelector('.modal-body input')

      modalTitle.textContent = `New message to ${recipient}`
      modalBodyInput.value = recipient
    })
  }