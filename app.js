document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM');

    const secondHand = document.querySelector('.second-hand');
    const minHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');
    const timeBlock = document.querySelector('.time');
    const currentTime = timeBlock.querySelectorAll('h1');
    const showTime = timeBlock.querySelector('#showTime');
    const showDay = timeBlock.querySelector('#showDay');
    const dayOfWeek = timeBlock.querySelector('#dayOfWeek');
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    for (var i = 0; i < currentTime.length; i++) {
        currentTime[i].addEventListener('click', function () {
            var next = this.nextElementSibling;
            if (next.style.display != 'none') {
                next.style.display = 'none';
            } else {
                next.style.display = 'block';
            };
        });
    }

    function leadingZero(i) {
        return (i < 10) ? '0' + i : i;
    }
    
    
    function setDate() {
        const now = new Date();

        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        
        const hoursDegrees = (hours / 12) * 360;
        const minutesDegrees = ((minutes / 60) * 360);
        const secondDegrees = ((seconds / 60) * 360);
        
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
        minHand.style.transform = `rotate(${minutesDegrees}deg)`;
        secondHand.style.transform = `rotate(${secondDegrees}deg)`;
        
        
        
         showTime.innerHTML = "Now it's: " + leadingZero(now.getHours()) + ":" + leadingZero(now.getMinutes()) + ":" + leadingZero(now.getSeconds());


        dayOfWeek.innerHTML = "Today is: " + weekday[now.getDay()];
        
    
        if (hours > 0 && hours < 6) showDay.innerHTML = leadingZero(now.getDate()) + "." + leadingZero((now.getMonth() + 1)) + "." + leadingZero(now.getFullYear()) + " - " + " Good night";
        if (hours >= 6 && hours < 12) showDay.innerHTML = leadingZero(now.getDate()) + "." + leadingZero((now.getMonth() + 1)) + "." + leadingZero(now.getFullYear()) + " - " + "Good morning";
        if (hours >= 12 && hours < 19) showDay.innerHTML = leadingZero(now.getDate()) + "." + leadingZero((now.getMonth() + 1)) + "." + leadingZero(now.getFullYear()) + " - " + "Good afternoon";
        if (hours >= 19 && hours < 24) showDay.innerHTML = leadingZero(now.getDate()) + "." + leadingZero((now.getMonth() + 1)) + "." + leadingZero(now.getFullYear()) + " - " + "Good evening";
        
        
        
        
        
    }

    setInterval(setDate, 1000);

});