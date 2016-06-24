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


var lines = function(obj) {
    "use strict";
    var len = obj.lineX.length;
    this.ctx.beginPath();
    for (var i = 0; i < len; i++) {
        this.ctx.moveTo(obj.lineX[i - 1], obj.lineY[i - 1]);
        this.ctx.lineTo(obj.lineX[i], obj.lineY[i]);
    }
    this.ctx.closePath();
    this.ctx.lineWidth = obj.lineWidth;
    this.ctx.strokeStyle = obj.color;
    this.ctx.stroke(); 

}