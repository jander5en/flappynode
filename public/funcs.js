
function keyPressed(){
	if (key == ' '){
		turtle.hopp();
	}
}

function bg(){
	image(scrl_img, scrl_img_x1, 0, width, height);
	image(scrl_img, scrl_img_x2, 0, width, height);
	scrl_img_x1 -= scrollSpeed;
	scrl_img_x2 -= scrollSpeed;
	 if(scrl_img_x1 < -width){
    	scrl_img_x1 = width;
     }
	 if(scrl_img_x2 < -width){
    	scrl_img_x2 = width;
     }
}

function levels(){
	if(frameCount % (200) == 0){
		level++;
 	}  
}
