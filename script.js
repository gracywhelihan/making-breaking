// let bowtie = document.getElementById("bowtie")


// bowtie.onmousedown = function(event) {
//     // (1) prepare to moving: make absolute and on top by z-index
//     bowtie.style.position = 'absolute';
//     bowtie.style.zIndex = 1000;
  
//     // move it out of any current parents directly into body
//     // to make it positioned relative to the body
//     document.body.append(bowtie);
  
//     // centers the bowtie at (pageX, pageY) coordinates
//     function moveAt(pageX, pageY) {
//       bowtie.style.left = pageX - bowtie.offsetWidth / 2 + 'px';
//       bowtie.style.top = pageY - bowtie.offsetHeight / 2 + 'px';
//     }
  
//     // move our absolutely positioned bowtie under the pointer
//     moveAt(event.pageX, event.pageY);
  
//     function onMouseMove(event) {
//       moveAt(event.pageX, event.pageY);
//     }
  
//     // (2) move the bowtie on mousemove
//     document.addEventListener('mousemove', onMouseMove);
  
//     // (3) drop the bowtie, remove unneeded handlers
//     bowtie.onmouseup = function() {
//       document.removeEventListener('mousemove', onMouseMove);
//       bowtie.onmouseup = null;
//     };
  
//   };

function myMove() {
    let id = null;
    const elem = document.getElementById("bowtie");   
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + "px"; 
        elem.style.left = pos + "px"; 
      }
    }
  }