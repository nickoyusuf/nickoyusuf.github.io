let color = document.querySelector('#svg');
let colorinput = document.querySelector('#custom-color')
colorinput.addEventListener('input',()=> {
	color.style.fill = colorinput.value;
});

let back = document.getElementById('back');
let front = document.getElementById('front');
back.addEventListener('click',()=> {
	document.getElementById("kaos").src = "back.png";
	back.style.display = 'none';
	front.style = 'display';
});
front.addEventListener('click',()=> {
	document.getElementById("kaos").src = "front.png";
	front.style.display = 'none';
	back.style = 'display';
});


document.getElementById("hitam").onclick = function(){
	document.getElementById("svg").style.fill = "#333030";
}
document.getElementById("putih").onclick = function(){
	document.getElementById("svg").style.fill = "white";
}
document.getElementById("abumisty").onclick = function(){
	document.getElementById("svg").style.fill = "#9b9b9b";
}
document.getElementById("abutua").onclick = function(){
	document.getElementById("svg").style.fill = "#545454";
}
// document.getElementById("abumuda").onclick = function(){
// 	document.getElementById("svg").style.fill = " #b9b9b9";
// }
document.getElementById("merah").onclick = function(){
	document.getElementById("svg").style.fill = "red";
}
document.getElementById("maroon").onclick = function(){
	document.getElementById("svg").style.fill = "#840106";
}
document.getElementById("teracota").onclick = function(){
	document.getElementById("svg").style.fill = "#af3b14";
}
document.getElementById("pink").onclick = function(){
	document.getElementById("svg").style.fill = "#fcd5e7";
}
document.getElementById("fanta").onclick = function(){
	document.getElementById("svg").style.fill = "#cc1f71";
}
document.getElementById("navy").onclick = function(){
	document.getElementById("svg").style.fill = "#21325e";
}
document.getElementById("biruturkis").onclick = function(){
	document.getElementById("svg").style.fill = "#189ce6";
}
document.getElementById("birubenhur").onclick = function(){
	document.getElementById("svg").style.fill = "#082988";
}
document.getElementById("birumuda").onclick = function(){
	document.getElementById("svg").style.fill = "#6cc9f4";
}
document.getElementById("hijauarmy").onclick = function(){
	document.getElementById("svg").style.fill = "#003a07";
}
document.getElementById("hijaubotol").onclick = function(){
	document.getElementById("svg").style.fill = "#0e6b50";
}
document.getElementById("hijaustabilo").onclick = function(){
	document.getElementById("svg").style.fill = "#9cf007";
}
document.getElementById("hijautosca").onclick = function(){
	document.getElementById("svg").style.fill = "#157291";
}
document.getElementById("hijaufuji").onclick = function(){
	document.getElementById("svg").style.fill = "#0b9c41";
}
document.getElementById("mustard").onclick = function(){
	document.getElementById("svg").style.fill = "#f1ab17";
}
document.getElementById("kuningkenari").onclick = function(){
	document.getElementById("svg").style.fill = "#fee026";
}
document.getElementById("oren").onclick = function(){
	document.getElementById("svg").style.fill = "#f35b10";
}
document.getElementById("ungu").onclick = function(){
	document.getElementById("svg").style.fill = "#5f3269";
}
document.getElementById("cream").onclick = function(){
	document.getElementById("svg").style.fill = "#d2bf94";
}
document.getElementById("coklat").onclick = function(){
	document.getElementById("svg").style.fill = "#472114";
}
document.getElementById("bghitam").onclick = function(){
    document.querySelector(".contenerkaos").style.backgroundImage = "linear-gradient(to bottom right, white, black)";
 }
