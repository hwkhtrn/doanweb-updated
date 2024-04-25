{//Check ticket amount
var ticketAmount = 0;
var singleTicketAmount = 0;
var coupleTicketAmount = 0;

function decrByOne(fieldId) {
    var x = document.getElementById(fieldId).value;
    if (x == 0) {
        document.getElementById(fieldId).value = x;
    } else {
        document.getElementById(fieldId).value = --x;
    }
    updateTicketAmount();
}

function incrByOne(fieldId) {
    var x = document.getElementById(fieldId).value;
    document.getElementById(fieldId).value = ++x;
    ++ticketAmount; //hàm xong thì tăng tA lên 1
    updateTicketAmount();
}

function updateTicketAmount() {
    var a = Number(document.getElementById("quantity-field1").value);
    var b = Number(document.getElementById("quantity-field2").value);
    var c = Number(document.getElementById("quantity-field3").value);
    ticketAmount = a + b + c * 2;
    singleTicketAmount = a + b;
    coupleTicketAmount = c;
}

function checkTicketAmount(fieldId) {
    if (fieldId == 'quantity-field3') {
        if (ticketAmount >= 7) {
        window.alert('The maximum amount of tickets is 8!');
        } else {
        incrByOne(fieldId)
        }
    } else {
        if (ticketAmount <= 7)
        {
            incrByOne(fieldId)
        } else {
            window.alert('The maximum amount of tickets is 8!');
    }   }
}
}

{// Toggle functions
function toggleFocusMFH(element) {
    // Loại bỏ class "movie-info--hours-option-focus" khỏi tất cả các thẻ li trong ul
    document.querySelectorAll('ul.movie-info--hours-ulist li.movie-info--hours-list button.movie-info--hours-option').forEach(function(a) {
        a.classList.remove('movie-info--hours-option-focus');
    });

    // Thêm class "movie-info--hours-option-focus" vào thẻ li được nhấp
    element.classList.add('movie-info--hours-option-focus');
}

function toggleFocusCSS(element) {
     // Kiểm tra xem thẻ div có class "selected" không
    if (element.classList.contains('selected')) {
        // Nếu có, không làm gì cả
    } else {
        //Hủy chọn ghế nếu ghế đã được chọn
        if (element.classList.contains('selecting') || element.classList.contains('selecting-double')) {
            element.classList.remove('selecting');
            element.classList.remove('selecting-double');
        } else {
            // Nếu không, thêm class "selecting"
            if (element.classList.contains('double')) {
                element.classList.add('selecting-double');
            } else {
                element.classList.add('selecting');
            }   
        }
    }
}

function toggleFocusMIO(element) {
    // Loại bỏ class "movie-info--option-active" khỏi tất cả các thẻ li trong ul
    document.querySelectorAll('ul.movie-info--dates-list li.movie-info--date div.movie-info--option').forEach(function(div) {
        div.classList.remove('movie-info--option-active');
    });

    // Thêm class "movie-info--option-active" vào thẻ li được nhấp
    element.classList.add('movie-info--option-active');
}

function toggleMIH() {
    document.getElementById('movie-info--hours-1').classList.add('movie-info--hours-show');
    document.getElementById('movie-info--hours-2').classList.add('movie-info--hours-show');
}
}

{//Change Slide based on Date
function sliderChange(x) {
    document.getElementById("myRange").value = x;
}}

{// Timer
let time = 300; //5 phút
const countdownEl = document.getElementById("countdown-timer");

    //Refresh mỗi 1s
setInterval(updateCountdown, 1000);

function updateCountdown() {
    if (time < 0) {
        window.alert('Ticket holding time expired. Please restart the booking process!');
        location.reload();
        time = 300;
    } else {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        minutes = '0' + minutes;
        seconds = seconds < 10? '0' + seconds : seconds;        
        
        countdownEl.innerHTML = minutes + ':' + seconds;
        time--;
    }
}}

