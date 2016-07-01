
/**
 * Desenha linhas recebendo um objeto
 * @return {undefined}   Não retorna nada
 */
 function lines (obj) {
    "use strict";
    var len = obj.lineX.length;
    this.ctx.beginPath();
    for (var i = 0; i < len; i++) {
        this.ctx.moveTo(obj.lineX[i - 1], obj.lineY[i - 1]);
        this.ctx.lineTo(obj.lineX[i], obj.lineY[i]);
    } 
    this.ctx.lineWidth = obj.lineWidth;
    this.ctx.strokeStyle = obj.color;
    this.ctx.stroke();  
    this.ctx.closePath();

}