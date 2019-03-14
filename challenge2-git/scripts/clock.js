function startTime() {

    // The clock
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    //Add a zero in front of numbers<10
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);

    document.getElementById("hr").innerHTML = hr;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;

    // The calendar
    var months = ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'];
    var days = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    // var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("weekDay").innerHTML = curWeekDay;
    document.getElementById("day").innerHTML = curDay;
    document.getElementById("month").innerHTML = curMonth;
    document.getElementById("year").innerHTML = curYear;

    var time = setTimeout(function(){ startTime() }, 500);

    // The welcome text + background switch
    var greeting = document.getElementById('groet');
    body = document.getElementsByTagName('body'),
    tl1 = new TimelineMax();
    document.body.style.backgroundSize = "cover";

    if (hr >= 0) {
            greeting.innerHTML = 'Slaap lekker!';
            tl1.set(body, {backgroundImage: "url('img/night.jpg')"});
            // document.body.style.background = "linear-gradient(to right, #243949 0%, #517fa4 100%)";
           
        }
        
        if (hr >= 6) {
            greeting.innerHTML = 'Goedemorgen!';
            tl1.set(body, {backgroundImage: "url('img/morning.jpg')"});
            // document.body.style.background = "linear-gradient(to right, #e14fad 0%, #f9d423 100%)";          
        }
        
        if (hr >= 12) {
            greeting.innerHTML = 'Goedemiddag!';
            tl1.set(body, {backgroundImage: "url('img/noon.jpg')"});          
        }
        
        if (hr >= 18) {
            greeting.innerHTML = 'Goede avond!';
            tl1.set(body, {backgroundImage: "url('img/afternoon.jpg')"});
        }
}
    function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
