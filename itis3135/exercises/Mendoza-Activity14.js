$(document).ready(function() {
	
    $("li a").each(function(){
    $(this).click(function(){
    $.ajax({
        
        type: "get",
        dataType: "json",
        url: "json_files/" + this.title + ".json",
        error: function(xhr, status, error) {
        alert("Error: " + xhr.status + " - " + error);
        },
                
       success: function(data) {
                   
    $("main").empty();
    $.each(data, function(){
    $.each(this, function(key, value){
    $("main").append(
    $("<h1>" + value.title + "</h1>" + "<h2>" + value.month + "</h2>" + "<h3>" + value.speaker + "</h3>" + "<img src=" + value.image + " alt=" + this.title + "_picture>" + "<p>" + value.text + "</p>")
                            );
                        })
                    });
                }
            })
        });
    });
});