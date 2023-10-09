var tl=gsap.timeline({
    scrollTrigger:{
        scroll:"#body",
        trigger:"#home",
        // markers:true,
        start:"top top",
        scrub:true,
        pin:true,
        end: "+=" + (window.innerHeight *7)

    },
})

tl.to("#beauty",{
    ease:Power1,
    filter:"blur(2px)",
})
tl.to("#built",{
    ease:Power1,
    top:"50%",
    duration:1
},"a")
tl.to("#beauty",{
    // ease:Power1,
    opacity:0
},"a")
tl.to("#video",{
    ease:Power1,
    filter:"blur(4px)",
},"a")
tl.to("#built",{
    opacity:0,
    ease:Power1
},"b")
tl.to("#group",{
    ease:Power1,
    top:"50%",
    duration:1
},"b")
tl.to("#group",{
    opacity:0,
    ease:Power1
},"c")
tl.to("#eye",{
    ease:Power1,
    top:"50%",
    duration:1
},"c")
tl.to("#eye",{
    opacity:0,
    ease:Power1
},"d")
tl.to("#value",{
    ease:Power1,
    top:"50%",
    duration:1
},"d")
tl.to("#video",{
    ease:Power1,
    filter:"blur(80px)",
})
tl.to("#value",{
    ease:Power1,
    opacity:0,
})
tl.to("#video",{
    ease:Power1,
    filter:"blur(1000px)",
})
tl.to("#video",{
    ease:Power1,
    background:"white",
})
  