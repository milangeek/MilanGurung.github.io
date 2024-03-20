function updateTime(){
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const amPM = hours >= 12 ? 'PM':'AM';

    //Convert 24-hour format to 12-hour format
    const formattedHours = hours % 12 || 12;

    //Get the time zone abbreviation
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const formattedTime = `${formattedHours}:${minutes < 10 ? '0' + minutes:minutes}:${amPM} ${timeZone}`;

    document.getElementById('live-time').innerText = formattedTime;
};

//Update the time every minute(since seconds are not displayed)
setInterval(updateTime, 60000);

//initial update
updateTime();

const overlay = document.querySelector('.overlay')

window.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const x = Math.round((clientX / window.innerWidth) * 100);
    const y = Math.round((clientY / window.innerHeight) * 100);

    gsap.to(overlay, {
        '--x': `${x}%`,
        '--y': `${y}%`,
        duration: 0.3,
        ease: 'sine.out'
    })
})

const hamburger = document.querySelector(".hamburger");
const onActive = document.querySelector(".onActive");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    onActive.classList.toggle("active");

})