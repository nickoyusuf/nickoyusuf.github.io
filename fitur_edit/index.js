const kotak = document.querySelector('.square');
kotak.onclick =() => {
	$('#warna').show();
  createRect(canvas);
};

const circle = document.querySelector('.circle');
circle.onclick =() => {
	$('#warna').show();
  createCirc(canvas);
};

const text = document.querySelector('.text');
text.onclick =() => {
	$('#warna').show();
  $('.font').show();
  AddText(canvas);
};

const upload = document.querySelector('.input');
const inputImg = document.querySelector('.inputImg');
upload.onclick =() => {
	inputImg.click();
};

const canvas = new fabric.Canvas('canvas',{
    // width: fabric.util.parseUnit('21cm'),
    // height: fabric.util.parseUnit('29.7cm'),

    // isDrawingMode: true,
    // isDragging: false,
    // isMouseDown: false,
});

canvas.renderAll();

const createRect = (canvas) => {
  const rect = new fabric.Rect({
      width: 100,
      height: 100,
      fill: '#752BFF',
  })
  canvas.add(rect)
  canvas.setActiveObject(rect);
}

const createCirc = (canvas) => {
  const circle = new fabric.Circle({
      radius: 50,
      fill: '#752BFF',
  })
  canvas.add(circle);
  canvas.setActiveObject(circle);
};



const AddText = (canvas) => {
  var fonts = ["Pacifico", "VT323", "Quicksand", "Inconsolata"];
  // var text = new fabric.Textbox("klik untuk merubah text", {
  //   width: 100,
  //   fontSize: 32,
  //   fill: '#752BFF',
  //   fontFamily: 'Arial'
  // });
  var textbox = new fabric.Textbox("klik untuk merubah text", {
    left: 50,
    top: 50,
    width: 150,
    fill: '#752BFF',
    fontSize: 20
  });

  canvas.add(textbox);
  canvas.setActiveObject(textbox);

  canvas.add(textbox).setActiveObject(textbox);
fonts.unshift('Times New Roman');
// Populate the fontFamily select
var select = document.getElementById("font-family");
fonts.forEach(function(font) {
  var option = document.createElement('option');
  option.innerHTML = font;
  option.value = font;
  select.appendChild(option);
});

// Apply selected font on change
document.getElementById('font-family').onchange = function() {
  if (this.value !== 'Times New Roman') {
    loadAndUse(this.value);
  } else {
    canvas.getActiveObject().set("fontFamily", this.value);
    canvas.requestRenderAll();
  }
};

function loadAndUse(font) {
  var myfont = new FontFaceObserver(font)
  myfont.load()
    .then(function() {
      // when font is loaded, use it.
      canvas.getActiveObject().set("fontFamily", font);
      canvas.requestRenderAll();
    }).catch(function(e) {
      console.log(e)
      alert('font loading failed ' + font);
    });
  }
};

document
.getElementById('color')
  .addEventListener('change', e => {
    const o = canvas.getActiveObject();
    if (o) {
      o.set({ fill: e.target.value });
      canvas.requestRenderAll();
    }
  });
// const draw = document.getElementsByClassName('.pencil');
// draw.onclick = () => {
//   canvas.isDrawingMode;
// }

// canvas.on('mouse:down', function(opt) {
//   this.isMouseDown = true;
//   var evt = opt.e;
//   if (evt.altKey === true) {
//     this.isDragging = true;
//     this.selection = false;
//     this.lastPosX = evt.clientX;
//     this.lastPosY = evt.clientY;
//   }
// });

// const edgePadding = 80; 
// const panSpeed = 5;
// const expandCanvasEdge = (x, y) => {
//   let pan = {
//     x: 0,
//     y: 0,
//   };
//   const width = canvas.getWidth(),
//         height = canvas.getHeight();

//   if (x <= edgePadding) {
//     //left
//     const speedRatio = 1 - Math.max(0, x) / edgePadding;
//     pan.x = panSpeed * speedRatio;
//   } else if (x >= width - edgePadding) {
//     //right
//     const speedRatio =
//           1 - (width - Math.min(width, x)) / edgePadding;
//     pan.x = -panSpeed * speedRatio;
//   }

