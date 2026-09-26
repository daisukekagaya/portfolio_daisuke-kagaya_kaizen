// const slideGnavlink = document.querySelectorAll('.slidegnav__link');

// slideGnavlink.forEach(function (sgnavlink) {

//     sgnavlink.addEventListener('click', function (event) {
//         const targetLink = this.getAttribute('href');
//         event.preventDefault();
      
//         const target = document.querySelector(targetLink);
//         const targetPos = target.offsetTop;

//         window.scrollTo({
//             top: targetPos,
//             behavior: 'smooth'
//         })
//     });
// });



// ここから
// const slideGnavLinks = document.querySelectorAll('.slidegnav__link');

// slideGnavLinks.forEach(function (sgnavlink) {
//     sgnavlink.addEventListener('click', function (event) {
//         const targetLink = this.getAttribute('href');

//         if (targetLink.startsWith('#')) {
//             event.preventDefault();  

//             const target = document.querySelectorAll(targetLink);
//             if (target) {
//                 const targetPos = target.offsetTop;

//                 window.scrollTo({
//                     top: targetPos,
//                     behavior: 'smooth'
//                 });
//             }
//         } else {
//             window.location.href = targetLink;
//         }
//     });
// });