document.getElementById("bgputih").onclick = function(){
	document.querySelector(".contenerkaos").style.backgroundImage = "linear-gradient(to bottom right, white, white)";
}
document.getElementById("bgbiru").onclick = function(){
	document.querySelector(".contenerkaos").style.backgroundImage = "linear-gradient(to bottom right, white, blue)";
}
document.getElementById("bgmerah").onclick = function(){
	document.querySelector(".contenerkaos").style.backgroundImage = "linear-gradient(to bottom right, white, red)";
}
document.getElementById("bghijau").onclick = function(){
	document.querySelector(".contenerkaos").style.backgroundImage = "linear-gradient(to bottom right, white, green)";
}
document.getElementById("bgtf").onclick = function(){
	document.querySelector(".contenerkaos").style.background = "none";
}

const dragArea = document.querySelector('.gambar');
const dragArea2 = document.querySelector('.gambar2');
const dragArea3 = document.querySelector('.gambar3');
const dragArea4 = document.querySelector('.gambar4');
const dragArea5 = document.querySelector('.gambar5');

const load = document.getElementById('load');
const load2 = document.getElementById('load2');
const load3 = document.getElementById('load3');
const load4 = document.getElementById('load4');
const load5 = document.getElementById('load5');

let button = document.querySelector('.button');
let button2 = document.querySelector('.button2');
let button3 = document.querySelector('.button3');
let button4 = document.querySelector('.button4');
let button5 = document.querySelector('.button5');
let buttonbg = document.querySelector('.buttonbg');

let input = document.getElementById('file-input');
let input2 = document.getElementById('file-input2');
let input3 = document.getElementById('file-input3');
let input4 = document.getElementById('file-input4');
let input5 = document.getElementById('file-input5');
let inputbg = document.getElementById('file-inputbg');

let file;

const latar = document.getElementById('gambarbg');

let templet = document.getElementById('templet');

let wraper_editor = document.querySelector('.wraper_editor');
wraper_editor.onclick =() => {
	draggableElem5.style.border = 'none';
	draggableElem4.style.border = 'none';
	draggableElem3.style.border = 'none';
	draggableElem2.style.border = 'none';
	draggableElem.style.border = 'none';
}


let download = document.getElementById('download');
download.onclick =() => {
	draggableElem5.style.border = 'none';
	draggableElem4.style.border = 'none';
	draggableElem3.style.border = 'none';
	draggableElem2.style.border = 'none';
	draggableElem.style.border = 'none';
}

let order = document.getElementById('order');
order.onclick =() => {
	draggableElem5.style.border = 'none';
	draggableElem4.style.border = 'none';
	draggableElem3.style.border = 'none';
	draggableElem2.style.border = 'none';
	draggableElem.style.border = 'none';
}



buttonbg.onclick =() => {
	inputbg.click();
}

button.onclick =() => {
	input.click();    
}
button2.onclick =() => {
	input2.click();
	button2.style.display = 'none';
}
button3.onclick =() => {
	input3.click();
	button3.style.display = 'none';
}
button4.onclick =() => {
	input4.click();
	button4.style.display = 'none';
}
button5.onclick =() => {
	input5.click();
	button5.style.display = 'none';
	//$('.loader').show();
    templet.style.display = 'none';
    $('#order').show();
	$('#download').show();
   document.getElementById("download").onclick = function(){
        //body.style.background = '#2576f7';
        // $('.navbar').hide();
    	//  $('.contener_wraper').hide();
    	$('#save').show();
    	$('#kembali2').show();
        $('#kembali').hide();
        draggableElem5.style.border = 'none';
	    draggableElem4.style.border = 'none';
	    draggableElem3.style.border = 'none';
	    draggableElem2.style.border = 'none';
	    draggableElem.style.border = 'none';
    	//window.print();
 	//alert("anda belum mendaftar atau login silahkan untuk daftar atau login dahulu!!");
	 alert("download berhasil.. silahkan cek galeri atau file manager");
 }
}


//document.getElementById("save").onclick = function(){
        
 	//alert("anda belum mendaftar atau login silahkan untuk daftar atau login dahulu!!");
 //}



