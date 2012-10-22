AUI.add("aui-scheduler-view-day",function(bu){var bE=bu.Lang,az=bE.isBoolean,r=bE.isFunction,al=bE.isNumber,bK=bE.isObject,bn=bE.isString,Y=bu.DataType.DateMath,br=bu.WidgetStdMod,by="a",j=",",Z=".",x="",O="%",a7=" ",o="data-colnumber",bf="scheduler-view",ak="scheduler-view-day",e=bu.cached(function(){var bQ=bu.config.doc,bO=bQ.createElement("div"),A=bQ.getElementsByTagName("body")[0],bP=0.1;if(A){bO.style.cssText="position:absolute;visibility:hidden;overflow:scroll;width:20px;";bO.appendChild(bQ.createElement("p")).style.height="1px";A.insertBefore(bO,A.firstChild);bP=bO.offsetWidth-bO.clientWidth;A.removeChild(bO);}return bP;},null,0.1),D=function(A,bO){return function(bQ){var bP=bQ.all(A);return(bP.size()>=bO)?bP:null;};},be=function(bO,A){return Math.round(bO/A)*A;},bc=function(A){return parseFloat(A)||0;},aJ="activeColumn",bb="activeView",E="allDay",av="boundingBox",S="col",ae="colDaysNode",bw="colHeaderDaysNode",z="colblank",q="coldata",an="colday",a="colgrid",L="colspan",g="coltime",aU="columnData",ay="columnDayHeader",ao="columnShims",aM="columnTime",at="container",M="creationStartDate",a1="date",ba="viewDate",bC="day",J="days",t="delegateConfig",a9="disabled",aT="division",bg="dotted",v="draggingEvent",bl="duration",ag="endDate",bG="eventClass",a8="eventPlaceholder",bM="eventRecorder",l="eventWidth",bq="filterFn",am="first",aL="grid",a0="gridContainer",aF="grip",bL="hd",bt="header",aH="headerDateFormatter",bJ="headerTableNode",aC="headerView",aS="headerViewConfig",aq="headerViewLabelNode",bi="height",aI="horizontal",au="host",aj="hourHeight",n="icon",V="isoTime",N="label",aw="left",af="locale",f="marginRight",P="marker",aG="markercell",aA="markercellsNode",B="markers",a6="markersNode",bN="node",bs="offsetHeight",bv="pad",H="parentNode",aY="proxy",T="px",Q="region",bh="resizer",bo="resizerNode",bd="resizing",aB="right",k="scheduler",ah="scheduler-event",I="shim",bx="startDate",K="startXY",bp="strings",ax="table",a2="tableNode",aV="time",U="timesNode",W="today",aW="top",aZ="view",ad="visible",a5="width",a4="data",u=bu.getClassName,c=u(n),w=u(n,aF,bg,aI),aD=u(bf,ax,a4),ap=u(ah),aP=u(ah,a9),bk=u(ah,aY),F=u(k,W),X=u(k,W,bL),s=u(bf,q),b=u(bf,a),bz=u(bf,aL),bA=u(bf,aL,at),aE=u(bf,bC,bt,S),m=u(bf,bC,bt,bC),bm=u(bf,bC,bt,bC,am),aQ=u(bf,bC,bt,bC,bv,aB),bD=u(bf,bC,bt,ax),aK=u(bf,bC,bt,aZ,N),aR=u(bf,P,aT),bB=u(bf,aG),C=u(bf,B),bj=u(bf,bC,bh),ar=u(bf,bC,bh,n),a3=u(bf,bC,ax),bH=u(bf,bC,ax,S),ai=u(bf,bC,ax,S,I),G=u(bf,bC,ax,z),y=u(bf,bC,ax,an),bF=u(bf,bC,ax,g),aX=u(bf,bC,ax,aV),i='<div class="'+bj+'">'+'<div class="'+[c,w,ar].join(a7)+'"></div>'+"</div>",R='<div class="'+bB+'">'+'<div class="'+aR+'"></div>'+"</div>",h='<span class="'+aK+'">{label}</span>',ab='<table cellspacing="0" cellpadding="0" class="'+a3+'">'+"<tbody>"+'<tr class="'+b+'" height="1">'+'<td height="0" class="'+[bH,G].join(a7)+'"></td>'+'<td class="'+bA+'" colspan="1">'+'<div class="'+bz+'">'+'<div class="'+C+'"></div>'+"</div>"+"</td>"+"</tr>"+'<tr class="'+s+'">'+'<td class="'+[bH,bF].join(a7)+'"></td>'+"</tr>"+"</tbody>"+"</table>",aN='<td class="'+[bH,y].join(a7)+'" data-colnumber="{colNumber}">'+'<div class="'+ai+'"></div>'+"</td>",d='<div class="'+aX+'">{hour}</div>',ac='<table cellspacing="0" cellpadding="0" class="'+bD+'">'+"<tbody>"+'<tr class="'+aE+'"></tr>'+"</tbody>"+"</table>",aO='<th class="'+m+'" data-colnumber="{colNumber}"><a href="#">&nbsp;</a></th>',aa='<td class="'+[m,bm].join(a7)+'"></td>',p='<th class="'+[m,aQ].join(a7)+'">&nbsp;</th>';var bI=bu.Component.create({NAME:ak,ATTRS:{bodyContent:{value:x},days:{value:1,validator:al},delegateConfig:{value:{},setter:function(bO){var A=this;return bu.merge({dragConfig:{useShim:false},bubbleTargets:A,container:A.get(av),nodes:Z+ap,invalid:"input, select, button, a, textarea, "+Z+aP},bO||{});},validator:bK},eventWidth:{value:95,validator:al},filterFn:{value:function(A){return(A.getHoursDuration()<=24&&!A.get(E));}},headerDateFormatter:{value:function(bO){var A=this;var bP=A.get(k);return bu.DataType.Date.format(bO,{format:"%d %A",locale:bP.get(af)});},validator:bn},headerView:{value:true,validator:az},headerViewConfig:{setter:function(bO){var A=this;return bu.merge({displayDaysInterval:1,displayRows:6,filterFn:function(bP){return((bP.getHoursDuration()>24)||bP.get(E));},height:"auto",visible:true},bO||{});},value:{}},hourHeight:{value:52,validator:al},name:{value:bC},navigationDateFormatter:{value:function(bO){var A=this;var bP=A.get(k);return bu.DataType.Date.format(bO,{format:"%A, %B %d, %Y",locale:bP.get(af)});},validator:r},strings:{value:{allDay:"All day"}},headerTableNode:{valueFn:function(){return bu.Node.create(ac);}},headerViewLabelNode:{valueFn:function(){var bO=this;var A=bO.get(bp);return bu.Node.create(bE.sub(h,{label:A[E]}));}},resizerNode:{valueFn:function(){return bu.Node.create(i);}},tableNode:{valueFn:function(){return bu.Node.create(ab);}},colDaysNode:{valueFn:"_valueColDaysNode"},colHeaderDaysNode:{valueFn:"_valueColHeaderDaysNode"},markercellsNode:{valueFn:"_valueMarkercellsNode"},timesNode:{valueFn:"_valueTimesNode"}},HTML_PARSER:{colDaysNode:D(Z+y,1),colHeaderDaysNode:D(Z+m,2),headerTableNode:Z+bD,headerViewLabelNode:Z+aK,markercellsNode:D(Z+bB,24),resizerNode:Z+bj,tableNode:Z+a3,timesNode:D(Z+aX,24)},EXTENDS:bu.SchedulerView,prototype:{initializer:function(){var A=this;A[ae]=A.get(ae);A[bw]=A.get(bw);A[bJ]=A.get(bJ);A[aA]=A.get(aA);A[bo]=A.get(bo);A[a2]=A.get(a2);A[U]=A.get(U);A[aJ]=null;A[aU]=A[a2].one(Z+s);A[ay]=A.headerTableNode.one(Z+aE);A[ao]=A[ae].all(Z+ai);A[aM]=A[a2].one(Z+bF);A[a0]=A[a2].one(Z+bA);A[a6]=A[a2].one(Z+C);if(A.get(aC)){A[aC]=new bu.SchedulerTableView(A.get(aS));}},renderUI:function(){var A=this;A[aM].setContent(A[U]);A[a6].setContent(A[aA]);A[ae].appendTo(A[aU]);A[bw].appendTo(A[ay]);if(A[aC]){A[aC].set(k,A.get(k));A[aC].render();}},bindUI:function(){var A=this;A[bJ].delegate("click",bu.bind(A._onClickDaysHeader,A),Z+m);A[aU].delegate("mousedown",bu.bind(A._onMouseDownTableCol,A),Z+bH);A[aU].delegate("mouseenter",bu.bind(A._onMouseEnterEvent,A),Z+ap);
A[aU].delegate("mouseleave",bu.bind(A._onMouseLeaveEvent,A),Z+ap);A[aU].delegate("mousemove",bu.bind(A._onMouseMoveTableCol,A),Z+y);A[aU].delegate("mouseup",bu.bind(A._onMouseUpTableCol,A),Z+bH);A.on("drag:end",A._onEventDragEnd);A.on("drag:start",A._onEventDragStart);A.on("drag:tickAlignY",A._dragTickAlignY);A.on("schedulerChange",A._onSchedulerChange);A.after("drag:align",A._afterDragAlign);},syncUI:function(){var A=this;bI.superclass.syncUI.apply(this,arguments);A[a0].attr(L,A.get(J));A._setupDragDrop();},syncStdContent:function(){var bO=this;bO.setStdModContent(br.BODY,bO[a2].getDOM());var A=bu.NodeList.create(bO[bJ]);if(bO[aC]){A.push(bO[aC].get(av));A.push(bO.get(aq));}bO.setStdModContent(br.HEADER,A);},calculateEventHeight:function(bP){var bO=this;var A=bO.get(aj);return Math.max(bP*(A/60),A/2);},calculateTop:function(bO){var A=this;return((bO.getHours()*60)+bO.getMinutes()+(bO.getSeconds()/60))*(A.get(aj)/60);},getNextDate:function(){var A=this;var bO=A.get(k).get(a1);return Y.add(bO,Y.DAY,1);},getPrevDate:function(){var A=this;var bO=A.get(k).get(a1);return Y.subtract(bO,Y.DAY,1);},getColumnByDate:function(bO){var A=this;return A[ae].item(A.getDateDaysOffset(bO));},getColumnShimByDate:function(bO){var A=this;return A[ao].item(A.getDateDaysOffset(bO));},getDateByColumn:function(bO){var A=this;var bP=Y.safeClearTime(A.get(k).get(ba));return Y.add(bP,Y.DAY,bO);},getDateDaysOffset:function(bO){var A=this;var bP=Y.safeClearTime(A.get(k).get(ba));return Y.getDayOffset(Y.safeClearTime(bO),bP);},getYCoordTime:function(bR){var bO=this;var A=bO.get(aj);var bS=bc((bR/A).toFixed(2));var bQ=Math.floor((bS*100)%100*0.6);var bP=Math.floor(bS);return[bP,bQ,0];},plotEvent:function(bP){var A=this;var bQ=bP.get(bN);if(bQ.size()<2){bP.addPaddingNode();}var bS=bP.get(bN).item(0);var bO=bP.get(bN).item(1);var bR=A.getColumnShimByDate(bP.get(ag));var bT=A.getColumnShimByDate(bP.get(bx));if(bT){bT.append(bS);if(bP.get(ad)){bS.show();}}else{bS.hide();}if(bR){if(bR.compareTo(bT)||bP.isDayBoundaryEvent()){bO.hide();}else{bR.append(bO);if(bP.get(ad)){bO.show();}}}else{bO.hide();}bP.syncUI();A.syncEventTopUI(bP);A.syncEventHeightUI(bP);},plotEvents:function(){var A=this;var bO=A.get(k);var bP=A.get(bq);A[ao].each(function(bT,bS){var bQ=bO.getEventsByDay(A.getDateByColumn(bS),true);var bR=[];bT.empty();bu.Array.each(bQ,function(bU){if(bP.apply(A,[bU])){A.plotEvent(bU);bR.push(bU);}});A.syncEventsIntersectionUI(bR);});if(A.get(aC)){A.syncHeaderViewUI();}},syncColumnsUI:function(){var A=this;A[ae].each(function(bQ,bP){var bO=A.getDateByColumn(bP);bQ.toggleClass(F,Y.isToday(bO));});},syncDaysHeaderUI:function(){var bO=this;var bQ=bO.get(k).get(ba);var bP=bO.get(aH);var A=bO.get(af);bO[bw].all(by).each(function(bT,bS){var bR=Y.add(bQ,Y.DAY,bS);bT.toggleClass(X,Y.isToday(bR));bT.html(bP.call(bO,bR));});},syncEventsIntersectionUI:function(bO){var A=this;var bP=A.get(l);A.get(k).flushEvents();bu.Array.each(bO,function(bR){var bT=A.findEventIntersections(bR,bO);var bS=bT.length;var bQ=(bP/bS);bu.Array.each(bT,function(bV,bW){var bU=bV.get(bN).item(0);var bY=bQ*bW;var bX=bQ*1.7;if(bW===(bS-1)){bX=bP-bY;}bU.setStyle(a5,bX+O);bU.setStyle(aw,bY+O);var bZ=bU.get(H);if(bZ){bZ.insert(bU,bW);}bV._filtered=true;});});},syncEventHeightUI:function(bQ){var bO=this;var bU=bQ.get(ag);var A=bQ.get(bx);var bR=Y.clone(A);bR.setHours(24,0,0);var bS=Y.getMinutesOffset(bO.limitDate(bU,bR),A);bQ.get(bN).item(0).set(bs,bO.calculateEventHeight(bS));var bP=bQ.get(bN).item(1);if(bP.inDoc()){var bT=Y.getMinutesOffset(bU,Y.toMidnight(bQ.getClearEndDate()));bP.set(bs,bO.calculateEventHeight(bT));}},syncEventTopUI:function(bO){var A=this;bO.get(bN).item(0).setStyle(aW,A.calculateTop(bO.get(bx))+T);bO.get(bN).item(1).setStyle(aW,0);},syncHeaderViewUI:function(){var bO=this;if(bO.get(aC)){var bQ=bO[aC];bQ.plotEvents();var bR=bQ.get(av);bR.setStyle(f,e());var bP=bR.one(Z+aD);var A=Math.max(bP.get(bs),40);bQ.set(bi,A);bO._fillHeight();}},calculateYDelta:function(bP,bO){var A=this;return(bO[1]-bP[1])/(A.get(aj)/2)*30;},findEventIntersections:function(bO,bP){var A=this;var bQ=[];bu.Array.each(bP,function(bR){if(!bO._filtered&&bR.get(ad)&&bO.intersectHours(bR)){bQ.push(bR);}});return bQ;},getXYDelta:function(bO){var A=this;var bP=bO.currentTarget.getXY(),bQ=[bO.pageX,bO.pageY];return bu.Array.map(bP,function(bS,bR){return(bQ[bR]-bS);});},getTickY:function(){var A=this;return be(Math.ceil(A.get(aj)/2),10);},roundToNearestHour:function(bO,bP){var A=this;bO.setHours(bP[0],be(bP[1],A.getTickY()),bP[2]);},_afterDragAlign:function(bP){var bO=this;var A=bP.target;if(!bO[K]){bO[K]=A.actXY;}A.actXY[0]=null;},_dragTickAlignX:function(bP){var bO=this;var bS=bO[v];if(bS&&!bO[bd]){var bQ=bO[a8];var bR=bc(bP.attr(o))-bO.startColNumber;bO.draggingEventStartDate=Y.add(bS.get(bx),Y.DAY,bR);var A=Y.clone(bO.draggingEventStartDate);Y.copyHours(A,bQ.get(bx));bQ.move(A,{silent:true});bO.plotEvent(bQ);}},_dragTickAlignY:function(A){var bT=this;var bO=bT.get(k);var bV=bO.get(bM);var bQ=bT[v];if(bQ){var bU=A.target.get(au);var bR=bT[a8];var bS=bT.calculateYDelta(bT[K],bU.actXY);if(bT[bd]){var bP=Y.add(bT.draggingEventEndDate,Y.MINUTES,bS);if(Y.getMinutesOffset(bP,bT.draggingEventStartDate)<30){return;}bR.set(ag,bP,{silent:true});}else{bR.move(Y.add(bT.draggingEventStartDate,Y.MINUTES,bS),{silent:true});}bT.plotEvent(bR);}},_setupDragDrop:function(){var bO=this,bR=bO[a8];if(!bR){var bP=bO.get(k);bR=new bP.eventModel({scheduler:bP});bR.removeTarget(bP);bR.get(bN).addClass(bk);bR.set(ad,false,{silent:true});bO[a8]=bR;}if(!bO.delegate){bO.delegate=new bu.DD.Delegate(bO.get(t));}var A=bO.delegate.dd;A.unplug(bu.Plugin.DDConstrained);A.unplug(bu.Plugin.DDNodeScroll);var bQ=bO.bodyNode.get(Q);bQ.bottom=Infinity;bQ.top=-Infinity;A.plug(bu.Plugin.DDConstrained,{bubbleTargets:bO,constrain:bQ,stickY:true,tickY:bO.get(aj)/2});A.plug(bu.Plugin.DDNodeScroll,{node:bO.bodyNode,scrollDelay:150});},_uiSetDate:function(bO){var A=this;A.syncColumnsUI();A.syncDaysHeaderUI();},_onClickDaysHeader:function(bQ){var A=this;
var bP=A.get(k);if(bQ.target.test(by)){var bR=bP.getViewByName(bC);if(bR){var bO=bc(bQ.currentTarget.attr(o));bP.set(ba,A.getDateByColumn(bO));bP.set(bb,bR);}}bQ.preventDefault();},_onEventDragEnd:function(bO){var A=this;var bQ=A[v];if(bQ){var bP=A[a8];bP.set(ad,false,{silent:true});bQ.set(ad,true,{silent:true});bQ.copyDates(bP);A.get(k).syncEventsUI();}A[K]=null;A[v]=null;},_onEventDragStart:function(bP){var A=this;var bR=A[v]=A.delegate.dd.get(bN).getData(ah);if(bR){var bQ=A[a8];bQ.copyPropagateAttrValues(bR,null,{silent:true});A.plotEvent(bQ);bR.set(ad,false,{silent:true});A.draggingEventStartDate=Y.clone(bR.get(bx));A.draggingEventEndDate=Y.clone(bR.get(ag));var bO=A.getColumnByDate(bR.get(bx));A.startColNumber=bO?bc(bO.attr(o)):0;}},_onMouseDownTableCol:function(bO){var bT=this;var bS=bO.target;var bQ=bT.get(k);var bU=bQ.get(bM);if(bU&&!bQ.get(a9)){bU.hideOverlay();if(bS.test(Z+ai)){bT[K]=[bO.pageX,bO.pageY];var bV=bc(bO.currentTarget.attr(o));var bP=bT.getDateByColumn(bV);var A=bT.getXYDelta(bO);bT.roundToNearestHour(bP,bT.getYCoordTime(A[1]));var bR=Y.add(bP,Y.MINUTES,bU.get(bl));bU.move(bP,{silent:true});bU.setAttrs({allDay:false,endDate:bR},{silent:true});bT[M]=bP;bO.halt();}else{if(bS.test([Z+bj,Z+ar].join(j))){bT[bd]=true;}}}bT.get(av).unselectable();},_onMouseEnterEvent:function(bP){var A=this;var bQ=bP.currentTarget;var bO=bQ.getData(ah);if(bO&&!bO.get(a9)){A[bo].appendTo(bQ);}},_onMouseLeaveEvent:function(bO){var A=this;if(!A[bd]){A._removeResizer();}},_onMouseMoveTableCol:function(bR){var bO=this;var bQ=bR.currentTarget;var bP=bO.get(k).get(bM);if(bO[aJ]!==bQ){bO[aJ]=bQ;bO._dragTickAlignX(bO[aJ]);}var bS=bO[M];if(bS){var bU=be(bO.calculateYDelta(bO[K],[bR.pageX,bR.pageY]),bO.getTickY());var bT=(bU>=bO._delta);if(bO._delta!==bU){if(bU>0){var A=bT?Math.max(bU,bP.get(bl)):bU;bP.set(ag,Y.add(bS,Y.MINUTES,A),{silent:true});}else{bP.set(bx,Y.add(bS,Y.MINUTES,bU),{silent:true});}bO.plotEvent(bP);bO._delta=bU;}}},_onMouseUpTableCol:function(bQ){var A=this;var bP=A.get(k);var bO=bP.get(bM);if(bO&&!bP.get(a9)){if(A[M]){A.plotEvent(bO);bO.showOverlay([bQ.pageX,bQ.pageY]);}}A[M]=null;A[bd]=false;A[K]=null;A._removeResizer();A.get(av).selectable();},_onSchedulerChange:function(bO){var A=this;if(A[aC]){A[aC].set(k,bO.newVal);}},_removeResizer:function(){var A=this;A[bo].remove();},_valueColDaysNode:function(){var A=this;var bQ=A.get(J);var bO=[],bP=0;while(bQ--){bO.push(bu.Lang.sub(aN,{colNumber:bP++}));}return bu.NodeList.create(bO.join(x));},_valueColHeaderDaysNode:function(){var A=this;var bQ=A.get(J);var bO=[],bP=0;bO.push(aa);while(bQ--){bO.push(bu.Lang.sub(aO,{colNumber:bP++}));}bO.push(p);return bu.NodeList.create(bO.join(x));},_valueMarkercellsNode:function(){var A=this;var bO=[],bP;for(bP=0;bP<=23;bP++){bO.push(R);}return bu.NodeList.create(bO.join(x));},_valueTimesNode:function(){var A=this;var bQ=A.get(V);var bP=[],bO;for(bO=0;bO<=23;bO++){bP.push(bE.sub(d,{hour:bQ?Y.toIsoTimeString(bO):Y.toUsTimeString(bO,false,true)}));}return bu.NodeList.create(bP.join(x));}}});bu.SchedulerDayView=bI;},"@VERSION@",{skinnable:true,requires:["aui-scheduler-view-table","dd-drag","dd-delegate","dd-drop","dd-constrain"]});