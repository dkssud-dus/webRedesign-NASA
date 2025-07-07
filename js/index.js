/* Total Scroll Event */
const wrap = document.querySelector('.main-wrap');

wrap.addEventListener('scroll', () => {
  const scrollY = wrap.scrollTop;
  const maxScroll = wrap.scrollHeight - wrap.clientHeight;
  const scrollProgress = scrollY / maxScroll; // 0 ~ 1



  const scrollBox = wrap.querySelector('.scroll-box');
  const topButton = wrap.querySelector('.top-button');

  // 스크롤시 요소 변화
  if (scrollProgress < .1 ) {
    scrollBox.style.opacity = '1';
    topButton.style.opacity = '0';
  } else {
    scrollBox.style.opacity = '0';
    topButton.style.opacity = '1';
  } 

  // topButton
  topButton.addEventListener('click', () => {
    wrap.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  })

  const scrollEls = document.querySelectorAll('.scroll-animate');

  const onScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const windowH = window.innerHeight;

    scrollEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      const elTop = rect.top;

      if (elTop < windowH * 0.9) {
        el.classList.add('visible');
      } else {
        el.classList.remove('visible');
      }
    });
  };

  window.addEventListener('scroll', onScroll);
  onScroll();

  // 지구 크기 조절
  const minScale = 0.005;
  let scale;

  const scaleStartProgress = 0.0;
  const scaleMidProgress = 0.5;
  const scaleEndProgress = 0.9;

  const initialScale = 1.0;
  const midScale = 0.3;

  if (scrollProgress < scaleMidProgress) {
    const t = scrollProgress / scaleMidProgress;
    scale = initialScale - (initialScale - midScale) * t;
  } else if (scrollProgress < scaleEndProgress) {
    const t = (scrollProgress - scaleMidProgress) / (scaleEndProgress - scaleMidProgress);
    scale = midScale - (midScale - minScale) * t;
  } else {
    scale = minScale;
  }

  earth.scale.set(scale, scale, scale);
  cloudMesh.scale.set(scale * 1.005, scale * 1.005, scale * 1.005);
  atmosphereGlowMesh.scale.set(scale * 1.06, scale * 1.06, scale * 1.06);


  // 카메라 위치 조절
  let cameraY = 1;
  let cameraZ = 0.7;

  if (scrollProgress < 0.3) {
    cameraY = 1 - scrollProgress * (1 / 0.3);
    cameraZ = 0.7 + scrollProgress * (0.3 / 0.3);
  } else {
    cameraY = 0;
    cameraZ = 1;
  }

  camera.position.y = cameraY;
  camera.position.z = cameraZ;

  // 지구 위치 조절
  let xOffset = 0;
  let yOffset = 0;

  const rightMoveStart = 0.7;
  const rightMoveEnd = 0.85;
  const rightMoveAmount = 1.2;

  if (scrollProgress > rightMoveStart && scrollProgress <= rightMoveEnd) {
    const t = (scrollProgress - rightMoveStart) / (rightMoveEnd - rightMoveStart);
    const eased = t * (2 - t);
    xOffset = eased * rightMoveAmount;
  } else if (scrollProgress > rightMoveEnd) {
    xOffset = rightMoveAmount;
  }

  const upMoveStart = 0.85;
  const upMoveEnd = 1.0;
  const upMoveAmount = 1.0;

  if (scrollProgress > upMoveStart && scrollProgress <= upMoveEnd) {
    const t = (scrollProgress - upMoveStart) / (upMoveEnd - upMoveStart);
    const eased = t * (2 - t);
    yOffset = eased * upMoveAmount;
  } else if (scrollProgress > upMoveEnd) {
    yOffset = upMoveAmount;
  }

  earth.position.set(xOffset, yOffset, 0);
  cloudMesh.position.set(xOffset, yOffset, 0);
  atmosphereGlowMesh.position.set(xOffset, yOffset, 0);
});

/* section .main-visual */
// typing
let catchphrase = ["NASA explores the unknown in air and space", "innovates for the benefit of humanity", "and inspires the world through discovery"];

let catchphraseIndex = 0;
let charIndex = 0;

let catchphraseElement = document.querySelector('.main-title-box h1');

function type() {
  let current = catchphrase[catchphraseIndex];
  catchphraseElement.innerHTML = current.slice(0, charIndex + 1);
  charIndex ++;
  if (charIndex === current.length) {
    setTimeout(function () {
      charIndex = 0;
      catchphraseIndex = (catchphraseIndex + 1) % catchphrase.length;
      type()
    }, 1000);
  } else {
    setTimeout(type, 100);
  }
}

type();

// 요소 선택
const modalButtons = document.querySelectorAll('.about-details-button-list ul li button');
const modalBackground = document.querySelector('.about-details-modal-list');
const modalContents = document.querySelectorAll('.about-details-modal');
const modalCloseButtons = document.querySelectorAll('.modal-close-box span');
const modalVideo = document.querySelectorAll('.about-details-modal video');

modalButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    modalButtons.forEach(btn => {
      btn.style.display = 'none';
    });

    modalBackground.style.display = 'block';

    modalContents.forEach(modal => {
      modal.style.display = 'none';
    });

    modalContents[index].style.display = 'block';

    modalVideo.forEach(video => {
      video.currentTime = 0;
      video.play();
    });

    wrap.classList.add('no-scroll');
  });
});

modalCloseButtons.forEach((closeBtn) => {
  closeBtn.addEventListener('click', () => {
    modalButtons.forEach(btn => btn.style.display = 'block');
    modalBackground.style.display = 'none';
    modalVideo.forEach(video => video.pause());
    wrap.classList.remove('no-scroll');
  });
});

/* section .mission */
// swiper
var swiper = new Swiper(".mission-swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});