{// Update Sticky
function updateSticky(fieldId) {
    document.getElementById("movie-type").innerHTML = document.getElementById(fieldId).value;
    document.getElementById("movie-screen").innerHTML = document.getElementById(fieldId).getAttribute("data-value1");
    document.getElementById("movie-time").innerHTML = document.getElementById(fieldId).getAttribute("data-value2");
}

function updateSticky2(fieldId) {
    document.getElementById("movie-date").innerHTML = document.getElementById(fieldId).getAttribute("data-value1");
}

    //Update Sticky - Seats
var selectedSingleSeats = [];
var selectedCoupleSeats = [];

// function updateStickySeats(fieldId) {
//     //Kiểm tra xem đã chọn số vé chưa
//     if (ticketAmount == 0) {
//         window.alert('Select your ticket(s) first!')
//         toggleFocusCSS(document.getElementById(fieldId));
//     } else {
//         //Hủy chọn ghế
//         if (selectedSeats.includes(document.getElementById(fieldId).innerText)) {
//             var indexToRemove = selectedSeats.indexOf(document.getElementById(fieldId).innerText);
//             if (indexToRemove !== -1) {
//                 selectedSeats.splice(indexToRemove, 1);
//                 document.getElementById('movie-seats').innerHTML = selectedSeats;
//             }
//         } else {
//             //Check số ghế phải bằng số vé, không cho chọn thêm
//             if (selectedSeats.length == ticketAmount) {        
//                 window.alert('You have already chosen enough seats according to your desired number of tickets!');
//                 toggleFocusCSS(document.getElementById(fieldId));
//             } else {
//             //Chọn ghế + thêm vào ds ghế đã chọn
//                 selectedSeats.push(document.getElementById(fieldId).innerText);
//                 document.getElementById('movie-seats').innerHTML = selectedSeats;
//             }
//         }
//     }
// }

function updateStickySingleSeats(fieldId) {
    //Kiểm tra xem đã chọn số vé chưa
    if (singleTicketAmount == 0) {
        window.alert('Select your single ticket(s) first!')
        toggleFocusCSS(document.getElementById(fieldId));
    } else {
        //Hủy chọn ghế
        if (selectedSingleSeats.includes(document.getElementById(fieldId).innerText)) {
            var indexToRemove = selectedSingleSeats.indexOf(document.getElementById(fieldId).innerText);
            if (indexToRemove !== -1) {
                selectedSingleSeats.splice(indexToRemove, 1);
                document.getElementById('movie-seats').innerHTML = selectedSingleSeats;
            }
        } else {
            //Check số ghế phải bằng số vé, không cho chọn thêm
            if (selectedSingleSeats.length >= singleTicketAmount) {        
                window.alert('You have already chosen enough seats for this type of ticket!');
                toggleFocusCSS(document.getElementById(fieldId));
            } else {
            //Chọn ghế + thêm vào ds ghế đã chọn
                selectedSingleSeats.push(document.getElementById(fieldId).innerText);
                document.getElementById('movie-seats').innerHTML = selectedSingleSeats;
            }
        }
    }
}

function updateStickyCoupleSeats(fieldId) {
    //Kiểm tra xem đã chọn số vé chưa
    if (coupleTicketAmount == 0) {
        window.alert('Select your couple ticket(s) first!')
        toggleFocusCSS(document.getElementById(fieldId));
    } else {
        //Hủy chọn ghế
        if (selectedCoupleSeats.includes(document.getElementById(fieldId).innerText)) {
            var indexToRemove = selectedCoupleSeats.indexOf(document.getElementById(fieldId).innerText);
            if (indexToRemove !== -1) {
                selectedCoupleSeats.splice(indexToRemove, 1);
                document.getElementById('movie-seats').innerHTML = selectedCoupleSeats;
            }
        } else {
            //Check số ghế phải bằng số vé, không cho chọn thêm
            if (selectedCoupleSeats.length >= coupleTicketAmount) {        
                window.alert('You have already chosen enough seats for this type of ticket!');
                toggleFocusCSS(document.getElementById(fieldId));
            } else {
            //Chọn ghế + thêm vào ds ghế đã chọn
                selectedCoupleSeats.push(document.getElementById(fieldId).innerText);
                document.getElementById('movie-seats').innerHTML = selectedCoupleSeats;
            }
        }
    }
}}

{//Buy popcorn
function incrPopOne(fieldId) {
    var x = document.getElementById(fieldId).value;
    document.getElementById(fieldId).value = ++x;
} 

function decrPopOne(fieldId) {
    var x = document.getElementById(fieldId).value;
    if (x == 0)
    {
        document.getElementById(fieldId).value = x;
    } else {
        document.getElementById(fieldId).value = --x;
    }
}
}

{//Temporary price calculation
function tempPriceCalc() {
    document.getElementById('temp-price-calc').innerHTML = 
        (document.getElementById('quantity-field1').value * 45000 +
        document.getElementById('quantity-field2').value * 90000 +
        document.getElementById('quantity-field3').value * 180000 +
        document.getElementById('popcorn-combo-1').value * 60000 +
        document.getElementById('popcorn-combo-2').value * 60000 +
        document.getElementById('popcorn-combo-3').value * 63000 +
        document.getElementById('popcorn-combo-4').value * 68000 +
        document.getElementById('popcorn-combo-5').value * 68000 +
        document.getElementById('popcorn-combo-6').value * 71000 +
        document.getElementById('popcorn-combo-7').value * 66000 +
        document.getElementById('popcorn-combo-8').value * 66000 +
        document.getElementById('popcorn-combo-9').value * 69000 +
        document.getElementById('popcorn-combo-10').value * 72000 +
        document.getElementById('popcorn-combo-11').value * 72000 +
        document.getElementById('popcorn-combo-12').value * 74000).toLocaleString();
}
}

{//Play trailer
    // Thay thế 'YOUR_VIDEO_ID' bằng ID của video YouTube bạn muốn phát
    const videoId = 'KudedLV0tP0';

    // Tạo một đối tượng player YouTube
    let player;
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('trailer', {
            // height: '360',
            // width: '640',
            videoId: videoId,
            events: {
                'onReady': onPlayerReady,
            }
        });
    }
}
