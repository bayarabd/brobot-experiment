"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3848],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>h});var i=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=i.createContext({}),c=function(t){var e=i.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=c(t.components);return i.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),d=c(n),h=o,g=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return n?i.createElement(g,a(a({ref:e},u),{},{components:n})):i.createElement(g,a({ref:e},u))}));function h(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:o,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4818:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(7462),o=(n(7294),n(3905));const r={sidebar_position:2},a="Integration Testing",s={unversionedId:"introduction/core-features/testing/integration-testing",id:"introduction/core-features/testing/integration-testing",title:"Integration Testing",description:"Integration testing is performed by simulating the environment the application runs in",source:"@site/docs/introduction/core-features/testing/integration-testing.md",sourceDirName:"introduction/core-features/testing",slug:"/introduction/core-features/testing/integration-testing",permalink:"/brobot/docs/introduction/core-features/testing/integration-testing",draft:!1,editUrl:"https://jspinak.github.io/brobot/docs/introduction/core-features/testing/integration-testing.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/brobot/docs/introduction/core-features/testing/testing-intro"},next:{title:"Unit Testing",permalink:"/brobot/docs/introduction/core-features/testing/unit-testing"}},l={},c=[{value:"Mocking",id:"mocking",level:2},{value:"Match Histories",id:"match-histories",level:2},{value:"Console Output",id:"console-output",level:2},{value:"Assertions",id:"assertions",level:2}],u={toc:c};function p(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,i.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"integration-testing"},"Integration Testing"),(0,o.kt)("p",null,"Integration testing is performed by simulating the environment the application runs in\nand the results of actions taken on objects in this environment. The model of the environment\nis represented by a sample distribution of action-results pairs for state objects, as well\nas probabilities that determine the success or failure of state transitions when the\napplication is run as a test. Running the app as a test is typically referred to as\nmocking. Mocking is the process of simulating actions instead of executing them in a real run.\nAn integration test in Brobot runs the entire application in a mock run, and is\ndone by simply setting the variable ",(0,o.kt)("inlineCode",{parentName:"p"},"BrobotSettings.mock")," to true.  "),(0,o.kt)("h2",{id:"mocking"},"Mocking"),(0,o.kt)("p",null,"Mocking is used for application testing when making calls to a third-party API that the\ndeveloper cannot control. For example, calls to an external database can be mocked in the\ntest methods in order to simulate real data. Mocking in brobot is similar to this idea.\nBrobot uses Sikuli for interacting with the GUI and wraps every Sikuli method that it\ncalls to be able to produce a mock instead of a real action. A Brobot application can then\nbe mocked to produce text outputs and is run exactly as it would otherwise. The higher level\ncode in a brobot application does not know if it is running live or in a mock. The mocks\nhappen only at the wrapper level and the wrappers return the same outputs as they would\nduring a real run (plus some additional logging when enabled). Stochastisticity is modeled\nby sampling from the potential outcomes saved with state objects, and from the\nprobabilities given to the success or failure of state transitions. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"wrappers",src:n(7877).Z,width:"1920",height:"1080"})),(0,o.kt)("p",null,"Mocking can uncover errors in the code in the same way that traditional testing, for\nexample JUnit testing, does. You don't have to wait 30 minutes to realize that you\nforgot to name the new image you saved, and your application can't find it. This\nhappens instantly."),(0,o.kt)("p",null,"Mocking also provides insight into how robust your code is. Parts of the code with\nnarrow paths (little redundancy in making a transition from state A to state B)\nmay perform poorly if a state has a low probability of appearing. You can introduce\nprocess flow errors into the mocks, including sending your process to an unknown state,\nto see how your app will behave."),(0,o.kt)("h2",{id:"match-histories"},"Match Histories"),(0,o.kt)("p",null,"Adding the code to guide the mock involves initializing state objects either with\na history of action results (matches produced by different actions on this object)\nor with probabilities. It is recommended to initialize\nwith action results since they typically lead to more realistic mock runs. When\nusing the state structure builder, states are built by Brobot using match histories.\nThe state structure builder does the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"saves screenshots of the target environment"),(0,o.kt)("li",{parentName:"ol"},"analyzes all selected images on these screenshots"),(0,o.kt)("li",{parentName:"ol"},"writes Java code to build the state structure, and initializes state objects with match histories taken from the image analysis")),(0,o.kt)("p",null,"The below example was created by the state structure builder. It initializes the\nimage with a history of Find.ALL operations that were performed during image analysis\non screenshots of the target environment."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"StateImageObject",src:n(8066).Z,width:"624",height:"555"})),(0,o.kt)("h2",{id:"console-output"},"Console Output"),(0,o.kt)("p",null,"Detailed process output allows the user to follow the process flow and find\nthe sources of potential errors. All the output provided by real runs,\nincluded java console output, are also provided by mock runs. Discovering\na hidden null pointer exception can take place almost immediately as opposed to\nhours into a real run."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"console output",src:n(2647).Z,width:"1521",height:"1194"})),(0,o.kt)("h2",{id:"assertions"},"Assertions"),(0,o.kt)("p",null,"Brobot has testing capabilities that allow the programmer to compare expected\nresults to the results obtained in a mock run, giving color coded feedback on\nsuccess or failure of the mock run."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"test output",src:n(5802).Z,width:"1639",height:"1144"})))}p.isMDXComponent=!0},8066:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/StateImageObject-45bd122420a058502b347b22adec52ca.png"},2647:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/mock-output-bbf01b746faa2a943ceb2a1493bd04a5.png"},5802:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/test-output-119935642b17468a61b8cceee31a50d6.png"},7877:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/wrappers-8f5e2e7afa7fb9b1452c20daaa9e6e83.jpeg"}}]);