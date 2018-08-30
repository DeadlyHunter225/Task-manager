+(function(){

    var btnAdd = document.getElementById ("add-btn");
    var inputText = document.getElementById ("task");
    var taskList = document.getElementById ("task-list");

  //console.log (btnAdd, inputText, taskList)



    btnAdd.addEventListener("click", function (event){
        //alert(inputText.value)
        var iconClose = document.createElement("button");
        iconClose.type = "button";
        iconClose.classList.add("close");
        iconClose.innerHTML = "<span aria-hidden =\"true\"> &times;</span>";

        var li = document.createElement("li");
        li.classList.add("list-group-item");
        li.innerHTML = inputText.value;
        li.appendChild(iconClose);

        taskList.appendChild(li);
        inputText.value = "";

        iconClose.addEventListener("click", function (event){
            li.remove();
        })


    }, false);


}());

