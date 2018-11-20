(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

console.log('Made with love and full Code! by @EmTv');

//Set variables
var widgetTraffic = document.getElementById('traffic'),
    widgetDaily = document.getElementById('daily'),
    widgetMobile = document.getElementById('mobile'),
    widgetSocial = document.getElementById('social'),
    widgetMembers = document.getElementById('members'),
    widgetSettings = document.getElementById('settings');

var btn_alertClose = document.querySelectorAll('.alert-close');
var btn_bellClose = document.querySelectorAll('.bell-close');
var get_bell = document.getElementById('bell');
var get_dropdown = document.querySelector('.dropdown-content');
var get_group_notificacion = document.getElementById('group_notificacion');

//Validation Pixel Ratio

var get_screen = window.matchMedia("(min-width: 1024px)");

var legendPosition = void 0;

var pixelRatio = void 0;
var pixelRatio_6 = void 0;

if (get_screen.matches) {
		// legendPosition = 'right';
		pixelRatio = 4;
		pixelRatio_6 = 2;
} else {
		// legendPosition = 'top';
		pixelRatio = 1;
		pixelRatio_6 = 1;
}

// ==============
// OPEN BELL
// ==============

function toggleClass(element, cls) {
		return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

function checkEmptyNotifications() {
		// alert('uno');

		var check_empty = get_group_notificacion.childNodes.length;

		console.log(check_empty);

		if (check_empty == 4) {

				var set_empty_p = '<p>All update! =)</p>';
				var set_empty_item = '<div class="item__text">' + set_empty_p + '</div>';
				var set_empty_notificacion = '<div class="notificacion--item">' + set_empty_item + '</div>';

				get_group_notificacion.innerHTML = set_empty_notificacion;
		} else {}
}

for (var i = 0; i < btn_bellClose.length; i++) {
		btn_bellClose[i].addEventListener('click', function (event) {
				checkEmptyNotifications();
		});
}

get_bell.addEventListener('click', function (event) {

		// checkEmptyNotifications();


		var check_disable = toggleClass(get_group_notificacion, 'dropdown-disable');
		var check_active = toggleClass(get_group_notificacion, 'dropdown-active');

		// Test the method
		if (check_disable == true) {
				get_group_notificacion.classList.remove('dropdown-disable');
				get_group_notificacion.classList.add('dropdown-active');

				get_bell.classList.remove('ding-off');
				get_bell.classList.add('ding-on');
		} else if (check_active == true) {
				get_group_notificacion.classList.remove('dropdown-active');
				get_group_notificacion.classList.add('dropdown-disable');
				get_bell.classList.remove('ding-on');
				get_bell.classList.add('ding-off');
		} else {}
});

//CHECK CONTAIN NOTIFICACIONS

// group_notificacion


// ==============
// CLOSE ALERTS
// ==============

function closeAlert(event) {
		var get_parent = event.parentNode;
		get_parent.remove();
}

for (var i = 0; i < btn_alertClose.length; i++) {
		btn_alertClose[i].addEventListener('click', function (event) {
				closeAlert(this);
		});
}

// ******************************************
// SET CHARTS
// -----------
// ******************************************

var buttonMonth = document.getElementById('setMonth');
var buttonWeek = document.getElementById('setWeek');
var buttonDay = document.getElementById('setDay');
var buttonHour = document.getElementById('setHour');

var line_monthly = [500, 1500, 1000, 1750, 2250, 1750, 2000, 1500, 2000, 2500, 2000, 2500];
var line_weekly = [600, 1400, 400, 1250, 1450, 1500, 1900, 1200, 1500, 2400, 100, 1400];
var line_daily = [900, 1500, 200, 850, 1550, 1350, 1900, 800, 800, 450, 600, 900];
var line_hourly = [200, 1200, 700, 150, 560, 1150, 1200, 700, 500, 500, 800, 700];

var config = {
		type: 'line',
		data: {
				labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "27-3", "4-10", "11-17", "18-24", "25-31"],
				datasets: [{
						label: "Monthly",
						borderColor: "#80b6f4",
						pointBorderColor: "#80b6f4",
						pointBackgroundColor: "#80b6f4",
						pointHoverBackgroundColor: "#80b6f4",
						pointHoverBorderColor: "#80b6f4",
						pointBorderWidth: 5,
						pointHoverRadius: 5,
						pointHoverBorderWidth: 3,
						pointRadius: 5,
						fill: true,
						borderWidth: 2,
						data: line_monthly
				}]
		},
		//Day

		//
		options: {

				legend: {
						position: "top"
				},
				title: {
						display: true,
						position: 'top',
						text: 'Traffic'
				},
				aspectRatio: pixelRatio,
				scales: {
						yAxes: [{
								ticks: {
										fontColor: "rgba(0,0,0,0.5)",
										fontStyle: "bold",
										beginAtZero: true,
										maxTicksLimit: 15,
										// stepSize: 0.5,
										padding: 20
								},
								gridLines: {
										drawTicks: true,
										display: true
								}
						}],
						xAxes: [{
								gridLines: {
										zeroLineColor: "transparent",
										drawTicks: true,
										display: true
								},
								ticks: {
										padding: 10,
										fontColor: "rgba(0,0,0,0.5)",
										fontStyle: "bold",
										maxTicksLimit: 15

								}
						}]
				}
		}
};

// ==============
// LINE CHART
// ==============
var myChart = new Chart(widgetTraffic, config);

buttonMonth.addEventListener('click', function (event) {
		/* Act on the event */
		config.data.datasets[0].label = 'Monthly';
		config.data.datasets[0].data = line_monthly;
		myChart.update();
});

buttonWeek.addEventListener('click', function (event) {
		/* Act on the event */
		config.data.datasets[0].label = 'Weekly';
		config.data.datasets[0].data = line_weekly;
		myChart.update();
});

buttonDay.addEventListener('click', function (event) {
		/* Act on the event */
		config.data.datasets[0].label = 'Daily';
		config.data.datasets[0].data = line_daily;
		myChart.update();
});

buttonHour.addEventListener('click', function (event) {
		/* Act on the event */
		config.data.datasets[0].label = 'Hourly';
		config.data.datasets[0].data = line_hourly;
		myChart.update();
});

// ==============
// DAILY CHART
// ==============
var dailyChart = new Chart(widgetDaily, {
		type: 'bar',
		curvature: 0.20,
		data: {
				labels: ["S", "M", "T", "W", "T", "F", "S"],
				datasets: [{
						label: "",
						borderColor: "#7377bf",
						borderRadius: "7px",
						pointBorderWidth: 5,
						pointHoverRadius: 5,
						pointRadius: 5,
						fill: true,
						backgroundColor: "#7377bf",
						borderWidth: 2,
						data: [50, 75, 150, 100, 200, 175, 75]
				}]
		},

		options: {
				title: {
						display: true,
						text: 'Daily'
				},
				legend: {
						position: "top"
				},
				aspectRatio: pixelRatio_6,
				scales: {
						yAxes: [{
								ticks: {
										fontColor: "rgba(0,0,0,0.5)",
										fontStyle: "bold",
										beginAtZero: true,
										maxTicksLimit: 5,
										// stepSize: 0.5,
										padding: 20
								},
								gridLines: {
										drawTicks: false,
										display: true
								}
						}],
						xAxes: [{
								gridLines: {
										zeroLineColor: "transparent",
										drawTicks: true,
										display: true
								},
								ticks: {
										padding: 10,
										fontColor: "rgba(0,0,0,0.5)",
										fontStyle: "bold",
										maxTicksLimit: 15

								}
						}]
				}
		}
});

// ==============
// MOBILE CHART
// ==============

var mobileChart = new Chart(widgetMobile, {
		type: 'doughnut',
		data: {
				labels: ["Phones", "Tablets", "Desktop"],
				datasets: [{
						label: "Data",
						backgroundColor: ["#85db80", "#4c9681", "#7477bf"],
						pointRadius: 5,
						fill: true,
						borderWidth: 2,
						data: [15, 15, 70]
				}]
		},

		options: {
				title: {
						display: true,
						text: 'Mobile Users'
				},
				legend: {
						position: "right"
				},
				aspectRatio: pixelRatio_6

		}
});

//SET PREVENT DEFAULT

var checkMessageForm = function checkMessageForm(event) {
		alert("Message Sent!");
		event.preventDefault();
};

// your form
var form = document.getElementById("userMessage");

// attach event listener
form.addEventListener("submit", checkMessageForm, true);

//SET AUTOMPLETE


function autocomplete(inp, arr) {
		/*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
		var currentFocus;
		/*execute a function when someone writes in the text field:*/
		inp.addEventListener("input", function (e) {
				var a,
				    b,
				    i,
				    val = this.value;
				/*close any already open lists of autocompleted values*/
				closeAllLists();
				if (!val) {
						return false;
				}
				currentFocus = -1;
				/*create a DIV element that will contain the items (values):*/
				a = document.createElement("DIV");
				a.setAttribute("id", this.id + "autocomplete-list");
				a.setAttribute("class", "autocomplete-items");
				/*append the DIV element as a child of the autocomplete container:*/
				this.parentNode.appendChild(a);
				/*for each item in the array...*/
				for (i = 0; i < arr.length; i++) {
						/*check if the item starts with the same letters as the text field value:*/
						if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
								/*create a DIV element for each matching element:*/
								b = document.createElement("DIV");
								/*make the matching letters bold:*/
								b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
								b.innerHTML += arr[i].substr(val.length);
								/*insert a input field that will hold the current array item's value:*/
								b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
								/*execute a function when someone clicks on the item value (DIV element):*/
								b.addEventListener("click", function (e) {
										/*insert the value for the autocomplete text field:*/
										inp.value = this.getElementsByTagName("input")[0].value;
										/*close the list of autocompleted values,
          (or any other open lists of autocompleted values:*/
										closeAllLists();
								});
								a.appendChild(b);
						}
				}
		});
		/*execute a function presses a key on the keyboard:*/
		inp.addEventListener("keydown", function (e) {
				var x = document.getElementById(this.id + "autocomplete-list");
				if (x) x = x.getElementsByTagName("div");
				if (e.keyCode == 40) {
						/*If the arrow DOWN key is pressed,
      increase the currentFocus variable:*/
						currentFocus++;
						/*and and make the current item more visible:*/
						addActive(x);
				} else if (e.keyCode == 38) {
						//up
						/*If the arrow UP key is pressed,
      decrease the currentFocus variable:*/
						currentFocus--;
						/*and and make the current item more visible:*/
						addActive(x);
				} else if (e.keyCode == 13) {
						/*If the ENTER key is pressed, prevent the form from being submitted,*/
						e.preventDefault();
						if (currentFocus > -1) {
								/*and simulate a click on the "active" item:*/
								if (x) x[currentFocus].click();
						}
				}
		});

		function addActive(x) {
				/*a function to classify an item as "active":*/
				if (!x) return false;
				/*start by removing the "active" class on all items:*/
				removeActive(x);
				if (currentFocus >= x.length) currentFocus = 0;
				if (currentFocus < 0) currentFocus = x.length - 1;
				/*add class "autocomplete-active":*/
				x[currentFocus].classList.add("autocomplete-active");
		}

		function removeActive(x) {
				/*a function to remove the "active" class from all autocomplete items:*/
				for (var i = 0; i < x.length; i++) {
						x[i].classList.remove("autocomplete-active");
				}
		}

		function closeAllLists(elmnt) {
				/*close all autocomplete lists in the document,
    except the one passed as an argument:*/
				var x = document.getElementsByClassName("autocomplete-items");
				for (var i = 0; i < x.length; i++) {
						if (elmnt != x[i] && elmnt != inp) {
								x[i].parentNode.removeChild(x[i]);
						}
				}
		}
		/*execute a function when someone clicks in the document:*/
		document.addEventListener("click", function (e) {
				closeAllLists(e.target);
		});
}

