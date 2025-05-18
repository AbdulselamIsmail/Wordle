// Klavye tıklamaları
document.querySelectorAll(".key").forEach((tus) => {
  tus.addEventListener("click", () => {
    const harf = tus.textContent;
    if (harf === "Sil") sil();
    else if (harf === "Giriş") girisYap();
    else harfYaz(harf);
  });
});

// Fiziksel klavyeyi de destekle
document.addEventListener("keydown", (e) => {
  const harf = e.key.toUpperCase();
  if (harf === "BACKSPACE") sil();
  else if (harf === "ENTER") girisYap();
  else if (/^[A-ZĞÜŞİÖÇ]$/.test(harf)) harfYaz(harf);
});
