$(document).ready(function(){
    var countrydata = [
        {
            CountryLabel:   "AT",
            CountryCode:    "ATU",
            VATInputs:      1,
            Inputs:         [
                {
                    maxlength:  '8',
                    minlength:  '8',
                    type:       'number',
                    value:      '',
                    textalign:  'left',
                    width:      '100%',
                }
            ]
        },{
            CountryLabel:   "BE",
            CountryCode:    "BE",
            VATInputs:      1,
            Inputs:         [
                {
                    maxlength:  '10',
                    minlength:  '9',
                    type:       'number',
                    value:      '',
                    attribute:  '',
                    textalign:  'left',
                    width:  '100%',
                },
            ]
        },{
            CountryLabel:   "BG",
            CountryCode:    "BG",
            VATInputs:      1,
            Inputs:         [
                {
                    maxlength:  '10',
                    minlength:  '9',
                    type:       'number',
                    value:      '',
                    textalign:  'left',
                    width:      '100%',
                },
            ],
        },{
            CountryLabel:   "HR",
            CountryCode:    "HR",
            VATInputs:      1,
            Inputs:         [
                {
                    maxlength:  '11',
                    minlength:  '11',
                    type:       'number',
                    value:      '',
                    textalign:  'left',
                    width:      '100%',
                },
            ],
        },{
            CountryLabel:   "CY",
            CountryCode:    "CY",
            VATInputs:      2,
            Inputs:         [
                {
                    maxlength:  '8',
                    minlength:  '8',
                    type:       'number',
                    value:      '',
                    textalign:  'left',
                    width:      '100%',
                },
                {
                    maxlength:  '1',
                    minlength:  '1',
                    type:       'text',
                    value:      '',
                    textalign:  'center',
                    width:      '20px',
                },
            ],
        },{
            CountryLabel:   "CZ",
            CountryCode:    "CZ",
            VATInputs:      1,
            Inputs:         [
                {
                    maxlength:  '10',
                    minlength:  '8',
                    type:       'number',
                    value:      '',
                    textalign:  'left',
                    width:      '100%',
                },
            ],
        },{
            CountryLabel:   "DK",
            CountryCode:    "DK",
            VATInputs:      1,
            Inputs:         [
                {
                    maxlength:  '8',
                    minlength:  '8',
                    type:       'number',
                    value:      '',
                    textalign:  'left',
                    width:      '100%',
                },
            ],
        },{
            CountryLabel:   "EE",
            CountryCode:    "EE",
            VATInputs:      1,
            Inputs:         [
                {
                    maxlength:  '8',
                    minlength:  '8',
                    type:       'number',
                    value:      '',
                    textalign:  'left',
                    width:      '100%',
                },
            ],
        },{
            CountryLabel:   "FI",
            CountryCode:    "FI",
            VATInputs:      1,
            Inputs:         [
                {
                    maxlength:  '8',
                    minlength:  '8',
                    type:       'number',
                    value:      '',
                    textalign:  'left',
                    width:      '100%',
                },
            ],
        },{
            CountryLabel:   "FR",
            CountryCode:    "FR",
            VATInputs:      2,
            Inputs:         [
                {
                    maxlength:  '2',
                    minlength:  '2',
                    type:       'text',
                    value:      '',
                    textalign:  'left',
                    width:      '40px',
                },
                {
                    maxlength:  '9',
                    minlength:  '9',
                    type:       'number',
                    value:      '',
                    textalign:  'left',
                    width:      '100%',
                },
            ],
        },{
            CountryLabel:   "DE",
            CountryCode:    "DE",
            VATInputs:      1,
            Inputs:         [
                {
                    maxlength:  '9',
                    minlength:  '9',
                    type:       'number',
                    value:      '',
                    textalign:  'left',
                    width:      '100%',
                },
            ],
        },{
            CountryLabel:   "EL",
            CountryCode:    "EL",
            VATInputs:      1,
            Inputs:         [
                {
                    maxlength:  '9',
                    minlength:  '9',
                    type:       'number',
                    value:      '',
                    textalign:  'left',
                    width:      '100%',
                },
            ],
        },{
            CountryLabel:   "HU",
            CountryCode:    "HU",
            VATInputs:      1,
            Inputs:         [
                {
                    maxlength:  '8',
                    minlength:  '8',
                    type:       'number',
                    value:      '',
                    textalign:  'left',
                    width:      '100%',
                },
            ],
        },{
            CountryLabel:   "IE",
            CountryCode:    "IE",
            VATInputs:      2,
            Inputs:         [
                {
                    maxlength:  '7',
                    minlength:  '7',
                    type:       'number',
                    value:      '',
                    textalign:  'left',
                    width:      '100%',
                },{
                    maxlength:  '2',
                    minlength:  '2',
                    type:       'text',
                    value:      '',
                    textalign:  'center',
                    width:      '40px',
                },
            ],
        },{
            CountryLabel:   "IT",
            CountryCode:    "IT",
            VATInputs:      1,
            Inputs:         [
                {
                    maxlength:  '11',
                    minlength:  '11',
                    type:       'number',
                    value:      '',
                    textalign:  'left',
                    width:      '100%',
                },
            ],
        },{
            CountryLabel:   "LV",
            CountryCode:    "LV",
            VATInputs:      1,
            Inputs:         [
                {
                    maxlength:  '11',
                    minlength:  '11',
                    type:       'number',
                    value:      '',
                    textalign:  'left',
                    width:      '100%',
                },
            ],
        },{
            CountryLabel:   "LT",
            CountryCode:    "LT",
            VATInputs:      1,
            Inputs:         [
                {
                    maxlength:  '12',
                    minlength:  '9',
                    type:       'number',
                    value:      '',
                    textalign:  'left',
                    width:      '100%',
                },
            ],
        },{
            CountryLabel:   "LU",
            CountryCode:    "LU",
            VATInputs:      1,
            Inputs:         [
                {
                    maxlength:  '8',
                    minlength:  '8',
                    type:       'number',
                    value:      '',
                    textalign:  'left',
                    width:      '100%',
                },
            ],
        },{
            CountryLabel:   "MT",
            CountryCode:    "MT",
            VATInputs:      1,
            Inputs:         [
                {
                    maxlength:  '8',
                    minlength:  '8',
                    type:       'number',
                    value:      '',
                    textalign:  'left',
                    width:      '100%',
                },
            ],
        },{
            CountryLabel:   "NL",
            CountryCode:    "NL",
            VATInputs:      3,
            Inputs:         [
                {
                    maxlength:  '9',
                    minlength:  '9',
                    type:       'number',
                    value:      '',
                    textalign:  'left',
                    width:      '100%',
                },{
                    maxlength:  '1',
                    minlength:  '1',
                    type:       'text',
                    value:      'B',
                    width:      '20px',
                    textalign:  'center',
                    attribute:  'disabled'
                },{
                    maxlength:  '2',
                    minlength:  '2',
                    type:       'text',
                    value:      '',
                    width:      '50px',
                    textalign:  'center',
                    attribute:  '',
                }
            ]
        },{
            CountryLabel:   "NW",
            CountryCode:    "NW",
            VATInputs:      2,
            Inputs:         [
                {
                    maxlength:  '9',
                    minlength:  '9',
                    type:       'number',
                    value:      '',
                    textalign:  'left',
                    width:      '100%',
                },{
                    maxlength:  '3',
                    minlength:  '3',
                    type:       'text',
                    value:      '',
                    textalign:  'center',
                    width:      '60px',
                },
            ],
        },{
            CountryLabel:   "PL",
            CountryCode:    "PL",
            VATInputs:      1,
            Inputs:         [
                {
                    maxlength:  '10',
                    minlength:  '10',
                    type:       'number',
                    value:      '',
                    textalign:  'left',
                    width:      '100%',
                },
            ],
        },{
            CountryLabel:   "PT",
            CountryCode:    "PT",
            VATInputs:      1,
            Inputs:         [
                {
                    maxlength:  '9',
                    minlength:  '9',
                    type:       'number',
                    value:      '',
                    textalign:  'left',
                    width:      '100%',
                },
            ],
        },{
            CountryLabel:   "RO",
            CountryCode:    "RO",
            VATInputs:      1,
            Inputs:         [
                {
                    maxlength:  '10',
                    minlength:  '10',
                    type:       'number',
                    value:      '',
                    textalign:  'left',
                    width:      '100%',
                },
            ],
        },{
            CountryLabel:   "SK",
            CountryCode:    "SK",
            VATInputs:      1,
            Inputs:         [
                {
                    maxlength:  '10',
                    minlength:  '10',
                    type:       'number',
                    value:      '',
                    textalign:  'left',
                    width:      '100%',
                },
            ],
        },{
            CountryLabel:   "SI",
            CountryCode:    "SI",
            VATInputs:      1,
            Inputs:         [
                {
                    maxlength:  '8',
                    minlength:  '8',
                    type:       'number',
                    value:      '',
                    textalign:  'left',
                    width:      '100%',
                },
            ],
        },{
            CountryLabel:   "ES",
            CountryCode:    "ES",
            VATInputs:      3,
            Inputs:         [
                {
                    maxlength:  '1',
                    minlength:  '1',
                    type:       'text',
                    value:      '',
                    textalign:  'left',
                    width:      '20px',
                },{
                    maxlength:  '7',
                    minlength:  '7',
                    type:       'number',
                    value:      '',
                    textalign:  'center',
                    width:      '100%',
                },{
                    maxlength:  '1',
                    minlength:  '1',
                    type:       'text',
                    value:      '',
                    textalign:  'left',
                    width:      '20px',
                },
            ],
        },{
            CountryLabel:   "SE",
            CountryCode:    "SE",
            VATInputs:      1,
            Inputs:         [
                {
                    maxlength:  '12',
                    minlength:  '12',
                    type:       'number',
                    value:      '',
                    textalign:  'left',
                    width:      '100%',
                },
            ],
        },{
            CountryLabel:   "CHE",
            CountryCode:    "CHE",
            VATInputs:      2,
            Inputs:         [
                {
                    maxlength:  '9',
                    minlength:  '9',
                    type:       'number',
                    value:      '',
                    textalign:  'left',
                    width:      '100%',
                },{
                    maxlength:  '3',
                    minlength:  '3',
                    type:       'text',
                    value:      '',
                    textalign:  'center',
                    width:      '60px',
                },
            ],
        },{
            CountryLabel:   "GB",
            CountryCode:    "GB",
            VATInputs:      1,
            Inputs:         [
                {
                    maxlength:  '9',
                    minlength:  '9',
                    type:       'number',
                    value:      '',
                    textalign:  'left',
                    width:      '100%',
                },
            ],
        },
    ];


    $(document).on('click', function(e) {
        if ( $(e.target).closest('#countryprefix').length ) {
            $("#countrylist").addClass('active');
        }else if ( ! $(e.target).closest('#countryprefix').length ) {
            $("#countrylist").removeClass('active');
        }
    });


    $x = 0;
    if(countrydata[0].VATInputs == 1){
        $('#BusinessNumber').append(
            "<input type='hidden' name='businessnumber[prefix]' id='businessnumberprefix' value='" + countrydata[0].CountryCode + "'>"
            + "<div id='countryprefix'>"
                + "<span id='currentselected'>" + countrydata[0].CountryCode + "</span>"
                + "<i class='fa fa-caret-down'></i>"
                + "<div id='countrylist'>"
                + "</div>"
            + "</div>"
            + "<div id='businessnumberinputs'>"
                + "<input class='businessnumberinput onlyinput' id='" + countrydata[0].CountryLabel + "input' style='width: " + countrydata[0].Inputs[0].width + ";text-align: " + countrydata[0].Inputs[0].textalign + ";' type='" + countrydata[0].Inputs[0].type + "' name='businessnumber[" + $x + "]' minlength='" + countrydata[0].Inputs[0].minlength + "' maxlength='" + countrydata[0].Inputs[0].maxlength + "' value='" + countrydata[0].Inputs[0].value + "' " + countrydata[0].Inputs[0].attribute + ">"
            + "</div>"
            + "<input type='hidden' name='businessnumberoutput' value='' id='output_businessnumber'>"
        );
        $x++;
    }else{

        $x++;
    }

    $.each(countrydata, function(index, country){
        $('#countrylist').append("<div class='countrylistitems' data-value='"+ country.CountryCode +"'>" + country.CountryLabel + "</div>");
    });


    $('#countryprefix').on('click', function(){
        $(this).children('#countrylist').addClass('active');
    });

    $('.countrylistitems').on('click', function(e){
        e.stopPropagation();

        var country = countrydata.find(function(element, index, array){
            return element.CountryCode === value;
        }, value = $(this).attr('data-value'));

        $('#currentselected').html(country.CountryCode);
        $("#businessnumberprefix").val($(this).attr('data-value'));


        $('.businessnumberinput').remove();

        $i = 0;
        $.each(country.Inputs, function(index,input){
            if(VATInputs == 1){
                $('#businessnumberinputs').append("<input class='businessnumberinput onlyinput' id='" + country.CountryLabel + "input' style='width: " + input.width + ";text-align: " + input.textalign + ";' type='" + input.type + "' name='businessnumber[" + $i + "]' minlength='" + input.minlength + "' maxlength='" + input.maxlength + "' value='" + input.value + "' " + input.attribute + ">");
            }else{
                $('#businessnumberinputs').append("<input class='businessnumberinput multipleinputs' id='" + country.CountryLabel + "input' style='width: " + input.width + ";text-align: " + input.textalign + ";' type='" + input.type + "' name='businessnumber[" + $i + "]' minlength='" + input.minlength + "' maxlength='" + input.maxlength + "' value='" + input.value + "' " + input.attribute + ">");
            }
            $i++;
        }, VATInputs = country.VATInputs);

        $('#output_businessnumber').val(country.CountryCode);
        $('#countrylist').removeClass('active');
    });

    $('#BusinessNumber').on('keyup', '.businessnumberinput',function(){
        value = $("#businessnumberprefix").val();
        $(".businessnumberinput").each(function(test){
            value += $(this).val();
        });

        $('#output_businessnumber').val(value);
    });

});