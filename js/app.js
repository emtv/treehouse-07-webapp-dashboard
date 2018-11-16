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
            label: "Data",
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
            label: "week",
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
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: "Data",
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
            borderColor: "#80b6f4",
            // pointBorderColor: "#80b6f4",
            // pointBackgroundColor: "#80b6f4",
            // pointHoverBackgroundColor: "#80b6f4",
            // pointHoverBorderColor: "#80b6f4",
            // pointBorderWidth: 5,
            // pointHoverRadius: 5,
            // pointHoverBorderWidth: 3,
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

save_setting.addEventListener('click', function (event) {
    /* Act on the event */
    // var checkbox = document.getElementById('myEmailSwitch');
    localStorage.setItem('myEmailSwitch', save_email.checked);
    localStorage.setItem('myonoffswitch', save_profile.checked);
    // console.log(localStorage);
});

save_email.checked = localStorage.myEmailSwitch;
save_profile.checked = localStorage.myonoffswitch;

reset_setting.addEventListener('click', function (event) {
    /* Act on the event */
    localStorage.clear();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcm9qZWN0cy91bml0LTA3LXdlYmFwcC1kYXNoYm9hcmQvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLFFBQVEsR0FBUixDQUFZLHdDQUFaOztBQUVBO0FBQ0EsSUFBSSxnQkFBZ0IsU0FBUyxjQUFULENBQXdCLFNBQXhCLENBQXBCO0FBQUEsSUFDQyxjQUFjLFNBQVMsY0FBVCxDQUF3QixPQUF4QixDQURmO0FBQUEsSUFFQyxlQUFlLFNBQVMsY0FBVCxDQUF3QixRQUF4QixDQUZoQjtBQUFBLElBR0MsZUFBZSxTQUFTLGNBQVQsQ0FBd0IsUUFBeEIsQ0FIaEI7QUFBQSxJQUlDLGdCQUFnQixTQUFTLGNBQVQsQ0FBd0IsU0FBeEIsQ0FKakI7QUFBQSxJQUtDLGlCQUFpQixTQUFTLGNBQVQsQ0FBd0IsVUFBeEIsQ0FMbEI7O0FBT0EsSUFBSSxpQkFBaUIsU0FBUyxnQkFBVCxDQUEwQixjQUExQixDQUFyQjtBQUNBLElBQUksZ0JBQWdCLFNBQVMsZ0JBQVQsQ0FBMEIsYUFBMUIsQ0FBcEI7QUFDQSxJQUFJLFdBQVcsU0FBUyxjQUFULENBQXdCLE1BQXhCLENBQWY7QUFDQSxJQUFJLGVBQWUsU0FBUyxhQUFULENBQXVCLG1CQUF2QixDQUFuQjtBQUNBLElBQUkseUJBQXlCLFNBQVMsY0FBVCxDQUF3QixvQkFBeEIsQ0FBN0I7O0FBR0E7O0FBRUEsSUFBSSxhQUFhLE9BQU8sVUFBUCxDQUFrQixxQkFBbEIsQ0FBakI7O0FBRUEsSUFBSSx1QkFBSjs7QUFFQSxJQUFJLG1CQUFKO0FBQ0EsSUFBSSxxQkFBSjs7QUFFQSxJQUFJLFdBQVcsT0FBZixFQUF1QjtBQUNyQjtBQUNBLGlCQUFXLENBQVg7QUFDQSxtQkFBZSxDQUFmO0FBRUQsQ0FMRCxNQUtPO0FBQ0w7QUFDQSxpQkFBVyxDQUFYO0FBQ0EsbUJBQWUsQ0FBZjtBQUNEOztBQUtEO0FBQ0E7QUFD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QUFULENBQXdCLGVBQXhCLENBQW5COztBQUVBLElBQUksZUFBZSxTQUFTLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBbkI7QUFDQSxJQUFJLGdCQUFnQixTQUFTLGNBQVQsQ0FBd0IsZ0JBQXhCLENBQXBCOztBQUVBLGFBQWEsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBd0MsVUFBUyxLQUFULEVBQWdCO0FBQ3BEO0FBQ0E7QUFDQSxpQkFBYSxPQUFiLENBQXFCLGVBQXJCLEVBQXNDLFdBQVcsT0FBakQ7QUFDQSxpQkFBYSxPQUFiLENBQXFCLGVBQXJCLEVBQXNDLGFBQWEsT0FBbkQ7QUFDQTtBQUNILENBTkQ7O0FBUUEsV0FBVyxPQUFYLEdBQXFCLGFBQWEsYUFBbEM7QUFDQSxhQUFhLE9BQWIsR0FBdUIsYUFBYSxhQUFwQzs7QUFHQSxjQUFjLGdCQUFkLENBQStCLE9BQS9CLEVBQXlDLFVBQVMsS0FBVCxFQUFnQjtBQUNyRDtBQUNBLGlCQUFhLEtBQWI7QUFDSCxDQUhEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc31yZXR1cm4gZX0pKCkiLCJjb25zb2xlLmxvZygnTWFkZSB3aXRoIGxvdmUgYW5kIGZ1bGwgQ29kZSEgYnkgQEVtVHYnKTtcclxuXHJcbi8vU2V0IHZhcmlhYmxlc1xyXG5sZXQgd2lkZ2V0VHJhZmZpYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFmZmljJyksXHJcblx0d2lkZ2V0RGFpbHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGFpbHknKSxcclxuXHR3aWRnZXRNb2JpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9iaWxlJyksXHJcblx0d2lkZ2V0U29jaWFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NvY2lhbCcpLFxyXG5cdHdpZGdldE1lbWJlcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVtYmVycycpLFxyXG5cdHdpZGdldFNldHRpbmdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzJyk7XHJcblxyXG5sZXQgYnRuX2FsZXJ0Q2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWxlcnQtY2xvc2UnKTtcclxubGV0IGJ0bl9iZWxsQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmVsbC1jbG9zZScpO1xyXG5sZXQgZ2V0X2JlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmVsbCcpO1xyXG5sZXQgZ2V0X2Ryb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLWNvbnRlbnQnKTtcclxubGV0IGdldF9ncm91cF9ub3RpZmljYWNpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JvdXBfbm90aWZpY2FjaW9uJyk7XHJcblxyXG5cclxuLy9WYWxpZGF0aW9uIFBpeGVsIFJhdGlvXHJcblxyXG5sZXQgZ2V0X3NjcmVlbiA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogMTAyNHB4KVwiKTtcclxuXHJcbmxldCBsZWdlbmRQb3NpdGlvbjtcclxuXHJcbmxldCBwaXhlbFJhdGlvO1xyXG5sZXQgcGl4ZWxSYXRpb182O1xyXG5cclxuaWYgKGdldF9zY3JlZW4ubWF0Y2hlcyl7XHJcbiAgLy8gbGVnZW5kUG9zaXRpb24gPSAncmlnaHQnO1xyXG4gIHBpeGVsUmF0aW89NDtcclxuICBwaXhlbFJhdGlvXzYgPSAyO1xyXG5cclxufSBlbHNlIHtcclxuICAvLyBsZWdlbmRQb3NpdGlvbiA9ICd0b3AnO1xyXG4gIHBpeGVsUmF0aW89MTtcclxuICBwaXhlbFJhdGlvXzYgPSAxO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLyA9PT09PT09PT09PT09PVxyXG4vLyBPUEVOIEJFTExcclxuLy8gPT09PT09PT09PT09PT1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGVsZW1lbnQsIGNscykge1xyXG4gICAgcmV0dXJuICgnICcgKyBlbGVtZW50LmNsYXNzTmFtZSArICcgJykuaW5kZXhPZignICcgKyBjbHMgKyAnICcpID4gLTE7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjaGVja0VtcHR5Tm90aWZpY2F0aW9ucyAoKXtcclxuICAgIC8vIGFsZXJ0KCd1bm8nKTtcclxuXHJcbiAgICBsZXQgY2hlY2tfZW1wdHkgPSBnZXRfZ3JvdXBfbm90aWZpY2FjaW9uLmNoaWxkTm9kZXMubGVuZ3RoO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGNoZWNrX2VtcHR5KTtcclxuXHJcbiAgICBpZiAoY2hlY2tfZW1wdHkgPT0gNCkge1xyXG5cclxuICAgICAgICBsZXQgc2V0X2VtcHR5X3AgPSAnPHA+QWxsIHVwZGF0ZSEgPSk8L3A+JztcclxuICAgICAgICBsZXQgc2V0X2VtcHR5X2l0ZW0gPSAnPGRpdiBjbGFzcz1cIml0ZW1fX3RleHRcIj4nICsgc2V0X2VtcHR5X3AgKyAnPC9kaXY+JztcclxuICAgICAgICBsZXQgc2V0X2VtcHR5X25vdGlmaWNhY2lvbiA9ICc8ZGl2IGNsYXNzPVwibm90aWZpY2FjaW9uLS1pdGVtXCI+JyArIHNldF9lbXB0eV9pdGVtICsgJzwvZGl2Pic7XHJcblxyXG4gICAgICAgIGdldF9ncm91cF9ub3RpZmljYWNpb24uaW5uZXJIVE1MID0gc2V0X2VtcHR5X25vdGlmaWNhY2lvbjtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuZm9yICh2YXIgaSA9IDA7IGkgPCBidG5fYmVsbENsb3NlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBidG5fYmVsbENsb3NlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBjaGVja0VtcHR5Tm90aWZpY2F0aW9ucygpO1xyXG4gICAgfSkpXHJcbiAgIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmdldF9iZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBcclxuICAgIC8vIGNoZWNrRW1wdHlOb3RpZmljYXRpb25zKCk7XHJcblxyXG5cclxuICAgIGxldCBjaGVja19kaXNhYmxlID0gdG9nZ2xlQ2xhc3MoZ2V0X2dyb3VwX25vdGlmaWNhY2lvbiwgJ2Ryb3Bkb3duLWRpc2FibGUnKTtcclxuICAgIGxldCBjaGVja19hY3RpdmUgPSB0b2dnbGVDbGFzcyhnZXRfZ3JvdXBfbm90aWZpY2FjaW9uLCAnZHJvcGRvd24tYWN0aXZlJyk7XHJcblxyXG4gICAvLyBUZXN0IHRoZSBtZXRob2RcclxuICAgaWYgKGNoZWNrX2Rpc2FibGUgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGdldF9ncm91cF9ub3RpZmljYWNpb24uY2xhc3NMaXN0LnJlbW92ZSgnZHJvcGRvd24tZGlzYWJsZScpO1xyXG4gICAgICAgIGdldF9ncm91cF9ub3RpZmljYWNpb24uY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24tYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIGdldF9iZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpbmctb2ZmJyk7XHJcbiAgICAgICAgZ2V0X2JlbGwuY2xhc3NMaXN0LmFkZCgnZGluZy1vbicpO1xyXG5cclxuICAgfSBlbHNlIGlmICggY2hlY2tfYWN0aXZlID09IHRydWUgKSB7XHJcbiAgICAgICAgZ2V0X2dyb3VwX25vdGlmaWNhY2lvbi5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wZG93bi1hY3RpdmUnKTtcclxuICAgICAgICBnZXRfZ3JvdXBfbm90aWZpY2FjaW9uLmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duLWRpc2FibGUnKTtcclxuICAgICAgICBnZXRfYmVsbC5jbGFzc0xpc3QucmVtb3ZlKCdkaW5nLW9uJyk7XHJcbiAgICAgICAgZ2V0X2JlbGwuY2xhc3NMaXN0LmFkZCgnZGluZy1vZmYnKTtcclxuICAgfSBlbHNlIHtcclxuXHJcbiAgIH1cclxuXHJcbn0pKTtcclxuXHJcbi8vQ0hFQ0sgQ09OVEFJTiBOT1RJRklDQUNJT05TXHJcblxyXG4vLyBncm91cF9ub3RpZmljYWNpb25cclxuXHJcblxyXG5cclxuXHJcbi8vID09PT09PT09PT09PT09XHJcbi8vIENMT1NFIEFMRVJUU1xyXG4vLyA9PT09PT09PT09PT09PVxyXG5cclxuZnVuY3Rpb24gY2xvc2VBbGVydChldmVudCkge1xyXG4gICAgbGV0IGdldF9wYXJlbnQgPSBldmVudC5wYXJlbnROb2RlO1xyXG4gICAgZ2V0X3BhcmVudC5yZW1vdmUoKTtcclxufVxyXG5cclxuZm9yICh2YXIgaSA9IDA7IGkgPCBidG5fYWxlcnRDbG9zZS5sZW5ndGg7IGkrKykge1xyXG4gICAgYnRuX2FsZXJ0Q2xvc2VbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGNsb3NlQWxlcnQodGhpcyk7XHJcbiAgICB9KSlcclxufVxyXG5cclxuXHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gU0VUIENIQVJUU1xyXG4vLyAtLS0tLS0tLS0tLVxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbi8vID09PT09PT09PT09PT09XHJcbi8vIExJTkUgQ0hBUlRcclxuLy8gPT09PT09PT09PT09PT1cclxubGV0IG15Q2hhcnQgPSBuZXcgQ2hhcnQod2lkZ2V0VHJhZmZpYywge1xyXG4gICAgdHlwZTogJ2xpbmUnLFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGxhYmVsczogW1wiMTYtMjJcIiwgXCIyMy0yOVwiLCBcIjMwLTVcIiwgXCI2LTEyXCIsIFwiMTMtMTlcIiwgXCIyNy0zXCIsIFwiNC0xMFwiLCBcIjExLTE3XCIsIFwiMTgtMjRcIiwgXCIyNS0zMVwiXSxcclxuICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgbGFiZWw6IFwiRGF0YVwiLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjODBiNmY0XCIsXHJcbiAgICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6IFwiIzgwYjZmNFwiLFxyXG4gICAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogXCIjODBiNmY0XCIsXHJcbiAgICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFwiIzgwYjZmNFwiLFxyXG4gICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IFwiIzgwYjZmNFwiLFxyXG4gICAgICAgICAgICBwb2ludEJvcmRlcldpZHRoOiA1LFxyXG4gICAgICAgICAgICBwb2ludEhvdmVyUmFkaXVzOiA1LFxyXG4gICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyV2lkdGg6IDMsXHJcbiAgICAgICAgICAgIHBvaW50UmFkaXVzOiA1LFxyXG4gICAgICAgICAgICBmaWxsOiB0cnVlLFxyXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogMixcclxuICAgICAgICAgICAgZGF0YTogWzUwMCwgMTUwMCwgMTAwMCwgMTc1MCwgMjI1MCwgMTc1MCwgMjAwMCwgMTUwMCwgMjAwMCwgMjUwMCwgMjAwMCwgMjUwMCBdXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIndlZWtcIixcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzgwYjZmNFwiLFxyXG4gICAgICAgICAgICBwb2ludEJvcmRlckNvbG9yOiBcIiM4MGI2ZjRcIixcclxuICAgICAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6IFwiIzgwYjZmNFwiLFxyXG4gICAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiBcIiM4MGI2ZjRcIixcclxuICAgICAgICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiBcIiM4MGI2ZjRcIixcclxuICAgICAgICAgICAgcG9pbnRCb3JkZXJXaWR0aDogNSxcclxuICAgICAgICAgICAgcG9pbnRIb3ZlclJhZGl1czogNSxcclxuICAgICAgICAgICAgcG9pbnRIb3ZlckJvcmRlcldpZHRoOiAzLFxyXG4gICAgICAgICAgICBwb2ludFJhZGl1czogNSxcclxuICAgICAgICAgICAgZmlsbDogdHJ1ZSxcclxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDIsXHJcbiAgICAgICAgICAgIGRhdGE6IFs1MDAsIDE1MDAsIDEwMDAsIDE3NTAsIDIyNTAsIDE3NTAsIDIwMDAsIDE1MDAsIDIwMDAsIDI1MDAsIDIwMDAsIDI1MDAgXVxyXG4gICAgICAgIH1dXHJcbiAgICB9LFxyXG4gICAgLy9EYXlcclxuXHJcbiAgICAvL1xyXG4gICAgb3B0aW9uczoge1xyXG5cclxuICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgdGV4dDogJ1RyYWZmaWMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3BlY3RSYXRpbzpwaXhlbFJhdGlvLFxyXG4gICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgICB5QXhlczogW3tcclxuICAgICAgICAgICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udENvbG9yOiBcInJnYmEoMCwwLDAsMC41KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogXCJib2xkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4VGlja3NMaW1pdDogMTUsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3RlcFNpemU6IDAuNSxcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdyaWRMaW5lczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYXdUaWNrczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbn1dLFxyXG4gICAgICAgICAgICB4QXhlczogW3tcclxuICAgICAgICAgICAgICAgIGdyaWRMaW5lczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHplcm9MaW5lQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBkcmF3VGlja3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZVxyXG59LFxyXG4gICAgICAgICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICBmb250Q29sb3I6IFwicmdiYSgwLDAsMCwwLjUpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFN0eWxlOiBcImJvbGRcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXhUaWNrc0xpbWl0OiAxNVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8gPT09PT09PT09PT09PT1cclxuLy8gREFJTFkgQ0hBUlRcclxuLy8gPT09PT09PT09PT09PT1cclxubGV0IGRhaWx5Q2hhcnQgPSBuZXcgQ2hhcnQod2lkZ2V0RGFpbHksIHtcclxuICAgIHR5cGU6ICdiYXInLFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGxhYmVsczogW1wiU1wiLCBcIk1cIiwgXCJUXCIsIFwiV1wiLCBcIlRcIiwgXCJGXCIsIFwiU1wiXSxcclxuICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgbGFiZWw6IFwiRGF0YVwiLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjODBiNmY0XCIsXHJcbiAgICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6IFwiIzgwYjZmNFwiLFxyXG4gICAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogXCIjODBiNmY0XCIsXHJcbiAgICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFwiIzgwYjZmNFwiLFxyXG4gICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IFwiIzgwYjZmNFwiLFxyXG4gICAgICAgICAgICBwb2ludEJvcmRlcldpZHRoOiA1LFxyXG4gICAgICAgICAgICBwb2ludEhvdmVyUmFkaXVzOiA1LFxyXG4gICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyV2lkdGg6IDMsXHJcbiAgICAgICAgICAgIHBvaW50UmFkaXVzOiA1LFxyXG4gICAgICAgICAgICBmaWxsOiB0cnVlLFxyXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogMixcclxuICAgICAgICAgICAgZGF0YTogWzUwLCA3NSwgMTUwLCAxMDAsIDIwMCwgMTc1LCA3NV1cclxuICAgICAgICB9XVxyXG4gICAgfSxcclxuXHJcbiAgICBvcHRpb25zOiB7XHJcblx0XHR0aXRsZToge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICB0ZXh0OiAnRGFpbHknXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzcGVjdFJhdGlvOnBpeGVsUmF0aW9fNixcclxuICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgICAgeUF4ZXM6IFt7XHJcbiAgICAgICAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRDb2xvcjogXCJyZ2JhKDAsMCwwLDAuNSlcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250U3R5bGU6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heFRpY2tzTGltaXQ6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3RlcFNpemU6IDAuNSxcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdyaWRMaW5lczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYXdUaWNrczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG59XSxcclxuICAgICAgICAgICAgeEF4ZXM6IFt7XHJcbiAgICAgICAgICAgICAgICBncmlkTGluZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICB6ZXJvTGluZUNvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZHJhd1RpY2tzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWVcclxufSxcclxuICAgICAgICAgICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udENvbG9yOiBcInJnYmEoMCwwLDAsMC41KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogXCJib2xkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4VGlja3NMaW1pdDogMTVcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG4vLyA9PT09PT09PT09PT09PVxyXG4vLyBNT0JJTEUgQ0hBUlRcclxuLy8gPT09PT09PT09PT09PT1cclxuXHJcbmxldCBtb2JpbGVDaGFydCA9IG5ldyBDaGFydCh3aWRnZXRNb2JpbGUsIHtcclxuICAgIHR5cGU6ICdkb3VnaG51dCcsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgbGFiZWxzOiBbXCJQaG9uZXNcIiwgXCJUYWJsZXRzXCIsIFwiRGVza3RvcFwiXSxcclxuICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgbGFiZWw6IFwiRGF0YVwiLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjODBiNmY0XCIsXHJcbiAgICAgICAgICAgIC8vIHBvaW50Qm9yZGVyQ29sb3I6IFwiIzgwYjZmNFwiLFxyXG4gICAgICAgICAgICAvLyBwb2ludEJhY2tncm91bmRDb2xvcjogXCIjODBiNmY0XCIsXHJcbiAgICAgICAgICAgIC8vIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFwiIzgwYjZmNFwiLFxyXG4gICAgICAgICAgICAvLyBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IFwiIzgwYjZmNFwiLFxyXG4gICAgICAgICAgICAvLyBwb2ludEJvcmRlcldpZHRoOiA1LFxyXG4gICAgICAgICAgICAvLyBwb2ludEhvdmVyUmFkaXVzOiA1LFxyXG4gICAgICAgICAgICAvLyBwb2ludEhvdmVyQm9yZGVyV2lkdGg6IDMsXHJcbiAgICAgICAgICAgIHBvaW50UmFkaXVzOiA1LFxyXG4gICAgICAgICAgICBmaWxsOiB0cnVlLFxyXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogMixcclxuICAgICAgICAgICAgZGF0YTogWzE1LCAxNSwgNzBdXHJcbiAgICAgICAgfV1cclxuICAgIH0sXHJcblxyXG4gICAgb3B0aW9uczoge1xyXG5cdFx0dGl0bGU6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgdGV4dDogJ01vYmlsZSBVc2VycydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJyaWdodFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3BlY3RSYXRpbzpwaXhlbFJhdGlvXzYsXHJcblxyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG5cclxuLy9TRVQgUFJFVkVOVCBERUZBVUxUXHJcblxyXG52YXIgY2hlY2tNZXNzYWdlRm9ybSA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBhbGVydChcIk1lc3NhZ2UgU2VudCFcIik7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG59O1xyXG5cclxuLy8geW91ciBmb3JtXHJcbnZhciBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyTWVzc2FnZVwiKTtcclxuXHJcbi8vIGF0dGFjaCBldmVudCBsaXN0ZW5lclxyXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgY2hlY2tNZXNzYWdlRm9ybSwgdHJ1ZSk7XHJcblxyXG5cclxuXHJcbi8vU0VUIEFVVE9NUExFVEVcclxuXHJcblxyXG5mdW5jdGlvbiBhdXRvY29tcGxldGUoaW5wLCBhcnIpIHtcclxuICAvKnRoZSBhdXRvY29tcGxldGUgZnVuY3Rpb24gdGFrZXMgdHdvIGFyZ3VtZW50cyxcclxuICB0aGUgdGV4dCBmaWVsZCBlbGVtZW50IGFuZCBhbiBhcnJheSBvZiBwb3NzaWJsZSBhdXRvY29tcGxldGVkIHZhbHVlczoqL1xyXG4gIHZhciBjdXJyZW50Rm9jdXM7XHJcbiAgLypleGVjdXRlIGEgZnVuY3Rpb24gd2hlbiBzb21lb25lIHdyaXRlcyBpbiB0aGUgdGV4dCBmaWVsZDoqL1xyXG4gIGlucC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICB2YXIgYSwgYiwgaSwgdmFsID0gdGhpcy52YWx1ZTtcclxuICAgICAgLypjbG9zZSBhbnkgYWxyZWFkeSBvcGVuIGxpc3RzIG9mIGF1dG9jb21wbGV0ZWQgdmFsdWVzKi9cclxuICAgICAgY2xvc2VBbGxMaXN0cygpO1xyXG4gICAgICBpZiAoIXZhbCkgeyByZXR1cm4gZmFsc2U7fVxyXG4gICAgICBjdXJyZW50Rm9jdXMgPSAtMTtcclxuICAgICAgLypjcmVhdGUgYSBESVYgZWxlbWVudCB0aGF0IHdpbGwgY29udGFpbiB0aGUgaXRlbXMgKHZhbHVlcyk6Ki9cclxuICAgICAgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XHJcbiAgICAgIGEuc2V0QXR0cmlidXRlKFwiaWRcIiwgdGhpcy5pZCArIFwiYXV0b2NvbXBsZXRlLWxpc3RcIik7XHJcbiAgICAgIGEuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhdXRvY29tcGxldGUtaXRlbXNcIik7XHJcbiAgICAgIC8qYXBwZW5kIHRoZSBESVYgZWxlbWVudCBhcyBhIGNoaWxkIG9mIHRoZSBhdXRvY29tcGxldGUgY29udGFpbmVyOiovXHJcbiAgICAgIHRoaXMucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChhKTtcclxuICAgICAgLypmb3IgZWFjaCBpdGVtIGluIHRoZSBhcnJheS4uLiovXHJcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvKmNoZWNrIGlmIHRoZSBpdGVtIHN0YXJ0cyB3aXRoIHRoZSBzYW1lIGxldHRlcnMgYXMgdGhlIHRleHQgZmllbGQgdmFsdWU6Ki9cclxuICAgICAgICBpZiAoYXJyW2ldLnN1YnN0cigwLCB2YWwubGVuZ3RoKS50b1VwcGVyQ2FzZSgpID09IHZhbC50b1VwcGVyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAvKmNyZWF0ZSBhIERJViBlbGVtZW50IGZvciBlYWNoIG1hdGNoaW5nIGVsZW1lbnQ6Ki9cclxuICAgICAgICAgIGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xyXG4gICAgICAgICAgLyptYWtlIHRoZSBtYXRjaGluZyBsZXR0ZXJzIGJvbGQ6Ki9cclxuICAgICAgICAgIGIuaW5uZXJIVE1MID0gXCI8c3Ryb25nPlwiICsgYXJyW2ldLnN1YnN0cigwLCB2YWwubGVuZ3RoKSArIFwiPC9zdHJvbmc+XCI7XHJcbiAgICAgICAgICBiLmlubmVySFRNTCArPSBhcnJbaV0uc3Vic3RyKHZhbC5sZW5ndGgpO1xyXG4gICAgICAgICAgLyppbnNlcnQgYSBpbnB1dCBmaWVsZCB0aGF0IHdpbGwgaG9sZCB0aGUgY3VycmVudCBhcnJheSBpdGVtJ3MgdmFsdWU6Ki9cclxuICAgICAgICAgIGIuaW5uZXJIVE1MICs9IFwiPGlucHV0IHR5cGU9J2hpZGRlbicgdmFsdWU9J1wiICsgYXJyW2ldICsgXCInPlwiO1xyXG4gICAgICAgICAgLypleGVjdXRlIGEgZnVuY3Rpb24gd2hlbiBzb21lb25lIGNsaWNrcyBvbiB0aGUgaXRlbSB2YWx1ZSAoRElWIGVsZW1lbnQpOiovXHJcbiAgICAgICAgICBiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgLyppbnNlcnQgdGhlIHZhbHVlIGZvciB0aGUgYXV0b2NvbXBsZXRlIHRleHQgZmllbGQ6Ki9cclxuICAgICAgICAgICAgICBpbnAudmFsdWUgPSB0aGlzLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIilbMF0udmFsdWU7XHJcbiAgICAgICAgICAgICAgLypjbG9zZSB0aGUgbGlzdCBvZiBhdXRvY29tcGxldGVkIHZhbHVlcyxcclxuICAgICAgICAgICAgICAob3IgYW55IG90aGVyIG9wZW4gbGlzdHMgb2YgYXV0b2NvbXBsZXRlZCB2YWx1ZXM6Ki9cclxuICAgICAgICAgICAgICBjbG9zZUFsbExpc3RzKCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGEuYXBwZW5kQ2hpbGQoYik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfSk7XHJcbiAgLypleGVjdXRlIGEgZnVuY3Rpb24gcHJlc3NlcyBhIGtleSBvbiB0aGUga2V5Ym9hcmQ6Ki9cclxuICBpbnAuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICB2YXIgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQgKyBcImF1dG9jb21wbGV0ZS1saXN0XCIpO1xyXG4gICAgICBpZiAoeCkgeCA9IHguZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJkaXZcIik7XHJcbiAgICAgIGlmIChlLmtleUNvZGUgPT0gNDApIHtcclxuICAgICAgICAvKklmIHRoZSBhcnJvdyBET1dOIGtleSBpcyBwcmVzc2VkLFxyXG4gICAgICAgIGluY3JlYXNlIHRoZSBjdXJyZW50Rm9jdXMgdmFyaWFibGU6Ki9cclxuICAgICAgICBjdXJyZW50Rm9jdXMrKztcclxuICAgICAgICAvKmFuZCBhbmQgbWFrZSB0aGUgY3VycmVudCBpdGVtIG1vcmUgdmlzaWJsZToqL1xyXG4gICAgICAgIGFkZEFjdGl2ZSh4KTtcclxuICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT0gMzgpIHsgLy91cFxyXG4gICAgICAgIC8qSWYgdGhlIGFycm93IFVQIGtleSBpcyBwcmVzc2VkLFxyXG4gICAgICAgIGRlY3JlYXNlIHRoZSBjdXJyZW50Rm9jdXMgdmFyaWFibGU6Ki9cclxuICAgICAgICBjdXJyZW50Rm9jdXMtLTtcclxuICAgICAgICAvKmFuZCBhbmQgbWFrZSB0aGUgY3VycmVudCBpdGVtIG1vcmUgdmlzaWJsZToqL1xyXG4gICAgICAgIGFkZEFjdGl2ZSh4KTtcclxuICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT0gMTMpIHtcclxuICAgICAgICAvKklmIHRoZSBFTlRFUiBrZXkgaXMgcHJlc3NlZCwgcHJldmVudCB0aGUgZm9ybSBmcm9tIGJlaW5nIHN1Ym1pdHRlZCwqL1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoY3VycmVudEZvY3VzID4gLTEpIHtcclxuICAgICAgICAgIC8qYW5kIHNpbXVsYXRlIGEgY2xpY2sgb24gdGhlIFwiYWN0aXZlXCIgaXRlbToqL1xyXG4gICAgICAgICAgaWYgKHgpIHhbY3VycmVudEZvY3VzXS5jbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIH0pO1xyXG4gIGZ1bmN0aW9uIGFkZEFjdGl2ZSh4KSB7XHJcbiAgICAvKmEgZnVuY3Rpb24gdG8gY2xhc3NpZnkgYW4gaXRlbSBhcyBcImFjdGl2ZVwiOiovXHJcbiAgICBpZiAoIXgpIHJldHVybiBmYWxzZTtcclxuICAgIC8qc3RhcnQgYnkgcmVtb3ZpbmcgdGhlIFwiYWN0aXZlXCIgY2xhc3Mgb24gYWxsIGl0ZW1zOiovXHJcbiAgICByZW1vdmVBY3RpdmUoeCk7XHJcbiAgICBpZiAoY3VycmVudEZvY3VzID49IHgubGVuZ3RoKSBjdXJyZW50Rm9jdXMgPSAwO1xyXG4gICAgaWYgKGN1cnJlbnRGb2N1cyA8IDApIGN1cnJlbnRGb2N1cyA9ICh4Lmxlbmd0aCAtIDEpO1xyXG4gICAgLyphZGQgY2xhc3MgXCJhdXRvY29tcGxldGUtYWN0aXZlXCI6Ki9cclxuICAgIHhbY3VycmVudEZvY3VzXS5jbGFzc0xpc3QuYWRkKFwiYXV0b2NvbXBsZXRlLWFjdGl2ZVwiKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gcmVtb3ZlQWN0aXZlKHgpIHtcclxuICAgIC8qYSBmdW5jdGlvbiB0byByZW1vdmUgdGhlIFwiYWN0aXZlXCIgY2xhc3MgZnJvbSBhbGwgYXV0b2NvbXBsZXRlIGl0ZW1zOiovXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHgubGVuZ3RoOyBpKyspIHtcclxuICAgICAgeFtpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYXV0b2NvbXBsZXRlLWFjdGl2ZVwiKTtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gY2xvc2VBbGxMaXN0cyhlbG1udCkge1xyXG4gICAgLypjbG9zZSBhbGwgYXV0b2NvbXBsZXRlIGxpc3RzIGluIHRoZSBkb2N1bWVudCxcclxuICAgIGV4Y2VwdCB0aGUgb25lIHBhc3NlZCBhcyBhbiBhcmd1bWVudDoqL1xyXG4gICAgdmFyIHggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYXV0b2NvbXBsZXRlLWl0ZW1zXCIpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChlbG1udCAhPSB4W2ldICYmIGVsbW50ICE9IGlucCkge1xyXG4gICAgICAgIHhbaV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh4W2ldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvKmV4ZWN1dGUgYSBmdW5jdGlvbiB3aGVuIHNvbWVvbmUgY2xpY2tzIGluIHRoZSBkb2N1bWVudDoqL1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBjbG9zZUFsbExpc3RzKGUudGFyZ2V0KTtcclxuICB9KTtcclxufVxyXG5cclxuLypBbiBhcnJheSBjb250YWluaW5nIGFsbCB0aGUgY291bnRyeSBuYW1lcyBpbiB0aGUgd29ybGQ6Ki9cclxudmFyIGNvdW50cmllcyA9IFtcIlZpY3RvcmlhIENoYW1iZXJzXCIsIFwiRGF5bGUgQnlyZFwiLCBcIkRhd24gV29vZFwiLCBcIkRhbiBPbGl2ZXJcIl07XHJcblxyXG4vKmluaXRpYXRlIHRoZSBhdXRvY29tcGxldGUgZnVuY3Rpb24gb24gdGhlIFwibXlJbnB1dFwiIGVsZW1lbnQsIGFuZCBwYXNzIGFsb25nIHRoZSBjb3VudHJpZXMgYXJyYXkgYXMgcG9zc2libGUgYXV0b2NvbXBsZXRlIHZhbHVlczoqL1xyXG5hdXRvY29tcGxldGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hNZW1iZXJcIiksIGNvdW50cmllcyk7XHJcblxyXG5cclxuLy9MT0NBTCBTVE9SQUdFXHJcblxyXG5sZXQgc2F2ZV9lbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUVtYWlsU3dpdGNoJyk7XHJcbmxldCBzYXZlX3Byb2ZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlvbm9mZnN3aXRjaCcpO1xyXG5cclxubGV0IHNhdmVfc2V0dGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlU2V0dGluZ3MnKTtcclxubGV0IHJlc2V0X3NldHRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsU2V0dGluZ3MnKTtcclxuXHJcbnNhdmVfc2V0dGluZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChmdW5jdGlvbihldmVudCkge1xyXG4gICAgLyogQWN0IG9uIHRoZSBldmVudCAqL1xyXG4gICAgLy8gdmFyIGNoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215RW1haWxTd2l0Y2gnKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteUVtYWlsU3dpdGNoJywgc2F2ZV9lbWFpbC5jaGVja2VkKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteW9ub2Zmc3dpdGNoJywgc2F2ZV9wcm9maWxlLmNoZWNrZWQpO1xyXG4gICAgLy8gY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcclxufSkpXHJcblxyXG5zYXZlX2VtYWlsLmNoZWNrZWQgPSBsb2NhbFN0b3JhZ2UubXlFbWFpbFN3aXRjaDtcclxuc2F2ZV9wcm9maWxlLmNoZWNrZWQgPSBsb2NhbFN0b3JhZ2UubXlvbm9mZnN3aXRjaDtcclxuXHJcblxyXG5yZXNldF9zZXR0aW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAvKiBBY3Qgb24gdGhlIGV2ZW50ICovXHJcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxufSkpIl19
