;
// sameSize - http://www.veilleinformatique.com/
// Set the height of each element to the highest element
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