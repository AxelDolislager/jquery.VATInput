$(document).ready(function(){
    var countrydata = [
        {
            CountryCode:    "BE",
        },
        {
            CountryCode:    "NL",
        },
    ];

    $('#BusinessNumber').append(
        "<input type='hidden' name='businessnumber[prefix]' id='businessnumberprefix' value='BE'>"
        + "<div id='countryprefix'>"
            + "<span id='currentselected'>BE</span>"
            + "<i class='fa fa-caret-down'></i>"
            + "<div id='countrylist'>"
            + "</div>"
        + "</div>"
        + "<input type='number' name='businessnumber[0]' class='firstinput' maxlength='1' placeholder='0'>"
        + "<div class='businessnumberdot'>.</div>"
        + "<input type='number' name='businessnumber[1]' class='secondinput' maxlength='1' placeholder='000'>"
        + "<div class='businessnumberdot'>.</div>"
        + "<input type='number' name='businessnumber[2]' class='secondinput' maxlength='1' placeholder='000'>"
        + "<div class='businessnumberdot'>.</div>"
        + "<input type='number' name='businessnumber[3]' class='secondinput' maxlength='1' placeholder='000'>"
    );

    $.each(countrydata, function(index, country){
        $('#countrylist').append("<div class='countrylistitems' data-value='"+ country.CountryCode +"'>" + country.CountryCode + "</div>");
    });


    $('#countryprefix').on('click', function(){
        $(this).children('#countrylist').addClass('active');
    });

    $('.countrylistitems').on('click', function(e){
        e.stopPropagation();
        $('#currentselected').html($(this).attr('data-value'));
        $("#businessnumberprefix").val($(this).attr('data-value'));
        $('#countrylist').removeClass('active');
    });
});