//   if (y <= edgePadding) {
//     //top
//     const speedRatio = 1 - Math.max(0, y) / edgePadding;
//     pan.y = panSpeed * speedRatio;
//   } else if (y >= height - edgePadding) {
//     //bottom
//     const speedRatio =
//           1 - (height - Math.min(height, y)) / edgePadding;
//     pan.y = -panSpeed * speedRatio;
//   }

//   if (pan.x || pan.y) {
//     canvas.relativePan(new fabric.Point(pan.x, pan.y));
//   }
// }

// canvas.on('mouse:move', function(opt) {
  
//   if (this.isMouseDown && this.isDrawingMode) {
//     let {x, y} = canvas.getPointer(opt.e, true);
//     expandCanvasEdge(x, y);
//   }
  
//   if (!this.isDrawingMode && this.isDragging) {
//     //panning
//     var e = opt.e;
//     var vpt = this.viewportTransform;
//     vpt[4] += e.clientX - this.lastPosX;
//     vpt[5] += e.clientY - this.lastPosY;
//     this.requestRenderAll();
//     this.lastPosX = e.clientX;
//     this.lastPosY = e.clientY;
//   }
// });



// canvas.on('mouse:up', function(opt) {
//   this.isMouseDown = false;
//   this.setViewportTransform(this.viewportTransform);
//   this.isDragging = false;
//   this.selection = true;
// });

  var deleteIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";

  var cloneIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 55.699 55.699' width='100px' height='100px' xml:space='preserve'%3E%3Cpath style='fill:%23010002;' d='M51.51,18.001c-0.006-0.085-0.022-0.167-0.05-0.248c-0.012-0.034-0.02-0.067-0.035-0.1 c-0.049-0.106-0.109-0.206-0.194-0.291v-0.001l0,0c0,0-0.001-0.001-0.001-0.002L34.161,0.293c-0.086-0.087-0.188-0.148-0.295-0.197 c-0.027-0.013-0.057-0.02-0.086-0.03c-0.086-0.029-0.174-0.048-0.265-0.053C33.494,0.011,33.475,0,33.453,0H22.177 c-3.678,0-6.669,2.992-6.669,6.67v1.674h-4.663c-3.678,0-6.67,2.992-6.67,6.67V49.03c0,3.678,2.992,6.669,6.67,6.669h22.677 c3.677,0,6.669-2.991,6.669-6.669v-1.675h4.664c3.678,0,6.669-2.991,6.669-6.669V18.069C51.524,18.045,51.512,18.025,51.51,18.001z M34.454,3.414l13.655,13.655h-8.985c-2.575,0-4.67-2.095-4.67-4.67V3.414z M38.191,49.029c0,2.574-2.095,4.669-4.669,4.669H10.845 c-2.575,0-4.67-2.095-4.67-4.669V15.014c0-2.575,2.095-4.67,4.67-4.67h5.663h4.614v10.399c0,3.678,2.991,6.669,6.668,6.669h10.4 v18.942L38.191,49.029L38.191,49.029z M36.777,25.412h-8.986c-2.574,0-4.668-2.094-4.668-4.669v-8.985L36.777,25.412z M44.855,45.355h-4.664V26.412c0-0.023-0.012-0.044-0.014-0.067c-0.006-0.085-0.021-0.167-0.049-0.249 c-0.012-0.033-0.021-0.066-0.036-0.1c-0.048-0.105-0.109-0.205-0.194-0.29l0,0l0,0c0-0.001-0.001-0.002-0.001-0.002L22.829,8.637 c-0.087-0.086-0.188-0.147-0.295-0.196c-0.029-0.013-0.058-0.021-0.088-0.031c-0.086-0.03-0.172-0.048-0.263-0.053 c-0.021-0.002-0.04-0.013-0.062-0.013h-4.614V6.67c0-2.575,2.095-4.67,4.669-4.67h10.277v10.4c0,3.678,2.992,6.67,6.67,6.67h10.399 v21.616C49.524,43.26,47.429,45.355,44.855,45.355z'/%3E%3C/svg%3E%0A"

  var deleteImg = document.createElement('img');
  deleteImg.src = deleteIcon;

  var cloneImg = document.createElement('img');
  cloneImg.src = cloneIcon;

