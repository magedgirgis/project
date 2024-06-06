// invoce number
var InvoiceNo = document.getElementById("InvoiceNo")
var randomInvoice = Math.floor(Math.random() * 500) + 1009;
InvoiceNo.textContent = "10" + randomInvoice;

// invoice date
var today = document.getElementById("today")
var currentDate = new Date();
var options = { year: 'numeric', month: 'long', day: 'numeric' };
var formattedDate = currentDate.toLocaleDateString('en-US', options);
today.textContent = formattedDate;

