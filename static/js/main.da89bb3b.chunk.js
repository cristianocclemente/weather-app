(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(0),i=a.n(r),c=a(10),o=a.n(c),s=a(21),l=a(38),h=a(116),d=a(115),j=function(e){var t=e.updateLocation,a=Object(r.useState)(),i=Object(s.a)(a,2),c=i[0],o=i[1];return Object(n.jsx)(h.a,{style:{height:"100%"},fullWidth:!0,options:c||[],getOptionLabel:function(e){return e.title},renderInput:function(e){return Object(n.jsx)(d.a,Object(l.a)(Object(l.a)({},e),{},{label:"Select a Location",variant:"outlined",onChange:function(e,t){return a=e.target.value,void fetch("https://www.metaweather.com/api/location/search/?query=".concat(a)).then((function(e){return e.json()})).then((function(e){return o(e)}));var a}}))},onChange:function(e,a){return t(a)}})},m=a(47),u=(a(71),Object(m.a)({accessToken:"pk.eyJ1IjoicHNpbHZhaWMiLCJhIjoiY2tobmI5YTRlMDAzbTMxcGV6NDk3ZHNrdCJ9.mpgz1tj9j8cLrhrsZ5hlhw"})),p=function(e){var t=e.latt_long,a=parseFloat(t.split(",")[0]),r=parseFloat(t.split(",")[1]);return Object(n.jsx)(u,{center:[r,a],style:"mapbox://styles/mapbox/streets-v9",containerStyle:{height:"100%",width:"100%"}})},b=a(113),g=a(114),w=a(30),x=a.n(w),O=function(e){var t=e.data,a=e.setSelectedDayWeatherData,r="https://www.metaweather.com/static/img/weather/png/"+t.weather_state_abbr+".png";return Object(n.jsxs)(b.a,{onClick:function(){return a(t)},style:{display:"flex",flexDirection:"column",justifyContent:"space-between",cursor:"pointer",alignItems:"center"},children:[Object(n.jsx)(g.a,{variant:"h5",component:"h2",style:{margin:"1rem"},children:x()(t.applicable_date).format("D MMM")}),Object(n.jsx)("img",{width:"50%",height:"auto",src:r,alt:t.weather_state_name}),Object(n.jsxs)(g.a,{variant:"h5",component:"h3",style:{margin:"1rem"},children:[t.the_temp.toFixed(2)," \xbaC"]})]})},f=function(e){var t=e.fiveDayWeatherData,a=e.setSelectedDayWeatherData;return Object(n.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, auto)",columnGap:"1rem",height:"100%"},children:t.slice(0,5).map((function(e){return Object(n.jsx)(O,{data:e,setSelectedDayWeatherData:a},e.id)}))})},y=function(e){var t=e.selectedDayWeatherData,a="https://www.metaweather.com/static/img/weather/png/"+t.weather_state_abbr+".png";return Object(n.jsxs)(b.a,{style:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-evenly"},children:[Object(n.jsx)(g.a,{variant:"h3",component:"h3",align:"center",children:x()(t.applicable_date).format("D MMMM YYYY")}),Object(n.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly",alignItems:"center"},children:[Object(n.jsxs)(g.a,{variant:"h2",component:"h3",align:"right",children:[t.the_temp.toFixed(2)," \xbaC"]}),Object(n.jsxs)(g.a,{variant:"h5",component:"p",children:["Max: ",t.max_temp.toFixed(2)," \xbaC",Object(n.jsx)("br",{}),"Min: ",t.min_temp.toFixed(2)," \xbaC"]}),Object(n.jsx)("img",{width:"20%",height:"auto",src:a,alt:t.weather_state_name})]})]})},v=(a(73),function(){var e=Object(r.useState)(),t=Object(s.a)(e,2),a=t[0],i=t[1],c=Object(r.useState)(),o=Object(s.a)(c,2),l=o[0],h=o[1],d=Object(r.useState)(),m=Object(s.a)(d,2),u=m[0],b=m[1];return Object(n.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 2fr",columnGap:"1rem",gridTemplateRows:"auto auto 1fr",rowGap:"1rem",height:"100vh"},children:[Object(n.jsx)("div",{div:!0,style:{gridColumnStart:1,gridColumnEnd:3,margin:"1rem 1rem 0 1rem"},children:Object(n.jsx)(j,{updateLocation:function(e){if(i(e),e&&e.woeid){var t=e.woeid;fetch("https://www.metaweather.com/api/location/".concat(t)).then((function(e){return e.json()})).then((function(e){h(e.consolidated_weather),b(e.consolidated_weather[0])}))}}})}),Object(n.jsx)("div",{style:{gridRowStart:"2",gridRowEnd:"4",margin:"0 0 1rem 1rem"},children:a&&Object(n.jsx)(p,{latt_long:a.latt_long})}),Object(n.jsx)("div",{style:{gridRowStart:"2",gridColumnStart:"2",margin:"0 1rem 0 0"},children:l&&Object(n.jsx)(f,{fiveDayWeatherData:l,setSelectedDayWeatherData:b})}),Object(n.jsx)("div",{style:{gridRowStart:"3",gridColumnStart:"2",margin:"0 1rem 1rem 0"},children:u&&Object(n.jsx)(y,{selectedDayWeatherData:u})})]})});o.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.da89bb3b.chunk.js.map