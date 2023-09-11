"use strict"
$(document).ready(() => {
    $("a").each ((index, link) => {
        const image = new Image();
        image.src = link.href;
    });

    $("a").click(evt => {
        const link = evt.currentTarget;
        $("#main").attr("src", link.href);
        $("#caption").text(link.title);
        console.log("test");
        evt.preventDefault();
    });
    $("li:first-child a").focus();

});