var circle1;
var circle2;
var circle3;
var circle4;
var msg;

var demo_count = 0;

function turn_on(el) {
	el.classList.add("on");
}

function turn_off(el) {
	el.classList.remove("on");
}

function clear_circles() {
	[circle1, circle2, circle3, circle4].forEach( function(el) {
		turn_off(el);
	});
}

function print_msg(msg) {
	debug_msg.textContent = msg;
}

function go_forward() {
	print_msg("forward");
	clear_circles();
	turn_on(circle2);
	turn_on(circle3);
}

function go_reverse() {
	print_msg("reverse");
	clear_circles();
	turn_on(circle1);
	turn_on(circle4);
}

function go_left() {
	print_msg("left");
	clear_circles();
	turn_on(circle1);
	turn_on(circle2);
}

function go_right() {
	print_msg("right");
	clear_circles();
	turn_on(circle3);
	turn_on(circle4);
}

function demo() {
	switch (demo_count) {
		case 0:
			go_forward();
		break;
		
		case 1:
			go_reverse();
		break;
		
		case 2:
			go_left();
		break
		
		case 3:
			go_right();
		break;
	}
	
	if (demo_count >= 3) { demo_count = 0; } else { demo_count++; }
	setTimeout(demo, 5000);
}

function init() {
	circle1 = document.getElementById("circle1");
	circle2 = document.getElementById("circle2");
	circle3 = document.getElementById("circle3");
	circle4 = document.getElementById("circle4");
	msg = document.getElementById("debug_msg");
	
	demo();
}

window.onload = init;
