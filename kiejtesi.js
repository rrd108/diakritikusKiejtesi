jQuery(document).ready(function($){

	var diakritikus = new RegExp('[' + kiejtesi.diakritikus.join('') + ']', "ig");
	
	var modHtml = $('body').html();

	//menjünk végig a documentumon szavanként
	$.each($('body').text().split(' '), function(index, value){
		//nézzük meg van-e benne diakritikus karakter
		if(value.search(diakritikus) != -1){
			//ha van akkor adjunk hozzá css-t és tooltipet
			var szo = new RegExp(value.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), "gi");	//mivel változóban jön a string escapelni kell, hogy a regex ne haljon el pl egy (-en
			var kiejtett = value.replace(diakritikus, function(c){
					return kiejtesi.kiejtes[kiejtesi.diakritikus.indexOf(c)];
				});
			kiejtett = kiejtett.replace(/[,\(\) \r\n\t\?\!]/g, '');	//írásjelek, soremelések eltávolítása
			modHtml = modHtml.replace(szo, '<span class="kiejtes" title="' + kiejtett + '">' + value + '</span>');
		}
	});
	$('body').html(modHtml);
});

var kiejtesi = {
	
diakritikus : ['ā', 'ī', 'ū', 'ḍ', 'ḥ', 'ḷ', 'ḹ', 'ṁ', 'ṅ', 'ṇ', 'ñ', 'ṛ', 'ṝ', 'ṣ', 'ś', 'ṭ',
					'Ā', 'Ī', 'Ū', 'Ḍ', 'Ḥ', 'Ḷ', 'Ḹ', 'Ṁ', 'Ṅ', 'Ṇ', 'Ñ', 'Ṛ', 'Ṝ', 'Ṣ', 'Ś', 'Ṭ'],

kiejtes : ['á', 'í', 'ú', 'd', 'h', 'l', 'l', 'm', 'n', 'n', 'n', 'ri', 'rí', 's', 's', 't',
			'Á', 'I', 'Ú', 'D', 'H', 'L', 'L', 'M', 'N', 'N', 'N', 'Ri', 'Rí', 'S', 'S', 'T'],
	
}

//problems: c - Caitanya, y - yogi, j - japa
