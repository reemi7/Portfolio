let me = document.querySelector(".box-one-left");
let skills = document.querySelector(".box-one-right");
let left_section = document.querySelector(".left");
let left_text = document.querySelector(".heading");
// let body  = document.getElementsByTagName('body')
// let pra = document.querySelector(".text");
// let box_main = document.querySelector('.box-main')

let me_variable = 0;
let skill_variable = 0;
let experience_veriable = 0;
let game_variable = null;

function Me() {
  left_section.innerHTML = `  <div class="my-self ">
      <h2>
        Hi,
        </h2>
        <h2> 
        <b>
        I am Abdul Raheem, 
        </b>
        </h2>
        <h3>
          Welcome to my portfolio! I am a versatile Graphic Designer and Web Developer with a passion for creating visually stunning and highly functional digital experiences. I specialize in crafting compelling designs and developing responsive, user-friendly websites.
          People say I'm a Quiet person when I am working on something.I am a person who is always ready to learn new things.
        </h3>
        </div>`;
}

function skill() {
  left_section.innerHTML = `<div class="skills">
      <ul>
          <li class="list-heading">
          Web development
          <ul>
                  <li>HTML</li>
                  <li>Css</li>
                  <li>JavaScript</li>
              </ul>
          </li>
      </ul>
      <ul>
          <li class="list-heading">
              Graphic Designing
          <ul>
                  <li>figma</li>
                  <li>adobe photoshope</li> 
                  <li>adobe illistrator</li>
              </ul>
          </li>
      </ul>
  </div>`;
}

function experience() {
  left_section.innerHTML = ` <div class="experience white">
      <div class="experience-text">
          <h3>Creative and detail-oriented Graphic Designer with two years of experience and Web Developer with six months of experience. Proficient in Adobe Creative Suite, HTML, CSS, JavaScript, and various web development frameworks. Demonstrated ability to manage multiple projects, meet tight deadlines, and collaborate effectively with clients and team members to deliver high-quality digital solutions. Passionate about combining design aesthetics with technical expertise to produce engaging and functional digital experiences.</h3>
      </div>
      </div>`;
}

let game_button = document.getElementById("game");
game_button.addEventListener("click", () => {
  window.location.href = "./snake-game/snakeGame.html";
});

function logo() {
  window.location.reload();
}
function why() {
  left_section.innerHTML = ` <div class="experience white">
    <div class="experience-text">
        <h5><b>Creativity Meets Technical Proficiency:</b></h5>
        <h5> My unique blend of design and development skills allows me to bring creative ideas to life with technical precision.</h5>

        <h5><b>Client-Centric Approach:</b></h5>
        <h5> I prioritize understanding your needs and vision to deliver customized solutions that exceed expectations.</h5>
        <h5><b>Attention to Detail:</b></h5>
        <h5> I am committed to perfection, ensuring that every project is pixel-perfect and optimized for performance.</h5>
    </div>
    </div>`;
}

function contact() {
  left_section.innerHTML = `      <div class="contact-parent">
              <div class="contact-number"><h3>Contact Number : <span>+92 324 4629 646</span></h3></div>
              <div class="contact"><h3>Email : <a href="">abdulraheem.pk02@gmail.com</a></h3></div>
              <div class="contact"><h3>GitHub : <a href="https://github.com/reemi7" target="_blank" >github/profile</a></h3></div>
            </div>`;
  
}

// function game() {
//   if (game_variable === 1) {
//     document.querySelector("body").style.background = "#000";
//     let span = document.querySelectorAll("span");
//     span.forEach((element) => {
//       element.style.color = "#C446FF";
//     });
//     let h3 = document.querySelectorAll("h3");
//     h3.forEach((element) => {
//       element.style.color = "white";
//     });
//     let h2 = document.querySelectorAll("h2");
//     h2.forEach((element) => {
//       element.style.color = "white";
//     });
//     let h1 = document.querySelectorAll("h1");
//     h1.forEach((element) => {
//       element.style.color = "white";
//     });
//     let para = document.querySelectorAll("p");
//     para.forEach((element) => {
//       element.style.color = "black";
//     });
//     let italic = document.querySelectorAll("i");
//     italic.forEach((element) => {
//       element.style.color = "white";
//     });
//     // skill.innerText.style.color = "black"
//     document.querySelector(".box-main").style.background = "#000";

//     console.log("if");
//     game_variable = null;
//   } else if (game_variable == null) {
//     document.querySelector("body").style.background = "#fff";
//     let hover = document.querySelectorAll(".hover");
//     hover.forEach((element) => {
//       element.style.color = "black";
//     });
//     let span = document.querySelectorAll("span");
//     span.forEach((element) => {
//       element.style.color = "black";
//     });
//     let h1 = document.querySelectorAll("h1");
//     h1.forEach((element) => {
//       element.style.color = "#C446FF";
//     });

//     let h2 = document.querySelectorAll("h2");
//     h2.forEach((element) => {
//       element.style.color = "white";
//     });
//     let h3 = document.querySelectorAll("h3");
//     h3.forEach((element) => {
//       element.style.color = "#C446FF";
//     });

//     // let para = document.querySelectorAll("p");
//     // para.forEach((element) => {
//     //   element.style.color = "black";
//     // });
//     let list = document.querySelectorAll("ul");
//     list.forEach((element) => {
//       element.style.color = "black";
//     });
//     document.querySelector(".box-main").style.backgroundColor = "#C446FF";
//     // document.querySelectorAll(".list-heading").style.background = "black"
//     let list_heading = document.querySelectorAll(".list-heading");
//     // let list_text = list_heading.innerText;
//     list_heading.forEach((element) => {
//       element.style.background = "black";
//     });
//     game_variable = 1;

//     // console.log(body);

//     // console.log('else')
//   }
// }
