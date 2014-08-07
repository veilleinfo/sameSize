// Set the height of each element to the tallest element
$.fn.sameSize = function () {
    var maxH = 0;
    $(this).each(function () {
        if (maxH < $(this).height()) {
            maxH = $(this).height();
        }
    });
    $(this).height(maxH);
    return this;
};