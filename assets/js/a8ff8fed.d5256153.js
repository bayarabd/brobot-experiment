"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9490],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=o,k=d["".concat(p,".").concat(h)]||d[h]||u[h]||r;return n?i.createElement(k,a(a({ref:t},c),{},{components:n})):i.createElement(k,a({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<r;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9223:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var i=n(7462),o=n(3366),r=(n(7294),n(3905)),a=["components"],l={sidebar_position:3},p="Wrappers",s={unversionedId:"API/functions/sikuli-wrappers",id:"API/functions/sikuli-wrappers",isDocsHomePage:!1,title:"Wrappers",description:"Wrapper classes serve as the interface between Brobot and other libraries that",source:"@site/docs/API/functions/sikuli-wrappers.md",sourceDirName:"API/functions",slug:"/API/functions/sikuli-wrappers",permalink:"/brobot/docs/API/functions/sikuli-wrappers",editUrl:"https://jspinak.github.io/brobot/docs/API/functions/sikuli-wrappers.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Composite Actions",permalink:"/brobot/docs/API/functions/composite-actions"},next:{title:"State",permalink:"/brobot/docs/API/state and state objects/state"}},c=[{value:"Find",id:"find",children:[{value:"FindFirstPattern",id:"findfirstpattern",children:[],level:3},{value:"FindAllPatterns",id:"findallpatterns",children:[],level:3}],level:2},{value:"Mouse",id:"mouse",children:[{value:"ClickLocationOnce",id:"clicklocationonce",children:[],level:3},{value:"MouseDownWrapper",id:"mousedownwrapper",children:[],level:3},{value:"MouseUpWrapper",id:"mouseupwrapper",children:[],level:3},{value:"MouseWheel",id:"mousewheel",children:[],level:3},{value:"MoveMouseWrapper",id:"movemousewrapper",children:[],level:3}],level:2},{value:"Text",id:"text",children:[{value:"GetTextWrapper",id:"gettextwrapper",children:[],level:3},{value:"KeyDownWrapper",id:"keydownwrapper",children:[],level:3},{value:"KeyUpWrapper",id:"keyupwrapper",children:[],level:3},{value:"TypeTextWrapper",id:"typetextwrapper",children:[],level:3}],level:2},{value:"Other Functions",id:"other-functions",children:[{value:"App",id:"app",children:[],level:3},{value:"DragLocation",id:"draglocation",children:[],level:3},{value:"HighlightMatch",id:"highlightmatch",children:[],level:3},{value:"Wait",id:"wait",children:[],level:3},{value:"TimeWrapper",id:"timewrapper",children:[],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"wrappers"},"Wrappers"),(0,r.kt)("p",null,"Wrapper classes serve as the interface between Brobot and other libraries that\nperform real operations. The typical Brobot application will not call Wrappers directly. "),(0,r.kt)("p",null,"All Wrappers handle real and mock operations. If mocking is active, a\nmock will be performed. When mocking is not active, operations will\nbe carried out using modules that perform a real action. If the class is\na Sikuli Wrapper, it will call Sikuli methods. If the class is another\ntype of Wrapper, it will call some other module's methods that perform\nreal actions."),(0,r.kt)("p",null,"Classes above the Wrapper layer do not know if the application is returning\nmocked or real results. "),(0,r.kt)("h1",{id:"sikuli-wrappers"},"Sikuli Wrappers"),(0,r.kt)("h2",{id:"find"},"Find"),(0,r.kt)("h3",{id:"findfirstpattern"},"FindFirstPattern"),(0,r.kt)("p",null,"Returns the results, contained in a Matches object, for the first Pattern found\nin a Brobot Image, which itself may contain multiple Patterns. "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Matches find(Region region, StateImageObject stateImageObject, Image image,\nActionOptions actionOptions)"),"  "),(0,r.kt)("h3",{id:"findallpatterns"},"FindAllPatterns"),(0,r.kt)("p",null,"Finds all matches for all Patterns in the Brobot Image. When used by a\nFind.ALL operation, all matches are returned in the Matches object. When\nused by a Find.BEST operation, only the match with the highest score is kept."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Matches find(Region region, StateImageObject stateImageObject, Image image,\nActionOptions actionOptions)")),(0,r.kt)("h2",{id:"mouse"},"Mouse"),(0,r.kt)("h3",{id:"clicklocationonce"},"ClickLocationOnce"),(0,r.kt)("p",null,"Performs a full click once, with pauses, mouse down, and mouse up. "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean click(Location location, ActionOptions actionOptions)")),(0,r.kt)("h3",{id:"mousedownwrapper"},"MouseDownWrapper"),(0,r.kt)("p",null,"Presses and holds a mouse button. "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean press(double pauseBeforeBegin, double totalPause, ClickType.Type type)")),(0,r.kt)("h3",{id:"mouseupwrapper"},"MouseUpWrapper"),(0,r.kt)("p",null,"Releases a mouse button."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean press(double pauseBefore, double pauseAfter, ClickType.Type type)")),(0,r.kt)("h3",{id:"mousewheel"},"MouseWheel"),(0,r.kt)("p",null,"Scrolls the mouse wheel up or down."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean scroll(ActionOptions actionOptions)")),(0,r.kt)("h3",{id:"movemousewrapper"},"MoveMouseWrapper"),(0,r.kt)("p",null,"Moves the mouse to a given Location."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean move(Location location)")),(0,r.kt)("h2",{id:"text"},"Text"),(0,r.kt)("h3",{id:"gettextwrapper"},"GetTextWrapper"),(0,r.kt)("p",null,"Finds text on-screen and stores it in the Matches object.\nCan find text for all Image matches or for a StateRegion."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void allText(Matches matches, Image image)"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"void text(Matches matches, StateRegion stateRegion)")),(0,r.kt)("h3",{id:"keydownwrapper"},"KeyDownWrapper"),(0,r.kt)("p",null,"Holds a Key down. Special keys such as CTRL or ENTER are specified by an integer value.  "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void press(String key)"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"void press(int key)")),(0,r.kt)("h3",{id:"keyupwrapper"},"KeyUpWrapper"),(0,r.kt)("p",null,"Methods for releasing all keys or a specific key."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void release()"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"void release(String key)"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"void release(int key)")),(0,r.kt)("h3",{id:"typetextwrapper"},"TypeTextWrapper"),(0,r.kt)("p",null,"Types a String to the focused window."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean type(StateString stateString, ActionOptions actionOptions)")),(0,r.kt)("h2",{id:"other-functions"},"Other Functions"),(0,r.kt)("h3",{id:"app"},"App"),(0,r.kt)("p",null,"Gets the window of the App in focus. When mocking is active, it will return a\nmock window. "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Optional<Region> focusedWindow()")),(0,r.kt)("h3",{id:"draglocation"},"DragLocation"),(0,r.kt)("p",null,"Drags from one Location to another Location.  "),(0,r.kt)("p",null,"Typical settings:  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"0.3 PauseBeforeMouseDown"),(0,r.kt)("li",{parentName:"ul"},"0.3 PauseAfterMouseDown"),(0,r.kt)("li",{parentName:"ul"},"0.5 MoveMouseDelay"),(0,r.kt)("li",{parentName:"ul"},"0.4 PauseBeforeMouseUp"),(0,r.kt)("li",{parentName:"ul"},"0.0 PauseAfterMouseUp")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean drag(Location from, Location to, ActionOptions actionOptions)")),(0,r.kt)("h3",{id:"highlightmatch"},"HighlightMatch"),(0,r.kt)("p",null,"Highlights a Match with a given color. It's possible to turn on a highlight,\nturn off a highlight, or show a highlight for a given number of seconds. "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void turnOn(Match match, StateObject stateObject, ActionOptions actionOptions)"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"void turnOff(Match match)"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"boolean highlight(Match match, StateObject stateObject, ActionOptions actionOptions)")),(0,r.kt)("h3",{id:"wait"},"Wait"),(0,r.kt)("p",null,"Pauses for a given number of seconds."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void wait(double seconds)")),(0,r.kt)("h1",{id:"other-wrappers"},"Other Wrappers"),(0,r.kt)("h3",{id:"timewrapper"},"TimeWrapper"),(0,r.kt)("p",null,"Wraps the Time functions to allow for mocking actions.\nKeeps track of the mocked value of 'now' and performs mocked pauses."),(0,r.kt)("u",null,"Variables"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"private LocalDateTime now")," keeps track of the current mock time.  "),(0,r.kt)("u",null,"Methods"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"LocalDateTime now()"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"void wait(double seconds)"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"void wait(ActionOptions.Action action)"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"void wait(ActionOptions.Find find)"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"void printNow()"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"void goBackInTime(double years, Object thingsYouWishYouCouldChange)")))}d.isMDXComponent=!0}}]);