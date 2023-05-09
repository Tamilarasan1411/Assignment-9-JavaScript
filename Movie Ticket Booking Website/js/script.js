const seats = document.querySelectorAll('.seat');
const pricePerSeat = 180;
const gstPercentage = 2; // Assuming 2% GST
let selectedSeats = [];
seats.forEach(seat => {
  seat.addEventListener('click', function() {
    if (!seat.classList.contains('occupied')) {
      seat.classList.toggle('selected');

// Update selectedSeats array
if (seat.classList.contains('selected')) {
  selectedSeats.push(seat);
} 
else {
  selectedSeats = selectedSeats.filter(s => s !== seat);
}

// Update booking details
const movieName = document.getElementById('movie-name').textContent;
const selectedSeatsCount = selectedSeats.length;
const seatNumbers = selectedSeats.map(s => s.textContent).join(', ');
const totalPrice = selectedSeatsCount * pricePerSeat;
const gstAmount = Math.round(totalPrice * gstPercentage / 100);
const totalAmount = totalPrice + gstAmount;
document.getElementById('selected-seats').textContent = selectedSeatsCount;
document.getElementById('seat-numbers').textContent = seatNumbers;
document.getElementById('total-price').textContent = `Rs. ${totalPrice}`;
document.getElementById('gst-price').textContent = `Rs. ${gstAmount}`;
document.getElementById('total-amount').textContent = `Rs. ${totalAmount}`;
}
});
});

function checkAndRedirect() {
  const selectedSeatsCount = document.getElementById('selected-seats').textContent;
  if (selectedSeatsCount === '0') {
    alert('Please select at least one seat.');
} 
else {
  location.href = 'seat.html';
}
}

// Define the show times
const showTimes = [
  { name: "Bigil", time: "10:00 AM" },
  { name: "Ghilli", time: "01:00 PM" },
  { name: "Pokkiri", time: "07:00 PM" },
];
        
// Find the next show time
const now = new Date();
const nextShow = showTimes.find((show) => {
const showTime = new Date(`${now.toDateString()} ${show.time}`);
return showTime > now;
});
        
// Display the timer
const timerElement = document.getElementById("timer");
if (nextShow) {
  const showTime = new Date(`${now.toDateString()} ${nextShow.time}`);
  setInterval(() => {
  const timeLeft = showTime - new Date();
  const hours = Math.floor(timeLeft / 1000 / 60 / 60);
  const minutes = Math.floor(timeLeft / 1000 / 60) % 60;
  const seconds = Math.floor(timeLeft / 1000) % 60;
  const timerElement = document.getElementById('timer');
  timerElement.innerHTML = `Next show (${nextShow.name}) starts in ${hours} hours, ${minutes} minutes, and ${seconds} seconds.`;
}, 1000);
} 
else {
  timerElement.textContent = "No more shows today.";
}
  
function searchMovies() {
  const searchTerm = document.getElementById("search").value.toLowerCase();
  const movies = document.getElementsByClassName("movie");
  for (let i = 0; i < movies.length; i++) {
    const movieTitle = movies[i].getElementsByTagName("h2")[0].textContent.toLowerCase();
  if (movieTitle.includes(searchTerm)) {
    movies[i].style.display = "block";
} 
else {
  movies[i].style.display = "none";
}
}
}
  
function filterMovies() {
  const genreFilter = document.getElementById("genre-filter").value.toLowerCase();
  const movies = document.getElementsByClassName("movie");
  for (let i = 0; i < movies.length; i++) {
    const movieGenre = movies[i].getAttribute("data-genre").toLowerCase();
  if (genreFilter === "" || movieGenre === genreFilter) {
    movies[i].style.display = "block";
} 
else {
  movies[i].style.display = "none";
}
}
}
   
   

    