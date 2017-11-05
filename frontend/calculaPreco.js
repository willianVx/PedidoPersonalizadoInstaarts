/*
    Funcoes definem o tamanho
*/
   // var material, x, y, moldura;
    var x = 40;
    var y = 60; 
    //var moldura = 0;
    var somaMoldura = 0; 

    var meta3mm = 1265;
    var meta7mm = 2467;
    var meta5mm = 1771;
    var meta4mm = 1392;
    var acm5mm = 1518;
    var uvPsmm = 1265;
    var uv_acm = 1553;
    var precoBase = meta3mm;

    var papel_algodao = 552;
    var papel_fosco = 414;
    var papel_acetinato = 460;
    var papel_brilhante = 437;
    var papel_canvas = 633;

    var florencaM = 2947;

    var tipoMoldura = 0;
    var nome_moldura = " Sem Moldura ";
    var nome_acabamento = " Metacrilato 3mm ";
    var preco = 343.60;

function T12x18(){
	//document.getElementById("s-tamanho").innerHTML = "12x18cm" + " ";
    window.x = 12;
    window.y = 18;
    document.getElementById("s-tamanho").innerHTML = x + "x" + y + "cm ";
    formulaTotal();
    //var preco = (x * y * material/10000) + 40;
    //document.getElementById("s-preco").innerHTML = "R$: " + preco.toFixed(2);
}
function T20x30(){
	//document.getElementById("s-tamanho").innerHTML = "20x30cm" + " ";
    window.x = 20;
    window.y = 30;
    document.getElementById("s-tamanho").innerHTML = x + "x" + y + "cm ";
    formulaTotal();
}
function T30x45(){
	//document.getElementById("s-tamanho").innerHTML = "30x45cm" + " ";
    window.x = 30;
    window.y = 45;
    document.getElementById("s-tamanho").innerHTML = x + "x" + y + "cm ";
    formulaTotal();
}
function T40x60(){
	//document.getElementById("s-tamanho").innerHTML = "40x60cm" + " ";
    window.x = 40;
    window.y = 60;
    document.getElementById("s-tamanho").innerHTML = x + "x" + y + "cm ";
    formulaTotal();
}
function T60x90(){
	//document.getElementById("s-tamanho").innerHTML = "60x90cm" + " ";
    window.x = 60;
    window.y = 90;
    document.getElementById("s-tamanho").innerHTML = x + "x" + y + "cm ";
    formulaTotal();
}
function T90x45(){
	//document.getElementById("s-tamanho").innerHTML = "90x45cm" + " ";
    window.x = 90;
    window.y = 45;
    document.getElementById("s-tamanho").innerHTML = x + "x" + y + "cm ";
    formulaTotal();
}

function T20x20(){
	//document.getElementById("s-tamanho").innerHTML = "20x20cm" + " ";
    window.x = 20;
    window.y = 20;
    document.getElementById("s-tamanho").innerHTML = x + "x" + y + "cm ";
    formulaTotal();
}
function T30x30(){
	//document.getElementById("s-tamanho").innerHTML = "30x30cm" + " ";
    window.x = 30;
    window.y = 30;
    document.getElementById("s-tamanho").innerHTML = x + "x" + y + "cm ";
    formulaTotal();
}
function T45x45(){
	//document.getElementById("s-tamanho").innerHTML = "45x45cm" + " ";
    window.x = 45;
    window.y = 45;
    document.getElementById("s-tamanho").innerHTML = x + "x" + y + "cm ";
    formulaTotal();
}
function T60x60(){
	//document.getElementById("s-tamanho").innerHTML = "60x60cm" + " ";
    window.x = 60;
    window.y = 60;
    document.getElementById("s-tamanho").innerHTML = x + "x" + y + "cm ";
    formulaTotal();
}
function T90x90(){
	//document.getElementById("s-tamanho").innerHTML = "90x90cm" + " ";
    window.x = 90;
    window.y = 90;
    document.getElementById("s-tamanho").innerHTML = x + "x" + y + "cm ";
    formulaTotal();
}

