
function Pipe(prev_top){
	this.plusmin = random(2);
	this.adjuster;
	if(this.plusmin >= 1){
		this.adjuster = random(height/4);
	}else{
		this.adjuster = -random(height/4);
	}

	this.start = prev_top + this.adjuster;
	if(this.start < height/8){
		this.top = height/8;
	}
	else if(this.start > height-height/8){
		this.top = height-height/8;
	}else{
		this.top = this.start;
	}

	this.gap = prim_gap;
	this.bottom = this.top + this.gap;
	this.x = width;
	this.w = 100;
	this.speed = prim_speed;
	
	this.hits = function(trutt){
		if(trutt.y < this.top || trutt.y > (height - this.bottom)){
			if(trutt.x > this.x && trutt.x < (this.x + this.w)){
					console.log("HIT");
					return true;
			}
		}
	}

	this.show = function(){
		image(toppipe_img, this.x, 0, this.w, this.top);
		image(pipe_img, this.x, this.bottom, this.w, height);
	}

	this.levelup = function(){
		this.gap = prim_gap;
		this.speed = prim_speed;
	}

	this.update = function(){
		this.x -= this.speed;
	}

	this.offscreen = function(){
		return this.x <= -this.w;
	}
}

