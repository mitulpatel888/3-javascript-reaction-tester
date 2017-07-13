var start = new Date().getTime();
			function getRandomColor() {
				  var letters = '0123456789ABCDEF';
				  var color = '#';
				  for (var i = 0; i < 6; i++) {
					color += letters[Math.floor(Math.random() * 16)];
				  }
				  return color;
				}
			function makeShapeAppear(){
				var top = Math.random() * 200; /*generate random numbers*/
				var left = Math.random() * 200; /*generate random numbers*/
				var width = (Math.random() * 400) +100; /*generate random numbers*/
				
				document.getElementById('shape').style.top = top+"px";/*Use top variable to define top pixels*/
				document.getElementById('shape').style.left = left+"px";/*Use top variable to define left pixels*/
				document.getElementById('shape').style.width = width+"px";/*Use top variable to define left pixels*/
				document.getElementById('shape').style.height = width+"px";/*Use top variable to define left pixels*/
				document.getElementById('shape').style.backgroundColor = getRandomColor();
				document.getElementById("shape").style.display = "block";
				if (Math.random() > 0.5 ){
					document.getElementById('shape').style.borderRadius = "50%";
				}else
				{
					document.getElementById('shape').style.borderRadius = "0";
				}
				start = new Date().getTime();
			}
			function reAppear(){
				setTimeout(makeShapeAppear,Math.random() * 2000);
			}
			reAppear();
			document.getElementById("shape").onclick=function(){
			document.getElementById("shape").style.display = "none";
			var end = new Date().getTime();
			var timeTaken = (end- start) /1000; /*divided by 1000 to get in seconds*/
			document.getElementById('timeTaken').innerHTML = timeTaken+"s";
				
			reAppear();
			}