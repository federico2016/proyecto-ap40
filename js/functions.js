// JavaScript Document

function initialSet(randomProfile){
	setColorScheme(readColorScheme());
	
	if(randomProfile){
		
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
			document.getElementById("colorMode").textContent='Activar Modo '+ (scheme=='dark' ? 'Día' : 'Noche');
			document.getElementById("colorMode").className='btn btn-'+ (scheme=='dark' ? 'secondary' : 'warning');
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
