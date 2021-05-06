var canvas=new fabric.Canvas("myCanvas");
block_image_width=30;
block_image_height=30;


function new_image(get_image) {
    fabric.Image.fromURL(get_image,function(Img) {
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
          
        });
        canvas.add(block_image_object);
    });
}
    window.addEventListener("keydown", my_keydown);
    function my_keydown(e) {
        keypressed=e.keyCode;
        console.log(keypressed);
        if(e.shiftkey==true && keypressed=='80'){
            console.log("p and shift pressed together");
            block_image_width=block_image_width+10;
            block_image_height=block_image_height+10;
            document.getElementById("current_width").innerHTML=block_image_width;
            document.getElementById("current_height").innerHTML=block_image_height;
        } 
        if(e.shiftkey==true && keypressed=='77'){
            console.log("m and shift pressed together");
            block_image_width=block_image_width-10;
            block_image_height=block_image_height-10;
            document.getElementById("current_width").innerHTML=block_image_width;
            document.getElementById("current_height").innerHTML=block_image_height;
        } 
        if(keypressed=='38'){
            up();
            console.log("up");
        }
        if(keypressed=='40'){
            down();
            console.log("down");
        }
        if(keypressed=='37'){
            left();
            console.log("left");
        }
        if(keypressed=='39'){
            right();
            console.log("right");
        }
        if(keypressed=='73'){
            new_image('download.jpg');
            console.log("i");
        }
        if(keypressed=='67'){
            new_image('download (1).jpg');
            console.log("c");
        }
        if(keypressed=='84'){
            new_image('download (2).jpg');
            console.log("t");
        }
        if(keypressed=='83'){
            new_image('download (3).jpg');
            console.log("s");
        }
        if(keypressed=='72'){
            new_image('images.jpg');
            console.log("h");
        }
     }
 