/*An array containing all the country names in the world:*/
var countries = ["Victoria Chambers", "Dayle Byrd", "Dawn Wood", "Dan Oliver"];

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("searchMember"), countries);

//LOCAL STORAGE

var save_email = document.getElementById('myEmailSwitch');
var save_profile = document.getElementById('myonoffswitch');

var save_setting = document.getElementById('saveSettings');
var reset_setting = document.getElementById('cancelSettings');

// let timezone = document.getElementById('timezone');
var timezone = document.querySelector("#timezone");

save_setting.addEventListener('click', function (event) {
		/* Act on the event */
		// var checkbox = document.getElementById('myEmailSwitch');
		if (save_email.checked == true) {
				localStorage.setItem('myEmailSwitch', save_email.checked);
		}

		if (save_email.checked == false) {
				localStorage.removeItem('myEmailSwitch');
		}

		if (save_profile.checked == true) {
				localStorage.setItem('myonoffswitch', save_profile.checked);
		}

		if (save_profile.checked == false) {
				localStorage.removeItem('myonoffswitch');
		}

		//Select
		var get_timezone_value = timezone.value;

		if (get_timezone_value == "") {} else {
				localStorage.setItem('timezone', get_timezone_value);
		}

		// if(localStorage.getItem('pref') == NULL){

		// } else {
		//   var pref = localStorage.getItem('pref');
		//   clearSelected();
		//   //set the selected state to true on the option localStorage remembers
		//   timezone.find('#' + pref).prop('selected', true);

		// }

		// var setPreference = function(){
		//   //remember the ID of the option the user selected
		//   localStorage.setItem('pref', timezone.find(':selected').attr('id'));
		// };


		alert('Saved!');

		// console.log(localStorage);
});

save_email.checked = localStorage.myEmailSwitch;
save_profile.checked = localStorage.myonoffswitch;
timezone.value = localStorage.timezone;

// timezone.value = 'GTM-4';

