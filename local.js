// Move elements out of slider on mobile
const mediaQuery = window.matchMedia('(max-width: 479px)')
if (mediaQuery.matches) {
  const newDestination = document.querySelector('.new-home'); 
  const myListFunction = document.querySelectorAll('.slider .slidergrid');
  myListFunction.forEach((element) => {
    newDestination.appendChild(element);
  });
}

// show backtotop button when footer is intersecting
// const backToTop = document.querySelector('.backuplink');

// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       const intersecting = entry.isIntersecting
//       if(intersecting){
//         backToTop.style.opacity = '1';
//       } else {
//         backToTop.style.opacity = '0';
//       }
//     })
// }, { threshold: 0 });
//   observer.observe(document.querySelector('.footer-wrap'));

// get div info from image atributes
const portfolioImage = document.querySelectorAll('.rowgrid img');

portfolioImage.forEach((image) => {
  image.insertAdjacentHTML('beforebegin', '<div class ="alwaystakemeblock"></div>');
  const imageParent = image.previousElementSibling;
  const imageLink = image.getAttribute('reportage');
  const ahrefOpen = imageLink ? `<a href="/${imageLink}"> ` : `<div class="nolink">`;
  const ahrefClose = imageLink ? `</a> ` : `</div>`;  
  const stackIcon = imageLink ? `
  <div class="w-embed">
    <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="path-1-inside-1_116_138" fill="white">
      <rect width="12.8571" height="9.42857" rx="0.428571"></rect>
      </mask>                  
      <rect width="12.8571" height="9.42857" rx="0.428571" stroke="#577477" stroke-width="1.71429" mask="url(#path-1-inside-1_116_138)"></rect>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.14288 10.7143V11.1428C2.14288 11.3795 2.33476 11.5714 2.57146 11.5714H14.5715C14.8081 11.5714 15 11.3795 15 11.1428V2.57139C15 2.3347 14.8081 2.14282 14.5715 2.14282H14.1429V2.99997H14.1429V10.7143H14.1429V10.7143H2.14288Z" fill="#577477"></path>
    </svg>
  </div>  
` : '';
  
imageParent.innerHTML=`
  ${ahrefOpen}
    <div class="portfolio-image"></div>              
    <div class="imagecaption">
      <p class="paragraph">${image.alt}</p> 
      ${stackIcon}   
    </div>
  ${ahrefClose}
`;
const imageContainer = imageParent.querySelector('.portfolio-image');
imageContainer.appendChild(image);

// copy grid setting from img to div class
const styleImage = getComputedStyle(image);
imageParent.style.gridColumnStart = styleImage.gridColumnStart;
imageParent.style.gridColumnEnd = styleImage.gridColumnEnd;
});

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

// glider.js on reportage pages
new Glider(document.querySelector('.glider'), {
  slidesToShow: 1,
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  }
});


