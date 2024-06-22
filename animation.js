document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger)

    let sections = gsap.utils.toArray(".slide");

    // GSAP animation for dynamic heading
    gsap.from("#dynamicHeading", {
      duration: 2,
      opacity: 0,
      y: -50,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#dynamicHeading",
        start: "top 80%",
      }
    });

    // GSAP animation for welcome section
    /* gsap.from(".welcome", {
      duration: 1.5,
      opacity: 0,
      y: 100,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".welcome",
        start: "top 80%",
      }
    }); */

    gsap.from(".card", {
      duration: 1.5,
      opacity: 0,
      x: -100,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".card",
        start: "top 80%",
      }
    });

    gsap.from(".about", {
      duration: 1.5,
      opacity: 0,
      x: 100,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
      }
    });

    gsap.from(".skill-box", {
      duration: 1.5,
      opacity: 0,
      y: 50,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".skills",
        start: "top 80%",
      }
    });


    gsap.from(".project-header", {
      duration: 2,
      opacity: 1,
      x: -100,
      ease: "back",
      scrollTrigger: {
        trigger: ".project-header",
      }
    });

    gsap.from(".certs-header", {
      duration: 2,
      opacity: 1,
      x: -100,
      ease: "back",
      scrollTrigger: {
        trigger: ".certs-header",
        start: "bottom"
      }
    });

    gsap.from(".skills-header", {
      duration: 2,
      opacity: 1,
      x: -100,
      ease: "back",
      scrollTrigger: {
        trigger: ".skills-header",
      }
    });
    
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".projects",
        pin: ".main",
        pinSpacing: true,
        scrub: 1,
        end: "+=5000",
      }
    });

    gsap.from(".certs", {
      duration: 1.5,
      opacity: 0,
      x: 50,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".sec3",
        start: "top 80%",
      }
    });

    gsap.from(".dots", {
      duration: 3,
      opacity: 0,
      x: 50,
      stagger: 0.2,
      ease: "expo",
      scrollTrigger: {
        trigger: ".certs",
        start: "top 80%",
      }
    });

    gsap.from(".icons", {
      duration: 1.5,
      opacity: 0,
      x: 120,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".myself",
        start: "top 80%",
      }
    });

    gsap.from(".sec4-container", {
      duration: 1.5,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".sec3",
        start: "center 20%",
      }
    });

    gsap.from(".bar1", {
      duration: 2,
      opacity: 1,
      x: -500,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".sec3",
        start: "top 80%",
      }
    });
    gsap.from(".bar2", {
      duration: 2,
      opacity: 1,
      x: 500,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".bar1",
        start: "top 75%",
      }
    });
    gsap.from(".bar3", {
      duration: 2,
      opacity: 1,
      x: -500,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".bar2",
        start: "top 60%",
      }
    });
    gsap.from(".bar4", {
      duration: 2,
      opacity: 1,
      x: 200,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".bar2",
        start: "top 65%",
      }
    });
    gsap.from(".bar5", {
      duration: 2,
      opacity: 1,
      x: -200,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".bar2",
        start: "top 60%",
      }
    });
    gsap.from(".bar6", {
      duration: 2,
      opacity: 1,
      x: 200,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".bar2",
        start: "top 80%",
      }
    });
    gsap.from(".bar7", {
      duration: 2,
      opacity: 1,
      x: -200,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".bar2",
        start: "top 55%",
      }
    });
    gsap.from(".bar8", {
      duration: 2,
      opacity: 1,
      x: 200,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".bar2",
        start: "top 50%",
      }
    });
    gsap.from(".bar9", {
      duration: 2,
      opacity: 1,
      x: -200,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".bar2",
        start: "top 45%",
      }
    });
    gsap.from(".bar10", {
      duration: 2,
      opacity: 1,
      x: 200,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".bar2",
        start: "top 40%",
      }
    });
    gsap.from(".bar11", {
      duration: 2,
      opacity: 1,
      x: 200,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".bar2",
        start: "top 35%",
      }
    });
    gsap.from(".bar12", {
      duration: 2,
      opacity: 1,
      x: 500,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".bar2",
        start: "top 30%",
      }
    });


    gsap.from(".line1", {
      duration: 2,
      opacity: 1,
      x: 500,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".sec3",
        start: "top 80%",
      }
    });
    gsap.from(".line2", {
      duration: 2,
      opacity: 1,
      x: -500,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".bar1",
        start: "top 75%",
      }
    });
    gsap.from(".line3", {
      duration: 2,
      opacity: 1,
      x: 500,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".bar2",
        start: "top 60%",
      }
    });
    gsap.from(".line4", {
      duration: 2,
      opacity: 1,
      x: -200,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".bar2",
        start: "top 65%",
      }
    });
    gsap.from(".line5", {
      duration: 2,
      opacity: 1,
      x: 200,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".bar2",
        start: "top 60%",
      }
    });
    gsap.from(".line6", {
      duration: 2,
      opacity: 1,
      x: -200,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".bar2",
        start: "top 80%",
      }
    });
    gsap.from(".line7", {
      duration: 2,
      opacity: 1,
      x: 200,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".bar2",
        start: "top 55%",
      }
    });
    gsap.from(".line8", {
      duration: 2,
      opacity: 1,
      x: -200,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".bar2",
        start: "top 50%",
      }
    });
    gsap.from(".line9", {
      duration: 2,
      opacity: 1,
      x: -200,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".bar2",
        start: "top 45%",
      }
    });
    gsap.from(".line10", {
      duration: 2,
      opacity: 1,
      x: -200,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".bar2",
        start: "top 40%",
      }
    });


});