function T18x12(){
	//document.getElementById("s-tamanho").innerHTML = "18x12cm" + " ";
    window.x = 18;
    window.y = 12;
    document.getElementById("s-tamanho").innerHTML = x + "x" + y + "cm ";
    formulaTotal();
}
function T20x30(){
	//document.getElementById("s-tamanho").innerHTML = "20x30cm" + " ";
    window.x = 20;
    window.y = 30;
    document.getElementById("s-tamanho").innerHTML = x + "x" + y + "cm ";
    formulaTotal();
}
function T30x45(){
	//document.getElementById("s-tamanho").innerHTML = "30x45cm" + " ";
    window.x = 30;
    window.y = 45;
    document.getElementById("s-tamanho").innerHTML = x + "x" + y + "cm ";
    formulaTotal();
}
function T40x60(){
	//document.getElementById("s-tamanho").innerHTML = "40x60cm" + " ";
    window.x = 40;
    window.y = 60;
    document.getElementById("s-tamanho").innerHTML = x + "x" + y + "cm ";
    formulaTotal();
}
/*
    Checa tamanho personalizado
*/

function tamanhoUsuario(){

    window.x = document.getElementById("x").value;
    window.y = document.getElementById("y").value;

    valor = "Não é um valor válido";

    if (isNaN(x) || x < 10 || x > 100) {
        alert(valor);
    }else if (isNaN(y) || y < 10 || y > 200){
        alert(valor);
    }else{
        document.getElementById("s-tamanho").innerHTML = x + "x" + y + "cm ";
        formulaTotal();
    }
}
/* 
    define material
*/

//metacrilato dsa 
function meta7(){
    if (tipoMoldura == 3) {
        if (somaMoldura != 0){
                    somaMoldura = 480;
                }
    }
    if (tipoMoldura == 2) {
        if (somaMoldura != 0){
                    somaMoldura = 320;
                }
    }  
    if (tipoMoldura == 1) {
        if (somaMoldura != 0){
                    somaMoldura = 160;
                }
    }            
    var meta7mm = 2467;
    window.nome_acabamento = "Metacrilato 7mm";
    window.precoBase = meta7mm;
    document.getElementById("s-metacrilato").innerHTML = "Metacrilato 7mm" + " ";
    /*var preco = ((x * y * material / 10000)+moldura)+40; 
    document.getElementById("s-preco").innerHTML = preco;*/
    formulaTotal();
}
function meta5(){
      if (tipoMoldura == 3) {
        if (somaMoldura != 0){
                    somaMoldura = 480;
                }
    }
    if (tipoMoldura == 2) {
        if (somaMoldura != 0){
                    somaMoldura = 320;
                }
    }   
     if (tipoMoldura == 1) {
        if (somaMoldura != 0){
                    somaMoldura = 160;
                }
    }  
    window.meta5mm = 1771;
    window.nome_acabamento = "Metacrilato 5mm";
    window.precoBase = window.meta5mm;
    document.getElementById("s-metacrilato").innerHTML = "Metacrilato 5mm" + " ";
    formulaTotal();
}
function meta4(){
    if (tipoMoldura == 3) {
        if (somaMoldura != 0){
                    somaMoldura = 506;
                }
    } 
    if (tipoMoldura == 2) {
        if (somaMoldura != 0){
                    somaMoldura = 345;
                }
    }   
     if (tipoMoldura == 1) {
        if (somaMoldura != 0){
                    somaMoldura = 153;
                }
    }  
    window.meta4mm = 1392;
    window.nome_acabamento = "Metacrilato 4mm";
    window.precoBase = window.meta4mm;
    document.getElementById("s-metacrilato").innerHTML = "Metacrilato 4mm" + " ";
    formulaTotal();
}
function meta3(){
    if (tipoMoldura == 3) {
        if (somaMoldura != 0){
                    somaMoldura = 320;
                }
    }        
    if (tipoMoldura == 2) {
        if (somaMoldura != 0){
                    somaMoldura = 160;
                }
    }   
     if (tipoMoldura == 1) {
        if (somaMoldura != 0){
                    somaMoldura = 0;
                }
    }  
    window.meta3mm = 1265;
    window.nome_acabamento = "Metacrilato 3mm";
    window.precoBase = window.meta3mm;
    document.getElementById("s-metacrilato").innerHTML = "Metacrilato 3mm" + " ";
    formulaTotal();
}
function acm5(){
    if (tipoMoldura == 3) {
        if (somaMoldura != 0){
                    somaMoldura = 480;
                }
    } 
    if (tipoMoldura == 2) {
        if (somaMoldura != 0){
                    somaMoldura = 320;
                }
    }          
     if (tipoMoldura == 1) {
        if (somaMoldura != 0){
                    somaMoldura = 160;
                }
    }  
    window.acm5mm = 1518;
    window.nome_acabamento = "ACM 5mm";
    window.precoBase = window.acm5mm;
    document.getElementById("s-metacrilato").innerHTML = "ACM 5mm" + " ";
    formulaTotal();
}

