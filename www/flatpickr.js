var flatpickr=function(a,b){"use strict";var c,d,f,e=[];if(flatpickr.prototype=flatpickr.init.prototype,d=function(a){return a._flatpickr&&a._flatpickr.destroy(),a._flatpickr=new flatpickr.init(a,b),a._flatpickr},a.nodeName)return d(a);if(c=document.querySelectorAll(a),1===c.length)return d(c[0]);for(f=0;f<c.length;f++)e.push(d(c[f]));return e};flatpickr.init=function(a,b){"use strict";var h,j,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,c=this,d=document.createElement("div"),e=document.createElement("span"),f=document.createElement("table"),g=document.createElement("tbody"),i=new Date;return d.className="flatpickr-calendar",e.className="flatpickr-current-month",b=b||{},j=function(){h=document.createElement("div"),h.className="flatpickr-wrapper","true"==String(c.config.inline)&&h.classList.add("inline"),c.element.parentNode.insertBefore(h,c.element),h.appendChild(c.element)},D=function(){var a=c.currentYearView;return 1!==a||a%4||!(a%100)&&a%400?c.l10n.daysInMonth[c.currentMonthView]:29},l=function(a,b){var d="",e=new Date(b),f={d:function(){var a=f.j();return 10>a?"0"+a:a},D:function(){return c.l10n.weekdays.shorthand[f.w()]},j:function(){return e.getDate()},l:function(){return c.l10n.weekdays.longhand[f.w()]},w:function(){return e.getDay()},F:function(){return m(f.n()-1,!1)},m:function(){var a=f.n();return 10>a?"0"+a:a},M:function(){return m(f.n()-1,!0)},n:function(){return e.getMonth()+1},U:function(){return e.getTime()/1e3},y:function(){return String(f.Y()).substring(2)},Y:function(){return e.getFullYear()}},g=a.split("");return c.forEach(g,function(a,b){f[a]&&"\\"!==g[b-1]?d+=f[a]():"\\"!==a&&(d+=a)}),d},m=function(a,b){return b===!0?c.l10n.months.shorthand[a]:c.l10n.months.longhand[a]},o=function(){var a=document.createElement("thead"),b=c.l10n.firstDayOfWeek,d=c.l10n.weekdays.shorthand.slice();b>0&&b<d.length&&(d=[].concat(d.splice(b,d.length),d.splice(0,b))),a.innerHTML="<tr><th>"+d.join("</th><th>")+"</th></tr>",f.appendChild(a)},n=function(a){for(var b=0;b<c.config.disable.length;b++)if(a>=new Date(c.config.disable[b]["from"])&&a<=new Date(c.config.disable[b]["to"]))return!0;return!1},p=function(){var f,h,o,p,q,a=new Date(c.currentYearView,c.currentMonthView,1).getDay(),b=D(),d=document.createDocumentFragment(),e=document.createElement("tr"),j="",k="",l="";for(a-=c.l10n.firstDayOfWeek,0>a&&(a+=7),a>0&&(e.innerHTML+='<td colspan="'+a+'">&nbsp;</td>'),f=a,g.innerHTML="",h=1;b>=h;h++)7===f&&(d.appendChild(e),e=document.createElement("tr"),f=0),o=new Date(c.currentYearView,c.currentMonthView,h),j=c.selectedDateObj||o.valueOf()!==i.valueOf()?"":" today",o=new Date(o.getTime()-6e4*o.getTimezoneOffset()),k=c.selectedDateObj&&o.valueOf()===c.selectedDateObj.valueOf()?" selected":"",p=c.config.disable&&n(o),q=c.config.minDate&&o<c.config.minDate||c.config.maxDate&&o>=c.config.maxDate,l=p||q?" disabled":" slot",e.innerHTML+='<td class="'+j+k+l+'"><span class="flatpickr-day">'+h+"</span></td>",f++;d.appendChild(e),g.appendChild(d)},q=function(){e.innerHTML="<span>"+m(c.currentMonthView,!1)+"</span> "+c.currentYearView},r=function(){var b,a=document.createElement("div");b='<span class="flatpickr-prev-month">'+c.config.prevArrow+"</span>"+'<span class="flatpickr-next-month">'+c.config.nextArrow+"</span>",a.className="flatpickr-months",a.innerHTML=b,a.appendChild(e),q(),d.appendChild(a)},s=function(){c.currentMonthView<0&&(c.currentYearView--,c.currentMonthView=11),c.currentMonthView>11&&(c.currentYearView++,c.currentMonthView=0)},t=function(a){h.contains(a.target)||y()},C=function(a){"prev"===a?c.currentMonthView--:c.currentMonthView++,s(),q(),p()},u=function(a){var b,e,d;a.preventDefault(),b=a.target,(b.classList.contains("slot")||b.parentNode.classList.contains("slot"))&&(d=parseInt(b.childNodes[0].innerHTML||b.innerHTML,10),c.selectedDateObj=new Date(c.currentYearView,c.currentMonthView,d),e=c.selectedDateObj.getTime(),c.config.altInput&&(document.querySelector(c.config.altInput).value=l(c.config.altFormat||c.config.dateFormat,e)),c.element.value=l(c.config.dateFormat,e),y(),p(),B())},v=function(){r(),o(),p(),f.appendChild(g),d.appendChild(f),h.appendChild(d)},w=function(){if("true"!=String(c.config.inline)){var a="INPUT"===c.element.nodeName?"focus":"click";c.element.addEventListener(a,x,!1)}h.querySelector(".flatpickr-prev-month").addEventListener("click",function(){C("prev")}),h.querySelector(".flatpickr-next-month").addEventListener("click",function(){C("next")}),f.addEventListener("click",u)},x=function(){c.element.blur(),document.addEventListener("click",t,!1),h.classList.add("open")},y=function(){c.config.inline||(document.removeEventListener("click",t,!1),h.classList.remove("open"),c.redraw())},B=function(){if("createEvent"in document){var b=document.createEvent("HTMLEvents");b.initEvent("change",!1,!0),a.dispatchEvent(b)}else a.fireEvent("onchange")},z=function(){var a,b;document.removeEventListener("click",t,!1),c.element.removeEventListener("focus",x,!1),c.element.removeEventListener("blur",y,!1),c.element.removeEventListener("click",x,!1),a=c.element.parentNode,a.removeChild(d),b=a.removeChild(c.element),a.parentNode.replaceChild(b,a)},E=function(a){c.currentYearView=a.getFullYear(),c.currentMonthView=a.getMonth(),c.currentDayView=a.getDate()},A=function(){var d,e;c.config={},c.element=a,c.destroy=z,i.setHours(0,0,0,0);for(d in c.defaultConfig)c.config[d]=b[d]||c.element.dataset[d.toLowerCase()]||c.defaultConfig[d];"string"==typeof c.config.defaultDate&&(c.config.defaultDate=c.config.defaultDate.replace(new RegExp("-","g"),"/")),(c.element.value||!c.element.value&&c.config.defaultDate)&&(e=Date.parse(c.element.value||c.config.defaultDate),c.selectedDateObj=isNaN(e)?null:new Date(e)),c.config.minDate&&(c.config.minDate=new Date(c.config.minDate),c.config.minDate.setHours(0,0,0,0)),c.config.maxDate&&(c.config.maxDate=new Date(c.config.maxDate),c.config.maxDate.setHours(0,0,0,0)),E(c.selectedDateObj||c.config.minDate||i),j(),v(),w()},c.redraw=function(){flatpickr(c.element,c.config)},c.set=function(a,b){a in c.config&&(c.config[a]=b,c.redraw())},A(),c},flatpickr.init.prototype={forEach:function(a,b){[].forEach.call(a,b)},l10n:{weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0},defaultConfig:{dateFormat:"Y-m-d",altFormat:null,altInput:null,defaultDate:null,minDate:null,maxDate:null,disable:null,shorthandCurrentMonth:!1,inline:!1,prevArrow:"&lt;",nextArrow:"&gt;"}};