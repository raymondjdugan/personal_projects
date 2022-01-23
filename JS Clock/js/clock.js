const timeEl = document.getElementById('time-element');
const dateEl = document.getElementById('date-element');
const locale = navigator.language;

function displayDate (el, lang){
    const dateOptions = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    }
    el.innerText = new Intl.DateTimeFormat(lang, dateOptions).format(new Date())
}
displayDate(dateEl, locale);
function setCurrentTime (el, lang) {
    const timeFormat = function (){
        const time = new Date()
        const timeOptions = {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        }
        el.innerText = time.toLocaleString(lang, timeOptions)
    }
    timeFormat();
    setInterval(timeFormat, 1000);
}
setCurrentTime(timeEl, locale)


