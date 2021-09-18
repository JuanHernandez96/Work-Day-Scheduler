$(document).ready(function() {
    $('.saveBtn').on('click', function() {
        console.log('click')
        var value = $(this).siblings('.description').val()
        var time = $(this).parent().attr('id')
        localStorage.setItem(time, value)
    })
    $('#time-9').val(localStorage.getItem('9'))
    $('#time-10').val(localStorage.getItem('10'))
    $('#time-11').val(localStorage.getItem('11'))
    $('#time-12').val(localStorage.getItem('12'))
    $('#time-1').val(localStorage.getItem('1'))
    $('#time-2').val(localStorage.getItem('2'))
    $('#time-3').val(localStorage.getItem('3'))
    $('#time-4').val(localStorage.getItem('4'))
    $('#time-5').val(localStorage.getItem('5'))
    $('#time-6').val(localStorage.getItem('6'))
})

