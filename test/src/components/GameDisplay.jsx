import { useEffect, useState } from "react";

function GameDisplay() {
  const [canvas, setCanvas] = useState(null);
  const [context, setContext] = useState(null);
  const [loaded, setLoaded] = useState(false);
  let keyDown = {
		w: false,
		a: false,
		s: false,
		d: false,
	}
  let location = {
		x: 300,
		y: 100,
	};
  
	useEffect(() => {
    const canvas = document.getElementById("canvas");
    const canvasContext = canvas.getContext("2d");
    setCanvas(canvas);
    setContext(canvasContext);
  }, []);
  
	useEffect(() => {
    if (context !== null) {
      setLoaded(true);
    }
  }, [context]);

  useEffect(() => {
    if (loaded) {
      document.addEventListener("keypress", keypress_event);
      document.addEventListener("keyup", keyup_event);
      window.requestAnimationFrame(draw);
    }
  }, [loaded]);

  function keypress_event(e) {
		if(e.key == "w") {
			keyDown.w = true;
		}
		if(e.key == "a") {
			keyDown.a = true;
		}
		if(e.key == "s") {
			keyDown.s = true;
		}
		if(e.key == "d") {
			keyDown.d = true;
		}
  }

  function keyup_event(e) {
		if(e.key == "w") {
			keyDown.w = false;
		}
		if(e.key == "a") {
			keyDown.a = false;
		}
		if(e.key == "s") {
			keyDown.s = false;
		}
		if(e.key == "d") {
			keyDown.d = false;
		}
  }

  function draw() {
		if(keyDown.w) {
			location.y--;
		}
		if(keyDown.a) {
			location.x--;
		}
		if(keyDown.s) {
			location.y++;
		}
		if(keyDown.d) {
			location.x++;
		}
    // context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.rect(location.x, location.y, 20, 20);
    context.fillStyle = "black";
    context.fill();
    // console.log(test);
    window.requestAnimationFrame(draw);
  }

  return <canvas width="1280" height="720" id="canvas"></canvas>;
}
export default GameDisplay;
