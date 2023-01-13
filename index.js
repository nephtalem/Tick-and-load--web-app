
const startBtn = document.querySelector('.start-btn')
const hoursInput = document.querySelector('#hours')
const minutesInput = document.querySelector('#minutes')
const secondsInput = document.querySelector('#seconds')
const color = document.querySelector('.color')
const percent = document.querySelector('.percentage')


startBtn.addEventListener('click', function(){

     var count = (parseInt(hoursInput.value) * 60 * 60) + 
     (parseInt(minutesInput.value) * 60) + parseInt(secondsInput.value)

     var count2 = count
     var newCount = count


    if(count > 0){

        var countdown = setInterval(function(){
            count--
            var hours = Math.floor(count / (60 * 60))
            var minutes = Math.floor((count % (60 * 60)) / 60)
            var seconds = count % 60;

            hoursInput.value = hours
            minutesInput.value = minutes
            secondsInput.value = seconds

            if(count == 0){
                
                clearInterval(countdown)
                color.style.width = `100%`
                percent.textContent =`100%`
                
            }



         }, 1000)

        
        // reduce this setinterval

        var progress = setInterval(function(){
            newCount -=5
            var percentage = 100 - (Math.round((newCount * 100) /count2))

            color.style.width = `${percentage}%`
            percent.textContent =`${percentage}%`

            if(newCount < 0){

                color.style.width = `0`
                percent.textContent =`0%`
                clearInterval(progress)
                
                
                
            }
        
        },5000)

    }
     
})




// var progress = setInterval(function(){
//     newCount -=5
//     var percentage = 100 - (Math.round((newCount * 100) /count2))

//     color.style.width = `${percentage}%`
//     percent.textContent =`${percentage}%`

//     if(newCount < 0){

//         color.style.width = `0`
//         percent.textContent =`0%`
//         clearInterval(progress)
        
//     }
// },5000)


