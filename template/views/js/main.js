const submitbtn=document.getElementById('submitbtn');
const city_name=document.getElementById('city_name');
const cityname=document.getElementById('cityname');
const temp_status=document.getElementById('temp_status');
const temp=document.getElementById('temp_val');
const datahide=document.querySelector('.middle_layer');
const getInfo=async(event)=>{ 
    event.preventDefault();
    let cityval=city_name.value;
    if(cityval === "")
    {
       cityname.innerText='pls write the name before search';
       datahide.classList.add('data_hide');
    }else{
        try{
       let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=2af709d10371fe4da3a7135677da3d47`;
       const response=await fetch(url);
       const data=await response.json();
       const arrdata=[data];
       let cel=(arrdata[0].main.temp-273.15).toFixed(2);
       console.log(cel+`<sup>o</sup>`);
       temp.innerText=cel;
       cityname.innerText=`${arrdata[0].name},${arrdata[0].sys.country}`;

       const tempMood=arrdata[0].weather[0].main;
       if(tempMood =="Clear")
       temp_status.innerHTML="<i class='fa-solid fa-sun' style='color:#eccc68'></i>";
       else if(tempMood == "Clouds")
       temp_status.innerHTML="<i class='fa-solid fa-cloud'></i>";
       datahide.classList.remove('data_hide');
        }catch{
            cityname.innerText='pls enter the correct city name';
            datahide.classList.add('data_hide');
        }

    }
}

submitbtn.addEventListener('click',getInfo);