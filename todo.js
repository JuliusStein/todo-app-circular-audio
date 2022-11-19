// Add new task by creating a new list item and displaying it on the page.
function addTask() {
    // Read the user input.
    var input = document.querySelector("#inputField").value;

    if (input.length > 0) {
        // If the input is not empty, create a list item for the new task.
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input));

        // Display the task in the list.
        document.querySelector("#tasksList").appendChild(li);

        // Reset the input field to empty.
        document.querySelector("#inputField").value = "";

        /* Add event listener for each new list item so that when a task is clicked, it is struck through, and 
        when it is unclicked, it returns to gray. */ 
        li.addEventListener('click', function(e) {
            e.target.classList.toggle('clicked');
            renderCircle();

            // Task is completed
            if (e.target.classList.contains('clicked')) {
                // Play audio
                var audio = new Audio('sounds/615100__mlaudio__magic-game-win-success-2.wav');
                audio.play();
            }
        });
    }
    console.log("addTask() called");
    renderCircle();
}

// Add event listener on page init.
function init() {
    // Add new task not only if the "Add" button is clicked, but also if the "Enter" button is clicked. 
    let input = document.querySelector("#inputField"); 
    input.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            addTask();
        }
    });
    renderCircle();
}

// Clear all existing tasks.
function clearAll() {
    let ul = document.querySelector("#tasksList");
    ul.innerHTML = "";
    resetCircle();
}

// Clear any completed tasks by removing any items with the "clicked" class on it.
function clearCompleted() {
    let ul = document.querySelector("#tasksList");
    const items = ul.querySelectorAll("li");
    items.forEach(function(item) {
        if (item.classList.contains("clicked")) {
            item.remove();
        }
    });
    renderCircle();
}

// reset the circle to its original state
function resetCircle() {
    var c = document.querySelector("#circle");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.strokeStyle = 'rgb(175, 54, 255)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(150, 150, 120, 0, 2 * Math.PI);
    ctx.stroke();
}

// update the circle based on the list items and their completion status
function renderCircle() {
    
    var numCompleted = 0;
    let ul = document.querySelector("#tasksList");
    const items = ul.querySelectorAll("li");
    items.forEach(function(item) {
        if (item.classList.contains("clicked")) {
            numCompleted++;
        }
    });

    var percentComplete = numCompleted / items.length;
    if (isNaN(percentComplete)) {
        percentComplete = 0;
    } 
    var completeString = Math.round(percentComplete * 100) + "%";
    console.log(completeString + " completed");
   
    
    // render the thin circle
    var c = document.querySelector("#circle");
    var ctx = c.getContext("2d");
    ctx.strokeStyle = 'rgb(175, 54, 255)';
    resetCircle(); 

    // render the thick circle
    ctx.lineWidth = 15;
    ctx.beginPath();
    ctx.arc(150, 150, 120, 1.5 * Math.PI, (percentComplete * 2*Math.PI) + (1.5 * Math.PI));
    ctx.stroke();

    // render text of the completion percent
    ctx.font = "52px Poppins";
    ctx.fillStyle = 'rgb(175, 54, 255)';
    if(items.length == 0) {
        ctx.fillText("", 95, 170);
    }
    else if(percentComplete == 1) {
        ctx.fillText(completeString, 95, 170); 
    } else if (percentComplete >= .1) {
        ctx.fillText(completeString, 105, 170); 
    }else{
        ctx.fillText(completeString, 120, 170); 
    }


    //let outerDiv = document.querySelector("#completion");    
}