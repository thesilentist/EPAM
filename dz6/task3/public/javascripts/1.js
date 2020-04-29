let minutes = 0;
let seconds = 0;
let isRunning = false;
let interval;

$(".buttons-reset").click(function() {
    minutes = 0;
    seconds = 0;
    seconds > 9 ? $(".seconds").text(seconds) : $(".seconds").text(`0${seconds}`);
    minutes > 9 ? $(".minutes").text(minutes) : $(".minutes").text(`0${minutes}`);
    clearInterval(interval);
    isRunning = false;
});

$(".buttons-gostop").click(function() {
    if (isRunning) {
        clearInterval(interval);
        isRunning = false;
    } else {
        interval = setInterval(function() {
            seconds++;
            if (seconds == 60) {
                minutes++;
                seconds = 0;
            }
            if (minutes == 60) {
                minutes = 0;
            }
            seconds > 9 ? $(".seconds").text(seconds) : $(".seconds").text(`0${seconds}`);
            minutes > 9 ? $(".minutes").text(minutes) : $(".minutes").text(`0${minutes}`);
        },1000);
        isRunning = true;
    }
});
