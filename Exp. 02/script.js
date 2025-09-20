function calculateBill() {
  const quantities = document.querySelectorAll('.qty');
  let total = 0;
  let receiptText = '';

  quantities.forEach((input) => {
    const price = parseFloat(input.getAttribute('data-price'));
    const qty = parseInt(input.value);
    const name = input.closest('.product').querySelector('h2').innerText;

    if (qty > 0) {
      const itemTotal = price * qty;
      total += itemTotal;
      receiptText += `${name} x${qty} = ₹${itemTotal}\n`;
    }
  });

  receiptText += `----------------------\nTotal = ₹${total}`;
  document.getElementById('bill-details').innerText = receiptText;
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
function updateTime() {
  const now = new Date();
  document.getElementById("time").innerText = now.toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime();
