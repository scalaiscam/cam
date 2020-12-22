btnrecherche = document.getElementById('formweather').addEventListener("submit", function(event) {
    
    event.preventDefault();
}, false);


function loadmeteo(ville){
    var url2 = "https://www.prevision-meteo.ch/services/json/"+ville;



                $.ajax({

                    url : url2,
        
                    type : 'GET',
        
                    dataType : 'json',
        
                    success : function(monObjet2){
        
                    console.log(monObjet2)

                    $('h1').html(monObjet2.city_info.name+", "+monObjet2.city_info.country);
                    $('.daycurrent h2').html(monObjet2.current_condition.condition);
                    //$('.daycurrent img').attr('src',monObjet2.current_condition.icon_big);
                    $('.daycurrent .image').attr('class',"image image-"+monObjet2.current_condition.condition_key);
                    $('.daycurrent .jour').html(monObjet2.fcst_day_0.day_long);
                    $('.daycurrent .date').html(monObjet2.current_condition.date);
                    $('.daycurrent .temperature').html(monObjet2.current_condition.tmp+'Â°c');


                    $('.day1 h2').html(monObjet2.fcst_day_1.condition);
                    //$('.day1 img').attr('src',monObjet2.fcst_day_1.icon_big);
                    $('.day1 .image').attr('class',"image image-"+monObjet2.fcst_day_1.condition_key);
                    $('.day1 .jour').html(monObjet2.fcst_day_1.day_long);
                    $('.day1 .date').html(monObjet2.fcst_day_1.date);
                    $('.day1 .temperaturemax').html('tempÃ©rature max : '+monObjet2.fcst_day_1.tmax+'Â°c');
                    $('.day1 .temperaturemin').html('tempÃ©rature min : '+monObjet2.fcst_day_1.tmin+'Â°c');

                    $('.day2 h2').html(monObjet2.fcst_day_2.condition);
                    //$('.day2 img').attr('src',monObjet2.fcst_day_2.icon_big);
                    $('.day2 .image').attr('class',"image image-"+monObjet2.fcst_day_2.condition_key);
                    $('.day2 .jour').html(monObjet2.fcst_day_2.day_long);
                    $('.day2 .date').html(monObjet2.fcst_day_2.date);
                    $('.day2 .temperaturemax').html('tempÃ©rature max : '+monObjet2.fcst_day_2.tmax+'Â°c');
                    $('.day2 .temperaturemin').html('tempÃ©rature min : '+monObjet2.fcst_day_2.tmin+'Â°c');

                    $('.day3 h2').html(monObjet2.fcst_day_3.condition);
                    //$('.day3 img').attr('src',monObjet2.fcst_day_3.icon_big);
                    $('.day3 .image').attr('class',"image image-"+monObjet2.fcst_day_3.condition_key);
                    $('.day3 .jour').html(monObjet2.fcst_day_3.day_long);
                    $('.day3 .date').html(monObjet2.fcst_day_3.date);
                    $('.day3 .temperaturemax').html('tempÃ©rature max : '+monObjet2.fcst_day_3.tmax+'Â°c');
                    $('.day3 .temperaturemin').html('tempÃ©rature min : '+monObjet2.fcst_day_3.tmin+'Â°c');

                    $('.day4 h2').html(monObjet2.fcst_day_4.condition);
                    //$('.day4 img').attr('src',monObjet2.fcst_day_4.icon_big);
                    $('.day4 .image').attr('class',"image image-"+monObjet2.fcst_day_4.condition_key);
                    $('.day4 .jour').html(monObjet2.fcst_day_4.day_long);
                    $('.day4 .date').html(monObjet2.fcst_day_4.date);
                    $('.day4 .temperaturemax').html('tempÃ©rature max : '+monObjet2.fcst_day_4.tmax+'Â°c');
                    $('.day4 .temperaturemin').html('tempÃ©rature min : '+monObjet2.fcst_day_4.tmin+'Â°c');

                    }

                    
        
        
                })//fin ajax de success
}//function loadmeteo

    
    navigator.geolocation.getCurrentPosition(function(position){
        console.log(position);

        var lng = position.coords.longitude;
        var lat = position.coords.latitude;

        console.log("lat: "+lat+" lng: "+lng)

        var url = "https://us1.locationiq.com/v1/reverse.php?key=pk.c4245aea755e71277f98399333e29db8&format=json&lat="+lat+"&lon="+lng;

    
        $.ajax({

            url : url,

            type : 'GET',

            dataType : 'json',

            success : function(monObjet){

                ville = monObjet.address.town;
                console.log(ville); 
                
                
                loadmeteo(ville);
        

            }// fin success


        })//fin ajax


    })//fin geolocation

    $("#go").click(function(){
        var ville = $("#ville").val();
        console.log(ville);
        loadmeteo(ville);
    });

    $("#localisation").click(function(e){
        e.preventDefault();
        $("input[type=text]").val("");
        loadmeteo(ville);
    });
