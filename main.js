menu_list_array=[
    "Kebab and Paneer Pizza",
    "Scone Pizza",
    "Vegetarian Pizza",
    "Chicken Pizza",
    "Veggie Supreme Pizza"];
    function getmenu(){
        var htmldata;
        htmldata="<ol>"
        menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+'<li>'+ menu_list_array[i]+'</li>'
    }
    htmldata=htmldata+"</ol>"
    document.getElementById("display_addedmenu").innerHTML=htmldata;
}
function addmenu(){
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata="<section>"
    for (var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+' <div> <img src="Mexican_Green_Wave.jpg"></img> '+ menu_list_array[i]+'</div>';
    }
    htmldata=htmldata+"</section>";
    document.getElementById("display_addedmenu").innerHTML=htmldata;
}