input.addEventListener('change',function() {
					file = this.files[0];
					load.classList.add('load');
					diplayFiles();
})
input2.addEventListener('change',function() {
					file = this.files[0];
					load2.classList.add('load');
					diplayFiles2();
})
input3.addEventListener('change',function() {
					file = this.files[0];
					load3.classList.add('load');
					diplayFiles3();
})
input4.addEventListener('change',function() {
					file = this.files[0];
					load4.classList.add('load');
					diplayFiles4();
})
input5.addEventListener('change',function() {
					file = this.files[0];
					load5.classList.add('load');
					diplayFiles5();
					//$('.loader').hide();
})


inputbg.addEventListener('change',function() {
					file = this.files[0];
					diplayFilesbg();
})

function diplayFiles() {
					let fileType = file.type;
					//console.log(fileType);

					let validExtension = ['image/jpg','image/png','image/jpeg'];
					if (validExtension.includes(fileType)) {
									  let fileReader = new FileReader();

									  fileReader.onload = () => {
										let fileURL =fileReader.result;
										//console.log(fileURL);
										let imgTag = `<img src= ${fileURL} alt="file hilang">`;
										dragArea.innerHTML = imgTag;
									  };


									  fileReader.readAsDataURL(file);


					} else {
									alert("yang anda masukan bukan gambar");
									
								  }
								//console.log('the file is dropped in drag area');
  }


  function diplayFiles2() {
					let fileType = file.type;
					//console.log(fileType);

					let validExtension = ['image/jpg','image/png','image/jpeg'];
					if (validExtension.includes(fileType)) {
									  let fileReader = new FileReader();

									  fileReader.onload = () => {
										let fileURL =fileReader.result;
										//console.log(fileURL);
										let imgTag = `<img src= ${fileURL} alt="file hilang">`;
										dragArea2.innerHTML = imgTag;
									  };


									  fileReader.readAsDataURL(file);


					} else {
									alert("yang anda masukan bukan gambar");
									
								  }
								//console.log('the file is dropped in drag area');
  }

  function diplayFiles3() {
					let fileType = file.type;
					//console.log(fileType);

					let validExtension = ['image/jpg','image/png','image/jpeg'];
					if (validExtension.includes(fileType)) {
									  let fileReader = new FileReader();

									  fileReader.onload = () => {
										let fileURL =fileReader.result;
										//console.log(fileURL);
										let imgTag = `<img src= ${fileURL} alt="file hilang">`;
										dragArea3.innerHTML = imgTag;
									  };


									  fileReader.readAsDataURL(file);


					} else {
									alert("yang anda masukan bukan gambar");
									
								  }
								//console.log('the file is dropped in drag area');
  }

  function diplayFiles4() {
					let fileType = file.type;
					//console.log(fileType);

					let validExtension = ['image/jpg','image/png','image/jpeg'];
					if (validExtension.includes(fileType)) {
									  let fileReader = new FileReader();

									  fileReader.onload = () => {
										let fileURL =fileReader.result;
										//console.log(fileURL);
										let imgTag = `<img src= ${fileURL} alt="file hilang">`;
										dragArea4.innerHTML = imgTag;
									  };


									  fileReader.readAsDataURL(file);


					} else {
									alert("yang anda masukan bukan gambar");
									
								  }
								//console.log('the file is dropped in drag area');
  }

  function diplayFiles5() {
					let fileType = file.type;
					//console.log(fileType);

					let validExtension = ['image/jpg','image/png','image/jpeg'];
					if (validExtension.includes(fileType)) {
									  let fileReader = new FileReader();

									  fileReader.onload = () => {
										let fileURL =fileReader.result;
										//console.log(fileURL);
										let imgTag = `<img src= ${fileURL} alt="file hilang">`;
										dragArea5.innerHTML = imgTag;
									  };


									  fileReader.readAsDataURL(file);


					} else {
									alert("yang anda masukan bukan gambar");
									
								  }
								//console.log('the file is dropped in drag area');
  }


