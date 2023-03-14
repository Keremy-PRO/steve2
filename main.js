var canvas = new fabric.Canvas('myCanvas');
window.addEventListener("keydown", my_keydown);//Agrea un escuchador

var steve_x=10;
var steve_y=10;

ancho_bloque=30;
alto_bloque=30;

var block="";
var steve="";

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '38'){
        console.log("arriba");
    }

    if(keyPressed == '87'){
        console.log("w");
        nueva_imagen("wall.jpg");
    }
    if(keyPressed == '71'){
        console.log("g");
        nueva_imagen("ground.png");
    }
    if(keyPressed == '76'){
        console.log("l");
        nueva_imagen("ligth_green.png");
    }
    if(keyPressed == '85'){
        console.log("u");
        nueva_imagen("unique.png");
    }
    if(keyPressed == '67'){
        console.log("c");
        nueva_imagen("cloud.jpg");
    }
    if(keyPressed == '84'){
        console.log("t");
        nueva_imagen("trunk.jpg");
    }
    if(keyPressed == '89'){
        console.log("y");
        nueva_imagen("yellow_wall.png");
    }
    if(keyPressed == '82'){
        console.log("r");
        nueva_imagen("roof.jpg");
    }
    if(keyPressed == '68'){
        console.log("d");
        nueva_imagen("dark_green.png");
    }
    if(keyPressed == '39'){
        console.log("Derecha");
        rigth();
    }
    if(keyPressed == '38'){
        console.log("Arriba");
        up();
    }
    if(keyPressed == '40'){
        console.log("Abajo");
        down();
    }
    if(keyPressed == '37'){
        console.log("Izquierda");
        left();
    }
}

function steve_update(){
    fabric.Image.fromURL("player.png", function(Img) {
        steve= Img;
        steve.scaleToWidth(150);//Ancho
        steve.scaleToHeight(140);
        steve.set({top:steve_y,left:steve_x});
        canvas.add(steve);
        });
}

function nueva_imagen(get_image){//
        fabric.Image.fromURL(get_image, function(Img) {
        block= Img;
        block.scaleToWidth(ancho_bloque);//Ancho
        block.scaleToHeight(alto_bloque);
        canvas.add(block);
        });
}

function up(){
    steve_y = steve_y - ancho_bloque;
    canvas.remove(steve);
    steve_update();
}

function down(){
    steve_y = steve_y + ancho_bloque;
    canvas.remove(steve);
    steve_update();
}

function rigth(){

		steve_x = steve_x + ancho_bloque;
		canvas.remove(steve);
		steve_update();

}

function left(){

		steve_x = steve_x - ancho_bloque;
		canvas.remove(steve);
		steve_update();

}

