var labelTime = document.querySelector("#dateTime");

var dateTime = "";
function setTime(){
    dateTime = setInterval(function () {
        labelTime = moment().format("MMM Do, YYYY [at] HH:mm:ss");
        $("#dateTime").text(labelTime);
        console.log(dateTime);
        console.log(labelTime);
    },1000)
}


setTime();