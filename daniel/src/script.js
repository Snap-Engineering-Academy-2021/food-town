// document.getElementsByTagName("h1")[0].style.fontSize = "6vw";

// console.log

// Recipe calculator with jquery
var computeServing = function(serving) {
    $('.js-recipeIngredient').each(function(index, item) {
      $(item).children('span').html($(item)[0].dataset.basevalue * serving)
    })
  }
  $('#servingInput').on('change', function() {
    computeServing($(this).val())
  })
  $('.js-decreaseService').on('click', function() {
    var currentServing = $('#servingInput').val()
    $('#servingInput').val(currentServing - 1)
    computeServing(currentServing - 1)
  })
  $('.js-increaseService').on('click', function() {
    var currentServing = $('#servingInput').val()
    $('#servingInput').val(parseInt(currentServing) + 1)
    computeServing(parseInt(currentServing) + 1)
  })
  computeServing(1)