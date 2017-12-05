//Document Ready
$(function () {

    //global
    var timerCount = 40;
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;
    var runTime;

    //hide elements at beginning
    $(".jumbotron").hide();
    $("#endGame").hide();

    // on click
    $("#start").on("click", function () {
        $("#start").hide();
        $(".jumbotron").show();
        startTimer();
    }); // end click function

    // reduce the timer count by 1
    function timer() {
        timerCount--;
        $("#Timer").text("Timer :" + timerCount);
        if (timerCount <= 0) {
            console.log(timerCount);
            gameOver();

        }
    }

    // finish button
    $("#finish").click(function () {
        gameOver();


    }); // end finish button

    // function to start Timer (setInterval to 1 second)
    function startTimer() {
        runTime = setInterval(timer, 1000);
    }

    // Game over function
    function gameOver() {
        timerCount = 0;
        clearInterval(runTime);
        $(".jumbotron").hide();
        $("#endGame").show();

        //record radio value
        var q1 = $('input:radio[name="q1"]:checked').val();
        var q2 = $('input:radio[name="q2"]:checked').val();
        var q3 = $('input:radio[name="q3"]:checked').val();
        var q4 = $('input:radio[name="q4"]:checked').val();
        var q5 = $('input:radio[name="q5"]:checked').val();
        var q6 = $('input:radio[name="q6"]:checked').val();
        var q7 = $('input:radio[name="q7"]:checked').val();
        var q8 = $('input:radio[name="q8"]:checked').val();
        var q9 = $('input:radio[name="q9"]:checked').val();
        var q10 = $('input:radio[name="q10"]:checked').val();

        //conditions
        // question #1
        if (q1 == undefined) {
            unAnswered++;
        } else if (q1 == "bell") {
            correctAnswers++;
        } else {
            wrongAnswers++;
        }
        // question #2
        if (q2 == undefined) {
            unAnswered++;
        } else if (q2 == "radiation") {
            correctAnswers++;
        } else {
            wrongAnswers++;
        }
        // question #3
        if (q3 == undefined) {
            unAnswered++;
        } else if (q3 == "pig") {
            correctAnswers++;
        } else {
            wrongAnswers++;
        }
        // question #4
        if (q4 == undefined) {
            unAnswered++;
        } else if (q4 == "clay") {
            correctAnswers++;
        } else {
            wrongAnswers++;
        }
        // question #5
        if (q5 == undefined) {
            unAnswered++;
        } else if (q5 == "42") {
            correctAnswers++;
        } else {
            wrongAnswers++;
        }
        // question #6
        if (q6 == undefined) {
            unAnswered++;
        } else if (q6 == "spielberg") {
            correctAnswers++;
        } else {
            wrongAnswers++;
        }
        // question #7
        if (q7 == undefined) {
            unAnswered++;
        } else if (q7 == "venus") {
            correctAnswers++;
        } else {
            wrongAnswers++;
        }
        // question #8
        if (q8 == undefined) {
            unAnswered++;
        } else if (q8 == "roberts") {
            correctAnswers++;
        } else {
            wrongAnswers++;
        }
        // question #9
        if (q9 == undefined) {
            unAnswered++;
        } else if (q9 == "iron") {
            correctAnswers++;
        } else {
            wrongAnswers++;
        }
        // question #10
        if (q10 == undefined) {
            unAnswered++;
        } else if (q10 == "cat") {
            correctAnswers++;
        } else {
            wrongAnswers++;
        }
        //Display the results of the trivia
        $("#correctAnswers").text("Correct Answers :   " + correctAnswers);
        $("#wrongAnswers").text("Wrong Answers :    " + wrongAnswers);
        $("#unAsnwered").text("Unanswered questions :    " + unAnswered);

        console.log(correctAnswers);
    }
}); // End of Document Ready
