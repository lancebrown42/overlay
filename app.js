var request = {
    "url": "http://octopi.local/api/job",
    "method": "GET",
    "timeout": 0,
    "headers": {
        "X-Api-Key": "C59F74D941F748C8843D7A51C413900B"
    }
};

$(document).ready(function() {
	getJob()
    $('div.payload').on("change", function() {
        alert($("div.payload").html())
    })
    var reload = setInterval(getJob, 1000)
});

function getJob() {
    $.ajax(request).done(function(response) {
        gotJob(response)
    });
};

function gotJob(response) {
    console.log(response);
    $("div.payload").text("Time remaining: " + response.progress.printTimeLeft);
    // console.log($("div.payload").html());
    // $("div.payload").html()

}