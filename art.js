/*create a start button that calls a JS function 

this function tracks the mouse position every 0.5 seconds or so and then creates an html element (circle) at that exact position, this function then calls 
another function that sets that circle to a the starting RGB colour of the rainbow, the next element to be set should then incrementally increase the rgb colour 
along the colours of the rainbow each time an element is created respectively

could set a right click to clear the page and remove all the created elements to start again 

could also set a limit to amount of elements and when reached the inital ones are removed */

    
    
    var mouse = false

    onmousemove = function(e){
        var mouseX = e.clientX - 10; 
        var mouseY = e.clientY - 25;

        if (mouse == true) {
            var interval = setInterval(paint(mouseX, mouseY), 1) // if the mouse is held down then every 10 ms call paint with the mouse coordinates, otherwise cancel the interval
        } else if (mouse == false) {
            clearInterval(interval)
        }
    }
 
    //check if the mouse is held down
    onmousedown = function() { 
        mouse = true
    }
    onmouseup = function() {
        mouse = false
    }
    
    document.onkeyup = function(e){
        if(e.code == "Space"){
             location.reload()
        }
    }


    // creates a p element (no text) and sets its shape as a circle, then sets its position to the mouse coordinates
    var circleNum = 1
    function paint(mouseX, mouseY) {
    
        var element = document.createElement("p");
        var elementParent = document.getElementById("canvas");
        elementParent.appendChild(element).setAttribute("id", circleNum);

        var elementNum = document.getElementById(circleNum);
        elementNum.classList.add("circle");
        elementNum.style.position = "absolute";
        elementNum.style.left = mouseX + 'px';
        elementNum.style.top = mouseY + 'px';
        
        circleNum++    
    }





