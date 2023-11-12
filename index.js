document.querySelector("html").classList.add('js');


let fileInput  = document.getElementById("my-file")
let uploaded_block  = document.getElementById("uploaded-block")
let upload_block  = document.getElementById("upload-block")
let remove_file  = document.getElementById("remove-file")
let file_name  = document.getElementById("file-name")
let porcion1_c  = document.getElementById("porcion1-c")
let donut_chart  = document.getElementById("donut-chart")
let cover_spin  = document.getElementById("cover-spin")
let switch_button  = document.getElementsByClassName("switch-button")
let ctx2 = document.getElementById('myDoubleBarChart').getContext('2d');
let myLineChart_list = document.getElementsByClassName('myLineChart');
let chart_row_list = document.getElementsByClassName('chart-row-wrapper')


const myPieChart_list = document.getElementsByClassName('myPieChart');
let checkbox_list  = document.getElementsByClassName("check-input")

let thread = 0

data={
  "Fashion": {
      "date": [
          1601769600000000000,
          1602115200000000000,
          1603065600000000000,
          1603324800000000000,
          1603497600000000000,
          1605139200000000000,
          1605916800000000000,
          1606608000000000000,
          1607731200000000000,
          1608076800000000000,
          1608163200000000000,
          1609286400000000000,
          1609545600000000000,
          1609718400000000000,
          1610496000000000000,
          1610668800000000000
      ],
      "neg": [
          0,
          1,
          0,
          0,
          0,
          2,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          1,
          1
      ],
      "pos": [
          1,
          0,
          1,
          1,
          1,
          0,
          1,
          1,
          1,
          1,
          0,
          1,
          1,
          1,
          0,
          0
      ]
  },
  "Film": {
      "date": [],
      "neg": [],
      "pos": []
  },
  "Food": {
      "date": [
          1601856000000000000,
          1602288000000000000,
          1603843200000000000,
          1603929600000000000,
          1604275200000000000,
          1604793600000000000,
          1604966400000000000,
          1605052800000000000,
          1605139200000000000,
          1605225600000000000,
          1605312000000000000,
          1606003200000000000,
          1606435200000000000,
          1606608000000000000,
          1606953600000000000,
          1607558400000000000,
          1609459200000000000,
          1609891200000000000,
          1610236800000000000,
          1610409600000000000,
          1610928000000000000,
          1611100800000000000,
          1611446400000000000,
          1611619200000000000,
          1611878400000000000,
          1612051200000000000,
          1612656000000000000,
          1612828800000000000
      ],
      "neg": [
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          0
      ],
      "pos": [
          0,
          1,
          1,
          2,
          1,
          1,
          1,
          1,
          1,
          1,
          2,
          1,
          1,
          2,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          0,
          1,
          1,
          1,
          1,
          2,
          1
      ]
  }
}
myPieChart_obj = {}
Array.from(myPieChart_list).forEach(function myFunction(item, i) {
  let type = item.getAttribute("name")
  let pieChart_food = new Chart(item.getContext('2d'), {
    type: 'pie',
    data: {
      labels: ['positive', 'negative'],
      datasets: [{
        data: [],
        backgroundColor: ['green', 'red']
      }]
    }
  });
  myPieChart_obj[type] = pieChart_food
  pieChart_food.update()
})
MyLineChart_obj = {}
Array.from(myLineChart_list).forEach(function myFunction(item, i) {
  let type = item.getAttribute("name")
  let lineChart = new Chart(item.getContext('2d'), {
    type: "line",
      data: {
      labels: [],
      datasets: [{
      label: "Positve",
      fill: false,
      tension: 0,
      backgroundColor: "rgba(0, 200, 0, 0.59)",
      borderColor: "rgba(0, 200, 0, 0.59)",
      data: []
      },
    {
      label: "Negative",
      fill: false,
      tension: 0,
      backgroundColor: "rgba(236, 6, 6, 0.74)",
      borderColor: "rgba(236, 6, 6, 0.74)",
      data: []	
    }
  
      ]
    },
    options: {
      legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 0, max:100}}],
      }
    }
  });
  MyLineChart_obj[type] = lineChart
  lineChart.update()
})
Array.from(checkbox_list).forEach(function myFunction(item, i) {
  item.addEventListener('change', function (event) {
    let type = item.getAttribute('name');
    let chart_row = Array.from(chart_row_list).find((element) => element.getAttribute('name') == type);

    
    if (chart_row.classList.contains('hidden')) {
      chart_row.classList.remove('hidden');
      setTimeout(function () {
        chart_row.classList.remove('visuallyhidden');
      },10);
    } else {
      chart_row.classList.add('visuallyhidden');    
      chart_row.addEventListener('transitionend', function(e) {
        chart_row.classList.add('hidden');
      }, {
        capture: false,
        once: true,
        passive: false
      });
    }

  })
})

