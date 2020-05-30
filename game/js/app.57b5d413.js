(function(e){function t(t){for(var r,c,o=t[0],i=t[1],l=t[2],u=0,g=[];u<o.length;u++)c=o[u],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&g.push(n[c][0]),n[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(g.length)g.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,c=1;c<a.length;c++){var i=a[c];0!==n[i]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},n={app:0},s=[];function c(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"a7201717"}[e]+".js"}function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=n[e]=[t,r]}));t.push(a[2]=r);var s,i=document.createElement("script");i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.src=c(e);var l=new Error;s=function(t){i.onerror=i.onload=null,clearTimeout(u);var a=n[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",l.name="ChunkLoadError",l.type=r,l.request=s,a[1](l)}n[e]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:i})}),12e4);i.onerror=i.onload=s,document.head.appendChild(i)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/game/",o.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("d5e8"),a("5363"),a("907d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v("| "),a("router-link",{attrs:{to:"/about"}},[e._v("About")]),e._v("| "),a("router-link",{attrs:{to:"/game"}},[e._v("Game")])],1),a("router-view")],1)])},s=[],c={name:"App",data:function(){return{}}},o=c,i=a("2877"),l=Object(i["a"])(o,n,s,!1,null,null,null),u=l.exports,d=a("9483");Object(d["a"])("".concat("/game/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});a("d3b7");var g=a("8c4f"),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"})},m=[],h={name:"Home"},v=h,p=Object(i["a"])(v,f,m,!1,null,null,null),_=p.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"game",on:{click:e.unselect}},[a("div",{staticClass:"game_board",class:["game_board-size-"+e.game.settings.size],on:{click:e.stopPropagation}},e._l(e.game.board,(function(t,r){return a("div",{directives:[{name:"ripple",rawName:"v-ripple"}],key:r,staticClass:"game_cell",class:[{"game_cell-selectable":e.selectable(r,t.owner,t.dice)},{"game_cell-selected":r===e.game.selected},{"game_cell-borderTop":e.borderTop(r,t.owner)},{"game_cell-borderRight":e.borderRight(r,t.owner)},{"game_cell-borderBottom":e.borderBottom(r,t.owner)},{"game_cell-borderLeft":e.borderLeft(r,t.owner)},"game_cell-owner-"+t.owner],attrs:{depressed:r!==e.game.selected},on:{click:function(a){return e.select(r,t.owner)}}},[a("div",{staticClass:"game_cell_dices"},[a("div",{staticClass:"game_cell_dices_left"},e._l(Math.min(t.dice,4),(function(e,t){return a("div",{key:t,staticClass:"game_cell_dice"})})),0),t.dice>4?a("div",{staticClass:"game_cell_dices_right"},e._l(t.dice-4,(function(e,t){return a("div",{key:t,staticClass:"game_cell_dice"})})),0):e._e()])])})),0),a("GameControls")],1)},b=[],w=(a("caad"),a("2532"),a("5530")),k=a("2f62"),S=(a("4de4"),a("c740"),a("4160"),a("c975"),a("d81d"),a("a434"),a("159b"),a("d4ec")),C=a("bee2"),P=a("ade3"),O={board:[],selected:null,player:{},players:[],adjacents:[],settings:{players:4,size:4},results:{}},j={getBoard:function(){return JSON.parse(JSON.stringify(O.board))},getCell:function(e){return JSON.parse(JSON.stringify(O.board[e]))},getSelected:function(){return JSON.parse(JSON.stringify(O.selected))},getPlayer:function(){return JSON.parse(JSON.stringify(O.player))},getPlayers:function(){return JSON.parse(JSON.stringify(O.players))},getAdjacents:function(){return JSON.parse(JSON.stringify(O.adjacents))},getSettings:function(){return JSON.parse(JSON.stringify(O.settings))},getResults:function(){return JSON.parse(JSON.stringify(O.results))}},A={setBoard:function(e,t){e.board=t},setCell:function(e,t){r["default"].set(e.board,t.i,t.data)},setSelected:function(e,t){e.selected=t},setPlayer:function(e,t){e.player=t},setPlayers:function(e,t){e.players=t},setAdjacents:function(e,t){e.adjacents=t},setSetting:function(e,t){e.settings=Object(w["a"])(Object(w["a"])({},e.settings),{},Object(P["a"])({},t.key,t.value))},setResults:function(e,t){e.results=t}},x={changeBoard:function(e,t){var a=e.commit;a("setBoard",t)},changeCell:function(e,t){var a=e.commit;a("setCell",t)},changeSelected:function(e,t){var a=e.commit;a("setSelected",t)},changePlayer:function(e,t){var a=e.commit;a("setPlayer",t)},changePlayers:function(e,t){var a=e.commit;a("setPlayers",t)},changeAdjacents:function(e,t){var a=e.commit;a("setAdjacents",t)},changeSetting:function(e,t){var a=e.commit;a("setSetting",t)},changeResults:function(e,t){var a=e.commit;a("setResults",t)}},N={namespaced:!0,state:O,getters:j,actions:x,mutations:A};r["default"].use(k["a"]);var M=new k["a"].Store({state:{},mutations:{},actions:{},modules:{game:N}}),J=[[.837963,.443673,.152006,.03588,.006105,766e-6,71e-6,5e-6],[.972994,.778549,.453575,.191701,.060713,.014879,.00289,452e-6],[.997299,.939236,.742831,.459528,.220442,.083423,.02545,.006379],[.99985,.98794,.909347,.718078,.463654,.242449,.103626,.036742],[.999996,.998217,.9753,.883953,.699616,.466731,.259984,.121507],[1,.999801,.994663,.961536,.862377,.685165,.469139,.274376],[1,.999983,.999069,.989534,.947731,.843874,.673456,.471091]],B=function(){function e(){Object(S["a"])(this,e)}return Object(C["a"])(e,[{key:"aiMove",value:function(e){var t=M.getters["game/getPlayer"],a=M.getters["game/getBoard"],r=M.getters["game/getAdjacents"],n=a.filter((function(e){return e.owner===t.id&&e.dice>1})),s=[];return 0!==n.length&&(n.forEach((function(n){r[n.id].forEach((function(r){var c=a[r];if(c.owner!==t.id){var o=J[n.dice-2][c.dice-1];if(o>(e>0?.5:.44)){var i={attacker:n.id,defender:r,probability:o};s.push(i)}}}))})),console.log("moves",s),0!==s.length&&(s.sort((function(e,t){return e.probability<t.probability?1:-1})),s[0]))}}]),e}(),z=new B,D=function(){function e(){Object(S["a"])(this,e)}return Object(C["a"])(e,[{key:"changeBoard",value:function(){for(var e=M.getters["game/getSettings"],t=[],a=Math.pow(e.size,2),r=Math.floor(a/e.players),n=a%e.players,s=function(){var e=[],a=0,s=c-n<0?r+1:r;for(o=0;o<s;o++){var l=Math.floor(3*Math.random())+1;a+=l,e.push(l)}var u=3*s/a;for(e=e.map((function(e){return Math.round(e*u)})),i=0;i<s;i++)t.push({owner:c,dice:e[i]})},c=0;c<e.players;c++){var o,i;s()}t=t.sort((function(){return Math.random()-.5})),t=t.map((function(e,t){return e.id=t,e})),this.setAdjacents(),M.dispatch("game/changeBoard",t)}},{key:"startGame",value:function(){var e=M.getters["game/getSettings"];this.changeBoard();for(var t=[],a=0;a<e.players;a++){var r={id:a,size:this.calculateAdd(a),reserve:0};t.push(r)}M.dispatch("game/changePlayer",t[0]),M.dispatch("game/changePlayers",t),M.dispatch("game/changeSelected",null)}},{key:"setAdjacents",value:function(){for(var e=M.getters["game/getSettings"].size,t=[],a=Math.pow(e,2),r=0;r<a;r++){var n=[];r%e&&n.push(r-1),(r+1)%e&&n.push(r+1),r>=e&&n.push(r-e),r<e*e-e&&n.push(r+e),t.push(n)}M.dispatch("game/changeAdjacents",t)}},{key:"changeSelected",value:function(e){M.dispatch("game/changeSelected",e)}},{key:"changePlayer",value:function(e){M.dispatch("game/changePlayer",e)}},{key:"attack",value:function(e){var t=M.getters["game/getSelected"],a=M.getters["game/getBoard"],r=a[t],n=a[e],s=this.dice(r.dice),c=this.dice(n.dice),o=n.owner;s.cell=t,c.cell=e,s.total>c.total?(n.dice=r.dice-1,n.owner=r.owner,M.dispatch("game/changeCell",{i:e,data:n}),this.checkLost(o)||(n.dice>1?M.dispatch("game/changeSelected",e):M.dispatch("game/changeSelected",null),this.calculateAdd(o))):M.dispatch("game/changeSelected",null),this.calculateAdd(r.owner),r.dice=1,M.dispatch("game/changeResults",{attacker:r.owner,defender:o,attackerDice:s,defenderDice:c}),M.dispatch("game/changeCell",{i:t,data:r})}},{key:"dice",value:function(e){for(var t=0,a=[],r=0;r<e;r++){var n=Math.floor(6*Math.random())+1;a.push(n),t+=n}return{total:t,dice:a}}},{key:"checkLost",value:function(e){var t=M.getters["game/getBoard"],a=M.getters["game/getPlayers"];if(!t.filter((function(t){return t.owner===e})).length){var r=a.findIndex((function(t){return t.id===e}));if(a.splice(r,1),M.dispatch("game/changePlayers",a),1===a.length)return M.dispatch("game/changeSelected",null),console.log("win!"),!0}return!1}},{key:"nextPlayer",value:function(){this.applyAdd();var e=M.getters["game/getPlayer"],t=M.getters["game/getPlayers"],a=t.findIndex((function(t){return t.id===e.id})),r=t[(a+1)%t.length];M.dispatch("game/changePlayer",r),M.dispatch("game/changeSelected",null),r.id>0&&this.aiMoves(0)}},{key:"aiMoves",value:function(e){var t=this,a=z.aiMove();!1!==a?setTimeout((function(){t.changeSelected(a.attacker),setTimeout((function(){t.attack(a.defender),setTimeout((function(){t.aiMoves(e++)}),500)}),500)}),500):this.nextPlayer()}},{key:"getPlayerCells",value:function(e){var t=[];return M.getters["game/getBoard"].forEach((function(a,r){a.owner===e&&t.push(r)})),t}},{key:"calculateAdd",value:function(e){for(var t=M.getters["game/getAdjacents"],a=M.getters["game/getPlayers"],r=this.getPlayerCells(e),n=1,s=0;s<r.length;s++)r[s]>-1&&function(){var e=[];e.push(r[s]),delete r[s];for(var a=0;a<e.length;a++)t[e[a]].forEach((function(t){if(r.includes(t)){e.push(t);var a=r.indexOf(t);delete r[a]}}));n=Math.max(e.length,n)}();var c=a[a.findIndex((function(t){return t.id===e}))];if(c){c.size=n,M.dispatch("game/changePlayers",a);var o=M.getters["game/getPlayer"];c.id===o.id&&M.dispatch("game/changePlayer",c)}return n}},{key:"applyAdd",value:function(){var e=M.getters["game/getBoard"],t=M.getters["game/getPlayer"],a=this.getPlayerCells(t.id),r=+t.size+t.reserve;for(r;r>0&&a.length;r--){var n=a[Math.floor(Math.random()*a.length)];e[n].dice>7?(a.splice(a.indexOf(n),1),r++):e[n].dice++}t.reserve=r;var s=M.getters["game/getPlayers"];s[s.findIndex((function(e){return e.id===t.id}))]=t,M.dispatch("game/changePlayers",s),M.dispatch("game/changeBoard",e)}}]),e}(),E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"controls"},[a("div",{staticClass:"controls_results_container",class:{"controls_results_container-active":e.resultsActive},on:{click:function(t){e.resultsActive=!1}}},[e.game.players.length>1&&e.game.results.attacker>-1&&(e.game.results.attackerDice.cell===e.game.selected||e.game.results.defenderDice.cell===e.game.selected||null===e.game.selected)?[a("div",{staticClass:"controls_results"},[a("div",{staticClass:"controls_results_side controls_results_side-attacker",class:{"controls_results_side-win":e.game.results.attackerDice.total>e.game.results.defenderDice.total}},[a("div",{staticClass:"controls_results_result"},[a("div",{staticClass:"controls_results_dices"},e._l(e.game.results.attackerDice.dice,(function(e,t){return a("div",{key:t,staticClass:"controls_results_dice",class:["controls_results_dice-"+e]})})),0)]),a("div",{staticClass:"controls_results_color",class:["controls_player_color-"+e.game.results.attacker]},[e._v(e._s(e.game.results.attackerDice.total))])]),a("div",{staticClass:"controls_results_vs"},[e._v("VS")]),a("div",{staticClass:"controls_results_side controls_results_side-defender",class:{"controls_results_side-win":e.game.results.attackerDice.total<=e.game.results.defenderDice.total}},[a("div",{staticClass:"controls_results_color",class:["controls_player_color-"+e.game.results.defender]},[e._v(e._s(e.game.results.defenderDice.total))]),a("div",{staticClass:"controls_results_result"},[a("div",{staticClass:"controls_results_dices"},e._l(e.game.results.defenderDice.dice,(function(e,t){return a("div",{key:t,staticClass:"controls_results_dice",class:["controls_results_dice-"+e]})})),0)])])])]:e._e(),1===e.game.players.length?a("div",{staticClass:"controls_results_wins"},[a("div",{staticClass:"controls_results_color",class:["controls_player_color-"+e.game.results.attacker]}),a("div",{staticClass:"controls_results_wins_text"},[e._v("WINS!")])]):e._e()],2),a("div",{staticClass:"controls_players"},e._l(e.game.players,(function(t){return a("div",{key:t.id,staticClass:"controls_player",class:{"controls_player-active":t.id===e.game.player.id}},[a("div",{staticClass:"controls_player_color",class:["controls_player_color-"+t.id]},[e._v(e._s(t.size))]),a("div",{staticClass:"controls_player_reserve"},[e._v("(+"+e._s(t.reserve)+")")])])})),0),a("div",{staticClass:"controls_actions"},[a("v-btn",{attrs:{color:"accent",disabled:e.game.players.length<2},on:{click:e.nextPlayer}},[e._v("Next turn")]),a("v-btn",{attrs:{color:"accent",outlined:""},on:{click:e.newGame}},[e._v("New game")])],1)])},T=[],G={name:"GameControls",computed:Object(k["c"])({game:function(e){return e.game},gameResults:function(e){return e.game.results}}),data:function(){return{gameService:new D,resultsActive:!1}},methods:{nextPlayer:function(){this.gameService.nextPlayer()},newGame:function(){this.gameService.startGame()}},watch:{gameResults:function(){this.resultsActive=!0}}},R=G,F=(a("cf0a"),Object(i["a"])(R,E,T,!1,null,"431ffb1f",null)),L=F.exports,I={name:"Game",components:{GameControls:L},computed:Object(k["c"])({game:function(e){return e.game}}),data:function(){return{gameService:new D}},methods:Object(w["a"])({select:function(e,t){t===this.game.player.id?this.gameService.changeSelected(e):this.gameService.attack(e)},selectable:function(e,t,a){var r=t===this.game.player.id&&a>1,n=null!==this.game.selected&&this.game.adjacents[this.game.selected].includes(e);return r||n},stopPropagation:function(e){e.stopPropagation()},unselect:function(){this.changeSelected(null)},borderTop:function(e,t){var a=e-this.game.settings.size;return!(e>=this.game.settings.size&&this.game.board[a]&&this.game.board[a].owner===t)},borderRight:function(e,t){var a=e+1;return!(a%this.game.settings.size&&this.game.board[a]&&this.game.board[a].owner===t)},borderBottom:function(e,t){var a=e+this.game.settings.size;return!(e<this.game.settings.size*(this.game.settings.size-1)&&this.game.board[a]&&this.game.board[a].owner===t)},borderLeft:function(e,t){var a=e-1;return!(e%this.game.settings.size&&this.game.board[a]&&this.game.board[a].owner===t)}},Object(k["b"])("game",["changeSelected"]))},$=I,H=(a("cc5c"),Object(i["a"])($,y,b,!1,null,"358475cf",null)),q=H.exports;r["default"].use(g["a"]);var V=[{path:"/",name:"Home",component:_},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/game",name:"Game",component:q}],W=new g["a"]({mode:"history",base:"/game/",routes:V}),K=W,Q=a("ce5b"),U=a.n(Q);a("bf40");r["default"].use(U.a);var X=new U.a({theme:{options:{customProperties:!0},themes:{light:{primary:"#0d2b45",secondary:"#d08159",accent:"#544e68",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}});r["default"].config.productionTip=!1,new r["default"]({router:K,store:M,vuetify:X,render:function(e){return e(u)}}).$mount("#app")},"63d1":function(e,t,a){},"907d":function(e,t,a){},cc5c:function(e,t,a){"use strict";var r=a("fd78"),n=a.n(r);n.a},cf0a:function(e,t,a){"use strict";var r=a("63d1"),n=a.n(r);n.a},fd78:function(e,t,a){}});
//# sourceMappingURL=app.57b5d413.js.map