// papeis

function papelAlgodao(){
    window.precoBase = window.papel_algodao;
    window.somaMoldura = 0;
    window.nome_acabamento = "Papel algodao";
    document.getElementById("s-metacrilato").innerHTML = "Papel algodão" + " ";
    document.getElementById("s-moldura").innerHTML = " Sem Moldura ";
    formulaTotal();
}
function acetinato(){
    window.precoBase = window.papel_acetinato;
    window.somaMoldura = 0;
    window.nome_acabamento = "acetinato";
    document.getElementById("s-metacrilato").innerHTML = "Acetinato" + " ";
    document.getElementById("s-moldura").innerHTML = " Sem Moldura ";
    formulaTotal();
}
function brilhante(){
    window.precoBase = window.papel_brilhante;
    window.somaMoldura = 0;
    window.nome_acabamento = "Brilhante";
    document.getElementById("s-metacrilato").innerHTML = "Brilhante" + " ";
    document.getElementById("s-moldura").innerHTML = " Sem Moldura ";
    formulaTotal();
}
function fosco(){
    window.precoBase = window.papel_fosco;
    window.somaMoldura = 0;
    window.nome_acabamento = "Fosco";
    document.getElementById("s-metacrilato").innerHTML = "Fosco" + " ";
    document.getElementById("s-moldura").innerHTML = " Sem Moldura ";
    formulaTotal();
}
function canvas(){
    window.precoBase = window.papel_canvas;
    window.somaMoldura = 0;
    window.nome_acabamento = "Canvas";
    document.getElementById("s-metacrilato").innerHTML = "canvas" + " ";
    document.getElementById("s-moldura").innerHTML = " Sem Moldura ";
    formulaTotal();
}
//Impressão UV 
function uvPs(){
    if (tipoMoldura == 3) {
        if (somaMoldura != 0){
                    somaMoldura = 480;
                }
    }        
    if (tipoMoldura == 2) {
        if (somaMoldura != 0){
                    somaMoldura = 320;
                }
    }   
     if (tipoMoldura == 1) {
        if (somaMoldura != 0){
                    somaMoldura = 160;
                }
    }  
    window.uvPsmm = 1265;
    window.nome_acabamento = "UVps";
    window.precoBase = window.uvPsmm;
    document.getElementById("s-metacrilato").innerHTML = "UV Sobre PS" + " ";
    formulaTotal();
}

function uvAcm(){
    if (tipoMoldura == 3) {
        if (somaMoldura != 0){
                    somaMoldura = 480;
                }
    }        
    if (tipoMoldura == 2) {
        if (somaMoldura != 0){
                    somaMoldura = 320;
                }
    }   
     if (tipoMoldura == 1) {
        if (somaMoldura != 0){
                    somaMoldura = 160;
                }
    }  
    window.uv_acm = 1553;
    window.nome_acabamento = "UV ACM";
    window.precoBase = window.uv_acm;    
    document.getElementById("s-metacrilato").innerHTML = "UV Sobre ACM" + " ";
    formulaTotal();
}

/*
    Define MOLDURA
*/

//classica
function florenca(){
    molduraTipo3();
    window.nome_moldura = "florenca";
      if (precoBase == papel_algodao || precoBase == papel_fosco || precoBase == papel_brilhante || precoBase == papel_acetinato) {
        document.getElementById("s-moldura").innerHTML = "Sem Moldura";
    }else{
        document.getElementById("s-moldura").innerHTML = "Florença" + " ";
    }
    formulaTotal();
}


function instambul(){
    molduraTipo3();
    window.nome_moldura = "instambul";
      if (precoBase == papel_algodao || precoBase == papel_fosco || precoBase == papel_brilhante || precoBase == papel_acetinato) {
        document.getElementById("s-moldura").innerHTML = "Sem Moldura";
    }else{
        document.getElementById("s-moldura").innerHTML = "Istanbul" + " ";
    }
    formulaTotal();
}

