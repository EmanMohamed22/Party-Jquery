let menu = $(".menu").outerWidth(true)

$(".icon").click(()=>{
    
    if ($(".menu").css("left") == "0px") {
        $(".icon").animate({"left":"0px"})
            $(".menu").animate({"left":`-${menu}`})
                
            }
        
     else {
        $(".menu").animate({"left":"0px"}  )
            $(".icon").animate({"left":"20%"} )
               
     }})



$(".close").click(()=>{
    $(".menu").animate({"left":`-${menu}`})
        $(".icon").animate({"left":"0px"})
            
        })

/////////////menu nav
$(".menu a").click((e)=>{
    let href = $(e.target).attr("my-href")
    
    $("body,html").animate({"scrollTop":$(href).offset().top},500)
})





///////singer////////

$(".one h3").click(()=>{
    $(".one p").slideToggle(300,()=>{
        $("#text1 p").not(".one p").slideUp(300)
    })
})
$(".two h3").click(()=>{
    $(".two p").slideToggle(300,()=>{
        $("#text1 p").not(".two p").slideUp(300)})
})
$(".three h3").click(()=>{
    $(".three p").slideToggle(300,()=>{
        $("#text1 p").not(".three p").slideUp(300)})
})
$(".four h3").click(()=>{
    $(".four p").slideToggle(300,()=>{
        $("#text1 p").not(".four p").slideUp(300) 
    })
})

/////////////counter

let partyDate = new Date("Mar 25, 2025 10:0:0").getTime()
let counter = setInterval(()=>{
    let now = new Date().getTime()
let diffrence = partyDate - now
let days = Math.floor( diffrence / (1000 * 60 * 60 *24))
$(".days").text(`${days}`)
let hours = Math.floor( (diffrence % (1000 * 60 * 60 *24))/(1000*60*60))
$(".hours").text(`${hours }`)
 let min = Math.floor((diffrence % (1000 * 60 * 60 ))/(1000 * 60 ))
 $(".mins").text(`${min}`)
 let sec = Math.floor( (diffrence % (1000 * 60  ))/(1000  ))
 $(".sec").text(`${sec}`)
},1000) 
 
////////////textarea



$(()=>{
    
    let maxLength = $("textarea").attr("maxlength")
   console.log(maxLength);
    $("textarea").keyup(()=>{
        let textInput = $("textarea").val().length;
        
         let result = maxLength - textInput;
         console.log(result);
         $(".number").text(`${result}`)
    })
})