reset_setting.addEventListener('click', function (event) {
		/* Act on the event */

		localStorage.clear();
		alert('Clear localStorage');
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcm9qZWN0cy91bml0LTA3LXdlYmFwcC1kYXNoYm9hcmQvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLFFBQVEsR0FBUixDQUFZLHdDQUFaOztBQUVBO0FBQ0EsSUFBSSxnQkFBZ0IsU0FBUyxjQUFULENBQXdCLFNBQXhCLENBQXBCO0FBQUEsSUFDRSxjQUFjLFNBQVMsY0FBVCxDQUF3QixPQUF4QixDQURoQjtBQUFBLElBRUUsZUFBZSxTQUFTLGNBQVQsQ0FBd0IsUUFBeEIsQ0FGakI7QUFBQSxJQUdFLGVBQWUsU0FBUyxjQUFULENBQXdCLFFBQXhCLENBSGpCO0FBQUEsSUFJRSxnQkFBZ0IsU0FBUyxjQUFULENBQXdCLFNBQXhCLENBSmxCO0FBQUEsSUFLRSxpQkFBaUIsU0FBUyxjQUFULENBQXdCLFVBQXhCLENBTG5COztBQU9BLElBQUksaUJBQWlCLFNBQVMsZ0JBQVQsQ0FBMEIsY0FBMUIsQ0FBckI7QUFDQSxJQUFJLGdCQUFnQixTQUFTLGdCQUFULENBQTBCLGFBQTFCLENBQXBCO0FBQ0EsSUFBSSxXQUFXLFNBQVMsY0FBVCxDQUF3QixNQUF4QixDQUFmO0FBQ0EsSUFBSSxlQUFlLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FBbkI7QUFDQSxJQUFJLHlCQUF5QixTQUFTLGNBQVQsQ0FBd0Isb0JBQXhCLENBQTdCOztBQUdBOztBQUVBLElBQUksYUFBYSxPQUFPLFVBQVAsQ0FBa0IscUJBQWxCLENBQWpCOztBQUVBLElBQUksdUJBQUo7O0FBRUEsSUFBSSxtQkFBSjtBQUNBLElBQUkscUJBQUo7O0FBRUEsSUFBSSxXQUFXLE9BQWYsRUFBd0I7QUFDdEI7QUFDQSxlQUFhLENBQWI7QUFDQSxpQkFBZSxDQUFmO0FBRUQsQ0FMRCxNQUtPO0FBQ0w7QUFDQSxlQUFhLENBQWI7QUFDQSxpQkFBZSxDQUFmO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNB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QUEwREEsV0FBVyxPQUFYLEdBQXFCLGFBQWEsYUFBbEM7QUFDQSxhQUFhLE9BQWIsR0FBdUIsYUFBYSxhQUFwQztBQUNBLFNBQVMsS0FBVCxHQUFpQixhQUFhLFFBQTlCOztBQUVBOztBQUVBLGNBQWMsZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBeUMsVUFBUyxLQUFULEVBQWdCO0FBQ3ZEOztBQUVBLGVBQWEsS0FBYjtBQUNBLFFBQU0sb0JBQU47QUFDRCxDQUxEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc31yZXR1cm4gZX0pKCkiLCJjb25zb2xlLmxvZygnTWFkZSB3aXRoIGxvdmUgYW5kIGZ1bGwgQ29kZSEgYnkgQEVtVHYnKTtcclxuXHJcbi8vU2V0IHZhcmlhYmxlc1xyXG5sZXQgd2lkZ2V0VHJhZmZpYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFmZmljJyksXHJcblx0XHR3aWRnZXREYWlseSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYWlseScpLFxyXG5cdFx0d2lkZ2V0TW9iaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vYmlsZScpLFxyXG5cdFx0d2lkZ2V0U29jaWFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NvY2lhbCcpLFxyXG5cdFx0d2lkZ2V0TWVtYmVycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW1iZXJzJyksXHJcblx0XHR3aWRnZXRTZXR0aW5ncyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncycpO1xyXG5cclxubGV0IGJ0bl9hbGVydENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFsZXJ0LWNsb3NlJyk7XHJcbmxldCBidG5fYmVsbENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJlbGwtY2xvc2UnKTtcclxubGV0IGdldF9iZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JlbGwnKTtcclxubGV0IGdldF9kcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bi1jb250ZW50Jyk7XHJcbmxldCBnZXRfZ3JvdXBfbm90aWZpY2FjaW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyb3VwX25vdGlmaWNhY2lvbicpO1xyXG5cclxuXHJcbi8vVmFsaWRhdGlvbiBQaXhlbCBSYXRpb1xyXG5cclxubGV0IGdldF9zY3JlZW4gPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDEwMjRweClcIik7XHJcblxyXG5sZXQgbGVnZW5kUG9zaXRpb247XHJcblxyXG5sZXQgcGl4ZWxSYXRpbztcclxubGV0IHBpeGVsUmF0aW9fNjtcclxuXHJcbmlmIChnZXRfc2NyZWVuLm1hdGNoZXMpIHtcclxuXHRcdC8vIGxlZ2VuZFBvc2l0aW9uID0gJ3JpZ2h0JztcclxuXHRcdHBpeGVsUmF0aW8gPSA0O1xyXG5cdFx0cGl4ZWxSYXRpb182ID0gMjtcclxuXHJcbn0gZWxzZSB7XHJcblx0XHQvLyBsZWdlbmRQb3NpdGlvbiA9ICd0b3AnO1xyXG5cdFx0cGl4ZWxSYXRpbyA9IDE7XHJcblx0XHRwaXhlbFJhdGlvXzYgPSAxO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PVxyXG4vLyBPUEVOIEJFTExcclxuLy8gPT09PT09PT09PT09PT1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGVsZW1lbnQsIGNscykge1xyXG5cdFx0cmV0dXJuICgnICcgKyBlbGVtZW50LmNsYXNzTmFtZSArICcgJykuaW5kZXhPZignICcgKyBjbHMgKyAnICcpID4gLTE7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjaGVja0VtcHR5Tm90aWZpY2F0aW9ucygpIHtcclxuXHRcdC8vIGFsZXJ0KCd1bm8nKTtcclxuXHJcblx0XHRsZXQgY2hlY2tfZW1wdHkgPSBnZXRfZ3JvdXBfbm90aWZpY2FjaW9uLmNoaWxkTm9kZXMubGVuZ3RoO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKGNoZWNrX2VtcHR5KTtcclxuXHJcblx0XHRpZiAoY2hlY2tfZW1wdHkgPT0gNCkge1xyXG5cclxuXHRcdFx0XHRsZXQgc2V0X2VtcHR5X3AgPSAnPHA+QWxsIHVwZGF0ZSEgPSk8L3A+JztcclxuXHRcdFx0XHRsZXQgc2V0X2VtcHR5X2l0ZW0gPSAnPGRpdiBjbGFzcz1cIml0ZW1fX3RleHRcIj4nICsgc2V0X2VtcHR5X3AgKyAnPC9kaXY+JztcclxuXHRcdFx0XHRsZXQgc2V0X2VtcHR5X25vdGlmaWNhY2lvbiA9ICc8ZGl2IGNsYXNzPVwibm90aWZpY2FjaW9uLS1pdGVtXCI+JyArIHNldF9lbXB0eV9pdGVtICsgJzwvZGl2Pic7XHJcblxyXG5cdFx0XHRcdGdldF9ncm91cF9ub3RpZmljYWNpb24uaW5uZXJIVE1MID0gc2V0X2VtcHR5X25vdGlmaWNhY2lvbjtcclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuZm9yICh2YXIgaSA9IDA7IGkgPCBidG5fYmVsbENsb3NlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRidG5fYmVsbENsb3NlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0Y2hlY2tFbXB0eU5vdGlmaWNhdGlvbnMoKTtcclxuXHRcdH0pKVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuZ2V0X2JlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcblx0XHQvLyBjaGVja0VtcHR5Tm90aWZpY2F0aW9ucygpO1xyXG5cclxuXHJcblx0XHRsZXQgY2hlY2tfZGlzYWJsZSA9IHRvZ2dsZUNsYXNzKGdldF9ncm91cF9ub3RpZmljYWNpb24sICdkcm9wZG93bi1kaXNhYmxlJyk7XHJcblx0XHRsZXQgY2hlY2tfYWN0aXZlID0gdG9nZ2xlQ2xhc3MoZ2V0X2dyb3VwX25vdGlmaWNhY2lvbiwgJ2Ryb3Bkb3duLWFjdGl2ZScpO1xyXG5cclxuXHRcdC8vIFRlc3QgdGhlIG1ldGhvZFxyXG5cdFx0aWYgKGNoZWNrX2Rpc2FibGUgPT0gdHJ1ZSkge1xyXG5cdFx0XHRcdGdldF9ncm91cF9ub3RpZmljYWNpb24uY2xhc3NMaXN0LnJlbW92ZSgnZHJvcGRvd24tZGlzYWJsZScpO1xyXG5cdFx0XHRcdGdldF9ncm91cF9ub3RpZmljYWNpb24uY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24tYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRcdGdldF9iZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpbmctb2ZmJyk7XHJcblx0XHRcdFx0Z2V0X2JlbGwuY2xhc3NMaXN0LmFkZCgnZGluZy1vbicpO1xyXG5cclxuXHRcdH0gZWxzZSBpZiAoY2hlY2tfYWN0aXZlID09IHRydWUpIHtcclxuXHRcdFx0XHRnZXRfZ3JvdXBfbm90aWZpY2FjaW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3Bkb3duLWFjdGl2ZScpO1xyXG5cdFx0XHRcdGdldF9ncm91cF9ub3RpZmljYWNpb24uY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24tZGlzYWJsZScpO1xyXG5cdFx0XHRcdGdldF9iZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpbmctb24nKTtcclxuXHRcdFx0XHRnZXRfYmVsbC5jbGFzc0xpc3QuYWRkKCdkaW5nLW9mZicpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHR9XHJcblxyXG59KSk7XHJcblxyXG4vL0NIRUNLIENPTlRBSU4gTk9USUZJQ0FDSU9OU1xyXG5cclxuLy8gZ3JvdXBfbm90aWZpY2FjaW9uXHJcblxyXG5cclxuXHJcblxyXG4vLyA9PT09PT09PT09PT09PVxyXG4vLyBDTE9TRSBBTEVSVFNcclxuLy8gPT09PT09PT09PT09PT1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlQWxlcnQoZXZlbnQpIHtcclxuXHRcdGxldCBnZXRfcGFyZW50ID0gZXZlbnQucGFyZW50Tm9kZTtcclxuXHRcdGdldF9wYXJlbnQucmVtb3ZlKCk7XHJcbn1cclxuXHJcbmZvciAodmFyIGkgPSAwOyBpIDwgYnRuX2FsZXJ0Q2xvc2UubGVuZ3RoOyBpKyspIHtcclxuXHRcdGJ0bl9hbGVydENsb3NlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0Y2xvc2VBbGVydCh0aGlzKTtcclxuXHRcdH0pKVxyXG59XHJcblxyXG5cclxuXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyBTRVQgQ0hBUlRTXHJcbi8vIC0tLS0tLS0tLS0tXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxubGV0IGJ1dHRvbk1vbnRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldE1vbnRoJyk7XHJcbmxldCBidXR0b25XZWVrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldFdlZWsnKTtcclxubGV0IGJ1dHRvbkRheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXREYXknKTtcclxubGV0IGJ1dHRvbkhvdXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0SG91cicpO1xyXG5cclxuXHJcbmxldCBsaW5lX21vbnRobHkgPSBbNTAwLCAxNTAwLCAxMDAwLCAxNzUwLCAyMjUwLCAxNzUwLCAyMDAwLCAxNTAwLCAyMDAwLCAyNTAwLCAyMDAwLCAyNTAwXTtcclxubGV0IGxpbmVfd2Vla2x5ID0gWzYwMCwgMTQwMCwgNDAwLCAxMjUwLCAxNDUwLCAxNTAwLCAxOTAwLCAxMjAwLCAxNTAwLCAyNDAwLCAxMDAsIDE0MDBdO1xyXG5sZXQgbGluZV9kYWlseSA9IFs5MDAsIDE1MDAsIDIwMCwgODUwLCAxNTUwLCAxMzUwLCAxOTAwLCA4MDAsIDgwMCwgNDUwLCA2MDAsIDkwMF07XHJcbmxldCBsaW5lX2hvdXJseSA9IFsyMDAsIDEyMDAsIDcwMCwgMTUwLCA1NjAsIDExNTAsIDEyMDAsIDcwMCwgNTAwLCA1MDAsIDgwMCwgNzAwXTtcclxuXHJcbmxldCBjb25maWcgPSB7XHJcblx0XHR0eXBlOiAnbGluZScsXHJcblx0XHRkYXRhOiB7XHJcblx0XHRcdFx0bGFiZWxzOiBbXCIxNi0yMlwiLCBcIjIzLTI5XCIsIFwiMzAtNVwiLCBcIjYtMTJcIiwgXCIxMy0xOVwiLCBcIjI3LTNcIiwgXCI0LTEwXCIsIFwiMTEtMTdcIiwgXCIxOC0yNFwiLCBcIjI1LTMxXCJdLFxyXG5cdFx0XHRcdGRhdGFzZXRzOiBbe1xyXG5cdFx0XHRcdFx0XHRsYWJlbDogXCJNb250aGx5XCIsXHJcblx0XHRcdFx0XHRcdGJvcmRlckNvbG9yOiBcIiM4MGI2ZjRcIixcclxuXHRcdFx0XHRcdFx0cG9pbnRCb3JkZXJDb2xvcjogXCIjODBiNmY0XCIsXHJcblx0XHRcdFx0XHRcdHBvaW50QmFja2dyb3VuZENvbG9yOiBcIiM4MGI2ZjRcIixcclxuXHRcdFx0XHRcdFx0cG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogXCIjODBiNmY0XCIsXHJcblx0XHRcdFx0XHRcdHBvaW50SG92ZXJCb3JkZXJDb2xvcjogXCIjODBiNmY0XCIsXHJcblx0XHRcdFx0XHRcdHBvaW50Qm9yZGVyV2lkdGg6IDUsXHJcblx0XHRcdFx0XHRcdHBvaW50SG92ZXJSYWRpdXM6IDUsXHJcblx0XHRcdFx0XHRcdHBvaW50SG92ZXJCb3JkZXJXaWR0aDogMyxcclxuXHRcdFx0XHRcdFx0cG9pbnRSYWRpdXM6IDUsXHJcblx0XHRcdFx0XHRcdGZpbGw6IHRydWUsXHJcblx0XHRcdFx0XHRcdGJvcmRlcldpZHRoOiAyLFxyXG5cdFx0XHRcdFx0XHRkYXRhOiBsaW5lX21vbnRobHlcclxuXHRcdFx0XHR9XVxyXG5cdFx0fSxcclxuXHRcdC8vRGF5XHJcblxyXG5cdFx0Ly9cclxuXHRcdG9wdGlvbnM6IHtcclxuXHJcblx0XHRcdFx0bGVnZW5kOiB7XHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBcInRvcFwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR0aXRsZToge1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogJ3RvcCcsXHJcblx0XHRcdFx0XHRcdHRleHQ6ICdUcmFmZmljJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0YXNwZWN0UmF0aW86IHBpeGVsUmF0aW8sXHJcblx0XHRcdFx0c2NhbGVzOiB7XHJcblx0XHRcdFx0XHRcdHlBeGVzOiBbe1xyXG5cdFx0XHRcdFx0XHRcdFx0dGlja3M6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmb250Q29sb3I6IFwicmdiYSgwLDAsMCwwLjUpXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFN0eWxlOiBcImJvbGRcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRiZWdpbkF0WmVybzogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtYXhUaWNrc0xpbWl0OiAxNSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBzdGVwU2l6ZTogMC41LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDIwXHJcblx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0Z3JpZExpbmVzOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZHJhd1RpY2tzOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IHRydWVcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fV0sXHJcblx0XHRcdFx0XHRcdHhBeGVzOiBbe1xyXG5cdFx0XHRcdFx0XHRcdFx0Z3JpZExpbmVzOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0emVyb0xpbmVDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRyYXdUaWNrczogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiB0cnVlXHJcblx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0dGlja3M6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAxMCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmb250Q29sb3I6IFwicmdiYSgwLDAsMCwwLjUpXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFN0eWxlOiBcImJvbGRcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtYXhUaWNrc0xpbWl0OiAxNVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fV1cclxuXHRcdFx0XHR9XHJcblx0XHR9XHJcbn07XHJcblxyXG5cclxuLy8gPT09PT09PT09PT09PT1cclxuLy8gTElORSBDSEFSVFxyXG4vLyA9PT09PT09PT09PT09PVxyXG5sZXQgbXlDaGFydCA9IG5ldyBDaGFydCh3aWRnZXRUcmFmZmljLCBjb25maWcpO1xyXG5cclxuYnV0dG9uTW9udGguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cclxuXHRcdGNvbmZpZy5kYXRhLmRhdGFzZXRzWzBdLmxhYmVsID0gJ01vbnRobHknO1xyXG5cdFx0Y29uZmlnLmRhdGEuZGF0YXNldHNbMF0uZGF0YSA9IGxpbmVfbW9udGhseTtcclxuXHRcdG15Q2hhcnQudXBkYXRlKCk7XHJcbn0pKVxyXG5cclxuYnV0dG9uV2Vlay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChmdW5jdGlvbihldmVudCkge1xyXG5cdFx0LyogQWN0IG9uIHRoZSBldmVudCAqL1xyXG5cdFx0Y29uZmlnLmRhdGEuZGF0YXNldHNbMF0ubGFiZWwgPSAnV2Vla2x5JztcclxuXHRcdGNvbmZpZy5kYXRhLmRhdGFzZXRzWzBdLmRhdGEgPSBsaW5lX3dlZWtseTtcclxuXHRcdG15Q2hhcnQudXBkYXRlKCk7XHJcbn0pKVxyXG5cclxuYnV0dG9uRGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHQvKiBBY3Qgb24gdGhlIGV2ZW50ICovXHJcblx0XHRjb25maWcuZGF0YS5kYXRhc2V0c1swXS5sYWJlbCA9ICdEYWlseSc7XHJcblx0XHRjb25maWcuZGF0YS5kYXRhc2V0c1swXS5kYXRhID0gbGluZV9kYWlseTtcclxuXHRcdG15Q2hhcnQudXBkYXRlKCk7XHJcbn0pKVxyXG5cclxuYnV0dG9uSG91ci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChmdW5jdGlvbihldmVudCkge1xyXG5cdFx0LyogQWN0IG9uIHRoZSBldmVudCAqL1xyXG5cdFx0Y29uZmlnLmRhdGEuZGF0YXNldHNbMF0ubGFiZWwgPSAnSG91cmx5JztcclxuXHRcdGNvbmZpZy5kYXRhLmRhdGFzZXRzWzBdLmRhdGEgPSBsaW5lX2hvdXJseTtcclxuXHRcdG15Q2hhcnQudXBkYXRlKCk7XHJcbn0pKVxyXG5cclxuXHJcbi8vID09PT09PT09PT09PT09XHJcbi8vIERBSUxZIENIQVJUXHJcbi8vID09PT09PT09PT09PT09XHJcbmxldCBkYWlseUNoYXJ0ID0gbmV3IENoYXJ0KHdpZGdldERhaWx5LCB7XHJcblx0XHR0eXBlOiAnYmFyJyxcclxuXHRcdGN1cnZhdHVyZTogMC4yMCxcclxuXHRcdGRhdGE6IHtcclxuXHRcdFx0XHRsYWJlbHM6IFtcIlNcIiwgXCJNXCIsIFwiVFwiLCBcIldcIiwgXCJUXCIsIFwiRlwiLCBcIlNcIl0sXHJcblx0XHRcdFx0ZGF0YXNldHM6IFt7XHJcblx0XHRcdFx0XHRcdGxhYmVsOiBcIlwiLFxyXG5cdFx0XHRcdFx0XHRib3JkZXJDb2xvcjogXCIjNzM3N2JmXCIsXHJcblx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogXCI3cHhcIixcclxuXHRcdFx0XHRcdFx0cG9pbnRCb3JkZXJXaWR0aDogNSxcclxuXHRcdFx0XHRcdFx0cG9pbnRIb3ZlclJhZGl1czogNSxcclxuXHRcdFx0XHRcdFx0cG9pbnRSYWRpdXM6IDUsXHJcblx0XHRcdFx0XHRcdGZpbGw6IHRydWUsXHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCIjNzM3N2JmXCIsXHJcblx0XHRcdFx0XHRcdGJvcmRlcldpZHRoOiAyLFxyXG5cdFx0XHRcdFx0XHRkYXRhOiBbNTAsIDc1LCAxNTAsIDEwMCwgMjAwLCAxNzUsIDc1XVxyXG5cdFx0XHRcdH1dXHJcblx0XHR9LFxyXG5cclxuXHRcdG9wdGlvbnM6IHtcclxuXHRcdFx0XHR0aXRsZToge1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiB0cnVlLFxyXG5cdFx0XHRcdFx0XHR0ZXh0OiAnRGFpbHknXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRsZWdlbmQ6IHtcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IFwidG9wXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGFzcGVjdFJhdGlvOiBwaXhlbFJhdGlvXzYsXHJcblx0XHRcdFx0c2NhbGVzOiB7XHJcblx0XHRcdFx0XHRcdHlBeGVzOiBbe1xyXG5cdFx0XHRcdFx0XHRcdFx0dGlja3M6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmb250Q29sb3I6IFwicmdiYSgwLDAsMCwwLjUpXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFN0eWxlOiBcImJvbGRcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRiZWdpbkF0WmVybzogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtYXhUaWNrc0xpbWl0OiA1LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIHN0ZXBTaXplOiAwLjUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogMjBcclxuXHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRncmlkTGluZXM6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkcmF3VGlja3M6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IHRydWVcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fV0sXHJcblx0XHRcdFx0XHRcdHhBeGVzOiBbe1xyXG5cdFx0XHRcdFx0XHRcdFx0Z3JpZExpbmVzOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0emVyb0xpbmVDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRyYXdUaWNrczogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiB0cnVlXHJcblx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0dGlja3M6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAxMCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmb250Q29sb3I6IFwicmdiYSgwLDAsMCwwLjUpXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFN0eWxlOiBcImJvbGRcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtYXhUaWNrc0xpbWl0OiAxNVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fV1cclxuXHRcdFx0XHR9XHJcblx0XHR9XHJcbn0pO1xyXG5cclxuXHJcbi8vID09PT09PT09PT09PT09XHJcbi8vIE1PQklMRSBDSEFSVFxyXG4vLyA9PT09PT09PT09PT09PVxyXG5cclxubGV0IG1vYmlsZUNoYXJ0ID0gbmV3IENoYXJ0KHdpZGdldE1vYmlsZSwge1xyXG5cdFx0dHlwZTogJ2RvdWdobnV0JyxcclxuXHRcdGRhdGE6IHtcclxuXHRcdFx0XHRsYWJlbHM6IFtcIlBob25lc1wiLCBcIlRhYmxldHNcIiwgXCJEZXNrdG9wXCJdLFxyXG5cdFx0XHRcdGRhdGFzZXRzOiBbe1xyXG5cdFx0XHRcdFx0XHRsYWJlbDogXCJEYXRhXCIsXHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogW1wiIzg1ZGI4MFwiLCBcIiM0Yzk2ODFcIiwgXCIjNzQ3N2JmXCJdLFxyXG5cdFx0XHRcdFx0XHRwb2ludFJhZGl1czogNSxcclxuXHRcdFx0XHRcdFx0ZmlsbDogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0Ym9yZGVyV2lkdGg6IDIsXHJcblx0XHRcdFx0XHRcdGRhdGE6IFsxNSwgMTUsIDcwXVxyXG5cdFx0XHRcdH1dXHJcblx0XHR9LFxyXG5cclxuXHRcdG9wdGlvbnM6IHtcclxuXHRcdFx0XHR0aXRsZToge1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiB0cnVlLFxyXG5cdFx0XHRcdFx0XHR0ZXh0OiAnTW9iaWxlIFVzZXJzJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0bGVnZW5kOiB7XHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBcInJpZ2h0XCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGFzcGVjdFJhdGlvOiBwaXhlbFJhdGlvXzYsXHJcblxyXG5cdFx0fVxyXG59KTtcclxuXHJcblxyXG5cclxuLy9TRVQgUFJFVkVOVCBERUZBVUxUXHJcblxyXG52YXIgY2hlY2tNZXNzYWdlRm9ybSA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRhbGVydChcIk1lc3NhZ2UgU2VudCFcIik7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG59O1xyXG5cclxuLy8geW91ciBmb3JtXHJcbnZhciBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyTWVzc2FnZVwiKTtcclxuXHJcbi8vIGF0dGFjaCBldmVudCBsaXN0ZW5lclxyXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgY2hlY2tNZXNzYWdlRm9ybSwgdHJ1ZSk7XHJcblxyXG5cclxuXHJcbi8vU0VUIEFVVE9NUExFVEVcclxuXHJcblxyXG5mdW5jdGlvbiBhdXRvY29tcGxldGUoaW5wLCBhcnIpIHtcclxuXHRcdC8qdGhlIGF1dG9jb21wbGV0ZSBmdW5jdGlvbiB0YWtlcyB0d28gYXJndW1lbnRzLFxyXG5cdFx0dGhlIHRleHQgZmllbGQgZWxlbWVudCBhbmQgYW4gYXJyYXkgb2YgcG9zc2libGUgYXV0b2NvbXBsZXRlZCB2YWx1ZXM6Ki9cclxuXHRcdHZhciBjdXJyZW50Rm9jdXM7XHJcblx0XHQvKmV4ZWN1dGUgYSBmdW5jdGlvbiB3aGVuIHNvbWVvbmUgd3JpdGVzIGluIHRoZSB0ZXh0IGZpZWxkOiovXHJcblx0XHRpbnAuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHR2YXIgYSwgYiwgaSwgdmFsID0gdGhpcy52YWx1ZTtcclxuXHRcdFx0XHQvKmNsb3NlIGFueSBhbHJlYWR5IG9wZW4gbGlzdHMgb2YgYXV0b2NvbXBsZXRlZCB2YWx1ZXMqL1xyXG5cdFx0XHRcdGNsb3NlQWxsTGlzdHMoKTtcclxuXHRcdFx0XHRpZiAoIXZhbCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGN1cnJlbnRGb2N1cyA9IC0xO1xyXG5cdFx0XHRcdC8qY3JlYXRlIGEgRElWIGVsZW1lbnQgdGhhdCB3aWxsIGNvbnRhaW4gdGhlIGl0ZW1zICh2YWx1ZXMpOiovXHJcblx0XHRcdFx0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XHJcblx0XHRcdFx0YS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0aGlzLmlkICsgXCJhdXRvY29tcGxldGUtbGlzdFwiKTtcclxuXHRcdFx0XHRhLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYXV0b2NvbXBsZXRlLWl0ZW1zXCIpO1xyXG5cdFx0XHRcdC8qYXBwZW5kIHRoZSBESVYgZWxlbWVudCBhcyBhIGNoaWxkIG9mIHRoZSBhdXRvY29tcGxldGUgY29udGFpbmVyOiovXHJcblx0XHRcdFx0dGhpcy5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGEpO1xyXG5cdFx0XHRcdC8qZm9yIGVhY2ggaXRlbSBpbiB0aGUgYXJyYXkuLi4qL1xyXG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0LypjaGVjayBpZiB0aGUgaXRlbSBzdGFydHMgd2l0aCB0aGUgc2FtZSBsZXR0ZXJzIGFzIHRoZSB0ZXh0IGZpZWxkIHZhbHVlOiovXHJcblx0XHRcdFx0XHRcdGlmIChhcnJbaV0uc3Vic3RyKDAsIHZhbC5sZW5ndGgpLnRvVXBwZXJDYXNlKCkgPT0gdmFsLnRvVXBwZXJDYXNlKCkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdC8qY3JlYXRlIGEgRElWIGVsZW1lbnQgZm9yIGVhY2ggbWF0Y2hpbmcgZWxlbWVudDoqL1xyXG5cdFx0XHRcdFx0XHRcdFx0YiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XHJcblx0XHRcdFx0XHRcdFx0XHQvKm1ha2UgdGhlIG1hdGNoaW5nIGxldHRlcnMgYm9sZDoqL1xyXG5cdFx0XHRcdFx0XHRcdFx0Yi5pbm5lckhUTUwgPSBcIjxzdHJvbmc+XCIgKyBhcnJbaV0uc3Vic3RyKDAsIHZhbC5sZW5ndGgpICsgXCI8L3N0cm9uZz5cIjtcclxuXHRcdFx0XHRcdFx0XHRcdGIuaW5uZXJIVE1MICs9IGFycltpXS5zdWJzdHIodmFsLmxlbmd0aCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvKmluc2VydCBhIGlucHV0IGZpZWxkIHRoYXQgd2lsbCBob2xkIHRoZSBjdXJyZW50IGFycmF5IGl0ZW0ncyB2YWx1ZToqL1xyXG5cdFx0XHRcdFx0XHRcdFx0Yi5pbm5lckhUTUwgKz0gXCI8aW5wdXQgdHlwZT0naGlkZGVuJyB2YWx1ZT0nXCIgKyBhcnJbaV0gKyBcIic+XCI7XHJcblx0XHRcdFx0XHRcdFx0XHQvKmV4ZWN1dGUgYSBmdW5jdGlvbiB3aGVuIHNvbWVvbmUgY2xpY2tzIG9uIHRoZSBpdGVtIHZhbHVlIChESVYgZWxlbWVudCk6Ki9cclxuXHRcdFx0XHRcdFx0XHRcdGIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvKmluc2VydCB0aGUgdmFsdWUgZm9yIHRoZSBhdXRvY29tcGxldGUgdGV4dCBmaWVsZDoqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlucC52YWx1ZSA9IHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKVswXS52YWx1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvKmNsb3NlIHRoZSBsaXN0IG9mIGF1dG9jb21wbGV0ZWQgdmFsdWVzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdChvciBhbnkgb3RoZXIgb3BlbiBsaXN0cyBvZiBhdXRvY29tcGxldGVkIHZhbHVlczoqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsb3NlQWxsTGlzdHMoKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0YS5hcHBlbmRDaGlsZChiKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0LypleGVjdXRlIGEgZnVuY3Rpb24gcHJlc3NlcyBhIGtleSBvbiB0aGUga2V5Ym9hcmQ6Ki9cclxuXHRcdGlucC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0dmFyIHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkICsgXCJhdXRvY29tcGxldGUtbGlzdFwiKTtcclxuXHRcdFx0XHRpZiAoeCkgeCA9IHguZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJkaXZcIik7XHJcblx0XHRcdFx0aWYgKGUua2V5Q29kZSA9PSA0MCkge1xyXG5cdFx0XHRcdFx0XHQvKklmIHRoZSBhcnJvdyBET1dOIGtleSBpcyBwcmVzc2VkLFxyXG5cdFx0XHRcdFx0XHRpbmNyZWFzZSB0aGUgY3VycmVudEZvY3VzIHZhcmlhYmxlOiovXHJcblx0XHRcdFx0XHRcdGN1cnJlbnRGb2N1cysrO1xyXG5cdFx0XHRcdFx0XHQvKmFuZCBhbmQgbWFrZSB0aGUgY3VycmVudCBpdGVtIG1vcmUgdmlzaWJsZToqL1xyXG5cdFx0XHRcdFx0XHRhZGRBY3RpdmUoeCk7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChlLmtleUNvZGUgPT0gMzgpIHsgLy91cFxyXG5cdFx0XHRcdFx0XHQvKklmIHRoZSBhcnJvdyBVUCBrZXkgaXMgcHJlc3NlZCxcclxuXHRcdFx0XHRcdFx0ZGVjcmVhc2UgdGhlIGN1cnJlbnRGb2N1cyB2YXJpYWJsZToqL1xyXG5cdFx0XHRcdFx0XHRjdXJyZW50Rm9jdXMtLTtcclxuXHRcdFx0XHRcdFx0LyphbmQgYW5kIG1ha2UgdGhlIGN1cnJlbnQgaXRlbSBtb3JlIHZpc2libGU6Ki9cclxuXHRcdFx0XHRcdFx0YWRkQWN0aXZlKHgpO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoZS5rZXlDb2RlID09IDEzKSB7XHJcblx0XHRcdFx0XHRcdC8qSWYgdGhlIEVOVEVSIGtleSBpcyBwcmVzc2VkLCBwcmV2ZW50IHRoZSBmb3JtIGZyb20gYmVpbmcgc3VibWl0dGVkLCovXHJcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnRGb2N1cyA+IC0xKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvKmFuZCBzaW11bGF0ZSBhIGNsaWNrIG9uIHRoZSBcImFjdGl2ZVwiIGl0ZW06Ki9cclxuXHRcdFx0XHRcdFx0XHRcdGlmICh4KSB4W2N1cnJlbnRGb2N1c10uY2xpY2soKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdGZ1bmN0aW9uIGFkZEFjdGl2ZSh4KSB7XHJcblx0XHRcdFx0LyphIGZ1bmN0aW9uIHRvIGNsYXNzaWZ5IGFuIGl0ZW0gYXMgXCJhY3RpdmVcIjoqL1xyXG5cdFx0XHRcdGlmICgheCkgcmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdC8qc3RhcnQgYnkgcmVtb3ZpbmcgdGhlIFwiYWN0aXZlXCIgY2xhc3Mgb24gYWxsIGl0ZW1zOiovXHJcblx0XHRcdFx0cmVtb3ZlQWN0aXZlKHgpO1xyXG5cdFx0XHRcdGlmIChjdXJyZW50Rm9jdXMgPj0geC5sZW5ndGgpIGN1cnJlbnRGb2N1cyA9IDA7XHJcblx0XHRcdFx0aWYgKGN1cnJlbnRGb2N1cyA8IDApIGN1cnJlbnRGb2N1cyA9ICh4Lmxlbmd0aCAtIDEpO1xyXG5cdFx0XHRcdC8qYWRkIGNsYXNzIFwiYXV0b2NvbXBsZXRlLWFjdGl2ZVwiOiovXHJcblx0XHRcdFx0eFtjdXJyZW50Rm9jdXNdLmNsYXNzTGlzdC5hZGQoXCJhdXRvY29tcGxldGUtYWN0aXZlXCIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHJlbW92ZUFjdGl2ZSh4KSB7XHJcblx0XHRcdFx0LyphIGZ1bmN0aW9uIHRvIHJlbW92ZSB0aGUgXCJhY3RpdmVcIiBjbGFzcyBmcm9tIGFsbCBhdXRvY29tcGxldGUgaXRlbXM6Ki9cclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHgubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0eFtpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYXV0b2NvbXBsZXRlLWFjdGl2ZVwiKTtcclxuXHRcdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gY2xvc2VBbGxMaXN0cyhlbG1udCkge1xyXG5cdFx0XHRcdC8qY2xvc2UgYWxsIGF1dG9jb21wbGV0ZSBsaXN0cyBpbiB0aGUgZG9jdW1lbnQsXHJcblx0XHRcdFx0ZXhjZXB0IHRoZSBvbmUgcGFzc2VkIGFzIGFuIGFyZ3VtZW50OiovXHJcblx0XHRcdFx0dmFyIHggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYXV0b2NvbXBsZXRlLWl0ZW1zXCIpO1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0XHRpZiAoZWxtbnQgIT0geFtpXSAmJiBlbG1udCAhPSBpbnApIHtcclxuXHRcdFx0XHRcdFx0XHRcdHhbaV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh4W2ldKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC8qZXhlY3V0ZSBhIGZ1bmN0aW9uIHdoZW4gc29tZW9uZSBjbGlja3MgaW4gdGhlIGRvY3VtZW50OiovXHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdGNsb3NlQWxsTGlzdHMoZS50YXJnZXQpO1xyXG5cdFx0fSk7XHJcbn1cclxuXHJcbi8qQW4gYXJyYXkgY29udGFpbmluZyBhbGwgdGhlIGNvdW50cnkgbmFtZXMgaW4gdGhlIHdvcmxkOiovXHJcbnZhciBjb3VudHJpZXMgPSBbXCJWaWN0b3JpYSBDaGFtYmVyc1wiLCBcIkRheWxlIEJ5cmRcIiwgXCJEYXduIFdvb2RcIiwgXCJEYW4gT2xpdmVyXCJdO1xyXG5cclxuLyppbml0aWF0ZSB0aGUgYXV0b2NvbXBsZXRlIGZ1bmN0aW9uIG9uIHRoZSBcIm15SW5wdXRcIiBlbGVtZW50LCBhbmQgcGFzcyBhbG9uZyB0aGUgY291bnRyaWVzIGFycmF5IGFzIHBvc3NpYmxlIGF1dG9jb21wbGV0ZSB2YWx1ZXM6Ki9cclxuYXV0b2NvbXBsZXRlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoTWVtYmVyXCIpLCBjb3VudHJpZXMpO1xyXG5cclxuXHJcbi8vTE9DQUwgU1RPUkFHRVxyXG5cclxubGV0IHNhdmVfZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlFbWFpbFN3aXRjaCcpO1xyXG5sZXQgc2F2ZV9wcm9maWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215b25vZmZzd2l0Y2gnKTtcclxuXHJcbmxldCBzYXZlX3NldHRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZVNldHRpbmdzJyk7XHJcbmxldCByZXNldF9zZXR0aW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbFNldHRpbmdzJyk7XHJcblxyXG4vLyBsZXQgdGltZXpvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZXpvbmUnKTtcclxubGV0IHRpbWV6b25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aW1lem9uZVwiKTtcclxuXHJcblxyXG5zYXZlX3NldHRpbmcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cclxuXHRcdC8vIHZhciBjaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUVtYWlsU3dpdGNoJyk7XHJcblx0XHRpZiAoc2F2ZV9lbWFpbC5jaGVja2VkID09IHRydWUpIHtcclxuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlFbWFpbFN3aXRjaCcsIHNhdmVfZW1haWwuY2hlY2tlZCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChzYXZlX2VtYWlsLmNoZWNrZWQgPT0gZmFsc2UpIHtcclxuXHRcdFx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbXlFbWFpbFN3aXRjaCcpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoc2F2ZV9wcm9maWxlLmNoZWNrZWQgPT0gdHJ1ZSkge1xyXG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteW9ub2Zmc3dpdGNoJywgc2F2ZV9wcm9maWxlLmNoZWNrZWQpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoc2F2ZV9wcm9maWxlLmNoZWNrZWQgPT0gZmFsc2UpIHtcclxuXHRcdFx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbXlvbm9mZnN3aXRjaCcpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHQvL1NlbGVjdFxyXG5cdFx0bGV0IGdldF90aW1lem9uZV92YWx1ZSA9IHRpbWV6b25lLnZhbHVlO1xyXG5cclxuXHRcdGlmIChnZXRfdGltZXpvbmVfdmFsdWUgPT0gXCJcIikge1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RpbWV6b25lJywgZ2V0X3RpbWV6b25lX3ZhbHVlKVxyXG5cdFx0fVxyXG5cclxuXHJcblxyXG5cclxuXHRcdC8vIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcmVmJykgPT0gTlVMTCl7XHJcblxyXG5cdFx0Ly8gfSBlbHNlIHtcclxuXHRcdC8vICAgdmFyIHByZWYgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJlZicpO1xyXG5cdFx0Ly8gICBjbGVhclNlbGVjdGVkKCk7XHJcblx0XHQvLyAgIC8vc2V0IHRoZSBzZWxlY3RlZCBzdGF0ZSB0byB0cnVlIG9uIHRoZSBvcHRpb24gbG9jYWxTdG9yYWdlIHJlbWVtYmVyc1xyXG5cdFx0Ly8gICB0aW1lem9uZS5maW5kKCcjJyArIHByZWYpLnByb3AoJ3NlbGVjdGVkJywgdHJ1ZSk7XHJcblxyXG5cdFx0Ly8gfVxyXG5cclxuXHRcdC8vIHZhciBzZXRQcmVmZXJlbmNlID0gZnVuY3Rpb24oKXtcclxuXHRcdC8vICAgLy9yZW1lbWJlciB0aGUgSUQgb2YgdGhlIG9wdGlvbiB0aGUgdXNlciBzZWxlY3RlZFxyXG5cdFx0Ly8gICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJlZicsIHRpbWV6b25lLmZpbmQoJzpzZWxlY3RlZCcpLmF0dHIoJ2lkJykpO1xyXG5cdFx0Ly8gfTtcclxuXHJcblxyXG5cclxuXHJcblx0XHRhbGVydCgnU2F2ZWQhJyk7XHJcblxyXG5cdFx0Ly8gY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcclxufSkpXHJcblxyXG5zYXZlX2VtYWlsLmNoZWNrZWQgPSBsb2NhbFN0b3JhZ2UubXlFbWFpbFN3aXRjaDtcclxuc2F2ZV9wcm9maWxlLmNoZWNrZWQgPSBsb2NhbFN0b3JhZ2UubXlvbm9mZnN3aXRjaDtcclxudGltZXpvbmUudmFsdWUgPSBsb2NhbFN0b3JhZ2UudGltZXpvbmU7XHJcblxyXG4vLyB0aW1lem9uZS52YWx1ZSA9ICdHVE0tNCc7XHJcblxyXG5yZXNldF9zZXR0aW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHQvKiBBY3Qgb24gdGhlIGV2ZW50ICovXHJcblxyXG5cdFx0bG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcblx0XHRhbGVydCgnQ2xlYXIgbG9jYWxTdG9yYWdlJyk7XHJcbn0pKSJdfQ==
