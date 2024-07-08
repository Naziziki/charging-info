function isChrome() {
  return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
}

if (!isChrome()) {
  alert('Your browser may not be supported to display all data in this application');
}
    const error = document.querySelector('.error');

if (!isChrome()) {
                error.innerHTML = `<i class="fa-solid fa-gear fa-shake" style="color: #fb2d2d;"></i>  Your browser may not be supported to display \n 
                all data in this application`;
            }
initBattery();
console.log(navigator.getBattery());
function initBattery() {
    const bPercentage = document.getElementById('percentage');
    const bStatus = document.getElementById('levelPercentage');
    const bDetails = document.getElementById('info-details');

    navigator.getBattery().then((batt) => {
        let updateBattery = () => {

            
            bPercentage.innerHTML = `${batt.level * 100}%`;
            let level = batt.level * 100;
            console.log(level); 
            bStatus.style.height = `${level}%`;
            if (level <= 20) {
                bStatus.style.background = 'var(--gradient-color-red)';
            } else if (level <= 48) {
                bStatus.style.background = 'var(--gradient-color-orange)';
            } else if (level <= 80) {
                bStatus.style.background = 'var(--gradient-color-yellow)';
            } else {
                bStatus.style.background = 'var(--gradient-color-green)';
            }

            if (batt.charging == true) {
                bDetails.innerHTML = `Charging <i class="fa-solid fa-bolt animated-green"></i>`;
            } else if (level <= 20 && batt.charging == false) {
                bDetails.innerHTML = `Low battery \n Please connect the charger <i class="fa-solid fa-plug animated-red"></i>`;
            } else if (level == 100) {
                bDetails.innerHTML = `Fully charged <i class="fa-solid fa-bolt animated-green">`;
            } else {
                bDetails.innerHTML = '';
            }




            batt.addEventListener("levelchange", () => { updateBattery(); });
            batt.addEventListener("chargingchange", () => { updateBattery(); });
            // console.log(bStatus.style.height);

        }
        updateBattery();
    });
};
