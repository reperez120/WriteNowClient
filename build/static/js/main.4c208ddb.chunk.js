(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n(36)},28:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(20),c=n.n(r),l=n(6),i=n(5),s=n(9),h=n(10),m=n(12),u=n(11),d=n(13),p=(n(28),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"LandingPage"},o.a.createElement("header",{className:"appHeader"},o.a.createElement("div",{className:"image"})),o.a.createElement("main",null,o.a.createElement("div",{className:"logoImage"}),o.a.createElement("h2",null,"A Writing Prompt App"),o.a.createElement("h3",null,"Suffering from writer's block? Write Now is here to help! This app generates writing prompts based on your genre selection."),o.a.createElement("form",{className:"entry-form"},o.a.createElement(l.b,{to:"/sentence-generator"},o.a.createElement("button",{type:"submit"},"Write now!")))))}}]),t}(a.Component)),f=(n(33),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleGenre=function(e){n.setState({genre:e.target.value})},n.handleFormSubmit=function(e){e.preventDefault(),n.setState({loading:!0});var t=n.state.genre,a={method:"GET"},o="https://calm-hamlet-15286.herokuapp.com/words?";function r(e){return Object.keys(e).map(function(t){return"".concat(encodeURIComponent(t),"=").concat(e[t])}).join("&")}var c=function(){fetch("https://calm-hamlet-15286.herokuapp.com/words?type=verb",a).then(function(e){return e.json()}).then(function(e){var t=e[Math.floor(Math.random()*e.length)].word;n.setState({verb:t})})},l=function(){fetch("https://calm-hamlet-15286.herokuapp.com/words?type=preposition",a).then(function(e){return e.json()}).then(function(e){var t=e[Math.floor(Math.random()*e.length)].word;n.setState({preposition:t})})};if("wildcard"===n.state.genre){var i=function(){fetch("https://calm-hamlet-15286.herokuapp.com/words?type=loc-adj",a).then(function(e){return e.json()}).then(function(e){var t=e[Math.floor(Math.random()*e.length)].word;n.setState({locationAdjective:t})})};fetch("https://calm-hamlet-15286.herokuapp.com/words?type=sub-adj",a).then(function(e){return e.json()}).then(function(e){var t=e[Math.floor(Math.random()*e.length)].word;n.setState({subjectAdjective:t})}),fetch("https://calm-hamlet-15286.herokuapp.com/words?type=subject",a).then(function(e){return e.json()}).then(function(e){var t=e[Math.floor(Math.random()*e.length)].word;n.setState({subject:t})}),i(),c(),l(),i(),fetch("https://calm-hamlet-15286.herokuapp.com/words?type=location",a).then(function(e){return e.json()}).then(function(e){var t=e[Math.floor(Math.random()*e.length)].word;n.setState({location:t})}),n.setState({firstArticle:"The",article:"the",punctuation:".",loading:!1,downloadPromptText:"Download prompt as TXT file."})}else{!function(){var e=r({type:"sub-adj",genre:t});fetch(o+e,a).then(function(e){return e.json()}).then(function(e){var t=e[Math.floor(Math.random()*e.length)].word;n.setState({subjectAdjective:t})})}(),function(){var e=r({type:"subject",genre:t});fetch(o+e,a).then(function(e){return e.json()}).then(function(e){var t=e[Math.floor(Math.random()*e.length)].word;n.setState({subject:t})})}(),c(),l(),function(){var e=r({type:"loc-adj",genre:t});fetch(o+e,a).then(function(e){return e.json()}).then(function(e){var t=e[Math.floor(Math.random()*e.length)].word;n.setState({locationAdjective:t})})}(),function(){var e=r({type:"location",genre:t}),c=o+e;console.log(c),fetch(c,a).then(function(e){return e.json()}).then(function(e){var t=e[Math.floor(Math.random()*e.length)].word;n.setState({location:t})})}(),n.setState({firstArticle:"The",article:"the",punctuation:".",loading:!1,downloadPromptText:"Download prompt as TXT file."})}},n.downloadPrompt=function(){var e=document.createElement("a"),t=new Blob([document.getElementById("promptDownload").value],{type:"text/plain"});e.href=URL.createObjectURL(t),e.download="WriteNowPrompt.txt",document.body.appendChild(e),e.click()},n.state={genre:"",firstArticle:"",subjectAdjective:[],subject:[],verb:[],preposition:[],article:"",locationAdjective:[],location:[],punctuation:[],downloadPromptText:"",loading:!1},n}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state.firstArticle+" "+this.state.subjectAdjective+" "+this.state.subject+" "+this.state.verb+" "+this.state.preposition+" "+this.state.article+" "+this.state.locationAdjective+" "+this.state.location+this.state.punctuation;return o.a.createElement("div",{className:"SentenceGenerator"},o.a.createElement("header",{className:"appHeader"},o.a.createElement("h2",{className:"description"},'Select a genre. Then click the "write now" button to get a writing prompt in that genre. Select "wild card" or click on the "write now" button without selecting anything to get a sentence that combines elements from all the genres.')),o.a.createElement("main",null,o.a.createElement("form",{className:"radioform",onSubmit:this.handleFormSubmit},o.a.createElement("fieldset",null,o.a.createElement("legend",null,"literary genre"),o.a.createElement("div",{className:"radioButtons"},o.a.createElement("label",{className:"scifiButton"},o.a.createElement("input",{id:"scifi",type:"radio",className:"radioButton",value:"scifi",name:"option",checked:"scifi"===this.state.genre,onChange:this.handleGenre})),o.a.createElement("label",{className:"fantasyButton"},o.a.createElement("input",{id:"fantasy",type:"radio",className:"radioButton",value:"fantasy",name:"option",checked:"fantasy"===this.state.genre,onChange:this.handleGenre})),o.a.createElement("label",{className:"horrorButton"},o.a.createElement("input",{id:"horror",type:"radio",className:"radioButton",value:"horror",name:"option",checked:"horror"===this.state.genre,onChange:this.handleGenre})),o.a.createElement("label",{className:"westernButton"},o.a.createElement("input",{id:"western",type:"radio",className:"radioButton",value:"western",name:"option",checked:"western"===this.state.genre,onChange:this.handleGenre})),o.a.createElement("label",{className:"litButton"},o.a.createElement("input",{id:"lit",type:"radio",className:"radioButton",value:"lit",name:"option",checked:"lit"===this.state.genre,onChange:this.handleGenre})),o.a.createElement("label",{className:"wildcardButton"},o.a.createElement("input",{id:"wildcard",type:"radio",className:"radioButton",value:"wildcard",name:"option",checked:"wildcard"===this.state.genre,onChange:this.handleGenre}))),o.a.createElement("button",{type:"submit",className:"writeButton"},"Write now!"),o.a.createElement(l.b,{to:"/"},o.a.createElement("button",{className:"homeBotton"},"Home")))),this.state.loading?o.a.createElement("h1",null,"Loading..."):null,o.a.createElement("h3",{id:"promptSentence"},e),o.a.createElement("input",{id:"promptDownload",value:e}),o.a.createElement("button",{className:"downloadButton",onClick:this.downloadPrompt},this.state.downloadPromptText),o.a.createElement("div",{className:"credit"},"images by Shane Kearney")))}}]),t}(a.Component));n(34);var g=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"appHeader"},o.a.createElement("h1",null,"Write Now")),o.a.createElement("main",null,o.a.createElement(i.a,{exact:!0,path:"/",component:p}),o.a.createElement(i.a,{exact:!0,path:"/sentence-generator",component:f})))};n(35);c.a.render(o.a.createElement(l.a,null,o.a.createElement(g,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.4c208ddb.chunk.js.map