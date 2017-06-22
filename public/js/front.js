const myImage = document.querySelector('img');


ion.sound({
    sounds: [
        {
            name: "07-slayer-angel-of-death",
        },
        {
            name: "wickedmalelaugh1",
            volume: 0.3,
        },
          {
            name: 'Monster_Gigante-Doberman-1334685792',
            volume: 0.99,
          }

    ],
    volume:0.1,
    path: '/ion.sound-3.0.7/sounds/',
    multiplay: true,
    preload: true
});
$(document).ready(function(){

  $('.forwards').hide();
  $('#message').hide();
myImage.addEventListener('click', ()=>{
  $('.backwards').toggle();
    ion.sound.play("07-slayer-angel-of-death");
  $('.forwards').toggle();
  });
$('#symbols').one('click', function (){

    setTimeout(function(){
      $('.regular').hide();
      $('#message').show();
      ion.sound.play("Monster_Gigante-Doberman-1334685792");
    }, 8250);

    setTimeout(function(){
      $('#message').hide();
      ion.sound.stop("Monster_Gigante-Doberman-1334685792");
      $('.regular').show();
    },10000);
});

$('a').one('click', function (){
  ion.sound.play("wickedmalelaugh1");
});
});
