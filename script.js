document.getElementById("feedbackForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const feedback1 = e.target.feedback1.value;
  const feedback2 = e.target.feedback2.value;

  const res = await fetch("/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ feedback1, feedback2 })
  });
  const data = await res.json();
  document.getElementById("message").textContent = data.message;
  e.target.reset();
});