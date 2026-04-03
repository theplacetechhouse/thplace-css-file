  function checkAnswer1() {
    var answer = document.getElementById("answer1").value;
    if (answer.toLowerCase() === "aliceblue" || answer.toLowerCase() === "alice blue") {
      document.getElementById("result1").innerHTML = "Correct!";
    } else {
      document.getElementById("result1").innerHTML = "Incorrect. Try again.";
    }
  }
  function checkAnswer2() {
    var answer = document.getElementById("answer2").value;
    if (answer.toLowerCase() === "3rem" || answer.toLowerCase() === "3 rem") {
      document.getElementById("result2").innerHTML = "Correct!";
    } else {
      document.getElementById("result2").innerHTML = "Incorrect. Try again.";
    }
  }
  function checkAnswer3() {
    var answer = document.getElementById("answer3").value;
    if (answer.toLowerCase() === "500") {
      document.getElementById("result3").innerHTML = "Correct!";
    } else {
      document.getElementById("result3").innerHTML = "Incorrect. Try again.";
    }
  }
  function checkAnswer4() {
    var answer = document.getElementById("answer4").value;
    if (answer.toLowerCase() === "arial" || answer.toLowerCase() === "arial, sans-serif" || answer.toLowerCase() === "sans-serif" || answer.toLowerCase() === "sans serif") {
      document.getElementById("result4").innerHTML = "Correct!";
    } else {
      document.getElementById("result4").innerHTML = "Incorrect. Try again.";
    }
  }
    function checkAnswer5() {
    var answer = document.getElementById("answer5").value;
    if (answer.toLowerCase() === "Chrome Tools" || answer.toLowerCase() === "chrome developer tools" || answer.toLowerCase() === "Chrome Developer Tools" || answer.toLowerCase() === "CHROME DEVELOPER TOOLS") {
      document.getElementById("result5").innerHTML = "Correct!";
    } else {
      document.getElementById("result5").innerHTML = "Incorrect. Try again.";
    }
  }