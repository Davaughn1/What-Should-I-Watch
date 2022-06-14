let horror = ["Midsommar", "Hereditary", "Get Out"];

$(".horror").click(function() {

    for (let movies of horror) {
        
        $(".horror-recommend").append("<p>" +movies+ "</p>");
    }
});

let action = ["The suicide squad", "baby driver", "The gentleman"];

$(".action").click(function() {
    
    for (let movies of action) {
        
        $(".action-recommend").append("<p>" +movies+"</p>");
    }
    
    
    
    
});

let comedy = ["Red notice", "The bad Guys", "Dog"];

$(".comedy").click(function() {
    
    for (let movies of comedy) {
        
        $(".comedy-recommend").append("<p>" +movies+"</p>");
    }
    
    
    
    
});