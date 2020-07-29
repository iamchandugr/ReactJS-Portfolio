(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),c=a.n(l),o=(a(47),a(4)),i=a(5),s=a(7),m=a(6),p=(a(48),a(1)),u=a(8),h=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement(p.Grid,{className:"home-grid"},r.a.createElement(p.Cell,{col:12},r.a.createElement("img",{src:".././avatar.png",alt:"pic",className:"avatar"}),r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",null,"Full Stack Developer"),r.a.createElement("p",null,r.a.createElement("img",{src:".././python.png",alt:"pythonpic"}),"Python |",r.a.createElement("img",{src:".././java.png",alt:"javapic"})," Java |",r.a.createElement("img",{src:".././sql.png",alt:"sqlpic"})," SQL |",r.a.createElement("img",{src:".././django.png",alt:"djangopic"})," Django |",r.a.createElement("img",{src:".././react.png",alt:"reactpic"})," React |",r.a.createElement("img",{src:".././ml.png",alt:"mlpic"})," Machine Learning")),r.a.createElement("div",{className:"social-links"},r.a.createElement("a",{href:"https://www.linkedin.com/in/chandugr",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fa fa-linkedin-square","aria-hidden":"true"})),r.a.createElement("a",{href:"https://github.com/chandu-gr",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fa fa-github-square","aria-hidden":"true"})),r.a.createElement("a",{href:"https://twitter.com/iamchandugr",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fa fa-twitter-square","aria-hidden":"true"})),r.a.createElement("a",{href:"https://www.freecodecamp.org/iamchandugr",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fa fa-free-code-camp","aria-hidden":"true"}))))))}}]),a}(n.Component),d=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"About"))}}]),a}(n.Component),E=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact-body"},r.a.createElement(p.Grid,{className:"contact-grid"},r.a.createElement(p.Cell,{col:6},r.a.createElement("h3",null,"Chandrashekar"),r.a.createElement("img",{src:".././avatar.png",alt:"pic",className:"avatar"}),r.a.createElement("br",null),r.a.createElement("h4",{className:"titleContact"},"Technology Enthusiast")),r.a.createElement(p.Cell,{col:6},r.a.createElement("h3",null,"Contact me"),r.a.createElement("hr",{style:{borderTop:"3px solid #6fcf2b"}}),r.a.createElement("div",{className:"contact-list"},r.a.createElement(p.List,null,r.a.createElement(p.ListItem,null,r.a.createElement(p.ListItemContent,{style:{fontSize:"30px"}},r.a.createElement("i",{className:"fa fa-phone-square","aria-hidden":"true"}),"1234567890")),r.a.createElement(p.ListItem,null,r.a.createElement(p.ListItemContent,{style:{fontSize:"30px"}},r.a.createElement("i",{className:"fa fa-envelope","aria-hidden":"true"}),"iamchandugr@gmail.com")),r.a.createElement(p.ListItem,null,r.a.createElement(p.ListItemContent,{style:{fontSize:"30px"}},r.a.createElement("i",{className:"fa fa-phone-square","aria-hidden":"true"}),"1234567890")))))))}}]),a}(n.Component),g=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={activeTab:0},n}return Object(i.a)(a,[{key:"toggleCategories",value:function(){var e=this,t=["https://github.com/iamchandugr/ReactJS-Portfolio","https://github.com/iamchandugr/Blockchain-CCoin","https://github.com/iamchandugr/SpringBootDemo/","https://github.com/iamchandugr/ML_Beginner/","https://github.com/iamchandugr/django_demo_polls",""];return r.a.createElement(p.Card,{shadow:6,style:{width:"512px",margin:"auto"}},r.a.createElement(p.CardTitle,{style:{color:"#fff",height:"176px",background:"url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover"}},["ReactJS","BlockChain","Spring Boot","Machine Learning","Django"][this.state.activeTab]),r.a.createElement(p.CardText,null,["This is a Portfolio build on top of ReactJS application.","CCoin crypto currency build on Blockchain technology with consensus protocol.","Spring Boot application that demonstrate the REST services.","Titanic Machine Learning model which is trained to predict the probability of survival.","A simple Django application for polls and questions."][this.state.activeTab]),r.a.createElement(p.CardActions,{border:!0},r.a.createElement(p.Button,{onClick:function(){return window.open(t[e.state.activeTab])},colored:!0},"GitHub")),r.a.createElement(p.CardMenu,{style:{color:"#fff"}},r.a.createElement(p.IconButton,{name:"share"})))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"category-tabs"},r.a.createElement(p.Tabs,{activeTab:this.state.activeTab,onChange:function(t){return e.setState({activeTab:t})},ripple:!0},r.a.createElement(p.Tab,null,"ReactJS"),r.a.createElement(p.Tab,null,"BlockChain"),r.a.createElement(p.Tab,null,"Spring Boot"),r.a.createElement(p.Tab,null,"Machine Learning"),r.a.createElement(p.Tab,null,"Django")),r.a.createElement("section",{className:"projects-grid"},r.a.createElement(p.Grid,{className:"projects-grid"},r.a.createElement(p.Cell,{col:12},r.a.createElement("div",{className:"content"},this.toggleCategories())))))}}]),a}(n.Component),b=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(p.Grid,null,r.a.createElement(p.Cell,{col:4},r.a.createElement("p",null,this.props.startYear," - ",this.props.endYear)),r.a.createElement(p.Cell,{col:6},r.a.createElement("h6",{style:{marginTop:"0px"}},this.props.courseName,r.a.createElement("br",null),this.props.collegeName,r.a.createElement("br",null),this.props.universityName)),r.a.createElement(p.Cell,{col:2},r.a.createElement("p",null,this.props.credits)))}}]),a}(n.Component),f=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(p.Grid,null,r.a.createElement(p.Cell,{col:4},r.a.createElement("p",null,this.props.startYear," - ",this.props.endYear)),r.a.createElement(p.Cell,{col:6},r.a.createElement("h6",{style:{marginTop:"0px"}},this.props.companyName,r.a.createElement("br",null),this.props.jobName,r.a.createElement("br",null),this.props.jobDescription)))}}]),a}(n.Component),y=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(p.Grid,null,r.a.createElement(p.Cell,{col:1},r.a.createElement("div",{style:{display:"flex"}},this.props.skill)),r.a.createElement(p.Cell,{col:11},r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(p.ProgressBar,{style:{margin:"auto",width:"75%"},progress:this.props.progress})," ")))}}]),a}(n.Component),v=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.Grid,null,r.a.createElement(p.Cell,{col:5},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("img",{src:".././avatar.png",alt:"pic",className:"avatar",style:{height:"200px",paddingTop:""}})),r.a.createElement("h2",null,"Chandrashekar"),r.a.createElement("h4",{style:{color:"grey"}},"Full Stack Developer"),r.a.createElement("hr",{style:{borderTop:"3px solid #833fb2",width:"50%"}}),r.a.createElement("p",null,"Aim to work in a challenging work environment where I can utilize my expertise in technical skills, towards the development and implementation of the new ideas and contributing to growth of the organization."),r.a.createElement("hr",{style:{borderTop:"3px solid #833fb2",width:"50%"}}),r.a.createElement("h5",null,"Address"),r.a.createElement("p",null,"No. 56, Hosapalya colony, Agara, Thataguni Post, Bengaluru - 560062"),r.a.createElement("h5",null,"Phone"),r.a.createElement("p",null,"(123) 456-7890"),r.a.createElement("h5",null,"Email"),r.a.createElement("p",null,"chandrashekargr1995@gmail.com"),r.a.createElement("h5",null,"Web"),r.a.createElement("p",null,"coming soon"),r.a.createElement("hr",{style:{borderTop:"3px solid #833fb2",width:"50%"}})),r.a.createElement(p.Cell,{className:"resume-right-col",col:7},r.a.createElement("h4",null,"Experience"),r.a.createElement(f,{startYear:2018,endYear:"Present",companyName:"Accenture",jobName:"Associate Software Engineer",jobDescription:"Developing application using Java and using IBM ITX as middleware."}),r.a.createElement("hr",{style:{borderTop:"3px solid #e22947"}}),r.a.createElement("h4",null,"Education"),r.a.createElement(b,{startYear:2016,endYear:2018,credits:7.6,courseName:"Master of Computer Applications (MCA)",collegeName:"Dayananda Sagar Institutions",universityName:"Visvesvaraya Technological University"}),r.a.createElement(b,{startYear:2013,endYear:2016,credits:6.5,courseName:"Bachelor of Computer Applications (BCA)",collegeName:"PESIT",universityName:"Bangalore University"}),r.a.createElement("hr",{style:{borderTop:"3px solid #e22947"}}),r.a.createElement("h4",null,"Internship"),r.a.createElement(f,{startYear:2018,endYear:2018,companyName:"Indian Space Research Organisation (ISRO)",jobName:"Java Developer",jobDescription:"Video Data Processing"}),r.a.createElement("hr",{style:{borderTop:"3px solid #e22947"}}),r.a.createElement("h4",null,"Skills"),r.a.createElement(y,{skill:"Java",progress:60}),r.a.createElement(y,{skill:"Python",progress:65}),r.a.createElement(y,{skill:"javascript",progress:60}),r.a.createElement(y,{skill:"HTML/CSS",progress:80}),r.a.createElement(y,{skill:"NodeJS",progress:50}),r.a.createElement(y,{skill:"React",progress:25}),r.a.createElement(y,{skill:"Django",progress:25}))))}}]),a}(n.Component),j=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{alignContent:"center",display:"flex",paddingTop:"50px"}},r.a.createElement(p.Card,{shadow:6,style:{height:"415px",margin:"auto"}},r.a.createElement("h3",null,"Sign Up"),r.a.createElement(p.Grid,null,r.a.createElement(p.Textfield,{onChange:function(){},label:"First Name",floatingLabel:!0,style:{width:"200px",alignContent:"center"}}),r.a.createElement(p.Textfield,{onChange:function(){},label:"Last Name",floatingLabel:!0,style:{width:"200px"},required:!0}),r.a.createElement(p.Textfield,{onChange:function(){},label:"Email",floatingLabel:!0,style:{width:"200px"},required:!0}),r.a.createElement(p.Textfield,{onChange:function(){},label:"Password",floatingLabel:!0,style:{width:"200px"},required:!0})),r.a.createElement(p.Button,{style:{},raised:!0,accent:!0,ripple:!0},"Sign Up")))}}]),a}(n.Component),C=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{alignContent:"center",display:"flex",paddingTop:"50px"}},r.a.createElement(p.Card,{shadow:6,style:{height:"280px",margin:"auto"}},r.a.createElement("h3",null,"Login"),r.a.createElement(p.Grid,null,r.a.createElement(p.Textfield,{onChange:function(){},label:"Email",floatingLabel:!0,style:{width:"200px"},required:!0}),r.a.createElement(p.Textfield,{onChange:function(){},label:"Password",floatingLabel:!0,style:{width:"200px"},required:!0})),r.a.createElement(p.Button,{style:{},raised:!0,accent:!0,ripple:!0},"Login")))}}]),a}(n.Component),w=function(){return r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:h}),r.a.createElement(u.a,{exact:!0,path:"/home",component:h}),r.a.createElement(u.a,{path:"/aboutme",component:d}),r.a.createElement(u.a,{path:"/contact",component:E}),r.a.createElement(u.a,{path:"/projects",component:g}),r.a.createElement(u.a,{path:"/resume",component:v}),r.a.createElement(u.a,{path:"/signup",component:j}),r.a.createElement(u.a,{path:"/login",component:C}))},k=a(9),N=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"demo-big-content"},r.a.createElement(p.Layout,null,r.a.createElement(p.Header,{className:"header-color",title:r.a.createElement(k.b,{style:{textDecoration:"none",color:"white"},to:"/"},"MyPortfolio"),scroll:!0},r.a.createElement(p.Navigation,null,r.a.createElement(k.b,{to:"/home"},"Home"),r.a.createElement(k.b,{to:"/resume"},"Resume"),r.a.createElement(k.b,{to:"/projects"},"Projects"),r.a.createElement(k.b,{to:"/aboutme"},"About Me"),r.a.createElement(k.b,{to:"/contact"},"Contact"),r.a.createElement(k.b,{to:"/signup"},"Sign Up"),r.a.createElement(k.b,{to:"/login"},"Login"))),r.a.createElement(p.Drawer,{title:r.a.createElement(k.b,{style:{textDecoration:"none",color:"black"},to:"/"},"MyPortfolio")},r.a.createElement(p.Navigation,null,r.a.createElement(k.b,{to:"/home"},"Home"),r.a.createElement(k.b,{to:"/resume"},"Resume"),r.a.createElement(k.b,{to:"/projects"},"Projects"),r.a.createElement(k.b,{to:"/aboutme"},"About Me"),r.a.createElement(k.b,{to:"/contact"},"Contact"),r.a.createElement(k.b,{to:"/signup"},"Sign Up"),r.a.createElement(k.b,{to:"/login"},"Login"))),r.a.createElement(p.Content,null,r.a.createElement("div",{className:"page-content"}),r.a.createElement(w,null))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(99),a(100);c.a.render(r.a.createElement(k.a,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},42:function(e,t,a){e.exports=a(101)},47:function(e,t,a){},48:function(e,t,a){}},[[42,1,2]]]);
//# sourceMappingURL=main.b95a9e3f.chunk.js.map