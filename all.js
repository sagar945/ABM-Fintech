'use strict';
function createLabel() {
    // Prompt the user for the label name
    let labelName = prompt('Enter label name');

    if (!labelName) {
        return; // Exit if the user cancels the prompt
    }

    // Create a new label element with the given name
    let label = document.createElement('div');
    label.innerHTML = labelName; // Use the entered label name
    label.id = "labelName";
    label.classList.add('movable-label', 'labelName');
    document.body.appendChild(label);

    // Make the label draggable
    let isDragging = false;
    let offset = { x: 0, y: 0 };

    label.addEventListener('mousedown', function (event) {
        isDragging = true;
        offset.x = event.offsetX;
        offset.y = event.offsetY;
    });

    document.addEventListener('mousemove', function (event) {
        if (isDragging) {
            label.style.left = (event.pageX - offset.x) + 'px';
            label.style.top = (event.pageY - offset.y) + 'px';
        }
    });

    document.addEventListener('mouseup', function (event) {
        isDragging = false;
    });

    label.addEventListener('dblclick', function () {
        let updatedLabel = prompt('Update label name:', label.innerHTML);
        if (updatedLabel !== null) {
            label.innerHTML = updatedLabel;
        }
    });

    // Send the label data to a PHP script
   
}

function saveLabelToDatabase(labelName) {
    // Send an AJAX request to a PHP script to save the label data to the database
    fetch('criteria_php.php', {
        method: 'POST',
        body: JSON.stringify({ label: labelName }), // Use the correct variable name
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.text())
    .then(data => {
        // Handle the response from the PHP script here
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


// function createLabel() {
//     // Prompt the user for the label name
//     let label = prompt('Enter label name:');

//     if (!label) {
//         return; // Exit if the user cancels the prompt
//     }

//     // Create a new label element with the given name
//     let label = document.createElement('div');
//     label.classList.add('movable-label');
//     label.innerHTML = labelName;

//     let criteria_form = document.getElementById("criteria_form");
//     criteria_form.appendChild(label);

//     // Make the label draggable
//     let isDragging = false;
//     let offset = { x: 0, y: 0 };

//     label.addEventListener('mousedown', function (event) {
//         isDragging = true;
//         offset.x = event.offsetX;
//         offset.y = event.offsetY;
//     });

//     document.addEventListener('mousemove', function (event) {
//         if (isDragging) {
//             label.style.left = (event.pageX - offset.x) + 'px';
//             label.style.top = (event.pageY - offset.y) + 'px';
//         }
//     });

//     document.addEventListener('mouseup', function (event) {
//         isDragging = false;
//     });

//     label.addEventListener('dblclick', function () {
//         let updatedLabel = prompt('Update label name:', label.innerHTML);
//         if (updatedLabel !== null) {
//             label.innerHTML = updatedLabel;
//         }
//     });

//     // Send the label data to a PHP script

// }



function createcheckLabel(label) {
    // Prompt the user for the check-label name
    // let checkLabelName = prompt('Enter check-label name:');
    let checkLabelName = label;

    if (!checkLabelName) {
        return; // Exit if the user cancels the prompt
    }

    // Create a new check-label element with the given name
    let checkLabel = document.createElement('div');
    checkLabel.classList.add('movable-label');
    checkLabel.innerHTML = checkLabelName;
    document.body.appendChild(checkLabel);

    // Make the check-label draggable
    let isDragging = false;
    let offset = { x: 0, y: 0 };

    checkLabel.addEventListener('mousedown', function (event) {
        isDragging = true;
        offset.x = event.offsetX;
        offset.y = event.offsetY;
    });

    document.addEventListener('mousemove', function (event) {
        if (isDragging) {
            checkLabel.style.left = (event.pageX - offset.x) + 'px';
            checkLabel.style.top = (event.pageY - offset.y) + 'px';
        }
    });

    document.addEventListener('mouseup', function (event) {
        isDragging = false;
    });

    checkLabel.addEventListener('dblclick', function () {
        let updatedLabel = prompt('Update check-label name:', checkLabel.innerHTML);
        if (updatedLabel !== null) {
            checkLabel.innerHTML = updatedLabel;
        }
    });

    // Send the check-label data to a PHP script
    // saveCheckLabelToDatabase(checkLabelName);
}

function saveCheckLabelToDatabase(checkLabelName) {
    // Send an AJAX request to a PHP script that inserts the check-label into the database
    fetch('criteria_php.php', {
        method: 'POST',
        body: JSON.stringify({ checkLabelName }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.text())
        .then(data => {
            // Handle the response from the PHP script here
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function createradioLabel(label) {
    // Prompt the user for the radio-label name
    // let radioLabelName = prompt('Enter radio-label name:');
    let radioLabelName = label;

    if (!radioLabelName) {
        return; // Exit if the user cancels the prompt
    }

    // Create a new radio-label element with the given name
    let radioLabel = document.createElement('div');
    radioLabel.classList.add('movable-label');
    radioLabel.innerHTML = radioLabelName;
    document.body.appendChild(radioLabel);

    // Make the radio-label draggable
    let isDragging = false;
    let offset = { x: 0, y: 0 };

    radioLabel.addEventListener('mousedown', function (event) {
        isDragging = true;
        offset.x = event.offsetX;
        offset.y = event.offsetY;
    });

    document.addEventListener('mousemove', function (event) {
        if (isDragging) {
            radioLabel.style.left = (event.pageX - offset.x) + 'px';
            radioLabel.style.top = (event.pageY - offset.y) + 'px';
        }
    });

    document.addEventListener('mouseup', function (event) {
        isDragging = false;
    });

    radioLabel.addEventListener('dblclick', function () {
        let updatedLabel = prompt('Update radio-label name:', radioLabel.innerHTML);
        if (updatedLabel !== null) {
            radioLabel.innerHTML = updatedLabel;
        }
    });

    // Send the radio-label data to a PHP script
    // saveRadioLabelToDatabase(radioLabelName);
}

function saveRadioLabelToDatabase(radioLabelName) {
    // Send an AJAX request to a PHP script that inserts the radio-label into the database
    fetch('criteria_php.php', {
        method: 'POST',
        body: JSON.stringify({ radioLabelName }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.text())
        .then(data => {
            // Handle the response from the PHP script here
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}



let textboxCounter = 0; // Initialize a counter to keep track of the number of textboxes created

function createTextbox() {
    // Increment the counter
    textboxCounter++;

    // Create a new textbox element
    let textbox = document.createElement('input');
    textbox.type = 'text';
    textbox.id = `name_text_${textboxCounter}`; // Use a unique ID based on the counter
    textbox.classList.add('movable-textbox');
    textbox.classList.add('textbox');
    document.body.appendChild(textbox);

    // Make the textbox draggable
    let isDragging = false;
    let offset = { x: 0, y: 0 };

    textbox.addEventListener('mousedown', function (event) {
        isDragging = true;
        offset.x = event.offsetX;
        offset.y = event.offsetY;
    });

    document.addEventListener('mousemove', function (event) {
        if (isDragging) {
            textbox.style.left = (event.pageX - offset.x) + 'px';
            textbox.style.top = (event.pageY - offset.y) + 'px';
        }
    });

    document.addEventListener('mouseup', function (event) {
        isDragging = false;
    });
}

// function getTextboxValues() {
//     const textboxes = document.querySelectorAll('.textbox'); // Select all textboxes with the class "textbox"
//     const textboxValues = [];


//     textboxes.forEach((textbox) => {
//         textboxValues.push(textbox.value);
//     });

//     return textboxValues;
// }

// // Example usage:
// // You can access the IDs of the textboxes created by concatenating them with the counter value


// document.querySelector('#sendDataButton').addEventListener('click', function () {
//     console.log("Button clicked"); // Check if the click event is detected

//     const textboxValues = getTextboxValues();

//     // Send the textbox values to a PHP script using fetch
//     fetch('criteria_php.php', {
//         method: 'POST',
//         body: JSON.stringify(textboxValues),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//         .then(response => {
//             console.log("Response received"); // Check if a response is received
//             return response.text();
//         })
//         .then(data => {
//             // Handle the response from the PHP script here
//             console.log(data);
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
// });

document.querySelector('#sendDataButton').addEventListener('click', function (e) {

    e.preventDefault();
    const inputValues = getValues(); // Get values from various input types
    console.log(JSON.stringify(inputValues));

    // Send the input values to a PHP script using fetch
    fetch('criteria_php.php', {
        method: 'POST',
        body: JSON.stringify(inputValues),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.text())
        .then(data => {
            // Handle the response from the PHP script here
            console.log(data);
            // alert('Data Successfully Insert');
            // location.reload(true);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

function getValues() {
    const inputValues = [];
    var mname = document.getElementById('mname').value;
    var mdisc = document.getElementById('mdisc').value;

    var selectBox = document.querySelector('.selectbox');
    if (selectBox !== null) {
        var selectedValue = selectBox.value;
        var selectBoxName = selectBox.name;
        // Rest of your code...
        inputValues.push({
            menu_name: mname,
            menu_description: mdisc,
            field_name: selectedValue, // Use the name attribute for select boxes
            field_type: 'selectBox', // Set field_type to 'selectBox'
            selected_value: selectedValue // Include selected value with a different key
        });
    } 


    // const inputValues = [];
// const mname = 'mname'; // Replace with your actual menu name
// const mdisc = 'mdisc'; // Replace with your actual menu description

const labelElements = document.querySelectorAll('.labelName');

labelElements.forEach(element => {
    // Extract data specific to each element (replace with your own logic)
    const label = element.textContent; // Get the label's text content
    inputValues.push({
        menu_name: mname, // Use the label's text content as menu_name
        menu_description: mdisc, // Provide a description or use your own logic
        field_name: label, // Set the field name as the label text
        field_type: 'textbox', // Set the field type as 'Label'
    });
});





  const goElements = document.querySelectorAll('.go');
// const inputValues = [];

goElements.forEach(element => {
    // Extract data specific to each element (replace with your own logic)
    inputValues.push({
            menu_name: mname,
            menu_description: mdisc,
            field_name: 'GO',
            field_type: 'GO', // Set the field type here for textboxes

        });
});

const valElements = document.querySelectorAll('.validate');
//const inputValues = [];

valElements.forEach(element => {
        inputValues.push({
        menu_name: mname,
        menu_description: mdisc,
        field_name: 'VALIDATE', // Set the field name here
        field_type: 'VALIDATE', // Set the field type here
    });
});


  const clrElements = document.querySelectorAll('.clear');
// const inputValues = [];

   clrElements.forEach(element => {
    // Extract data specific to each element (replace with your own logic)
    inputValues.push({
            menu_name: mname,
            menu_description: mdisc,
            field_name: 'clear',
            field_type: 'clear', // Set the field type here for textboxes

        });
});

  const submit = document.querySelectorAll('.submit');
    submit.forEach(sub => {
        inputValues.push({
            menu_name: mname,
            menu_description: mdisc,
            field_name: 'Submit',
            field_type: 'Submit', // Set the field type here for textboxes

        });
    });

    // Example: Textboxes
    // const textboxes = document.querySelectorAll('.textbox');
    // textboxes.forEach(textbox => {
    //     inputValues.push({
    //         menu_name: mname,
    //         menu_description: mdisc,
    //         field_name: labelElements.textContent,
    //         field_type: 'textbox', // Set the field type here for textboxes
    //         value: textbox.value,
    //     });
    // });

    // Example: Checkboxes
    const checkboxes = document.querySelectorAll('.checkbox');
    checkboxes.forEach(checkbox => {
        inputValues.push({
            menu_name: mname,
            menu_description: mdisc,
            field_name: checkbox.value,
            field_type: 'checkbox', // Set the field type here for checkboxes
            checked: checkbox.checked,
        });
    });

    // Example: Radios
    const radios = document.querySelectorAll('.radio');
    radios.forEach(radio => {
        if (radio.checked) {
            inputValues.push({
                menu_name: mname,
                menu_description: mdisc,
                field_name: radio.value,
                field_type: 'radio',
                checked: true,
            });
        }
    });



    // You can add more input types and their values as needed
    console.log(JSON.stringify(inputValues));
    return inputValues;
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////

// send data to the server

function createCheckbox() {
    // Create a new checkbox element
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('movable-checkbox', 'checkbox');
    var checkbox_label = prompt('Enter checkbox-label name:');
    checkbox.setAttribute("id", "checkbox_" + checkbox_label);
    checkbox.setAttribute("name", "checkbox_button");
    checkbox.setAttribute("value", checkbox_label);
    document.body.appendChild(checkbox);

    document.getElementById("checkbox_" + checkbox_label).innerText = checkbox_label;

    // Make the checkbox draggable
    let isDragging = false;
    let offset = { x: 0, y: 0 };

    checkbox.addEventListener('mousedown', function (event) {
        isDragging = true;
        offset.x = event.offsetX;
        offset.y = event.offsetY;
    });

    document.addEventListener('mousemove', function (event) {
        if (isDragging) {
            checkbox.style.left = (event.pageX - offset.x) + 'px';
            checkbox.style.top = (event.pageY - offset.y) + 'px';
        }
    });

    document.addEventListener('mouseup', function (event) {
        isDragging = false;
    });

    // Send the checkbox data to a PHP script
    createcheckLabel(checkbox_label);
    // saveCheckboxToDatabase();
}

function saveCheckboxToDatabase() {
    // Send an AJAX request to a PHP script that inserts the checkbox data into the database
    fetch('criteria_php.php', {
        method: 'POST',
        body: JSON.stringify({ elementType: 'checkbox' }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.text())
        .then(data => {
            // Handle the response from the PHP script here
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function createradio() {
    // Create a new radio element

    let radio = document.createElement('input');
    radio.type = 'radio';
    radio.classList.add('movable-label', 'radio');
    var radio_label = prompt('Enter radio-label name:');
    radio.setAttribute("id", "radio_" + radio_label);
    radio.setAttribute("name", "radio_button");
    radio.setAttribute("value", radio_label);

    document.body.appendChild(radio);
    var a = document.getElementById('radio_' + radio_label);
    document.getElementById('radio_' + radio_label).innerText = radio_label;


    // Make the radio draggable
    let isDragging = false;
    let offset = { x: 0, y: 0 };

    radio.addEventListener('mousedown', function (event) {
        isDragging = true;
        offset.x = event.offsetX;
        offset.y = event.offsetY;
    });

    document.addEventListener('mousemove', function (event) {
        if (isDragging) {
            radio.style.left = (event.pageX - offset.x) + 'px';
            radio.style.top = (event.pageY - offset.y) + 'px';
        }
    });

    document.addEventListener('mouseup', function (event) {
        isDragging = false;
    });
    createradioLabel(radio_label);
    // Send the radio data to a PHP script
    // saveRadioToDatabase();
}

function saveRadioToDatabase() {
    // Send an AJAX request to a PHP script that inserts the radio data into the database
    fetch('criteria_php.php', {
        method: 'POST',
        body: JSON.stringify({ elementType: 'radio' }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.text())
        .then(data => {
            // Handle the response from the PHP script here
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}



function createGo() {
    let goBtn = document.createElement('button');
    goBtn.innerHTML = 'Go';
    goBtn.id = "go"
    goBtn.classList.add('movable-go', 'go');
    document.body.appendChild(goBtn);

    // Make the button draggable
    let isDragging = false;
    let offset = { x: 0, y: 0 };

    goBtn.addEventListener('mousedown', function (event) {
        isDragging = true;
        offset.x = event.offsetX;
        offset.y = event.offsetY;
    });

    document.addEventListener('mousemove', function (event) {
        if (isDragging) {
            goBtn.style.left = (event.pageX - offset.x) + 'px';
            goBtn.style.top = (event.pageY - offset.y) + 'px';
        }
    });

    document.addEventListener('mouseup', function (event) {
        isDragging = false;
    });

    // Handle button click to save data to the database
    goBtn.addEventListener('click', function () {
        // Extract data that you want to save (e.g., button position)
        const buttonData = {
            left: goBtn.style.left,
            top: goBtn.style.top,
        };

        // Send an AJAX request to a PHP script to save the button data to the database
        saveButtonDataToDatabase(buttonData);
    });
}

function saveButtonDataToDatabase(data) {
    // Send an AJAX request to a PHP script that inserts the button data into the database
    fetch('criteria_php.php', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.text())
        .then(data => {
            // Handle the response from the PHP script here
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}



function createValidate() {
    let valBtn = document.createElement('button'); // Corrected variable name
    valBtn.innerHTML = 'Validate'; // Corrected button label
    valBtn.id = "validate"; // Corrected button id
    valBtn.classList.add('movable-val', 'validate');
    document.body.appendChild(valBtn);

    // Make the button draggable
    let isDragging = false;
    let offset = { x: 0, y: 0 };

    valBtn.addEventListener('mousedown', function (event) {
        isDragging = true;
        offset.x = event.offsetX;
        offset.y = event.offsetY;
    });

    document.addEventListener('mousemove', function (event) {
        if (isDragging) {
            valBtn.style.left = (event.pageX - offset.x) + 'px';
            valBtn.style.top = (event.pageY - offset.y) + 'px';
        }
    });

    document.addEventListener('mouseup', function (event) {
        isDragging = false;
    });

    // Handle button click to save data to the database
    valBtn.addEventListener('click', function () {
        // Extract data that you want to save (e.g., button position)
        const buttonData = {
            left: valBtn.style.left,
            top: valBtn.style.top,
        };

        // Send an AJAX request to a PHP script to save the button data to the database
        saveButtonDataToDatabase(buttonData);
    });
}

function saveButtonDataToDatabase(data) {
    // Send an AJAX request to a PHP script that inserts the button data into the database
    fetch('criteria_php.php', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.text())
        .then(data => {
            // Handle the response from the PHP script here
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}


function createClear() {
    let clrbtn = document.createElement('button');
    clrbtn.innerHTML = 'Clear';
    clrbtn.id = "clear";    
    clrbtn.classList.add('movable-clr', 'clear');
    document.body.appendChild(clrbtn);

    // Make the button draggable
    let isDragging = false;
    let offset = { x: 0, y: 0 };

    clrbtn.addEventListener('mousedown', function (event) {
        isDragging = true;
        offset.x = event.offsetX;
        offset.y = event.offsetY;
    });

    document.addEventListener('mousemove', function (event) {
        if (isDragging) {
            clrbtn.style.left = (event.pageX - offset.x) + 'px';
            clrbtn.style.top = (event.pageY - offset.y) + 'px';
        }
    });

    document.addEventListener('mouseup', function (event) {
        isDragging = false;
    });

    // Handle button click to save data to the database
    clrbtn.addEventListener('click', function () {
        // Extract data that you want to save (e.g., button position)
        const buttonData = {
            left: clrbtn.style.left,
            top: clrbtn.style.top,
        };

        // Send an AJAX request to a PHP script to save the button data to the database
        saveButtonDataToDatabase(buttonData);
    });
}

function saveButtonDataToDatabase(data) {
    // Send an AJAX request to a PHP script that inserts the button data into the database
    fetch('criteria_php.php', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.text())
        .then(data => {
            // Handle the response from the PHP script here
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}



function createSubmit() {
    let sbmtbtn = document.createElement('button');
    sbmtbtn.innerHTML = 'Submit';
    sbmtbtn.id = "submit";
    sbmtbtn.classList.add('movable-sbmt', 'submit');
    document.body.appendChild(sbmtbtn);

    // Make the button draggable
    let isDragging = false;
    let offset = { x: 0, y: 0 };

    sbmtbtn.addEventListener('mousedown', function (event) {
        isDragging = true;
        offset.x = event.offsetX;
        offset.y = event.offsetY;
    });

    document.addEventListener('mousemove', function (event) {
        if (isDragging) {
            sbmtbtn.style.left = (event.pageX - offset.x) + 'px';
            sbmtbtn.style.top = (event.pageY - offset.y) + 'px';
        }
    });

    document.addEventListener('mouseup', function (event) {
        isDragging = false;
    });

    // Handle button click to save data to the database
    sbmtbtn.addEventListener('click', function () {
        // Extract data that you want to save (e.g., button position)
        const buttonData = {
            left: sbmtbtn.style.left,
            top: sbmtbtn.style.top,
        };

        // Send an AJAX request to a PHP script to save the button data to the database
        saveButtonDataToDatabase(buttonData);
    });
}

function saveButtonDataToDatabase(data) {
    // Send an AJAX request to a PHP script that inserts the button data into the database
    fetch('criteria_php.php', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.text())
        .then(data => {
            // Handle the response from the PHP script here
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}







function createDropdown() {
    // Create a new dropdown element
    let dropdown = document.createElement('select');
    dropdown.classList.add('movable-dropdown', 'selectbox');
    dropdown.name = "selectBox"; // Set the name attribute

    // Create a button to add options
    let addButton = document.createElement('button');
    addButton.textContent = 'Add Option';

    // Create a container div
    let container = document.createElement('div');
    container.classList.add('split-right-container'); // Add a custom class for styling

    // Append the dropdown and button to the container
    container.appendChild(dropdown);
    container.appendChild(addButton);

    // Append the container to the "split right" div
    const splitRight = document.querySelector('.split.right'); // Change this selector to match your HTML structure
    splitRight.appendChild(container);

    // Rest of your code to make the dropdown draggable, handle change, and add options...

    // Function to add an option to the dropdown
    function addOption() {
        let option = document.createElement("option");
        option.value = prompt("Enter option value:");
        option.text = option.value;
        dropdown.appendChild(option);
    }

    // Add an event listener to the "Add Option" button
    addButton.addEventListener('click', addOption);
}







function saveDropdownDataToDatabase(data) {
    // Send an AJAX request to a PHP script that inserts the dropdown data into the database
    fetch('criteria_php.php', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.text())
        .then(data => {
            // Handle the response from the PHP script here
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}



function createHelpIcon() {
    var helpIcon = document.createElement("span");
    helpIcon.classList.add("helpIcon");
    helpIcon.textContent = "?";
    helpIcon.draggable = true;
    // Append the help icon to the container
    document.body.appendChild(helpIcon);

    var isDragging = false;
    var offset = { x: 0, y: 0 };

    helpIcon.addEventListener('mousedown', function (event) {
        isDragging = true;
        offset.x = event.offsetX;
        offset.y = event.offsetY;
    });

    document.addEventListener('mousemove', function (event) {
        if (isDragging) {
            helpIcon.style.left = (event.pageX - offset.x) + 'px';
            helpIcon.style.top = (event.pageY - offset.y) + 'px';
        }
    });

    document.addEventListener('mouseup', function (event) {
        isDragging = false;
    });

    // Handle the click event to save data to the database
    helpIcon.addEventListener('click', function () {
        // Extract data that you want to save (e.g., position)
        const helpIconData = {
            left: helpIcon.style.left,
            top: helpIcon.style.top,
        };

        // Send an AJAX request to a PHP script to save the help icon data to the database
        saveHelpIconDataToDatabase(helpIconData);
    });
}

function saveHelpIconDataToDatabase(data) {
    // Send an AJAX request to a PHP script that inserts the help icon data into the database
    fetch('criteria_php.php', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.text())
        .then(data => {
            // Handle the response from the PHP script here
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Event listener for the "Add Help Icon" button
// document.getElementById("addHelpIcon").addEventListener("click", createHelpIcon);

function search() {

    const search = document.createElement('img');
    search.classList.add("search");
    search.alt = 'Image';
    search.src = 'Screenshot 2023-06-16 002125.png';
    search.height = '20';

    // Append the image to the image container
    document.body.appendChild(search);

    var isDragging = false;
    var offset = { x: 0, y: 0 };

    search.addEventListener('mousedown', function (event) {
        isDragging = true;
        offset.x = event.offsetX;
        offset.y = event.offsetY;
    });

    document.addEventListener('mousemove', function (event) {
        if (isDragging) {
            search.style.left = (event.pageX - offset.x) + 'px';
            search.style.top = (event.pageY - offset.y) + 'px';
        }
    });

    document.addEventListener('mouseup', function (event) {
        isDragging = false;
    });
}


function gen() {

    let Mname = document.getElementById('mname').value;
    let Mdisc = document.getElementById('mdisc').value;
    if (Mname === "" || Mdisc === "") {
        alert('Menu name and Menu discription cannot be empty')
    }
    else {

        let a = document.getElementsByClassName('movable-label');
        let textContent;
        let LN = [];
        for (let i = 0; i < a.length; i++) {
            LN.push(`${a[i].textContent}_ENABLED:"enabled",
  ${a[i].textContent}_MANDATORY:"N" \n`);

            // LN=LN.replace(" ","_");

            textContent = `${Mname}LocObj ={
  Cancel_MANDATORY:"N",
  Cancel_ENABLED:"enabled",
  Validate_MANDATORY:"N",
  Validate_ENABLED:"enabled",
  Clear_ENABLED:"enabled",
  Clear_MANDATORY:"N",==
  Go_MANDATORY:"N",
  Go_ENABLED:"enabled",
  Ok_ENABLED:"enabled",
  Ok_MANDATORY:"N",
  Submit_MANDATORY:"N",
  Submit_ENABLED:"enabled",
  ${LN}
};
let ${Mname}Props = new Properties(${Mname}LocObj);`
        }
        let blob = new Blob([textContent], { type: "text/plain" });

        let link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `${Mname.toLowerCase()}props.js`;
        link.click();

        URL.revokeObjectURL(link.href);






        let textContent1;
        let MN = [];
        for (let i = 0; i < a.length; i++) {
            MN.push(`FLT00000${i + 3} : "${a[i].textContent}"`);

            textContent1 = `//GENERATED BY ABM APPLICATION.DO NOT MODIFY
    
    var jspRes={FLT000001:"Go",FLT000002:"Clear",  ${MN}};
    var jspResALT = {
    };
    
    var arrJspArr = new Array (jspRes, jspResALT);
    var jspResArr = new litMap(arrJspArr);
    
    //GENERATED BY ABM APPLICATION.DO NOT MODIFY
    var jspErr={};
    var jspErrALT = {
    };
    
    var arrJspErr = new Array (jspErr, jspErrALT);
    var jspErrResArr = new litMap(arrJspErr);
    
    
    `
        }
        let blob1 = new Blob([textContent1], { type: "text/plain" });


        let link1 = document.createElement("a");
        link1.href = URL.createObjectURL(blob1);
        link1.download = `${Mname.toLowerCase()}_crit_INFENG.js`;
        link1.click();

        URL.revokeObjectURL(link1.href);







        let textContent2;
        let XN = [];
        for (let i = 0; i < a.length; i++) {
            XN.push(` <field>
   <name>${a[i].textContent}</name>
   <datatype>String</datatype>
   <mr_field>N</mr_field>
   <group_field>Y</group_field>
 </field>
 \n`);

            textContent2 = `<?xml version="1.0" encoding="UTF-8"?>
   <group_details>
     <multi_tab_menu>N</multi_tab_menu>
     <page_list>
       <page_details>
         <type_of_page>INITIAL</type_of_page>
         <page_name>${Mname.toLowerCase()}_crit.jsp</page_name>
       </page_details>
       <page_details>
         <type_of_page>DETAILS</type_of_page>
         <page_name>${Mname.toLowerCase()}_det.jsp</page_name>
       </page_details>
       <page_details>
         <type_of_page>RESULT</type_of_page>
         <page_name>${Mname.toLowerCase()}_res.jsp</page_name>
       </page_details>
     </page_list>
     <invocation_list>
       <invocation_details>
         <action_code>GETDATA</action_code>
         <function_code>A</function_code>
         <invocation_name>${Mname.toLowerCase()}_Crit_mn001.scr</invocation_name>
       </invocation_details>
       <invocation_details>
         <action_code>SUBMIT</action_code>
         <function_code>NA</function_code>
         <invocation_name>${Mname.toLowerCase()}_submit.scr</invocation_name>
       </invocation_details>
       <invocation_details>
         <action_code>VALIDATE</action_code>
         <function_code>${Mname.toLowerCase()}Validate.scr</function_code>
         <invocation_name></invocation_name>
       </invocation_details>
     </invocation_list>
     <tab_details_list>
       <header_fields />
     </tab_details_list>
     <multirec_list />
     <field_list>
     ${XN}
     </field_list>
     <module_name />
   </group_details>
   
   `
        }
        let blob2 = new Blob([textContent2], { type: "text/plain" });


        let link2 = document.createElement("a");
        link2.href = URL.createObjectURL(blob2);
        link2.download = `${Mname.toLowerCase()}.xml`;
        link2.click();

        URL.revokeObjectURL(link2.href);










        let textContent3;

        textContent3 = `//GENERATED BY ABM APPLICATION.DO NOT MODIFY

   var jspRes={FLT000101:"Go",FLT000102:"${Mname}",FLT000103:"Ok"};
   var jspResALT = {
   };
   
   var arrJspArr = new Array (jspRes, jspResALT);
   var jspResArr = new litMap(arrJspArr);
   
   //GENERATED BY ABM APPLICATION.DO NOT MODIFY 
   var jspErr={};
   var jspErrALT = {
   };
   
   var arrJspErr = new Array (jspErr, jspErrALT);
   var jspErrResArr = new litMap(arrJspErr);
   
   
   `

        let blob3 = new Blob([textContent3], { type: "text/plain" });


        let link3 = document.createElement("a");
        link3.href = URL.createObjectURL(blob3);
        link3.download = `${Mname.toLowerCase()}_res_INFENG.js`;
        link3.click();

        URL.revokeObjectURL(link3.href);








        let textContent4 = `<%--
   //Generated by ABM APPLICATION
   //Do not edit this file directly.
   //Instead, modify the properties in the tool and regenerate.
   --%>
   
   <%@ page import="applcommon.ParseValue" %>
   <%@ page import="com.infy.bbu.jsputil.*"%>
   <%@ page import="java.util.Vector"%>
   <%@ taglib uri="taglib.tld" prefix="arjsp" %>
   <arjsp:init groupName="Customize" isEntryPoint="false" />
   
   <%
           String sProfileId = ProfilesManager.getProfileInSession(session);
           String sSubGrpName = (String)ARJspCurr.getInput("subGroupName","");
   %>
   <script>
   
           var Message = '<%=ParseValue.checkString(ARJspCurr.getInputWithGroup("RESULT_MSG",""))%>';
   
   </script>
   
   
   
   <script language="JavaScript">
   </script>
   
   <script language="JavaScript">
           printBlock();
           printFooterBlock();
   </script>
   
   
   
   
   `

        let blob4 = new Blob([textContent4], { type: "text/plain" });


        let link4 = document.createElement("a");
        link4.href = URL.createObjectURL(blob4);
        link4.download = `${Mname.toLowerCase()}_res_ginc.jsp`;
        link4.click();

        URL.revokeObjectURL(link4.href);








        let textContent5;
        let WN = [];
        for (let i = 0; i < a.length; i++) {
            WN.push(`var ${a[i].textContent} = '<%=ParseValue.checkString(ARJspCurr.getInput(sSubGrpName+".${a[i].textContent}",""))%>'; \n`);

            textContent5 = `<%--
   //Generated by ABM APPLICATION
   //Do not edit this file directly.
   //Instead, modify the properties in the tool and regenerate.
   --%>
   
   <%@ page import="applcommon.ParseValue" %>
   <%@ page import="com.infy.bbu.jsputil.*"%>
   <%@ page import="java.util.Vector"%>
   <%@ taglib uri="taglib.tld" prefix="arjsp" %>
   <arjsp:init groupName="Customize" isEntryPoint="false" />
   
   <%
     String sProfileId = ProfilesManager.getProfileInSession(session);
     String sSubGrpName = (String)ARJspCurr.getInput("subGroupName","");
     String sGrpName = ARJspCurr.getCurrentGroup();
     String pageName = (String)ARJspCurr.getInput("jspName","");
     String sPopUpExceptionWindow = (String)ARJspCurr.getInput(sGrpName+".PopUpExceptionWindow" ,"false");
     String sReferralMode = (String)ARJspCurr.getInput("refSubMode" ,"");
     ARJspCurr.setInput(sGrpName+".PopUpExceptionWindow","false");
   %>
   <script>
   
     var sPopUpExceptionWindow = '<%=ParseValue.checkString(sPopUpExceptionWindow)%>';
     var sReferralMode = '<%=ParseValue.checkString(sReferralMode)%>';
     var subGroupName = '<%=ParseValue.checkString(ARJspCurr.getInput("subGroupName",""))%>';
     ${WN}
   </script>
   <script language="javascript" src="../Renderer/javascripts/lists/<%=VRPKeys.getFile("showSearcher.js",sProfileId)%>"></script>
   <script language="javascript" src="../Renderer/javascripts/<%=VRPKeys.getFile("common_functions.js",sProfileId)%>"> </script>
   <script language="javascript" src="../Renderer/custom/javascripts/<%=VRPKeys.getFile("customize_functions.js",sProfileId)%>"> </script>
   <script language="javascript" src="../Renderer/custom/javascripts/<%=VRPKeys.getFile("cd_atf_functions.js",sProfileId)%>"> </script>
   <script language="JavaScript"> </script>
   <script language="JavaScript">
     printBlock();
     printFooterBlock();
   </script>
   
   `
        }
        let blob5 = new Blob([textContent5], { type: "text/plain" });


        let link5 = document.createElement("a");
        link5.href = URL.createObjectURL(blob5);
        link5.download = `${Mname.toLowerCase()}_crit_ginc.jsp`;
        link5.click();

        URL.revokeObjectURL(link5.href);




        let textContent6;

        textContent3 = `var objForm = document.forms[0];
   function fnValidateData() {
       return true;
   }
   
   function fnVal(obj){
                   return true;
           
   
   }
   
   
   `

        let blob6 = new Blob([textContent6], { type: "text/plain" });


        let link6 = document.createElement("a");
        link6.href = URL.createObjectURL(blob6);
        link6.download = `${Mname.toLowerCase()}_crit_link.js`;
        link6.click();

        URL.revokeObjectURL(link6.href);






        let textContent7;

        textContent7 = `var objForm = document.forms[0];
   function fnValidateData() {
       return true;
   }
   
   function fnVal(obj){
                   return true;
           
   
   }
   
   
   
   `

        let blob7 = new Blob([textContent7], { type: "text/plain" });


        let link7 = document.createElement("a");
        link7.href = URL.createObjectURL(blob7);
        link7.download = `${Mname.toLowerCase()}_det_link.js`;
        link7.click();

        URL.revokeObjectURL(link7.href);




        let textContent8;
        let EN = [];
        for (let i = 0; i < a.length; i++) {
            EN.push(`//For Text box
     write('<tr>');       
           write('<td class="textlabel" style="height: 15px"> ${a[i].textContent} <script>setMandatory("Y");</script></td>');
           write('<td class="textfield">');
           write('<input class="textfieldfont" type="text" maxlength = "50" hotKeyId="search2" name="' + subGroupName + "${a[i].textContent}" onChange="javascript:return ${a[i].textContent}_onChange(this);"  id="${a[i].textContent}">');
           write('</td>');
     write('<td class="columnwidth"> </td>');
           write('<td class="textfield"></td>');
           write('</tr>');
   //end here    \n` )
            textContent8 = `function printBlock()
   {
     writeCustomHeader("${Mname}_crit");
     with (document){
     write('<table border="0" cellspacing="0" cellpadding="0" class="ctable">');
     write('<tr>');
     write('<td>');
     write('<table border="0" cellspacing="0" cellpadding="0">');
     write('<tr>');
     write('<td class="page-heading">${Mname.toUpperCase()}</td>');
     write('</tr>');
     write('</table>');
     write('<table border="0" cellpadding="0" cellspacing="0" width="100%">');
     write('<tr>');
     write('<td valign="top">');
     write('<table width="100%" border="0" cellpadding="0" cellspacing="0" class="table">');
     write('<tr>');
     write('<td>');
     write('<table width="100%" border="0" cellpadding="0" cellspacing="0" class="innertable">');
     write('<tr>');
     write('<td>');
     write('<table width="100%" border="0" cellpadding="0" cellspacing="0" class="innertabletop1">');
     write('<tr>');
     write('<td colspan="5" align="right">');
     write('<table border="0" cellspacing="0" cellpadding="0">');
     write('<tr>');
     write('<td align="right">');
     write('<a href="javascript:showHelpFile(\'det_help.htm\');" id="sLnk0">');
     write('<img  hotKeyId="finHelp" src="../Renderer/images/'+applangcode+'/help.gif" width="35" height="17" vspace="1" border="0" />');
     write('</a>');
     write('</td>');
     write('</tr>');
     write('</table>');
     write('</td>');
     write('</tr>');
     write('<tr>');
     write('<tr>');  
           
     ${EN}
     write('<tr>');
           write('<td class="columnwidth"> </td>');
           write('<td class="textfield"></td>');
           write('<td class="columnwidth"> </td>');
           write('<td class="textfield"></td>');
           write('</tr>');
   
     write('</tr>');
     write('</table>');
     write('</td>');
     write('</tr>');
     write('</table>');
     write('</td>');
     write('</tr>');
     write('</table>');
     write('</td>');
     write('</tr>');
     write('</table>');
     write('<!-- DETAILSBLOCK-END -->');
     write('</td>');
     write('</tr>');
     write('</table>');
     } //End with()
   } //End function
   function printFooterBlock()
   {
           with (document) {
           if ((sReferralMode == 'I')||(sReferralMode == 'S')){
           write('<div align="left" class="ctable">');
           if (sReferralMode == 'S'){
           write('<input type="button" class="Button" id="Submit" value="'+jspResArr.get("FLT000193")+ '" onClick="javascript:return doRefSubmit(this);" hotKeyId="Submit" >');
           }
           writeRefFooter();
           write('<input type="button" class="Button" id="_BackRef_" value="'+jspResArr.get("FLT001721")+ '" onClick="javascript:return doSubmit(this.id);" hotKeyId="Cancel" >');
           write('</div>');
           }else{
           write('<div class="ctable">');
           write('<input id="Accept" name="Go" type="button" class="button"        onClick="javascript:return ${Mname}_crit_ONCLICK1(this,this);"" value="' + jspResArr.get("FLT004977") + '" hotKeyId="Accept">');
           write('<input id="Clear" name="Clear" type="button" class="button" value="' + jspResArr.get("FLT001439") + '"   onClick="javascript:return ${Mname}_crit_ONCLICK2(this);"">');
           writeFooter();
           write('</div>');
           }                         
           } //End with()
   }//End function
   function fnOnLoad()
   {
     var ObjForm = document.forms[0];
     pre_ONLOAD('${Mname}_crit',this);
   
     var funcName = "this."+"locfnOnLoad";
     if(eval(funcName) != undefined){
       eval(funcName).call(this);
     }
   
     fnPopulateControlValues();
   
     fnPopUpExceptionWindow(ObjForm.actionCode);
     if((typeof(WF_IN_PROGRESS) != "undefined") && (WF_IN_PROGRESS == "PEAS")){
       checkCustErrExecNextStep(Message);
     }
   
     post_ONLOAD('${Mname}_crit',this);
   
   }`
        }
        let textContent9;
        let RN = [];
        for (let i = 0; i < a.length; i++) {
            RN.push(` ObjForm.${a[i].textContent}.value = ""; \n`)

            textContent9 =
                `function ${Mname}_crit_pre_ONCLICK(obj)
   {
     var ObjForm = document.forms[0];
     if(obj.id == "Clear")
     {
       ${RN}
     }
   }`
        }


        let textContent10;
        let TN = [];
        for (let i = 0; i < a.length; i++) {
            TN.push(`var ObjForm = document.forms[0];
     if(fnIsNull(ObjForm.${a[i].textContent}.value))
     {
       alert("Enter Agent Id");
       ObjForm${a[i].textContent}.focus();
       return false;
     }
     return true; \n` )
            textContent10 =
                `
   function fnCheckMandatoryFields()
   {
     ${TN}
   }`
        }

        let textContent11;
        let YN = [];
        for (let i = 0; i < a.length; i++) {
            YN.push(`ObjForm.${a[i].textContent}.value = ${a[i].textContent}; \n`)

            textContent11 =
                `
   function fnPopulateControlValues() 
   {
     var ObjForm = document.forms[0];
   
     ${YN}
   }
  }
   function ${Mname}_crit_ONCLICK1(obj,p1)
   {
           var retVal = "";
           if (pre_ONCLICK('${Mname}_crit',obj) == false) {
                   return false;
           }
           if ((retVal =  fnValAndSubmit(p1)) == false) {
                   return false;
           }
           if (post_ONCLICK('${Mname}_crit',obj) == false) {
                   return false;
           }
           return (retVal == undefined) ? true : retVal;
   }
   
   function ${Mname}_crit_ONCLICK2(obj)
   {
           var retVal = "";
           if (preEventCall('${Mname}_crit',obj,'ONCLICK') == false) {
                   return false;
                   }
           if ((retVal =  fnClearFields()) == false) {
                   return false;
                   }
           if (postEventCall('${Mname}_crit',obj,'ONCLICK') == false) {
                   return false;
                   }
           return (retVal == undefined) ? true : retVal;
   }
   
   function agId_onChange(obj)                                                        
{
	var ObjForm = document.forms[0];
        if(!fnIsNull(ObjForm.agId.value))
        {
               var conf = confirm("1)Enter ONLY Customers count for mobile number update 2) DO NOT enter details for the Child Enrolment service 3)Do not enter details again if already reported earlier. 4)You will be required to settle cash collected for transactions being reported  5)Always update transaction details before settling cash for the day with Cashier.");
                if(conf != true)
                {
                        return false;
                }

                        var input = "agId|"+ObjForm.agId.value;
                        var output = "";
                        var scriptName = "CELC_Validations.scr";
                        var retVal = appFnExecuteScript(input,output,scriptName,false);
                        if((typeof(retVal) != 'undefined') && (retVal != ""))
                        {
                                var res = retVal.split("|");
                                if(res[0] == "F")
                                {
                                        alert(res[1]);
                                        ObjForm.agId.focus();
                                        ObjForm.agId.value = "";
                                        ObjForm.agIdDesc.value = "";
                                }
                        }
        }
        else
        {
                ObjForm.agIdDesc.value = "";
        }
}

   `
        }


        let blob8 = new Blob([textContent8, textContent9, textContent10, textContent11], { type: "text/plain" });


        let link8 = document.createElement("a");
        link8.href = URL.createObjectURL(blob8);
        link8.download = `${Mname.toLowerCase()}_crit_glink.js`;
        link8.click();

        URL.revokeObjectURL(link8.href);




    }
}

function rst() {
    location.reload();
}
let mname = document.getElementById('mname');
mname.addEventListener('keydown', function (event) {
    const key = event.key;
    if (!/^[a-zA-Z]$/.test(key) && key !== 'Backspace') {
        event.preventDefault();
    }
});

