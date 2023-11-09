document.querySelector("html").classList.add('js');


let fileInput  = document.getElementById("my-file")
let uploaded_block  = document.getElementById("uploaded-block")
let upload_block  = document.getElementById("upload-block")
let remove_file  = document.getElementById("remove-file")
let file_name  = document.getElementById("file-name")
let porcion1_c  = document.getElementById("porcion1-c")
let donut_chart  = document.getElementById("donut-chart")
let switch_button  = document.getElementsByClassName("switch-button")
let ctx2 = document.getElementById('myDoubleBarChart').getContext('2d');
let ctx3 = document.getElementById('lineChartFood').getContext('2d');
let ctx4 = document.getElementById('lineChartFashion').getContext('2d');
let ctx5 = document.getElementById('lineChartFilm').getContext('2d');
const ctx = document.getElementById('myPieChart').getContext('2d');


data={
    "Fashion": {
        "date": [
            1601510400000000000,
            1601596800000000000,
            1601683200000000000,
            1601769600000000000,
            1601856000000000000,
            1601942400000000000,
            1602028800000000000,
            1602115200000000000,
            1602201600000000000,
            1602288000000000000,
            1602460800000000000,
            1602547200000000000,
            1602633600000000000,
            1602720000000000000,
            1602892800000000000,
            1602979200000000000,
            1603065600000000000,
            1603152000000000000,
            1603238400000000000,
            1603324800000000000,
            1603411200000000000,
            1603497600000000000,
            1603584000000000000,
            1603756800000000000,
            1604102400000000000,
            1604188800000000000,
            1604275200000000000,
            1604448000000000000,
            1604534400000000000,
            1604620800000000000,
            1604707200000000000,
            1604793600000000000,
            1604880000000000000,
            1604966400000000000,
            1605139200000000000,
            1605225600000000000,
            1605312000000000000,
            1605398400000000000,
            1605484800000000000,
            1605657600000000000,
            1605744000000000000,
            1605830400000000000,
            1605916800000000000,
            1606003200000000000,
            1606089600000000000,
            1606176000000000000,
            1606262400000000000,
            1606348800000000000,
            1606435200000000000,
            1606780800000000000,
            1606867200000000000,
            1606953600000000000,
            1607040000000000000,
            1607212800000000000,
            1607299200000000000,
            1607385600000000000,
            1607472000000000000,
            1607558400000000000,
            1607644800000000000,
            1607731200000000000,
            1607817600000000000,
            1607904000000000000,
            1607990400000000000,
            1608076800000000000,
            1608163200000000000,
            1608249600000000000,
            1608336000000000000,
            1608422400000000000,
            1608508800000000000,
            1608595200000000000,
            1608681600000000000,
            1608854400000000000,
            1608940800000000000,
            1609027200000000000,
            1609113600000000000,
            1609372800000000000,
            1609545600000000000,
            1609632000000000000,
            1609718400000000000,
            1609804800000000000,
            1609891200000000000,
            1609977600000000000,
            1610150400000000000,
            1610323200000000000,
            1610409600000000000,
            1610496000000000000,
            1610582400000000000,
            1610668800000000000,
            1610755200000000000,
            1610841600000000000,
            1610928000000000000,
            1611014400000000000,
            1611100800000000000,
            1611187200000000000,
            1611273600000000000,
            1611360000000000000,
            1611446400000000000,
            1611532800000000000,
            1611619200000000000,
            1611705600000000000,
            1611878400000000000,
            1611964800000000000,
            1612051200000000000,
            1612137600000000000,
            1612224000000000000,
            1612310400000000000,
            1612483200000000000,
            1612569600000000000,
            1612656000000000000,
            1612742400000000000
        ],
        "neg": [
            2,
            2,
            1,
            2,
            3,
            2,
            1,
            2,
            2,
            3,
            4,
            2,
            2,
            5,
            4,
            2,
            1,
            2,
            4,
            1,
            5,
            2,
            3,
            2,
            1,
            3,
            1,
            1,
            5,
            2,
            2,
            1,
            3,
            1,
            2,
            2,
            1,
            1,
            2,
            1,
            2,
            2,
            3,
            2,
            3,
            1,
            2,
            3,
            4,
            1,
            1,
            4,
            4,
            4,
            2,
            4,
            1,
            3,
            2,
            3,
            2,
            1,
            1,
            2,
            1,
            1,
            2,
            4,
            2,
            2,
            1,
            4,
            2,
            1,
            2,
            5,
            1,
            1,
            2,
            2,
            1,
            1,
            1,
            2,
            3,
            1,
            2,
            2,
            1,
            1,
            1,
            2,
            1,
            2,
            5,
            2,
            3,
            4,
            2,
            3,
            1,
            3,
            2,
            3,
            2,
            1,
            4,
            3,
            3,
            3
        ],
        "pos": [
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
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
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
            1601510400000000000,
            1601596800000000000,
            1601683200000000000,
            1601769600000000000,
            1601856000000000000,
            1601942400000000000,
            1602028800000000000,
            1602115200000000000,
            1602201600000000000,
            1602288000000000000,
            1602374400000000000,
            1602460800000000000,
            1602547200000000000,
            1602633600000000000,
            1602720000000000000,
            1602806400000000000,
            1602892800000000000,
            1602979200000000000,
            1603065600000000000,
            1603152000000000000,
            1603238400000000000,
            1603324800000000000,
            1603411200000000000,
            1603497600000000000,
            1603584000000000000,
            1603670400000000000,
            1603756800000000000,
            1603843200000000000,
            1603929600000000000,
            1604016000000000000,
            1604102400000000000,
            1604188800000000000,
            1604275200000000000,
            1604361600000000000,
            1604448000000000000,
            1604534400000000000,
            1604620800000000000,
            1604707200000000000,
            1604793600000000000,
            1604880000000000000,
            1604966400000000000,
            1605052800000000000,
            1605139200000000000,
            1605225600000000000,
            1605312000000000000,
            1605398400000000000,
            1605484800000000000,
            1605571200000000000,
            1605657600000000000,
            1605744000000000000,
            1605830400000000000,
            1605916800000000000,
            1606003200000000000,
            1606089600000000000,
            1606176000000000000,
            1606262400000000000,
            1606348800000000000,
            1606435200000000000,
            1606521600000000000,
            1606608000000000000,
            1606694400000000000,
            1606780800000000000,
            1606867200000000000,
            1606953600000000000,
            1607040000000000000,
            1607126400000000000,
            1607212800000000000,
            1607299200000000000,
            1607385600000000000,
            1607472000000000000,
            1607558400000000000,
            1607644800000000000,
            1607731200000000000,
            1607817600000000000,
            1607904000000000000,
            1607990400000000000,
            1608076800000000000,
            1608163200000000000,
            1608249600000000000,
            1608336000000000000,
            1608422400000000000,
            1608508800000000000,
            1608595200000000000,
            1608681600000000000,
            1608768000000000000,
            1608854400000000000,
            1608940800000000000,
            1609027200000000000,
            1609113600000000000,
            1609200000000000000,
            1609286400000000000,
            1609372800000000000,
            1609459200000000000,
            1609545600000000000,
            1609632000000000000,
            1609718400000000000,
            1609804800000000000,
            1609891200000000000,
            1609977600000000000,
            1610064000000000000,
            1610150400000000000,
            1610236800000000000,
            1610323200000000000,
            1610409600000000000,
            1610496000000000000,
            1610582400000000000,
            1610668800000000000,
            1610755200000000000,
            1610841600000000000,
            1610928000000000000,
            1611014400000000000,
            1611100800000000000,
            1611187200000000000,
            1611273600000000000,
            1611360000000000000,
            1611446400000000000,
            1611532800000000000,
            1611619200000000000,
            1611705600000000000,
            1611792000000000000,
            1611878400000000000,
            1611964800000000000,
            1612051200000000000,
            1612137600000000000,
            1612224000000000000,
            1612310400000000000,
            1612396800000000000,
            1612483200000000000,
            1612569600000000000,
            1612656000000000000,
            1612742400000000000,
            1612828800000000000
        ],
        "neg": [
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
            0
        ],
        "pos": [
            2,
            6,
            5,
            6,
            3,
            2,
            4,
            9,
            6,
            4,
            4,
            4,
            3,
            7,
            8,
            5,
            3,
            6,
            8,
            10,
            2,
            6,
            3,
            8,
            8,
            5,
            4,
            2,
            8,
            8,
            5,
            6,
            6,
            5,
            8,
            4,
            8,
            6,
            8,
            4,
            2,
            6,
            6,
            4,
            4,
            3,
            7,
            5,
            6,
            5,
            5,
            8,
            6,
            5,
            6,
            10,
            6,
            2,
            7,
            5,
            4,
            6,
            5,
            8,
            3,
            7,
            6,
            7,
            6,
            7,
            8,
            4,
            7,
            5,
            7,
            6,
            1,
            6,
            5,
            8,
            3,
            11,
            9,
            10,
            3,
            6,
            12,
            4,
            4,
            6,
            12,
            2,
            4,
            2,
            9,
            7,
            11,
            2,
            10,
            5,
            8,
            10,
            6,
            6,
            8,
            4,
            5,
            4,
            6,
            5,
            6,
            3,
            4,
            5,
            5,
            6,
            3,
            5,
            4,
            8,
            8,
            4,
            2,
            12,
            7,
            10,
            5,
            5,
            7,
            7,
            6,
            3
        ]
    }
}


