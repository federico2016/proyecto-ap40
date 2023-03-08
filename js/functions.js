// JavaScript Document

function initialSet(isRandom){
	setColorScheme(readColorScheme());
	
	if(isRandom == 'random'){
		getRandomData();
	}
}

function readColorScheme(){
	var actual = localStorage.getItem("colorMode");
	if(actual == null){
		return 'light';
	}else{
		return actual;
	}
}

function setColorScheme(scheme){
	localStorage.setItem("colorMode", scheme);
	document.body.className=scheme;
	document.getElementById("colorMode").textContent='Modo '+ (scheme=='dark' ? 'Diurno' : 'Nocturno');
	document.getElementById("colorMode").className='btn btn-warning ' + (scheme=='dark' ? 'light' : 'dark');
	document.getElementById("formBg").classList.remove('bg-'+ (scheme=='dark' ? 'warning' : 'dark'));
	document.getElementById("formBg").classList.add('bg-'+ (scheme=='dark' ? 'dark' : 'warning'));
			
	for(tNum=1;tNum<5;tNum++){
		document.getElementById("tabla" + tNum).classList.remove(scheme=='dark' ? 'light' : 'dark');
		document.getElementById("tabla" + tNum).classList.add(scheme=='dark' ? 'dark' : 'light');
	}
}

function changeColorScheme(){
	if(readColorScheme() == 'light'){
		setColorScheme('dark');
	}else{
		setColorScheme('light')
	}
}

function getRandomData(){
$.ajax({
url: 'https://randomuser.me/api/?nat=BR,ES,MX',
dataType: 'json',
success: function(data) {

	var newdata= JSON.stringify(data);
	var persona= JSON.parse(newdata);
	var picture = persona.results[0].picture.large;
	var nombrecomp = persona.results[0].name.first+' '+persona.results[0].name.last;
	var fecha = persona.results[0].dob.date;
	var fechanac = fecha.slice(8,10)+'-'+fecha.slice(5,7)+'-'+fecha.slice(0,4);
	var lugaryfecha = persona.results[0].location.city+', '+fechanac;
	var edad = persona.results[0].dob.age;
	var codpostciud = persona.results[0].location.postcode+', '+persona.results[0].location.state +'-'+persona.results[0].location.country;
	var telcont = persona.results[0].phone;	
	var telmov = persona.results[0].cell;	
	var email = persona.results[0].email;
	var emailatag = 'mailto:' + persona.results[0].email;
	
	
	document.getElementById('pic').src = persona.results[0].picture.large;
	document.getElementById('nomyap').textContent = nombrecomp;
	document.getElementById('nomyap2').textContent = nombrecomp;
	document.getElementById('lugaryfecha').textContent = lugaryfecha;
	document.getElementById('edad').textContent = edad;
	document.getElementById('codpostciud').textContent = codpostciud;
	document.getElementById('telcont').textContent = telcont;
	document.getElementById('telmov').textContent = telmov;
	document.getElementById('email').textContent = email;
	document.getElementById('emailatag').href = emailatag;

	}
});
}