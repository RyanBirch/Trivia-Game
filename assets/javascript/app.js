$(document).ready(function() {
  let questions = [
        'Who was the first president of the United States?',
        'How many colonies fought in the American Revolution?',
        'Who did America fight a war of independence against?',
        'What year was the Declaration of Independence drafted?',
        'Which country was a major ally to the United States during the Revolutionary War?'
      ]


  let answers = [
    {
      ansArr: ['George Washington', 'John Adams', 'Benjamin Franklin', 'Abraham Lincoln'],
      ansCorrect: 'George Washington'
    },
    {
      ansArr: ['12', '13', '50', '18'],
      ansCorrect: '13'
    },
    {
      ansArr: ['Britain', 'France', 'Germany', 'Canada'],
      ansCorrect: 'Britain'
    },
    {
      ansArr: ['1791', '1781', '1776', '1775'],
      ansCorrect: '1776',
    },
    {
      ansArr: ['Germany', 'France', 'Spain', 'Russia'],
      ansCorrect: 'France'
    }
  ]

  let images = [
    'assets/images/george_washington.jpg',
    'assets/images/thirteen_colonies.jpg',
    'assets/images/britain.jpg',
    'assets/images/declaration.jpg',
    'assets/images/france.jpg'
  ]

  // initial game state
  let userGuess, timer, timerDisplay, timeLeft = 15, currentQ, guessedRight, guessedWrong


  function startGame() {
    currentQ = 0,
    guessedRight = 0,
    guessedWrong = 0

    $('#start-game').hide()
    $('#question').html(questions[0])
    $('#answer-0').html(answers[currentQ].ansArr[0])
    $('#answer-1').html(answers[currentQ].ansArr[1])
    $('#answer-2').html(answers[currentQ].ansArr[2])
    $('#answer-3').html(answers[currentQ].ansArr[3])
    $('#alert').html('')

    // questions will flip every 15 seconds
    startTimer()
  }

  // executes if the user doesn't answer in time
  function timesUp() {
    stopTimer()
    clearScreen()
    $('#alert').html(`Time\'s Up! The correct answer was ${answers[currentQ].ansCorrect}`)
    if (currentQ < 4) {
      currentQ++
      setTimeout(function() {
        nextQ()
      }, 1000 * 3)
    } else {
      clearInterval(timer)
      setTimeout(result, 1000 * 3)
      $('#start-game').show()
    }
  }

  // checks if  answer is correct
  function checkAnswer() {
    if (userGuess === answers[currentQ].ansCorrect) {
      guessedRight++
      clearScreen()
      $('#alert').html('Correct!')
    } else {
      guessedWrong++
      clearScreen()
      $('#alert').html(`Wrong :( The correct answer was ${answers[currentQ].ansCorrect}`)
    }
  }

  // flips to next question
  function nextQ() {
    $('#question').html(questions[currentQ])
    $('#answer-0').html(answers[currentQ].ansArr[0])
    $('#answer-1').html(answers[currentQ].ansArr[1])
    $('#answer-2').html(answers[currentQ].ansArr[2])
    $('#answer-3').html(answers[currentQ].ansArr[3])
    $('#alert').html('')
    $('#image').html('')
    startTimer()
  }

  function startTimer() {
    timeLeft = 15000
    timer = setInterval(timesUp, 1000 * 17000)
    $('#q-timer').html(timeLeft)
    timerDisplay = setInterval(function() {
      $('#q-timer').html(timeLeft)
      timeLeft--
    }, 1000)
  }

  function stopTimer() {
    clearInterval(timer)
    clearInterval(timerDisplay)
    $('#q-timer').html('')
  }

  function clearTimer() {
    if (currentQ < 4) {
      currentQ++
      setTimeout(nextQ, 1000 * 3)
    } else {
      setTimeout(function () {
        result()
        $('#start-game').show()
      }, 1000 * 3)
      clearScreen()
    }
  }

  function clearScreen() {
    $('#question').html('')
    $('#answer-0').html('')
    $('#answer-1').html('')
    $('#answer-2').html('')
    $('#answer-3').html('')
  }

  function showImage() {
    $('#image').html('')
    $('<img>').attr('src', images[currentQ]).width('20%').height('20%').appendTo($('#image'))
    // $('#image').html("<img src=" + images[currentQ] + ">")
  }

  function result() {
    $('#alert').html(`You answered ${guessedRight} correctly out of ${questions.length}`)
    $('#image').html('')
  }



  $('#start-game').on('click', function() {
    startGame()
  })

  $('.answer-btn').on('click', function() {
    userGuess = answers[currentQ].ansArr[parseInt($(this).attr('value'))]
    checkAnswer()
    showImage()
    stopTimer()
    clearTimer()
  })
})
