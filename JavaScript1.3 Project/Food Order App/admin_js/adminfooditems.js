function loadCategories(){
    var parentElement = document.getElementById("category");
    parentElement.innerHTML = "";
    for (categorgyId in categoryCollection) {
        var categoryObj = categoryCollection[categorgyId];
        var categoryName = categoryObj["name"];
        parentElement.innerHTML +='<option value="'+categoryName+'">'+categoryName+'</option>';
    };
}

function loadCuisines(){
    var parentElement = document.getElementById("cuisine");
    parentElement.innerHTML = "";
    for (cuisineId in cuisineCollection) {
        var cuisineObj = cuisineCollection[cuisineId];
        var cuisineName = cuisineObj["name"];
        parentElement.innerHTML +='<option value="'+cuisineName+'">'+cuisineName+'</option>';
    };
}

function listFoodItems(){
    var fooditemTable = document.getElementById("fooditemstable");
    for(fooditemId in foodItemsCollection){
        var fooditemObj = foodItemsCollection[fooditemId];
        fooditemTable.innerHTML += "<tr><td>"+fooditemObj['id']+"</td>"+
                                    "<td>"+fooditemObj['title']+"</td>"+
                                    "<td>"+fooditemObj['description']+"</td>"+
                                    "<td>"+fooditemObj['inStock']+"</td>"+
                                    "<td>"+fooditemObj['isVeg']+"</td>"+
                                    "<td>"+fooditemObj['category']+"</td>"+
                                    "<td>"+fooditemObj['cuisine']+"</td>"+
                                    '<td><img src="'+fooditemObj['image']+'" style="width:100px;height:100px;"'+'></td>'+
                                    '<td><button id="'+fooditemObj['id']+'" class="btn btn-primary">Edit</button></td></tr>';
    }
}
