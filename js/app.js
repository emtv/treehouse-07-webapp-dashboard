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
				responsive: true,
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
				responsive: true,
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
				aspectRatio: pixelRatio_6,
				responsive: true

		}
});

//SET PREVENT DEFAULT

var checkMessageForm = function checkMessageForm(event) {

		var get_textarea = document.getElementById('textarea');

		if (get_textarea.value == "") {
				event.preventDefault();
				alert('Please, type some message!');
		} else {
				alert("Message Sent!");
		}

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
var countries = ["Victoria Chambers", "Dayle Byrd", "Dawn Wood", "Dan Oliver", "Megan Chambers"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcm9qZWN0cy91bml0LTA3LXdlYmFwcC1kYXNoYm9hcmQvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLFFBQVEsR0FBUixDQUFZLHdDQUFaOztBQUVBO0FBQ0EsSUFBSSxnQkFBZ0IsU0FBUyxjQUFULENBQXdCLFNBQXhCLENBQXBCO0FBQUEsSUFDRSxjQUFjLFNBQVMsY0FBVCxDQUF3QixPQUF4QixDQURoQjtBQUFBLElBRUUsZUFBZSxTQUFTLGNBQVQsQ0FBd0IsUUFBeEIsQ0FGakI7QUFBQSxJQUdFLGVBQWUsU0FBUyxjQUFULENBQXdCLFFBQXhCLENBSGpCO0FBQUEsSUFJRSxnQkFBZ0IsU0FBUyxjQUFULENBQXdCLFNBQXhCLENBSmxCO0FBQUEsSUFLRSxpQkFBaUIsU0FBUyxjQUFULENBQXdCLFVBQXhCLENBTG5COztBQU9BLElBQUksaUJBQWlCLFNBQVMsZ0JBQVQsQ0FBMEIsY0FBMUIsQ0FBckI7QUFDQSxJQUFJLGdCQUFnQixTQUFTLGdCQUFULENBQTBCLGFBQTFCLENBQXBCO0FBQ0EsSUFBSSxXQUFXLFNBQVMsY0FBVCxDQUF3QixNQUF4QixDQUFmO0FBQ0EsSUFBSSxlQUFlLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FBbkI7QUFDQSxJQUFJLHlCQUF5QixTQUFTLGNBQVQsQ0FBd0Isb0JBQXhCLENBQTdCOztBQUdBOztBQUVBLElBQUksYUFBYSxPQUFPLFVBQVAsQ0FBa0IscUJBQWxCLENBQWpCOztBQUVBLElBQUksdUJBQUo7O0FBRUEsSUFBSSxtQkFBSjtBQUNBLElBQUkscUJBQUo7O0FBRUEsSUFBSSxXQUFXLE9BQWYsRUFBd0I7QUFDdEI7QUFDQSxlQUFhLENBQWI7QUFDQSxpQkFBZSxDQUFmO0FBRUQsQ0FMRCxNQUtPO0FBQ0w7QUFDQSxlQUFhLENBQWI7QUFDQSxpQkFBZSxDQUFmO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNB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U0FBUyxLQUFsQzs7QUFFQSxNQUFJLHNCQUFzQixFQUExQixFQUE4QixDQUU3QixDQUZELE1BRU87QUFDTCxpQkFBYSxPQUFiLENBQXFCLFVBQXJCLEVBQWlDLGtCQUFqQztBQUNEOztBQUtEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUtBLFFBQU0sUUFBTjs7QUFFQTtBQUNELENBeEREOztBQTBEQSxXQUFXLE9BQVgsR0FBcUIsYUFBYSxhQUFsQztBQUNBLGFBQWEsT0FBYixHQUF1QixhQUFhLGFBQXBDO0FBQ0EsU0FBUyxLQUFULEdBQWlCLGFBQWEsUUFBOUI7O0FBRUE7O0FBRUEsY0FBYyxnQkFBZCxDQUErQixPQUEvQixFQUF5QyxVQUFTLEtBQVQsRUFBZ0I7QUFDdkQ7O0FBRUEsZUFBYSxLQUFiO0FBQ0EsUUFBTSxvQkFBTjtBQUNELENBTEQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfXJldHVybiBlfSkoKSIsImNvbnNvbGUubG9nKCdNYWRlIHdpdGggbG92ZSBhbmQgZnVsbCBDb2RlISBieSBARW1UdicpO1xyXG5cclxuLy9TZXQgdmFyaWFibGVzXHJcbmxldCB3aWRnZXRUcmFmZmljID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYWZmaWMnKSxcclxuXHRcdHdpZGdldERhaWx5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhaWx5JyksXHJcblx0XHR3aWRnZXRNb2JpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9iaWxlJyksXHJcblx0XHR3aWRnZXRTb2NpYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc29jaWFsJyksXHJcblx0XHR3aWRnZXRNZW1iZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbWJlcnMnKSxcclxuXHRcdHdpZGdldFNldHRpbmdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzJyk7XHJcblxyXG5sZXQgYnRuX2FsZXJ0Q2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWxlcnQtY2xvc2UnKTtcclxubGV0IGJ0bl9iZWxsQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmVsbC1jbG9zZScpO1xyXG5sZXQgZ2V0X2JlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmVsbCcpO1xyXG5sZXQgZ2V0X2Ryb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLWNvbnRlbnQnKTtcclxubGV0IGdldF9ncm91cF9ub3RpZmljYWNpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JvdXBfbm90aWZpY2FjaW9uJyk7XHJcblxyXG5cclxuLy9WYWxpZGF0aW9uIFBpeGVsIFJhdGlvXHJcblxyXG5sZXQgZ2V0X3NjcmVlbiA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogMTAyNHB4KVwiKTtcclxuXHJcbmxldCBsZWdlbmRQb3NpdGlvbjtcclxuXHJcbmxldCBwaXhlbFJhdGlvO1xyXG5sZXQgcGl4ZWxSYXRpb182O1xyXG5cclxuaWYgKGdldF9zY3JlZW4ubWF0Y2hlcykge1xyXG5cdFx0Ly8gbGVnZW5kUG9zaXRpb24gPSAncmlnaHQnO1xyXG5cdFx0cGl4ZWxSYXRpbyA9IDQ7XHJcblx0XHRwaXhlbFJhdGlvXzYgPSAyO1xyXG5cclxufSBlbHNlIHtcclxuXHRcdC8vIGxlZ2VuZFBvc2l0aW9uID0gJ3RvcCc7XHJcblx0XHRwaXhlbFJhdGlvID0gMTtcclxuXHRcdHBpeGVsUmF0aW9fNiA9IDE7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09XHJcbi8vIE9QRU4gQkVMTFxyXG4vLyA9PT09PT09PT09PT09PVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoZWxlbWVudCwgY2xzKSB7XHJcblx0XHRyZXR1cm4gKCcgJyArIGVsZW1lbnQuY2xhc3NOYW1lICsgJyAnKS5pbmRleE9mKCcgJyArIGNscyArICcgJykgPiAtMTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNoZWNrRW1wdHlOb3RpZmljYXRpb25zKCkge1xyXG5cdFx0Ly8gYWxlcnQoJ3VubycpO1xyXG5cclxuXHRcdGxldCBjaGVja19lbXB0eSA9IGdldF9ncm91cF9ub3RpZmljYWNpb24uY2hpbGROb2Rlcy5sZW5ndGg7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coY2hlY2tfZW1wdHkpO1xyXG5cclxuXHRcdGlmIChjaGVja19lbXB0eSA9PSA0KSB7XHJcblxyXG5cdFx0XHRcdGxldCBzZXRfZW1wdHlfcCA9ICc8cD5BbGwgdXBkYXRlISA9KTwvcD4nO1xyXG5cdFx0XHRcdGxldCBzZXRfZW1wdHlfaXRlbSA9ICc8ZGl2IGNsYXNzPVwiaXRlbV9fdGV4dFwiPicgKyBzZXRfZW1wdHlfcCArICc8L2Rpdj4nO1xyXG5cdFx0XHRcdGxldCBzZXRfZW1wdHlfbm90aWZpY2FjaW9uID0gJzxkaXYgY2xhc3M9XCJub3RpZmljYWNpb24tLWl0ZW1cIj4nICsgc2V0X2VtcHR5X2l0ZW0gKyAnPC9kaXY+JztcclxuXHJcblx0XHRcdFx0Z2V0X2dyb3VwX25vdGlmaWNhY2lvbi5pbm5lckhUTUwgPSBzZXRfZW1wdHlfbm90aWZpY2FjaW9uO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0fVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5mb3IgKHZhciBpID0gMDsgaSA8IGJ0bl9iZWxsQ2xvc2UubGVuZ3RoOyBpKyspIHtcclxuXHRcdGJ0bl9iZWxsQ2xvc2VbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0XHRjaGVja0VtcHR5Tm90aWZpY2F0aW9ucygpO1xyXG5cdFx0fSkpXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5nZXRfYmVsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChmdW5jdGlvbihldmVudCkge1xyXG5cclxuXHRcdC8vIGNoZWNrRW1wdHlOb3RpZmljYXRpb25zKCk7XHJcblxyXG5cclxuXHRcdGxldCBjaGVja19kaXNhYmxlID0gdG9nZ2xlQ2xhc3MoZ2V0X2dyb3VwX25vdGlmaWNhY2lvbiwgJ2Ryb3Bkb3duLWRpc2FibGUnKTtcclxuXHRcdGxldCBjaGVja19hY3RpdmUgPSB0b2dnbGVDbGFzcyhnZXRfZ3JvdXBfbm90aWZpY2FjaW9uLCAnZHJvcGRvd24tYWN0aXZlJyk7XHJcblxyXG5cdFx0Ly8gVGVzdCB0aGUgbWV0aG9kXHJcblx0XHRpZiAoY2hlY2tfZGlzYWJsZSA9PSB0cnVlKSB7XHJcblx0XHRcdFx0Z2V0X2dyb3VwX25vdGlmaWNhY2lvbi5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wZG93bi1kaXNhYmxlJyk7XHJcblx0XHRcdFx0Z2V0X2dyb3VwX25vdGlmaWNhY2lvbi5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bi1hY3RpdmUnKTtcclxuXHJcblx0XHRcdFx0Z2V0X2JlbGwuY2xhc3NMaXN0LnJlbW92ZSgnZGluZy1vZmYnKTtcclxuXHRcdFx0XHRnZXRfYmVsbC5jbGFzc0xpc3QuYWRkKCdkaW5nLW9uJyk7XHJcblxyXG5cdFx0fSBlbHNlIGlmIChjaGVja19hY3RpdmUgPT0gdHJ1ZSkge1xyXG5cdFx0XHRcdGdldF9ncm91cF9ub3RpZmljYWNpb24uY2xhc3NMaXN0LnJlbW92ZSgnZHJvcGRvd24tYWN0aXZlJyk7XHJcblx0XHRcdFx0Z2V0X2dyb3VwX25vdGlmaWNhY2lvbi5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bi1kaXNhYmxlJyk7XHJcblx0XHRcdFx0Z2V0X2JlbGwuY2xhc3NMaXN0LnJlbW92ZSgnZGluZy1vbicpO1xyXG5cdFx0XHRcdGdldF9iZWxsLmNsYXNzTGlzdC5hZGQoJ2Rpbmctb2ZmJyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdH1cclxuXHJcbn0pKTtcclxuXHJcbi8vQ0hFQ0sgQ09OVEFJTiBOT1RJRklDQUNJT05TXHJcblxyXG4vLyBncm91cF9ub3RpZmljYWNpb25cclxuXHJcblxyXG5cclxuXHJcbi8vID09PT09PT09PT09PT09XHJcbi8vIENMT1NFIEFMRVJUU1xyXG4vLyA9PT09PT09PT09PT09PVxyXG5cclxuZnVuY3Rpb24gY2xvc2VBbGVydChldmVudCkge1xyXG5cdFx0bGV0IGdldF9wYXJlbnQgPSBldmVudC5wYXJlbnROb2RlO1xyXG5cdFx0Z2V0X3BhcmVudC5yZW1vdmUoKTtcclxufVxyXG5cclxuZm9yICh2YXIgaSA9IDA7IGkgPCBidG5fYWxlcnRDbG9zZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0YnRuX2FsZXJ0Q2xvc2VbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0XHRjbG9zZUFsZXJ0KHRoaXMpO1xyXG5cdFx0fSkpXHJcbn1cclxuXHJcblxyXG5cclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vIFNFVCBDSEFSVFNcclxuLy8gLS0tLS0tLS0tLS1cclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5sZXQgYnV0dG9uTW9udGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0TW9udGgnKTtcclxubGV0IGJ1dHRvbldlZWsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0V2VlaycpO1xyXG5sZXQgYnV0dG9uRGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldERheScpO1xyXG5sZXQgYnV0dG9uSG91ciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXRIb3VyJyk7XHJcblxyXG5cclxubGV0IGxpbmVfbW9udGhseSA9IFs1MDAsIDE1MDAsIDEwMDAsIDE3NTAsIDIyNTAsIDE3NTAsIDIwMDAsIDE1MDAsIDIwMDAsIDI1MDAsIDIwMDAsIDI1MDBdO1xyXG5sZXQgbGluZV93ZWVrbHkgPSBbNjAwLCAxNDAwLCA0MDAsIDEyNTAsIDE0NTAsIDE1MDAsIDE5MDAsIDEyMDAsIDE1MDAsIDI0MDAsIDEwMCwgMTQwMF07XHJcbmxldCBsaW5lX2RhaWx5ID0gWzkwMCwgMTUwMCwgMjAwLCA4NTAsIDE1NTAsIDEzNTAsIDE5MDAsIDgwMCwgODAwLCA0NTAsIDYwMCwgOTAwXTtcclxubGV0IGxpbmVfaG91cmx5ID0gWzIwMCwgMTIwMCwgNzAwLCAxNTAsIDU2MCwgMTE1MCwgMTIwMCwgNzAwLCA1MDAsIDUwMCwgODAwLCA3MDBdO1xyXG5cclxubGV0IGNvbmZpZyA9IHtcclxuXHRcdHR5cGU6ICdsaW5lJyxcclxuXHRcdGRhdGE6IHtcclxuXHRcdFx0XHRsYWJlbHM6IFtcIjE2LTIyXCIsIFwiMjMtMjlcIiwgXCIzMC01XCIsIFwiNi0xMlwiLCBcIjEzLTE5XCIsIFwiMjctM1wiLCBcIjQtMTBcIiwgXCIxMS0xN1wiLCBcIjE4LTI0XCIsIFwiMjUtMzFcIl0sXHJcblx0XHRcdFx0ZGF0YXNldHM6IFt7XHJcblx0XHRcdFx0XHRcdGxhYmVsOiBcIk1vbnRobHlcIixcclxuXHRcdFx0XHRcdFx0Ym9yZGVyQ29sb3I6IFwiIzgwYjZmNFwiLFxyXG5cdFx0XHRcdFx0XHRwb2ludEJvcmRlckNvbG9yOiBcIiM4MGI2ZjRcIixcclxuXHRcdFx0XHRcdFx0cG9pbnRCYWNrZ3JvdW5kQ29sb3I6IFwiIzgwYjZmNFwiLFxyXG5cdFx0XHRcdFx0XHRwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiBcIiM4MGI2ZjRcIixcclxuXHRcdFx0XHRcdFx0cG9pbnRIb3ZlckJvcmRlckNvbG9yOiBcIiM4MGI2ZjRcIixcclxuXHRcdFx0XHRcdFx0cG9pbnRCb3JkZXJXaWR0aDogNSxcclxuXHRcdFx0XHRcdFx0cG9pbnRIb3ZlclJhZGl1czogNSxcclxuXHRcdFx0XHRcdFx0cG9pbnRIb3ZlckJvcmRlcldpZHRoOiAzLFxyXG5cdFx0XHRcdFx0XHRwb2ludFJhZGl1czogNSxcclxuXHRcdFx0XHRcdFx0ZmlsbDogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0Ym9yZGVyV2lkdGg6IDIsXHJcblx0XHRcdFx0XHRcdGRhdGE6IGxpbmVfbW9udGhseVxyXG5cdFx0XHRcdH1dXHJcblx0XHR9LFxyXG5cdFx0Ly9EYXlcclxuXHJcblx0XHQvL1xyXG5cdFx0b3B0aW9uczoge1xyXG5cclxuXHRcdFx0XHRsZWdlbmQ6IHtcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IFwidG9wXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHRpdGxlOiB7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IHRydWUsXHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiAndG9wJyxcclxuXHRcdFx0XHRcdFx0dGV4dDogJ1RyYWZmaWMnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRhc3BlY3RSYXRpbzogcGl4ZWxSYXRpbyxcclxuXHRcdFx0XHRyZXNwb25zaXZlOiB0cnVlLFxyXG5cdFx0XHRcdHNjYWxlczoge1xyXG5cdFx0XHRcdFx0XHR5QXhlczogW3tcclxuXHRcdFx0XHRcdFx0XHRcdHRpY2tzOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udENvbG9yOiBcInJnYmEoMCwwLDAsMC41KVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnRTdHlsZTogXCJib2xkXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YmVnaW5BdFplcm86IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bWF4VGlja3NMaW1pdDogMTUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gc3RlcFNpemU6IDAuNSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAyMFxyXG5cdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdGdyaWRMaW5lczoge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRyYXdUaWNrczogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiB0cnVlXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1dLFxyXG5cdFx0XHRcdFx0XHR4QXhlczogW3tcclxuXHRcdFx0XHRcdFx0XHRcdGdyaWRMaW5lczoge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHplcm9MaW5lQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkcmF3VGlja3M6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogdHJ1ZVxyXG5cdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdHRpY2tzOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogMTAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udENvbG9yOiBcInJnYmEoMCwwLDAsMC41KVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnRTdHlsZTogXCJib2xkXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bWF4VGlja3NMaW1pdDogMTVcclxuXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1dXHJcblx0XHRcdFx0fVxyXG5cdFx0fVxyXG59O1xyXG5cclxuXHJcbi8vID09PT09PT09PT09PT09XHJcbi8vIExJTkUgQ0hBUlRcclxuLy8gPT09PT09PT09PT09PT1cclxubGV0IG15Q2hhcnQgPSBuZXcgQ2hhcnQod2lkZ2V0VHJhZmZpYywgY29uZmlnKTtcclxuXHJcbmJ1dHRvbk1vbnRoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHQvKiBBY3Qgb24gdGhlIGV2ZW50ICovXHJcblx0XHRjb25maWcuZGF0YS5kYXRhc2V0c1swXS5sYWJlbCA9ICdNb250aGx5JztcclxuXHRcdGNvbmZpZy5kYXRhLmRhdGFzZXRzWzBdLmRhdGEgPSBsaW5lX21vbnRobHk7XHJcblx0XHRteUNoYXJ0LnVwZGF0ZSgpO1xyXG59KSlcclxuXHJcbmJ1dHRvbldlZWsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cclxuXHRcdGNvbmZpZy5kYXRhLmRhdGFzZXRzWzBdLmxhYmVsID0gJ1dlZWtseSc7XHJcblx0XHRjb25maWcuZGF0YS5kYXRhc2V0c1swXS5kYXRhID0gbGluZV93ZWVrbHk7XHJcblx0XHRteUNoYXJ0LnVwZGF0ZSgpO1xyXG59KSlcclxuXHJcbmJ1dHRvbkRheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChmdW5jdGlvbihldmVudCkge1xyXG5cdFx0LyogQWN0IG9uIHRoZSBldmVudCAqL1xyXG5cdFx0Y29uZmlnLmRhdGEuZGF0YXNldHNbMF0ubGFiZWwgPSAnRGFpbHknO1xyXG5cdFx0Y29uZmlnLmRhdGEuZGF0YXNldHNbMF0uZGF0YSA9IGxpbmVfZGFpbHk7XHJcblx0XHRteUNoYXJ0LnVwZGF0ZSgpO1xyXG59KSlcclxuXHJcbmJ1dHRvbkhvdXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cclxuXHRcdGNvbmZpZy5kYXRhLmRhdGFzZXRzWzBdLmxhYmVsID0gJ0hvdXJseSc7XHJcblx0XHRjb25maWcuZGF0YS5kYXRhc2V0c1swXS5kYXRhID0gbGluZV9ob3VybHk7XHJcblx0XHRteUNoYXJ0LnVwZGF0ZSgpO1xyXG59KSlcclxuXHJcblxyXG4vLyA9PT09PT09PT09PT09PVxyXG4vLyBEQUlMWSBDSEFSVFxyXG4vLyA9PT09PT09PT09PT09PVxyXG5sZXQgZGFpbHlDaGFydCA9IG5ldyBDaGFydCh3aWRnZXREYWlseSwge1xyXG5cdFx0dHlwZTogJ2JhcicsXHJcblx0XHRjdXJ2YXR1cmU6IDAuMjAsXHJcblx0XHRkYXRhOiB7XHJcblx0XHRcdFx0bGFiZWxzOiBbXCJTXCIsIFwiTVwiLCBcIlRcIiwgXCJXXCIsIFwiVFwiLCBcIkZcIiwgXCJTXCJdLFxyXG5cdFx0XHRcdGRhdGFzZXRzOiBbe1xyXG5cdFx0XHRcdFx0XHRsYWJlbDogXCJcIixcclxuXHRcdFx0XHRcdFx0Ym9yZGVyQ29sb3I6IFwiIzczNzdiZlwiLFxyXG5cdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IFwiN3B4XCIsXHJcblx0XHRcdFx0XHRcdHBvaW50Qm9yZGVyV2lkdGg6IDUsXHJcblx0XHRcdFx0XHRcdHBvaW50SG92ZXJSYWRpdXM6IDUsXHJcblx0XHRcdFx0XHRcdHBvaW50UmFkaXVzOiA1LFxyXG5cdFx0XHRcdFx0XHRmaWxsOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiIzczNzdiZlwiLFxyXG5cdFx0XHRcdFx0XHRib3JkZXJXaWR0aDogMixcclxuXHRcdFx0XHRcdFx0ZGF0YTogWzUwLCA3NSwgMTUwLCAxMDAsIDIwMCwgMTc1LCA3NV1cclxuXHRcdFx0XHR9XVxyXG5cdFx0fSxcclxuXHJcblx0XHRvcHRpb25zOiB7XHJcblx0XHRcdFx0dGl0bGU6IHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0dGV4dDogJ0RhaWx5J1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0bGVnZW5kOiB7XHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBcInRvcFwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRhc3BlY3RSYXRpbzogcGl4ZWxSYXRpb182LFxyXG5cdFx0XHRcdHJlc3BvbnNpdmU6IHRydWUsXHJcblx0XHRcdFx0c2NhbGVzOiB7XHJcblx0XHRcdFx0XHRcdHlBeGVzOiBbe1xyXG5cdFx0XHRcdFx0XHRcdFx0dGlja3M6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmb250Q29sb3I6IFwicmdiYSgwLDAsMCwwLjUpXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFN0eWxlOiBcImJvbGRcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRiZWdpbkF0WmVybzogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtYXhUaWNrc0xpbWl0OiA1LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIHN0ZXBTaXplOiAwLjUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogMjBcclxuXHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRncmlkTGluZXM6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkcmF3VGlja3M6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IHRydWVcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fV0sXHJcblx0XHRcdFx0XHRcdHhBeGVzOiBbe1xyXG5cdFx0XHRcdFx0XHRcdFx0Z3JpZExpbmVzOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0emVyb0xpbmVDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRyYXdUaWNrczogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiB0cnVlXHJcblx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0dGlja3M6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAxMCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmb250Q29sb3I6IFwicmdiYSgwLDAsMCwwLjUpXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFN0eWxlOiBcImJvbGRcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtYXhUaWNrc0xpbWl0OiAxNVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fV1cclxuXHRcdFx0XHR9XHJcblx0XHR9XHJcbn0pO1xyXG5cclxuXHJcbi8vID09PT09PT09PT09PT09XHJcbi8vIE1PQklMRSBDSEFSVFxyXG4vLyA9PT09PT09PT09PT09PVxyXG5cclxubGV0IG1vYmlsZUNoYXJ0ID0gbmV3IENoYXJ0KHdpZGdldE1vYmlsZSwge1xyXG5cdFx0dHlwZTogJ2RvdWdobnV0JyxcclxuXHRcdGRhdGE6IHtcclxuXHRcdFx0XHRsYWJlbHM6IFtcIlBob25lc1wiLCBcIlRhYmxldHNcIiwgXCJEZXNrdG9wXCJdLFxyXG5cdFx0XHRcdGRhdGFzZXRzOiBbe1xyXG5cdFx0XHRcdFx0XHRsYWJlbDogXCJEYXRhXCIsXHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogW1wiIzg1ZGI4MFwiLCBcIiM0Yzk2ODFcIiwgXCIjNzQ3N2JmXCJdLFxyXG5cdFx0XHRcdFx0XHRwb2ludFJhZGl1czogNSxcclxuXHRcdFx0XHRcdFx0ZmlsbDogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0Ym9yZGVyV2lkdGg6IDIsXHJcblx0XHRcdFx0XHRcdGRhdGE6IFsxNSwgMTUsIDcwXVxyXG5cdFx0XHRcdH1dXHJcblx0XHR9LFxyXG5cclxuXHRcdG9wdGlvbnM6IHtcclxuXHRcdFx0XHR0aXRsZToge1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiB0cnVlLFxyXG5cdFx0XHRcdFx0XHR0ZXh0OiAnTW9iaWxlIFVzZXJzJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0bGVnZW5kOiB7XHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBcInJpZ2h0XCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGFzcGVjdFJhdGlvOiBwaXhlbFJhdGlvXzYsXHJcblx0XHRcdFx0cmVzcG9uc2l2ZTogdHJ1ZSxcclxuXHJcblx0XHR9XHJcbn0pO1xyXG5cclxuXHJcblxyXG4vL1NFVCBQUkVWRU5UIERFRkFVTFRcclxuXHJcbnZhciBjaGVja01lc3NhZ2VGb3JtID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcblx0XHRsZXQgZ2V0X3RleHRhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRhcmVhJyk7XHJcblx0XHRcclxuXHRcdGlmIChnZXRfdGV4dGFyZWEudmFsdWUgPT0gXCJcIikge1xyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRhbGVydCgnUGxlYXNlLCB0eXBlIHNvbWUgbWVzc2FnZSEnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGFsZXJ0KFwiTWVzc2FnZSBTZW50IVwiKTtcclxuXHRcdH1cclxuXHJcblxyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxufTtcclxuXHJcbi8vIHlvdXIgZm9ybVxyXG52YXIgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlck1lc3NhZ2VcIik7XHJcblxyXG4vLyBhdHRhY2ggZXZlbnQgbGlzdGVuZXJcclxuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGNoZWNrTWVzc2FnZUZvcm0sIHRydWUpO1xyXG5cclxuXHJcblxyXG4vL1NFVCBBVVRPTVBMRVRFXHJcblxyXG5cclxuZnVuY3Rpb24gYXV0b2NvbXBsZXRlKGlucCwgYXJyKSB7XHJcblx0XHQvKnRoZSBhdXRvY29tcGxldGUgZnVuY3Rpb24gdGFrZXMgdHdvIGFyZ3VtZW50cyxcclxuXHRcdHRoZSB0ZXh0IGZpZWxkIGVsZW1lbnQgYW5kIGFuIGFycmF5IG9mIHBvc3NpYmxlIGF1dG9jb21wbGV0ZWQgdmFsdWVzOiovXHJcblx0XHR2YXIgY3VycmVudEZvY3VzO1xyXG5cdFx0LypleGVjdXRlIGEgZnVuY3Rpb24gd2hlbiBzb21lb25lIHdyaXRlcyBpbiB0aGUgdGV4dCBmaWVsZDoqL1xyXG5cdFx0aW5wLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0dmFyIGEsIGIsIGksIHZhbCA9IHRoaXMudmFsdWU7XHJcblx0XHRcdFx0LypjbG9zZSBhbnkgYWxyZWFkeSBvcGVuIGxpc3RzIG9mIGF1dG9jb21wbGV0ZWQgdmFsdWVzKi9cclxuXHRcdFx0XHRjbG9zZUFsbExpc3RzKCk7XHJcblx0XHRcdFx0aWYgKCF2YWwpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjdXJyZW50Rm9jdXMgPSAtMTtcclxuXHRcdFx0XHQvKmNyZWF0ZSBhIERJViBlbGVtZW50IHRoYXQgd2lsbCBjb250YWluIHRoZSBpdGVtcyAodmFsdWVzKToqL1xyXG5cdFx0XHRcdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xyXG5cdFx0XHRcdGEuc2V0QXR0cmlidXRlKFwiaWRcIiwgdGhpcy5pZCArIFwiYXV0b2NvbXBsZXRlLWxpc3RcIik7XHJcblx0XHRcdFx0YS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImF1dG9jb21wbGV0ZS1pdGVtc1wiKTtcclxuXHRcdFx0XHQvKmFwcGVuZCB0aGUgRElWIGVsZW1lbnQgYXMgYSBjaGlsZCBvZiB0aGUgYXV0b2NvbXBsZXRlIGNvbnRhaW5lcjoqL1xyXG5cdFx0XHRcdHRoaXMucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChhKTtcclxuXHRcdFx0XHQvKmZvciBlYWNoIGl0ZW0gaW4gdGhlIGFycmF5Li4uKi9cclxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdC8qY2hlY2sgaWYgdGhlIGl0ZW0gc3RhcnRzIHdpdGggdGhlIHNhbWUgbGV0dGVycyBhcyB0aGUgdGV4dCBmaWVsZCB2YWx1ZToqL1xyXG5cdFx0XHRcdFx0XHRpZiAoYXJyW2ldLnN1YnN0cigwLCB2YWwubGVuZ3RoKS50b1VwcGVyQ2FzZSgpID09IHZhbC50b1VwcGVyQ2FzZSgpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvKmNyZWF0ZSBhIERJViBlbGVtZW50IGZvciBlYWNoIG1hdGNoaW5nIGVsZW1lbnQ6Ki9cclxuXHRcdFx0XHRcdFx0XHRcdGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0LyptYWtlIHRoZSBtYXRjaGluZyBsZXR0ZXJzIGJvbGQ6Ki9cclxuXHRcdFx0XHRcdFx0XHRcdGIuaW5uZXJIVE1MID0gXCI8c3Ryb25nPlwiICsgYXJyW2ldLnN1YnN0cigwLCB2YWwubGVuZ3RoKSArIFwiPC9zdHJvbmc+XCI7XHJcblx0XHRcdFx0XHRcdFx0XHRiLmlubmVySFRNTCArPSBhcnJbaV0uc3Vic3RyKHZhbC5sZW5ndGgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0LyppbnNlcnQgYSBpbnB1dCBmaWVsZCB0aGF0IHdpbGwgaG9sZCB0aGUgY3VycmVudCBhcnJheSBpdGVtJ3MgdmFsdWU6Ki9cclxuXHRcdFx0XHRcdFx0XHRcdGIuaW5uZXJIVE1MICs9IFwiPGlucHV0IHR5cGU9J2hpZGRlbicgdmFsdWU9J1wiICsgYXJyW2ldICsgXCInPlwiO1xyXG5cdFx0XHRcdFx0XHRcdFx0LypleGVjdXRlIGEgZnVuY3Rpb24gd2hlbiBzb21lb25lIGNsaWNrcyBvbiB0aGUgaXRlbSB2YWx1ZSAoRElWIGVsZW1lbnQpOiovXHJcblx0XHRcdFx0XHRcdFx0XHRiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LyppbnNlcnQgdGhlIHZhbHVlIGZvciB0aGUgYXV0b2NvbXBsZXRlIHRleHQgZmllbGQ6Ki9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbnAudmFsdWUgPSB0aGlzLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIilbMF0udmFsdWU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LypjbG9zZSB0aGUgbGlzdCBvZiBhdXRvY29tcGxldGVkIHZhbHVlcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQob3IgYW55IG90aGVyIG9wZW4gbGlzdHMgb2YgYXV0b2NvbXBsZXRlZCB2YWx1ZXM6Ki9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbG9zZUFsbExpc3RzKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdGEuYXBwZW5kQ2hpbGQoYik7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdC8qZXhlY3V0ZSBhIGZ1bmN0aW9uIHByZXNzZXMgYSBrZXkgb24gdGhlIGtleWJvYXJkOiovXHJcblx0XHRpbnAuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdHZhciB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCArIFwiYXV0b2NvbXBsZXRlLWxpc3RcIik7XHJcblx0XHRcdFx0aWYgKHgpIHggPSB4LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZGl2XCIpO1xyXG5cdFx0XHRcdGlmIChlLmtleUNvZGUgPT0gNDApIHtcclxuXHRcdFx0XHRcdFx0LypJZiB0aGUgYXJyb3cgRE9XTiBrZXkgaXMgcHJlc3NlZCxcclxuXHRcdFx0XHRcdFx0aW5jcmVhc2UgdGhlIGN1cnJlbnRGb2N1cyB2YXJpYWJsZToqL1xyXG5cdFx0XHRcdFx0XHRjdXJyZW50Rm9jdXMrKztcclxuXHRcdFx0XHRcdFx0LyphbmQgYW5kIG1ha2UgdGhlIGN1cnJlbnQgaXRlbSBtb3JlIHZpc2libGU6Ki9cclxuXHRcdFx0XHRcdFx0YWRkQWN0aXZlKHgpO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoZS5rZXlDb2RlID09IDM4KSB7IC8vdXBcclxuXHRcdFx0XHRcdFx0LypJZiB0aGUgYXJyb3cgVVAga2V5IGlzIHByZXNzZWQsXHJcblx0XHRcdFx0XHRcdGRlY3JlYXNlIHRoZSBjdXJyZW50Rm9jdXMgdmFyaWFibGU6Ki9cclxuXHRcdFx0XHRcdFx0Y3VycmVudEZvY3VzLS07XHJcblx0XHRcdFx0XHRcdC8qYW5kIGFuZCBtYWtlIHRoZSBjdXJyZW50IGl0ZW0gbW9yZSB2aXNpYmxlOiovXHJcblx0XHRcdFx0XHRcdGFkZEFjdGl2ZSh4KTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGUua2V5Q29kZSA9PSAxMykge1xyXG5cdFx0XHRcdFx0XHQvKklmIHRoZSBFTlRFUiBrZXkgaXMgcHJlc3NlZCwgcHJldmVudCB0aGUgZm9ybSBmcm9tIGJlaW5nIHN1Ym1pdHRlZCwqL1xyXG5cdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50Rm9jdXMgPiAtMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0LyphbmQgc2ltdWxhdGUgYSBjbGljayBvbiB0aGUgXCJhY3RpdmVcIiBpdGVtOiovXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoeCkgeFtjdXJyZW50Rm9jdXNdLmNsaWNrKCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHRmdW5jdGlvbiBhZGRBY3RpdmUoeCkge1xyXG5cdFx0XHRcdC8qYSBmdW5jdGlvbiB0byBjbGFzc2lmeSBhbiBpdGVtIGFzIFwiYWN0aXZlXCI6Ki9cclxuXHRcdFx0XHRpZiAoIXgpIHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHQvKnN0YXJ0IGJ5IHJlbW92aW5nIHRoZSBcImFjdGl2ZVwiIGNsYXNzIG9uIGFsbCBpdGVtczoqL1xyXG5cdFx0XHRcdHJlbW92ZUFjdGl2ZSh4KTtcclxuXHRcdFx0XHRpZiAoY3VycmVudEZvY3VzID49IHgubGVuZ3RoKSBjdXJyZW50Rm9jdXMgPSAwO1xyXG5cdFx0XHRcdGlmIChjdXJyZW50Rm9jdXMgPCAwKSBjdXJyZW50Rm9jdXMgPSAoeC5sZW5ndGggLSAxKTtcclxuXHRcdFx0XHQvKmFkZCBjbGFzcyBcImF1dG9jb21wbGV0ZS1hY3RpdmVcIjoqL1xyXG5cdFx0XHRcdHhbY3VycmVudEZvY3VzXS5jbGFzc0xpc3QuYWRkKFwiYXV0b2NvbXBsZXRlLWFjdGl2ZVwiKTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiByZW1vdmVBY3RpdmUoeCkge1xyXG5cdFx0XHRcdC8qYSBmdW5jdGlvbiB0byByZW1vdmUgdGhlIFwiYWN0aXZlXCIgY2xhc3MgZnJvbSBhbGwgYXV0b2NvbXBsZXRlIGl0ZW1zOiovXHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdHhbaV0uY2xhc3NMaXN0LnJlbW92ZShcImF1dG9jb21wbGV0ZS1hY3RpdmVcIik7XHJcblx0XHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGNsb3NlQWxsTGlzdHMoZWxtbnQpIHtcclxuXHRcdFx0XHQvKmNsb3NlIGFsbCBhdXRvY29tcGxldGUgbGlzdHMgaW4gdGhlIGRvY3VtZW50LFxyXG5cdFx0XHRcdGV4Y2VwdCB0aGUgb25lIHBhc3NlZCBhcyBhbiBhcmd1bWVudDoqL1xyXG5cdFx0XHRcdHZhciB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImF1dG9jb21wbGV0ZS1pdGVtc1wiKTtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHgubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0aWYgKGVsbW50ICE9IHhbaV0gJiYgZWxtbnQgIT0gaW5wKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR4W2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoeFtpXSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHR9XHJcblx0XHQvKmV4ZWN1dGUgYSBmdW5jdGlvbiB3aGVuIHNvbWVvbmUgY2xpY2tzIGluIHRoZSBkb2N1bWVudDoqL1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRjbG9zZUFsbExpc3RzKGUudGFyZ2V0KTtcclxuXHRcdH0pO1xyXG59XHJcblxyXG4vKkFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIHRoZSBjb3VudHJ5IG5hbWVzIGluIHRoZSB3b3JsZDoqL1xyXG52YXIgY291bnRyaWVzID0gW1wiVmljdG9yaWEgQ2hhbWJlcnNcIiwgXCJEYXlsZSBCeXJkXCIsIFwiRGF3biBXb29kXCIsIFwiRGFuIE9saXZlclwiLCBcIk1lZ2FuIENoYW1iZXJzXCJdO1xyXG5cclxuLyppbml0aWF0ZSB0aGUgYXV0b2NvbXBsZXRlIGZ1bmN0aW9uIG9uIHRoZSBcIm15SW5wdXRcIiBlbGVtZW50LCBhbmQgcGFzcyBhbG9uZyB0aGUgY291bnRyaWVzIGFycmF5IGFzIHBvc3NpYmxlIGF1dG9jb21wbGV0ZSB2YWx1ZXM6Ki9cclxuYXV0b2NvbXBsZXRlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoTWVtYmVyXCIpLCBjb3VudHJpZXMpO1xyXG5cclxuXHJcbi8vTE9DQUwgU1RPUkFHRVxyXG5cclxubGV0IHNhdmVfZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlFbWFpbFN3aXRjaCcpO1xyXG5sZXQgc2F2ZV9wcm9maWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215b25vZmZzd2l0Y2gnKTtcclxuXHJcbmxldCBzYXZlX3NldHRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZVNldHRpbmdzJyk7XHJcbmxldCByZXNldF9zZXR0aW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbFNldHRpbmdzJyk7XHJcblxyXG4vLyBsZXQgdGltZXpvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZXpvbmUnKTtcclxubGV0IHRpbWV6b25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aW1lem9uZVwiKTtcclxuXHJcblxyXG5zYXZlX3NldHRpbmcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cclxuXHRcdC8vIHZhciBjaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUVtYWlsU3dpdGNoJyk7XHJcblx0XHRpZiAoc2F2ZV9lbWFpbC5jaGVja2VkID09IHRydWUpIHtcclxuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlFbWFpbFN3aXRjaCcsIHNhdmVfZW1haWwuY2hlY2tlZCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChzYXZlX2VtYWlsLmNoZWNrZWQgPT0gZmFsc2UpIHtcclxuXHRcdFx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbXlFbWFpbFN3aXRjaCcpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoc2F2ZV9wcm9maWxlLmNoZWNrZWQgPT0gdHJ1ZSkge1xyXG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteW9ub2Zmc3dpdGNoJywgc2F2ZV9wcm9maWxlLmNoZWNrZWQpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoc2F2ZV9wcm9maWxlLmNoZWNrZWQgPT0gZmFsc2UpIHtcclxuXHRcdFx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbXlvbm9mZnN3aXRjaCcpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHQvL1NlbGVjdFxyXG5cdFx0bGV0IGdldF90aW1lem9uZV92YWx1ZSA9IHRpbWV6b25lLnZhbHVlO1xyXG5cclxuXHRcdGlmIChnZXRfdGltZXpvbmVfdmFsdWUgPT0gXCJcIikge1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RpbWV6b25lJywgZ2V0X3RpbWV6b25lX3ZhbHVlKVxyXG5cdFx0fVxyXG5cclxuXHJcblxyXG5cclxuXHRcdC8vIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcmVmJykgPT0gTlVMTCl7XHJcblxyXG5cdFx0Ly8gfSBlbHNlIHtcclxuXHRcdC8vICAgdmFyIHByZWYgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJlZicpO1xyXG5cdFx0Ly8gICBjbGVhclNlbGVjdGVkKCk7XHJcblx0XHQvLyAgIC8vc2V0IHRoZSBzZWxlY3RlZCBzdGF0ZSB0byB0cnVlIG9uIHRoZSBvcHRpb24gbG9jYWxTdG9yYWdlIHJlbWVtYmVyc1xyXG5cdFx0Ly8gICB0aW1lem9uZS5maW5kKCcjJyArIHByZWYpLnByb3AoJ3NlbGVjdGVkJywgdHJ1ZSk7XHJcblxyXG5cdFx0Ly8gfVxyXG5cclxuXHRcdC8vIHZhciBzZXRQcmVmZXJlbmNlID0gZnVuY3Rpb24oKXtcclxuXHRcdC8vICAgLy9yZW1lbWJlciB0aGUgSUQgb2YgdGhlIG9wdGlvbiB0aGUgdXNlciBzZWxlY3RlZFxyXG5cdFx0Ly8gICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJlZicsIHRpbWV6b25lLmZpbmQoJzpzZWxlY3RlZCcpLmF0dHIoJ2lkJykpO1xyXG5cdFx0Ly8gfTtcclxuXHJcblxyXG5cclxuXHJcblx0XHRhbGVydCgnU2F2ZWQhJyk7XHJcblxyXG5cdFx0Ly8gY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcclxufSkpXHJcblxyXG5zYXZlX2VtYWlsLmNoZWNrZWQgPSBsb2NhbFN0b3JhZ2UubXlFbWFpbFN3aXRjaDtcclxuc2F2ZV9wcm9maWxlLmNoZWNrZWQgPSBsb2NhbFN0b3JhZ2UubXlvbm9mZnN3aXRjaDtcclxudGltZXpvbmUudmFsdWUgPSBsb2NhbFN0b3JhZ2UudGltZXpvbmU7XHJcblxyXG4vLyB0aW1lem9uZS52YWx1ZSA9ICdHVE0tNCc7XHJcblxyXG5yZXNldF9zZXR0aW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHQvKiBBY3Qgb24gdGhlIGV2ZW50ICovXHJcblxyXG5cdFx0bG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcblx0XHRhbGVydCgnQ2xlYXIgbG9jYWxTdG9yYWdlJyk7XHJcbn0pKSJdfQ==
