var now, months, month, year;

now = new Date();

months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

month = now.getMonth();


year = now.getFullYear();

document.querySelector(".todayDate").textContent = months[month] + ' ' + year;
