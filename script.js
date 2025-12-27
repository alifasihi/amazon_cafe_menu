AOS.init({
  duration: 600,
  offset: 40,
  once: true,
});

document.getElementById("search").addEventListener("input", (e) => {
  const q = e.target.value.toLowerCase();
  document.querySelectorAll(".menu-item").forEach((i) => {
    i.style.display = i.textContent.toLowerCase().includes(q)
      ? "block"
      : "none";
  });
});
