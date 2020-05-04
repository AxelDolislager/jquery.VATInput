(function($){
    $.fn.BusinessNumberInput = function(options){
        // block scope local variables.
        let element     = this;
        let outputname  = options.name || "businessnumberoutput";

        //data-array
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

        //initialize plugin
        this.initialize = function(){
            var enabledCountries = [];
            //check if countries are declared, otherwise use all from data-array.
            if(options.countries){
                //find each declared country from data-array
                $.each(options.countries, function(index, country){
                    var eachcountry = countrydata.find(function(element, index, array){
                        return element.CountryCode === value;
                    }, value = country);
                    enabledCountries.push(eachcountry);
                });

                //continue with code in these 2 functions with declared countries using information from data-array.
                initAppendData(enabledCountries[0]);
                initAppendCountryList(enabledCountries);
            }else{
                //continue with code in these 2 functions without declaring coutries, use full data-array.
                initAppendData(countrydata[0]);
                initAppendCountryList(countrydata);
            }
        }

        //When clicking the countryprefix label on the element, open the country list dropdown.
        $(element).on('click', '#countryprefix', function(){
            //close other lists when having multiple elements using this plugin on the same page.
            $('.countrylist').removeClass('active');
            
            $(this).children('.countrylist').addClass('active');
        });

        //When selecting a country from the countrylist dropdown, change the labels and inputs.
        $(element).on('click', '.countrylistitems', function(e){
            e.stopPropagation();

            changeBusinessNumberInputs($(this));
        });

        //Update the output element when there is an update.
        $(element).on('keyup', '.businessnumberinput',function(){
            //get the value of the prefix from the selected country.
            value = $(this).parent('#businessnumberinputs').parent().children('#businessnumberprefix').val();
            //get all values from all inputs.
            $(this).parent('#businessnumberinputs').children('.businessnumberinput').each(function(){
                value += $(this).val();
            });
    
            //update the output element
            $(element).children('#output_businessnumber').val(value);
        });

        //close the countrylists when clicking somewhere else.
        $(document).on('click', function(e) {
            if ( ! $(e.target).closest('#countryprefix').length ) {
                $(element).children('#countryprefix').children(".countrylist").removeClass('active');
            }
        });

        function initAppendData(firstcountry){
            var $x = 0;
            var inputs = "";

            //Insert the needed inputs gotten from the data-array into an variable to insert into the append.
            if(firstcountry.VATInputs == 1){
                inputs = "<input class='businessnumberinput onlyinput' id='" + firstcountry.CountryLabel + "input' style='width: " + firstcountry.Inputs[0].width + ";text-align: " + firstcountry.Inputs[0].textalign + ";' type='" + firstcountry.Inputs[0].type + "' name='businessnumber[" + $x + "]' minlength='" + firstcountry.Inputs[0].minlength + "' maxlength='" + firstcountry.Inputs[0].maxlength + "' value='" + firstcountry.Inputs[0].value + "' " + firstcountry.Inputs[0].attribute + ">";
                $x++;
            }else{
                $.each(firstcountry.Inputs, function(index,input){
                    inputs += "<input class='businessnumberinput multipleinputs' id='" + firstcountry.CountryLabel + "input' style='width: " + input.width + ";text-align: " + input.textalign + ";' type='" + input.type + "' name='businessnumber[" + $x + "]' minlength='" + input.minlength + "' maxlength='" + input.maxlength + "' value='" + input.value + "' " + input.attribute + ">";
                });
                $x++;
            }

            //Append the initial structure with the first inputs from the declared countries / the first from the data-array
            $(element).append(
                "<input type='hidden' name='businessnumber[prefix]' id='businessnumberprefix' value='" + firstcountry.CountryCode + "'>"
                + "<div id='countryprefix'>"
                    + "<span id='currentselected'>" + firstcountry.CountryCode + "</span>"
                    + "<i class='fa fa-caret-down'></i>"
                    + "<div class='countrylist'>"
                    + "</div>"
                + "</div>"
                + "<div id='businessnumberinputs'>"
                    + inputs
                + "</div>"
                + "<input type='hidden' name='" + outputname + "' value='' id='output_businessnumber'>"
            );
        }

        //Append the initial country list with the declared countries / the data-array countries
        function initAppendCountryList(countries){
            $.each(countries, function(index, country){
                $(element).children('#countryprefix').children('.countrylist').append("<div class='countrylistitems' data-value='"+ country.CountryCode +"'>" + country.CountryLabel + "</div>");
            });
        }

        //Change the inputs acording to the data-array when a country is selected from the list.
        function changeBusinessNumberInputs(ThisElement){
            //Find the country from the data-array.
            var country = countrydata.find(function(element, index, array){
                return element.CountryCode === value;
            }, value = ThisElement.attr('data-value'));
    
            //Change the label.
            $(element).children('#countryprefix').children('#currentselected').html(country.CountryCode);
            //Change the prefix hidden input.
            $(element).children("#businessnumberprefix").val(ThisElement.attr('data-value'));
    
            //Remove all inputs before making new ones.
            $(element).children('#businessnumberinputs').children('.businessnumberinput').remove();
    
            $i = 0;
            //For each input the given country has, append it to the inputs class element.
            $.each(country.Inputs, function(index,input){
                //check if the input is alone or not, if so, give it another class to make it pretty with css.
                if(VATInputs == 1){
                    $(element).children('#businessnumberinputs').append("<input class='businessnumberinput onlyinput' id='" + country.CountryLabel + "input' style='width: " + input.width + ";text-align: " + input.textalign + ";' type='" + input.type + "' name='businessnumber[" + $i + "]' minlength='" + input.minlength + "' maxlength='" + input.maxlength + "' value='" + input.value + "' " + input.attribute + ">");
                }else{
                    $(element).children('#businessnumberinputs').append("<input class='businessnumberinput multipleinputs' id='" + country.CountryLabel + "input' style='width: " + input.width + ";text-align: " + input.textalign + ";' type='" + input.type + "' name='businessnumber[" + $i + "]' minlength='" + input.minlength + "' maxlength='" + input.maxlength + "' value='" + input.value + "' " + input.attribute + ">");
                }
                $i++;
            }, VATInputs = country.VATInputs);
    
            //update the output element
            $(element).children('#output_businessnumber').val(country.CountryCode);
            //hide the country list
            $(ThisElement).parent('.countrylist').removeClass('active');
        }

        return this.initialize();
    }
}(jQuery));