window.onload = function spaceXKlok(){
	var klok = new Date();
	var uren = klok.getHours();
	var minuten = klok.getMinutes();
	var seconden = klok.getSeconds();
	var dagen = new Array('zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag');
	var maanden = new Array('januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december');

	uren = ("0" + uren).slice(-2);
	minuten = ("0" + minuten).slice(-2);

	document.getElementById('klok').innerHTML = uren + ' : ' + minuten;
	document.getElementById('dag').innerHTML = dagen[klok.getDay()];
	document.getElementById('datum').innerHTML = klok.getDate() + ' ' +maanden[klok.getMonth()];

	var actief = setTimeout(spaceXKlok, 500);

	document.getElementById('nacht').onclick = function(){
		document.getElementById('geheel').classList.add('nightMode');
		document.getElementById('geheel').classList.remove('dayMode');
		document.getElementById('overdag').classList.add('nightModus');
		document.getElementById('overdag').classList.remove('dayModus');
		document.getElementById('nacht').classList.add('nightModus');
		document.getElementById('nacht').classList.remove('dayModus');
	};
	document.getElementById('overdag').onclick = function(){
		document.getElementById('geheel').classList.add('dayMode');
		document.getElementById('geheel').classList.remove('nightMode');
		document.getElementById('nacht').classList.add('dayModus');
		document.getElementById('nacht').classList.remove('nightModus');
		document.getElementById('overdag').classList.add('dayModus');
		document.getElementById('overdag').classList.remove('nightModus');
	}
	document.getElementById('cDS').innerHTML = (22 - uren) + ' : ' + (59 - minuten) + ' : ' + (60- seconden);
	document.getElementById('cDO').innerHTML = (30 - uren) + ' : ' + (59 - minuten) + ' : ' + (60- seconden);
};

