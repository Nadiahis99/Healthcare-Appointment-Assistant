const toggleBtn = document.getElementById("darkModeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // تغيير الأيقونة
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.innerHTML = '<i class="bi bi-sun"></i>';
  } else {
    toggleBtn.innerHTML = '<i class="bi bi-moon"></i>';
  }
});
