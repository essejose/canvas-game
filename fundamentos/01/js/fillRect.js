/**
 * Desenha Retangulos baseado nos parametros
 * @param  {int} x       posiçao horizontal
 * @param  {int} y       posicao vertical
 * @param  {int} largura Largura do objeto
 * @param  {int} altura  Altura do objeto
 * @return {undefined}   Não retorna nada
 */

var retangulos = function(obj) {
    "use strict";

    this.ctx.fillStyle = obj.color
    this.ctx.lineWidth = obj.line;
    this.ctx.strokeStyle = obj.lineColor;
    this.ctx.fillRect(obj.x,
        obj.y,
        obj.largura,
        obj.altura);

}


var clearRetangle = function (obj){
	"use strict";
	this.ctx.clearRect(obj.x,obj.y, obj.largura,  obj.altura)
}

