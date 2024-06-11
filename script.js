var tl = gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end:"50% 50%",
    scrub:3,
    // markers:true
}})

tl.to("#fanta",{
    top:"110%",
    left:"5%"
},"orange")
tl.to("#orange-cut",{
    top:"140%",
    left:"25%"
},"orange")
tl.to("#orange",{
    top:"150%",
    right:"1%",
    width:"10%"
},"orange")
tl.to("#leaf",{
    top:"95%",
    // right:"5%",
    left:"10%",
    rotate:"130deg"
    // width:"10%"
},"orange")
tl.to("#leaf2",{
    top:"97%",
    // right:"5%",
    left:"27%"
    // width:"10%"
    ,rotate:"130deg"
},"orange")

var t2 = gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 95%",
    end:"50% 50%",
    scrub:3,
    // markers:true
}})
t2.from(".l1",{
    rotate:"-90deg",
    left:"-50%%",
    top:"70%"
},"last")
t2.to("#fanta",{
    top:"200%",
    left:"31%",
    scale:0.78
    
    // rotate:"360deg"
},"last")






