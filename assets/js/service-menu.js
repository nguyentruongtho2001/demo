
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleBtn");
  const menuList = document.getElementById("menuList");
  const toggleIcon = document.getElementById("toggleIcon");

  // Mặc định: mở nếu là desktop (>=768), ngược lại thì đóng
  let isOpen = window.innerWidth >= 768;

  function updateMenuState() {
    if (isOpen) {
      menuList.style.maxHeight = menuList.scrollHeight + "px";
      menuList.style.opacity = "1";
      menuList.style.visibility = "visible";
      toggleIcon.style.transform = "rotate(0deg)";
    } else {
      menuList.style.maxHeight = "0";
      menuList.style.opacity = "0";
      menuList.style.visibility = "hidden";
      toggleIcon.style.transform = "rotate(180deg)";
    }
  }

  // Gọi update sau 1 vòng event loop để DOM tính toán xong
  setTimeout(updateMenuState, 0);

  toggleBtn.addEventListener("click", function () {
    isOpen = !isOpen;
    updateMenuState();
  });

  // === MENU SCROLL HIGHLIGHT ===
  const menuLinks = document.querySelectorAll(".menu__link");
  const sections = [...document.querySelectorAll("h2[id], span[id]")];
  const borders = document.querySelectorAll(".border__menu");
  const menuGroups = document.querySelectorAll(".group");

  menuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: "smooth",
        });
      }

      resetAllLinks();
      resetAllHoverEffects();
      activateLink(link);
      console.log("click click");
      if (window.innerWidth < 768) {
        setTimeout(() => { 
        isOpen = !isOpen;
        updateMenuState();
        }, 300);
      }
    });
  });

  function handleScroll() {
    const middleOfScreen = window.scrollY + window.innerHeight / 2;
    let activeSection = null;

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const sectionBottom = sectionTop + rect.height;

      if (middleOfScreen >= sectionTop && middleOfScreen < sectionBottom) {
        activeSection = index;
      }
    });

    if (activeSection !== null) {
      resetAllLinks();
      resetAllHoverEffects();

      borders.forEach((border, index) => {
        border.style.backgroundColor = index === activeSection ? "#f56915" : "transparent";
      });

      if (menuLinks[activeSection]) {
        activateLink(menuLinks[activeSection]);
      }
    }
  }

  function resetAllLinks() {
    menuLinks.forEach((menuLink) => {
      menuLink.classList.remove("active");
      menuLink.style.color = "#354a60";
    });
  }

  function resetAllHoverEffects() {
    menuLinks.forEach((menuLink) => {
      menuLink.classList.remove("hover-effect");
    });

    borders.forEach((border) => {
      border.style.backgroundColor = "transparent";
    });
  }

  function activateLink(link) {
    link.classList.add("active");
    link.style.color = "#f56915";

    const parentGroup = link.closest(".group");
    if (parentGroup) {
      const border = parentGroup.querySelector(".border__menu");
      if (border) {
        border.style.backgroundColor = "#f56915";
      }
    }
  }

  menuGroups.forEach((group) => {
    const border = group.querySelector(".border__menu");
    const link = group.querySelector(".menu__link");

    group.addEventListener("mouseenter", function () {
      if (!link.classList.contains("active")) {
        border.style.backgroundColor = "#f56915";
        link.classList.add("hover-effect");
      }
    });

    group.addEventListener("mouseleave", function () {
      if (!link.classList.contains("active")) {
        border.style.backgroundColor = "transparent";
        link.classList.remove("hover-effect");
      }
    });
  });

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // chạy lần đầu
});
