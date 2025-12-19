document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleBtn");
  const menuList = document.getElementById("menuList");
  // const toggleIcon = document.getElementById("toggleIcon");
  const toggleIcons = document.querySelectorAll("#toggleIcon, #toggleIconMobile");

  let isOpen = true;

  toggleBtn.addEventListener("click", function () {
    isOpen = !isOpen;

    if (isOpen) {
      menuList.style.maxHeight = menuList.scrollHeight + "px";
      menuList.style.opacity = "1";
      menuList.style.visibility = "visible";
      // toggleIcon.style.transform = "rotate(0deg)";

      toggleIcons.forEach(toggleIcon => {
      toggleIcon.style.transform = "rotate(0deg)";
      });
    } else {
      menuList.style.maxHeight = "0";
      menuList.style.opacity = "0";
      menuList.style.visibility = "hidden";
      // toggleIcon.style.transform = "rotate(180deg)";

      toggleIcons.forEach(toggleIcon => {
      toggleIcon.style.transform = "rotate(180deg)";
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll(".menu__link");
  const sections = document.querySelectorAll("h2[id]");
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
    });
  });

  function handleScroll() {
    const scrollPosition = window.scrollY;
    let activeSection = null;

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop - 150;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
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
    
    const parentGroup = link.closest('.group');
    if (parentGroup) {
      const border = parentGroup.querySelector('.border__menu');
      if (border) {
        border.style.backgroundColor = "#f56915";
      }
    }
  }

  menuGroups.forEach((group) => {
    const border = group.querySelector('.border__menu');
    const link = group.querySelector('.menu__link');
    
    group.addEventListener('mouseenter', function() {
      if (!link.classList.contains('active')) {
        border.style.backgroundColor = "#f56915";
        link.classList.add('hover-effect');
      }
    });
    
    group.addEventListener('mouseleave', function() {
      if (!link.classList.contains('active')) {
        border.style.backgroundColor = "transparent";
        link.classList.remove('hover-effect');
      }
    });
  });

  window.addEventListener("scroll", handleScroll);

  handleScroll();
});



