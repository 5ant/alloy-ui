/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.2.0PR1
build: nightly
*/
YUI.add("dd-gestures",function(A){A.DD.Drag.prototype._prep=function(){this._dragThreshMet=false;var C=this.get("node"),B=A.DD.DDM;C.addClass(B.CSS_PREFIX+"-draggable");C.on("gesturemovestart",A.bind(this._handleMouseDownEvent,this),{minDistance:0,minTime:0});C.setData("dd",true);C.on("gesturemoveend",A.bind(this._handleMouseUp,this),{standAlone:true});C.on("dragstart",A.bind(this._fixDragStart,this));C.on("gesturemove",A.throttle(A.bind(B._move,B),B.get("throttleTime")),{standAlone:true});};A.DD.DDM._setupListeners=function(){this._createPG();this._active=true;};},"3.2.0PR1",{requires:["dd-drag","event-synthetic","event-gestures"],skinnable:false});