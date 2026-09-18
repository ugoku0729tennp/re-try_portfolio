document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     MOBILE MENU
  ========================== */

  const menuButton = document.getElementById("menuButton");
  const mobileNav = document.getElementById("mobileNav");

  if (menuButton && mobileNav) {

    menuButton.addEventListener("click", () => {

      const isOpen =
        mobileNav.classList.toggle("open");

      menuButton.classList.toggle(
        "active",
        isOpen
      );

      menuButton.setAttribute(
        "aria-expanded",
        isOpen
      );

    });


    const mobileLinks =
      mobileNav.querySelectorAll("a");

    mobileLinks.forEach((link) => {

      link.addEventListener("click", () => {

        mobileNav.classList.remove("open");
        menuButton.classList.remove("active");

        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );

      });

    });

  }


  /* =========================
     SCROLL REVEAL
  ========================== */

  const revealElements =
    document.querySelectorAll(".reveal");

  const observer =
    new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "is-visible"
            );

            observer.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.12
      }
    );


  revealElements.forEach((element) => {

    observer.observe(element);

  });


  /* =========================
     CURRENT YEAR
  ========================== */

  const year =
    document.getElementById("year");

  if (year) {

    year.textContent =
      new Date().getFullYear();

  }


  /* =========================
     HEADER SHADOW
  ========================== */

  const header =
    document.querySelector(".header");

  window.addEventListener(
    "scroll",
    () => {

      if (window.scrollY > 20) {

        header.style.boxShadow =
          "0 5px 25px rgba(0,0,0,.05)";

      } else {

        header.style.boxShadow =
          "none";

      }

    },
    { passive: true }
  );

});
