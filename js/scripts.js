function loadmeteo(ville){
  var url2 = "https://www.prevision-meteo.ch/services/json/"+ville;
  
  $.ajax({
      url: url2,
      method: "GET",
      dataType: "json",
  
      success:function(monObjet2){
  
          
          console.log(monObjet2);
  
          $(".daycurrent h1").html(monObjet2.city_info.name+","+monObjet2.city_info.country);
          $(".daycurrent .condition").html(monObjet2.current_condition.condition);
          $(".daycurrent .icone").attr("url",monObjet2.current_condition.icon_big);
          $(".daycurrent .heure").html(monObjet2.current_condition.hour);
          $(".daycurrent .date").html(monObjet2.current_condition.date);
          $(".daycurrent .humidity").html(monObjet2.current_condition.humidity);
          $(".daycurrent .temperature").html(monObjet2.current_condition.tmp+" C°");
  
  
          $(".day0 .date h3").html(monObjet2.fcst_day_0.day_long);
          $(".day0 icone").attr("url", "icons/"+monObjet2.fcst_day_0.condition_key+".png");
          $(".day0 .temperaturemax").append(monObjet2.fcst_day_0.tmax+" / ");
          $(".day0 .temperaturemin").append(monObjet2.fcst_day_0.tmin+" C°");
  
          $(".day1 .date h3").html(monObjet2.fcst_day_1.day_long);
          $(".day1 icone").attr("url", "icons/"+monObjet2.fcst_day_1.condition_key+".png");
          $(".day1 .temperaturemax").append(monObjet2.fcst_day_1.tmax+" / ");
          $(".day1 .temperaturemin").append(monObjet2.fcst_day_1.tmin+" C°");

          $(".day2 .date h3").html(monObjet2.fcst_day_2.day_long);
          $(".day2 icone").attr("url", "icons/"+monObjet2.fcst_day_2.condition_key+".png");
          $(".day2 .temperaturemax").append(monObjet2.fcst_day_2.tmax+" / ");
          $(".day2 .temperaturemin").append(monObjet2.fcst_day_2.tmin+" C°");

          $(".day3 .date h3").html(monObjet2.fcst_day_3.day_long);
          $(".day3 icone").attr("url", "icons/"+monObjet2.fcst_day_3.condition_key+".png");
          $(".day3 .temperaturemax").append(monObjet2.fcst_day_3.tmax+" / ");
          $(".day3 .temperaturemin").append(monObjet2.fcst_day_3.tmin+" C°");

          $(".day4 .date h3").html(monObjet2.fcst_day_4.day_long);
          $(".day4 icone").attr("url", "icons/"+monObjet2.fcst_day_4.condition_key+".png");
          $(".day4 .temperaturemax").append(monObjet2.fcst_day_4.tmax+" / ");
          $(".day4 .temperaturemin").append(monObjet2.fcst_day_4.tmin+" C°");
  
      } //success function
  }) //ajax
  } //loadmeteo
  
  

  navigator.geolocation.getCurrentPosition(function(position){
  
      // console.log(position);
  
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
  
      // console.log("lat: "+lat+" Lng:"+lng);
  
      var url = "https://us1.locationiq.com/v1/reverse.php?key=pk.69eee5820da4d31d8f99fbe66e38e5ad&format=json&lat="+lat+"&lon="+lng;
  
      $.ajax({
          url: url,
          method: "GET",
          dataType: "json",
  
          success:function(monObjet){
  
              var ville = monObjet.address.town;
              console.log(ville);
  
              loadmeteo(ville);
  
  
          } //success function
      }) //ajax
  
  
  }); //geloc
  
   
  
  $( "#go" ).click(function() {  
    
      var ville = $("#ville").val();
     
      console.log(ville);
      loadmeteo(ville);
  
  }) //click
  




//modal
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

//-------------------------------------------------- switch darkmode----------------------------------------
const switchButton = document.getElementById('switch');
 
switchButton.addEventListener('click', () => {
    document.body.classList.toggle('dark'); //toggle the HTML body the class 'dark'
    switchButton.classList.toggle('active');//toggle the HTML button with the id='switch' with the class 'active'
});

