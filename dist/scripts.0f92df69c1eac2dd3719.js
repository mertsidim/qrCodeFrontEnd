(function(){"use strict";var t,e="object"==typeof global&&global&&global.Object===Object&&global,o="object"==typeof self&&self&&self.Object===Object&&self,i=e||o||Function("return this")(),r="object"==typeof exports&&exports&&!exports.nodeType&&exports,n=r&&"object"==typeof module&&module&&!module.nodeType&&module,a=i.QRCode;function l(t){this.mode=s.MODE_8BIT_BYTE,this.data=t,this.parsedData=[];for(var e=0,o=this.data.length;e<o;e++){var i=[],r=this.data.charCodeAt(e);r>65536?(i[0]=240|(1835008&r)>>>18,i[1]=128|(258048&r)>>>12,i[2]=128|(4032&r)>>>6,i[3]=128|63&r):r>2048?(i[0]=224|(61440&r)>>>12,i[1]=128|(4032&r)>>>6,i[2]=128|63&r):r>128?(i[0]=192|(1984&r)>>>6,i[1]=128|63&r):i[0]=r,this.parsedData.push(i)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function h(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}l.prototype={getLength:function(t){return this.parsedData.length},write:function(t){for(var e=0,o=this.parsedData.length;e<o;e++)t.put(this.parsedData[e],8)}},h.prototype={addData:function(t){var e=new l(t);this.dataList.push(e),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e][0]},getEye:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);var o=this.modules[t][e];if(o[1]){var i="P"+o[1]+"_"+o[2];return"A"==o[2]&&(i="A"+o[1]),{isDark:o[0],type:i}}return null},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var o=0;o<this.moduleCount;o++){this.modules[o]=new Array(this.moduleCount);for(var i=0;i<this.moduleCount;i++)this.modules[o][i]=[]}this.setupPositionProbePattern(0,0,"TL"),this.setupPositionProbePattern(this.moduleCount-7,0,"BL"),this.setupPositionProbePattern(0,this.moduleCount-7,"TR"),this.setupPositionAdjustPattern("A"),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=h.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},setupPositionProbePattern:function(t,e,o){for(var i=-1;i<=7;i++)if(!(t+i<=-1||this.moduleCount<=t+i))for(var r=-1;r<=7;r++)e+r<=-1||this.moduleCount<=e+r||(0<=i&&i<=6&&(0==r||6==r)||0<=r&&r<=6&&(0==i||6==i)||2<=i&&i<=4&&2<=r&&r<=4?(this.modules[t+i][e+r][0]=!0,this.modules[t+i][e+r][2]=o,this.modules[t+i][e+r][1]=-0==i||-0==r||6==i||6==r?"O":"I"):this.modules[t+i][e+r][0]=!1)},getBestMaskPattern:function(){for(var t=0,e=0,o=0;o<8;o++){this.makeImpl(!0,o);var i=g.getLostPoint(this);(0==o||t>i)&&(t=i,e=o)}return e},createMovieClip:function(t,e,o){var i=t.createEmptyMovieClip(e,o);this.make();for(var r=0;r<this.modules.length;r++)for(var n=1*r,a=0;a<this.modules[r].length;a++){var l=1*a;this.modules[r][a][0]&&(i.beginFill(0,100),i.moveTo(l,n),i.lineTo(l+1,n),i.lineTo(l+1,n+1),i.lineTo(l,n+1),i.endFill())}return i},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6][0]&&(this.modules[t][6][0]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e][0]&&(this.modules[6][e][0]=e%2==0)},setupPositionAdjustPattern:function(t){for(var e=g.getPatternPosition(this.typeNumber),o=0;o<e.length;o++)for(var i=0;i<e.length;i++){var r=e[o],n=e[i];if(null==this.modules[r][n][0])for(var a=-2;a<=2;a++)for(var l=-2;l<=2;l++)-2==a||2==a||-2==l||2==l||0==a&&0==l?(this.modules[r+a][n+l][0]=!0,this.modules[r+a][n+l][2]=t,this.modules[r+a][n+l][1]=-2==a||-2==l||2==a||2==l?"O":"I"):this.modules[r+a][n+l][0]=!1}},setupTypeNumber:function(t){for(var e=g.getBCHTypeNumber(this.typeNumber),o=0;o<18;o++){var i=!t&&1==(e>>o&1);this.modules[Math.floor(o/3)][o%3+this.moduleCount-8-3][0]=i}for(o=0;o<18;o++)i=!t&&1==(e>>o&1),this.modules[o%3+this.moduleCount-8-3][Math.floor(o/3)][0]=i},setupTypeInfo:function(t,e){for(var o=g.getBCHTypeInfo(this.errorCorrectLevel<<3|e),i=0;i<15;i++){var r=!t&&1==(o>>i&1);i<6?this.modules[i][8][0]=r:i<8?this.modules[i+1][8][0]=r:this.modules[this.moduleCount-15+i][8][0]=r}for(i=0;i<15;i++)r=!t&&1==(o>>i&1),i<8?this.modules[8][this.moduleCount-i-1][0]=r:i<9?this.modules[8][15-i-1+1][0]=r:this.modules[8][15-i-1][0]=r;this.modules[this.moduleCount-8][8][0]=!t},mapData:function(t,e){for(var o=-1,i=this.moduleCount-1,r=7,n=0,a=this.moduleCount-1;a>0;a-=2)for(6==a&&a--;;){for(var l=0;l<2;l++)if(null==this.modules[i][a-l][0]){var h=!1;n<t.length&&(h=1==(t[n]>>>r&1)),g.getMask(e,i,a-l)&&(h=!h),this.modules[i][a-l][0]=h,-1==--r&&(n++,r=7)}if((i+=o)<0||this.moduleCount<=i){i-=o,o=-o;break}}}},h.PAD0=236,h.PAD1=17,h.createData=function(t,e,o){for(var i=p.getRSBlocks(t,e),r=new m,n=0;n<o.length;n++){var a=o[n];r.put(a.mode,4),r.put(a.getLength(),g.getLengthInBits(a.mode,t)),a.write(r)}var l=0;for(n=0;n<i.length;n++)l+=i[n].dataCount;if(r.getLengthInBits()>8*l)throw new Error("code length overflow. ("+r.getLengthInBits()+">"+8*l+")");for(r.getLengthInBits()+4<=8*l&&r.put(0,4);r.getLengthInBits()%8!=0;)r.putBit(!1);for(;!(r.getLengthInBits()>=8*l||(r.put(h.PAD0,8),r.getLengthInBits()>=8*l));)r.put(h.PAD1,8);return h.createBytes(r,i)},h.createBytes=function(t,e){for(var o=0,i=0,r=0,n=new Array(e.length),a=new Array(e.length),l=0;l<e.length;l++){var h=e[l].dataCount,s=e[l].totalCount-h;i=Math.max(i,h),r=Math.max(r,s),n[l]=new Array(h);for(var u=0;u<n[l].length;u++)n[l][u]=255&t.buffer[u+o];o+=h;var d=g.getErrorCorrectPolynomial(s),c=new f(n[l],d.getLength()-1).mod(d);for(a[l]=new Array(d.getLength()-1),u=0;u<a[l].length;u++){var p=u+c.getLength()-a[l].length;a[l][u]=p>=0?c.get(p):0}}var m=0;for(u=0;u<e.length;u++)m+=e[u].totalCount;var v=new Array(m),_=0;for(u=0;u<i;u++)for(l=0;l<e.length;l++)u<n[l].length&&(v[_++]=n[l][u]);for(u=0;u<r;u++)for(l=0;l<e.length;l++)u<a[l].length&&(v[_++]=a[l][u]);return v};for(var s={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},u={L:1,M:0,Q:3,H:2},g={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;g.getBCHDigit(e)-g.getBCHDigit(g.G15)>=0;)e^=g.G15<<g.getBCHDigit(e)-g.getBCHDigit(g.G15);return(t<<10|e)^g.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;g.getBCHDigit(e)-g.getBCHDigit(g.G18)>=0;)e^=g.G18<<g.getBCHDigit(e)-g.getBCHDigit(g.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return g.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,o){switch(t){case 0:return(e+o)%2==0;case 1:return e%2==0;case 2:return o%3==0;case 3:return(e+o)%3==0;case 4:return(Math.floor(e/2)+Math.floor(o/3))%2==0;case 5:return e*o%2+e*o%3==0;case 6:return(e*o%2+e*o%3)%2==0;case 7:return(e*o%3+(e+o)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new f([1],0),o=0;o<t;o++)e=e.multiply(new f([1,d.gexp(o)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case s.MODE_NUMBER:return 10;case s.MODE_ALPHA_NUM:return 9;case s.MODE_8BIT_BYTE:case s.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case s.MODE_NUMBER:return 12;case s.MODE_ALPHA_NUM:return 11;case s.MODE_8BIT_BYTE:return 16;case s.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case s.MODE_NUMBER:return 14;case s.MODE_ALPHA_NUM:return 13;case s.MODE_8BIT_BYTE:return 16;case s.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),o=0,i=0;i<e;i++)for(var r=0;r<e;r++){for(var n=0,a=t.isDark(i,r),l=-1;l<=1;l++)if(!(i+l<0||e<=i+l))for(var h=-1;h<=1;h++)r+h<0||e<=r+h||0==l&&0==h||a==t.isDark(i+l,r+h)&&n++;n>5&&(o+=3+n-5)}for(i=0;i<e-1;i++)for(r=0;r<e-1;r++){var s=0;t.isDark(i,r)&&s++,t.isDark(i+1,r)&&s++,t.isDark(i,r+1)&&s++,t.isDark(i+1,r+1)&&s++,0!=s&&4!=s||(o+=3)}for(i=0;i<e;i++)for(r=0;r<e-6;r++)t.isDark(i,r)&&!t.isDark(i,r+1)&&t.isDark(i,r+2)&&t.isDark(i,r+3)&&t.isDark(i,r+4)&&!t.isDark(i,r+5)&&t.isDark(i,r+6)&&(o+=40);for(r=0;r<e;r++)for(i=0;i<e-6;i++)t.isDark(i,r)&&!t.isDark(i+1,r)&&t.isDark(i+2,r)&&t.isDark(i+3,r)&&t.isDark(i+4,r)&&!t.isDark(i+5,r)&&t.isDark(i+6,r)&&(o+=40);var u=0;for(r=0;r<e;r++)for(i=0;i<e;i++)t.isDark(i,r)&&u++;return o+Math.abs(100*u/e/e-50)/5*10}},d={glog:function(t){if(t<1)throw new Error("glog("+t+")");return d.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return d.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},c=0;c<8;c++)d.EXP_TABLE[c]=1<<c;for(c=8;c<256;c++)d.EXP_TABLE[c]=d.EXP_TABLE[c-4]^d.EXP_TABLE[c-5]^d.EXP_TABLE[c-6]^d.EXP_TABLE[c-8];for(c=0;c<255;c++)d.LOG_TABLE[d.EXP_TABLE[c]]=c;function f(t,e){if(null==t.length)throw new Error(t.length+"/"+e);for(var o=0;o<t.length&&0==t[o];)o++;this.num=new Array(t.length-o+e);for(var i=0;i<t.length-o;i++)this.num[i]=t[i+o]}function p(t,e){this.totalCount=t,this.dataCount=e}function m(){this.buffer=[],this.length=0}f.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),o=0;o<this.getLength();o++)for(var i=0;i<t.getLength();i++)e[o+i]^=d.gexp(d.glog(this.get(o))+d.glog(t.get(i)));return new f(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=d.glog(this.get(0))-d.glog(t.get(0)),o=new Array(this.getLength()),i=0;i<this.getLength();i++)o[i]=this.get(i);for(i=0;i<t.getLength();i++)o[i]^=d.gexp(d.glog(t.get(i))+e);return new f(o,0).mod(t)}},p.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],p.getRSBlocks=function(t,e){var o=p.getRsBlockTable(t,e);if(null==o)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var i=o.length/3,r=[],n=0;n<i;n++)for(var a=o[3*n+0],l=o[3*n+1],h=o[3*n+2],s=0;s<a;s++)r.push(new p(l,h));return r},p.getRsBlockTable=function(t,e){switch(e){case u.L:return p.RS_BLOCK_TABLE[4*(t-1)+0];case u.M:return p.RS_BLOCK_TABLE[4*(t-1)+1];case u.Q:return p.RS_BLOCK_TABLE[4*(t-1)+2];case u.H:return p.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},m.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var o=0;o<e;o++)this.putBit(1==(t>>>e-o-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var v=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];function _(){var t=!1,e=navigator.userAgent;if(/android/i.test(e)){t=!0;var o=e.toString().match(/android ([0-9]\.[0-9])/i);o&&o[1]&&(t=parseFloat(o[1]))}return t}var b=function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){var e=this._htOption,o=this._el,i=t.getModuleCount();function r(t,e){var o=document.createElementNS("http://www.w3.org/2000/svg",t);for(var i in e)e.hasOwnProperty(i)&&o.setAttribute(i,e[i]);return o}Math.floor(e.width/i),Math.floor(e.height/i),this.clear();var n=r("svg",{viewBox:"0 0 "+String(i)+" "+String(i),width:"100%",height:"100%",fill:e.colorLight});n.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),o.appendChild(n),n.appendChild(r("rect",{fill:e.colorLight,width:"100%",height:"100%"})),n.appendChild(r("rect",{fill:e.colorDark,width:"1",height:"1",id:"template"}));for(var a=0;a<i;a++)for(var l=0;l<i;l++)if(t.isDark(a,l)){var h=r("use",{x:String(l),y:String(a)});h.setAttributeNS("http://www.w3.org/1999/xlink","href","#template"),n.appendChild(h)}},t.prototype.clear=function(){for(;this._el.hasChildNodes();)this._el.removeChild(this._el.lastChild)},t}(),y="svg"===document.documentElement.tagName.toLowerCase()?b:"undefined"==typeof CanvasRenderingContext2D?function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){var e=this._htOption,o=this._el,i=t.getModuleCount(),r=Math.round(e.width/i),n=Math.round((e.height-e.titleHeight)/i);this._htOption.width=r*i,this._htOption.height=n*i+e.titleHeight,this._htOption.quietZone=Math.round(this._htOption.quietZone);var a=[],l="",h=Math.round(r*e.dotScale),s=Math.round(n*e.dotScale);h<4&&(h=4,s=4);var u=e.colorDark,g=e.colorLight;e.backgroundImage&&(e.autoColor?(e.colorDark="rgba(0, 0, 0, .6);filter:progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr='#99000000', EndColorStr='#99000000');",e.colorLight="rgba(255, 255, 255, .7);filter:progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr='#B2FFFFFF', EndColorStr='#B2FFFFFF');"):e.colorLight="transparent",a.push('<div style="display:inline-block; z-index:-10;position:absolute;"><img src="'+e.backgroundImage+'" widht="'+(e.width+2*e.quietZone)+'" height="'+(e.height+2*e.quietZone)+'" style="opacity:'+e.backgroundImageAlpha+";filter:alpha(opacity="+100*e.backgroundImageAlpha+'); "/></div>')),e.quietZone&&(l="padding:"+e.quietZone+"px; display:inline-block; width:"+(e.width+2*e.quietZone)+"px;"),a.push('<div style="font-size:0;'+l+'">'),a.push('<table  style="font-size:0;border:0;border-collapse:collapse; margin-top:0;" border="0" cellspacing="0" cellspadding="0">'),a.push('<tr height="'+e.titleHeight+'" align="center"><td style="border:0;border-collapse:collapse;margin:0;padding:0" colspan="'+i+'">'),e.title&&a.push('<div style="width:100%;margin-top:'+e.titleTop+"px;color:"+e.titleColor+";font:"+e.titleFont+";background:"+e.titleBackgroundColor+'">'+e.title+"</div>"),e.subTitle&&a.push('<div style="width:100%;margin-top:'+(e.subTitleTop-e.titleTop)+"px;color:"+e.subTitleColor+"; font:"+e.subTitleFont+'">'+e.subTitle+"</div>"),a.push("</td></tr>");for(var d=0;d<i;d++){a.push('<tr style="border:0; padding:0; margin:0;" height="7">');for(var c=0;c<i;c++){var f=t.isDark(d,c),p=t.getEye(d,c);if(p){f=p.isDark;var m=p.type,v=e[m]||e[m.substring(0,2)]||u;a.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+r+"px;height:"+n+'px;"><span style="width:'+r+"px;height:"+n+"px;background-color:"+(f?v:g)+';"></span></td>')}else{var _=e.colorDark;6==d?(_=e.timing_H||e.timing||u,a.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+r+"px;height:"+n+"px;background-color:"+(f?_:g)+';"></td>')):6==c?(_=e.timing_V||e.timing||u,a.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+r+"px;height:"+n+"px;background-color:"+(f?_:g)+';"></td>')):a.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+r+"px;height:"+n+'px;"><div style="display:inline-block;width:'+h+"px;height:"+s+"px;background-color:"+(f?_:e.colorLight)+';"></div></td>')}}a.push("</tr>")}if(a.push("</table>"),a.push("</div>"),e.logo){(new Image).src=e.logo;var b=e.width/3.5,y=e.height/3.5;b!=y&&(b=y),e.logoWidth&&(b=e.logoWidth),e.logoHeight&&(y=e.logoHeight);var C="position:relative; z-index:1;display:inline-block;top:-"+((e.height-e.titleHeight)/2+y/2+e.quietZone)+"px;text-align:center; width:"+b+"px; height:"+y+"px;";e.logoBackgroundTransparent||(C+="background:"+e.logoBackgroundColor),a.push('<div style="'+C+'"><img  src="'+e.logo+'" width="'+b+'" height="'+y+'"  style="" /></div>')}e.onRenderingStart&&e.onRenderingStart(),o.innerHTML=a.join("");var w=o.childNodes[0],k=(e.width-w.offsetWidth)/2,A=(e.height-w.offsetHeight)/2;k>0&&A>0&&(w.style.margin=A+"px "+k+"px")},t.prototype.clear=function(){this._el.innerHTML=""},t}():function(){function t(){this._elImage.src=this._elCanvas.toDataURL("image/png"),this._elImage.style.display="inline",this._elCanvas.style.display="none"}if(i._android&&i._android<=2.1){var e=1/window.devicePixelRatio,o=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(t,i,r,n,a,l,h,s,u){if("nodeName"in t&&/img/i.test(t.nodeName))for(var g=arguments.length-1;g>=1;g--)arguments[g]=arguments[g]*e;else void 0===s&&(arguments[1]*=e,arguments[2]*=e,arguments[3]*=e,arguments[4]*=e);o.apply(this,arguments)}}function r(t,e){var o=this;if(o._fFail=e,o._fSuccess=t,null===o._bSupportDataURI){var i=document.createElement("img"),r=function(){o._bSupportDataURI=!1,o._fFail&&o._fFail.call(o)};return i.onabort=r,i.onerror=r,i.onload=function(){o._bSupportDataURI=!0,o._fSuccess&&o._fSuccess.call(o)},void(i.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")}!0===o._bSupportDataURI&&o._fSuccess?o._fSuccess.call(o):!1===o._bSupportDataURI&&o._fFail&&o._fFail.call(o)}var n=function(t,e){this._bIsPainted=!1,this._android=_(),this._htOption=e,this._elCanvas=document.createElement("canvas"),t.appendChild(this._elCanvas),this._el=t,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._elImage=document.createElement("img"),this._elImage.alt="Scan me!",this._elImage.style.display="none",this._el.appendChild(this._elImage),this._bSupportDataURI=null};return n.prototype.draw=function(t){var e=this._elImage,o=this._oContext,i=this._htOption;i.title||i.subTitle||(i.height-=i.titleHeight,i.titleHeight=0);var r=t.getModuleCount(),n=Math.round(i.width/r),a=Math.round((i.height-i.titleHeight)/r);this._htOption.width=n*r,this._htOption.height=a*r+i.titleHeight,this._htOption.quietZone=Math.round(this._htOption.quietZone),this._elCanvas.width=this._htOption.width+2*this._htOption.quietZone,this._elCanvas.height=this._htOption.height+2*this._htOption.quietZone,e.style.display="none",this.clear();var l=this;if(i.backgroundImage){var h=new Image;h.onload=function(){o.globalAlpha=1,o.globalAlpha=i.backgroundImageAlpha,o.drawImage(h,0,i.titleHeight,i.width+2*i.quietZone,i.height+2*i.quietZone-i.titleHeight),o.globalAlpha=1,s.call(l,t)},h.src=i.backgroundImage}else s.call(l,t);function s(t){i.onRenderingStart&&i.onRenderingStart();for(var e=0;e<r;e++)for(var l=0;l<r;l++){var h=l*n+i.quietZone,s=e*a+i.quietZone,u=t.isDark(e,l),g=t.getEye(e,l);if(g){u=g.isDark;var d=g.type,c=i[d]||i[d.substring(0,2)]||i.colorDark;o.lineWidth=0,o.strokeStyle=u?c:i.colorLight,o.fillStyle=u?c:i.colorLight,o.fillRect(h,i.titleHeight+s,n,a)}else{o.lineWidth=0,o.strokeStyle=u?i.colorDark:i.colorLight,o.fillStyle=u?i.colorDark:i.colorLight;var f=i.dotScale;6==e?(f=1,o.fillStyle=u?i.timing_H||i.timing||i.colorDark:i.colorLight,o.strokeStyle=o.fillStyle,o.fillRect(h+n*(1-f)/2,i.titleHeight+s+a*(1-f)/2,n*f,a*f)):6==l?(f=1,o.fillStyle=u?i.timing_V||i.timing||i.colorDark:i.colorLight,o.strokeStyle=o.fillStyle,o.fillRect(h+n*(1-f)/2,i.titleHeight+s+a*(1-f)/2,n*f,a*f)):i.backgroundImage?(i.autoColor?(o.strokeStyle=u?"rgba(0, 0, 0, .6)":"rgba(255, 255, 255, .7)",o.fillStyle=u?"rgba(0, 0, 0, .6)":"rgba(255, 255, 255, .7)"):(o.strokeStyle=u?i.colorDark:"rgba(0,0,0,0)",o.fillStyle=u?i.colorDark:"rgba(0,0,0,0)",o.strokeStyle=o.fillStyle),o.fillRect(h+n*(1-f)/2,i.titleHeight+s+a*(1-f)/2,n*f,a*f)):(o.strokeStyle=o.fillStyle,o.fillRect(h+n*(1-f)/2,i.titleHeight+s+a*(1-f)/2,n*f,a*f))}1==i.dotScale||g||(o.strokeStyle=i.colorLight)}if(i.title&&(o.fillStyle=i.titleBackgroundColor,o.fillRect(0,0,this._elCanvas.width,i.titleHeight),o.font=i.titleFont,o.fillStyle=i.titleColor,o.textAlign="center",o.fillText(i.title,i.width/2,30)),i.subTitle&&(o.font=i.subTitleFont,o.fillStyle=i.subTitleColor,o.fillText(i.subTitle,i.width/2,60)),i.logo){var p=new Image,m=this;p.onload=function(){var t,e;(t=Math.round(i.width/3.5))!=(e=Math.round(i.height/3.5))&&(t=e),i.logoWidth&&(t=Math.round(i.logoWidth)),i.logoHeight&&(e=Math.round(i.logoHeight)),i.logoBackgroundTransparent||(o.fillStyle=i.logoBackgroundColor,o.fillRect((i.width+2*i.quietZone-t)/2,(i.height+i.titleHeight+2*i.quietZone-e)/2,t,t)),o.drawImage(p,(i.width+2*i.quietZone-t)/2,(i.height+i.titleHeight+2*i.quietZone-e)/2,t,e),m._bIsPainted=!0,m.makeImage()},p.onerror=function(t){console.error(t)},p.src=i.logo}else this._bIsPainted=!0,this.makeImage()}},n.prototype.makeImage=function(){this._bIsPainted&&r.call(this,t)},n.prototype.isPainted=function(){return this._bIsPainted},n.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height+50),this._bIsPainted=!1},n.prototype.remove=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height+50),this._bIsPainted=!1,this._el.innerHTML=""},n.prototype.round=function(t){return t?Math.floor(1e3*t)/1e3:t},n}();(t=function(t,e){if(this._htOption={width:256,height:256,quietZone:0,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:u.H,dotScale:1,title:"",titleFont:"bold 16px Arial",titleColor:"#000000",titleBackgroundColor:"#ffffff",titleHeight:0,titleTop:30,subTitle:"",subTitleFont:"14px Arial",subTitleColor:"#4F4F4F",subTitleTop:0,logo:void 0,logoWidth:void 0,logoHeight:void 0,logoBackgroundColor:"#ffffff",logoBackgroundTransparent:!1,PO:void 0,PI:void 0,PO_TL:void 0,PI_TL:void 0,PO_TR:void 0,PI_TR:void 0,PO_BL:void 0,PI_BL:void 0,AO:void 0,AI:void 0,timing:void 0,timing_H:void 0,timing_V:void 0,backgroundImage:void 0,backgroundImageAlpha:1,autoColor:!1,onRenderingStart:void 0},"string"==typeof e&&(e={text:e}),e)for(var o in e)this._htOption[o]=e[o];(this._htOption.dotScale<0||this._htOption.dotScale>1)&&(console.warn(this._htOption.dotScale+" , is invalidate, dotScale must greater than 0, less than or equal to 1, now reset to 1. "),this._htOption.dotScale=1),(this._htOption.backgroundImageAlpha<0||this._htOption.backgroundImageAlpha>1)&&(console.warn(this._htOption.backgroundImageAlpha+" , is invalidate, backgroundImageAlpha must between 0 and 1, now reset to 1. "),this._htOption.backgroundImageAlpha=1),this._htOption.height=this._htOption.height+this._htOption.titleHeight,"string"==typeof t&&(t=document.getElementById(t)),this._htOption.useSVG&&(y=b),this._android=_(),this._el=t,this._oQRCode=null,this._oDrawing=new y(this._el,this._htOption),void 0!==this._htOption.text&&this.makeCode(this._htOption.text)}).prototype.makeCode=function(t){this._oQRCode=new h(function(t,e){for(var o=1,i=function(t){var e=encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return e.length+(e.length!=t?3:0)}(t),r=0,n=v.length;r<=n;r++){var a=0;switch(e){case u.L:a=v[r][0];break;case u.M:a=v[r][1];break;case u.Q:a=v[r][2];break;case u.H:a=v[r][3]}if(i<=a)break;o++}if(o>v.length)throw new Error("Too long data");return o}(t,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(t),this._oQRCode.make(),this._oDrawing.draw(this._oQRCode)},t.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||this._android>=3)&&this._oDrawing.makeImage()},t.prototype.clear=function(){this._oDrawing.remove()},t.prototype.noConflict=function(){return i.QRCode===this&&(i.QRCode=a),t},t.CorrectLevel=u,"function"==typeof define&&(define.amd||define.cmd)?define([],(function(){return t})):n?((n.exports=t).QRCode=t,r.QRCode=t):i.QRCode=t}).call(this);