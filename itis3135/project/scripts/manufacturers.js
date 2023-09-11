$(document).ready(function() {

    $.ajax({
        type: "get",
        url: "json/manufacturers.json",
        beforeSend: function() {
            $("#manufacturers").html("Loading...");
        },

    timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },

        success: function(data) {
            $("#manufacturers").html("");

        $.each(data, function() {
        $.each(this, function(key, value) {
        $("#manufacturers").append(
            "<p>" + value.name + "</p>"
                    );
                });
            });
        }
    });
});