function diplayFilesbg() {
					let fileType = file.type;
					//console.log(fileType);

					let validExtension = ['image/jpg','image/png','image/jpeg'];
					if (validExtension.includes(fileType)) {
									  let fileReader = new FileReader();

									  fileReader.onload = () => {
										let fileURL =fileReader.result;
										//console.log(fileURL);
										let imgTag = `<img src= ${fileURL} alt="file hilang">`;
									 latar.innerHTML = imgTag;
									  };


									  fileReader.readAsDataURL(file);


					} else {
									alert("yang anda masukan bukan gambar");
									
								  }
								//console.log('the file is dropped in drag area');
  }



let draggableElem5 = document.getElementById("load5");
let draggableElem4 = document.getElementById("load4");
let draggableElem3 = document.getElementById("load3");
let draggableElem2 = document.getElementById("load2");
let draggableElem = document.getElementById("load");
let initialX = 0,
    initialY = 0;
let moveElement = false;

//Events Object
let events = {
  mouse: {
		    down: "mousedown",
		    move: "mousemove",
		    up: "mouseup",
  		 },
  touch: {
		    down: "touchstart",
		    move: "touchmove",
		    up: "touchend",
		  },
};
let deviceType = "";

//Detech touch device
const isTouchDevice = () => {
  try {
		    //We try to create TouchEvent (it would fail for desktops and throw error)
		    document.createEvent("TouchEvent");
		    deviceType = "touch";
		    return true;
		  } catch (e) {
		    deviceType = "mouse";
		    return false;
		  }
      };
isTouchDevice();

//Start (mouse down / touch start)
draggableElem5.addEventListener(events[deviceType].down, (e) => {
  e.preventDefault();
  //initial x and y points
  initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
  initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
  draggableElem4.style.border = 'none';
  conukuran4.style.display = 'none';
  conputar4.style.display = 'none';
  
  draggableElem3.style.border = 'none';
  conukuran3.style.display = 'none';
  conputar3.style.display = 'none';
  
  draggableElem2.style.border = 'none';
  conukuran2.style.display = 'none';
  conputar2.style.display = 'none';
  
  draggableElem.style.border = 'none';
  conukuran.style.display = 'none';
  conputar.style.display = 'none';
  
  draggableElem5.style.border = 'dashed 1px yellow';
  conukuran5.style = 'display';
  conputar5.style = 'display';
  //Start movement
  
  moveElement = true;
});

draggableElem4.addEventListener(events[deviceType].down, (e) => {
  e.preventDefault();
  //initial x and y points
  initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
  initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
  
  draggableElem5.style.border = 'none';
  conukuran5.style.display = 'none';
  conputar5.style.display = 'none';
  
  draggableElem3.style.border = 'none';
  conukuran3.style.display = 'none';
  conputar3.style.display = 'none';
  
  draggableElem2.style.border = 'none';
  conukuran2.style.display = 'none';
  conputar2.style.display = 'none';
  
  draggableElem.style.border = 'none';
  conukuran.style.display = 'none';
  conputar.style.display = 'none';
  
  draggableElem4.style.border = 'dashed 1px yellow';
  conukuran4.style = 'display';
  conputar4.style = 'display';
  //Start movement
  
  moveElement = true;
});

draggableElem3.addEventListener(events[deviceType].down, (e) => {
  e.preventDefault();
  //initial x and y points
  initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
  initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
  draggableElem5.style.border = 'none';
  conukuran5.style.display = 'none';
  conputar5.style.display = 'none';
  
  draggableElem4.style.border = 'none';
  conukuran4.style.display = 'none';
  conputar4.style.display = 'none';
  
  draggableElem2.style.border = 'none';
  conukuran2.style.display = 'none';
  conputar2.style.display = 'none';
  
  draggableElem.style.border = 'none';
  conukuran.style.display = 'none';
  conputar.style.display = 'none';
  
  draggableElem3.style.border = 'dashed 1px yellow';
  conukuran3.style = 'display';
  conputar3.style = 'display';
  //Start movement
  moveElement = true;
});

