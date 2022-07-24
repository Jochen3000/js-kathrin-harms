// show backtotop button when footer is intersecting
const backToTop = document.querySelector('.backtoplink');
backToTop.style.display = 'none';

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const intersecting = entry.isIntersecting
      if(intersecting){
        backToTop.style.opacity = '1';
        backToTop.style.display = 'block';
      } else {
        backToTop.style.opacity = '0';
        backToTop.style.display = 'none';
      }
    })
}, { threshold: 0 });
  observer.observe(document.querySelector('.footer-wrap'));

// Hover effect foldericon
const alwaysTakeMeBlock = document.querySelectorAll('.alwaystakemeblock');
alwaysTakeMeBlock.forEach(block => {
  block.addEventListener('mouseover', () => {
    block.classList.add('hovered');
  });
  block.addEventListener('mouseout', () => {
    block.classList.remove('hovered');
  });
});
