
document.addEventListener('DOMContentLoaded', function() {
  const companiesSection = document.querySelector('#section-22');
  if (companiesSection) {
    initCompaniesSlider();
  }
});

function initCompaniesSlider() {
  const companiesSection = document.querySelector('#section-22');
  const slider = companiesSection.querySelector('.list-item');
  const items = slider.querySelectorAll('.item');

  if (items.length <= 1) return;

  let currentIndex = 0;
  const totalItems = items.length;


  const sliderContainer = document.createElement('div');
  sliderContainer.className = 'companies-slider-container';
  sliderContainer.style.cssText = `
    position: relative;
    overflow: hidden;
    width: 100%;
  `;

  const sliderTrack = document.createElement('div');
  sliderTrack.className = 'companies-slider-track';
  sliderTrack.style.cssText = `
    display: flex;
    transition: transform 0.5s ease;
    width: ${totalItems * 100}%;
  `;

  items.forEach(item => {
    item.style.cssText = `
      flex: 0 0 ${100 / totalItems}%;
      max-width: ${100 / totalItems}%;
      padding: 0 15px;
    `;
    sliderTrack.appendChild(item);
  });

  sliderContainer.appendChild(sliderTrack);
  slider.appendChild(sliderContainer);


  const prevBtn = document.createElement('button');
  prevBtn.innerHTML = '‹';
  prevBtn.className = 'companies-slider-btn companies-slider-prev';
  prevBtn.style.cssText = `
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0,0,0,0.5);
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    font-size: 20px;
    z-index: 10;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const nextBtn = document.createElement('button');
  nextBtn.innerHTML = '›';
  nextBtn.className = 'companies-slider-btn companies-slider-next';
  nextBtn.style.cssText = `
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0,0,0,0.5);
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    font-size: 20px;
    z-index: 10;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  sliderContainer.appendChild(prevBtn);
  sliderContainer.appendChild(nextBtn);

  // Slider functions
  function updateSlider() {
    const translateX = -(currentIndex * (100 / totalItems));
    sliderTrack.style.transform = `translateX(${translateX}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateSlider();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateSlider();
  }

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  setInterval(nextSlide, 4000);
}
document.addEventListener('DOMContentLoaded', function () {
  const sectionIds = ['#section-23', '#section-slide'];

  sectionIds.forEach(id => {
    const section = document.querySelector(id);
    if (section) {
      initPartnersSlider(section);
    }
  });
});

function initPartnersSlider(partnersSection) {
  const slider = partnersSection.querySelector('.list-image');
  const images = Array.from(slider.querySelectorAll('.image'));
  const existingPrevBtn = slider.querySelector('.swiper-button-prev');
  const existingNextBtn = slider.querySelector('.swiper-button-next');

  if (images.length <= 1) return;

  // Store original styles
  const originalStyles = images.map(img => {
    const imgElement = img.querySelector('img');
    return {
      container: img.getAttribute('style') || '',
      image: imgElement ? imgElement.getAttribute('style') || '' : ''
    };
  });

  const clonedImages = images.map(img => img.cloneNode(true));
  const allImages = [...images, ...clonedImages];

  let currentIndex = 0;
  const totalImages = images.length;

  const sliderContainer = document.createElement('div');
  sliderContainer.className = 'partners-slider-container';
  sliderContainer.style.cssText = `
    position: relative;
    overflow: hidden;
    width: 100%;
    margin: 0;
    display: flex;
    align-items: center;
  `;

  const sliderTrack = document.createElement('div');
  sliderTrack.className = 'partners-slider-track';
  sliderTrack.style.cssText = `
    display: flex;
    transition: transform 0.5s ease;
    width: ${allImages.length * 20}%;
  `;

  allImages.forEach((img, index) => {
    img.style.cssText = `
      flex: 0 0 20%;
      max-width: 20%;
      padding: 0 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
    `;

    const imgElement = img.querySelector('img');
    if (imgElement) {
      imgElement.style.cssText = '';
      imgElement.style.maxWidth = '100%';
      imgElement.style.height = 'auto';
    }

    sliderTrack.appendChild(img);
  });

  const buttonsToKeep = [existingPrevBtn, existingNextBtn].filter(btn => btn);
  slider.innerHTML = '';
  buttonsToKeep.forEach(btn => slider.appendChild(btn));

  sliderContainer.appendChild(sliderTrack);
  slider.appendChild(sliderContainer);

  function updateSlider() {
    const translateX = -(currentIndex * 20);
    sliderTrack.style.transform = `translateX(${translateX}%)`;
  }

  function nextSlide() {
    currentIndex++;
    if (currentIndex >= totalImages) {
      setTimeout(() => {
        sliderTrack.style.transition = 'none';
        currentIndex = 0;
        updateSlider();
        setTimeout(() => {
          sliderTrack.style.transition = 'transform 0.5s ease';
        }, 50);
      }, 500);
    }
    updateSlider();
  }

  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      sliderTrack.style.transition = 'none';
      currentIndex = totalImages - 1;
      updateSlider();
      setTimeout(() => {
        sliderTrack.style.transition = 'transform 0.5s ease';
      }, 50);
    }
    updateSlider();
  }

  if (existingNextBtn) existingNextBtn.addEventListener('click', nextSlide);
  if (existingPrevBtn) existingPrevBtn.addEventListener('click', prevSlide);

  const autoSlideInterval = setInterval(nextSlide, 3000);
  updateSlider();

}

// change tabs

function toggleTabHorizontal() {
  const tabButtons = document.querySelectorAll(".service .tabs .tab-buttons .tab-btn");
  const tabContents = document.querySelectorAll(".service .tabs .tabs-contents .tab");

  tabButtons.forEach((link) => {
    link.addEventListener("click", () => {
      const id = link.getAttribute("data-tab");
      const tabs = link.closest(".tabs");
      const tabContent = tabs.querySelector(`${id}`);

      tabButtons.forEach((element, index) => {
        element.classList.remove("active-btn");
      });
      tabContents.forEach((element, index) => {
        element.classList.remove("active-tab");
        element.style.display = "none";
      });
      link.classList.add("active-btn");
      tabContent.style.display = "block";
      setTimeout(() => {
        tabContent.classList.add("active-tab");
      }, 20);
    });
  });
}

toggleTabHorizontal();

function toggleCollapsible() {
  const links = document.querySelectorAll(".toggleLink");
  links.forEach((link) => {
    link.addEventListener("click", tabToggle);
  });
}

function tabToggle(event) {
  event.preventDefault();
  event.stopPropagation();
  let tabs = document.querySelectorAll(".service .tabs-content");
  let toggleContents = document.querySelectorAll(".service .toggle-content");
  let $this = event.currentTarget,
    $thisTab = $this.closest(".tabs-content");
  $thisContent = $this.parentNode.nextElementSibling;
  toggleContents.forEach((element, index) => {
    element.style.maxHeight = "0";
  });

  if ($thisTab.classList.contains("is-active")) {
    $thisContent.style.maxHeight = "0";
    tabs.forEach((element, index) => {
      element.classList.remove("is-active");
    });
  } else {
    tabs.forEach((element, index) => {
      element.classList.remove("is-active");
    });
    $thisContent.style.display = "block";
    $thisTab.classList.add("is-active");
    $thisContent.style.maxHeight = $thisContent.scrollHeight + "px";
    $thisContent.style.display = "";
  }
}

toggleCollapsible();

var prevScrollpos = window.pageYOffset;
var section24 = document.getElementById("section-24");

window.onscroll = function () {
  if (header) {
    var currentScrollPos = window.pageYOffset;
    
        header.classList.add("show-sticky-header");
        header.classList.remove("hide-sticky-header");
        if (section24) section24.style.top = "100px";
        if (sidebarLeft) sidebarLeft.style.top = "100px";
        if (sidebarRight) sidebarRight.style.top = "100px";
      
    
    prevScrollpos = currentScrollPos;
  }

  if (document.documentElement.scrollTop > 400) {
    scrollTopBtn?.classList.add("show");
  } else {
    scrollTopBtn?.classList.remove("show");
  }
};


document.addEventListener('DOMContentLoaded', function() {
  const stickySection = document.getElementById('section-24');
  const navLinks = document.querySelectorAll('.link-label[data-section]');
  const sections = [];


  if (!stickySection || navLinks.length === 0) return;


  navLinks.forEach(link => {
    const sectionId = link.getAttribute('data-section');
    const section = document.getElementById(sectionId);
    if (section) {
      sections.push({
        element: section,
        id: sectionId,
        link: link
      });
    }
  });


  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('data-section');
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 100; 
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });


  function updateActiveState() {
    const scrollPosition = window.scrollY + 150; 

    let activeSection = null;

    sections.forEach(section => {
      const sectionTop = section.element.offsetTop;
      const sectionBottom = sectionTop + section.element.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSection = section;
      }
    });
    navLinks.forEach(link => link.classList.remove('active'));
    if (activeSection) {
      activeSection.link.classList.add('active');
    }
  }
  let ticking = false;
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateActiveState();
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll);
  updateActiveState();
});


