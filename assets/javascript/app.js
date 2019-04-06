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

  // initial game state
  let userGuess
  let currentQ = 0

  $('#question').html(questions[0])
  $('#answer-0').html(answers[currentQ].ansArr[0])
  $('#answer-1').html(answers[currentQ].ansArr[1])
  $('#answer-2').html(answers[currentQ].ansArr[2])
  $('#answer-3').html(answers[currentQ].ansArr[3])


  // questions will flip every 30 seconds
  let timer = setInterval(timesUp, 1000 * 2)

  // executes if the user doesn't answer in time
  function timesUp() {
    if (currentQ < 4) currentQ++
    else clearInterval(timer)
    nextQ()
    $('#alert').html('Time\'s Up')
  }

  // appears between questions to indicate right and wrong answers
  function betweenQ() {
    if (userGuess === answers[currentQ].ansCorrect) {
      clearScreen()
      $('#alert').html('Correct!')
    } else if (userGuess !== answers[currentQ].ansCorrect) {
      clearScreen()
      $('#alert').html('Wrong :(')
    } else {
      clearScreen()
      $('#alert').html('Time\s Up!')
    }
  }

  // checks if  answer is correct
  function checkAnswer() {
    if (userGuess === answers[currentQ].ansCorrect) {
      $('#alert').html('Correct!')
    } else {
      $('#alert').html('Wrong!')
    }
  }

  // flips to next question
  function nextQ() {
    $('#question').html(questions[currentQ])
    $('#answer-0').html(answers[currentQ].ansArr[0])
    $('#answer-1').html(answers[currentQ].ansArr[1])
    $('#answer-2').html(answers[currentQ].ansArr[2])
    $('#answer-3').html(answers[currentQ].ansArr[3])
  }

  function clearScreen() {
    $('#question').html('')
    $('#answer-0').html('')
    $('#answer-1').html('')
    $('#answer-2').html('')
    $('#answer-3').html('')
  }



  $('#answer-0').on('click', function() {
    userGuess = answers[currentQ].ansArr[0]
    checkAnswer()
    if (currentQ < 4) currentQ++
    nextQ()
    clearInterval(timer)
    setTimeout(betweenQ, 1000 * 3)
  })

  $('#answer-1').on('click', function() {
    userGuess = answers[currentQ].ansArr[1]
    checkAnswer()
    if (currentQ < 4) currentQ++
    nextQ()
    clearInterval(timer)
    setTimeout(betweenQ, 1000 * 3)
  })

  $('#answer-2').on('click', function() {
    userGuess = answers[currentQ].ansArr[2]
    checkAnswer()
    if (currentQ < 4) currentQ++
    nextQ()
    clearInterval(timer)
    setTimeout(betweenQ, 1000 * 3)
  })

  $('#answer-3').on('click', function() {
    userGuess = answers[currentQ].ansArr[3]
    checkAnswer()
    if (currentQ < 4) currentQ++
    nextQ()
    clearInterval(timer)
    setTimeout(betweenQ, 1000 * 3)
  })


})