draggableElem2.addEventListener(events[deviceType].down, (e) => {
  e.preventDefault();
  //initial x and y points
  initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
  initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
  draggableElem5.style.border = 'none';
  conukuran5.style.display = 'none';
  conputar5.style.display = 'none';
  
  draggableElem4.style.border = 'none';
  conukuran4.style.display = 'none';
  conputar4.style.display = 'none';
  
  draggableElem3.style.border = 'none';
  conukuran3.style.display = 'none';
  conputar3.style.display = 'none';
  
  draggableElem.style.border = 'none';
  conukuran.style.display = 'none';
  conputar.style.display = 'none';
  
  draggableElem2.style.border = 'dashed 1px yellow';
  conukuran2.style = 'display';
  conputar2.style = 'display';
  //Start movement
  moveElement = true;
});

draggableElem.addEventListener(events[deviceType].down, (e) => {
  e.preventDefault();
  //initial x and y points
  initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
  initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
  draggableElem5.style.border = 'none';
  conukuran5.style.display = 'none';
  conputar5.style.display = 'none';
  
  draggableElem4.style.border = 'none';
  conukuran4.style.display = 'none';
  conputar4.style.display = 'none';
  
  draggableElem3.style.border = 'none';
  conukuran3.style.display = 'none';
  conputar3.style.display = 'none';
  
  draggableElem2.style.border = 'none';
  conukuran2.style.display = 'none';
  conputar2.style.display = 'none';
  
  draggableElem.style.border = 'dashed 1px yellow';
  conukuran.style = 'display';
  conputar.style = 'display';
  //Start movement
  moveElement = true;
});

//Move
draggableElem5.addEventListener(events[deviceType].move, (e) => {
  //if movement == true then set top and left to new X andY while removing any offset
  if (moveElement) {
    e.preventDefault();
    let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
    draggableElem5.style.top =
      draggableElem5.offsetTop - (initialY - newY) + "px";
    draggableElem5.style.left =
      draggableElem5.offsetLeft - (initialX - newX) + "px";
    initialX = newX;
    initialY = newY;
  }
});

draggableElem4.addEventListener(events[deviceType].move, (e) => {
  //if movement == true then set top and left to new X andY while removing any offset
  if (moveElement) {
    e.preventDefault();
    let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
    draggableElem4.style.top =
      draggableElem4.offsetTop - (initialY - newY) + "px";
    draggableElem4.style.left =
      draggableElem4.offsetLeft - (initialX - newX) + "px";
    initialX = newX;
    initialY = newY;
  }
});

draggableElem3.addEventListener(events[deviceType].move, (e) => {
  //if movement == true then set top and left to new X andY while removing any offset
  if (moveElement) {
    e.preventDefault();
    let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
    draggableElem3.style.top =
      draggableElem3.offsetTop - (initialY - newY) + "px";
    draggableElem3.style.left =
      draggableElem3.offsetLeft - (initialX - newX) + "px";
    initialX = newX;
    initialY = newY;
  }
});

draggableElem2.addEventListener(events[deviceType].move, (e) => {
  //if movement == true then set top and left to new X andY while removing any offset
  if (moveElement) {
    e.preventDefault();
    let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
    draggableElem2.style.top =
      draggableElem2.offsetTop - (initialY - newY) + "px";
    draggableElem2.style.left =
      draggableElem2.offsetLeft - (initialX - newX) + "px";
    initialX = newX;
    initialY = newY;
  }
});

draggableElem.addEventListener(events[deviceType].move, (e) => {
  //if movement == true then set top and left to new X andY while removing any offset
  if (moveElement) {
    e.preventDefault();
    let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
    draggableElem.style.top =
      draggableElem.offsetTop - (initialY - newY) + "px";
    draggableElem.style.left =
      draggableElem.offsetLeft - (initialX - newX) + "px";
    initialX = newX;
    initialY = newY;
  }
});

