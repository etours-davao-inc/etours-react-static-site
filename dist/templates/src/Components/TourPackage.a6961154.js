(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{62:function(e,t,n){"use strict";n.r(t);var a=n(140),r=n.n(a),i=n(0),o=n.n(i),l=n(16),c=n(141),u=(n(137),function(e){return o.a.createElement("div",{className:"tourpackage_info_wrapper"},o.a.createElement("h1",{id:"tourpackage_title",className:"m-0 pb-0"},e.data.name),o.a.createElement("span",null,o.a.createElement("small",null,"Last Updated: ",e.lastUpdate)),o.a.createElement("p",{id:"tourpackage_code_duration",className:"mt-3"},e.data.duration_text),o.a.createElement("p",{id:"tourpackage_description"},e.data.description),o.a.createElement("div",{id:"tourpackage_info_wrapper",dangerouslySetInnerHTML:{__html:e.data.info}}),o.a.createElement("h3",{style:{color:"#d35400",fontSize:"1em"}},"Terms and conditions"),o.a.createElement("div",{id:"tourpackage_info_wrapper",dangerouslySetInnerHTML:{__html:e.data.terms}}),o.a.createElement("h3",{style:{color:"#d35400",fontSize:"1em"}},"Responsibilities"),o.a.createElement("div",{id:"tourpackage_info_wrapper",dangerouslySetInnerHTML:{__html:e.data.responsibilites}}))}),s=n(24),d=n.n(s),m=n(175),p=n.n(m),h=n(56),f=n.n(h),g=n(19),y=n.n(g),E=n(20),k=n.n(E),b=n(21),v=n.n(b),x=n(22),D=n.n(x),w=n(55),C=n.n(w),P=n(23),N=n.n(P),B=n(54),F=n.n(B),R=n(241),S=n.n(R),I=(n(178),n(347)),_=n(359),q=function(e){try{Object(_.a)(e)}catch(t){console.log("Error while posting to FB Database")}},M=n(351),H=["NumPax","Calendar","Computation","Reservation","Confirmation"],O=["NumPax","DateRange","Computation","Reservation","Confirmation"],j=["NumPax","DateRange","Hotels","Computation","Reservation","Confirmation"],T=o.a.createContext(),z=function(e){function t(e){var n;return y()(this,t),n=v()(this,D()(t).call(this,e)),F()(C()(n),"submitBooking",function(){q({input:n.state.userInput,calculations:n.state.calculations,package:n.state.package}),n.step("+")}),F()(C()(n),"resetBookingForm",function(){n.setState({currentStep:0,currentModule:"",RFValid:!1,termsAccepted:!1,userInput:{inquiryDate:new Date,adults:n.state.data.price.adults[0],kid02:[0,0],kid35:[0,0],kid611:[0,0],name:"",email:"",contact:"",remarks:""},calculations:{}})}),n.state={data:e.data,currentStep:0,currentModule:"",applicableModules:"",RFValid:!1,termsAccepted:!1,package:{name:e.data.name,code:e.data.code,slug:e.data.slug,type:e.data.type,duration:e.data.duration,durationText:e.data.duration_text,info:e.data.info,responsibilities:e.data.responsibilites,terms:e.data.terms},userInput:{inquiryDate:new Date,adults:e.data.price.adults[0],kid02:[0,0],kid35:[0,0],kid611:[0,0],name:"",email:"",contact:"",remarks:""},calculations:{}},n}return N()(t,e),k()(t,[{key:"componentWillMount",value:function(){var e=this;new Promise(function(t,n){t(e.loadProperModules())}).then(function(t){var n=e.state.currentStep;e.updateCurrentModule(n,t)}),this.initializeDates()}},{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"loadProperModules",value:function(){var e,t=this.state.data.type,n=void 0!==this.state.data.hotels;return"daytour"===t?e=H:"multiday"===t&&n?e=j:"multiday"!==t||n||(e=O),e}},{key:"initializeDates",value:function(){var e=this.state.userInput,t=this.state.data,n=t.duration,a=t.startday,r=t.offsetnights,i=t.limitdays,o=new Date;if("multiday"===this.state.data.type){var l=Object(M.initDayRangeValues)(o,n,a,r,i),c=l.from,u=l.to,s=l.days,d=l.maxDays,m=l.nights,p=l.hotelNights;e.tourDates={from:c,to:u,days:s,nights:m,hotelNights:p},Object(M.setOptionPaymentDate)(o,c).then(function(t){e.tourDates.optionDate=t}),this.setState({userInput:e,disabledDaysBefore:c,minDays:n,maxDays:d,isRange:!0})}else e.tourDate=Object(M.getStartDate)(o,a),Object(M.setOptionPaymentDate)(e.inquiryDate,e.tourDate).then(function(t){e.optionDate=t}),this.setState({userInput:e,disabledDaysBefore:e.tourDate})}},{key:"step",value:function(e){var t=this.state.currentStep;switch(e){case"+":t++;break;case"-":t--}var n=this.state.applicableModules;this.updateCurrentModule(t,n)}},{key:"updateCurrentModule",value:function(e,t){var n=t[e];"Computation"==n&&this.doComputations(),this.setState({currentStep:e,currentModule:n,applicableModules:t})}},{key:"doComputations",value:function(){var e=Object(I.Calculate)(this.state.userInput);this.setState({calculations:e})}},{key:"handlePaxClick",value:function(e){var t=this.state.userInput,n=Object.keys(e)[0];t[n]=e[n],this.setState({userInput:t})}},{key:"clickNewDate",value:function(e){var t=this.state.userInput;t.tourDate=e,Object(M.setOptionPaymentDate)(t.inquiryDate,e).then(function(e){t.optionDate=e}),this.setState({userInput:t})}},{key:"clickDayRange",value:function(e){var t=Object(M.setDayRange)(this.state,e),n=t.userInput.inquiryDate,a=t.userInput.tourDates.from;Object(M.setOptionPaymentDate)(n,a).then(function(e){t.userInput.tourDates.optionDate=e}),this.setState(t)}},{key:"hotelClick",value:function(e){var t=this.state.userInput;t.hotel=e,this.setState({userInput:t})}},{key:"handleRFChange",value:function(e){var t=f()({},this.state.userInput),n=this.state.termsAccepted;"terms"==e.target.name?n=!n:t[e.target.name]=e.target.value;var a=this.isvalidRF(t,n);this.setState({userInput:t,termsAccepted:n,RFValid:a})}},{key:"isvalidRF",value:function(e,t){var n=e.name,a=e.email;return!(""==n||""==a||!S()(a)||!t)}},{key:"render",value:function(){return o.a.createElement(T.Provider,{value:{data:this.state.data,prices:this.state.data.price,currentStep:this.state.currentStep,currentModule:this.state.currentModule,RFValid:this.state.RFValid,termsAccepted:this.state.termsAccepted,userInput:this.state.userInput,calculations:this.state.calculations,disableDaysBefore:this.state.disabledDaysBefore,isRange:this.state.isRange,actions:{step:this.step.bind(this),handlePaxClick:this.handlePaxClick.bind(this),clickNewDate:this.clickNewDate.bind(this),clickDayRange:this.clickDayRange.bind(this),hotelClick:this.hotelClick.bind(this),handleRFChange:this.handleRFChange.bind(this),submitBooking:this.submitBooking.bind(this),resetBookingForm:this.resetBookingForm.bind(this)}}},this.props.children)}}]),t}(i.Component),G=T.Consumer,A=n(26),W=n.n(A),V=function(e){function t(){return y()(this,t),v()(this,D()(t).apply(this,arguments))}return N()(t,e),k()(t,[{key:"render",value:function(){var e=this.props.children;return W.a.createPortal(e,document.getElementById("modal"))}}]),t}(i.Component);function K(){var e=r()(["\n  background-color: #2ecc71;\n  color: white;\n  height: 45px;\n  font-size: 18px;\n  width: 100%;\n  border: none;\n"]);return K=function(){return e},e}var U=c.a.button(K()),L=function(e){function t(e){var n;return y()(this,t),(n=v()(this,D()(t).call(this,e))).state={show:!1},n}return N()(t,e),k()(t,[{key:"toggleShow",value:function(e){this.setState({show:!this.state.show})}},{key:"componentDidUpdate",value:function(){this.state.show?(document.body.style.overflow="hidden",document.ontouchmove=function(e){e.preventDefault()}):(document.body.style.overflow="visible",document.ontouchmove=function(e){return!0})}},{key:"componentWillUnmount",value:function(){document.body.style.overflow="visible"}},{key:"render",value:function(){var e=this;return this.state.show?o.a.createElement(V,null,o.a.createElement("div",{className:"modal"},o.a.createElement("div",{id:"modalWrapper"},o.a.createElement("div",{id:"modalBody"},o.a.createElement("span",{id:"closePortalBtn",onClick:function(){return e.toggleShow()}},"close [x]"),this.props.children)))):o.a.createElement("div",{className:"fixed-bottom sticky-top"},o.a.createElement(U,{onClick:function(){return e.toggleShow()},onTouchStart:function(){return e.toggleShow()}},"View price"))}}]),t}(i.Component);function Y(){var e=r()(["\n  padding: 5px 0;\n"]);return Y=function(){return e},e}function J(){var e=r()(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 2px;\n  border: 1px solid gray;\n  background-color: white;\n  opacity: .7;\n\n  :hover {\n    cursor: pointer;\n    color: #484848;   \n  }\n\n  ","\n"]);return J=function(){return e},e}function Q(){var e=r()(["\n  margin: 5px 0;\n  padding: 0;\n  list-style: none;\n  display:grid;\n  grid-template-columns:repeat(auto-fill, 40px);\n  grid-auto-rows: 40px;\n  grid-gap: 3px 3px;\n"]);return Q=function(){return e},e}function X(){var e=r()(["\n  margin: 0 auto;\n"]);return X=function(){return e},e}var Z=c.a.p(X()),$=c.a.ul(Q()),ee=c.a.li(J(),function(e){return e.selected&&"\n    border-color: rgba(46, 204, 113,1.0);\n    background-color: rgba(46, 204, 113,1.0);\n    color: white; \n    opacity: 1.0;\n    :hover {\n      color: white;\n    }\n  "}),te=c.a.section(Y()),ne=function(e){return o.a.createElement(G,null,function(t){var n=t.prices,a=t.userInput,r=t.actions;return o.a.createElement(te,null,o.a.createElement(Z,null,e.title),o.a.createElement($,null,n[e.type].map(function(t,n){var i=a[e.type][0]===t[0],l=F()({},e.type,t);return o.a.createElement(ee,{selected:i,key:n,onClick:function(){return r.handlePaxClick(l)},onTouchStart:function(){return r.handlePaxClick(l)}},t[0])})))})};function ae(){var e=r()(["\n  flex-grow: 1;\n  border-radius: 0;\n  padding: 8px;\n\n  ","\n\n  "," \n\n  ","     \n"]);return ae=function(){return e},e}function re(){var e=r()(["\n  display: flex;\n  justify-content: space-around;\n  margin-top: auto;\n  width: 100%;\n"]);return re=function(){return e},e}var ie=c.a.section(re()),oe=c.a.button(ae(),function(e){return e.next&&"\n    border: 1px solid #2ecc71;\n    background-color: #2ecc71;\n    color: white;  \n  "},function(e){return e.back&&"\n    border: 1px solid #ECF0F1;\n    background-color: #ECF0F1;\n  "},function(e){return e.disabled&&"\n    border: 1px solid #2ecc71;\n    background-color: #2ecc71;\n    opacity: .6;\n  "});function le(){var e=r()(["\n  padding: 10px;\n  height: 480px;\n  overflow-y: auto;\n"]);return le=function(){return e},e}var ce=c.a.div(le()),ue=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(ce,null,o.a.createElement("p",{className:"m-0 py-3 font-weight-bold"},"Select number of persons"),o.a.createElement(ne,{title:"Adults",type:"adults"}),o.a.createElement(ne,{title:"Kids 0-2 yrs old",type:"kid02"}),o.a.createElement(ne,{title:"Kids 3-5 yrs old",type:"kid35"}),o.a.createElement(ne,{title:"Kids 6-11 yrs old",type:"kid611"})),o.a.createElement(G,null,function(e){var t=e.actions;return o.a.createElement(ie,null,o.a.createElement(oe,{next:!0,onClick:function(){return t.step("+")}},"Select tour date"))}))};function se(){var e=r()(['\n  .DayPicker-Caption {\n    display: flex;\n    justify-content: center;\n    margin-bottom: 20px;\n  }\n\n  .rdrMonthAndYearPickers {\n    text-align: center;\n  }\n\n  abbr[title] {\n    text-decoration: none;\n    font-size: 1.2em;\n    cursor: pointer;\n  }\n\n  .DayPicker-WeekdaysRow, .DayPicker-Week {\n    display: grid;\n    grid-template-columns: repeat(7, minmax(40px, 1fr));\n    grid-auto-rows: 40px;\n    text-align: center;\n    grid-gap: 1px;\n  }\n\n  .DayPicker-Day {\n    --webkit-appearance: none;\n    background-color: white;\n    border-radius: 2px;\n    position: flex;\n    align-content: center;\n    color: #484848;\n    border: 1px solid silver;\n    text-align: center;\n    vertical-align: middle;\n    line-height: 40px;\n    opacity: .9;\n  }\n\n  .DayPicker-Day--today {\n    font-weight: bolder;\n    color: orange;\n  }\n\n  .DayPicker-Day:hover {\n    background-color: #2ecc71;\n    color: white;\n    cursor: pointer;\n  }\n\n  .DayPicker-Day--selected {\n    background-color: #2ecc71;\n    color: white;\n  }\n\n  .DayPicker-Day--outside {\n    opacity: .5;\n  }\n\n  .DayPicker-Day--disabled {\n    opacity: .2;\n    pointer-events: none;\n  }\n\n  .DayPicker-NavBar {\n    position: absolute;\n    width: 320px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n\n  .DayPicker-NavButton {\n    font-size: 2em;\n    color: gray;\n  }\n\n  .DayPicker-NavButton--prev::after {\n    content: "<";\n  }\n\n  .DayPicker-NavButton--next::after {\n    content: ">";\n  }\n\n  .DayPicker-Caption div {\n    font-size: 2em;\n  }\n\n  .DayPicker-Weekday abbr {\n    font-size: 1em;\n    color: gray;\n  }\n']);return se=function(){return e},e}var de=c.a.section(se()),me=function(e){return o.a.createElement(G,null,function(t){var n=t.data,a=t.isRange,r=t.actions,i="multiday"==n.type&&!a;return console.log(i),o.a.createElement(o.a.Fragment,null,o.a.createElement(ce,null,o.a.createElement("p",{className:"m-0 py-3 font-weight-bold"},"Choose tour date"),o.a.createElement(de,null,e.children)),o.a.createElement(ie,null,o.a.createElement(oe,{back:!0,className:"BookingFormButtons btn-back",onClick:function(){return r.step("-")}},"Back"),o.a.createElement(oe,{next:!0,disabled:i,className:"BookingFormButtons btn-next",onClick:function(){return r.step("+")}},"View computations")))})},pe=n(217),he=n.n(pe),fe=function(){return o.a.createElement(G,null,function(e){var t=e.userInput,n=e.disableDaysBefore,a=e.actions;return o.a.createElement(me,null,o.a.createElement(he.a,{showOutsideDays:!0,fixedWeeks:!0,selectedDays:t.tourDate,disabledDays:{before:n},onDayClick:function(e){return a.clickNewDate(e)}}))})},ge=function(){return o.a.createElement(G,null,function(e){var t=e.userInput,n=e.disableDaysBefore,a=e.actions;return o.a.createElement(me,null,o.a.createElement(he.a,{showOutsideDays:!0,fixedWeeks:!0,selectedDays:t.tourDates,disabledDays:{before:n},onDayClick:function(e){return a.clickDayRange(e)}}))})};function ye(){var e=r()(["\n  width: 115px;\n  border-radius: 1px;\n"]);return ye=function(){return e},e}function Ee(){var e=r()(["\n  font-size: 11px;\n  color: #c0392b;\n"]);return Ee=function(){return e},e}function ke(){var e=r()(["\n  font-size: 12px;\n  line-height: 1rem;\n  padding-top: 4px;\n  margin-bottom:0px;\n"]);return ke=function(){return e},e}function be(){var e=r()(["\n  display: grid;\n  grid-template-columns: 115px 1fr;\n  grid-gap: 5px;\n  margin-bottom: 15px;\n  align-items: top;\n  border-radius: 1px;\n  padding: 5px;\n  border: 1px solid #ecf0f1;\n  cursor: pointer;\n\n  ","  \n"]);return be=function(){return e},e}function ve(){var e=r()(["\n  margin-bottom: .5rem;\n  align-items: center;\n  border-radius: 1px;\n  padding: 5px;\n  border: 1px solid gray;\n  cursor: pointer; \n  text-align: center; \n  color: #1e90ff;\n\n  ","    \n"]);return ve=function(){return e},e}var xe=c.a.div(ve(),function(e){return e.selected&&"\n    background-color:rgba(46, 204, 113,.20);\n    border: 1px solid rgba(46, 204, 113,.30);\n  "}),De=c.a.div(be(),function(e){return e.selected&&"\n    background-color:rgba(46, 204, 113,.20);\n    border: 1px solid rgba(46, 204, 113,.30);\n  "}),we=c.a.p(ke()),Ce=c.a.span(Ee()),Pe=c.a.img(ye()),Ne=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(G,null,function(e){var t=e.data,n=e.userInput,a=e.actions,r=null,i={code:"",price:0,name:""};n.hasOwnProperty("hotel")&&(r=n.hotel.code);var l=t.hotels.sort(function(e,t){return e.price-t.price});return o.a.createElement("span",null,o.a.createElement(ce,null,o.a.createElement("p",{className:"m-0 py-3 font-weight-bold"},"Select Hotel"),o.a.createElement(xe,{selected:""===r,onClick:function(){return a.hotelClick(i)},onTouchStart:function(){return a.hotelClick(i)}},"Tour only (No hotel)"),l.map(function(e,t){return o.a.createElement(Be,{data:e,nights:n.tourDates.hotelNights,key:t,selected:r===e.code,onClick:function(e){return a.hotelClick(e)},onTouchStart:function(e){return a.hotelClick(e)}})})),o.a.createElement(ie,null,o.a.createElement(oe,{back:!0,className:"BookingFormButtons btn-back",onClick:function(){return a.step("-")}},"Back"),o.a.createElement(oe,{next:!0,className:"BookingFormButtons btn-next",onClick:function(){return a.step("+")}},"Proceed")))}))},Be=function(e){var t=Object.assign({},e.data);delete t.photo;var n=e.nights>1?"nights":"night";return o.a.createElement(De,{onClick:function(){return e.onClick(t)},selected:e.selected},o.a.createElement(Pe,{src:e.data.photo}),o.a.createElement("div",null,o.a.createElement(we,null,e.data.name),o.a.createElement(Ce,null,"Php ",e.data.price,"/night for ",e.nights," ",n)))},Fe=n(358),Re=n.n(Fe);function Se(){var e=r()(["\n  .computationGrid {\n    display: grid;\n    grid-template-columns: 2fr 1fr 1fr 1fr;\n    grid-gap: 5px 5px;\n    border-bottom: 1px dotted silver;\n    font-size: .85em;\n  }\n\n  .computationGrid p {\n    padding: 2px;\n    margin: 0;\n  }\n\n  .computationGrid p:nth-child(3) {\n    text-align: center;\n  }\n\n  .computationGrid p:nth-child(2), \n  .computationGrid p:nth-child(4) {\n    text-align: right;\n  }\n\n  .computationTotalBalance {\n    grid-column-start: 1;\n    grid-column-end: 4;\n  }    \n"]);return Se=function(){return e},e}var Ie=c.a.section(Se()),_e=function(){return o.a.createElement(G,null,function(e){var t=e.data,n=e.userInput,a=e.calculations,r=e.actions;return o.a.createElement(o.a.Fragment,null,o.a.createElement(ce,null,o.a.createElement(Ie,null,o.a.createElement("p",{className:"m-0 py-3 font-weight-bold"},"View summary"),o.a.createElement("dl",{className:"row small"},o.a.createElement("dt",{className:"col-sm-3"},"Name:"),o.a.createElement("dd",{className:"col-sm-9"},t.name),o.a.createElement("dt",{className:"col-sm-3"},"Duration:"),o.a.createElement("dd",{className:"col-sm-9"},n.hotel?"".concat(n.tourDates.days," days and ").concat(n.tourDates.nights," nights"):t.duration_text)),o.a.createElement("div",{id:"summary_wrapper"},o.a.createElement("div",{className:"computationGrid"},o.a.createElement("p",null),o.a.createElement("p",null,"Price"),o.a.createElement("p",null,"Qty"),o.a.createElement("p",null)),o.a.createElement("div",{className:"computationGrid"},o.a.createElement("p",null,"Adults"),o.a.createElement("p",null,o.a.createElement(Re.a,{quantity:a.item.adults,currency:"PHP",pattern:"!##,### "})),o.a.createElement("p",null,n.adults[0]),o.a.createElement("p",null,o.a.createElement(Re.a,{quantity:a.total.adults,currency:"PHP",pattern:"!##,### "}))),o.a.createElement("div",{className:"computationGrid"},o.a.createElement("p",null,"Kids (0-2 yrs)"),o.a.createElement("p",null,o.a.createElement(Re.a,{quantity:a.item.kid02,currency:"PHP",pattern:"!##,### "})),o.a.createElement("p",null,n.kid02[0]),o.a.createElement("p",null,o.a.createElement(Re.a,{quantity:a.total.kid02,currency:"PHP",pattern:"!##,### "}))),o.a.createElement("div",{className:"computationGrid"},o.a.createElement("p",null,"Kids (3-5 yrs)"),o.a.createElement("p",null,o.a.createElement(Re.a,{quantity:a.item.kid35,currency:"PHP",pattern:"!##,### "})),o.a.createElement("p",null,n.kid35[0]),o.a.createElement("p",null,o.a.createElement(Re.a,{quantity:a.total.kid35,currency:"PHP",pattern:"!##,### "}))),o.a.createElement("div",{className:"computationGrid"},o.a.createElement("p",null,"Kids (6-11 yrs)"),o.a.createElement("p",null,o.a.createElement(Re.a,{quantity:a.item.kid611,currency:"PHP",pattern:"!##,### "})),o.a.createElement("p",null,n.kid611[0]),o.a.createElement("p",null,o.a.createElement(Re.a,{quantity:a.total.kid611,currency:"PHP",pattern:"!##,### "}))),o.a.createElement("div",{className:"computationGrid"},o.a.createElement("p",{className:"computationTotalBalance"},"Total"),o.a.createElement("p",null,o.a.createElement(Re.a,{quantity:a.total.total,currency:"PHP",pattern:"!##,### "}))),o.a.createElement("div",{className:"computationGrid"},o.a.createElement("p",{className:"computationTotalBalance"},"Required downpayment to confirm your reservation"),o.a.createElement("p",null,o.a.createElement(Re.a,{quantity:a.total.downpayment,currency:"PHP",pattern:"!##,### "}))),o.a.createElement("div",{className:"computationGrid"},o.a.createElement("p",{className:"computationTotalBalance"},"Balance to be paid on the first day of your tour"),o.a.createElement("p",null,o.a.createElement(Re.a,{quantity:a.total.balance,currency:"PHP",pattern:"!##,### "})))))),o.a.createElement(ie,null,o.a.createElement(oe,{back:!0,className:"BookingFormButtons btn-back",onClick:function(){return r.step("-")}},"Back"),o.a.createElement(oe,{next:!0,className:"BookingFormButtons btn-next",onClick:function(){return r.step("+")}},"Reservations")))})};function qe(){var e=r()(["\n  input {\n    margin-bottom: 10px;\n    width: 100%;\n    height: 36px;\n    border-radius: 3px;\n    border: 1px solid rgba(149, 165, 166,1.0);\n    padding: 0 10px;\n    color: 1px solid rgba(149, 165, 166,1.0);\n  }\n\n  textarea {\n    margin-bottom: 10px;\n    width: 100%;\n    border-radius: 3px;\n    border: 1px solid rgba(149, 165, 166,1.0);\n    font-size: .90em;\n    padding: 10px;   \n  }\n\n  #terms_and_conditions {\n    display: inline-flex;\n    align-items: center;\n  }\n\n  #terms_and_conditions input  {\n    font-size: 1.2em;\n    width: auto;   \n    padding: 0;\n    margin: 0 10px 0 0; \n  }\n"]);return qe=function(){return e},e}var Me=c.a.form(qe()),He=function(){return o.a.createElement(G,null,function(e){var t=e.userInput,n=e.RFValid,a=e.termsAccepted,r=e.actions;return o.a.createElement(o.a.Fragment,null,o.a.createElement(ce,null,o.a.createElement(Me,null,o.a.createElement("p",{className:"m-0 py-3 font-weight-bold"},"Fill out contact details"),o.a.createElement("input",{type:"text",name:"name",placeholder:"Name",value:t.name,required:"required",onChange:function(e){return r.handleRFChange(e)}}),o.a.createElement("input",{type:"email",name:"email",placeholder:"Email",value:t.email,required:"required",onChange:function(e){return r.handleRFChange(e)}}),o.a.createElement("input",{type:"text",name:"contact",placeholder:"Contact Number",value:t.contact,onChange:function(e){return r.handleRFChange(e)}}),o.a.createElement("textarea",{name:"remarks",placeholder:"Extra notes",value:t.remarks,rows:4,onChange:function(e){return r.handleRFChange(e)}}),o.a.createElement("div",{id:"terms_and_conditions"},o.a.createElement("input",{id:"terms_checkbox",name:"terms",type:"checkbox",required:"required",checked:a,onChange:function(e){return r.handleRFChange(e)}}),o.a.createElement("label",{htmlFor:"terms_checkbox"},"Yes, I have read and agree with the terms and conditions below.")))),o.a.createElement(ie,null,o.a.createElement(oe,{back:!0,className:"BookingFormButtons btn-back",onClick:function(){return r.step("-")}},"Back"),o.a.createElement(oe,{next:!0,disabled:!n,className:"BookingFormButtons btn-next",onClick:function(){return r.submitBooking()}},"Submit")))})},Oe=function(){return o.a.createElement(G,null,function(e){var t=e.actions;return o.a.createElement(o.a.Fragment,null,o.a.createElement(ce,null,o.a.createElement("p",{style:{fontSize:"5em",padding:"50px",color:"#2ecc71",textAlign:"center",width:"100%"},className:"fa fa-thumbs-up"}),o.a.createElement("p",{style:{padding:"10px",color:"gray",textAlign:"center",width:"100%"},className:"h1"},"Your booking request has been sent.")),o.a.createElement(ie,null,o.a.createElement(oe,{next:!0,onClick:function(){return t.resetBookingForm()}},"Done")))})},je=function(){return o.a.createElement(G,null,function(e){switch(e.currentModule){case"NumPax":return o.a.createElement(ue,null);case"Calendar":return o.a.createElement(fe,null);case"DateRange":return o.a.createElement(ge,null);case"Hotels":return o.a.createElement(Ne,null);case"Computation":return o.a.createElement(_e,null);case"Reservation":return o.a.createElement(He,null);case"Confirmation":return o.a.createElement(Oe,null);default:return o.a.createElement(ue,null)}})};function Te(){var e=r()(["\n  display: flex;\n  flex-direction: column;\n  border-radius: 4px;\n  background-color: white;\n  height: 240px;\n  padding: 5px;\n"]);return Te=function(){return e},e}function ze(){var e=r()(["\n  display: flex;\n  flex-direction: column;\n  border-radius: 4px;\n  background-color: white;\n  height: 540px;\n  padding: 5px;\n"]);return ze=function(){return e},e}var Ge=function(e){return o.a.createElement(p.a,d()({},e,{maxWidth:991}))},Ae=function(e){return o.a.createElement(p.a,d()({},e,{minWidth:992}))},We=function(e){return o.a.createElement(p.a,d()({},e,{maxHeight:568,maxWidth:768,orientation:"landscape"}))},Ve=c.a.span(ze()),Ke=c.a.span(Te()),Ue=function(e){return o.a.createElement(z,{data:e.data},o.a.createElement(Ae,null,o.a.createElement(Ve,null,o.a.createElement(je,null))),o.a.createElement(Ge,null,o.a.createElement(L,null,o.a.createElement(Ve,null,o.a.createElement(je,null)))),o.a.createElement(We,null,o.a.createElement(L,null,o.a.createElement(Ke,null,o.a.createElement(je,null)))))};function Le(){var e=r()(["\n  /* Extra small devices (portrait phones, less than 576px) */\n    margin: 10px auto;\n  \n  /* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */\n  @media (min-width: 768px) {  \n    max-width: 768px;\n    margin: 0 auto;\n  }\n  \n  /* Large devices (desktops, 992px and up) */\n  @media (min-width: 992px) { \n    margin: 15px auto;\n    max-width: 95%;\n    display: grid;\n    grid-template-columns: minmax(440px, 800px) minmax(320px, 350px);\n    grid-gap: 5px 5px;\n    justify-content: center;\n  }\n"]);return Le=function(){return e},e}var Ye=c.a.div(Le());t.default=Object(l.withRouteData)(function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.Head,null,o.a.createElement("title",null,e.tourpackage.metatitle),o.a.createElement("meta",{name:"description",content:e.tourpackage.metadescription}),o.a.createElement("meta",{name:"keywords",content:e.tourpackage.metakeywords})),o.a.createElement(Ye,null,o.a.createElement(u,{data:e.tourpackage,lastUpdate:e.lastUpdate}),o.a.createElement(Ue,{data:e.tourpackage})))})}}]);