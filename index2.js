document.querySelector("html").classList.add('js');


let fileInput  = document.getElementById("my-file")
let uploaded_block  = document.getElementById("uploaded-block")
let upload_block  = document.getElementById("upload-block")
let remove_file  = document.getElementById("remove-file")
let file_name  = document.getElementById("file-name")
let porcion1_c  = document.getElementById("porcion1-c")
let donut_chart  = document.getElementById("donut-chart")
let switch_button  = document.getElementsByClassName("switch-button")


data = {
	"Fashion":{
		"pos":10,
		"neg":20
	},
	"Film":{
		"pos":30,
		"neg":20
	},
	"Food":{
		"pos":100,
		"neg":20
	}
}



const ctx = document.getElementById('myPieChart').getContext('2d');
const myPieChart = new Chart(ctx, {
	type: 'pie',
	data: {
		labels: ['positive', 'negative'],
		datasets: [{
			data: [],
			backgroundColor: ['green', 'red']
		}]
	}
});

let click_chart = function(data,type) {  
	myPieChart.data.datasets[0].data = [data[type]["pos"], data[type]["neg"]];
	myPieChart.update();
}


click_chart(data,"Fashion")

let update_new_pie_chart = function(data){
	Array.from(switch_button).forEach(function myFunction(item, i) {
		item.addEventListener("click", function(event){
			type = item.getAttribute("name")
			click_chart(data,type)
			console.log(type)
		})
	  })
}



update_new_pie_chart(data)


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
			result = {
				"Fashion":{
					"pos":10,
					"neg":20
				},
				"Film":{
					"pos":30,
					"neg":20
				},
				"Food":{
					"pos":100,
					"neg":20
				}
			}


			update_new_pie_chart(result)
	
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