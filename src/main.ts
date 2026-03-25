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
}, { threshold: 0.3 })

const elementsToAnimate = document.querySelectorAll('.reveal');
elementsToAnimate.forEach((el) => observer.observe(el));

/* end observer */


/* typewriter */

function typeWriter(text: string, element: HTMLElement, speed = 50) {
    let i = 0;

    function typing() {
        if (i < text.length) {
            element.innerHTML += text[i];
            i++;
            setTimeout(typing, speed);
        }
    }

    typing();
}

const el1 = document.getElementById("webDev")!;
typeWriter("Web Development", el1, 210);

/* end typewriter */
