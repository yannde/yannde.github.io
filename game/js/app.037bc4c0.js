(function(e){function t(t){for(var s,i,c=t[0],l=t[1],o=t[2],d=0,g=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&g.push(n[i][0]),n[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);u&&u(t);while(g.length)g.shift()();return r.push.apply(r,o||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,c=1;c<a.length;c++){var l=a[c];0!==n[l]&&(s=!1)}s&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var s={},n={app:0},r=[];function i(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=s,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(a,s,function(t){return e[t]}.bind(null,s));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/game/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var o=0;o<c.length;o++)t(c[o]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"006e":function(e,t,a){"use strict";var s=a("00f0"),n=a.n(s);n.a},"00f0":function(e,t,a){},"04ba":function(e,t,a){},"17ca":function(e,t,a){"use strict";var s=a("4f53"),n=a.n(s);n.a},"4f53":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("d5e8"),a("5363"),a("907d");var s=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("div",{attrs:{id:"app"}},[a("div",{staticClass:"nav"},[a("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v("| "),a("router-link",{attrs:{to:"/rules"}},[e._v("Rules")]),e._v("| "),a("router-link",{attrs:{to:"/game"}},[e._v("Game")])],1),a("router-view")],1)])},r=[],i={name:"App",data:function(){return{}}},c=i,l=(a("5c0b"),a("2877")),o=Object(l["a"])(c,n,r,!1,null,null,null),u=o.exports,d=a("9483");Object(d["a"])("".concat("/game/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var g=a("8c4f"),m=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},f=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"rules"},[a("h1",[e._v("Rules")]),a("ul",[a("li",[e._v("The player who holds all the squares in the grid wins")]),a("li",[e._v("You can attack any adjecent square held by another color if you have at least 2 dices")]),a("li",[e._v("After each turn dices will be randomly added to your squares "),a("ul",[a("li",[e._v("The amount is determined by the largest group of adjecent squares you have")]),a("li",[e._v("The maximum amount is 8 dices in a square")]),a("li",[e._v("If more dices can't be added the remaining will be held in reserve to use later")])])])])])}],h={},v=Object(l["a"])(h,m,f,!1,null,null,null),p=v.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"game",on:{click:e.unselect}},[a("div",{staticClass:"game_board",class:["game_board-size-"+e.game.settings.size,{"game_board-busy":e.game.busy}],on:{click:e.boardClick}},e._l(e.game.board,(function(t,s){return a("div",{directives:[{name:"ripple",rawName:"v-ripple"}],key:s,staticClass:"game_cell",class:[{"game_cell-selectable":e.selectable(s,t.owner,t.dice)},{"game_cell-selected":s===e.game.selected},{"game_cell-borderTop":e.borderTop(s,t.owner)},{"game_cell-borderRight":e.borderRight(s,t.owner)},{"game_cell-borderBottom":e.borderBottom(s,t.owner)},{"game_cell-borderLeft":e.borderLeft(s,t.owner)},"game_cell-defender-"+e.isAttacked(s),"game_cell-owner-"+t.owner],attrs:{depressed:s!==e.game.selected},on:{click:function(a){return e.select(s,t.owner)}}},[a("div",{staticClass:"game_cell_dices"},[a("div",{staticClass:"game_cell_dices_left"},e._l(Math.min(t.dice,4),(function(e,t){return a("div",{key:t,staticClass:"game_cell_dice"})})),0),t.dice>4?a("div",{staticClass:"game_cell_dices_right"},e._l(t.dice-4,(function(e,t){return a("div",{key:t,staticClass:"game_cell_dice"})})),0):e._e()])])})),0),0===e.game.board.length?a("GameStart"):e._e(),a("GameControls")],1)},_=[],b=(a("caad"),a("2532"),a("5530")),w=a("2f62"),S=(a("4de4"),a("c740"),a("4160"),a("c975"),a("d81d"),a("13d5"),a("a434"),a("d3b7"),a("159b"),a("d4ec")),k=a("bee2"),C={board:[],selected:null,defender:null,player:{},players:[],adjacents:[],settings:{players:4,size:4,difficulty:0},results:{},busy:!0,status:0},O={getBoard:function(){return JSON.parse(JSON.stringify(C.board))},getCell:function(e){return JSON.parse(JSON.stringify(C.board[e]))},getSelected:function(){return JSON.parse(JSON.stringify(C.selected))},getDefender:function(){return JSON.parse(JSON.stringify(C.defender))},getPlayer:function(){return JSON.parse(JSON.stringify(C.player))},getPlayers:function(){return JSON.parse(JSON.stringify(C.players))},getAdjacents:function(){return JSON.parse(JSON.stringify(C.adjacents))},getSettings:function(){return JSON.parse(JSON.stringify(C.settings))},getResults:function(){return JSON.parse(JSON.stringify(C.results))},getBusy:function(){return JSON.parse(JSON.stringify(C.busy))},getStatus:function(){return JSON.parse(JSON.stringify(C.status))}},G={setBoard:function(e,t){e.board=t},setCell:function(e,t){s["default"].set(e.board,t.i,t.data)},setSelected:function(e,t){e.selected=t},setDefender:function(e,t){e.defender=t},setPlayer:function(e,t){e.player=t},setPlayers:function(e,t){e.players=t},setAdjacents:function(e,t){e.adjacents=t},setSetting:function(e,t){e.settings=Object(b["a"])(Object(b["a"])({},e.settings),t)},setSettings:function(e,t){e.settings=t},setResults:function(e,t){e.results=t},setBusy:function(e,t){e.busy=t},setStatus:function(e,t){e.status=t}},P={changeBoard:function(e,t){var a=e.commit;a("setBoard",t)},changeCell:function(e,t){var a=e.commit;a("setCell",t)},changeSelected:function(e,t){var a=e.commit;a("setSelected",t)},changeDefender:function(e,t){var a=e.commit;a("setDefender",t)},changePlayer:function(e,t){var a=e.commit;a("setPlayer",t)},changePlayers:function(e,t){var a=e.commit;a("setPlayers",t)},changeAdjacents:function(e,t){var a=e.commit;a("setAdjacents",t)},changeSetting:function(e,t){var a=e.commit;a("setSetting",t)},changeSettings:function(e,t){var a=e.commit;a("setSettings",t)},changeResults:function(e,t){var a=e.commit;a("setResults",t)},changeBusy:function(e,t){var a=e.commit;a("setBusy",t)},changeStatus:function(e,t){var a=e.commit;a("setStatus",t)}},j={namespaced:!0,state:C,getters:O,actions:P,mutations:G};s["default"].use(w["a"]);var D=new w["a"].Store({state:{},mutations:{},actions:{},modules:{game:j}}),x=[[.837963,.443673,.152006,.03588,.006105,766e-6,71e-6,5e-6],[.972994,.778549,.453575,.191701,.060713,.014879,.00289,452e-6],[.997299,.939236,.742831,.459528,.220442,.083423,.02545,.006379],[.99985,.98794,.909347,.718078,.463654,.242449,.103626,.036742],[.999996,.998217,.9753,.883953,.699616,.466731,.259984,.121507],[1,.999801,.994663,.961536,.862377,.685165,.469139,.274376],[1,.999983,.999069,.989534,.947731,.843874,.673456,.471091]],B=[[.675926,.331019,-.391976,-.8206,-.96337,-.994638,-.999432,-.999955],[.918982,1.114196,.267875,-.849794,-1.575009,-1.880968,-1.97399,-1.99548],[.989196,1.69618,1.456986,.216696,-1.236464,-2.249193,-2.7455,-2.929831],[.99925,1.92764,2.365429,1.744624,.172886,-1.57551,-2.860114,-3.559096],[.999976,1.987519,2.8024,2.955577,1.99616,.134041,-1.880192,-3.420409],[1,1.998408,2.951967,3.61536,3.486147,2.22198,.098807,-2.158736],[1,1.999847,2.99069,3.884874,4.372772,3.970362,2.428384,.066365]],M=[{name:"16",value:4},{name:"25",value:5},{name:"36",value:6}],N=[{name:"normal",value:0},{name:"hard",value:1}],z=function(){function e(){Object(S["a"])(this,e)}return Object(k["a"])(e,[{key:"aiMove",value:function(e){var t=D.getters["game/getPlayer"],a=D.getters["game/getBoard"],s=D.getters["game/getAdjacents"],n=D.getters["game/getSettings"],r=a.filter((function(e){return e.owner===t.id&&e.dice>1})),i=-8*t.cells+t.total+t.size+t.reserve,c=.52-.12*t.aggresive;n.difficulty>8&&(c+=Math.min(e,5)*(.2-.08*t.aggresive),i>=0&&(c=Math.min(c,.44)));var l=[];return 0!==r.length&&(r.forEach((function(e){s[e.id].forEach((function(s){var n=a[s];if(n.owner!==t.id){var r=x[e.dice-2][n.dice-1],i=B[e.dice-2][n.dice-1];if(r>c){var o={attacker:e.id,defender:s,owner:n.owner,probability:r,gainProbability:i,weighedBenefit:1};l.push(o)}}}))})),n.difficulty>0&&(l=this.attackBiggest(l),l=this.simulateMoves(l)),0!==l.length&&(l.sort((function(e,t){return e.gainProbability<t.gainProbability?1:-1})),l.sort((function(e,t){return e.weighedBenefit<t.weighedBenefit?1:-1})),l[0]))}},{key:"attackBiggest",value:function(e){var t=D.getters["game/getPlayer"],a=D.getters["game/getPlayers"],s=D.getters["game/getSettings"],n=Math.pow(s.size,2)/2+Math.round(-2*t.aggresive+1),r=a.filter((function(e){return e.id!==t.id&&e.size>=n}));return r.length?e.filter((function(e){return e.owner===r[0].id})):e.map((function(e){var t=a.filter((function(t){return t.id===e.owner}))[0].size;return e.weighedBenefit=.8+Math.pow(s.size,2)/2/t*.4,e}))}},{key:"simulateMoves",value:function(e){var t=this,a=D.getters["game/getPlayer"],s=D.getters["game/getBoard"];return e.forEach((function(e){var n=JSON.parse(JSON.stringify(s));n[e.defender].dice=n[e.attacker].dice-1,n[e.defender].owner=a.id,n[e.attacker].dice=1,e.gain=t.calculateMoveResult(n,a.id),e.lose=-1*t.calculateMoveResult(n,e.owner),e.benefit=e.gain*(-2*a.aggresive+2.5)+e.lose,e.weighedBenefit*=e.benefit*(e.probability+2)})),e}},{key:"calculateMoveResult",value:function(e,t){var a=D.getters["game/getAdjacents"],s=D.getters["game/getPlayers"],n=[];e.forEach((function(e,a){e.owner===t&&n.push(a)}));for(var r=1,i=0;i<n.length;i++)n[i]>-1&&function(){var e=[];e.push(n[i]),delete n[i];for(var t=0;t<e.length;t++)a[e[t]].forEach((function(t){if(n.includes(t)){e.push(t);var a=n.indexOf(t);delete n[a]}}));r=Math.max(e.length,r)}();var c=s[s.findIndex((function(e){return e.id===t}))];return c?r-c.size:-1}}]),e}(),A=new z,J=function(){function e(){Object(S["a"])(this,e)}return Object(k["a"])(e,[{key:"changeBoard",value:function(){for(var e=D.getters["game/getSettings"],t=[],a=Math.pow(e.size,2),s=Math.floor(a/e.players),n=a%e.players,r=[],i=function(){var e=[],a=0,i=c-n<0?s+1:s;for(l=0;l<i;l++){var u=3*Math.random();a+=u,e.push(u)}var d=2*i/a*(s/i);e=e.map((function(e){return 1+Math.floor(e*d)}));var g=e.reduce((function(e,t){return e+t}),0),m={id:c,cells:i,total:g};for(r.push(m),o=0;o<i;o++)t.push({owner:c,dice:e[o]})},c=0;c<e.players;c++){var l,o;i()}t=t.sort((function(){return Math.random()-.5})),t=t.map((function(e,t){return e.id=t,e})),this.setAdjacents(),D.dispatch("game/changeBoard",t),D.dispatch("game/changePlayers",r)}},{key:"newGame",value:function(){var e=this,t=D.getters["game/getSettings"];this.changeBoard();var a=D.getters["game/getPlayers"].map((function(a,s){return a.human=0===s,a.size=e.calculateAdd(s),a.reserve=0,a.aggresive=t.difficulty>0?Math.round(100*Math.random())/100:.5,a}));a=a.sort((function(){return Math.random()-.5})),D.dispatch("game/changePlayer",a[0]),D.dispatch("game/changePlayers",a),D.dispatch("game/changeSelected",null),D.dispatch("game/changeResults",{}),D.dispatch("game/changeStatus",0),a[0].human?(D.dispatch("game/changeStatus",1),D.dispatch("game/changeBusy",!1)):D.dispatch("game/changeBusy",!0)}},{key:"startGame",value:function(){D.dispatch("game/changeStatus",1),this.aiMoves(0)}},{key:"setAdjacents",value:function(){for(var e=D.getters["game/getSettings"].size,t=[],a=Math.pow(e,2),s=0;s<a;s++){var n=[];s%e&&n.push(s-1),(s+1)%e&&n.push(s+1),s>=e&&n.push(s-e),s<e*e-e&&n.push(s+e),t.push(n)}D.dispatch("game/changeAdjacents",t)}},{key:"changeSelected",value:function(e){D.dispatch("game/changeSelected",e)}},{key:"changePlayer",value:function(e){D.dispatch("game/changePlayer",e)}},{key:"attack",value:function(e){var t=this;return new Promise((function(a){var s=D.getters["game/getSelected"],n=D.getters["game/getBoard"],r=n[s],i=n[e],c=t.dice(r.dice),l=t.dice(i.dice),o=i.owner;c.cell=s,l.cell=e,D.dispatch("game/changeResults",{attacker:r.owner,defender:o,attackerDice:c,defenderDice:l}),D.dispatch("game/changeDefender",e),0===r.owner&&D.dispatch("game/changeBusy",!0),setTimeout((function(){D.dispatch("game/changeDefender",null),c.total>l.total?(i.dice=r.dice-1,i.owner=r.owner,D.dispatch("game/changeCell",{i:e,data:i}),t.checkLost(o)||(i.dice>1?D.dispatch("game/changeSelected",e):D.dispatch("game/changeSelected",null),t.calculateAdd(o))):D.dispatch("game/changeSelected",null),t.calculateAdd(r.owner),r.dice=1,D.dispatch("game/changeCell",{i:s,data:r}),0===r.owner&&D.dispatch("game/changeBusy",!1),a({status:200})}),750)}))}},{key:"dice",value:function(e){for(var t=0,a=[],s=0;s<e;s++){var n=Math.floor(6*Math.random())+1;a.push(n),t+=n}return{total:t,dice:a}}},{key:"checkLost",value:function(e){var t=D.getters["game/getBoard"],a=D.getters["game/getPlayers"];if(!t.filter((function(t){return t.owner===e})).length){var s=a.findIndex((function(t){return t.id===e}));if(a[s].human&&(D.dispatch("game/changeStatus",2),D.dispatch("game/changeSelected",null)),a.splice(s,1),D.dispatch("game/changePlayers",a),1===a.length)return D.dispatch("game/changeSelected",null),!0}return!1}},{key:"nextPlayer",value:function(){this.applyAdd();var e=D.getters["game/getPlayer"],t=D.getters["game/getPlayers"],a=t.findIndex((function(t){return t.id===e.id})),s=t[(a+1)%t.length];D.dispatch("game/changePlayer",s),D.dispatch("game/changeSelected",null),s.human?D.dispatch("game/changeBusy",!1):(D.dispatch("game/changeBusy",!0),this.aiMoves(0))}},{key:"aiMoves",value:function(e){var t=this,a=A.aiMove(e);if(!1!==a){var s=D.getters["game/getSelected"],n=a.attacker!==s?750:10;setTimeout((function(){a.attacker!==s&&t.changeSelected(a.attacker),setTimeout((function(){var s=t;t.attack(a.defender).then((function(t){2!==D.getters["game/getStatus"]&&s.aiMoves(++e)}))}),200)}),n)}else this.nextPlayer()}},{key:"getPlayerCells",value:function(e){var t=[];return D.getters["game/getBoard"].forEach((function(a,s){a.owner===e&&t.push(s)})),t}},{key:"calculateAdd",value:function(e){for(var t=D.getters["game/getAdjacents"],a=D.getters["game/getPlayers"],s=D.getters["game/getBoard"],n=this.getPlayerCells(e),r=1,i=n.reduce((function(e,t){return e+s[t].dice}),0),c=n.length,l=0;l<n.length;l++)n[l]>-1&&function(){var e=[];e.push(n[l]),delete n[l];for(var a=0;a<e.length;a++)t[e[a]].forEach((function(t){if(n.includes(t)){e.push(t);var a=n.indexOf(t);delete n[a]}}));r=Math.max(e.length,r)}();var o=a[a.findIndex((function(t){return t.id===e}))];if(o){o.size=r,o.total=i,o.cells=c,D.dispatch("game/changePlayers",a);var u=D.getters["game/getPlayer"];o.id===u.id&&D.dispatch("game/changePlayer",o)}return r}},{key:"applyAdd",value:function(){var e=D.getters["game/getBoard"],t=D.getters["game/getPlayer"],a=this.getPlayerCells(t.id),s=+t.size+t.reserve;for(s;s>0&&a.length;s--){var n=a[Math.floor(Math.random()*a.length)];e[n].dice>7?(a.splice(a.indexOf(n),1),s++):e[n].dice++}t.reserve=s;var r=D.getters["game/getPlayers"];r[r.findIndex((function(e){return e.id===t.id}))]=t,D.dispatch("game/changePlayers",r),D.dispatch("game/changeBoard",e)}}]),e}(),R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{"max-width":"290"},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[a("div",e._g({directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"gameStart"},s),[a("div",{staticClass:"gameStart_label"},[e._v("Board Size")]),a("div",{staticClass:"gameStart_value"},[e._v(e._s(Math.pow(e.settings.size,2)))]),a("div",{staticClass:"gameStart_label"},[e._v("Players")]),a("div",{staticClass:"gameStart_value"},[e._v(e._s(e.settings.players))]),a("div",{staticClass:"gameStart_label"},[e._v("Difficulty")]),a("div",{staticClass:"gameStart_value"},[e._v(e._s(0===e.settings.difficulty?"Normal":"Hard"))])])]}}]),model:{value:e.newGameDialog,callback:function(t){e.newGameDialog=t},expression:"newGameDialog"}},[a("GameDialog",{on:{close:function(t){e.newGameDialog=!1}}})],1)},E=[],T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"gameDialog"},[a("v-card-title",{staticClass:"headline"},[e._v("New Game")]),a("v-card-text",[a("v-radio-group",{staticClass:"gameDialog_radioGroup",attrs:{label:"BoardSize",value:e.settings.size,color:"secondary"},on:{change:function(t){return e.update("size",t)}}},e._l(e.boardSizes,(function(e){return a("v-radio",{key:e.value,staticClass:"gameDialog_radio",attrs:{label:e.name,value:e.value,color:"secondary"}})})),1),a("v-slider",{staticClass:"gameDialog_slider",attrs:{label:"Players",value:e.settings.players,min:"2",max:"8",color:"secondary","thumb-label":"always"},on:{change:function(t){return e.update("players",t)}}}),a("v-radio-group",{staticClass:"gameDialog_radioGroup",attrs:{label:"Difficulty",value:e.settings.difficulty,color:"secondary"},on:{change:function(t){return e.update("difficulty",t)}}},e._l(e.difficulties,(function(e){return a("v-radio",{key:e.value,staticClass:"gameDialog_radio",attrs:{label:e.name,value:e.value,color:"secondary"}})})),1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{large:"",text:""},on:{click:e.close}},[e._v("Close")]),a("v-btn",{attrs:{color:"secondary",large:""},on:{click:e.newGame}},[e._v("Start")])],1)],1)},$=[],I={name:"GameDialog",computed:Object(w["c"])({game:function(e){return e.game},settings:function(e){return JSON.parse(JSON.stringify(e.game.settings))}}),data:function(){return{gameService:new J,firstName:"test",boardSizes:M,difficulties:N}},methods:Object(b["a"])({newGame:function(){this.changeSettings(this.settings),this.gameService.newGame(),this.$emit("close",!0)},close:function(){this.$emit("close",!0)},update:function(e,t){this.settings[e]=t,this.$set(this.settings,e,t)}},Object(w["b"])("game",["changeSettings"]))},q=I,L=(a("006e"),Object(l["a"])(q,T,$,!1,null,null,null)),Y=L.exports,F={name:"GameStart",components:{GameDialog:Y},computed:Object(w["c"])({settings:function(e){return e.game.settings}}),data:function(){return{gameService:new J,newGameDialog:!1}},methods:{newGame:function(){this.newGameDialog=!1,this.gameService.newGame()}}},H=F,W=(a("17ca"),Object(l["a"])(H,R,E,!1,null,"a68af8b8",null)),U=W.exports,V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"controls"},[a("GameResults"),a("div",{staticClass:"controls_players"},e._l(e.game.players,(function(t){return a("div",{key:t.id,staticClass:"controls_player",class:{"controls_player-active":t.id===e.game.player.id}},[a("div",{staticClass:"controls_player_color",class:["controls_player_color-"+t.id]},[e._v(e._s(t.size))]),a("div",{staticClass:"controls_player_reserve"},[e._v("(+"+e._s(t.reserve)+")")])])})),0),a("div",{staticClass:"controls_actions"},[a("v-btn",{staticClass:"controls_actions_btn",attrs:{color:"secondary",disabled:e.game.players.length<2||e.game.busy&&e.game.status>0,large:""},on:{click:e.next}},[e._v(e._s(0===e.game.status&&e.game.players[0]&&!e.game.players[0].human?"Start":"Next Turn"))]),a("v-btn-toggle",{staticClass:"controls_btnGroup"},[a("v-btn",{staticClass:"controls_btnGroup_btn controls_btnGroup_btn-newGame",attrs:{color:"secondary",outlined:"",large:"",disabled:e.game.busy&&e.game.status>0},on:{click:e.newGame}},[e._v("New Game")]),a("v-dialog",{attrs:{"max-width":"290"},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[a("v-btn",e._g({staticClass:"controls_btnGroup_btn controls_settings",attrs:{color:"secondary",disabled:e.game.busy&&e.game.status>0,large:""}},s),[a("v-icon",[e._v("mdi-cogs")])],1)]}}]),model:{value:e.newGameDialog,callback:function(t){e.newGameDialog=t},expression:"newGameDialog"}},[a("GameDialog",{on:{close:function(t){e.newGameDialog=!1}}})],1)],1)],1)],1)},K=[],Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"results_container",class:{"results_container-active":e.resultsActive},on:{click:function(t){e.resultsActive=!1}}},[e.game.players.length>1&&e.game.player&&e.game.results.attacker===e.game.player.id&&1===e.game.status&&(e.game.results.attackerDice.cell===e.game.selected||e.game.results.defenderDice.cell===e.game.selected||null===e.game.selected)?[a("div",{staticClass:"results"},[a("div",{staticClass:"results_side results_side-attacker",class:{"results_side-win":e.game.results.attackerDice.total>e.game.results.defenderDice.total}},[a("div",{staticClass:"results_result"},[a("div",{staticClass:"results_dices"},e._l(e.game.results.attackerDice.dice,(function(e,t){return a("div",{key:t,staticClass:"results_dice",class:["results_dice-"+e]})})),0)]),a("div",{staticClass:"results_color",class:["results_color-"+e.game.results.attacker]},[e._v(e._s(e.game.results.attackerDice.total))])]),a("div",{staticClass:"results_vs"},[e._v("VS")]),a("div",{staticClass:"results_side results_side-defender",class:{"results_side-win":e.game.results.attackerDice.total<=e.game.results.defenderDice.total}},[a("div",{staticClass:"results_color",class:["results_color-"+e.game.results.defender]},[e._v(e._s(e.game.results.defenderDice.total))]),a("div",{staticClass:"results_result"},[a("div",{staticClass:"results_dices"},e._l(e.game.results.defenderDice.dice,(function(e,t){return a("div",{key:t,staticClass:"results_dice",class:["results_dice-"+e]})})),0)])])])]:e._e(),2===e.game.status?a("div",{staticClass:"results_message"},[a("div",{staticClass:"results_color results_color-0"}),a("div",{staticClass:"results_message_text results_message_text-lose"},[e._v("You lost,")]),a("v-btn",{staticClass:"results_message_btn",attrs:{color:"secondary",large:""},on:{click:e.newGame}},[e._v("Get Revenge")])],1):2===e.game.status?a("div",{staticClass:"results_message"},[a("div",{staticClass:"results_color",class:["results_color-"+e.game.results.attacker]}),a("div",{staticClass:"results_message_text results_message_text-win"},[e._v("YOU WIN!")]),a("v-btn",{staticClass:"results_message_btn",attrs:{color:"secondary",large:""},on:{click:e.newGame}},[e._v("WIN MORE!")])],1):e._e()],2)},X=[],Z={name:"GameControls",computed:Object(w["c"])({game:function(e){return e.game},gameResults:function(e){return e.game.results}}),data:function(){return{gameService:new J,resultsActive:!1}},methods:{newGame:function(){this.gameService.newGame()}},watch:{gameResults:function(){this.resultsActive=!0}}},ee=Z,te=(a("7822"),Object(l["a"])(ee,Q,X,!1,null,"9b166d1e",null)),ae=te.exports,se={name:"GameControls",components:{GameDialog:Y,GameResults:ae},computed:Object(w["c"])({game:function(e){return e.game}}),data:function(){return{gameService:new J,newGameDialog:!1}},methods:{next:function(){0!==this.game.status||this.game.players[0].human?this.gameService.nextPlayer():this.gameService.startGame()},newGame:function(){this.newGameDialog=!1,this.gameService.newGame()}}},ne=se,re=(a("d4d5"),Object(l["a"])(ne,V,K,!1,null,"5debedd6",null)),ie=re.exports,ce={name:"Game",components:{GameStart:U,GameControls:ie},computed:Object(w["c"])({game:function(e){return e.game}}),data:function(){return{gameService:new J}},methods:Object(b["a"])({select:function(e,t){e===this.game.selected?this.unselect():t===this.game.player.id?this.gameService.changeSelected(e):this.gameService.attack(e)},selectable:function(e,t,a){var s=t===this.game.player.id&&a>1,n=null!==this.game.selected&&this.game.adjacents[this.game.selected].includes(e);return s||n},boardClick:function(e){e.stopPropagation(),this.game.board.length<1&&this.gameService.newGame()},unselect:function(){this.changeSelected(null)},borderTop:function(e,t){var a=e-this.game.settings.size;return!(e>=this.game.settings.size&&this.game.board[a]&&this.game.board[a].owner===t)},borderRight:function(e,t){var a=e+1;return!(a%this.game.settings.size&&this.game.board[a]&&this.game.board[a].owner===t)},borderBottom:function(e,t){var a=e+this.game.settings.size;return!(e<this.game.settings.size*(this.game.settings.size-1)&&this.game.board[a]&&this.game.board[a].owner===t)},borderLeft:function(e,t){var a=e-1;return!(e%this.game.settings.size&&this.game.board[a]&&this.game.board[a].owner===t)},isAttacked:function(e){return e===this.game.defender&&(this.game.defender+1===this.game.selected?"right game_cell-defender":this.game.defender-1===this.game.selected?"left game_cell-defender":this.game.defender<this.game.selected?"bottom game_cell-defender":this.game.defender>this.game.selected?"top game_cell-defender":void 0)}},Object(w["b"])("game",["changeSelected"]))},le=ce,oe=(a("f96f"),Object(l["a"])(le,y,_,!1,null,"90cba058",null)),ue=oe.exports;s["default"].use(g["a"]);var de=[{path:"/",name:"Game",component:ue},{path:"/rules",name:"Rules",component:p},{path:"/game",name:"Game",component:ue}],ge=new g["a"]({mode:"history",base:"/game/",routes:de}),me=ge,fe=a("ce5b"),he=a.n(fe);a("bf40");s["default"].use(he.a);var ve=new he.a({theme:{dark:!0,options:{customProperties:!0},themes:{dark:{primary:"#0d2b45",secondary:"#d08159",accent:"#544e68",error:"#6B120D",info:"#3B8A70",success:"#96C052",warning:"#D0AB59"}}}});s["default"].config.productionTip=!1,new s["default"]({router:me,store:D,vuetify:ve,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var s=a("9c0c"),n=a.n(s);n.a},7822:function(e,t,a){"use strict";var s=a("bd95"),n=a.n(s);n.a},8423:function(e,t,a){},"907d":function(e,t,a){},"9c0c":function(e,t,a){},bd95:function(e,t,a){},d4d5:function(e,t,a){"use strict";var s=a("04ba"),n=a.n(s);n.a},f96f:function(e,t,a){"use strict";var s=a("8423"),n=a.n(s);n.a}});
//# sourceMappingURL=app.037bc4c0.js.map