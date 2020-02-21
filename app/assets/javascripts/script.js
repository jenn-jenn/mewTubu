$(document).ready(function () {
    $('body').click( function() {
        if($('#comment-dropdown').css('display') === 'block') {
            $('#comment-dropdown').toggle();
        }
    })
});