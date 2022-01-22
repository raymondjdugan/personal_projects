let setTime = document.getElementById('setTime');
let myTime = new Date();


    const hours = myTime.getHours();
    const mins = myTime.getMinutes();
    const secs = myTime.getSeconds();
    setTime.textContent = `${hours}:${mins}:${secs}`
    console.log(`${hours}:${mins}:${secs}`)



