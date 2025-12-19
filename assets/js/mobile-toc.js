// Mobile TOC - A16Z Style
document.addEventListener('DOMContentLoaded', function() {
  const mobileTocToggle = document.getElementById('mobileTocToggle');
  const mobileTocContent = document.getElementById('mobileTocContent');
  const mobileTocArrow = document.getElementById('mobileTocArrow');
  const mobileTocLinks = document.querySelectorAll('.mobile-toc-link');
  const sections = [];
  
  // Collect all sections
  mobileTocLinks.forEach(link => {
    const sectionId = link.getAttribute('data-section');
    const section = document.getElementById(sectionId);
    if (section) {
      sections.push({
        id: sectionId,
        element: section,
        link: link
      });
    }
  });

  // Toggle TOC content
  if (mobileTocToggle) {
    mobileTocToggle.addEventListener('click', function() {
      const isExpanded = mobileTocContent.classList.contains('expanded');
      
      if (isExpanded) {
        mobileTocContent.classList.remove('expanded');
        mobileTocArrow.classList.remove('rotated');
      } else {
        mobileTocContent.classList.add('expanded');
        mobileTocArrow.classList.add('rotated');
      }
    });
  }

  // Handle TOC link clicks
  mobileTocLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('data-section');
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Smooth scroll to section
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
        updateActiveTocLink(this);
        mobileTocContent.classList.remove('expanded');
        mobileTocArrow.classList.remove('rotated');
      }
    });
  });

  function updateActiveTocLink(activeLink = null) {
    mobileTocLinks.forEach(link => link.classList.remove('active'));
    if (activeLink) {
      activeLink.classList.add('active');
    }
  }

  // Scroll spy for mobile TOC
  function handleMobileTocScroll() {
    const scrollPosition = window.scrollY + 150;
    let activeSection = null;

    sections.forEach((section, index) => {
      const sectionTop = section.element.offsetTop;
      const sectionBottom = sectionTop + section.element.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSection = section;
      }
    });

    if (activeSection) {
      updateActiveTocLink(activeSection.link);
    }
  }

  // Scroll to top functionality
  const scrollTopBtn = document.getElementById('back-to-top');

  function handleScrollTopVisibility() {
    if (window.scrollY > 400) {
      scrollTopBtn?.classList.add('show');
    } else {
      scrollTopBtn?.classList.remove('show');
    }
  }

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  window.addEventListener('scroll', function() {
    handleMobileTocScroll();
    handleScrollTopVisibility();
  });

  handleMobileTocScroll();
  handleScrollTopVisibility();
});
