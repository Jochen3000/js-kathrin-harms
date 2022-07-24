// Only trigger on mobile
const mediaQuery = window.matchMedia('(max-width: 479px)')

// Check if the media query is true
if (mediaQuery.matches) {

  //Move divs to destination 
  const newDestination = document.querySelector('.new-home'); 

  // foreach in action
  const myListFunction = document.querySelectorAll('.slider .slidergrid');
  myListFunction.forEach((element) => {
    newDestination.appendChild(element);
  });
}

// show backtotop button when footer is intersecting
const backToTop = document.querySelector('.backuplink');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const intersecting = entry.isIntersecting
      if(intersecting){
        backToTop.style.opacity = '1';
      } else {
        backToTop.style.opacity = '0';
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

// get div info from image atributes

