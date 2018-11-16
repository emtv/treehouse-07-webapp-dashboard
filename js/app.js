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

// ==============
// LINE CHART
// ==============
var myChart = new Chart(widgetTraffic, {
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
            data: [500, 1500, 1000, 1750, 2250, 1750, 2000, 1500, 2000, 2500, 2000, 2500]
        }, {
            label: "Weekly",
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
            data: [502, 250, 756, 1458, 1985, 1526, 1980, 1560, 2300, 2450, 1800, 2500]
        }, {
            label: "Daily",
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
            data: [500, 1500, 1000, 1750, 2250, 1750, 2000, 1500, 2000, 2500, 2000, 2500]
        }, {
            label: "Hourly",
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
            data: [500, 1500, 1000, 1750, 2250, 1750, 2000, 1500, 2000, 2500, 2000, 2500]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcm9qZWN0cy91bml0LTA3LXdlYmFwcC1kYXNoYm9hcmQvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLFFBQVEsR0FBUixDQUFZLHdDQUFaOztBQUVBO0FBQ0EsSUFBSSxnQkFBZ0IsU0FBUyxjQUFULENBQXdCLFNBQXhCLENBQXBCO0FBQUEsSUFDQyxjQUFjLFNBQVMsY0FBVCxDQUF3QixPQUF4QixDQURmO0FBQUEsSUFFQyxlQUFlLFNBQVMsY0FBVCxDQUF3QixRQUF4QixDQUZoQjtBQUFBLElBR0MsZUFBZSxTQUFTLGNBQVQsQ0FBd0IsUUFBeEIsQ0FIaEI7QUFBQSxJQUlDLGdCQUFnQixTQUFTLGNBQVQsQ0FBd0IsU0FBeEIsQ0FKakI7QUFBQSxJQUtDLGlCQUFpQixTQUFTLGNBQVQsQ0FBd0IsVUFBeEIsQ0FMbEI7O0FBT0EsSUFBSSxpQkFBaUIsU0FBUyxnQkFBVCxDQUEwQixjQUExQixDQUFyQjtBQUNBLElBQUksZ0JBQWdCLFNBQVMsZ0JBQVQsQ0FBMEIsYUFBMUIsQ0FBcEI7QUFDQSxJQUFJLFdBQVcsU0FBUyxjQUFULENBQXdCLE1BQXhCLENBQWY7QUFDQSxJQUFJLGVBQWUsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQUFuQjtBQUNBLElBQUkseUJBQXlCLFNBQVMsY0FBVCxDQUF3QixvQkFBeEIsQ0FBN0I7O0FBR0E7O0FBRUEsSUFBSSxhQUFhLE9BQU8sVUFBUCxDQUFrQixxQkFBbEIsQ0FBakI7O0FBRUEsSUFBSSx1QkFBSjs7QUFFQSxJQUFJLG1CQUFKO0FBQ0EsSUFBSSxxQkFBSjs7QUFFQSxJQUFJLFdBQVcsT0FBZixFQUF1QjtBQUNyQjtBQUNBLGlCQUFXLENBQVg7QUFDQSxtQkFBZSxDQUFmO0FBRUQsQ0FMRCxNQUtPO0FBQ0w7QUFDQSxpQkFBVyxDQUFYO0FBQ0EsbUJBQWUsQ0FBZjtBQUNEOztBQUtEO0FBQ0E7QUFD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UyxLQUFULEVBQWdCO0FBQ3BEO0FBQ0E7QUFDQSxRQUFJLFdBQVcsT0FBWCxJQUFzQixJQUExQixFQUFnQztBQUM1QixxQkFBYSxPQUFiLENBQXFCLGVBQXJCLEVBQXNDLFdBQVcsT0FBakQ7QUFFSDs7QUFFRCxRQUFJLFdBQVcsT0FBWCxJQUFzQixLQUExQixFQUFpQztBQUM3QixxQkFBYSxVQUFiLENBQXdCLGVBQXhCO0FBRUg7O0FBRUQsUUFBSSxhQUFhLE9BQWIsSUFBd0IsSUFBNUIsRUFBa0M7QUFDOUIscUJBQWEsT0FBYixDQUFxQixlQUFyQixFQUFzQyxhQUFhLE9BQW5EO0FBRUg7O0FBRUQsUUFBSSxhQUFhLE9BQWIsSUFBd0IsS0FBNUIsRUFBbUM7QUFDL0IscUJBQWEsVUFBYixDQUF3QixlQUF4QjtBQUVIOztBQUVMO0FBQ0ksUUFBSSxxQkFBcUIsU0FBUyxLQUFsQzs7QUFFQSxRQUFJLHNCQUFzQixFQUExQixFQUErQixDQUU5QixDQUZELE1BRU87QUFDTCxxQkFBYSxPQUFiLENBQXFCLFVBQXJCLEVBQWlDLGtCQUFqQztBQUNEOztBQU9IOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQU1FLFVBQU0sUUFBTjs7QUFFQTtBQUNILENBM0REOztBQTZEQSxXQUFXLE9BQVgsR0FBcUIsYUFBYSxhQUFsQztBQUNBLGFBQWEsT0FBYixHQUF1QixhQUFhLGFBQXBDO0FBQ0EsU0FBUyxLQUFULEdBQWlCLGFBQWEsUUFBOUI7O0FBRUE7O0FBRUEsY0FBYyxnQkFBZCxDQUErQixPQUEvQixFQUF5QyxVQUFTLEtBQVQsRUFBZ0I7QUFDckQ7O0FBRUEsaUJBQWEsS0FBYjtBQUNBLFVBQU0sb0JBQU47QUFDSCxDQUxEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc31yZXR1cm4gZX0pKCkiLCJjb25zb2xlLmxvZygnTWFkZSB3aXRoIGxvdmUgYW5kIGZ1bGwgQ29kZSEgYnkgQEVtVHYnKTtcclxuXHJcbi8vU2V0IHZhcmlhYmxlc1xyXG5sZXQgd2lkZ2V0VHJhZmZpYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFmZmljJyksXHJcblx0d2lkZ2V0RGFpbHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGFpbHknKSxcclxuXHR3aWRnZXRNb2JpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9iaWxlJyksXHJcblx0d2lkZ2V0U29jaWFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NvY2lhbCcpLFxyXG5cdHdpZGdldE1lbWJlcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVtYmVycycpLFxyXG5cdHdpZGdldFNldHRpbmdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzJyk7XHJcblxyXG5sZXQgYnRuX2FsZXJ0Q2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWxlcnQtY2xvc2UnKTtcclxubGV0IGJ0bl9iZWxsQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmVsbC1jbG9zZScpO1xyXG5sZXQgZ2V0X2JlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmVsbCcpO1xyXG5sZXQgZ2V0X2Ryb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLWNvbnRlbnQnKTtcclxubGV0IGdldF9ncm91cF9ub3RpZmljYWNpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JvdXBfbm90aWZpY2FjaW9uJyk7XHJcblxyXG5cclxuLy9WYWxpZGF0aW9uIFBpeGVsIFJhdGlvXHJcblxyXG5sZXQgZ2V0X3NjcmVlbiA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogMTAyNHB4KVwiKTtcclxuXHJcbmxldCBsZWdlbmRQb3NpdGlvbjtcclxuXHJcbmxldCBwaXhlbFJhdGlvO1xyXG5sZXQgcGl4ZWxSYXRpb182O1xyXG5cclxuaWYgKGdldF9zY3JlZW4ubWF0Y2hlcyl7XHJcbiAgLy8gbGVnZW5kUG9zaXRpb24gPSAncmlnaHQnO1xyXG4gIHBpeGVsUmF0aW89NDtcclxuICBwaXhlbFJhdGlvXzYgPSAyO1xyXG5cclxufSBlbHNlIHtcclxuICAvLyBsZWdlbmRQb3NpdGlvbiA9ICd0b3AnO1xyXG4gIHBpeGVsUmF0aW89MTtcclxuICBwaXhlbFJhdGlvXzYgPSAxO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLyA9PT09PT09PT09PT09PVxyXG4vLyBPUEVOIEJFTExcclxuLy8gPT09PT09PT09PT09PT1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGVsZW1lbnQsIGNscykge1xyXG4gICAgcmV0dXJuICgnICcgKyBlbGVtZW50LmNsYXNzTmFtZSArICcgJykuaW5kZXhPZignICcgKyBjbHMgKyAnICcpID4gLTE7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjaGVja0VtcHR5Tm90aWZpY2F0aW9ucyAoKXtcclxuICAgIC8vIGFsZXJ0KCd1bm8nKTtcclxuXHJcbiAgICBsZXQgY2hlY2tfZW1wdHkgPSBnZXRfZ3JvdXBfbm90aWZpY2FjaW9uLmNoaWxkTm9kZXMubGVuZ3RoO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGNoZWNrX2VtcHR5KTtcclxuXHJcbiAgICBpZiAoY2hlY2tfZW1wdHkgPT0gNCkge1xyXG5cclxuICAgICAgICBsZXQgc2V0X2VtcHR5X3AgPSAnPHA+QWxsIHVwZGF0ZSEgPSk8L3A+JztcclxuICAgICAgICBsZXQgc2V0X2VtcHR5X2l0ZW0gPSAnPGRpdiBjbGFzcz1cIml0ZW1fX3RleHRcIj4nICsgc2V0X2VtcHR5X3AgKyAnPC9kaXY+JztcclxuICAgICAgICBsZXQgc2V0X2VtcHR5X25vdGlmaWNhY2lvbiA9ICc8ZGl2IGNsYXNzPVwibm90aWZpY2FjaW9uLS1pdGVtXCI+JyArIHNldF9lbXB0eV9pdGVtICsgJzwvZGl2Pic7XHJcblxyXG4gICAgICAgIGdldF9ncm91cF9ub3RpZmljYWNpb24uaW5uZXJIVE1MID0gc2V0X2VtcHR5X25vdGlmaWNhY2lvbjtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuZm9yICh2YXIgaSA9IDA7IGkgPCBidG5fYmVsbENsb3NlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBidG5fYmVsbENsb3NlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBjaGVja0VtcHR5Tm90aWZpY2F0aW9ucygpO1xyXG4gICAgfSkpXHJcbiAgIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmdldF9iZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBcclxuICAgIC8vIGNoZWNrRW1wdHlOb3RpZmljYXRpb25zKCk7XHJcblxyXG5cclxuICAgIGxldCBjaGVja19kaXNhYmxlID0gdG9nZ2xlQ2xhc3MoZ2V0X2dyb3VwX25vdGlmaWNhY2lvbiwgJ2Ryb3Bkb3duLWRpc2FibGUnKTtcclxuICAgIGxldCBjaGVja19hY3RpdmUgPSB0b2dnbGVDbGFzcyhnZXRfZ3JvdXBfbm90aWZpY2FjaW9uLCAnZHJvcGRvd24tYWN0aXZlJyk7XHJcblxyXG4gICAvLyBUZXN0IHRoZSBtZXRob2RcclxuICAgaWYgKGNoZWNrX2Rpc2FibGUgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGdldF9ncm91cF9ub3RpZmljYWNpb24uY2xhc3NMaXN0LnJlbW92ZSgnZHJvcGRvd24tZGlzYWJsZScpO1xyXG4gICAgICAgIGdldF9ncm91cF9ub3RpZmljYWNpb24uY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24tYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIGdldF9iZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpbmctb2ZmJyk7XHJcbiAgICAgICAgZ2V0X2JlbGwuY2xhc3NMaXN0LmFkZCgnZGluZy1vbicpO1xyXG5cclxuICAgfSBlbHNlIGlmICggY2hlY2tfYWN0aXZlID09IHRydWUgKSB7XHJcbiAgICAgICAgZ2V0X2dyb3VwX25vdGlmaWNhY2lvbi5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wZG93bi1hY3RpdmUnKTtcclxuICAgICAgICBnZXRfZ3JvdXBfbm90aWZpY2FjaW9uLmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duLWRpc2FibGUnKTtcclxuICAgICAgICBnZXRfYmVsbC5jbGFzc0xpc3QucmVtb3ZlKCdkaW5nLW9uJyk7XHJcbiAgICAgICAgZ2V0X2JlbGwuY2xhc3NMaXN0LmFkZCgnZGluZy1vZmYnKTtcclxuICAgfSBlbHNlIHtcclxuXHJcbiAgIH1cclxuXHJcbn0pKTtcclxuXHJcbi8vQ0hFQ0sgQ09OVEFJTiBOT1RJRklDQUNJT05TXHJcblxyXG4vLyBncm91cF9ub3RpZmljYWNpb25cclxuXHJcblxyXG5cclxuXHJcbi8vID09PT09PT09PT09PT09XHJcbi8vIENMT1NFIEFMRVJUU1xyXG4vLyA9PT09PT09PT09PT09PVxyXG5cclxuZnVuY3Rpb24gY2xvc2VBbGVydChldmVudCkge1xyXG4gICAgbGV0IGdldF9wYXJlbnQgPSBldmVudC5wYXJlbnROb2RlO1xyXG4gICAgZ2V0X3BhcmVudC5yZW1vdmUoKTtcclxufVxyXG5cclxuZm9yICh2YXIgaSA9IDA7IGkgPCBidG5fYWxlcnRDbG9zZS5sZW5ndGg7IGkrKykge1xyXG4gICAgYnRuX2FsZXJ0Q2xvc2VbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGNsb3NlQWxlcnQodGhpcyk7XHJcbiAgICB9KSlcclxufVxyXG5cclxuXHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gU0VUIENIQVJUU1xyXG4vLyAtLS0tLS0tLS0tLVxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbi8vID09PT09PT09PT09PT09XHJcbi8vIExJTkUgQ0hBUlRcclxuLy8gPT09PT09PT09PT09PT1cclxubGV0IG15Q2hhcnQgPSBuZXcgQ2hhcnQod2lkZ2V0VHJhZmZpYywge1xyXG4gICAgdHlwZTogJ2xpbmUnLFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGxhYmVsczogW1wiMTYtMjJcIiwgXCIyMy0yOVwiLCBcIjMwLTVcIiwgXCI2LTEyXCIsIFwiMTMtMTlcIiwgXCIyNy0zXCIsIFwiNC0xMFwiLCBcIjExLTE3XCIsIFwiMTgtMjRcIiwgXCIyNS0zMVwiXSxcclxuICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgbGFiZWw6IFwiTW9udGhseVwiLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjODBiNmY0XCIsXHJcbiAgICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6IFwiIzgwYjZmNFwiLFxyXG4gICAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogXCIjODBiNmY0XCIsXHJcbiAgICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFwiIzgwYjZmNFwiLFxyXG4gICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IFwiIzgwYjZmNFwiLFxyXG4gICAgICAgICAgICBwb2ludEJvcmRlcldpZHRoOiA1LFxyXG4gICAgICAgICAgICBwb2ludEhvdmVyUmFkaXVzOiA1LFxyXG4gICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyV2lkdGg6IDMsXHJcbiAgICAgICAgICAgIHBvaW50UmFkaXVzOiA1LFxyXG4gICAgICAgICAgICBmaWxsOiB0cnVlLFxyXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogMixcclxuICAgICAgICAgICAgZGF0YTogWzUwMCwgMTUwMCwgMTAwMCwgMTc1MCwgMjI1MCwgMTc1MCwgMjAwMCwgMTUwMCwgMjAwMCwgMjUwMCwgMjAwMCwgMjUwMCBdXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIldlZWtseVwiLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjODBiNmY0XCIsXHJcbiAgICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6IFwiIzgwYjZmNFwiLFxyXG4gICAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogXCIjODBiNmY0XCIsXHJcbiAgICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFwiIzgwYjZmNFwiLFxyXG4gICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IFwiIzgwYjZmNFwiLFxyXG4gICAgICAgICAgICBwb2ludEJvcmRlcldpZHRoOiA1LFxyXG4gICAgICAgICAgICBwb2ludEhvdmVyUmFkaXVzOiA1LFxyXG4gICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyV2lkdGg6IDMsXHJcbiAgICAgICAgICAgIHBvaW50UmFkaXVzOiA1LFxyXG4gICAgICAgICAgICBmaWxsOiB0cnVlLFxyXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogMixcclxuICAgICAgICAgICAgZGF0YTogWzUwMiwgMjUwLCA3NTYsIDE0NTgsIDE5ODUsIDE1MjYsIDE5ODAsIDE1NjAsIDIzMDAsIDI0NTAsIDE4MDAsIDI1MDAgXVxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgICBsYWJlbDogXCJEYWlseVwiLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjODBiNmY0XCIsXHJcbiAgICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6IFwiIzgwYjZmNFwiLFxyXG4gICAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogXCIjODBiNmY0XCIsXHJcbiAgICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFwiIzgwYjZmNFwiLFxyXG4gICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IFwiIzgwYjZmNFwiLFxyXG4gICAgICAgICAgICBwb2ludEJvcmRlcldpZHRoOiA1LFxyXG4gICAgICAgICAgICBwb2ludEhvdmVyUmFkaXVzOiA1LFxyXG4gICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyV2lkdGg6IDMsXHJcbiAgICAgICAgICAgIHBvaW50UmFkaXVzOiA1LFxyXG4gICAgICAgICAgICBmaWxsOiB0cnVlLFxyXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogMixcclxuICAgICAgICAgICAgZGF0YTogWzUwMCwgMTUwMCwgMTAwMCwgMTc1MCwgMjI1MCwgMTc1MCwgMjAwMCwgMTUwMCwgMjAwMCwgMjUwMCwgMjAwMCwgMjUwMCBdXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIkhvdXJseVwiLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjODBiNmY0XCIsXHJcbiAgICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6IFwiIzgwYjZmNFwiLFxyXG4gICAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogXCIjODBiNmY0XCIsXHJcbiAgICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFwiIzgwYjZmNFwiLFxyXG4gICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IFwiIzgwYjZmNFwiLFxyXG4gICAgICAgICAgICBwb2ludEJvcmRlcldpZHRoOiA1LFxyXG4gICAgICAgICAgICBwb2ludEhvdmVyUmFkaXVzOiA1LFxyXG4gICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyV2lkdGg6IDMsXHJcbiAgICAgICAgICAgIHBvaW50UmFkaXVzOiA1LFxyXG4gICAgICAgICAgICBmaWxsOiB0cnVlLFxyXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogMixcclxuICAgICAgICAgICAgZGF0YTogWzUwMCwgMTUwMCwgMTAwMCwgMTc1MCwgMjI1MCwgMTc1MCwgMjAwMCwgMTUwMCwgMjAwMCwgMjUwMCwgMjAwMCwgMjUwMCBdXHJcbiAgICAgICAgfV1cclxuICAgIH0sXHJcbiAgICAvL0RheVxyXG5cclxuICAgIC8vXHJcbiAgICBvcHRpb25zOiB7XHJcblxyXG4gICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgICAgICB0ZXh0OiAnVHJhZmZpYydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzcGVjdFJhdGlvOnBpeGVsUmF0aW8sXHJcbiAgICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICAgIHlBeGVzOiBbe1xyXG4gICAgICAgICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250Q29sb3I6IFwicmdiYSgwLDAsMCwwLjUpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFN0eWxlOiBcImJvbGRcIixcclxuICAgICAgICAgICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtYXhUaWNrc0xpbWl0OiAxNSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBzdGVwU2l6ZTogMC41LFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ3JpZExpbmVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhd1RpY2tzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxufV0sXHJcbiAgICAgICAgICAgIHhBeGVzOiBbe1xyXG4gICAgICAgICAgICAgICAgZ3JpZExpbmVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgemVyb0xpbmVDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRyYXdUaWNrczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlXHJcbn0sXHJcbiAgICAgICAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRDb2xvcjogXCJyZ2JhKDAsMCwwLDAuNSlcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250U3R5bGU6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heFRpY2tzTGltaXQ6IDE1XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG4vLyA9PT09PT09PT09PT09PVxyXG4vLyBEQUlMWSBDSEFSVFxyXG4vLyA9PT09PT09PT09PT09PVxyXG5sZXQgZGFpbHlDaGFydCA9IG5ldyBDaGFydCh3aWRnZXREYWlseSwge1xyXG4gICAgdHlwZTogJ2JhcicsXHJcbiAgICBjdXJ2YXR1cmU6IDAuMjAsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgbGFiZWxzOiBbXCJTXCIsIFwiTVwiLCBcIlRcIiwgXCJXXCIsIFwiVFwiLCBcIkZcIiwgXCJTXCJdLFxyXG4gICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICBsYWJlbDogXCJcIixcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzczNzdiZlwiLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiN3B4XCIsXHJcbiAgICAgICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDUsXHJcbiAgICAgICAgICAgIHBvaW50SG92ZXJSYWRpdXM6IDUsXHJcbiAgICAgICAgICAgIHBvaW50UmFkaXVzOiA1LFxyXG4gICAgICAgICAgICBmaWxsOiB0cnVlLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzczNzdiZlwiLFxyXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogMixcclxuICAgICAgICAgICAgZGF0YTogWzUwLCA3NSwgMTUwLCAxMDAsIDIwMCwgMTc1LCA3NV1cclxuICAgICAgICB9XVxyXG4gICAgfSxcclxuXHJcbiAgICBvcHRpb25zOiB7XHJcblx0XHR0aXRsZToge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICB0ZXh0OiAnRGFpbHknXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzcGVjdFJhdGlvOnBpeGVsUmF0aW9fNixcclxuICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgICAgeUF4ZXM6IFt7XHJcbiAgICAgICAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRDb2xvcjogXCJyZ2JhKDAsMCwwLDAuNSlcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250U3R5bGU6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heFRpY2tzTGltaXQ6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3RlcFNpemU6IDAuNSxcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdyaWRMaW5lczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYXdUaWNrczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG59XSxcclxuICAgICAgICAgICAgeEF4ZXM6IFt7XHJcbiAgICAgICAgICAgICAgICBncmlkTGluZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICB6ZXJvTGluZUNvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZHJhd1RpY2tzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWVcclxufSxcclxuICAgICAgICAgICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udENvbG9yOiBcInJnYmEoMCwwLDAsMC41KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogXCJib2xkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4VGlja3NMaW1pdDogMTVcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG4vLyA9PT09PT09PT09PT09PVxyXG4vLyBNT0JJTEUgQ0hBUlRcclxuLy8gPT09PT09PT09PT09PT1cclxuXHJcbmxldCBtb2JpbGVDaGFydCA9IG5ldyBDaGFydCh3aWRnZXRNb2JpbGUsIHtcclxuICAgIHR5cGU6ICdkb3VnaG51dCcsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgbGFiZWxzOiBbXCJQaG9uZXNcIiwgXCJUYWJsZXRzXCIsIFwiRGVza3RvcFwiXSxcclxuICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgbGFiZWw6IFwiRGF0YVwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6W1wiIzg1ZGI4MFwiLCBcIiM0Yzk2ODFcIiwgXCIjNzQ3N2JmXCJdLFxyXG4gICAgICAgICAgICBwb2ludFJhZGl1czogNSxcclxuICAgICAgICAgICAgZmlsbDogdHJ1ZSxcclxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDIsXHJcbiAgICAgICAgICAgIGRhdGE6IFsxNSwgMTUsIDcwXVxyXG4gICAgICAgIH1dXHJcbiAgICB9LFxyXG5cclxuICAgIG9wdGlvbnM6IHtcclxuXHRcdHRpdGxlOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIHRleHQ6ICdNb2JpbGUgVXNlcnMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IFwicmlnaHRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXNwZWN0UmF0aW86cGl4ZWxSYXRpb182LFxyXG5cclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuXHJcbi8vU0VUIFBSRVZFTlQgREVGQVVMVFxyXG5cclxudmFyIGNoZWNrTWVzc2FnZUZvcm0gPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgYWxlcnQoXCJNZXNzYWdlIFNlbnQhXCIpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxufTtcclxuXHJcbi8vIHlvdXIgZm9ybVxyXG52YXIgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlck1lc3NhZ2VcIik7XHJcblxyXG4vLyBhdHRhY2ggZXZlbnQgbGlzdGVuZXJcclxuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGNoZWNrTWVzc2FnZUZvcm0sIHRydWUpO1xyXG5cclxuXHJcblxyXG4vL1NFVCBBVVRPTVBMRVRFXHJcblxyXG5cclxuZnVuY3Rpb24gYXV0b2NvbXBsZXRlKGlucCwgYXJyKSB7XHJcbiAgLyp0aGUgYXV0b2NvbXBsZXRlIGZ1bmN0aW9uIHRha2VzIHR3byBhcmd1bWVudHMsXHJcbiAgdGhlIHRleHQgZmllbGQgZWxlbWVudCBhbmQgYW4gYXJyYXkgb2YgcG9zc2libGUgYXV0b2NvbXBsZXRlZCB2YWx1ZXM6Ki9cclxuICB2YXIgY3VycmVudEZvY3VzO1xyXG4gIC8qZXhlY3V0ZSBhIGZ1bmN0aW9uIHdoZW4gc29tZW9uZSB3cml0ZXMgaW4gdGhlIHRleHQgZmllbGQ6Ki9cclxuICBpbnAuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgdmFyIGEsIGIsIGksIHZhbCA9IHRoaXMudmFsdWU7XHJcbiAgICAgIC8qY2xvc2UgYW55IGFscmVhZHkgb3BlbiBsaXN0cyBvZiBhdXRvY29tcGxldGVkIHZhbHVlcyovXHJcbiAgICAgIGNsb3NlQWxsTGlzdHMoKTtcclxuICAgICAgaWYgKCF2YWwpIHsgcmV0dXJuIGZhbHNlO31cclxuICAgICAgY3VycmVudEZvY3VzID0gLTE7XHJcbiAgICAgIC8qY3JlYXRlIGEgRElWIGVsZW1lbnQgdGhhdCB3aWxsIGNvbnRhaW4gdGhlIGl0ZW1zICh2YWx1ZXMpOiovXHJcbiAgICAgIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xyXG4gICAgICBhLnNldEF0dHJpYnV0ZShcImlkXCIsIHRoaXMuaWQgKyBcImF1dG9jb21wbGV0ZS1saXN0XCIpO1xyXG4gICAgICBhLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYXV0b2NvbXBsZXRlLWl0ZW1zXCIpO1xyXG4gICAgICAvKmFwcGVuZCB0aGUgRElWIGVsZW1lbnQgYXMgYSBjaGlsZCBvZiB0aGUgYXV0b2NvbXBsZXRlIGNvbnRhaW5lcjoqL1xyXG4gICAgICB0aGlzLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoYSk7XHJcbiAgICAgIC8qZm9yIGVhY2ggaXRlbSBpbiB0aGUgYXJyYXkuLi4qL1xyXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLypjaGVjayBpZiB0aGUgaXRlbSBzdGFydHMgd2l0aCB0aGUgc2FtZSBsZXR0ZXJzIGFzIHRoZSB0ZXh0IGZpZWxkIHZhbHVlOiovXHJcbiAgICAgICAgaWYgKGFycltpXS5zdWJzdHIoMCwgdmFsLmxlbmd0aCkudG9VcHBlckNhc2UoKSA9PSB2YWwudG9VcHBlckNhc2UoKSkge1xyXG4gICAgICAgICAgLypjcmVhdGUgYSBESVYgZWxlbWVudCBmb3IgZWFjaCBtYXRjaGluZyBlbGVtZW50OiovXHJcbiAgICAgICAgICBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtcclxuICAgICAgICAgIC8qbWFrZSB0aGUgbWF0Y2hpbmcgbGV0dGVycyBib2xkOiovXHJcbiAgICAgICAgICBiLmlubmVySFRNTCA9IFwiPHN0cm9uZz5cIiArIGFycltpXS5zdWJzdHIoMCwgdmFsLmxlbmd0aCkgKyBcIjwvc3Ryb25nPlwiO1xyXG4gICAgICAgICAgYi5pbm5lckhUTUwgKz0gYXJyW2ldLnN1YnN0cih2YWwubGVuZ3RoKTtcclxuICAgICAgICAgIC8qaW5zZXJ0IGEgaW5wdXQgZmllbGQgdGhhdCB3aWxsIGhvbGQgdGhlIGN1cnJlbnQgYXJyYXkgaXRlbSdzIHZhbHVlOiovXHJcbiAgICAgICAgICBiLmlubmVySFRNTCArPSBcIjxpbnB1dCB0eXBlPSdoaWRkZW4nIHZhbHVlPSdcIiArIGFycltpXSArIFwiJz5cIjtcclxuICAgICAgICAgIC8qZXhlY3V0ZSBhIGZ1bmN0aW9uIHdoZW4gc29tZW9uZSBjbGlja3Mgb24gdGhlIGl0ZW0gdmFsdWUgKERJViBlbGVtZW50KToqL1xyXG4gICAgICAgICAgYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgIC8qaW5zZXJ0IHRoZSB2YWx1ZSBmb3IgdGhlIGF1dG9jb21wbGV0ZSB0ZXh0IGZpZWxkOiovXHJcbiAgICAgICAgICAgICAgaW5wLnZhbHVlID0gdGhpcy5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpWzBdLnZhbHVlO1xyXG4gICAgICAgICAgICAgIC8qY2xvc2UgdGhlIGxpc3Qgb2YgYXV0b2NvbXBsZXRlZCB2YWx1ZXMsXHJcbiAgICAgICAgICAgICAgKG9yIGFueSBvdGhlciBvcGVuIGxpc3RzIG9mIGF1dG9jb21wbGV0ZWQgdmFsdWVzOiovXHJcbiAgICAgICAgICAgICAgY2xvc2VBbGxMaXN0cygpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBhLmFwcGVuZENoaWxkKGIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIH0pO1xyXG4gIC8qZXhlY3V0ZSBhIGZ1bmN0aW9uIHByZXNzZXMgYSBrZXkgb24gdGhlIGtleWJvYXJkOiovXHJcbiAgaW5wLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgdmFyIHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkICsgXCJhdXRvY29tcGxldGUtbGlzdFwiKTtcclxuICAgICAgaWYgKHgpIHggPSB4LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZGl2XCIpO1xyXG4gICAgICBpZiAoZS5rZXlDb2RlID09IDQwKSB7XHJcbiAgICAgICAgLypJZiB0aGUgYXJyb3cgRE9XTiBrZXkgaXMgcHJlc3NlZCxcclxuICAgICAgICBpbmNyZWFzZSB0aGUgY3VycmVudEZvY3VzIHZhcmlhYmxlOiovXHJcbiAgICAgICAgY3VycmVudEZvY3VzKys7XHJcbiAgICAgICAgLyphbmQgYW5kIG1ha2UgdGhlIGN1cnJlbnQgaXRlbSBtb3JlIHZpc2libGU6Ki9cclxuICAgICAgICBhZGRBY3RpdmUoeCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09IDM4KSB7IC8vdXBcclxuICAgICAgICAvKklmIHRoZSBhcnJvdyBVUCBrZXkgaXMgcHJlc3NlZCxcclxuICAgICAgICBkZWNyZWFzZSB0aGUgY3VycmVudEZvY3VzIHZhcmlhYmxlOiovXHJcbiAgICAgICAgY3VycmVudEZvY3VzLS07XHJcbiAgICAgICAgLyphbmQgYW5kIG1ha2UgdGhlIGN1cnJlbnQgaXRlbSBtb3JlIHZpc2libGU6Ki9cclxuICAgICAgICBhZGRBY3RpdmUoeCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09IDEzKSB7XHJcbiAgICAgICAgLypJZiB0aGUgRU5URVIga2V5IGlzIHByZXNzZWQsIHByZXZlbnQgdGhlIGZvcm0gZnJvbSBiZWluZyBzdWJtaXR0ZWQsKi9cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRGb2N1cyA+IC0xKSB7XHJcbiAgICAgICAgICAvKmFuZCBzaW11bGF0ZSBhIGNsaWNrIG9uIHRoZSBcImFjdGl2ZVwiIGl0ZW06Ki9cclxuICAgICAgICAgIGlmICh4KSB4W2N1cnJlbnRGb2N1c10uY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9KTtcclxuICBmdW5jdGlvbiBhZGRBY3RpdmUoeCkge1xyXG4gICAgLyphIGZ1bmN0aW9uIHRvIGNsYXNzaWZ5IGFuIGl0ZW0gYXMgXCJhY3RpdmVcIjoqL1xyXG4gICAgaWYgKCF4KSByZXR1cm4gZmFsc2U7XHJcbiAgICAvKnN0YXJ0IGJ5IHJlbW92aW5nIHRoZSBcImFjdGl2ZVwiIGNsYXNzIG9uIGFsbCBpdGVtczoqL1xyXG4gICAgcmVtb3ZlQWN0aXZlKHgpO1xyXG4gICAgaWYgKGN1cnJlbnRGb2N1cyA+PSB4Lmxlbmd0aCkgY3VycmVudEZvY3VzID0gMDtcclxuICAgIGlmIChjdXJyZW50Rm9jdXMgPCAwKSBjdXJyZW50Rm9jdXMgPSAoeC5sZW5ndGggLSAxKTtcclxuICAgIC8qYWRkIGNsYXNzIFwiYXV0b2NvbXBsZXRlLWFjdGl2ZVwiOiovXHJcbiAgICB4W2N1cnJlbnRGb2N1c10uY2xhc3NMaXN0LmFkZChcImF1dG9jb21wbGV0ZS1hY3RpdmVcIik7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHJlbW92ZUFjdGl2ZSh4KSB7XHJcbiAgICAvKmEgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoZSBcImFjdGl2ZVwiIGNsYXNzIGZyb20gYWxsIGF1dG9jb21wbGV0ZSBpdGVtczoqL1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHhbaV0uY2xhc3NMaXN0LnJlbW92ZShcImF1dG9jb21wbGV0ZS1hY3RpdmVcIik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGNsb3NlQWxsTGlzdHMoZWxtbnQpIHtcclxuICAgIC8qY2xvc2UgYWxsIGF1dG9jb21wbGV0ZSBsaXN0cyBpbiB0aGUgZG9jdW1lbnQsXHJcbiAgICBleGNlcHQgdGhlIG9uZSBwYXNzZWQgYXMgYW4gYXJndW1lbnQ6Ki9cclxuICAgIHZhciB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImF1dG9jb21wbGV0ZS1pdGVtc1wiKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoZWxtbnQgIT0geFtpXSAmJiBlbG1udCAhPSBpbnApIHtcclxuICAgICAgICB4W2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoeFtpXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLypleGVjdXRlIGEgZnVuY3Rpb24gd2hlbiBzb21lb25lIGNsaWNrcyBpbiB0aGUgZG9jdW1lbnQ6Ki9cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgY2xvc2VBbGxMaXN0cyhlLnRhcmdldCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qQW4gYXJyYXkgY29udGFpbmluZyBhbGwgdGhlIGNvdW50cnkgbmFtZXMgaW4gdGhlIHdvcmxkOiovXHJcbnZhciBjb3VudHJpZXMgPSBbXCJWaWN0b3JpYSBDaGFtYmVyc1wiLCBcIkRheWxlIEJ5cmRcIiwgXCJEYXduIFdvb2RcIiwgXCJEYW4gT2xpdmVyXCJdO1xyXG5cclxuLyppbml0aWF0ZSB0aGUgYXV0b2NvbXBsZXRlIGZ1bmN0aW9uIG9uIHRoZSBcIm15SW5wdXRcIiBlbGVtZW50LCBhbmQgcGFzcyBhbG9uZyB0aGUgY291bnRyaWVzIGFycmF5IGFzIHBvc3NpYmxlIGF1dG9jb21wbGV0ZSB2YWx1ZXM6Ki9cclxuYXV0b2NvbXBsZXRlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoTWVtYmVyXCIpLCBjb3VudHJpZXMpO1xyXG5cclxuXHJcbi8vTE9DQUwgU1RPUkFHRVxyXG5cclxubGV0IHNhdmVfZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlFbWFpbFN3aXRjaCcpO1xyXG5sZXQgc2F2ZV9wcm9maWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215b25vZmZzd2l0Y2gnKTtcclxuXHJcbmxldCBzYXZlX3NldHRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZVNldHRpbmdzJyk7XHJcbmxldCByZXNldF9zZXR0aW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbFNldHRpbmdzJyk7XHJcblxyXG4vLyBsZXQgdGltZXpvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZXpvbmUnKTtcclxubGV0IHRpbWV6b25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aW1lem9uZVwiKTtcclxuXHJcblxyXG5zYXZlX3NldHRpbmcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIC8qIEFjdCBvbiB0aGUgZXZlbnQgKi9cclxuICAgIC8vIHZhciBjaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUVtYWlsU3dpdGNoJyk7XHJcbiAgICBpZiAoc2F2ZV9lbWFpbC5jaGVja2VkID09IHRydWUpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlFbWFpbFN3aXRjaCcsIHNhdmVfZW1haWwuY2hlY2tlZCk7XHJcbiAgICAgICAgXHJcbiAgICB9IFxyXG5cclxuICAgIGlmIChzYXZlX2VtYWlsLmNoZWNrZWQgPT0gZmFsc2UpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbXlFbWFpbFN3aXRjaCcpO1xyXG4gICAgICAgIFxyXG4gICAgfSAgICAgXHJcblxyXG4gICAgaWYgKHNhdmVfcHJvZmlsZS5jaGVja2VkID09IHRydWUpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlvbm9mZnN3aXRjaCcsIHNhdmVfcHJvZmlsZS5jaGVja2VkKTtcclxuICAgICAgICBcclxuICAgIH0gXHJcblxyXG4gICAgaWYgKHNhdmVfcHJvZmlsZS5jaGVja2VkID09IGZhbHNlKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ215b25vZmZzd2l0Y2gnKTtcclxuICAgICAgICBcclxuICAgIH0gICAgIFxyXG5cclxuLy9TZWxlY3RcclxuICAgIGxldCBnZXRfdGltZXpvbmVfdmFsdWUgPSB0aW1lem9uZS52YWx1ZTtcclxuICBcclxuICAgIGlmIChnZXRfdGltZXpvbmVfdmFsdWUgPT0gXCJcIiApIHtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGltZXpvbmUnLCBnZXRfdGltZXpvbmVfdmFsdWUgKVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gIFxyXG5cclxuXHJcbiAgLy8gaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3ByZWYnKSA9PSBOVUxMKXtcclxuICBcclxuICAvLyB9IGVsc2Uge1xyXG4gIC8vICAgdmFyIHByZWYgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJlZicpO1xyXG4gIC8vICAgY2xlYXJTZWxlY3RlZCgpO1xyXG4gIC8vICAgLy9zZXQgdGhlIHNlbGVjdGVkIHN0YXRlIHRvIHRydWUgb24gdGhlIG9wdGlvbiBsb2NhbFN0b3JhZ2UgcmVtZW1iZXJzXHJcbiAgLy8gICB0aW1lem9uZS5maW5kKCcjJyArIHByZWYpLnByb3AoJ3NlbGVjdGVkJywgdHJ1ZSk7XHJcblxyXG4gIC8vIH1cclxuXHJcbiAgLy8gdmFyIHNldFByZWZlcmVuY2UgPSBmdW5jdGlvbigpe1xyXG4gIC8vICAgLy9yZW1lbWJlciB0aGUgSUQgb2YgdGhlIG9wdGlvbiB0aGUgdXNlciBzZWxlY3RlZFxyXG4gIC8vICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3ByZWYnLCB0aW1lem9uZS5maW5kKCc6c2VsZWN0ZWQnKS5hdHRyKCdpZCcpKTtcclxuICAvLyB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBhbGVydCgnU2F2ZWQhJyk7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcclxufSkpXHJcblxyXG5zYXZlX2VtYWlsLmNoZWNrZWQgPSBsb2NhbFN0b3JhZ2UubXlFbWFpbFN3aXRjaDtcclxuc2F2ZV9wcm9maWxlLmNoZWNrZWQgPSBsb2NhbFN0b3JhZ2UubXlvbm9mZnN3aXRjaDtcclxudGltZXpvbmUudmFsdWUgPSBsb2NhbFN0b3JhZ2UudGltZXpvbmU7XHJcblxyXG4vLyB0aW1lem9uZS52YWx1ZSA9ICdHVE0tNCc7XHJcblxyXG5yZXNldF9zZXR0aW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAvKiBBY3Qgb24gdGhlIGV2ZW50ICovXHJcbiAgICBcclxuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgYWxlcnQoJ0NsZWFyIGxvY2FsU3RvcmFnZScpO1xyXG59KSkiXX0=
