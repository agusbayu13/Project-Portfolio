window.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    const splashLogo = document.getElementById("splash-logo");
    const navbarLogo = document.getElementById("navbar-logo");
    const splashScreen = document.getElementById("splash-screen");

    if (splashLogo && navbarLogo) {
      // Dapatkan posisi logo splash & navbar (relatif viewport)
      const splashRect = splashLogo.getBoundingClientRect();
      const navbarRect = navbarLogo.getBoundingClientRect();

      // Clone logo splash
      const flying = splashLogo.cloneNode(true);
      flying.style.position = "fixed";
      flying.style.left = splashRect.left + "px";
      flying.style.top = splashRect.top + "px";
      flying.style.width = splashRect.width + "px";
      flying.style.height = splashRect.height + "px";
      flying.style.margin = "0";
      flying.style.zIndex = 999999;
      flying.style.transition = "all 0.95s cubic-bezier(.77,0,.18,1)";
      flying.style.pointerEvents = "none";
      flying.id = "flying-logo-anim";

      document.body.appendChild(flying);

      // Sembunyikan splash logo asli
      splashLogo.style.opacity = 0;

      setTimeout(function () {
        // Hitung translate & scale
        const deltaX = navbarRect.left - splashRect.left;
        const deltaY = navbarRect.top - splashRect.top;
        const scale = navbarRect.width / splashRect.width;

        flying.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${scale})`;
        flying.style.opacity = 1;

        // Setelah animasi selesai, tunggu sebentar baru tampilkan navbar logo dan hilangkan splash
        setTimeout(function () {
          // Fade-in navbar logo (splash-logo-finish class)
          document.body.classList.add("splash-logo-finish");

          // Tunggu sejenak agar user lihat efek logo berpindah, baru splash hilang
          setTimeout(function () {
            flying.remove();
            splashScreen.classList.add("hide");
            setTimeout(function () {
              splashScreen.style.display = "none";
              document.body.classList.remove("no-hero-anim");
              // Trigger animasi hero section jika pakai IntersectionObserver/manual
              var hero = document.querySelector(".hero");
              if (hero) hero.classList.add("in-view");
            }, 500); // waktu fade-out splash
          }, 650); // waktu logo navbar sudah muncul sebelum splash hilang
        }, 980); // waktu animasi logo terbang
      }, 150); // waktu persiapan flying logo
    } else {
      // Fallback jika logo tidak ditemukan
      splashScreen.classList.add("hide");
      setTimeout(function () {
        splashScreen.style.display = "none";
        document.body.classList.remove("no-hero-anim");
        document.body.classList.add("splash-logo-finish");
        var hero = document.querySelector(".hero");
        if (hero) hero.classList.add("in-view");
      }, 400);
    }
  }, 4500); // waktu splash tampil awal
});
