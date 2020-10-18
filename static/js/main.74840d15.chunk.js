(this.webpackJsonpworld=this.webpackJsonpworld||[]).push([[0],{22:function(e,t,n){e.exports=n(41)},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(19),c=n.n(r),o=(n(27),n(28),n(7)),u=n(2),i=(n(29),n(10)),m=n(12),s=n(21),E=function(){return l.a.createElement("header",null,l.a.createElement("div",{className:"container"},l.a.createElement(o.b,{to:"/Where-In-The-World"},l.a.createElement("h1",null,"Where in the world")),l.a.createElement("button",{id:"toggle",className:"btn-toggle-dark-mode",onClick:function(){document.body.classList.toggle("dark")}},l.a.createElement(i.a,{className:"far fa-moon",icon:m.b}),l.a.createElement(i.a,{className:"fas fa-moon",icon:s.a}),"Dark mode")))},f=(n(37),n(8)),d=function(){var e=Object(a.useState)(""),t=Object(f.a)(e,2),n=t[0],r=t[1],c=function(e){document.querySelectorAll(".country-name").forEach((function(t){t.innerText.toLowerCase().includes(e.toLowerCase())?t.parentElement.parentElement.style.display="block":t.parentElement.parentElement.style.display="none"}))};return l.a.createElement("input",{className:"search",type:"text",placeholder:"Search for a country",value:n,onChange:function(e){!function(e){r(e),c(e)}(e.target.value)}})},p=function(){var e=Object(a.useState)(!1),t=Object(f.a)(e,2),n=t[0],r=t[1],c=function(e){document.querySelectorAll(".country-region").forEach((function(t){t.innerText.includes(e)||"All"===e?t.parentElement.parentElement.style.display="block":t.parentElement.parentElement.style.display="none"}))};return l.a.createElement("div",{className:"dropdown",onClick:function(){r(!n)}},"Filter by region",l.a.createElement(i.a,{className:"fas fa-chevron-down",icon:m.a}),n&&l.a.createElement("ul",null,l.a.createElement("li",{onClick:function(e){c(e.target.innerText)}},"All"),l.a.createElement("li",{onClick:function(e){c(e.target.innerText)}},"Africa"),l.a.createElement("li",{onClick:function(e){c(e.target.innerText)}},"America"),l.a.createElement("li",{onClick:function(e){c(e.target.innerText)}},"Asia"),l.a.createElement("li",{onClick:function(e){c(e.target.innerText)}},"Europe"),l.a.createElement("li",{onClick:function(e){c(e.target.innerText)}},"Oceania")))},g=function(){return l.a.createElement("section",null,l.a.createElement("div",{className:"container"},l.a.createElement(d,null),l.a.createElement(p,null)))},h=(n(38),function(e){var t=e.country;return l.a.createElement(o.b,{to:{pathname:"/details",state:{country:t}}},l.a.createElement("div",{className:"country"},l.a.createElement("div",null,l.a.createElement("img",{src:t.flag,alt:t.name})),l.a.createElement("div",{className:"country-infos"},l.a.createElement("h2",{className:"country-name"},t.name),l.a.createElement("p",null,l.a.createElement("strong",null,"Population: "),t.population),l.a.createElement("p",{className:"country-region"},l.a.createElement("strong",null,"Region: "),t.region),l.a.createElement("p",null,l.a.createElement("strong",null,"Capital: "),t.capital))))}),y=(n(39),function(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!0),o=Object(f.a)(c,2),u=o[0],i=o[1];return Object(a.useEffect)((function(){fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})).then((function(e){r(e),i(!1)})).catch((function(e){return console.log(e)}))}),[u]),u?l.a.createElement("div",{className:"lds-ring"},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null)):l.a.createElement("div",{className:"container countries"},n.map((function(e,t){return l.a.createElement(h,{country:e,key:t})})))}),v=function(){return l.a.createElement("div",null,l.a.createElement("footer",null,l.a.createElement("ul",null,l.a.createElement("a",{href:"https://github.com/ricardo-ljr/Where-In-The-World",target:"_blank",rel:"noopener noreferrer"},"Github Link"))))},b=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(E,null),l.a.createElement(g,null),l.a.createElement(y,null),l.a.createElement(v,null))},k=(n(40),function(){var e=Object(u.f)();return l.a.createElement(l.a.Fragment,null,l.a.createElement(E,null),l.a.createElement("div",{className:"detail"},l.a.createElement("div",{className:"container"},l.a.createElement("img",{src:e.state.country.flag,alt:e.state.country.name}),l.a.createElement("div",{className:"detail-body"},l.a.createElement("h2",null,e.state.country.name),l.a.createElement("p",null,l.a.createElement("strong",null,"Native name: "),e.state.country.nativeName),l.a.createElement("p",null,l.a.createElement("strong",null,"Population: "),e.state.country.population),l.a.createElement("p",null,l.a.createElement("strong",null,"Region: "),e.state.country.region),l.a.createElement("p",null,l.a.createElement("strong",null,"Sub region: "),e.state.country.subregion),l.a.createElement("p",null,l.a.createElement("strong",null,"Capital: "),e.state.country.capital),l.a.createElement("p",null,l.a.createElement("strong",null,"Top Level Domain: "),e.state.country.topLevelDomain[0]),l.a.createElement("p",null,l.a.createElement("strong",null,"Currencies: "),e.state.country.currencies.map((function(e){return e.code}))),l.a.createElement("p",null,l.a.createElement("strong",null,"Languages: "),e.state.country.languages.map((function(e){return e.name})))))))}),N=function(){return l.a.createElement(o.a,null,l.a.createElement(u.c,null,l.a.createElement(u.a,{exact:!0,path:"/Where-In-The-World",component:b}),l.a.createElement(u.a,{exact:!0,path:"/details",component:k})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.74840d15.chunk.js.map