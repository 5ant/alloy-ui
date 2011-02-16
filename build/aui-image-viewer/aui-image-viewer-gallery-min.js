AUI.add("aui-image-viewer-gallery",function(r){var m=r.Lang,E=m.isBoolean,ag=m.isNumber,N=m.isObject,p=m.isString,o="autoPlay",V="body",O="content",e="currentIndex",Q="delay",w=".",K="entry",g="handler",Y="hidden",T="href",d="image-gallery",G="img",x="left",S="links",R="offsetWidth",t="overlay",v="page",aj="paginator",F="paginatorEl",H="paginatorInstance",i="pause",D="paused",b="pausedLabel",aa="play",y="player",B="playing",n="playingLabel",ah="px",l="repeat",s="showPlayer",a=" ",ac="src",ab="thumb",W="toolbar",ai="totalLinks",u="useOriginalImage",I="viewportRegion",af="visible",C=function(){return Array.prototype.slice.call(arguments).join(a);},j=r.ClassNameManager.getClassName,M=j(d,aj),q=j(d,aj,O),P=j(d,aj,K),U=j(d,aj,S),ae=j(d,aj,ab),c=j(d,y),X=j(d,y,O),f=j(t,Y),al="(playing)",k='<div class="'+q+'">{PageLinks}</div>',z='<span class="'+P+'"><span class="'+ae+'"></span></span>',h='<div class="'+U+'"></div>',ak='<div class="'+C(f,M)+'"></div>',Z='<div class="'+c+'"></div>',ad='<span class="'+X+'"></span>';var J=r.Component.create({NAME:d,ATTRS:{autoPlay:{value:false,validator:E},delay:{value:7000,validator:ag},paginator:{value:{},setter:function(L){var A=this;var an=A.get(F);var am=A.get(ai);return r.merge({containers:an,pageContainerTemplate:h,pageLinkContent:r.bind(A._setThumbContent,A),pageLinkTemplate:z,template:k,total:am,on:{changeRequest:function(ao){A.fire("changeRequest",{state:ao.state});}}},L);},validator:N},paginatorEl:{readyOnly:true,valueFn:function(){return r.Node.create(ak);}},paginatorInstance:{value:null},paused:{value:false,validator:E},pausedLabel:{value:"",validator:p},playing:{value:false,validator:E},playingLabel:{value:al,validator:p},repeat:{value:true,validator:E},showPlayer:{value:true,validator:E},toolbar:{value:{},setter:function(L){var A=this;return r.merge({children:[{id:aa,icon:aa},{id:i,icon:i}]},L);},validator:N},useOriginalImage:{value:false,validator:E}},EXTENDS:r.ImageViewer,prototype:{toolbar:null,_timer:null,renderUI:function(){var A=this;J.superclass.renderUI.apply(this,arguments);A._renderPaginator();if(A.get(s)){A._renderPlayer();}},bindUI:function(){var A=this;J.superclass.bindUI.apply(this,arguments);A._bindToolbarUI();A.on("playingChange",A._onPlayingChange);A.on("pausedChange",A._onPausedChange);A.publish("changeRequest",{defaultFn:this._changeRequest});},destroy:function(){var A=this;J.superclass.destroy.apply(this,arguments);A.get(H).destroy();},hidePaginator:function(){var A=this;A.get(F).addClass(f);},pause:function(){var A=this;A.set(D,true);A.set(B,false);A._syncInfoUI();},play:function(){var A=this;A.set(D,false);A.set(B,true);A._syncInfoUI();},show:function(){var A=this;var am=A.getCurrentLink();if(am){A.showMask();r.ImageViewer.superclass.show.apply(this,arguments);var L=A.get(H);L.set(v,A.get(e)+1);L.changeRequest();}},showPaginator:function(){var A=this;A.get(F).removeClass(f);},_bindToolbarUI:function(){var A=this;if(A.get(s)){var L=A.toolbar;var an=L.item(aa);var am=L.item(i);if(an){an.set(g,r.bind(A.play,A));}if(am){am.set(g,r.bind(A.pause,A));}}},_cancelTimer:function(){var A=this;if(A._timer){A._timer.cancel();}},_renderPaginator:function(){var A=this;var am=A.get(F);r.one(V).append(am.hide());var L=new r.Paginator(A.get(aj)).render();A.set(H,L);},_renderPlayer:function(){var A=this;var am=A.get(F);var L=r.Node.create(ad);am.append(r.Node.create(Z).append(L));A.toolbar=new r.Toolbar(A.get(W)).render(L);},_startTimer:function(){var A=this;var L=A.get(Q);A._cancelTimer();A._timer=r.later(L,A,A._syncSlideShow);},_syncControlsUI:function(){var A=this;J.superclass._syncControlsUI.apply(this,arguments);if(A.get(af)){A._syncSelectedThumbUI();A.showPaginator();}else{A.hidePaginator();A._cancelTimer();}},_syncSelectedThumbUI:function(){var A=this;var am=A.get(e);var L=A.get(H);var an=L.get(v)-1;if(am!=an){L.set(v,am+1);L.changeRequest();}},_syncSlideShow:function(){var A=this;if(!A.hasNext()){if(A.get(l)){A.set(e,-1);}else{A._cancelTimer();}}A.next();},_changeRequest:function(A){var ar=this;var an=A.state.paginator;var am=A.state;var aq=am.before;var ap=am.page;if(!ar.get(af)){return false;}var ao=ar.get(e);var L=ap-1;if(!aq||(aq&&aq.page!=ap)){ar.set(e,L);ar.loadImage(ar.getCurrentLink().attr(T));an.setState(am);var au=ar.get(D);var at=ar.get(B);if(at&&!au){ar._startTimer();}}},_setThumbContent:function(ar,L){var A=this;var an=L-1;var ap=A.getLink(an);var aq=ar.one(w+ae);var ao=null;if(A.get(u)){ao=ap.attr(T);}else{var am=ap.one(G);if(am){ao=am.attr(ac);}}if(ao&&aq.getData("thumbSrc")!=ao){aq.setStyles({backgroundImage:"url("+ao+")"});aq.setData("thumbSrc",ao);}},_getInfoTemplate:function(L){var am;var A=this;var ao=A.get(D);var an=A.get(B);if(an){am=A.get(n);}else{if(ao){am=A.get(b);}}return C(J.superclass._getInfoTemplate.apply(this,arguments),am);},_afterVisibleChange:function(L){var A=this;J.superclass._afterVisibleChange.apply(this,arguments);if(L.newVal){if(A.get(o)){A.play();}}},_onPausedChange:function(L){var A=this;if(L.newVal){A._cancelTimer();}},_onPlayingChange:function(L){var A=this;if(L.newVal){A._startTimer();}}}});r.ImageGallery=J;},"@VERSION@",{requires:["aui-image-viewer-base","aui-paginator","aui-toolbar"],skinnable:true});