//mouse up / touch end
draggableElem5.addEventListener(
  events[deviceType].up,
  (stopMovement = (e) => {
    moveElement = false;
  })
);
draggableElem5.addEventListener("mouseleave", stopMovement);
draggableElem5.addEventListener(events[deviceType].up, (e) => {
  moveElement = false;
});

draggableElem4.addEventListener(
  events[deviceType].up,
  (stopMovement = (e) => {
    moveElement = false;
  })
);
draggableElem4.addEventListener("mouseleave", stopMovement);
draggableElem4.addEventListener(events[deviceType].up, (e) => {
  moveElement = false;
});

draggableElem3.addEventListener(
  events[deviceType].up,
  (stopMovement = (e) => {
    moveElement = false;
  })
);
draggableElem3.addEventListener("mouseleave", stopMovement);
draggableElem3.addEventListener(events[deviceType].up, (e) => {
  moveElement = false;
});

draggableElem2.addEventListener(
  events[deviceType].up,
  (stopMovement = (e) => {
    moveElement = false;
  })
);
draggableElem2.addEventListener("mouseleave", stopMovement);
draggableElem2.addEventListener(events[deviceType].up, (e) => {
  moveElement = false;
});

draggableElem.addEventListener(
  events[deviceType].up,
  (stopMovement = (e) => {
    moveElement = false;
  })
);
draggableElem.addEventListener("mouseleave", stopMovement);
draggableElem.addEventListener(events[deviceType].up, (e) => {
  moveElement = false;
});

const ukuran = document.getElementById('input-size');
ukuran.addEventListener('input',function() {
	const y = ukuran.value;
	const z = ukuran.value;
	draggableElem.style.width = + y +'px';
	draggableElem.style.height = + z +'px';
   // console.log(ukuran.value);
});

const putar = document.getElementById('input-rotate');
putar.addEventListener('input',function() {
	const x = putar.value;
	draggableElem.style.transform = 'rotate('+ x +'deg)';
   // console.log(putar.value);
});
const conukuran = document.querySelector('#contenerukuran');
const conputar = document.querySelector('#contenerputar');

draggableElem.onclick =() => {
	
	draggableElem.style.border = 'dashed 1px yellow';
	conukuran.style = 'display';
	conputar.style = 'display';
};

const ukuran2 = document.getElementById('input-size2');
ukuran2.addEventListener('input',function() {
	const y = ukuran2.value;
	const z = ukuran2.value;
	draggableElem2.style.width = + y +'px';
	draggableElem2.style.height = + z +'px';
   // console.log(ukuran.value);
});

const putar2 = document.getElementById('input-rotate2');
putar2.addEventListener('input',function() {
	const x = putar2.value;
	draggableElem2.style.transform = 'rotate('+ x +'deg)';
   // console.log(putar.value);
});

const conukuran2 = document.querySelector('#contenerukuran2');
const conputar2 = document.querySelector('#contenerputar2');

draggableElem2.onclick =() => {
	
	draggableElem2.style.border = 'dashed 1px yellow';
	conukuran2.style = 'display';
	conputar2.style = 'display';
};

const ukuran3 = document.getElementById('input-size3');
ukuran3.addEventListener('input',function() {
	const y = ukuran3.value;
	const z = ukuran3.value;
	draggableElem3.style.width = + y +'px';
	draggableElem3.style.height = + z +'px';
   // console.log(ukuran.value);
});

const putar3 = document.getElementById('input-rotate3');
putar3.addEventListener('input',function() {
	const x = putar3.value;
	draggableElem3.style.transform = 'rotate('+ x +'deg)';
   // console.log(putar.value);
});

const conukuran3 = document.querySelector('#contenerukuran3');
const conputar3 = document.querySelector('#contenerputar3');