let checkbox_enabled = function(new_type) {
  Array.from(checkbox_list).forEach(function(element){
    type = element.getAttribute('name')
    let chart_row = Array.from(chart_row_list).find((element) => element.getAttribute('name') == type);

    if (new_type.includes(type)) {
      chart_row.classList.remove('hidden');
      element.checked=true
      element.disabled = false
      element.parentElement.parentElement.style.opacity = 1
    } else {
      chart_row.classList.add('hidden');
      element.disabled = true
      element.checked=false
      element.parentElement.parentElement.style.opacity = 0.5
    }
  })
}
let doubleBarChart = new Chart(ctx2, {
	type: 'bar',
	data: {
		labels: ["Fashion","Film","Food"],
		datasets: [
			{
				label: 'Positive',
				data: [0,0,0],
				backgroundColor: 'rgba(75, 192, 192, 0.2)',
				borderColor: 'rgba(75, 192, 192, 1)',
				borderWidth: 1
			},
			{
				label: 'Negative',
				data: [0,0,0],
				backgroundColor: 'rgba(255, 99, 132, 0.2)',
				borderColor: 'rgba(255, 99, 132, 1)',
				borderWidth: 1
			}
		]
	},


	options: {
		scales: {
			y: {
				beginAtZero: true
			}
		}
	}
});

// cover_spin.addEventListener('click', function(){
//   checkbox_enabled([])
//   document.getElementById("cover-spin").style.display = 'block'
// })




function add(accumulator, a) {
  return accumulator + a;
}
var options = {
  weekday: "short",
  year: "numeric",
  month: "2-digit",
  day: "numeric",
};
let check_data = function(data) {  
	new_data_ = {}
	for (const [key, value] of Object.entries(data)) {
    datetime = value["date"].map(function(d) { return new Date(+d/1000000).toLocaleString('vi-VN',options) } )
    value["date"] = datetime
		pos= Array.from(value['pos']).reduce(add, 0)
		neg= Array.from(value['neg']).reduce(add, 0)
		if (pos >0 || neg >0){
			new_data_[key] = {
        "pos":pos,
        "neg":neg,
        'date':value['date'],
        "pos_list":value['pos'],
        "neg_list":value['neg'],}
		}
	  }
	
	return new_data_
}





let click_lineChart = function(data,type){
  let lineChart=MyLineChart_obj[type]
  console.log(MyLineChart_obj)
  
  lineChart.data.labels= data[type]["date"]
  lineChart.data.datasets[0].data = data[type]["pos_list"]
  lineChart.data.datasets[1].data = data[type]["neg_list"]
  lineChart.update()
}
let click_pieChart = function(data,type){
  let PieChart=myPieChart_obj[type]
  PieChart.data.datasets[0].data = [data[type]["pos"], data[type]["neg"]];
	PieChart.update();
}

let active_lineChart = function(data) {  
	let new_data = check_data(data)
	let new_type = Object.keys(new_data)
	Array.from(myLineChart_list).forEach(function myFunction(item, i) {
		type = item.getAttribute("name")
		if (new_type.includes(type)){
			item.parentElement.style.display = "block"
      click_lineChart(new_data,item.getAttribute("name"))
		} else {
      item.parentElement.style.display = "none"
		}
	  })

	
	
}
let active_PieChart = function(data) {  
	let new_data = check_data(data)
	let new_type = Object.keys(new_data)
	Array.from(myPieChart_list).forEach(function myFunction(item, i) {
		type = item.getAttribute("name")
		if (new_type.includes(type)){
      item.parentElement.style.display="block"
      click_pieChart(new_data,item.getAttribute("name"))
		} else {
      item.parentElement.style.display="none"
		} 
	  })

	
	
}

active_lineChart(data)
active_PieChart(data)



let active_doubleBarChart = function(data) {  
	let new_data = check_data(data)
	let new_type = Object.keys(new_data)
  checkbox_enabled(new_type)
	doubleBarChart.data.labels = new_type
	doubleBarChart.data.datasets[0].data = Object.values(new_data).map(value =>  value["pos"])
	doubleBarChart.data.datasets[1].data = Object.values(new_data).map(value =>  value["neg"])
	doubleBarChart.update()
}
active_doubleBarChart(data)



let hidden_load = function() {
  document.getElementById("load-animation").style.display="none"
}


fileInput.addEventListener("change", function( event ) {  
    // upload_block.style.visibility = "hidden"
    // uploaded_block.style.visibility = "visible"
    file_name.innerText = this.value

	let reader = new FileReader();
  
	reader.readAsDataURL(fileInput.files[0]);
	reader.onload = function () {
    thread+=1
	  let fileEncoded = {"file":reader.result,'thread':thread};
    checkbox_enabled([])
    document.getElementById("cover-spin").style.display = 'block'

	  $.ajax({
			url: "http://127.0.0.1:8000/predict",
			type: 'POST',
			data: JSON.stringify(fileEncoded),
			contentType: 'application/json',
      

		}).done(function(result) {
			console.log(result)
      if (thread == result['thread']){
        document.getElementById("cover-spin").style.display = 'none'
        active_PieChart(result['predict'])
        active_doubleBarChart(result['predict'])
      }
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
  document.getElementById("cover-spin").style.display = 'none'
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