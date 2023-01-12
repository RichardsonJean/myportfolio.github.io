//typing animation
/*var typed = new Typed(".typing",{
    String:["", "Web Developer"],
    typeSpeed:80,
    BackSpeed:40,
    loop:true
})*/

/*var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });*/

  var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 3000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('rotatedText');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('rotatedData');
      var period = elements[i].getAttribute('dataPeriod');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }

    
  
};

//end anime

//Aside

const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList =navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;
      for(let i=0; i<totalNavList; i++){
          const a = navList[i].querySelector("a");
          a.addEventListener("click", function(){
             for(let i=0; i<totalSection; i++){
                  allSection[i].classList.remove("back-section");
              }
               //removeBacksection();
                for(let j=0; j<totalNavList; j++){
                    if(navList[j].querySelector("a").classList.contains("active")){
                        addBackSection(j);
                        //allSection[j].classList.add("back-section");
                    }
                    navList[j].querySelector("a").classList.remove("active");
                }
                this.classList.add("active")
                showSection(this);
                if(window.innerWidth < 1200){
                    asideSectionTogglerBtn();
                }
          })
      }

      function removeBacksection(){
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove("back-section");
        }
      }

      function addBackSection(num){
        allSection[num].classList.add("back-section");
      }

      function showSection(element){
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove("active");
        }
          const target = element.getAttribute("href").split("#")[1];
          document.querySelector("#" + target).classList.add("active");
      }
      function updateNav(element){
        for(let i=0; i<totalNavList; i++){
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
            {
                navList[i].querySelector("a").classList.add("active");
            }
        }
      }
      document.querySelector(".hire-me").addEventListener("click", function(){
          const sectionIndex = this.getAttribute("data-section-index");
          //console.log(sectionIndex);
          showSection(this);
          updateNav(this);
          removeBacksection();
          addBackSection(sectionIndex);
      })

      const navTogglerBtn = document.querySelector(".nav-toggler"),
            aside = document.querySelector(".aside");
            navTogglerBtn.addEventListener("click", () => {
                asideSectionTogglerBtn();
            })
            function asideSectionTogglerBtn(){
                aside.classList.toggle("open");
                navTogglerBtn.classList.toggle("open");
                for(let i=0; i<totalSection; i++){
                    allSection[i].classList.toggle("open");
                }
            }