draggableElem3.onclick =() => {
	
	draggableElem3.style.border = 'dashed 1px yellow';
	conukuran3.style = 'display';
	conputar3.style = 'display';
};

const ukuran4 = document.getElementById('input-size4');
ukuran4.addEventListener('input',function() {
	const y = ukuran4.value;
	const z = ukuran4.value;
	draggableElem4.style.width = + y +'px';
	draggableElem4.style.height = + z +'px';
   // console.log(ukuran.value);
});

const putar4 = document.getElementById('input-rotate4');
putar4.addEventListener('input',function() {
	const x = putar4.value;
	draggableElem4.style.transform = 'rotate('+ x +'deg)';
   // console.log(putar.value);
});

const conukuran4 = document.querySelector('#contenerukuran4');
const conputar4 = document.querySelector('#contenerputar4');
draggableElem4.onclick =() => {
	
	draggableElem4.style.border = 'dashed 1px yellow';
	conukuran4.style = 'display';
	conputar4.style = 'display';
};

const ukuran5 = document.getElementById('input-size5');
ukuran5.addEventListener('input',function() {
	const y = ukuran5.value;
	const z = ukuran5.value;
	draggableElem5.style.width = + y +'px';
	draggableElem5.style.height = + z +'px';
   // console.log(ukuran.value);
});

const putar5 = document.getElementById('input-rotate5');
putar5.addEventListener('input',function() {
	const x = putar5.value;
	draggableElem5.style.transform = 'rotate('+ x +'deg)';
   // console.log(putar.value);
});

const conukuran5 = document.querySelector('#contenerukuran5');
const conputar5 = document.querySelector('#contenerputar5');

draggableElem5.onclick =() => {
	
	draggableElem5.style.border = 'dashed 1px yellow';
	conukuran5.style = 'display';
	conputar5.style = 'display';
};

$(document).ready(function(){
  $("#klk").click(function(){
  	var view = document.getElementById("#rpl");
    $("#drag-area").html(view);
	$('#rpl').show();
  });
});

var gambar = document.getElementsByClassName('contenerkaos')[0];
var save = document.getElementById('download');
// gambar.naturalWidth;
// gambar.naturalHeight;
save.addEventListener('click',()=> {
	// gambar.style.width = '190%';
    // gambar.style.height = '164%';
	// gambar.naturalWidth = '500px';
    // gambar.naturalHeight = '600px';
	gambar.clientWidth;
	gambar.clientHeight;
	domtoimage.toPng(gambar).then((data)=>{
		var link = document.createElement('a');
		//link.style.width = '200%';
		link.download = 'aplikasisablon.png';
		link.href = data;
		link.click();
	});
});
// function autoClick(){
//         $("#save").click();
//       }

//       $(document).ready(function(){
//         var element = $("#replace");

//         $("#save").on('click', function(){

//           html2canvas(element, {
//             onrendered: function(canvas) {
//               var imageData = canvas.toDataURL("image/jpg");
//               var newData = imageData.replace(/^data:image\/jpg/, "data:application/octet-stream");
//               $("#save").attr("download", "image.jpg").attr("href", newData);
//             }
//           });

//         });
//       });



      // function autoClick(){
      //   $("#order").click();
      // }

      // $(document).ready(function(){
      //   var element = $("#htmlContent");

      //   $("#order").on('click', function(){

      //     html2canvas(element, {
      //       onrendered: function(canvas) {
      //         var imageData = canvas.toDataURL("image/jpg");
      //         var newData = imageData.replace(/^data:image\/jpg/, "data:application/octet-stream");
      //         $("#order").attr("order", "image.jpg").attr("href", "https://api.whatsapp.com/send?phone=6285892022876&text=saya%20ingin%20order%20seperti%20ini%20apakah%20bisa?%0Adan%20untuk%20estimasi%20harganya%20berapa?"+encodeURIComponent(newData));
      //       }
      //     });

      //   });
      // });