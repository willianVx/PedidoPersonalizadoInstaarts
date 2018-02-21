jQuery(document).ready(function($) {
	setOrdem(20,10);
	$("#b-tamanho").click(function(){
		if (window.imgWidth == 0 && window.imgHeight == 0){
			return;
		}
		if (typeof window.imgWidth == "undefined"){
			console.log("valor não definido");
			console.log(window.imgWidth);
		}
		if(window.imgWidth == window.imgHeight){
			window.statusQuadrado = 0;
			$("#retangulares").hide();
			$("#panoramicos").hide();
			$("#quadrados").show();
			console.log("imagem quadrada");
			console.log(window.imgWidth);
			window.x = window.y;
			document.getElementById("s-tamanho").innerHTML = x + "x" + y + "cm ";
		}
		if (window.imgWidth > window.imgHeight){
			$("#retangulares").show();
			$("#panoramicos").show();
			$("#quadrados").hide();
			console.log("imagem retangular");
			console.log(window.imgWidth);
		}
		});

		function setOrdem(x,y){	
			if (y > x) {
				var z = y / x;
				var z = z.toFixed(1);
				setProporcao(z);
			}	
			if (x > y) {
				var z = x / y;
				var z = z.toFixed(1);
				setProporcao(z);
			}
		}

		function setProporcao(z){
			var proporcao = [1,1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9,2.0,2.1,2.2,2.3,2.4,2.5,2.6,2.7,2.8,2.9,3.0,3.1,3.2,3.3,3.4,3.5,3.6,3.7,3.8,3.9,4.0,4.1,4.2,4.3,4.4,4.5,4.6,4.7,4.8,4.9,5.0,5.1,5.2,5.3];
			var i = 0;
			var p = 0;
			while(proporcao[i]){
				if (proporcao[i] == z) {
					console.log(proporcao[i]);
				}
				if (proporcao[i] != z) {
					p++;
				}
				i++;
				if (p == 44) {
					console.log("fora do padrão!")
				}
			}
		}
	});
