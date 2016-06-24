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
APP = {
	canvas: document.getElementById('canvas'), 
	ctx: this.canvas.getContext('2d'),
}

/**
 * Incializa o objeto APP
 *  
 */
APP.init = function(){

	this.setting(); 
	

}

/**
 * Configura os padroes dentro do APP como altura, largura 
 * @return {undefined}   Não retorna nada
 */
APP.setting = function (){

	this.ctx.canvas.height = window.innerHeight;
	this.ctx.canvas.width = window.innerWidth;
}
