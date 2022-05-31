import isoCountries from "../json/countries.json" assert { type: "json" };



(function ($) {

  $(function () {

    console.log(isoCountries);



    function formatCountry(country) {

      if (!country.id) {

        return country.text;

      }

      var $country = $(

        '<span class="flag-icon flag-icon-' +

          country.id.toLowerCase() +

          ' flag-icon-squared"></span>' +

          '<span class="flag-text">' +

          country.text +

          "</span>"

      );

      return $country;

    }



    //Assuming you have a select element with name country

    // e.g. <select name="name"></select>



    $("[name='country']").select2({

      placeholder: "Select a country",

      templateResult: formatCountry,

      data: isoCountries,

    });

  });

})(jQuery);