fabric.Object.prototype.transparentCorners = false;
  fabric.Object.prototype.cornerColor = 'blue';
  fabric.Object.prototype.cornerStyle = 'circle';

  function renderIcon(icon) {
    return function renderIcon(ctx, left, top, styleOverride, fabricObject) {
      var size = this.cornerSize;
      ctx.save();
      ctx.translate(left, top);
      ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
      ctx.drawImage(icon, -size/2, -size/2, size, size);
      ctx.restore();
    }
  }

  fabric.Object.prototype.controls.deleteControl = new fabric.Control({
    x: 0.5,
    y: -0.5,
    offsetY: -16,
    offsetX: 16,
    cursorStyle: 'pointer',
    mouseUpHandler: deleteObject,
    render: renderIcon(deleteImg),
    cornerSize: 24
  });

  fabric.Object.prototype.controls.clone = new fabric.Control({
    x: -0.5,
    y: -0.5,
    offsetY: -16,
    offsetX: -16,
    cursorStyle: 'pointer',
    mouseUpHandler: cloneObject,
    render: renderIcon(cloneImg),
    cornerSize: 24
  });

  function deleteObject(eventData, transform) {
                var target = transform.target;
		var canvas = target.canvas;
		    canvas.remove(target);
        canvas.requestRenderAll();
	}

  function cloneObject(eventData, transform) {
    var target = transform.target;
    var canvas = target.canvas;
    target.clone(function(cloned) {
      cloned.left += 10;
      cloned.top += 10;
      canvas.add(cloned);
    });
  }



const imgAdded = (e) => {
    // console.log(e)
    const inputElem = document.getElementById('myImg')
    const file = inputElem.files[0];
    reader.readAsDataURL(file);
    
}

const reader = new FileReader()
const inputFile = document.getElementById('myImg');

inputFile.addEventListener('change', imgAdded) 

reader.addEventListener("load", () => {
    fabric.Image.fromURL(reader.result, img => {
        canvas.add(img)
        canvas.requestRenderAll()
    })
  });

  const widthInput = document.getElementById("lebar");
  const heightInput = document.getElementById("tinggi");
  const aspectToggle = document.getElementById("rasio");
  let activeImage, originalWidthToHeightRatio;

  
  inputFile.addEventListener("change", (e) => {
    const reader = new FileReader();
  
    reader.addEventListener("load", () => {
      openImage(reader.result);
    });
  
    reader.readAsDataURL(e.target.files[0]);
  });
  
  widthInput.addEventListener("change", () => {
    if (!activeImage) return;
  
    const heightValue = aspectToggle.checked
      ? widthInput.value / originalWidthToHeightRatio
      : heightInput.value;
  
    resize(widthInput.value, heightValue);
  });
  
  heightInput.addEventListener("change", () => {
    if (!activeImage) return;
  
    const widthValue = aspectToggle.checked
      ? heightInput.value * originalWidthToHeightRatio
      : widthInput.value;
  
    resize(widthValue, heightInput.value);
  });
  
  function openImage(imageSrc) {
    activeImage = new Image();
  
    activeImage.addEventListener("load", () => {
      originalWidthToHeightRatio = activeImage.width / activeImage.height;
  
      resize(activeImage.width, activeImage.height);
    });
  
    activeImage.src = imageSrc;
  }
  
  function resize(width, height) {
    imgAdded.width = Math.floor(width);
    imgAdded.height = Math.floor(height);
    widthInput.value = Math.floor(width);
    heightInput.value = Math.floor(height);
  
    ctx.drawImage(activeImage, 0, 0, Math.floor(width), Math.floor(height));
  }


const ctx = canvas.getContext('2d');
const download = document.getElementById('download');
download.onclick =() => {
    if (confirm('apakah kamu ingin simpan?')) {
      const link = document.createElement('a');
      link.download = 'sablonstudio.png';
      link.href = canvas.toDataURL();
      link.click();
      link.delete;
    };
};
