"use strict";(self.webpackChunktquic_website=self.webpackChunktquic_website||[]).push([[5091],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(o),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return o?n.createElement(h,r(r({ref:t},c),{},{components:o})):n.createElement(h,r({ref:t},c))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var u=2;u<i;u++)r[u]=o[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},2961:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=o(7462),a=(o(7294),o(3905));const i={title:"How to contribute codes",sidebar_position:1},r="How to contribute codes",l={unversionedId:"how_to_contribute/contribute_codes",id:"how_to_contribute/contribute_codes",title:"How to contribute codes",description:"The purpose of this document is to guide you through the process of developing TQUIC in a local environment and submitting your changes to the official TQUIC repository.",source:"@site/docs/how_to_contribute/contribute_codes.md",sourceDirName:"how_to_contribute",slug:"/how_to_contribute/contribute_codes",permalink:"/docs/how_to_contribute/contribute_codes",draft:!1,editUrl:"https://github.com/tencent/tquic-website/tree/main/packages/create-docusaurus/templates/shared/docs/how_to_contribute/contribute_codes.md",tags:[],version:"current",lastUpdatedBy:"Sijie Yang",lastUpdatedAt:1704969930,formattedLastUpdatedAt:"Jan 11, 2024",sidebarPosition:1,frontMatter:{title:"How to contribute codes",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Contributing",permalink:"/docs/category/contributing"},next:{title:"How to contribute documents",permalink:"/docs/how_to_contribute/contribute_docs"}},s={},u=[{value:"Guide of local development",id:"guide-of-local-development",level:2},{value:"Requirements of coding",id:"requirements-of-coding",level:3},{value:"Fork",id:"fork",level:3},{value:"Clone",id:"clone",level:3},{value:"Create local branch",id:"create-local-branch",level:3},{value:"Start development",id:"start-development",level:3},{value:"Build and test",id:"build-and-test",level:3},{value:"Commit",id:"commit",level:3},{value:"Keep the latest local repository",id:"keep-the-latest-local-repository",level:3},{value:"Push to remote repository",id:"push-to-remote-repository",level:3},{value:"Guide of submitting Pull Request to GitHub",id:"guide-of-submitting-pull-request-to-github",level:2},{value:"Create an Issue and finish Pull Request",id:"create-an-issue-and-finish-pull-request",level:3},{value:"Pass unit tests",id:"pass-unit-tests",level:3},{value:"Delete remote branch",id:"delete-remote-branch",level:3},{value:"Delete local branch",id:"delete-local-branch",level:3},{value:"Certain regulations about code review",id:"certain-regulations-about-code-review",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-contribute-codes"},"How to contribute codes"),(0,a.kt)("p",null,"The purpose of this document is to guide you through the process of developing TQUIC in a local environment and submitting your changes to the official TQUIC repository."),(0,a.kt)("h2",{id:"guide-of-local-development"},"Guide of local development"),(0,a.kt)("p",null,"The guidelines in this section will help you develop TQUIC in a local environment."),(0,a.kt)("h3",{id:"requirements-of-coding"},"Requirements of coding"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Please refer to the coding format of Rust language."),(0,a.kt)("li",{parentName:"ul"},"Unit test is needed for all codes. All unit tests should be passed."),(0,a.kt)("li",{parentName:"ul"},"Please follow ",(0,a.kt)("a",{parentName:"li",href:"contribute_codes/#guide-of-submitting-pull-request-to-github"},"regulations of submitting codes"),".")),(0,a.kt)("h3",{id:"fork"},(0,a.kt)("a",{parentName:"h3",href:"https://help.github.com/articles/fork-a-repo/"},"Fork")),(0,a.kt)("p",null,"Visit the home page of GitHub ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tencent/tquic"},"TQUIC"),", and then click button ",(0,a.kt)("inlineCode",{parentName:"p"},"Fork")," to generate your own copy of TQUIC, such as ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/USERNAME/tquic"},"https://github.com/USERNAME/tquic")),(0,a.kt)("h3",{id:"clone"},"Clone"),(0,a.kt)("p",null,"Clone the forked repository to local:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/USERNAME/tquic\n$ cd tquic\n")),(0,a.kt)("h3",{id:"create-local-branch"},"Create local branch"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"http://nvie.com/posts/a-successful-git-branching-model/"},"Git stream branch model")," is currently applied to TQUIC for the purposes of development, testing, release and maintenance. For more details, please refer to ",(0,a.kt)("a",{parentName:"p",href:"./releasing_process/"},"branch regulation of TQUIC"),"."),(0,a.kt)("p",null,"The development tasks for new features and bug fixes should be completed in a separate branch that branches off from the ",(0,a.kt)("inlineCode",{parentName:"p"},"develop")," branch."),(0,a.kt)("p",null,"Create and switch to a new branch with the command ",(0,a.kt)("inlineCode",{parentName:"p"},"git checkout -b"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ git checkout -b my-cool-stuff\n")),(0,a.kt)("p",null,"It is worth noting that before the checkout, it is important to ensure the current branch directory is clean. Otherwise, any untracked files will be brought to the new branch and can be viewed by ",(0,a.kt)("inlineCode",{parentName:"p"},"git status")," ."),(0,a.kt)("h3",{id:"start-development"},"Start development"),(0,a.kt)("p",null,"I create a new file in the case. View the current state via ",(0,a.kt)("inlineCode",{parentName:"p"},"git status"),", which will prompt some changes to the current directory, and you can also view the file's specific changes via ",(0,a.kt)("inlineCode",{parentName:"p"},"git diff")," ."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ git status\nOn branch test\nUntracked files:\n  (use "git add <file>..." to include in what will be committed)\n    test\nno changes added to commit (use "git add" and/or "git commit -a")\n')),(0,a.kt)("h3",{id:"build-and-test"},"Build and test"),(0,a.kt)("p",null,"Please refer to ",(0,a.kt)("a",{parentName:"p",href:"../getting_started/installation/"},"Installation")," about construction and test."),(0,a.kt)("h3",{id:"commit"},"Commit"),(0,a.kt)("p",null,"Next we submit the new added test file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ git status\nOn branch test\nUntracked files:\n  (use "git add <file>..." to include in what will be committed)\n    test\nnothing added to commit but untracked files present (use "git add" to track)\n$ git add test\n')),(0,a.kt)("p",null,"It's required that the commit message is also given on every Git commit, so that other developers can be informed about the changes made. Type ",(0,a.kt)("inlineCode",{parentName:"p"},"git commit")," to realize it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ git commit\n[my-cool-stuff c703c041] add test file\n 1 file changed, 0 insertions(+), 0 deletions(-)\n create mode 100644 233\n")),(0,a.kt)("h3",{id:"keep-the-latest-local-repository"},"Keep the latest local repository"),(0,a.kt)("p",null,"It needs to keep up with the latest code of the original repository(",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tencent/tquic"},"https://github.com/tencent/tquic"),") before Pull Request."),(0,a.kt)("p",null,"Check the name of the current remote repository with ",(0,a.kt)("inlineCode",{parentName:"p"},"git remote"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ git remote\norigin\n$ git remote -v\norigin  https://github.com/USERNAME/tquic (fetch)\norigin  https://github.com/USERNAME/tquic (push)\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"origin")," is the name of the remote repository that we clone, which is also the TQUIC under your own account. Next we create a remote of an original TQUIC and name it upstream."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ git remote add upstream https://github.com/tencent/tquic\n$ git remote\norigin\nupstream\n")),(0,a.kt)("p",null,"Get the latest code of upstream and update the current branch."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ git fetch upstream\n$ git pull upstream develop\n")),(0,a.kt)("h3",{id:"push-to-remote-repository"},"Push to remote repository"),(0,a.kt)("p",null,"Push local modification to GitHub(",(0,a.kt)("inlineCode",{parentName:"p"},"https://github.com/USERNAME/tquic"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ git push origin my-cool-stuff\n")),(0,a.kt)("h2",{id:"guide-of-submitting-pull-request-to-github"},"Guide of submitting Pull Request to GitHub"),(0,a.kt)("p",null,"You will learn how to contribute your changes to the official repository of TQUIC following the guidelines provided in this section."),(0,a.kt)("h3",{id:"create-an-issue-and-finish-pull-request"},"Create an Issue and finish Pull Request"),(0,a.kt)("p",null,"Create an Issue to describe your problem and keep its number."),(0,a.kt)("p",null,"Switch to the branch you have created and click ",(0,a.kt)("inlineCode",{parentName:"p"},"New pull request"),"."),(0,a.kt)("p",null,"Switch to the targeted branch. A note of ",(0,a.kt)("inlineCode",{parentName:"p"},"resolve #Issue number")," in Pull Request description results in automatic close of corresponding Issue after the merge of PR. More details can be viewed ",(0,a.kt)("a",{parentName:"p",href:"https://help.github.com/articles/closing-issues-via-commit-messages/"},"here"),"."),(0,a.kt)("p",null,"Please wait for the review. If any modifications are necessary, you can update the corresponding branch in origin by following the steps above."),(0,a.kt)("h3",{id:"pass-unit-tests"},"Pass unit tests"),(0,a.kt)("p",null,"Every new commit in your Pull Request will trigger CI unit tests, so please ensure that necessary comments have been included in your commit message. Please refer to ",(0,a.kt)("a",{parentName:"p",href:"./contribute_codes/#commit"},"commit"),"."),(0,a.kt)("p",null,"Please note the procedure of CI unit tests in your Pull Request which will be finished in several minutes."),(0,a.kt)("p",null,"Green ticks after all tests means that your commit has passed all unit tests. Red cross after the tests means your commit hasn't passed certain unit test. Please click detail to view bug details and make a screenshot of the bug, then add it as a comment in your Pull Request. Our stuff will help you check it."),(0,a.kt)("h3",{id:"delete-remote-branch"},"Delete remote branch"),(0,a.kt)("p",null,"We can delete branches of remote repository in Pull Request page after your Pull Request is successfully merged into master repository."),(0,a.kt)("p",null,"We can also delete the branch of remote repository with ",(0,a.kt)("inlineCode",{parentName:"p"},"git push origin :the_branch_name"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ git push origin :my-cool-stuff\n")),(0,a.kt)("h3",{id:"delete-local-branch"},"Delete local branch"),(0,a.kt)("p",null,"Finally, we delete the local branch"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ git checkout develop # switch to develop branch\n$ git branch -D my-cool-stuff # delete my-cool-stuff branch\n\n")),(0,a.kt)("p",null,"And now we finish a full process of code contribution"),(0,a.kt)("h2",{id:"certain-regulations-about-code-review"},"Certain regulations about code review"),(0,a.kt)("p",null,"In order that reviewers focus on code in the code review, please follow these rules every time you submit your code:"),(0,a.kt)("p",null,"(1) Make sure that unit tests in Travis-CI pass through successfully."),(0,a.kt)("p",null,"If it fails, it means problems have been found in submitted code which will not be reviewed by reviewers."),(0,a.kt)("p",null,"(2) Before the submit of Pull Request:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Please note the number of commits:\nKeep commit concise as much as possible at every submit. You can make a supplement to the previous commit with ",(0,a.kt)("inlineCode",{parentName:"p"},"git commit --amend"),". About several commits having been pushed to remote repository, you can refer to ",(0,a.kt)("a",{parentName:"p",href:"http://stackoverflow.com/questions/5667884/how-to-squash-commits-in-git-after-they-have-been-pushed"},"squash commits after push"),"\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Pay attention to the name of every commit: It would be better to abstract the content of the present commit and be not too arbitrary."))),(0,a.kt)("p",null,"(3) If you have tackled with problems of an Issue, please add ",(0,a.kt)("inlineCode",{parentName:"p"},"fix #issue_number")," to the * ",(0,a.kt)("em",{parentName:"p"},"first")," comment area of Pull Request. Then the corresponding Issue will be closed automatically after the merge of Pull Request. Keywords are including: close, closes, closed, fix, fixes, fixed, resolve, resolves, resolved. Please select an appropriate word. Please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://help.github.com/articles/closing-issues-via-commit-messages"},"Closing issues via commit messages")," for more details."),(0,a.kt)("p",null,"In addition, please follow the following regulations in response to the suggestion of reviewers:"),(0,a.kt)("p",null,"(1) A reply to every comment of reviewers\uff08It's a fundamental complimentary conduct in open source community. An expression of appreciation is a need for help from others):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you adopt the suggestion of reviewer and make a modification accordingly, it's courteous to reply with a simple ",(0,a.kt)("inlineCode",{parentName:"li"},"Done")," ."),(0,a.kt)("li",{parentName:"ul"},"Please clarify your reason for the disagreenment")),(0,a.kt)("p",null,"(2) If there are many suggestions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Please show general modification"),(0,a.kt)("li",{parentName:"ul"},"Please follow ",(0,a.kt)("a",{parentName:"li",href:"https://help.github.com/articles/reviewing-proposed-changes-in-a-pull-request/"},"start a review")," to give your reply, instead of directly replying for that every comment will result in sending an email causing email disaster.")))}d.isMDXComponent=!0}}]);