# BusinessNumberInput
Builds a Business Number Input for all EU countries using JQuery & FontAwesome icons!
Preview: https://axeldolislager.github.io/BusinessNumberInput/index.html

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
What things you need to install the software and how to install them
1. JQuery (installation instructions found here: https://www.w3schools.com/jquery/jquery_get_started.asp)
2. FontAwesome (installation instructions found here: https://fontawesome.com/start)

### Installing
A step by step series of examples that tell you how to get a development env running
1. Download the release from the github page.
2. Extract the wanted .css and .js files from the release and paste them in your project.
3. Link the javascript and stylesheet files in your project
4. add the following code inside your form to let the code generate the business number input field for you.
```<div id='AnyID' class='jQuery-BusinessNumber'></div>```
5. Declare the element with the jQuery plugin above </body>.
```
<script>
    $("#AnyID").BusinessNumberInput();
</script>
```

### Options
You can now declare the countries you want to use by using the folowing:
```
    $("#AnyID").BusinessNumberInput({
      "countries": ['BE', 'NL']
    });
```

You can also name the output yourself. By default this is , you can name your own:
```
    $("#AnyID").BusinessNumberInput({
      "name" : 'AnyName'
    });
```


## Authors
Axel D'Olislager - Developer

## License
This project is licensed under the MIT License - see the LICENSE.md file for details
