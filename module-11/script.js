
const items = [];

const item_entry = document.getElementById("entry");
const add = document.getElementById("add");
const delete_last = document.getElementById("delete-last");
const delete_specific = document.getElementById("delete-specific");
const display = document.getElementById("display");
const output = document.getElementById("output");
const entry_delete = document.getElementById("entry-to-delete");


add.addEventListener('click', () => {
    add_entry();
    entry_delete_options();
});
delete_last.addEventListener('click', () => {
    delete_last_entry();
    entry_delete_options();
});
delete_specific.addEventListener('click',() => {
    delete_specific_entry();
    entry_delete_options();
});
display.addEventListener('click',display_array);


function add_entry(){
    const value = item_entry.value;

    if(value === ""){
        alert("No item to add. Please add item before adding to list.");
        
        return;
    }

    items.push(value);
    
    const position = array_length();
    alert(`Item added.\n${value} at position ${position}.`);
    
    item_entry.value = "";
}

function delete_last_entry(){
    alert(`Last entry deleted.\nItem deleted: ${items[array_length()-1]}`);
    items.pop();
}

function delete_specific_entry(){
    const value = entry_delete.value;
    const index = items.indexOf(value);
    alert(`Specific entry deleted.\nItem deleted: ${value}`);
    items.splice(index,1);
}

function display_array(){ // Display entries in array
    output.innerHTML = "";
    items.forEach(value_to_li);
}

function value_to_li(value){ // Dynamically get values, li to output
    const li = document.createElement('li');
    li.textContent = value;
    output.append(li);
}

function entry_delete_options(){ // Assign options for dropdown
    entry_delete.innerHTML = "";
    items.forEach(value_to_option);
}

function value_to_option(value){ // Dynamically get values, option to dropdown
    const option = document.createElement('option');
    option.textContent = value;
    entry_delete.append(option);
}

function array_length(){ // Get current length of array
    return items.length;
}