let myPieChart = new Chart(ctx, {
	type: 'pie',
	data: {
		labels: ['positive', 'negative'],
		datasets: [{
			data: [],
			backgroundColor: ['green', 'red']
		}]
	}
});

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

let click_chart = function(data,type) {  
	myPieChart.data.datasets[0].data = [data[type]["pos"], data[type]["neg"]];
	myPieChart.update();
}

let click_line_chart = function(data,type) {  
	lineChart.data.datasets[0].data = [data[type]["pos"], data[type]["neg"]];
	lineChart.update();
}


let lineChart_food = new Chart(ctx3, {
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

let lineChart_fashion = new Chart(ctx4, {
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

let lineChart_film = new Chart(ctx5, {
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


function add(accumulator, a) {
  return accumulator + a;
}

let check_data = function(data) {  
	new_data_ = {}
	for (const [key, value] of Object.entries(data)) {

		pos= Array.from(value['pos']).reduce(add, 0)
		neg= Array.from(value['neg']).reduce(add, 0)
		if (pos >0 || neg >0){
			new_data_[key] = {"pos":pos,"neg":neg}
		}
	  }
	
	return new_data_
}

let check_chart = function(data) {
	new_data = check_data(data)
	if("Fashion" in Object(new_data)){
		document.getElementById("line-chart-fashion").style.display="block"
	}else{
		document.getElementById("line-chart-fashion").style.display="none"
	}
	if("Food" in Object(new_data)){
		document.getElementById('line-chart-food').style.display="block"
	}else{
		document.getElementById('line-chart-food').style.display="none"
	}
	if("Film" in Object(new_data)){
		document.getElementById('line-chart-film').style.display="block"
	}else{
		document.getElementById('line-chart-film').style.display="none"
	}
}


let active_PieChart = function(data) {  
	let new_data = check_data(data)
	let new_type = Object.keys(new_data)

	Array.from(switch_button).forEach(function myFunction(item, i) {
		type = item.getAttribute("name")
		if (new_type.includes(type)){
			item.style.display = "block"

			item.addEventListener("click", function(event){
				click_chart(new_data,item.getAttribute("name"))
			})
		} else {
			item.style.display = "none"
		}
	  })
	click_chart(new_data,new_type[0])
	
	
}
active_PieChart(data)


let active_doubleBarChart = function(data) {  
	let new_data = check_data(data)
	let new_type = Object.keys(new_data)
	doubleBarChart.data.labels = new_type
	doubleBarChart.data.datasets[0].data = Object.values(new_data).map(value =>  value["pos"])
	doubleBarChart.data.datasets[1].data = Object.values(new_data).map(value =>  value["neg"])
	doubleBarChart.update()
}
active_doubleBarChart(data)

let active_lineChart_food = function(data) {  
	new_data = check_data(data)
	check_chart(new_data)
	lineChart_food.data.labels= Object.values("Food").map(value =>  value["date"])
	lineChart_food.data.datasets[0].data = Object.values("Food").map(value =>  value["pos"])
	lineChart_food.data.datasets[1].data = Object.values("Food").map(value =>  value["neg"])
	lineChart_food.update()
}
active_lineChart_food(data)

let active_lineChart_fashion = function(data) {  
	new_data = check_data(data)
	check_chart(new_data)
	lineChart_food.data.labels= Object.values("Fashion").map(value =>  value["date"])
	lineChart_fashion.data.datasets[0].data = Object.values("Fashion").map(value =>  value["pos"])
	lineChart_fashion.data.datasets[1].data = Object.values("Fashion").map(value =>  value["neg"])
	lineChart_fashion.update()
}
active_lineChart_fashion(data)

let active_lineChart_film = function(data) {  
	new_data = check_data(data)
	check_chart(new_data)
	lineChart_food.data.labels= Object.values("Film").map(value =>  value["date"])
	lineChart_film.data.datasets[0].data = Object.values("Film").map(value =>  value["pos"])
	lineChart_film.data.datasets[1].data = Object.values("Film").map(value =>  value["neg"])
	lineChart_film.update()
}
active_lineChart_film(data)

let hidden_load = function() {
  document.getElementById("load-animation").style.display="none"
}

hidden_load()

fileInput.addEventListener("change", function( event ) {  
    upload_block.style.visibility = "hidden"
    uploaded_block.style.visibility = "visible"
    file_name.innerText = this.value

	let reader = new FileReader();
  
	reader.readAsDataURL(fileInput.files[0]);
	reader.onload = function () {
	  let fileEncoded = {"file":reader.result};
    document.getElementById("load-animation").style.display="block"
	  $.ajax({
			url: "http://127.0.0.1:8000/predict",
			type: 'POST',
			data: JSON.stringify(fileEncoded),
			contentType: 'application/json',
    

		}).done(function(result) {
			// alert( "success" );
      document.getElementById("load-animation").style.display="none"
			console.log("Success")
			console.log(result)
			

			active_PieChart(result)
			active_doubleBarChart(result)
	
		  })
		  .fail(function() {
        document.getElementById("load-animation").style.display="none"
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