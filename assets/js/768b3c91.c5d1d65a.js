"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[171],{8620:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return u}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],s={sidebar_position:2,custom_edit_url:null},p="The Shop Plugin",d={unversionedId:"The Shop Plugin",id:"The Shop Plugin",isDocsHomePage:!1,title:"The Shop Plugin",description:"This plugin is made for economy servers. It features 2 main commands:",source:"@site/docs/The Shop Plugin.md",sourceDirName:".",slug:"/The Shop Plugin",permalink:"/docs/The Shop Plugin",editUrl:null,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/docs/Intro"},next:{title:"Moderation Essentials",permalink:"/docs/Moderation Essentials"}},m=[{value:"/shop Info",id:"shop-info",children:[]},{value:"/editshop Info",id:"editshop-info",children:[{value:"SubCommands",id:"subcommands",children:[]},{value:"<strong><em>Sub Command Definitions:</em></strong>",id:"sub-command-definitions",children:[]},{value:"READ THIS:",id:"read-this",children:[]},{value:"Command examples:",id:"command-examples",children:[]}]}],l={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-shop-plugin"},"The Shop Plugin"),(0,o.kt)("p",null,"This plugin is made for economy servers. It features ",(0,o.kt)("strong",{parentName:"p"},"2 main commands"),":\n",(0,o.kt)("inlineCode",{parentName:"p"},"/shop")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"/editshop")),(0,o.kt)("h2",{id:"shop-info"},"/shop Info"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"/shop")," has no arguments(sub commands), it opens the shop."),(0,o.kt)("h2",{id:"editshop-info"},"/editshop Info"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"/editshop")," is an ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"OP"))," only command since it's used to edit the items of the shop, it has ",(0,o.kt)("strong",{parentName:"p"},"5")," main sub commands(they have to be in order or the command will fail). "),(0,o.kt)("h3",{id:"subcommands"},"SubCommands"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Category, Type: String"),(0,o.kt)("li",{parentName:"ul"},"Procedure, Type: String"),(0,o.kt)("li",{parentName:"ul"},"Material, Type: String"),(0,o.kt)("li",{parentName:"ul"},"Price, Type: Positive Integer"),(0,o.kt)("li",{parentName:"ul"},"Quantity, Type: Positive Integer"),(0,o.kt)("li",{parentName:"ul"},"Material2 (seldom, check READ THIS for more info), Type: String")),(0,o.kt)("h3",{id:"sub-command-definitions"},(0,o.kt)("strong",{parentName:"h3"},(0,o.kt)("em",{parentName:"strong"},"Sub Command Definitions:"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Category:")," Category is the type of the material that is being added, there are ",(0,o.kt)("strong",{parentName:"p"},"6")," main types: ",(0,o.kt)("inlineCode",{parentName:"p"},"blocks")," ",(0,o.kt)("inlineCode",{parentName:"p"},"weapons")," ",(0,o.kt)("inlineCode",{parentName:"p"},"tools")," ",(0,o.kt)("inlineCode",{parentName:"p"},"customs")," ",(0,o.kt)("inlineCode",{parentName:"p"},"redstone")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"currency"),". the ",(0,o.kt)("inlineCode",{parentName:"p"},"blocks")," type is used for building blocks i.e: stone, the ",(0,o.kt)("inlineCode",{parentName:"p"},"weapons")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"tools")," types are self-explanatory, ",(0,o.kt)("inlineCode",{parentName:"p"},"redstone")," is used for redstone materials i.e: observer, ",(0,o.kt)("inlineCode",{parentName:"p"},"customs")," is used for custom items and enchanted items, in other words any modified vanilla or non vanilla item falls under this type, ",(0,o.kt)("inlineCode",{parentName:"p"},"currency")," is for currency exchanges, in other words trading diamonds for any other valuable ingot(s), i.e: gold ingots.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Procedure:")," Procedure is the process of adding or removing an item from the shop. ",(0,o.kt)("inlineCode",{parentName:"p"},"add")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"remove"),". ",(0,o.kt)("strong",{parentName:"p"},"Please note that if the ",(0,o.kt)("inlineCode",{parentName:"strong"},"Category")," is ",(0,o.kt)("inlineCode",{parentName:"strong"},"customs"),", the sub commands will become: ",(0,o.kt)("inlineCode",{parentName:"strong"},"customadd")," and ",(0,o.kt)("inlineCode",{parentName:"strong"},"customrem")," and the ",(0,o.kt)("inlineCode",{parentName:"strong"},"Material")," and ",(0,o.kt)("inlineCode",{parentName:"strong"},"Quantity")," shall not be included, i.e: ",(0,o.kt)("inlineCode",{parentName:"strong"},"/editshop customs customadd/customrem 1"),", with ",(0,o.kt)("inlineCode",{parentName:"strong"},"1")," being the ",(0,o.kt)("inlineCode",{parentName:"strong"},"Price")),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Material:")," it's the item material i.e diamond.\n",(0,o.kt)("strong",{parentName:"p"},"NOTE: don't use spaces, use ",(0,o.kt)("inlineCode",{parentName:"strong"},"_")," between every word, i.e: diamond_sword"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Price:")," it's the price in diamonds. ",(0,o.kt)("strong",{parentName:"p"},"The input has to be a positive integer, without the word ",(0,o.kt)("inlineCode",{parentName:"strong"},"diamonds"),", i.e: 8"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Quantity:")," it's the quantity of the item being sold, ",(0,o.kt)("strong",{parentName:"p"},"The input has to be a positive integer, i.e: 8")))),(0,o.kt)("h3",{id:"read-this"},"READ THIS:"),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"Category")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"currency"),", then there will be an extra field, ",(0,o.kt)("inlineCode",{parentName:"p"},"Material2"),", it's gonna be the material of the price, i.e, gold ingots. That way it's possible to buy diamonds. Command example: ",(0,o.kt)("inlineCode",{parentName:"p"},"/editshop currency add diamond 64 1 gold_ingot")),(0,o.kt)("h3",{id:"command-examples"},"Command examples:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"/editshop blocks add stone 64 1")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"/editshop blocks remove bedrock 3 2")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"/editshop customs customadd 2")))}u.isMDXComponent=!0}}]);