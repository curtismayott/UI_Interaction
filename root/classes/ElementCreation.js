function createUIElement(elementType, id, value){
    var response;
    if(elementType == "P"){
        response = document.createElement(elementType);
        response.append(value);
    }else{
        response = document.createElement(elementType);
        response.setAttribute("id", id);
    }
    return response;
}