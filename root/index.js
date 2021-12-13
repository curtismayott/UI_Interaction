// Write Javascript code!
console.log("hello world!");

var container = document.getElementById("container");
var upload_button = document.getElementById("upload_button");
var submit = document.getElementById("submit_button");
var fileObject = {
    size:0,
    dataFile:[]
};
submit.onclick = function(){
    console.log("hi");

    if (upload_button.files && upload_button.files[0]) {
        var reader = new FileReader();
        reader.readAsBinaryString(upload_button.files[0]);
        reader.onload = function (contents) {
            console.log(contents);
            fileObject.size = contents.total;
            fileObject.dataFile = contents.target.result;
            console.log(fileObject.dataFile);
            parseData(fileObject.dataFile);
        }
    }
}

function parseData(data) {
    var filePresentation = document.getElementById("file_presentation");
    filePresentation.append(createUIElement("P", "presents", data));
    var list = data.split(",");
    var addedUp = 0;
    for(var i = 0; i < list.length; i++){
        if(list[i]){
            addedUp += parseInt(list[i]);
        }
    }
    filePresentation.append(createUIElement("P", "count", addedUp));
}