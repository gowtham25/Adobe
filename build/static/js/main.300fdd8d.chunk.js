(this.webpackJsonpadobe1=this.webpackJsonpadobe1||[]).push([[0],[,,,,,,,,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){e.exports=t.p+"static/media/cart.316b1539.png"},function(e,a,t){e.exports=t.p+"static/media/search.cbc92efe.png"},function(e,a,t){e.exports=t.p+"static/media/star.37a38992.png"},,function(e,a,t){e.exports=t(46)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,,,,,,,,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),c=t(15),r=t.n(c),l=(t(25),t(3)),o=t(7),m=t(1),s=(t(26),{items:[{name:"Samsung Series 4",image:"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",price:{actual:13999,display:22500},discount:37},{name:"Samsung Super 6",image:"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",price:{actual:35999,display:66900},discount:46},{name:"Samsung The Frame",image:"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",price:{actual:84999,display:133900},discount:36},{name:"Thomson B9 Pro",image:"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",price:{actual:9999,display:16999},discount:41},{name:"LG Ultra HD",image:"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",price:{actual:39990,display:79990},discount:50},{name:"Vu Ready LED TV",image:"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",price:{actual:7999,display:17e3},discount:52},{name:"Koryo Android TV",image:"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",price:{actual:55999,display:199990},discount:71},{name:"Micromax LED Smart",image:"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",price:{actual:9999,display:27990},discount:64}]}),u=(t(12),function(e){var a=e.image,t=void 0===a?"":a,n=e.name,c=void 0===n?"":n,r=e.actual,l=e.display,o=e.discount,m=e.count,s=e.removeItem,u=e.itemIndex;return i.a.createElement("div",{className:"i-container"},i.a.createElement("img",{src:t,className:"items-image"}),i.a.createElement("div",{className:"i-details-container"},i.a.createElement("div",{className:"details-container"},i.a.createElement("div",{className:"item-name"},c),i.a.createElement("div",{className:"price-container"},i.a.createElement("div",{className:"current-price"},"\u20b9",r),i.a.createElement("div",{className:"original-price"},"\u20b9",l),i.a.createElement("div",{className:"offer-details"},i.a.createElement("span",null,o,"% off")))),i.a.createElement("div",{className:"increment-decrement-item"},i.a.createElement("button",{disabled:0===m,className:"decrement-item",onClick:function(){return s(u,"decrement")}},"-"),i.a.createElement("input",{type:"number",disabled:!0,className:"total-count",value:m}),i.a.createElement("button",{className:"increment-item",onClick:function(){return s(u,"increment")}},"+")),i.a.createElement("div",{className:"remove-item"},i.a.createElement("button",{className:"remove-button",onClick:function(){return s(u,"remove")}},"Remove"))))}),d=function(e){var a=e.cartData,t=Object(n.useState)(),c=Object(m.a)(t,2),r=c[0],l=c[1],o=Object(n.useState)(),s=Object(m.a)(o,2),u=s[0],d=s[1],p=Object(n.useState)(),v=Object(m.a)(p,2),h=v[0],g=v[1];return Object(n.useEffect)((function(){var e=0,t=0,n=0;a.map((function(a,i){var c=a||{},r=c.price,l=void 0===r?{}:r,o=c.count,m=void 0===o?0:o,s=c.discount,u=void 0===s?0:s,d=l||{},p=(d.actual,d.display),v=void 0===p?0:p;return e+=m*v,t+=m*v/100*u,n+=m,!0})),l(e),d(t),g(n)}),[a]),i.a.createElement("div",{className:"p-container"},i.a.createElement("div",{className:"p-container-header"},"PRICE DETAILS"),i.a.createElement("div",{className:"p-internal-container"},i.a.createElement("div",{className:"cont"},i.a.createElement("div",{className:"price-item-container"},"Price (".concat(h," item) :")),i.a.createElement("div",{className:"p-container"},"\u20b9",r)),i.a.createElement("div",{className:"cont"},i.a.createElement("div",{className:"price-item-container"},"Discount :"),i.a.createElement("div",{className:"p-container"},"\u20b9",Math.floor(u)))),i.a.createElement("div",{className:"total-amount-cont cont"},i.a.createElement("div",{className:"price-item-container"},"Total Payable :"),i.a.createElement("div",{className:"p-container"},"\u20b9",Math.floor(r-u))))},p=function(e){var a=e.addCartData,t=Object(n.useState)(a),c=Object(m.a)(t,2),r=c[0],s=c[1],p=function(e,a){var t=Object(o.a)(r);switch(a){case"increment":t=t.map((function(a,t){return t===e?Object(l.a)({},a,{count:a.count+1}):a}));break;case"decrement":t=t.map((function(a,t){return t===e?Object(l.a)({},a,{count:a.count-1}):a}));break;case"remove":t=t.filter((function(a,t){return t!==e}))}s(t)};return i.a.createElement("div",{className:"individual-container"},i.a.createElement("div",{className:"left-container"},r&&r.length>0?r.map((function(e,a){var t=e||{},n=t.discount,c=void 0===n?"":n,r=t.name,l=void 0===r?"":r,o=t.image,m=void 0===o?"":o,s=t.price,d=void 0===s?{}:s,v=t.count,h=void 0===v?0:v,g=d||{},E=g.actual,f=void 0===E?"":E,b=g.display,N=void 0===b?"":b;return i.a.createElement(u,{count:h,key:a,itemData:e,itemIndex:a,discount:c,name:l,image:m,actual:f,display:N,removeItem:p})})):i.a.createElement("p",null,"No Items Added")),i.a.createElement("div",{className:"right-container"},i.a.createElement(d,{cartData:r})))},v=(t(27),function(e){var a=e.discount,t=void 0===a?"":a,n=e.name,c=void 0===n?"":n,r=e.image,l=void 0===r?"":r,o=e.actual,m=void 0===o?"":o,s=e.display,u=void 0===s?"":s,d=e.itemData,p=void 0===d?{}:d,v=e.handleAddCart;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"card-container-top"},i.a.createElement("div",{className:"card-container"},i.a.createElement("img",{src:l,className:"item-image"}),i.a.createElement("div",{className:"details-container"},i.a.createElement("div",{className:"item-name"},c),i.a.createElement("div",{className:"price-container"},i.a.createElement("div",{className:"current-price"},"\u20b9",m),i.a.createElement("div",{className:"original-price"},"\u20b9",u),i.a.createElement("div",{className:"offer-details"},i.a.createElement("span",null,t,"% off")))),i.a.createElement("div",{className:"button-container"},i.a.createElement("button",{className:"add-cart-button",onClick:function(){v(p)}},"Add Cart")))))}),h=t(16),g=t.n(h),E=t(17),f=t.n(E),b=t(18),N=t.n(b),k=(t(28),function(e){var a=e.setShowHome,t=e.setSearchQuery,n=e.searchQuery,c=e.handleSearch,r=e.showHome;return i.a.createElement(i.a.Fragment,null,i.a.createElement("img",{src:N.a,alt:"Logo",className:"logo",onClick:function(){a(!0)}}),i.a.createElement("div",{className:"search-container"},i.a.createElement("input",{className:"search-box",type:"text",value:n,placeholder:"Search",onChange:function(e){return t(e.currentTarget.value)}}),i.a.createElement("button",{onClick:function(e){c()},className:"search-button"},i.a.createElement("img",{src:f.a,alt:"Search",className:"search-icon"})),r&&i.a.createElement("img",{src:g.a,alt:"Search",className:"cart-icon",onClick:function(){return a(!1)}})))}),y=(t(8),t(19)),S=t.n(y),w=(t(10),function(e){var a=e.setHandleFilter,t=e.setShowFilterModal,n=e.setRangeValue,c=e.rangeValue;return i.a.createElement("div",null,i.a.createElement(S.a,{formatLabel:function(e){return"\u20b9".concat(e)},maxValue:2e5,minValue:0,value:c,onChange:function(e){return n(e)}}),i.a.createElement("div",{style:{color:"#a0a0a0",fontSize:"14px"}},"Price"),i.a.createElement("div",{className:"desktop-button-filter-container"},i.a.createElement("button",{className:"button-filter",onClick:function(){a(c)}},"Apply")),i.a.createElement("div",{className:"mobile-button-filter-container"},i.a.createElement("button",{className:"mobile-button-filter-apply",onClick:function(){a(c)}},"Apply"),i.a.createElement("button",{className:"mobile-button-filter-cancel",onClick:function(){t(!1)}},"Cancel")))}),j=(t(14),function(e){var a=e.title,t=void 0===a?"":a,n=e.setHandleFilter,c=void 0===n?"":n,r=e.setShowFilterModal,l=e.rangeValue,o=e.setRangeValue;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"modal-overlay"}),i.a.createElement("div",{className:"modal-wrapper","aria-modal":!0,"aria-hidden":!0,tabIndex:-1,role:"dialog"},i.a.createElement("div",{className:"modal"},i.a.createElement("div",{className:"modal-header"},t),i.a.createElement("div",{className:"modal-filter-container"},i.a.createElement(w,{setHandleFilter:c,setShowFilterModal:r,setRangeValue:o,rangeValue:l})))))}),O=function(e){var a=e.setShowSortModal,t=e.setSortBy,c=e.sortBy,r=Object(n.useState)(c),l=Object(m.a)(r,2),o=l[0],s=l[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"modal-overlay"}),i.a.createElement("div",{className:"modal-wrapper","aria-modal":!0,"aria-hidden":!0,tabIndex:-1,role:"dialog"},i.a.createElement("div",{className:"modal modal-filter"},i.a.createElement("div",{className:"modal-header"},"Sort Option"),i.a.createElement("div",{className:"modal-filter-container modal-sort-container"},i.a.createElement("div",null,i.a.createElement("input",{type:"radio",value:"LowToHigh",id:"lowToHigh",name:"sort",checked:"LowToHigh"===o,onChange:function(e){s(e.target.value)}}),i.a.createElement("label",{htmlFor:"lowToHigh"},"Price -- Low to High")),i.a.createElement("div",null,i.a.createElement("input",{type:"radio",value:"HighToLow",id:"highToLow",name:"sort",checked:"HighToLow"===o,onChange:function(e){s(e.target.value)}}),i.a.createElement("label",{htmlFor:"highToLow"},"Price -- High to Low")),i.a.createElement("div",null,i.a.createElement("input",{type:"radio",value:"Discount",id:"discount",name:"sort",checked:"Discount"===o,onChange:function(e){s(e.target.value)}}),i.a.createElement("label",{htmlFor:"discount"},"Discount"))),i.a.createElement("div",{className:"mobile-button-filter-container"},i.a.createElement("button",{className:"mobile-button-filter-apply",onClick:function(){t(o)}},"Apply"),i.a.createElement("button",{className:"mobile-button-filter-cancel",onClick:function(){a(!1)}},"Cancel")))))},C=function(e){var a=e.setSortBy,t=e.sortBy;return i.a.createElement("div",{className:"sort-by-desktop"},i.a.createElement("span",{className:"sort-title"},"Sort By"),i.a.createElement("div",{className:"sort-low-high ".concat("LowToHigh"===t?"active":""),onClick:function(){a("LowToHigh")}},"Price -- Low to High"),i.a.createElement("div",{className:"sort-high-low ".concat("HighToLow"===t?"active":""),onClick:function(){a("HighToLow")}},"Price -- High to Low"),i.a.createElement("div",{className:"sort-discount ".concat("Discount"===t?"active":""),onClick:function(){a("Discount")}},"Discount"))},H=function(){return i.a.createElement("div",{className:"footer"},"@copyright")};var x=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)("LowToHigh"),u=Object(m.a)(r,2),d=u[0],h=u[1],g=Object(n.useState)({min:0,max:2e5}),E=Object(m.a)(g,2),f=E[0],b=E[1],N=Object(n.useState)(!0),y=Object(m.a)(N,2),S=y[0],x=y[1],z=Object(n.useState)(""),L=Object(m.a)(z,2),T=L[0],F=L[1],D=Object(n.useState)(!1),q=Object(m.a)(D,2),V=q[0],B=q[1],M=Object(n.useState)(!1),I=Object(m.a)(M,2),A=I[0],P=I[1],R=Object(n.useState)({min:0,max:2e5}),Q=Object(m.a)(R,2),J=Q[0],W=Q[1],G=Object(n.useMemo)((function(){var e=[];switch(d){case"LowToHigh":e=s.items.sort((function(e,a){return e.price.actual-a.price.actual}));break;case"HighToLow":e=s.items.sort((function(e,a){return a.price.actual-e.price.actual}));break;case"Discount":e=s.items.sort((function(e,a){return a.discount-e.discount}))}return e=e.filter((function(e,a){var t=e.price,n=((void 0===t?{}:t)||{}).actual;return n>f.min&&n<f.max})),""!==T&&(e=e.filter((function(e,a){var t=(e||{}).name;return-1!==(void 0===t?"":t).toLowerCase().indexOf(T.toLowerCase())}))),P(!1),B(!1),e}),[d,f,T]),K=function(e){var a=[].concat(Object(o.a)(t),[Object(l.a)({},e,{count:1})]);c(a)};return i.a.createElement("div",{className:"App"},V&&i.a.createElement(j,{title:"Filter Options",setHandleFilter:b,setShowFilterModal:B,setRangeValue:W,rangeValue:J}),A&&i.a.createElement(O,{setShowSortModal:P,setSortBy:h,sortBy:d}),i.a.createElement("div",{className:"header"},i.a.createElement("div",{className:"header-internal-container"},i.a.createElement(k,{setShowHome:x,setSearchQuery:F,searchQuery:T,handleSearch:function(){console.log(T)},showHome:S}))),S?i.a.createElement("div",{className:"internal-container"},i.a.createElement("div",{className:"filter-container-top"},i.a.createElement("span",{className:"filter-header"},"Filter"),i.a.createElement(w,{setHandleFilter:b,setShowFilterModal:B,setRangeValue:W,rangeValue:J})),i.a.createElement("div",null,i.a.createElement("div",{className:"sort-by-container"},i.a.createElement(C,{setSortBy:h,sortBy:d}),i.a.createElement("div",{className:"sort-filter-mobile"},i.a.createElement("div",null,i.a.createElement("button",{onClick:function(){P(!0)}},"Sort")),i.a.createElement("div",null,i.a.createElement("button",{onClick:function(){B(!0)}},"Filter")))),i.a.createElement("div",{className:"card-container-top-root"},G&&G.length>0?G.map((function(e,a){var t=e||{},n=t.discount,c=void 0===n?"":n,r=t.name,l=void 0===r?"":r,o=t.image,m=void 0===o?"":o,s=t.price,u=(void 0===s?{}:s)||{},d=u.actual,p=void 0===d?"":d,h=u.display,g=void 0===h?"":h;return i.a.createElement(v,{key:a,itemData:e,discount:c,name:l,image:m,actual:p,display:g,handleAddCart:K})})):i.a.createElement("p",null,"No Item in Your Cart")))):i.a.createElement("div",{className:"all-cart-container"},i.a.createElement(p,{addCartData:t})),i.a.createElement(H,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[20,1,2]]]);
//# sourceMappingURL=main.300fdd8d.chunk.js.map