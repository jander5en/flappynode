
var score;
var turtle;
var level;
var prim_gap;
var prim_speed;
var pipe_img;
var toppipe_img;
var pipes = [];
var bird_img;
var upbird_img;
var downbird_img;
var scrl_img;
var scrl_img_x1 = 0;
var scrl_img_x2;
var scrollSpeed;

function preload(){
	scrl_img = loadImage("imgs/scrl_bg.jpg");
	pipe_img = loadImage("imgs/pipe.png");
	toppipe_img= loadImage("imgs/toppipe.png");
	bird_img= loadImage("imgs/bird.png");
	upbird_img= loadImage("imgs/upbird.png");
	downbird_img= loadImage("imgs/downbird.png");

}

function setup(){
	createCanvas(displayWidth,displayHeight);
	prim_gap=height/8;
	prim_speed=4;
	scrollSpeed=prim_speed/2;
	scrl_img_x2=width;
	level = 1;
	turtle = new Mover;
	pipes.push(new Pipe(height/2));
}

function draw(){
	bg();
	turtle.update();
	turtle.show();
	levels();

	if(frameCount % (100-level) == 0){
		pipes.push(new Pipe(pipes[pipes.length-1].top));
	}	
	for(var i = pipes.length-1; i >= 0; i--){
		pipes[i].update();
		pipes[i].show();
		pipes[i].hits(turtle);
		if (pipes[i].offscreen()){
			pipes.splice(i, 1);
			score++;
			if(level%15==0){
				prim_speed += 2;
				prim_gap -= 1; 
				for(var j = pipes.length-1; j >= 0; j--){
					pipes[j].levelup();
				}
			}
		}
	}
}