function paris(){ 
    molduraTipo3();
    window.nome_moldura = "paris";
      if (precoBase == papel_algodao || precoBase == papel_fosco || precoBase == papel_brilhante || precoBase == papel_acetinato) {
        document.getElementById("s-moldura").innerHTML = "Sem Moldura";
    }else{
        document.getElementById("s-moldura").innerHTML = "Paris" + " ";
    }
    formulaTotal();
}

function roma(){
    molduraTipo1();
    window.nome_moldura = "roma";
      if (precoBase == papel_algodao || precoBase == papel_fosco || precoBase == papel_brilhante || precoBase == papel_acetinato) {
        document.getElementById("s-moldura").innerHTML = "Sem Moldura";
    }else{
        document.getElementById("s-moldura").innerHTML = "Roma" + " ";
    }
    formulaTotal();

}

//contemporanea

function atenas(){
    molduraTipo1();
    window.nome_moldura = "basel";
    if (precoBase == papel_algodao || precoBase == papel_fosco || precoBase == papel_brilhante || precoBase == papel_acetinato) {
        document.getElementById("s-moldura").innerHTML = "Sem Moldura";
    }else{
        document.getElementById("s-moldura").innerHTML = "Atenas" + " ";
    }
    formulaTotal();
}
function basel(){
     molduraTipo2();
     window.nome_moldura = "basel";
    if (precoBase == papel_algodao || precoBase == papel_fosco || precoBase == papel_brilhante || precoBase == papel_acetinato) {
        document.getElementById("s-moldura").innerHTML = "Sem Moldura";
    }else{
        document.getElementById("s-moldura").innerHTML = "Basel" + " ";
    }
    formulaTotal();
}
function berlim(){
    molduraTipo3();
    window.nome_moldura = "berlim";
    if (precoBase == papel_algodao || precoBase == papel_fosco || precoBase == papel_brilhante || precoBase == papel_acetinato) {
        document.getElementById("s-moldura").innerHTML = "Sem Moldura";
    }else{
        document.getElementById("s-moldura").innerHTML = "Berlim" + " ";
    }
    formulaTotal();
}
function miami(){
    molduraTipo1();
    window.nome_moldura = "miami";
    if (precoBase == papel_algodao || precoBase == papel_fosco || precoBase == papel_brilhante || precoBase == papel_acetinato) {
        document.getElementById("s-moldura").innerHTML = "Sem Moldura";
    }else{
        document.getElementById("s-moldura").innerHTML = "Miami" + " ";
    }
    formulaTotal();
 
}
function novaYork(){
    molduraTipo2();
    window.nome_moldura = "nova york";
    if (precoBase == papel_algodao || precoBase == papel_fosco || precoBase == papel_brilhante || precoBase == papel_acetinato) {
        document.getElementById("s-moldura").innerHTML = "Sem Moldura";
    }else{
        document.getElementById("s-moldura").innerHTML = "Nova York" + " ";
    }
    formulaTotal();
}
function saoPaulo(){
    molduraTipo2();
    window.nome_moldura = "Sao paulo";
    if (precoBase == papel_algodao || precoBase == papel_fosco || precoBase == papel_brilhante || precoBase == papel_acetinato) {
        document.getElementById("s-moldura").innerHTML = "Sem Moldura";
    }else{
        document.getElementById("s-moldura").innerHTML = "São Pulo" + " ";
    }
    formulaTotal();
}

//moderna

