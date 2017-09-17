var artists = document.querySelectorAll('.artistname a');
var content = document.querySelector('.artist');
var contents = document.querySelectorAll('.artist');
var artist = document.querySelector('.artist');
var header = document.querySelector('header');
var news = document.querySelector('.newsletter');
var active = 0;



window.addEventListener('scroll', function(){
	for(let i = 0; i < contents.length; i++) {
		if (window.pageYOffset >= i*content.offsetHeight) {
			artists[active].classList.remove('active');
			contents[active].classList.remove('active');

			active = i;

			artists[active].classList.add('active');
			contents[active].classList.add('active');	
		}
	}
  for(let j = 0; j < contents.length; j++) {
    if (document.body.clientWidth < 772) {
      artists[j].classList.add('active');
      contents[j].classList.add('active');
    }
  }
});


var active = 0;
var tabs = document.querySelectorAll('.artist-titles a');
var infos = document.querySelectorAll('.artist-details section');

for (let i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener('click', function(){
    	infos[active].classList.remove('seen');
    	tabs[active].classList.remove('seen');

    	active = i;
      
    	infos[active].classList.add('seen');
    	tabs[active].classList.add('seen');
  });
}

var old = 0;
var agendatabs = document.querySelectorAll('.exhibits-list a');
var agendainfos = document.querySelectorAll('.agenda-main section');

for (let j = 0; j < agendatabs.length; j++) {
	agendatabs[j].addEventListener('click', function(){
    	agendainfos[old].classList.remove('seen');
   		agendatabs[old].classList.remove('seen');

    	old = j;
      
    	agendainfos[old].classList.add('seen');
   		agendatabs[old].classList.add('seen');
  });
}

function redirAgenda() {
  var path = window.location.pathname;
  var arr = path.split("/");
  arr.pop();
  path = arr.join("/");
  window.location = path + "/agenda.html";
}


function redirArtiste() {
  var path = window.location.pathname;
  var arr = path.split("/");
  arr.pop();
  path = arr.join("/");
  window.location = path + "/artiste.html";
}