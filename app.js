

const submit = document.querySelector('#click');

const counter = document.querySelector('.counter');


submit.addEventListener('click',function(){
    

    let date = document.querySelector('input[type="date"]').value;
    let time = document.querySelector('input[type="time"]').value;

    
    if(date == '' || time == ''){
        counter.innerHTML= `<p style="color:red;"> Please Fill all feild </p>`;   
    }else{
        
    let end = setInterval( () => {

    let start_time = new Date();
    let end_time = new Date(date + ' ' + time);

    if( end_time.getTime() < start_time.getTime() ){

        counter.innerHTML= `<p style="color:red;"> Wrong Input</p>`; 

        clearInterval(end);

       }else{

        let time_diff = Math.floor(Math.abs(end_time.getTime() - start_time.getTime()));

        let total_sec = Math.floor(time_diff/1000);
        let total_min = Math.floor(total_sec/60);
        let total_hours = Math.floor(total_min/60);
        let total_days = Math.floor(total_hours/24);
    
    
        let hours = total_hours - (total_days*24);
        let min = total_min - (total_days*24*60) - (hours*60);
        let sec = total_sec - (total_days*24*60*60) - (hours*60*60) - ( min*60);
    
        counter.innerHTML=`${total_days} Day    ${hours} Hour    ${min} Muniet ${sec} Second`;
        
        
       }



    }, 1000);

    };





});