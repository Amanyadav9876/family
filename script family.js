var menu=document.querySelector("#nav i")
var cross=document.querySelector("#full i")
var a=gsap.timeline()
a.to("#full",{
    right:0,
    duration:0.8
    
    

})
a.from("#full h4",{
    x:150,
    opacity:0,
    stagger:0.2,
    duration:0.7
})
a.from("#full i",{
    opacity:0
})
a.pause()

menu.addEventListener("click",function(){
    a.play()
})
cross.addEventListener("click",function(){
    a.reverse()
})
