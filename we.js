$(".caro").slideUp();
let visi=true;
$(".explore").click(()=>{
    if(visi){
        $(".caro").slideDown();
        $(".explore btn").innerHTML="UNEXPLORE"
    }
    else{
        $(".caro").slideUp();
    }
    visi=!visi;
});