function calculateBill() {
    const units = parseFloat(document.getElementById('units').value);
    let billAmount = 0;

    // Slab rates for A(DM-R) tariff scheme from the reference document (second page)
    if (units <= 102) {
                billAmount = units * 4.10;
            } else if (units <= 180) {
                billAmount = 102 * 4.10 + (units - 102) * 5.34;
            } else if (units <= 300) {
                billAmount = 102 * 4.10 + 78 * 5.34 + (units - 180) * 6.15;
            } else if (units <= 600) {
                billAmount = 102 * 4.10 + 78 * 5.34 + 120 * 6.15 + (units - 300) * 6.65;
            } else if (units <= 900) {
                billAmount = 102 * 4.10 + 78 * 5.34 + 120 * 6.15 + 300 * 6.65 + (units - 600) * 6.81;
            } else {
                billAmount = 102 * 4.10 + 78 * 5.34 + 120 * 6.15 + 300 * 6.65 + 300 * 6.81 + (units - 900) * 8.42;
            }

    document.getElementById('result').innerText = `Total Bill Amount: ₹ ${billAmount.toFixed(2)}`;
}