function amazonas(){
    molduraTipo2();
    window.nome_moldura = "Amazonas";
    if (precoBase == papel_algodao || precoBase == papel_fosco || precoBase == papel_brilhante || precoBase == papel_acetinato) {
        document.getElementById("s-moldura").innerHTML = "Sem Moldura";
    }else{
        document.getElementById("s-moldura").innerHTML = "Amazonas" + " ";
    }
    formulaTotal();
}
function amsterdam(){
    molduraTipo1();
    window.nome_moldura = "Amsterdam";
    if (precoBase == papel_algodao || precoBase == papel_fosco || precoBase == papel_brilhante || precoBase == papel_acetinato) {
        document.getElementById("s-moldura").innerHTML = "Sem Moldura";
    }else{
        document.getElementById("s-moldura").innerHTML = "Amsterdam" + " ";
    }
    formulaTotal();
}
function buenosAires(){
     molduraTipo1();
     window.nome_moldura = "Buenos Aires";
    if (precoBase == papel_algodao || precoBase == papel_fosco || precoBase == papel_brilhante || precoBase == papel_acetinato) {
        document.getElementById("s-moldura").innerHTML = "Sem Moldura";
    }else{
        document.getElementById("s-moldura").innerHTML = "Buenos Aires" + " ";
    }
    formulaTotal();
}
function londres(){
     molduraTipo1();
     window.nome_moldura = "Londres";
    if (precoBase == papel_algodao || precoBase == papel_fosco || precoBase == papel_brilhante || precoBase == papel_acetinato) {
        document.getElementById("s-moldura").innerHTML = "Sem Moldura";
    }else{
        document.getElementById("s-moldura").innerHTML = "Londres" + " ";
    }
    formulaTotal();

}
function santiago(){
    molduraTipo1();
    window.nome_moldura = "Santiago";
    if (precoBase == papel_algodao || precoBase == papel_fosco || precoBase == papel_brilhante || precoBase == papel_acetinato) {
        document.getElementById("s-moldura").innerHTML = "Sem Moldura";
    }else{
        document.getElementById("s-moldura").innerHTML = "Santiago" + " ";
    }
    formulaTotal();
}
function formulaTotal(){
        //alert(window.precoBase);
        //alert(window.somaMoldura);
        var precoBase = window.precoBase + window.somaMoldura;
        var preco = (x * y * precoBase/10000) + 40;
        document.getElementById("s-preco").innerHTML = "R$: " + preco.toFixed(2);
        window.preco = preco;
    }
function molduraTipo3(){
    tipoMoldura = 3;
    if (precoBase == papel_algodao || precoBase == papel_fosco || precoBase == papel_brilhante || precoBase == papel_acetinato) {
        alert("Não é possível escolher moldura para esse acabamento");
    }
    else if (precoBase == meta3mm) {
    somaMoldura = 320;
    }else if (precoBase == meta4mm){
    somaMoldura = 506;
    }
    else{
    somaMoldura = 480;
    }
}
function molduraTipo2(){
    tipoMoldura = 2;
    if (precoBase == papel_algodao || precoBase == papel_fosco || precoBase == papel_brilhante || precoBase == papel_acetinato) {
        alert("Não é possível escolher moldura para esse acabamento");
    }
    else if (precoBase == meta3mm) {
        somaMoldura = 160;
    }else if (precoBase == meta4mm) {
        somaMoldura = 345;
    }
    else{
        somaMoldura = 320;
    }
}
function molduraTipo1(){
    tipoMoldura = 1;
    if (precoBase == papel_algodao || precoBase == papel_fosco || precoBase == papel_brilhante || precoBase == papel_acetinato) {
        alert("Não é possível escolher moldura para esse acabamento");
    }
    else if (precoBase == meta3mm) {
        somaMoldura = 0;
    }else if (precoBase == meta4mm) {
        somaMoldura = 153;
    }
    else{
        somaMoldura = 160;
    }
}
function semMoldura(){
    window.somaMoldura = 0;
    formulaTotal();
    document.getElementById("s-moldura").innerHTML = "Sem Moldura";
}
//upload de acabamento, moldura e preco 
/*
$(document).ready(function(){
    $("#comprar-botao").click(function(){
        console.log(nome_moldura);
        console.log(nome_acabamento);
        console.log(x,y);
        console.log(preco);

        $.post("",{
                moldura: nome_moldura,
                acabamento: nome_acabamento,
                largura: x,
                altura: y,
                preco: preco
            },function(data,status){
                console.log(data);
            });
    });
});


jQuery(function($){
    $("#comprar-botao").click(function(){
        console.log(nome_moldura);
        console.log(nome_acabamento);
        console.log(x,y);
        console.log(preco);

        $.ajax({
            type: "POST",
            data: {
            action: 'iap_db_install_data', 
            preco: preco,
            largura: x,
            altura: y,
            moldura: nome_moldura,
            acabamento: nome_acabamento
            },
            url: './wp-admin/admin-ajax.php',
            beforeSend: function() {
                console.log("Enviando!!");
            },
            success: function(data) {
               console.log("zueraCast");
            }
        });
    });
});
*/

jQuery(function($){
    $("#comprar-botao").click(function(){
        alert("oi!!");
      $.ajax({
          type:"POST",
          url: "wp-admin/admin-ajax.php",
          data: {
          action: 'sendMyMail',
          name: "teste"  
         },  
         success: function(data){
          console.log(data)
         }
        });
    });
});