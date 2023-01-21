"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9490],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),k=o,m=d["".concat(p,".").concat(k)]||d[k]||u[k]||i;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_position:3},r="Wrappers",l={unversionedId:"API/functions/sikuli-wrappers",id:"API/functions/sikuli-wrappers",title:"Wrappers",description:"Wrapper classes serve as the interface between Brobot and other libraries that",source:"@site/docs/API/functions/sikuli-wrappers.md",sourceDirName:"API/functions",slug:"/API/functions/sikuli-wrappers",permalink:"/brobot/docs/API/functions/sikuli-wrappers",draft:!1,editUrl:"https://jspinak.github.io/brobot/docs/API/functions/sikuli-wrappers.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Composite Actions",permalink:"/brobot/docs/API/functions/composite-actions"},next:{title:"State",permalink:"/brobot/docs/API/state and state objects/state"}},p={},s=[{value:"Find",id:"find",level:2},{value:"FindFirstPattern",id:"findfirstpattern",level:3},{value:"FindAllPatterns",id:"findallpatterns",level:3},{value:"Mouse",id:"mouse",level:2},{value:"ClickLocationOnce",id:"clicklocationonce",level:3},{value:"MouseDownWrapper",id:"mousedownwrapper",level:3},{value:"MouseUpWrapper",id:"mouseupwrapper",level:3},{value:"MouseWheel",id:"mousewheel",level:3},{value:"MoveMouseWrapper",id:"movemousewrapper",level:3},{value:"Text",id:"text",level:2},{value:"GetTextWrapper",id:"gettextwrapper",level:3},{value:"KeyDownWrapper",id:"keydownwrapper",level:3},{value:"KeyUpWrapper",id:"keyupwrapper",level:3},{value:"TypeTextWrapper",id:"typetextwrapper",level:3},{value:"Other Functions",id:"other-functions",level:2},{value:"App",id:"app",level:3},{value:"DragLocation",id:"draglocation",level:3},{value:"HighlightMatch",id:"highlightmatch",level:3},{value:"Wait",id:"wait",level:3},{value:"TimeWrapper",id:"timewrapper",level:3}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"wrappers"},"Wrappers"),(0,o.kt)("p",null,"Wrapper classes serve as the interface between Brobot and other libraries that\nperform real operations. The typical Brobot application will not call Wrappers directly. "),(0,o.kt)("p",null,"All Wrappers handle real and mock operations. If mocking is active, a\nmock will be performed. When mocking is not active, operations will\nbe carried out using modules that perform a real action. If the class is\na Sikuli Wrapper, it will call Sikuli methods. If the class is another\ntype of Wrapper, it will call some other module's methods that perform\nreal actions."),(0,o.kt)("p",null,"Classes above the Wrapper layer do not know if the application is returning\nmocked or real results. "),(0,o.kt)("h1",{id:"sikuli-wrappers"},"Sikuli Wrappers"),(0,o.kt)("h2",{id:"find"},"Find"),(0,o.kt)("h3",{id:"findfirstpattern"},"FindFirstPattern"),(0,o.kt)("p",null,"Returns the results, contained in a Matches object, for the first Pattern found\nin a Brobot Image, which itself may contain multiple Patterns. "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Matches find(Region region, StateImageObject stateImageObject, Image image,\nActionOptions actionOptions)"),"  "),(0,o.kt)("h3",{id:"findallpatterns"},"FindAllPatterns"),(0,o.kt)("p",null,"Finds all matches for all Patterns in the Brobot Image. When used by a\nFind.ALL operation, all matches are returned in the Matches object. When\nused by a Find.BEST operation, only the match with the highest score is kept."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Matches find(Region region, StateImageObject stateImageObject, Image image,\nActionOptions actionOptions)")),(0,o.kt)("h2",{id:"mouse"},"Mouse"),(0,o.kt)("h3",{id:"clicklocationonce"},"ClickLocationOnce"),(0,o.kt)("p",null,"Performs a full click once, with pauses, mouse down, and mouse up. "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"boolean click(Location location, ActionOptions actionOptions)")),(0,o.kt)("h3",{id:"mousedownwrapper"},"MouseDownWrapper"),(0,o.kt)("p",null,"Presses and holds a mouse button. "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"boolean press(double pauseBeforeBegin, double totalPause, ClickType.Type type)")),(0,o.kt)("h3",{id:"mouseupwrapper"},"MouseUpWrapper"),(0,o.kt)("p",null,"Releases a mouse button."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"boolean press(double pauseBefore, double pauseAfter, ClickType.Type type)")),(0,o.kt)("h3",{id:"mousewheel"},"MouseWheel"),(0,o.kt)("p",null,"Scrolls the mouse wheel up or down."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"boolean scroll(ActionOptions actionOptions)")),(0,o.kt)("h3",{id:"movemousewrapper"},"MoveMouseWrapper"),(0,o.kt)("p",null,"Moves the mouse to a given Location."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"boolean move(Location location)")),(0,o.kt)("h2",{id:"text"},"Text"),(0,o.kt)("h3",{id:"gettextwrapper"},"GetTextWrapper"),(0,o.kt)("p",null,"Finds text on-screen and stores it in the Matches object.\nCan find text for all Image matches or for a StateRegion."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"void allText(Matches matches, Image image)"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"void text(Matches matches, StateRegion stateRegion)")),(0,o.kt)("h3",{id:"keydownwrapper"},"KeyDownWrapper"),(0,o.kt)("p",null,"Holds a Key down. Special keys such as CTRL or ENTER are specified by an integer value.  "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"void press(String key)"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"void press(int key)")),(0,o.kt)("h3",{id:"keyupwrapper"},"KeyUpWrapper"),(0,o.kt)("p",null,"Methods for releasing all keys or a specific key."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"void release()"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"void release(String key)"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"void release(int key)")),(0,o.kt)("h3",{id:"typetextwrapper"},"TypeTextWrapper"),(0,o.kt)("p",null,"Types a String to the focused window."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"boolean type(StateString stateString, ActionOptions actionOptions)")),(0,o.kt)("h2",{id:"other-functions"},"Other Functions"),(0,o.kt)("h3",{id:"app"},"App"),(0,o.kt)("p",null,"Gets the window of the App in focus. When mocking is active, it will return a\nmock window. "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Optional<Region> focusedWindow()")),(0,o.kt)("h3",{id:"draglocation"},"DragLocation"),(0,o.kt)("p",null,"Drags from one Location to another Location.  "),(0,o.kt)("p",null,"Typical settings:  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"0.3 PauseBeforeMouseDown"),(0,o.kt)("li",{parentName:"ul"},"0.3 PauseAfterMouseDown"),(0,o.kt)("li",{parentName:"ul"},"0.5 MoveMouseDelay"),(0,o.kt)("li",{parentName:"ul"},"0.4 PauseBeforeMouseUp"),(0,o.kt)("li",{parentName:"ul"},"0.0 PauseAfterMouseUp")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"boolean drag(Location from, Location to, ActionOptions actionOptions)")),(0,o.kt)("h3",{id:"highlightmatch"},"HighlightMatch"),(0,o.kt)("p",null,"Highlights a Match with a given color. It's possible to turn on a highlight,\nturn off a highlight, or show a highlight for a given number of seconds. "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"void turnOn(Match match, StateObject stateObject, ActionOptions actionOptions)"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"void turnOff(Match match)"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"boolean highlight(Match match, StateObject stateObject, ActionOptions actionOptions)")),(0,o.kt)("h3",{id:"wait"},"Wait"),(0,o.kt)("p",null,"Pauses for a given number of seconds."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"void wait(double seconds)")),(0,o.kt)("h1",{id:"other-wrappers"},"Other Wrappers"),(0,o.kt)("h3",{id:"timewrapper"},"TimeWrapper"),(0,o.kt)("p",null,"Wraps the Time functions to allow for mocking actions.\nKeeps track of the mocked value of 'now' and performs mocked pauses."),(0,o.kt)("u",null,"Variables"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"private LocalDateTime now")," keeps track of the current mock time.  "),(0,o.kt)("u",null,"Methods"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"LocalDateTime now()"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"void wait(double seconds)"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"void wait(ActionOptions.Action action)"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"void wait(ActionOptions.Find find)"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"void printNow()"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"void goBackInTime(double years, Object thingsYouWishYouCouldChange)")))}u.isMDXComponent=!0}}]);