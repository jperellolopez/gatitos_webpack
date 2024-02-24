import $ from './jquery-2.1.0.min.js';

var names = ['Tiger', 'Samuel', 'Leeloo', 'Bella',
             'Mo', 'Sly', 'Beezy', 'Maple',
             'Juan Antonio', 'Josema', 'Yuste', 'Elvan Anón'];

var ages  = ['9 Weeks', '12 Weeks', '3 Months',
             '8 Weeks', '1 Year', '15 Weeks',
             '4 Months', '2 Months', '14 Weeks',
             '6 Months', '10 Weeks', '8 Months'];

var vaccines = [1,3,0,3,2,4,3,2,5,1,0,3]

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
