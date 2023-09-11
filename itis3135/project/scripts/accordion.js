$(document).ready(function(){
    $(".accordion h1").click(function(){

    var id = this.id;

    $(".accordionWriting").each(function(){
    if($("#"+id).next()[0].id != this.id){
    $(this).slideUp();
}    
});
        $(this).next().toggle(); 
    });
});