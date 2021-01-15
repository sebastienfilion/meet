(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),r=n.n(s),o=n(20),i=n.n(o),c=(n(27),n(3)),u=n(4),l=n(6),d=n(5),h=(n(28),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={showDetails:!1},e.handleShowDetails=function(){!1===e.state.showDetails?e.setState({showDetails:!0}):e.setState({showDetails:!1})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.showDetails,t=this.props.event;return Object(a.jsxs)("div",{className:"event",children:[Object(a.jsxs)("div",{className:"event-overview",children:[Object(a.jsx)("h3",{className:"summary",children:t.summary}),Object(a.jsx)("h5",{className:"location",children:t.location}),Object(a.jsx)("h5",{className:"start-time",children:t.start.dateTime}),!e&&Object(a.jsx)("button",{className:"details-button",onClick:this.handleShowDetails,children:" Show Event Details"}),e&&Object(a.jsx)("button",{className:"details-button",onClick:this.handleShowDetails,children:" Hide Event Details"})]}),e&&Object(a.jsxs)("div",{className:"event-details",children:[Object(a.jsx)("p",{className:"description",children:t.description}),Object(a.jsx)("p",{className:"end-time",children:t.end.dateTime}),Object(a.jsx)("p",{className:"time-zone",children:t.start.timeZone}),Object(a.jsx)("p",{className:"orginzer-email",children:t.organizer.email})]})]})}}]),n}(s.Component)),m=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){this.props.events;return Object(a.jsx)("ul",{className:"EventList",children:this.props.events.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)(h,{event:e})},e.id)}))})}}]),n}(s.Component),p=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={query:"",suggestions:[],showSuggestions:void 0},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));e.setState({query:n,suggestions:a})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"CitySearch",children:[Object(a.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(a.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(a.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(a.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(a.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(s.Component),f=n(21),v=n(7),b=n.n(v),j=n(8),g=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0}},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0}}],w=n(10),O=n.n(w),y=n(9),x=n.n(y),k=function(){var e=Object(j.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},T=function(){var e=Object(j.a)(b.a.mark((function e(){var t,n,a,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return x.a.done(),e.abrupt("return",g);case 4:return e.next=6,C();case 6:if(!(t=e.sent)){e.next=16;break}return S(),n="https://6th50jazg4.execute-api.us-east-1.amazonaws.com/dev/api/get-events/"+t,e.next=12,O.a.get(n);case 12:return(a=e.sent).data&&(s=E(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(s))),x.a.done(),e.abrupt("return",a.data.events);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(e){var t=e.map((function(e){return e.location}));return Object(f.a)(new Set(t))},C=function(){var e=Object(j.a)(b.a.mark((function e(){var t,n,a,s,r,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,k(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(s=e.sent){e.next=20;break}return e.next=17,O.a.get("https://6th50jazg4.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url");case 17:return r=e.sent,o=r.data.authUrl,e.abrupt("return",window.location.href=o);case 20:return e.abrupt("return",s&&C(s));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={numberOfEvents:32},e.handleInputChanged=function(t){var n=t.target.value;e.props.updateEvents(null,n),e.setState({numberOfEvents:n}),n<1||n>32?e.setState({infoText:"Please chose a number between 1 and 32"}):e.setState({infoText:""})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"number-of-events",children:[Object(a.jsx)("label",{className:"number-of-events-label",children:"Number of Events:"}),Object(a.jsx)("input",{type:"text",className:"event-number-input",value:this.state.numberOfEvents,onChange:this.handleInputChanged})]})}}]),n}(s.Component),Z=(n(48),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={events:[],locations:[],currentLocation:"all",numberOfEvents:32,infoText:""},e.updateEvents=function(t,n){e.setState({infoText:""});var a=e.state,s=a.currentLocation,r=a.numberOfEvents;t?T().then((function(n){var a=("all"===t?n:n.filter((function(e){return e.location===t}))).slice(0,r);e.setState({events:a,currentLocation:t})})):T().then((function(t){var a=("all"===s?t:t.filter((function(e){return e.location===s}))).slice(0,n);e.setState({events:a,numberOfEvents:n})}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,T().then((function(t){e.mounted&&e.setState({events:t,locations:E(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(N,{numberOfEvents:this.state.numberOfEvents,updateEvents:this.updateEvents}),Object(a.jsx)(p,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(a.jsx)(m,{events:this.state.events})]})}}]),n}(s.Component)),D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),s(e),r(e),o(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(Z,{})}),document.getElementById("root")),D()}},[[49,1,2]]]);
//# sourceMappingURL=main.36e87bf2.chunk.js.map