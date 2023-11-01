document.querySelector("html").classList.add('js');


let fileInput  = document.getElementById("my-file")
let uploaded_block  = document.getElementById("uploaded-block")
let upload_block  = document.getElementById("upload-block")
let remove_file  = document.getElementById("remove-file")
let file_name  = document.getElementById("file-name")
let porcion1_c  = document.getElementById("porcion1-c")
let donut_chart  = document.getElementById("donut-chart")


let update_circle_chart = function(type, pos, neg) {
    if (type === "chart1") {
        
        porcion1_c.style.transform = `rotate(${pos * 360 / (pos + neg)}deg)`;
        if (pos < neg) {
            porcion1_c.style.backgroundColor = `#4fc4f6`;
            donut_chart.style.backgroundColor = `#e64c65`;
        } else {
            porcion1_c.style.backgroundColor = `#e64c65`;
            donut_chart.style.backgroundColor = `#4fc4f6`;
        }
    } else if (type === "chart2") {
        
    } else if (type === "chart3") {
        
    } else {
        
    }
}

function handleButtonClick(event) {
    const button = event.target;
    const criteria = button.getAttribute("data-criteria");

    
    update_circle_chart(criteria, result[`${criteria}_pos`], result[`${criteria}_neg`]);
}


document.getElementById("fashion-button").addEventListener("click", handleButtonClick);
document.getElementById("film-button").addEventListener("click", handleButtonClick);
document.getElementById("food-button").addEventListener("click", handleButtonClick);


fileInput.addEventListener("change", function(event) {
    
});


fileInput.addEventListener("change", function( event ) {  
    upload_block.style.visibility = "hidden"
    uploaded_block.style.visibility = "visible"
    file_name.innerText = this.value

	let reader = new FileReader();
  
	reader.readAsDataURL(fileInput.files[0]);
	reader.onload = function () {
	  let fileEncoded = {"file":reader.result};
	  $.ajax({
			url: "http://127.0.0.1:8000/predict",
			type: 'POST',
			data: JSON.stringify(fileEncoded),
			contentType: 'application/json',
		
		}).done(function(result) {
			// alert( "success" );
			console.log("Success")
			console.log(result)
			update_circle_chart("",result['fas_pos'],result['fas_neg'])
	
		  })
		  .fail(function() {
			alert( "error" );
		  })
	};
  
	reader.onerror = function (error) {
	  console.log('Error: ', error);
	};

	

});  

remove_file.addEventListener("click", function( event ) {  
    uploaded_block.style.visibility = "hidden"
    upload_block.style.visibility = "visible"
    fileInput.value = ''
});  


(function($) { "use strict";

	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});		
		
	
	$(document).ready(function() {
		$('body.hero-anime').removeClass('hero-anime');
	});

		
	$('body').on('mouseenter mouseleave','.nav-item',function(e){
			if ($(window).width() > 750) {
				var _d=$(e.target).closest('.nav-item');_d.addClass('show');
				setTimeout(function(){
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
				},1);
			}
	});	
	

	
  })(jQuery); 