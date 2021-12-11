$(document).ready(function() {

    $.ajax({
        type: "get",
        url: "team.json",
        dataType: "json",
        beforeSend: function() {
            $("#team").html("Loading...");
        },

    timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },

    success: function(data) {
        $("#team").html("");

    $.each(data, function() {
        $.each(this, function(object, value) {
            $("#team").append(
                "<h3>" + value.name + "</h3>" + value.title +
                "<br>" + value.bio + "<br>"
                );       
            });
        }); 
    } 
});
});