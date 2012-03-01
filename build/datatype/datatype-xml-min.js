/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.2.0
build: nightly
*/
YUI.add("datatype-xml-parse",function(b){var a=b.Lang;b.mix(b.namespace("DataType.XML"),{parse:function(f){var d=null;if(a.isString(f)){try{if(!a.isUndefined(ActiveXObject)){d=new ActiveXObject("Microsoft.XMLDOM");d.async=false;d.loadXML(f);}}catch(c){try{if(!a.isUndefined(DOMParser)){d=new DOMParser().parseFromString(f,"text/xml");}}catch(g){}}}if((a.isNull(d))||(a.isNull(d.documentElement))||(d.documentElement.nodeName==="parsererror")){}return d;}});b.namespace("Parsers").xml=b.DataType.XML.parse;},"3.2.0");YUI.add("datatype-xml-format",function(b){var a=b.Lang;b.mix(b.namespace("DataType.XML"),{format:function(c){try{if(!a.isUndefined(XMLSerializer)){return(new XMLSerializer()).serializeToString(c);}}catch(d){if(c&&c.xml){return c.xml;}else{return(a.isValue(c)&&c.toString)?c.toString():"";}}}});},"3.2.0");YUI.add("datatype-xml",function(a){},"3.2.0",{use:["datatype-xml-parse","datatype-xml-format"]});