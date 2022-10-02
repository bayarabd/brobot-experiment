"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6370],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_position:9},r="Mock Results",s={unversionedId:"tutorial-basics/mock-results",id:"tutorial-basics/mock-results",title:"Mock Results",description:"Console Output",source:"@site/docs/tutorial-basics/mock-results.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/mock-results",permalink:"/brobot/docs/tutorial-basics/mock-results",draft:!1,editUrl:"https://jspinak.github.io/brobot/docs/tutorial-basics/mock-results.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Save Labeled Images",permalink:"/brobot/docs/tutorial-basics/save-labeled-image"},next:{title:"Live Results",permalink:"/brobot/docs/tutorial-basics/live-results"}},l={},c=[{value:"Console Output",id:"console-output",level:2},{value:"Playing with the Mock",id:"playing-with-the-mock",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mock-results"},"Mock Results"),(0,o.kt)("h2",{id:"console-output"},"Console Output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+ add WORLD to active states\nOpen State ISLAND\nFind path: [WORLD] -> ISLAND\n_(score)_Paths Found_\n(2)-> WORLD -> ISLAND\n|CLICK WORLD.searchButton| Find.FIRST 36:05 found=true <click> wait-0,2 <click> CLICK \u2713\nstates to activate: [ISLAND]\n|FIND ISLAND.island type text| Find.FIRST 36:05 found=true + add ISLAND to active states FIND \u2713\n\u2713 Transition WORLD->ISLAND successful.\nActive States: [WORLD, ISLAND]\n\n|CLICK WORLD.searchButton| Find.FIRST 36:05 found=true <click> wait-0,2 <click> CLICK \u2713\n|GET_TEXT wait-3,0 Find.FIRST GET_TEXT \u2713\ntext = Mines\n|DEFINE Define as: MATCH| DEFINE \u2713\nSave file with base path DOTislands/labeledImages/Mines\n\n|CLICK WORLD.searchButton| Find.FIRST 36:09 found=true <click> wait-0,2 <click> CLICK \u2713\n|GET_TEXT wait-3,0 Find.FIRST GET_TEXT \u2713\ntext = Farms\nSave file with base path DOTislands/labeledImages/Farms\n\n|CLICK WORLD.searchButton| Find.FIRST 36:12 found=true <click> wait-0,2 <click> CLICK \u2713\n|GET_TEXT wait-3,0 Find.FIRST GET_TEXT \u2713\ntext = Lakes\nSave file with base path DOTislands/labeledImages/Lakes\n")),(0,o.kt)("p",null,"... ",(0,o.kt)("i",null,"this repeats 100 times (if you entered 100 as the max images to save)"),"  "),(0,o.kt)("h2",{id:"playing-with-the-mock"},"Playing with the Mock"),(0,o.kt)("p",null,"You can now play around with the code to see what mock results you get.\nAs opposed to writing an automation application without mocking capabilities,\nyou don't have to wait for real execution to see the effects of any changes. Go\nahead and make the following changes:  "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Comment out StateTransitions, for example IslandTransitions by\ncommenting out the line in the IslandTransitions class that adds\nits StateTransitions to the repository:",(0,o.kt)("br",{parentName:"li"}),"//stateTransitionsRepository.add(transitions);",(0,o.kt)("br",{parentName:"li"}),"Run the code again to see the results. Notice how you get immediate feedback\nthat there is a mistake and know that you forgot to include a Transition.\nWithout mocking, you would have to wait until this transition occurs to get\nan error. Depending on the size and complexity of your application, this could\ntake a long time. With mocking it happens immediately, similar to normal\nintegration testing. "),(0,o.kt)("li",{parentName:"ol"},"Change the name of one of the image files. See the errors produced in the mock. "),(0,o.kt)("li",{parentName:"ol"},'Add text to the GetText snapshot. Add text that you might expect to see,\nsuch as "Mnes" and "Frms". As expected, the demo will not recognize these\ninputs as being real island types. This is a way to use mocking to refine\nyour algorithm. While not technically an error, the application should\nprobably classify "Mnes" as Mines and "Frms" as Farms. Having these values\nin the snapshot allows you to refine and test your code efficiently, without\nhaving the long cycles characterized by real runs.')))}d.isMDXComponent=!0}}]);