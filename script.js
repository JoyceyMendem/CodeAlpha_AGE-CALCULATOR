document.getElementById('calculateBtn').addEventListener('click', () => {
  const dob = new Date(document.getElementById('dob').value);
  const today = new Date();

  if (!dob || dob > today) {
    document.getElementById('result').innerText = 'Please enter a valid date of birth.';
    return;
  }

  let ageYears = today.getFullYear() - dob.getFullYear();
  let ageMonths = today.getMonth() - dob.getMonth();
  let ageDays = today.getDate() - dob.getDate();

  if (ageDays < 0) {
    ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    ageMonths--;
  }

  if (ageMonths < 0) {
    ageMonths += 12;
    ageYears--;
  }

  document.getElementById('result').innerText = 
    `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
});
