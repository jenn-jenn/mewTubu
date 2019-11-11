
$(document).ready(function () {
    var progressbar = $('#progress_bar');

    max = progressbar.attr('max');

    time = (1000 / max) * 5;

    value = progressbar.val();

    var loading = function () {
        value += 1;

        addValue = progressbar.val(value);

        $('.progress-value').html(value + '%');

        if (value == max) {
            clearInterval(animate);
        }
    };

    var animate = setInterval(function () {
        loading();
    }, time);
});