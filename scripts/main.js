const initApp = () => {
  const bCard = document.querySelector('.business-card-full');
  let activeCard = false
  if (bCard) {
    gsap.set('.business-card--front-front, .business-card--front-back', {
      '--rotation': '30deg',
      marginTop: 100,
    })
    gsap.set('.business-card--back-front, .business-card--back-back', {
      '--rotation': '-30deg',
      marginTop: 100,
    })
    gsap.to('.business-card--front-front, .business-card--front-back', {
      '--rotation': '15deg',
      marginTop: 0,
      ease: 'power1.out',
      duration: 0.6,
      delay: 0.5
    })
    gsap.to('.business-card--back-front, .business-card--back-back', {
      '--rotation': '-15deg',
      marginTop: 0,
      ease: 'power1.out',
      duration: 0.6,
      delay: 0.5
    })

    bCard.addEventListener('click', () => {
      bCard.classList.toggle('active')
      const degs = activeCard ? '0deg' : '45deg'
      const rotation = activeCard ? '15deg' : '130deg'
      gsap.timeline()
        .to('.business-card-full', {
          '--x': degs,
          ease: 'power1.out',
          duration: 0.6,
        })
      gsap.to('.business-card--front-front, .business-card--front-back', {
        '--rotation': rotation,
        ease: 'elastic.out(1,0.9)',
        duration: 1,
      })
      activeCard = !activeCard
    })
  }
}

const moveCard = (e) => {
  const x = e.clientX ? e.clientX / window.innerWidth : e.targetTouches[0].clientX / window.innerWidth
  console.log(x);
  gsap.to('.business-card-full', {
    '--y': x,
    '--font-weight': 700 * x + 200,
    ease: 'power4.out',
  })
}

window.addEventListener('mousemove', moveCard)
window.addEventListener('touchmove', moveCard)

document.addEventListener('DOMContentLoaded', initApp)