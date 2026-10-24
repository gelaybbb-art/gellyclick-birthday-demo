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

document.getElementById("contactButton").addEventListener("click", () => {
  const occasion = document.getElementById("occasion").value;
  const vibe = document.getElementById("vibe").value;
  const details = document.getElementById("details").value.trim();
  const subject = `GellyClick custom greeting inquiry — ${occasion}`;
  const body = [
    "Hi GellyClick!",
    "",
    "I'd love to inquire about a personalized digital greeting website.",
    `Occasion: ${occasion}`,
    `Preferred design vibe: ${vibe}`,
    details ? `More details: ${details}` : "",
    "",
    "Please let me know the next steps and pricing.",
    "",
    "Thank you!"
  ].filter(Boolean).join("\n");
  const mailto = `mailto:gellyclick@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
});
