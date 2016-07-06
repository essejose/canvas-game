/**
 * Aplicação de intrudução ao canvas
 * @namespace APP
 */

var APP = APP || {};

/**
 * Propriedades de nossa aplicação.
 *
 * @type Object
 */
APP = (function() {

	"use strict";

	var canvas = document.getElementById('canvas'),
		ctx = canvas.getContext('2d');



	/**
	 * Incializa o objeto APP
	 *
	 */
	function init() {

		setting();

	}


	/**
	 * Configura os padroes dentro do APP como altura, largura
	 * @return {undefined}   Não retorna nada
	 */
	function setting() {

		ctx.canvas.height = window.innerHeight;
		ctx.canvas.width = window.innerWidth;
	}


	return {
		init: init,
		ctx: ctx
	};

})();


APP.Desenho = (function(APP) {
	var quadros = [];

	function desenho(x, y) {

		this.x = x;
		this.y = y;
		this.largura = 100;
		this.altura = 100;
		this.color = 'blue';
		this.line = 0;
		this.lineColor = 'red';
		this.ligado = false;

		this.clear = function(i) {

			clearRetangle.call(APP, this);
			console.log('clear' + i, this);
		};

		this.render = function(i) {

			retangulos.call(APP, this);
			console.log('render' + i, this);

		};

		this.move = function(x, y) {
			this.clear();
			this.x = x;
			this.y = y;  
			this.render();
		};

		this.desligar = function() {
			this.ligado = false;
		};
		this.ligado = function() {
			this.ligado = true;
		};
	}

	function renderObj() {

		var len = quadros.length;

		for (var i = 0; i < len; i++) {
			quadros[i].clear(i);
			quadros[i].render(i);

		}


	}


	function create(x, y) {
		"use strict";
		quadros.push(new desenho(x, y));
		renderObj();
	}

	function moveObj(index, x, y) {

		delRemove(index);
		quadros[index].x = x;
		quadros[index].y = y;
		renderObj();

	}



	function delObj(index) {

		delRemove(index);
		quadros.splice(index, 1);

		console.log(quadros);
	}

	function delRemove(index) {

		quadros[index].clear();
		console.log('quadro removido', index);
	}

	/**
	 * Desenha Retangulos baseado nos parametros
	 * @param  {int} x       posiçao horizontal
	 * @param  {int} y       posicao vertical
	 * @param  {int} largura Largura do objeto
	 * @param  {int} altura  Altura do objeto
	 * @return {undefined}   Não retorna nada
	 */
	function retangulos(obj) {


		this.ctx.beginPath();
		this.ctx.fillStyle = obj.color;
		this.ctx.fillRect(obj.x,
			obj.y,
			obj.largura,
			obj.altura);

		this.ctx.lineWidth = obj.line;
		this.ctx.strokeStyle = obj.lineColor;
		this.ctx.strokeRect(obj.x,
			obj.y,
			obj.largura,
			obj.altura);
		this.ctx.closePath();
	}


 function clearRetangle (obj){
 
    // compensa o  stroke criado
    var lineOffset;

    if (obj.line > 0 ) {
        lineOffset = obj.line + Math.round(obj.line/2);
    }else{
        obj.line = 1;
        lineOffset = 2;

    } 

    this.ctx.clearRect(obj.x - obj.line , obj.y  - obj.line , obj.largura + lineOffset,  obj.altura + lineOffset );
 	 
}



	return {
		create: create,
		quadros: quadros,
		render: renderObj,
		del: delObj,
		move: moveObj
	};


})(APP);