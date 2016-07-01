/**
 * Desenha Retangulos baseado nos parametros
 * @param  {int} x       posiçao horizontal
 * @param  {int} y       posicao vertical
 * @param  {int} largura Largura do objeto
 * @param  {int} altura  Altura do objeto
 * @return {undefined}   Não retorna nada
 */

 function retangulos (obj) {
 

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

