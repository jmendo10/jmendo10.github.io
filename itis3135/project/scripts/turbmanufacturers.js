$(document).ready(function() {

    $.ajax({
        type: "get",
        url: "json/turbmanufacturers.json",
        beforeSend: function() {
            $("#turbmanufacturers").html("Loading...");
        },

    timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },

        success: function(data) {
            $("#turbmanufacturers").html("");

        $.each(data, function() {
        $.each(this, function(key, value) {
        $("#turbmanufacturers").append(
            "<p>" + value.name + "</p>"
                    );
                });
            });
        }
    });
});