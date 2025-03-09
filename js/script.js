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

//sidebar

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

      /*const navTogglerBtn = document.querySelector(".nav-toggler"),
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
            }*/

                document.addEventListener("DOMContentLoaded", function () {
                  const form = document.querySelector("form");
                  const captchaLabel = document.querySelector("#captchaLabel");
                  const captchaInput = document.querySelector("#captcha");
              
                  let num1, num2, correctAnswer;
              
                  // Function to generate new captcha
                  function generateCaptcha() {
                      num1 = Math.floor(Math.random() * 10) + 1; // Random number between 1-10
                      num2 = Math.floor(Math.random() * 10) + 1; // Random number between 1-10
                      correctAnswer = num1 + num2;
                      captchaLabel.textContent = `Are you human? (Type the result of: ${num1} + ${num2})`;
                      captchaInput.value = ""; // Clear previous input
                  }
              
                  // Call function on page load
                  generateCaptcha();
              
                  form.addEventListener("submit", function (event) {
                      let isValid = true;
                      let name = form.querySelector("input[placeholder='Name']").value.trim();
                      let email = form.querySelector("input[placeholder='Email']").value.trim();
                      let captcha = captchaInput.value.trim();
                      let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
              
                      // Clear previous error messages
                      document.querySelectorAll(".error-message").forEach(el => el.remove());
              
                      // Validate Name
                      if (name === "") {
                          showError("input[placeholder='Name']", "Name is required.");
                          isValid = false;
                      }
              
                      // Validate Email
                      if (email === "") {
                          showError("input[placeholder='Email']", "Email is required.");
                          isValid = false;
                      } else if (!emailPattern.test(email)) {
                          showError("input[placeholder='Email']", "Invalid email format.");
                          isValid = false;
                      }
              
                      // Validate Captcha
                      if (parseInt(captcha) !== correctAnswer) {
                          showError("#captcha", "Incorrect answer. Please try again.");
                          isValid = false;
                          generateCaptcha(); // Regenerate captcha if incorrect
                      }
              
                      // Prevent form submission if validation fails
                      if (!isValid) {
                          event.preventDefault();
                      }
                  });
              
                  // Function to show error message
                  function showError(selector, message) {
                      const inputField = document.querySelector(selector);
                      const errorMessage = document.createElement("small");
                      errorMessage.classList.add("error-message");
                      errorMessage.style.color = "red";
                      errorMessage.textContent = message;
                      inputField.parentNode.appendChild(errorMessage);
                  }
              });
              


