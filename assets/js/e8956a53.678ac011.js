"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8698],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return p}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),u=c(n),p=i,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||o;return n?a.createElement(m,s(s({ref:t},h),{},{components:n})):a.createElement(m,s({ref:t},h))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},660:function(e,t,n){n.r(t),n.d(t,{BoldItal:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return h}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),s=["components"],r={title:"The Visual API"},l=void 0,c={type:"mdx",permalink:"/brobot/visualAPI",source:"@site/src/pages/visualAPI.md",title:"The Visual API",description:"A new standard for state-based, testable, visual automation",frontMatter:{title:"The Visual API"}},h=[{value:"Abstract",id:"abstract",level:2},{value:"1 Introduction",id:"1-introduction",level:2},{value:"2 Complexity",id:"2-complexity",level:2},{value:"3 Reducing Complexity",id:"3-reducing-complexity",level:2},{value:"4 Modeling the Environment",id:"4-modeling-the-environment",level:2},{value:"5 Causality",id:"5-causality",level:2},{value:"6 The Framework",id:"6-the-framework",level:2},{value:"7 The Visual API",id:"7-the-visual-api",level:2},{value:"8 Testing",id:"8-testing",level:2},{value:"9 Simulation vs Real Execution",id:"9-simulation-vs-real-execution",level:2},{value:"10 Simulation",id:"10-simulation",level:2},{value:"11 Discussion",id:"11-discussion",level:2}],d=function(e){var t=e.children;e.color;return(0,o.kt)("span",{style:{fontSize:24,fontStyle:"italic",borderRadius:"2px",padding:"0.2rem"}},t)},u={toc:h,BoldItal:d};function p(e){var t=e.components,r=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-visual-api"},"The Visual API"),(0,o.kt)(d,{color:"#25c2a0",mdxType:"BoldItal"},"A new standard for state-based, testable, visual automation"),(0,o.kt)("br",null),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"abstract"},"Abstract"),(0,o.kt)("p",null,"Large visual automation applications are rarely developed due to the complexity\nrequired for a robust application and the inability to test the codebase.\nThis paper explores the reasons for the complexity and the inability to test,\nand in doing so, finds solutions to both. The concept of the visual API is\nproposed as a new standard for developing visual automation and a new\nopen-source framework is introduced that streamlines the process of building a visual API."),(0,o.kt)("h2",{id:"1-introduction"},"1 Introduction"),(0,o.kt)("p",null,"Visual automation is difficult, and no source attests more clearly to this than\nthe industry where it is used the most, the software testing industry. The market\nfor software testing was estimated at\n",(0,o.kt)("a",{parentName:"p",href:"https://www.gminsights.com/industry-analysis/software-testing-market"},"over $40 billion in 2020"),".\nHowever, the vast\nmajority of these revenues did not go to automated testing applications. Industry\nparticipants prefer to invest in manual testing, apparently due to the relative high\ncosts of developing automation as compared to the cost of human testers. The\ndecisions to use human testers, especially for use-cases that seem ideal for\nautomation, are clear indications of how difficult it is to develop useful automation."),(0,o.kt)("p",null,"There are two main problems with writing large visual automation applications:\ncode complexity, and the inability to test the code. The solutions to both\nproblems are somewhat codependent. As we explore the underlying causes of code\ncomplexity and the inability to test, the solutions to these problems should become\napparent. The key to finding the solutions is to gain a deeper understanding of the\nautomation task and to reframe how we view it."),(0,o.kt)("h2",{id:"2-complexity"},"2 Complexity"),(0,o.kt)("p",null,"Below is a simple process involving visual automation. We want our program to perform\nthree actions, one after another: first A1, then A2, then A3."),(0,o.kt)("p",{align:"center"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"graph1",src:n(6967).Z,width:"50",height:"225"}))),(0,o.kt)("br",null),(0,o.kt)("p",null,"The first issue we run into is the stochastic nature of actions A1, A2, and A3.\nVisual process automation is not guaranteed to succeed. For each action, there\nare many different potential outcomes. Taking the example of an action that\nattempts to find an image, potential outcomes include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The image on screen is the same as in the program, and it is found."),(0,o.kt)("li",{parentName:"ul"},"The image is slightly different but found."),(0,o.kt)("li",{parentName:"ul"},"The image is slightly different and not found."),(0,o.kt)("li",{parentName:"ul"},"The image is covered by another image (an unexpected pop-up, for example), and\nthe image is not found."),(0,o.kt)("li",{parentName:"ul"},"The image does not exist (maybe the automation program is not where it expects it to be)."),(0,o.kt)("li",{parentName:"ul"},"A different image is found."),(0,o.kt)("li",{parentName:"ul"},"The same image appears multiple times on the screen and the program finds the wrong one."),(0,o.kt)("li",{parentName:"ul"},"The image will appear but takes longer than expected, and the operation times out.")),(0,o.kt)("p",{align:"center"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"graph1",src:n(19).Z,width:"736",height:"401"}))),(0,o.kt)("br",null),(0,o.kt)("p",null,"In reality the result frequency is a continuous variable since there could be\nan infinite number of different scenarios. You might portray the continuous\nvariable as having a few different categories of results: found, not found,\nand found erroneously. What you do in these scenarios may differ depending\non the scenario. If an image is not found because the image on the screen\nis slightly different from the image on file, you may want to adjust the\nsensitivity of your find operation. If the image is not found because your\napplication thinks it\u2019s somewhere else, then your solution will be to move\nto the correct environment."),(0,o.kt)("p",{align:"center"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"dist",src:n(3782).Z,width:"793",height:"416"}))),(0,o.kt)("p",null,"Stochasticity is especially dangerous for automation applications because of the\ninterdependency of actions. If A1 fails then A2 and A3 are also likely to fail.\nIf an automation program is a series of actions, the probability of the program\nfailing will be related directly to the number of actions. If each action is\ngiven a probability p of succeedi   ng, and there are n actions, we can calculate\nthe overall probability of success as a function of n and p: $\\color{blue}{f(n,p) = p^n}$   ."),(0,o.kt)("p",null,"$\\f(n,p)$ looks like this when setting p to 90%: at just 7 actions the process\nis more likely to fail than succeed, and the chances of success with a large\nnumber of actions is extremely low.   "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"compounding",src:n(4214).Z,width:"1041",height:"386"}),"  "),(0,o.kt)("p",null,"Given that failure is likely, a robust application must take this failure into\naccount and provide alternate processes in order to reach its goals. Having\nalternate routes to the end goal will increase the overall probability of\nreaching this goal.   "),(0,o.kt)("p",{align:"center"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"3 Processes",src:n(8373).Z,width:"180",height:"291"}))),(0,o.kt)("p",null,"A process is a series of successive actions. A process follows a path through\ndifferent environments and this environment may change as the result of a successful\naction. If there are 3 different processes, A, B, and C, that can reach a goal, and\neach action in {A1,A2,A3,B1,\u2026,C3} has probability p of success, then the probability\nof success for each process is $p^3$.  "),(0,o.kt)("p",null,"At first glance, it would seem that the probability of success for the entire algorithm is\n$1 - (1 - p^3)^3$ because in order for the entire algorithm to fail, all 3 paths\nwould need to fail. When p = 90%, the probability of a single process succeeding is\n72.9% and the probability of the entire algorithm succeeding is 98%. This is, however,\nincorrect. Since actions can change the environment, the only place where the\nadditional paths would be available is at the start point. We only have backup\nprocesses at the start point, after which we have to follow the process we have\nchosen. In other words, if A1 fails we can try B1, but if B2 fails our algorithm\nhas failed. In this diagram there is no path back to the start point. This gives\nus a success rate in the first layer of $p + ","[p * (1 - p)]"," + ","[p * (1 - p)^2]"," =\n3p - 3p^2 + p^3$, since there is a p chance of A1 succeeding, a p chance of B1\nsucceeding in the event that A1 fails, and a p chance of C1 succeeding in the\nevent that both A1 and B1 have failed. In the second and third layers the\nprobability of success is just p. This gives an overall probability of success of\n$p ",(0,o.kt)("em",{parentName:"p"}," p ")," (3p - 3p^2 + p^3) = 3p^3 - 3p^4 + p^5$. With p = 90%, the overall\nprobability of success is just ~80.9%.  "),(0,o.kt)("p",null,"To keep the probability of success around 99% we would need to create\nalternate processes for each action, including the actions in processes\nB and C. If there were n original actions, the total number of actions in\nour more robust algorithm would be $3^n + 3^{n-1} + 3^{n-2} + ... + 3^{n-(n-1)}$.\nIn this example, with n=3, we have 27 + 9 + 3 = 39 actions. The run-time\ncomplexity is still linear since only a small subset of all actions will\nbe performed, but the programming-time complexity is exponential.\nProgramming-time is even more valuable than run-time because your time\nis more valuable than your computer\u2019s time! That is, after all, the whole\npoint of automation. This programming-time complexity also can be described\nas ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/NP-hardness"},"NP-hard"),", or\nNot Programming this, this is too hard!  "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"3 Layers",src:n(1729).Z,width:"2132",height:"1088"})),(0,o.kt)("h2",{id:"3-reducing-complexity"},"3 Reducing Complexity"),(0,o.kt)("p",null,"We need to simplify the application somehow to make it feasible to write larger\nprograms and to be able to test them. In a given action tree, we\u2019re likely to find\nduplicate actions that lead to the same expected outcomes. The actions in this tree\nwith the same color represent duplicate actions. For an action to be considered a\nduplicate, it must have the same functionality but also the same expected results\nas another action. This is the case for actions F1 and R1, G1 and S1, and B3 and H2.\nIn addition, actions that lead to the same set of duplicate actions, as in the case\nof B2 and H1, are also duplicates.   "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Repeating Processes",src:n(4718).Z,width:"2135",height:"1092"})),(0,o.kt)("p",null,"Duplicate actions such as B2 and H1 lead to the same environment, in which the same\nactions are available. Whether all details of the real environments after a successful\nB2 or H1 action are actually the same or not is not important to us. What\u2019s important\nis how our application views the world it is in, and it views it in terms of potential\nactions and their outcomes. Despite being just a collection of processes, this program\nhas an implicit model of the environments it moves around in. Duplicate actions are an\nindication of the implicit existence of repeating environments.  "),(0,o.kt)("p",null,"Let\u2019s start to include these environments explicitly in our graph. We\u2019ll introduce\nthe concept of a state, which in this context refers to an environment containing\nactions with expected results. The successful completion of actions B2 and H1 would\ntake us to the same state (in figure 8, states 6 and 7 represent the same state and\ncould be combined into one state). In figure 8, states are added as rectangles and\nprocesses remain as circles. The start and end points are changed to rectangles as\nthey are states and not actions.  "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"States",src:n(2737).Z,width:"2138",height:"1047"})),(0,o.kt)("p",null,"In figure 9, I made some changes to our processes for illustrative purposes. The\nnew graph shows how states can be shared at any level of the graph, and how states\ncan coexist. I made the three actions in state 3 (C2, D1, E1) go directly to the\nend state and made them duplicates of N1, O1, and D2 in state 4. Finally, I added\naction M1 to state 4 so that state 4 and state 3 would not be duplicates, and made\nE2 and K1 duplicate actions.  "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"States combined",src:n(9699).Z,width:"2049",height:"1042"}),"  "),(0,o.kt)("p",null,"E2 and K1 are duplicate actions, but their environments have other actions that\nare not duplicates so we can\u2019t combine the states currently representing these\nenvironments (states 5 and 8). Instead, we create a new state (10) and let it\ncoexist with both state 5 and state 8. The same applies to states 3 and 4. State 4\nhas an action that state 3 doesn\u2019t, preventing us from treating these two states\nas duplicates. Instead, we group the 3 duplicate actions into one state (3),\nand let this state coexist with a new state (11). We replace state 4 with the\nset of states {3, 11}.  "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"NFA style",src:n(9546).Z,width:"1745",height:"1034"}),"  "),(0,o.kt)("p",null,"The graph can have cycles, and in fact a robust application will have many cycles.\nMore paths available to reach the goal will increase the probability of reaching it.\nAdding states to a fully connected graph with many cycles will increase the available\npaths exponentially. A large application will have many goals, and optimally the\nstates and transitions can be reused for these goals. An exponential growth in paths\nrelative to a linear growth in states is what reduces the complexity of the code\nwhile maintaining the robustness of the automation application.  "),(0,o.kt)("h2",{id:"4-modeling-the-environment"},"4 Modeling the Environment"),(0,o.kt)("p",null,"In figure 10, we moved the states down to group them with the actions they have\navailable to them. This is a more intuitive way to view a graph of states and\nassociated actions. In restructuring a graph of actions to a graph of states,\nwe change the focus of our analysis from process to environment. Instead of\nconsidering what actions need to be taken, we think about the environments we\nneed to pass through in order to reach our goal. This new graph resembles in\nsome ways that of a non-deterministic finite automaton in that it has sets of\nstates with transitions leading to other sets of states.  "),(0,o.kt)("p",null,"Now that we have a model of the environment, we have a way to simulate actions in\nthis environment. In restructuring our model, we have moved from programming a\nprocess flow to programming a model of our target environment. Our automation\nprogram is no longer a standalone application with a collection of processes,\nbut a specific set of instructions to be run in our modelled environment. The\nmodel of our environment, composed of states and transitions between states, is\nreferred to as the state structure.  "),(0,o.kt)("p",{align:"center",width:"350"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"state_structure",src:n(2268).Z,width:"350",height:"456"}))),"Writing an automation as a series of processes makes assumptions about the environment that are implicit but not directly stated in the code. A program that gives the statement: click A and then click B gives an assumption that B will exist after A is clicked. The model of the environment, because it is conceptual and not explicitly stated, remains difficult to visualize and impossible to work with. It is also a reason why many automation applications written as process flows will fail: the model environment defined by the assumptions often contains inconsistencies not found in the real environment: $\\widehat...env... \\neq env$.",(0,o.kt)("p",null,"In changing our focus from processes to environments we have changed our focus from\nwriting an automation process to developing a model of the environment. A good model\nis a realistic representation of the real environment. Such a model usually requires\n2 components: a description of the state of the environment and a model of causality\n(the actions that are possible and the changes they produce in the environment).  "),(0,o.kt)("h2",{id:"5-causality"},"5 Causality"),(0,o.kt)("p",null,"Our model of causality looks at actions taken on objects and the results of\nthese actions on the environment. The first component, actions taken on objects,\nis generalizable to all visual automation applications. The actions possible in a\nGUI (Graphical User Interface) are the same for every GUI. The second component,\nthe results on the environment, are application-specific since the environments\nthemselves are application-specific.   "),(0,o.kt)("p",null,"The actions taken on objects are represented by real actions that can be performed\nin a GUI. They comprise functions such as clicking, searching for images, dragging,\nand typing, and are the same functions we would use to write the actions in our\nprocess-based automation applications. We take the base functionality for these\nactions from SikuliX, a library of commands for GUI manipulation that builds on\nOpenCV for image recognition, the Java Robot class for controlling the mouse and\nkeyboard, and Tesseract for text recognition.  "),(0,o.kt)("p",null,"We then imbed causality into these functions. Searching for an image can produce\ndifferent results based on the image we are looking for and the environment we find\nourselves in. There are a couple of assumptions we make to simplify the expression\nof causality. We assume that objects belong to states and define objects accordingly\nin our code. When the environment does not include an object\u2019s state, the object does\nnot exist and won\u2019t be found. If the object\u2019s state is active in our environment,\nthe results of an action on the object will follow the object\u2019s random variable\nassociated with this action.  "),(0,o.kt)("p",null,"For example, we are in the environment with state 1 and we want to execute action D1,\nwhich involves finding an image. If this image does not belong to state 1, it will\nnot be found. If it does belong to state 1, we should expect to get a result\ncorresponding to the distribution of results for this image with respect to a find\noperation.  "),(0,o.kt)("p",{align:"center"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"action with results distribution",src:n(6565).Z,width:"1133",height:"567"}))),(0,o.kt)("p",null,"If this process seems complex, it\u2019s because it is complex. This complexity is\npart of the reason why it\u2019s prohibitive to create a simulation of the environment\nin order to test an automation application. Random variables with different outcomes\nneed to be designed for each possible action and for each object. The correct random\nvariable then needs to be sampled by the action taken to give us a result, and this\nresult needs to be incorporated into our simulation.  "),(0,o.kt)("p",null,"Once again, this is complexity that can be simplified. All of these functions can\nbe performed by a general algorithm, one that doesn\u2019t know any specifics of our\nenvironment or our object and that receives information about the environment and\nthe object as parameters. The entire process can be controlled by a framework and\nthe only thing we would need to provide would be the state structure.   "),(0,o.kt)("h2",{id:"6-the-framework"},"6 The Framework"),(0,o.kt)("p",null,"The next step is the development of a framework that can take a state structure as\ninput and create a model of the environment that allows for simulation and\nmanipulation of the environment. Given a transition from the state structure,\nit should be able to exit and enter states. Optimally, we will be able to find\npaths to a state dynamically as the program runs, and readjust our selected path\nwhen faced with unexpected changes in the environment. It is, after all, a\nstochastic process, and a robust application will need to deal with unlikely\nresults as well as expected results. Not having to code this explicitly and\nletting the framework take care of it for us will make our job as the application\ndeveloper much easier.  "),(0,o.kt)("p",null,"Figure 10 shows all potential environments, or sets of states, that we can reach\ngiven the transitions available to us. With this view of the graph, it follows\nthat we could find all potential paths to our goal by performing a search on the\nstates and associated transitions. Since each process can fail with a variety of\noutcomes, we have to account for failure when moving through paths. If the process\nfails and the states have not changed, the next best path is tried. If an action\nin the path succeeds, the active states are updated and the next action in the\npath is tried. At this point, if the current action fails, new paths need to be\nsearched for. The old paths are no longer valid since we find ourselves at a\ndifferent environment than at the beginning of the path. For example, at state 1,\nthe available paths are different than the paths available at state 6, after we\nsuccessfully transitioned with action B2.  "),(0,o.kt)("p",null,"Having a framework take care of path searching and movement from state to state\nmakes our application much simpler, as now we just need to define states and the\ntransitions between individual states. The compartmentalization of our code into\nstates and transitions also adheres to the single responsibility principle and\nfurther simplifies the code. States hold the objects that define a certain\nenvironment and transitions contain methods that can act on these objects to\nchange the environment.  "),(0,o.kt)("p",null,"This framework, called Brobot, exists already as an open source repository\nand lives here. The part of Brobot that takes care of movement within the\nenvironment is referred to as the Brobot engine. The Brobot engine takes\ncare of finding paths dynamically, traversing these paths, and keeping track\nof the active environment\u2019s state composition.  "),(0,o.kt)("p",null,"There are now 3 separate components to our automation program:  "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The Brobot engine"),(0,o.kt)("li",{parentName:"ol"},"The state structure"),(0,o.kt)("li",{parentName:"ol"},"Automation instructions")),(0,o.kt)("h2",{id:"7-the-visual-api"},"7 The Visual API"),(0,o.kt)("p",null,"API stands for Application Programming Interface. APIs are used to communicate with\nan external application, and are omnipresent in the software domain. Programs use\nAPIs to call methods from 3rd party libraries and to run tasks that depend on other\nsoftware applications. In artificial intelligence research, APIs are used to control\ngames to test and train reinforcement learning algorithms. The board game Go and\nthe RTS (Real Time Strategy) game Starcraft are two examples of games that use\nAPIs to enable automation. The famous reinforcement learning program\n",(0,o.kt)("a",{parentName:"p",href:"https://www.researchgate.net/publication/292074166_Mastering_the_game_of_Go_with_deep_neural_networks_and_tree_search"},"AlphaGo"),"\nupdates the positions of all pieces on the board based on player decisions.\nThe code that does this updating, even if it exists only as an internal class\nor as a few methods, acts as an API between the reinforcement learning algorithm\nand the game environment. In the more complex environment of StarCraft, the\ndevelopers of the game provide an API to programmers and AI researchers. The\n",(0,o.kt)("a",{parentName:"p",href:"https://news.blizzard.com/en-us/starcraft2/20944009/the-starcraft-ii-api-has-arrived"},"StarCraft API"),"\nprovides detailed information about the pieces in the game and\ntheir positions, as well as allowing a program to manipulate these pieces\naccording to the game rules. In both Go and StarCraft, $\\widehat...env... = env$ since\nthe game environments are converted to a digital representation without information\nloss. Having such a realistic model of the environment allows the researchers to\nfocus on the reinforcement learning algorithms and not worry about the accuracy\nof the game environment or the mechanics of manipulating it.  "),(0,o.kt)("p",null,"The combination of the Brobot engine with the state structure produces a visual API.\nSimilar to a traditional API, the visual API allows the developer to control an\nexternal application, which in the case of the visual API is the environment to\nbe manipulated by the automation application. This allows the automation\ninstructions to focus on business logic and ignore the details of manipulating\nthe environment. The visual API differs from a traditional API in that its functions\nproduce stochastic results. With a visual API, the model of the environment is not\nequal to the real environment $\\widehat...env... \\neq env$ but is an approximation of\nthe real environment $\\widehat...env... \\thickapprox env$. An important objective when\ncreating a visual API is to reduce the stochasticity of its functions. There "),(0,o.kt)("p",null,"are many ways to do this, and a comprehensive tutorial on building a visual API with\nBrobot can be found in ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=SmeIc06_GUg&list=PLC2shVr9gxdneSx0AuEv_YXwQsvUd9DuX"},"this video series"),"."),(0,o.kt)("p",{align:"center",width:"200"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"visual API",src:n(5485).Z,width:"435",height:"402"}))),(0,o.kt)("h2",{id:"8-testing"},"8 Testing"),(0,o.kt)("p",null,"Before diving into the problem of testing, I need to clarify what is meant by\ntesting. Testing can refer to a number of different topics, particularly with\nrespect to visual automation.  "),(0,o.kt)("p",null,"Visual automation is often used to test new software. For example, an automation\nprogram will use the software and record the results of its actions. Visual\nautomation is performed as a replacement for or supplement to manual testing,\nin which people try out software and report their observations to the company\nthat developed it. This is not the type of testing we are interested in here.  "),(0,o.kt)("p",null,"Software also gets tested during development to ensure that new functions work\ncorrectly and do not negatively impact other parts of the code. This is not a\nfinished program that tests another independent piece of software, as in the\nprevious example, but code written within a test module that accesses the methods\nand objects of the functional modules. This type of testing is an important part\nof software development, as any change to a codebase can potentially introduce\nbugs both locally and in interconnected modules. Maintaining a clean and usable\ncodebase depends on frequent and comprehensive testing of the code.  "),(0,o.kt)("p",null,"Testing code has two main flavors: unit tests and integration tests. Unit tests\ntake a small part of the code and test its functionality under different scenarios.\nThe same process applies to integration tests, but at a larger scale. Integration\ntests assess whether different parts of the program work well together. Normally,\nthe application is complex and the tests are there to test this complexity in\nsmaller pieces, whether unit tests or integration tests. These tests introduce\ndifferent environments, represented by the inputs they provide to the algorithm,\nin order to see how the algorithm behaves in these environments.  "),(0,o.kt)("p",null,"Visual automation programs are typically not tested. They are not tested because\ntesting requires modeling the environment, which we saw introduces more complexity\nthan exists in a process-based automation application.  "),(0,o.kt)("p",null,"When we test visual automation, we are testing whether the automation will work in\nour target environment. If our simulated environment is a good approximation of the\nreal environment, the tests should be useful. A failed test could mean that our\nautomation application has issues. On the other hand, a failed test also could\nimply that our simulated environment is not realistic. In this case, the automation\napplication would serve as a test of our model of the environment, as opposed to\nthe simulated environment being a test of the application. It\u2019s important to\ndecide what our goal should be, whether we would rather develop a realistic\nsimulation or whether we want to develop an effective automation application.\nThe answer is, of course, both, because in the end we want to have a good\nautomation application, but to achieve this we need a realistic simulation.   "),(0,o.kt)("h2",{id:"9-simulation-vs-real-execution"},"9 Simulation vs Real Execution"),(0,o.kt)("p",null,"Our visual API needs to be able to execute our automation instructions as\nreal actions as well as simulated actions. Real execution depends on our\nmodel of the environment in the same way that simulated execution does.\nRecognizing states, finding and following paths, and moving between states\nall require the same underlying model of the environment. The difference\nbetween simulation and real execution is that the results of these processes\nwill be determined either by simulated input from random variables or by real\noperations carried out with the screen\u2019s input, the mouse, and the keyboard.\nThe framework receives inputs from either simulation or real execution in the\nsame format. It contains a layer of code that abstracts the execution of\nactions and makes the simulation agnostic to whether it is being simulated\nor not. This layer sits between the classes and external libraries that perform\nreal or mock actions and the classes that process actions. The abstraction\nlayer decides whether to perform a mock or a real action. The framework does\nnot know, at any point above this abstraction layer, if the operation is being\nmocked or executed on the real environment.  "),(0,o.kt)("p",{align:"center"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"wrapper structure",src:n(7161).Z,width:"1297",height:"711"}))),(0,o.kt)("h2",{id:"10-simulation"},"10 Simulation"),(0,o.kt)("p",null,"In order to capture the stochastic nature of real automation, objects are\ninitialized with the historical results of different actions. The results\ncan be either taken from screenshots of the environment, as is done by\nBrobot\u2019s state structure builder, or coded by hand. These data act as\nthe outcomes of a random variable and provides a discrete distribution\nof action-specific results from which to sample.  "),(0,o.kt)("p",null,"Below is an example of an object in a mobile game and its random variable.\nThe image shows a state with 5 objects. The first object, called name reg,\nis a region object. Its random variable describes the results of a text\nretrieval operation on the region, which can be Farms, Mines, Lakes,\nMountains, Forest, or Castle. The categories of the random variable\ninclude additionally the entries Forms and Minez to simulate the imperfect\nretrieval of data during visual automation. This example is taken from the\n",(0,o.kt)("a",{parentName:"p",href:"/brobot/docs/tutorial-basics/intro"},"basic tutorial"),", which shows how to automate\nthe creation of a labeled image dataset.   "),(0,o.kt)("p",{align:"center"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DOT island",src:n(1445).Z,width:"1499",height:"589"}))),(0,o.kt)("p",{align:"center"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"results freq dot",src:n(6093).Z,width:"1546",height:"730"}))),(0,o.kt)("p",null,"The next example depicts a character fishing in a computer game. When the\ncharacter begins to reel the fish in, a series of letters appears on the screen,\nwhich an automation program would need to press in order to catch the fish. A\nrandom variable describes the likelihood of the letter \u201eW\u201c appearing in each of\nthe 10 different spots. This is portrayed here as 10 different random variables,\none for each spot. This example is taken from the\n",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=SmeIc06_GUg&list=PLC2shVr9gxdneSx0AuEv_YXwQsvUd9DuX"},"video series")," that shows how to\nuse Brobot\u2019s state structure builder to automate the creation of an environment\u2019s\nstate structure.  "),(0,o.kt)("p",{align:"center"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"fishing side-by-side",src:n(7697).Z,width:"642",height:"360"}))),(0,o.kt)("p",{align:"center"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"results freq bdo",src:n(9715).Z,width:"1548",height:"660"}))),(0,o.kt)("p",null,"In the state structure, all objects belonging to a state are defined inside of\nthe state\u2019s class. State objects conceptually have random variables associated\nwith each action performed on them. These random variables materialize in the\ncode as historical results, and are initialized with the object. The below example\nshows an object created with Brobot\u2019s state structure builder. It is initialized\nwith the results of Find.ALL operations on screenshots of the environment\n(a Find.ALL operation returns all matches for the given image), each result\ncontaining a variable number of matches and their locations. Empty matches\ncould be provided to depict a failed find operation. A sample from this collection\nof results would be selected during a find operation in a simulation.   "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    private final StateImageObject W = new StateImageObject.Builder() \n        .withImages("fishCatch-W2", "fishCatch-W3", "fishCatch-W_76,122,179,225_m_v")\n        .isFixed(false)\n        .withSearchRegion(787,388,371,60)\n        .addSnapshot(new MatchSnapshot.Builder()\n            .setActionOptions(ActionOptions.Find.ALL)\n            .addMatch(856,392,25,43)\n            .addMatch(782,392,25,43)\n            .addMatch(930,392,25,43)\n            .build())\n        .addSnapshot(new MatchSnapshot.Builder()\n            .setActionOptions(ActionOptions.Find.ALL)\n            .addMatch(777,394,25,44)\n            .build())\n        .addSnapshot(new MatchSnapshot.Builder()\n            .setActionOptions(ActionOptions.Find.ALL)\n            .addMatch(779,395,25,44)\n            .build())  \n        .addSnapshot(new MatchSnapshot.Builder()\n            .setActionOptions(ActionOptions.Find.ALL)\n            .addMatch(791,393,25,44)\n            .addMatch(828,393,25,44)\n            .addMatch(865,393,25,44)\n            .build())  \n        .build();\n')),(0,o.kt)("h2",{id:"11-discussion"},"11 Discussion"),(0,o.kt)("p",null,"In the same way the API provides a way for applications to communicate with each\nother, a visual API allows an automation application to communicate with its\nenvironment. It\u2019s my hope that the visual API will serve as a standard for the\ndevelopment of robust automation solutions, and that it will grow along with\nadvancements in machine vision to provide reliable and comprehensive access to\ngraphical environments."))}p.isMDXComponent=!0},1729:function(e,t,n){t.Z=n.p+"assets/images/3layers-d6963d96036b6a6846cec90f2d852272.png"},8373:function(e,t,n){t.Z=n.p+"assets/images/3processes-1b64b645e8afac863d097455f23ea045.png"},1445:function(e,t,n){t.Z=n.p+"assets/images/DOT_island-e4534ee148a1c8b2624b78f5ba6a924c.png"},6565:function(e,t,n){t.Z=n.p+"assets/images/action_results_dist-69e0d0435a1c15273ccee5365b2b5ee7.png"},6967:function(e,t,n){t.Z=n.p+"assets/images/basic1-d2f219684b509295abad50afc40ff055.png"},4214:function(e,t,n){t.Z=n.p+"assets/images/compounding-83cf3c9b2209945c850e8a53c4765d1e.png"},3782:function(e,t,n){t.Z=n.p+"assets/images/distribution2-a901524be886e85b53218b938d0db38f.png"},7697:function(e,t,n){t.Z=n.p+"assets/images/fishing_side-by-side-34073f1bccaa59e96ae705e8cfa0231f.png"},19:function(e,t,n){t.Z=n.p+"assets/images/graph1-7351118671cbf2d7446c3ec656fcc512.png"},9546:function(e,t,n){t.Z=n.p+"assets/images/nfa_style-a59b6adb68a7406e15618a369dd9ccf9.png"},4718:function(e,t,n){t.Z=n.p+"assets/images/repeating_processes-0caed05b5fea2d8804f9ea8f3349b15b.png"},9715:function(e,t,n){t.Z=n.p+"assets/images/results_freq_bdo-f9e59c2cb09b55d21d664621a1d92f15.png"},6093:function(e,t,n){t.Z=n.p+"assets/images/results_freq_dot-8da8da13daa22aeede8ff40a245f21c5.png"},2268:function(e,t,n){t.Z=n.p+"assets/images/simple_state_structure-15c881fdee1d5c442282d0b460a54445.png"},2737:function(e,t,n){t.Z=n.p+"assets/images/states-128b1de5d78012e941a7958474eade63.png"},9699:function(e,t,n){t.Z=n.p+"assets/images/states_combined-e7b79ba211925874f3f8e5bffa4442a6.png"},5485:function(e,t,n){t.Z=n.p+"assets/images/visual_API-34b0d303e87b01dbc0d3aa108658f0cb.png"},7161:function(e,t,n){t.Z=n.p+"assets/images/wrapper_structure-c273a79d437295ec8315b18fa2e5f351.png"}}]);