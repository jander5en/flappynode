
function Mover(){
	this.y = height/2;
	this.x = width/2;
	this.gravity = 0.2;
	this.velocity = 0;

	this.show = function(){
		if(this.velocity<=2 && this.velocity>=-2){
			image(bird_img, this.x, this.y, 50, 50);
		}else if(this.velocity<2){
			image(upbird_img, this.x, this.y, 50, 50);
		}else if(this.velocity>2){
			image(downbird_img, this.x, this.y, 50, 50);
		}
	}

	this.hopp = function(){
		this.velocity -= 7;
	}
	this.update = function(){
		this.velocity += this.gravity;
		if(this.y>height){
			this.velocity=0;
		}
		else if(this.y<0){
			this.y=0;
			this.velocity=0;
		}
		else{
			this.y += this.velocity;
		}
	}
}
