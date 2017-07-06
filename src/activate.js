
var (document).ready(function () {
    ('input').click(function () {
        ('#todo').append("<ul>" + ("input[name=todo]").val() + " <a href='#' class='close' aria-hidden='true'>&times;</a></ul>");
    });
    ("body").on('click', '#todo a', function () {
        (this).closest("ul").remove();
    });
});