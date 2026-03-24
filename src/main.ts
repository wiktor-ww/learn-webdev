/* observer */

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const target = entry.target as HTMLElement;
        const animType = target.dataset.anim;

        if (entry.isIntersecting) {
          if (animType) target.classList.add(animType);
      } else {
          if (animType) target.classList.remove(animType);
      }
    })
}, { threshold: 0.6 })

const elementsToAnimate = document.querySelectorAll('.reveal');
elementsToAnimate.forEach((el) => observer.observe(el));

/* end observer */
