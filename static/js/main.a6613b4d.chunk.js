(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{19:function(e,a,t){e.exports=t(33)},24:function(e,a,t){},27:function(e,a,t){},33:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),n=t(9),o=t.n(n),c=t(2),s=(t(24),t(4)),i=t.n(s),m=t(10),d=t(11),w=t(12),h=t(17),p=t(13),b=t(18),g=t(14),u=t.n(g),E=(t(26),t(27),function(e){function a(){var e,t;Object(d.a)(this,a);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return(t=Object(h.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",subject:"",message:""},t.setActiveTab=function(e){e.preventDefault(),document.querySelectorAll(".nav-btn").forEach((function(e){return e.classList.remove("active-tab")})),"A"===e.target.tagName?e.target.classList.toggle("active-tab"):e.target.parentElement.classList.toggle("active-tab")},t.handleChange=function(e){t.setState(Object(m.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e.preventDefault(),"template_zorBb3zy",a.next=4,i.a.awrap(t.sendFeedback("template_zorBb3zy",{subject_html:t.state.subject,message_html:t.state.message,from_name:t.state.name,reply_to:t.state.email}));case 4:t.setState({name:"",email:"",subject:"",message:""}),document.getElementById("name").value="",document.getElementById("email").value="",document.getElementById("subject").value="",document.getElementById("message").value="";case 9:case"end":return a.stop()}}))},t}return Object(b.a)(a,e),Object(w.a)(a,[{key:"sendFeedback",value:function(e,a){window.emailjs.send("gmail",e,a).then((function(e){console.log("Email successfully sent!")})).catch((function(e){return console.error("Oh well, you failed. Here some thoughts on the error that occured:",e)}))}},{key:"scrollAnchors",value:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=function(e){return Math.floor(e.getBoundingClientRect().top)};e.preventDefault();var l=a?a.getAttribute("href"):this.getAttribute("href"),r=document.querySelector(l);if(r){var n=t(r);console.log(n),n>0?window.scrollBy({top:n-100,left:0,behavior:"smooth"}):window.scrollBy({top:n,left:0,behavior:"smooth"});var o=setInterval((function(){var e=window.innerHeight+window.pageYOffset>=document.body.offsetHeight-2;(0===t(r)||e)&&(r.tabIndex="-1",window.history.pushState("","",l),clearInterval(o))}),100)}}},{key:"scrollTo",value:function(){var e=this;document.querySelectorAll(".nav-btn").forEach((function(a){return a.onclick=e.scrollAnchors}))}},{key:"componentDidMount",value:function(){this.scrollTo(),u.a.init({duration:800,mirror:!0})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"w3-sidebar w3-bar-block w3-small w3-hide-small w3-center"},r.a.createElement("img",{src:"https://i.imgur.com/Sj59xHV.jpg",alt:"smoke",style:{width:"100%"}}),r.a.createElement("a",{onClick:this.setActiveTab,href:"#home",className:"nav-btn web-nav-btn active-tab w3-bar-item w3-button w3-padding-large w3-hover-black"},r.a.createElement("i",{className:"fa fa-home w3-xxlarge"}),r.a.createElement("p",null,"HOME")),r.a.createElement("a",{onClick:this.setActiveTab,href:"#about",className:"nav-btn web-nav-btn w3-bar-item w3-button w3-padding-large w3-hover-black"},r.a.createElement("i",{className:"fa fa-user w3-xxlarge"}),r.a.createElement("p",null,"ABOUT")),r.a.createElement("a",{onClick:this.setActiveTab,href:"#skills",className:"nav-btn web-nav-btn w3-bar-item w3-button w3-padding-large w3-hover-black"},r.a.createElement("i",{className:"fa fa-code w3-xxlarge"}),r.a.createElement("p",null,"SKILLS")),r.a.createElement("a",{onClick:this.setActiveTab,href:"#projects",className:"nav-btn web-nav-btn w3-bar-item w3-button w3-padding-large w3-hover-black"},r.a.createElement("i",{className:"fa fa-eye w3-xxlarge"}),r.a.createElement("p",null,"PROJECTS")),r.a.createElement("a",{onClick:this.setActiveTab,href:"#contact",className:"nav-btn web-nav-btn w3-bar-item w3-button w3-padding-large w3-hover-black"},r.a.createElement("i",{className:"fa fa-envelope w3-xxlarge"}),r.a.createElement("p",null,"CONTACT"))),r.a.createElement("div",{className:"w3-top w3-hide-large w3-hide-medium",id:"myNavbar"},r.a.createElement("div",{className:"w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small"},r.a.createElement("a",{onClick:this.setActiveTab,href:"#home",className:"nav-btn active-tab mobile-nav-btn w3-button",style:{width:"25% !important"}},"HOME"),r.a.createElement("a",{onClick:this.setActiveTab,href:"#about",className:"nav-btn mobile-nav-btn w3-button",style:{width:"25% !important"}},"ABOUT"),r.a.createElement("a",{onClick:this.setActiveTab,href:"#skills",className:"nav-btn mobile-nav-btn w3-button",style:{width:"25% !important"}},"SKILLS"),r.a.createElement("a",{onClick:this.setActiveTab,href:"#projects",className:"nav-btn mobile-nav-btn w3-button",style:{width:"25% !important"}},"PROJECTS"),r.a.createElement("a",{onClick:this.setActiveTab,href:"#contact",className:"nav-btn mobile-nav-btn w3-button",style:{width:"25% !important"}},"CONTACT"))),r.a.createElement("div",{className:"w3-padding-large",id:"main"},r.a.createElement("header",{className:"w3-container w3-padding-32 w3-center w3-black focus-off",id:"home"},r.a.createElement("h1",{className:"w3-jumbo"},r.a.createElement("span",{className:"w3-hide-small"},"I'm")," Greg Merrill"),r.a.createElement("p",null,"Software Engineer"),r.a.createElement("img",{src:"https://i.imgur.com/UN2oD55.jpg",alt:"boy",className:"w3-image",style:{width:"400px"}})),r.a.createElement("div",{className:"w3-content w3-justify w3-text-grey w3-padding-64 focus-off",id:"about","data-aos":"fade-up","data-aos-anchor-placement":"top-center"},r.a.createElement("h2",{className:"w3-text-light-grey"},"About Me"),r.a.createElement("hr",{style:{width:"200px"},className:"w3-opacity"}),r.a.createElement("p",null,"Hi there!  Thanks for checking out my portfolio.  Born and raised in Bakersfield, CA to a big family of seven, I moved to Texas after high school to venture out on my own and to pursue a dream of becoming an engineer."),r.a.createElement("p",null,"Little did I know that it would take me four years of mechanical engineering in college and four years of forensic engineering in the work field to realize that... I should be doing something else. Enter General Assembly and their Software Engineering Immersive.  In just twelve short weeks, I've discovered a newfound love for coding and all that software development entails.  Armed with only a laptop, I have begun to build a skillset where I can create, explore, collaborate with other creative minds, and constantly learn new things in this exciting and ever-evolving industry!"),r.a.createElement("p",null,"In terms of my current interests: my favorite languages are JavaScript (so versatile) and Python (so clean), and I'm really enjoying the scalability and reusable components of React!")),r.a.createElement("div",{className:"w3-padding-64 w3-content focus-off",id:"skills","data-aos":"fade-up","data-aos-anchor-placement":"top-center"},r.a.createElement("h2",{className:"w3-text-light-grey"},"My Skills"),r.a.createElement("hr",{style:{width:"200px",paddingBottom:"32px"},className:"w3-opacity"}),r.a.createElement("ul",{className:"w3-wide w3-ul"},r.a.createElement("h5",{className:"w3-col w3-text-gray","data-aos":"fade-up","data-aos-anchor-placement":"bottom-bottom"},"Languages and Frameworks"),r.a.createElement("div",{className:"w3-third","data-aos":"fade-up","data-aos-anchor-placement":"bottom-bottom"},r.a.createElement("li",{className:"w3-li gray-bord-bot"}),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},"JavaScript"),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},"React"),r.a.createElement("li",{className:"w3-li w3-text-white add-bord-bot"},"Python 3"),r.a.createElement("li",{className:"w3-li hide-li"})),r.a.createElement("div",{className:"w3-third","data-aos":"fade-up","data-aos-anchor-placement":"bottom-bottom","data-aos-delay":"300"},r.a.createElement("li",{className:"w3-li gray-bord-bot hide-li"}),r.a.createElement("li",{className:"w3-li w3-text-white add-bord-bot"},"Node.js"),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},"HTML5"),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},"CSS3"),r.a.createElement("li",{className:"w3-li hide-li"})),r.a.createElement("div",{className:"w3-third","data-aos":"fade-up","data-aos-anchor-placement":"bottom-bottom","data-aos-delay":"600"},r.a.createElement("li",{className:"w3-li gray-bord-bot hide-li"}),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},"Bootstrap"),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},"Materialize"),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},"VS Code"),r.a.createElement("li",{className:"w3-li gray-bord-bot"}))),r.a.createElement("ul",{className:"w3-wide w3-ul"},r.a.createElement("h5",{className:"w3-col w3-text-gray","data-aos":"fade-up","data-aos-anchor-placement":"bottom-bottom"},"Server-Side and Database"),r.a.createElement("div",{className:"w3-half","data-aos":"fade-up","data-aos-anchor-placement":"bottom-bottom"},r.a.createElement("li",{className:"w3-li gray-bord-bot"}),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},"Express"),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},"PostgreSQL"),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},"Mongoose"),r.a.createElement("li",{className:"w3-li w3-text-white add-bord-bot"},"MongoDB"),r.a.createElement("li",{className:"w3-li hide-li"})),r.a.createElement("div",{className:"w3-half","data-aos":"fade-up","data-aos-anchor-placement":"bottom-bottom","data-aos-delay":"300"},r.a.createElement("li",{className:"w3-li gray-bord-bot hide-li"}),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},"OAuth"),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},"Passport"),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},"Amazon S3"),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},"Heroku"),r.a.createElement("li",{className:"w3-li gray-bord-bot"}))),r.a.createElement("ul",{className:"w3-wide w3-ul"},r.a.createElement("h5",{className:"w3-col w3-text-gray","data-aos":"fade-up","data-aos-anchor-placement":"bottom-bottom"},"Version Control and Workflow Management"),r.a.createElement("div",{className:"w3-half","data-aos":"fade-up","data-aos-anchor-placement":"bottom-bottom"},r.a.createElement("li",{className:"w3-li gray-bord-bot"}),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},"Git"),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},"GitHub"),r.a.createElement("li",{className:"w3-li w3-text-white add-bord-bot"},"Command Line"),r.a.createElement("li",{className:"w3-li hide-li"})),r.a.createElement("div",{className:"w3-half","data-aos":"fade-up","data-aos-anchor-placement":"bottom-bottom","data-aos-delay":"300"},r.a.createElement("li",{className:"w3-li gray-bord-bot hide-li"}),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},"Trello"),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},"InVision"),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},"Figma"),r.a.createElement("li",{className:"w3-li gray-bord-bot"}))),r.a.createElement("ul",{className:"w3-wide w3-ul"},r.a.createElement("h5",{className:"w3-col w3-text-gray","data-aos":"fade-up","data-aos-anchor-placement":"bottom-bottom"},"Methodologies"),r.a.createElement("div",{className:"w3-half","data-aos":"fade-up","data-aos-anchor-placement":"bottom-bottom"},r.a.createElement("li",{className:"w3-li gray-bord-bot"}),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},"ERDs"),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},"MVC Pattern"),r.a.createElement("li",{className:"w3-li w3-text-white mobile-bord-bot"},"Object-Oriented Programming")),r.a.createElement("div",{className:"w3-half","data-aos":"fade-up","data-aos-anchor-placement":"bottom-bottom","data-aos-delay":"300"},r.a.createElement("li",{className:"w3-li gray-bord-bot hide-li"}),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},"Wireframing"),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},"User Stories"),r.a.createElement("li",{className:"w3-li w3-text-white gray-bord-bot"},"Responsive Design"))),r.a.createElement("div",{className:"w3-col add-bord-top","data-aos":"fade-up","data-aos-anchor-placement":"bottom-bottom"}),r.a.createElement("div",{className:"w3-bar-block"}),r.a.createElement("button",{className:"w3-button w3-light-grey w3-padding-large  w3-section","data-aos":"fade-up","data-aos-anchor-placement":"bottom-bottom"},r.a.createElement("i",{className:"fa fa-download"}),"\xa0",r.a.createElement(c.b,{to:"/portfolio/files/Gregory_Merrill_Resume.pdf",target:"_blank",download:!0},"Download Resume"))),r.a.createElement("div",{className:"w3-padding-64 w3-content focus-off",id:"projects","data-aos":"fade-up","data-aos-anchor-placement":"top-center"},r.a.createElement("h2",{className:"w3-text-light-grey"},"My Projects"),r.a.createElement("hr",{style:{width:"200px"},className:"w3-opacity"}),r.a.createElement("div",{className:"w3-row-padding",style:{margin:"0 -16px"}},r.a.createElement("div",{className:"w3-half"},r.a.createElement("div",{className:"project-card","data-aos":"fade-up","data-aos-anchor-placement":"top-center"},r.a.createElement("h5",null,"Minesweeper"),r.a.createElement("img",{src:"https://i.imgur.com/2TPxzNq.png",alt:"minesweeper",className:"project-img"}),r.a.createElement("p",{className:"project-description"},"For SEI Project 1, I built my own version of the classic game, Minesweeper."),r.a.createElement("p",{className:"project-description"},"The main technologies used for this project were: HTML, CSS, and JavaScript."),r.a.createElement("div",{className:"project-link-ctnr"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://g-merrill.github.io/minesweeper/"},r.a.createElement("i",{className:"fa fa-external-link w3-xxlarge icon-hover"})),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/g-merrill/minesweeper"},r.a.createElement("i",{className:"fa fa-github w3-xxlarge icon-hover"})))),r.a.createElement("div",{className:"project-card","data-aos":"fade-up","data-aos-anchor-placement":"top-center"},r.a.createElement("h5",null,"truckSFinder"),r.a.createElement("img",{src:"https://i.imgur.com/v5ZeNkw.png",alt:"trucksfinder",className:"project-img"}),r.a.createElement("p",{className:"project-description"},"For SEI Project 2, I collaborated with a UX design student to make an app focused on finding and reviewing local SF food trucks."),r.a.createElement("p",{className:"project-description"},"The main technologies used for this project were: Node, Express, EJS, MongoDB, Mongoose, and OAuth."),r.a.createElement("div",{className:"project-link-ctnr"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://trucksfinder.herokuapp.com/"},r.a.createElement("i",{className:"fa fa-external-link w3-xxlarge icon-hover"})),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/g-merrill/truckSFinder"},r.a.createElement("i",{className:"fa fa-github w3-xxlarge icon-hover"}))))),r.a.createElement("div",{className:"w3-half"},r.a.createElement("div",{className:"project-card","data-aos":"fade-up","data-aos-anchor-placement":"top-center"},r.a.createElement("h5",null,"Experiences"),r.a.createElement("img",{src:"https://i.imgur.com/oWaG0jA.png",alt:"experiences",className:"project-img"}),r.a.createElement("p",{className:"project-description"},"For SEI Project 3, I worked with 2 other dev students to create a marketplace app for local experiences or activities."),r.a.createElement("p",{className:"project-description"},"The main technologies used for this project were: Python, Django, PostgreSQL, and Bootstrap."),r.a.createElement("div",{className:"project-link-ctnr"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://experiencesapp.herokuapp.com/"},r.a.createElement("i",{className:"fa fa-external-link w3-xxlarge icon-hover"})),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/g-merrill/experiences-app"},r.a.createElement("i",{className:"fa fa-github w3-xxlarge icon-hover"})))),r.a.createElement("div",{className:"project-card","data-aos":"fade-up","data-aos-anchor-placement":"top-center"},r.a.createElement("h5",null,"protestNOW"),r.a.createElement("img",{src:"https://i.imgur.com/eb1Bzgb.png",alt:"protestnow",className:"project-img"}),r.a.createElement("p",{className:"project-description"},"For SEI Project 4, I created an app where protestors could share their stories with others."),r.a.createElement("p",{className:"project-description"},"The main technologies used for this project were: React, Node, Express, MongoDB, and JSON Web Token authentication."),r.a.createElement("div",{className:"project-link-ctnr"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://protest-now.herokuapp.com/"},r.a.createElement("i",{className:"fa fa-external-link w3-xxlarge icon-hover"})),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/g-merrill/protestNOW"},r.a.createElement("i",{className:"fa fa-github w3-xxlarge icon-hover"}))))))),r.a.createElement("div",{className:"w3-padding-64 w3-content w3-text-grey focus-off",id:"contact","data-aos":"fade-up","data-aos-anchor-placement":"top-center"},r.a.createElement("h2",{className:"w3-text-light-grey"},"Contact Me"),r.a.createElement("hr",{style:{width:"200px"},className:"w3-opacity"}),r.a.createElement("div",{className:"w3-section"},r.a.createElement("p",null,r.a.createElement("i",{className:"fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right"})," San Francisco, US"),r.a.createElement("p",null,r.a.createElement("i",{className:"fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right"})," Phone: \xa0 510 210 7036"),r.a.createElement("p",null,r.a.createElement("i",{className:"fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"}," ")," Email: \xa0 gmerrill03@gmail.com")),r.a.createElement("br",null),r.a.createElement("p",null,"Lets get in touch. Send me a message:"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("p",null,r.a.createElement("input",{className:"w3-input w3-padding-16",type:"text",placeholder:"Name",required:!0,id:"name",name:"name",onChange:this.handleChange})),r.a.createElement("p",null,r.a.createElement("input",{className:"w3-input w3-padding-16",type:"text",placeholder:"Email",required:!0,id:"email",name:"email",onChange:this.handleChange})),r.a.createElement("p",null,r.a.createElement("input",{className:"w3-input w3-padding-16",type:"text",placeholder:"Subject",required:!0,id:"subject",name:"subject",onChange:this.handleChange})),r.a.createElement("p",null,r.a.createElement("input",{className:"w3-input w3-padding-16",type:"text",placeholder:"Message",required:!0,id:"message",name:"message",onChange:this.handleChange})),r.a.createElement("p",null,r.a.createElement("button",{className:"w3-button w3-light-grey w3-padding-large",type:"submit"},r.a.createElement("i",{className:"fa fa-paper-plane"})," SEND MESSAGE")))),r.a.createElement("footer",{className:"w3-content w3-text-grey w3-xlarge","data-aos":"fade-up","data-aos-anchor-placement":"bottom-bottom"},r.a.createElement("div",{className:"w3-col footer-link-ctnr"},r.a.createElement("div",{className:"w3-third w3-center"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/g-merrill/"},r.a.createElement("i",{className:"fa fa-github w3-jumbo icon-hover footer-icon"}))),r.a.createElement("div",{className:"w3-third w3-center"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/g-merrill/"},r.a.createElement("i",{className:"fa fa-linkedin w3-jumbo icon-hover footer-icon"}))),r.a.createElement("div",{className:"w3-third w3-center"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://profiles.generalassemb.ly/profiles/g-merrill"},r.a.createElement("i",{className:"fa fa-certificate w3-jumbo icon-hover footer-icon"})))))))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(c.a,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.a6613b4d.chunk.js.map