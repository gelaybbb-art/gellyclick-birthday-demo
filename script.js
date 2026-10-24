const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

const toast = document.getElementById("toast");
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 4500);
}
document.getElementById("contactButton").addEventListener("click", () => {
  const occasion = document.getElementById("occasion").value;
  const vibe = document.getElementById("vibe").value;
  const details = document.getElementById("details").value.trim();
  const message = `Hi GellyClick! I'd love to make a digital greeting website. Occasion: ${occasion}. Design vibe: ${vibe}.${details ? " Details: " + details : ""}`;
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(message).then(
      () => showToast("Your request message is copied! Add your Messenger/contact link to this page before sharing it with customers."),
      () => showToast(message)
    );
  } else {
    showToast(message);
  }
});
