
const top_to_bottom = document.getElementById("top-to-bottom");
const bottom_to_top = document.getElementById("bottom-to-top");

const ordered_list = document.getElementById("books");
const original_list = Array.from(ordered_list.children);


top_to_bottom.addEventListener('click', () => {
    sort_ascending();
});

bottom_to_top.addEventListener('click', () => {
    sort_descending();
});


function sort_ascending(){ // Ascending order sort
    ordered_list.removeAttribute("reversed", "");
    display_list(original_list);
}

function sort_descending(){ // Descending order sort
    const modify_list = Array.from(ordered_list.children);

    if(ordered_list.firstElementChild.textContent == "Eragon"){
        ordered_list.setAttribute("reversed", "");
        modify_list.reverse();    
    }
    
    display_list(modify_list);
}

function display_list(my_list){
    my_list.forEach(item => {
        ordered_list.appendChild(item);
    });
}
