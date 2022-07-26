var storeify_requestaquote = "eyJzdGF0dXMiOjAsInJlbW92ZV9jb3B5cmlnaHQiOjAsIm1vZGUiOjAsImxvZ2luX3NlZSI6MCwiYnV0dG9uX2xhYmVsIjoiQ2FsbCBmb3IgUHJpY2UiLCJlbGVfaXRlbV9saXN0IjoiLnRlbXBsYXRlLWNvbGxlY3Rpb24sLmdyaWRfX2l0ZW0uZ3JpZF9faXRlbS0tY29sbGVjdGlvbi10ZW1wbGF0ZSwucHJvZHVjdC1yZWNvbW1lbmRhdGlvbnNfX2lubmVyIC5ncmlkX19pdGVtLCAjQ29sbGVjdGlvblNlY3Rpb24gLmdyaWQtdW5pZm9ybSAuZ3JpZC1pdGVtLCAjc2hvcGlmeS1zZWN0aW9uLWNvbGxlY3Rpb24tdGVtcGxhdGUgLnByb2R1Y3QtaXRlbSwgI3Nob3BpZnktc2VjdGlvbi1jb2xsZWN0aW9uLXRlbXBsYXRlIC5ncmlkX19pdGVtLCAuY29sbGVjdGlvbnNfX3Byb2R1Y3RzIC5mZWF0dXJlZC1jb2xsZWN0aW9uc19faXRlbSwgI3Byb2R1Y3QtZ3JpZCAuZ3JpZF9faXRlbSwgLnRlbXBsYXRlLWNvbGxlY3Rpb24gLmdyaWQtLXVuaWZvcm0gLmdyaWRfX2l0ZW0sLmNvbGxlY3Rpb24tZ3JpZC1zZWN0aW9uLC5jb2xsZWN0aW9uIiwiZWxlX3ByaWNlX3JlbW92ZSI6Ii5wcm9kdWN0X19wcmljZXMsLnByaWNlLWJveCwjY29tcGFyZVByaWNlLXByb2R1Y3QtdGVtcGxhdGUsI1Byb2R1Y3RQcmljZS1wcm9kdWN0LXRlbXBsYXRlLCNQcm9kdWN0UHJpY2UsLnByb2R1Y3QtcHJpY2UsLnByb2R1Y3RfX3ByaWNlLCNwcm9kdWN0UHJpY2UtcHJvZHVjdC10ZW1wbGF0ZSwucHJvZHVjdF9fY3VycmVudC1wcmljZSwucHJvZHVjdC10aHVtYi1jYXB0aW9uLXByaWNlLWN1cnJlbnQsLnByb2R1Y3QtaXRlbS1jYXB0aW9uLXByaWNlLWN1cnJlbnQsLmdyaWQtcHJvZHVjdF9fcHJpY2Usc3Bhbi5wcmljZSxzcGFuLnByb2R1Y3QtcHJpY2UsLnByb2R1Y3RpdGVtLS1wcmljZSwucHJvZHVjdC1wcmljaW5nLHNwYW4ubW9uZXksLnByb2R1Y3QtaXRlbV9fcHJpY2UsLnByb2R1Y3QtbGlzdC1pdGVtLXByaWNlLHAucHJpY2UsZGl2LnByaWNlLC5wcm9kdWN0LW1ldGFfX3ByaWNlcyxkaXYucHJvZHVjdC1wcmljZSxzcGFuI3ByaWNlLC5wcmljZS5tb25leSxoMy5wcmljZSxhLnByaWNlLC5wcmljZS1hcmVhLC5wcm9kdWN0LWl0ZW0tcHJpY2UsLnByaWNlYXJlYSwuY29sbGVjdGlvbkdyaWQgLmNvbGxlY3Rpb25CbG9jay1pbmZvID4gcCwjQ29tcGFyZVByaWNlLC5wcm9kdWN0LS1wcmljZS13cmFwcGVyLC5wcm9kdWN0LXBhZ2UtLXByaWNlLXdyYXBwZXIsLmNvbG9yLS1zaG9wLWFjY2VudC5mb250LXNpemUtLXMudC0tbWV0YS5mLS1tYWluLC5Db21wYXJlUHJpY2UsLlByb2R1Y3RQcmljZSwucHJvZFRodW1iIC50aXRsZSBzcGFuOmxhc3QtY2hpbGQsLnByaWNlLC5wcm9kdWN0LXNpbmdsZV9fcHJpY2UtcHJvZHVjdC10ZW1wbGF0ZSwucHJvZHVjdC1pbmZvLXByaWNlLC5wcmljZS1tb25leSwucHJvZC1wcmljZSwjcHJpY2UtZmllbGQsLnByb2R1Y3QtZ3JpZC0tcHJpY2UsLnByaWNlcywucHJpY2luZywjcHJvZHVjdC1wcmljZSwubW9uZXktc3R5bGluZywuY29tcGFyZS1hdC1wcmljZSwucHJvZHVjdC1pdGVtLS1wcmljZSwuY2FyZF9fcHJpY2UsLnByb2R1Y3QtY2FyZF9fcHJpY2UsLnByb2R1Y3QtcHJpY2VfX3ByaWNlLC5wcm9kdWN0LWl0ZW1fX3ByaWNlLXdyYXBwZXIsLnByb2R1Y3Qtc2luZ2xlX19wcmljZSwuZ3JpZC1wcm9kdWN0X19wcmljZS13cmFwLGEuZ3JpZC1saW5rLHAuZ3JpZC1saW5rX19tZXRhIiwiZWxlX2J0bl9yZW1vdmUiOiIuc2hvcGlmeS1wYXltZW50LWJ1dHRvbiwjQWRkVG9DYXJ0LXByb2R1Y3QtdGVtcGxhdGUsI0FkZFRvQ2FydCwjYWRkVG9DYXJ0LXByb2R1Y3QtdGVtcGxhdGUsLnByb2R1Y3RfX2FkZC10by1jYXJ0LWJ1dHRvbiwucHJvZHVjdC1mb3JtX19jYXJ0LXN1Ym1pdCwuYWRkLXRvLWNhcnQsLmNhcnQtZnVuY3Rpb25zID4gYnV0dG9uLC5wcm9kdWN0aXRlbS0tYWN0aW9uLWF0YywucHJvZHVjdC1mb3JtLS1hdGMtYnV0dG9uLC5wcm9kdWN0LW1lbnUtYnV0dG9uLWF0YywucHJvZHVjdF9fYWRkLXRvLWNhcnQsLnByb2R1Y3QtYWRkLC5hZGQtdG8tY2FydC1idXR0b24sI2FkZFRvQ2FydCwucHJvZHVjdC1kZXRhaWxfX2Zvcm1fX2FjdGlvbiA+IGJ1dHRvbiwucHJvZHVjdC1mb3JtLXN1Ym1pdC13cmFwID4gaW5wdXQsLnByb2R1Y3QtZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdLGlucHV0LnN1Ym1pdCwuYWRkX3RvX2NhcnQsLnByb2R1Y3QtaXRlbS1xdWljay1zaG9wLCNhZGQtdG8tY2FydCwucHJvZHVjdEZvcm0tc3VibWl0LC5hZGQtdG8tY2FydC1idG4sLnByb2R1Y3Qtc2luZ2xlX19hZGQtYnRuLC5xdWljay1hZGQtLWFkZC1idXR0b24sLnByb2R1Y3QtcGFnZS0tYWRkLXRvLWNhcnQsLmFkZFRvQ2FydCwucHJvZHVjdC1mb3JtIC5mb3JtLWFjdGlvbnMsLmJ1dHRvbi5hZGQsLmJ0bi1jYXJ0LGJ1dHRvbiNhZGQsLmFkZHRvY2FydCwuQWRkdG9DYXJ0LC5wcm9kdWN0LWFkZCBpbnB1dC5hZGQsYnV0dG9uI3B1cmNoYXNlLGZvcm1bYWN0aW9uPVwiXC9jYXJ0XC9hZGRcIl0gaW5wdXRbdHlwZT1cImJ1dHRvblwiXSxmb3JtW2FjdGlvbj1cIlwvY2FydFwvYWRkXCJdIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0sZm9ybVthY3Rpb249XCJcL2NhcnRcL2FkZFwiXSBidXR0b25bdHlwZT1cInN1Ym1pdFwiXSwucHJvZHVjdF9fZm9ybSBidXR0b25bdHlwZT1cInN1Ym1pdFwiXSwjQWRkVG9DYXJ0LS1wcm9kdWN0LXRlbXBsYXRlLC5wcm9kdWN0LWZvcm1fX2FkZC10by1jYXJ0LGZvcm1bYWN0aW9uPVwiXC9jYXJ0XC9hZGQqXCJdIGlucHV0W3R5cGU9XCJidXR0b25cIl0sZm9ybVthY3Rpb249XCJcL2NhcnRcL2FkZCpcIl0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxmb3JtW2FjdGlvbio9XCJcL2NhcnRcL2FkZCpcIl0gYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0sLnByb2R1Y3RfX2Zvcm0gYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0iLCJlbGVfcXR5X3JlbW92ZSI6Ii5wcm9kdWN0LWZvcm1fX2l0ZW0tLXF1YW50aXR5LC5wcm9kdWN0LXNpbmdsZV9fcXVhbnRpdHksLmpzLXF0eSwucXVhbnRpdHktd3JhcHBlciwucXVhbnRpdHktc2VsZWN0b3IsLnByb2R1Y3QtZm9ybV9fcXVhbnRpdHktc2VsZWN0b3IsLnByb2R1Y3Qtc2luZ2xlX19hZGR0b2NhcnQgbGFiZWwiLCJlbGVfcmVtb3ZlIjoiIiwiZWxlX2ZybV9kZXRhaWwiOiIudGVtcGxhdGUtcHJvZHVjdCwucHJvZHVjdC10ZW1wbGF0ZV9fY29udGFpbmVyIFx1MDBhMC5ncmlkX19pdGVtLCAucHJvZHVjdF9faW5mby13cmFwcGVyLmdyaWRfX2l0ZW0sICNzaG9waWZ5LXNlY3Rpb24tcHJvZHVjdCAucHJvZHVjdF9fY29udGVudCwgI1Byb2R1Y3RTZWN0aW9uIC5ncmlkLCAjUHJvZHVjdFNlY3Rpb24tLXByb2R1Y3QtdGVtcGxhdGUgLmdyaWQsICNzaG9waWZ5LXNlY3Rpb24tcHJvZHVjdC10ZW1wbGF0ZSAucHJvZHVjdF9fZGV0YWlscywgI3Nob3BpZnktc2VjdGlvbi1wcm9kdWN0LXRlbXBsYXRlIC5ncmlkLC5wcm9kdWN0LXNlY3Rpb24sLnBhZ2UtcHJvZHVjdCIsInJlbW92ZV9wcmljZSI6MCwiYXV0b19lbmFibGUiOjAsInJlbW92ZV9idXR0b24iOjAsImhpZGVfYnRuX3F1b3RlIjowLCJoaWRlX29uX3Byb2R1Y3QiOjAsImVuYWJsZV9jYXB0Y2hhIjowLCJzaG9ydF9jb2RlIjowLCJnZ19zaXRlX2tleSI6IiIsImdnX3NlY3JldF9rZXkiOiIiLCJqcXVlcnlfaW5jbHVkZWQiOiJ7XCJqcXVlcnlcIjpcIjFcIixcImJvb3RzdHJhcFwiOlwiMVwiLFwibW9tZW50anNcIjpcIjFcIixcImRhdGV0aW1lXCI6XCIxXCIsXCJmaWxlaW5wdXRcIjpcIjFcIixcImpxdWVyeV92YWxpZGF0ZVwiOlwiMVwifSIsImxhbmciOnsiYnRuX2FkZHF1b3RlIjoiQWRkIHRvIFF1b3RlIiwiY2FsbF9mb3JfcHJpY2UiOiJSZXF1ZXN0IGEgcXVvdGUiLCJidG5fdmlldyI6IlZpZXcgUXVvdGUiLCJidG5fY29udGludWUiOiJDb250aW51ZSBTaG9wIiwiYWRkX3RpdGxlIjoiQWRkIFwie3twcm9kdWN0fX1cIiB0byBxdW90ZSIsInRibF9uYW1lIjoiTmFtZSIsInRibF9za3UiOiJTa3UiLCJ0Ymxfb3B0aW9uIjoiT3B0aW9uIiwidGJsX3F0eSI6IlFUWSIsInF1b3RlX2VtcHR5IjoiWW91ciBxdW90ZSBpcyBjdXJyZW50bHkgZW1wdHkuIiwieW91cl9wcmljZSI6IllvdXIgUHJpY2UiLCJvbGRfcHJpY2UiOiJQcmljZSIsInByaW50IjoiUHJpbnQgUERGIiwidG90YWwiOiJUb3RhbCIsImJ0bl9zZWVfcHJpY2UiOiJMb2dpbiB0byBzZWUgcHJpY2UiLCJkcmFmdF9vcmRlciI6IkRyYWZ0IE9yZGVyIiwiZGF0ZSI6IkRhdGUiLCJzdGF0dXMiOiJTdGF0dXMiLCJ2aWV3IjoiVmlldyIsInF1b3RlX2hpc3RvcnkiOiJRdW90ZSBoaXN0b3J5IiwibG9hZF9tb3JlIjoiTG9hZCBtb3JlID4+Iiwic3VidG90YWwiOiJTdWJ0b3RhbCIsInRvdGFsX3RheCI6IlRvdGFsIFRheCIsImV4Y2xfc2hpcHBpbmciOiIoRXhjbC4gU2hpcHBpbmcpIiwiZXhjbF90YXhfc2hpcHBpbmciOiIoRXhjbC4gVGF4ICYgU2hpcHBpbmcpIn0sIm1ldGFfaWQiOjIxOTk4MjgwOTY2MzAyLCJjc3MiOiIiLCJlbmFibGVfc210cCI6MCwiZHJpdmVyIjoic210cCIsImhvc3QiOiIiLCJ1c2VybmFtZSI6IiIsInBhc3N3b3JkIjoiIiwiZW5jcnlwdGlvbiI6IiIsInBvcnQiOiIiLCJuYW1lIjoiIiwicmVjaXBpZW50IjoiIiwiZW5hYmxlX2VtYWlsX3Nob3BpZnkiOjEsImVuYWJsZV9lbWFpbF9hcHAiOjEsImVtYWlsX2NjIjoiIiwicXVvdGVfc2VuZG1haWxfZnJvbSI6IiIsIm9yZGVyX3N1YiI6IllvdXIgcXVvdGUgaGFzIGJlZW4gYWNjZXB0ZWQhIiwib3JkZXJfY29udGVudCI6IjxwPkRlYXIgPHN0cm9uZz57Y3VzdG9tZXJfbmFtZX08XC9zdHJvbmc+LDxcL3A+XHJcblxyXG48cD5Zb3VyIHF1b3RlIGhhcyBiZWVuJm5ic3A7YWNjZXB0ZWQgYW5kIGNvbnZlcnRlZCB0byBvcmRlciA8c3Ryb25nPntvcmRlcl9uYW1lfTxcL3N0cm9uZz4uPFwvcD5cclxuXHJcbjxwPnttZXNzYWdlfTxcL3A+XHJcblxyXG48aDM+UXVvdGUgc3VtbWFyeTxcL2gzPlxyXG5cclxuPHA+e3RhYmxlX3Byb2R1Y3R9PFwvcD5cclxuXHJcbjxwPkJlc3QgcmVnYXJkcyw8YnIgXC8+XHJcbjxzdHJvbmc+e3N0b3JlX25hbWV9PFwvc3Ryb25nPjxcL3A+IiwiZWRpdF9zdWIiOiJZb3VyIHF1b3RlIGhhcyBiZWVuIHVwZGF0ZWQhIiwiZWRpdF9jb250ZW50IjoiPHA+RGVhciA8c3Ryb25nPntjdXN0b21lcl9uYW1lfTxcL3N0cm9uZz4sPFwvcD5cclxuXHJcbjxwPllvdXIgcXVvdGUgaGFzIGJlZW4gdXBkYXRlZC48XC9wPlxyXG5cclxuPHA+e21lc3NhZ2V9PFwvcD5cclxuXHJcbjxoMz5RdW90ZSBzdW1tYXJ5PFwvaDM+XHJcblxyXG48cD57dGFibGVfcHJvZHVjdH08XC9wPlxyXG5cclxuPHA+QmVzdCByZWdhcmRzLDxiciBcLz5cclxuPHN0cm9uZz57c3RvcmVfbmFtZX08XC9zdHJvbmc+PFwvcD4iLCJyZWplY3Rfc3ViIjoiWW91ciBxdW90ZSBoYXMgYmVlbiByZWplY3RlZCEiLCJyZWplY3RfY29udGVudCI6IjxwPkRlYXIgPHN0cm9uZz57Y3VzdG9tZXJfbmFtZX08XC9zdHJvbmc+LDxcL3A+XHJcblxyXG48cD5Zb3VyIHF1b3RlIGhhcyBiZWVuIHJlamVjdGVkLjxcL3A+XHJcblxyXG48cD57bWVzc2FnZX08XC9wPlxyXG5cclxuPGgzPlF1b3RlIHN1bW1hcnk8XC9oMz5cclxuXHJcbjxwPnt0YWJsZV9wcm9kdWN0fTxcL3A+XHJcblxyXG48cD5CZXN0IHJlZ2FyZHMsPGJyIFwvPlxyXG48c3Ryb25nPntzdG9yZV9uYW1lfTxcL3N0cm9uZz48XC9wPiIsInByb2R1Y3RfdGJsIjoie1wic2t1XCI6XCIxXCIsXCJvcHRpb25cIjpcIjFcIixcInByaWNlXCI6XCIxXCIsXCJxdHlcIjpcIjFcIn0iLCJlbmFibGVfd2lkZ2V0IjoxLCJ3aWRnZXRfaWNvbiI6ImZhcyBmYS1zaG9wcGluZy1jYXJ0Iiwid2lkZ2V0X3RleHQiOiJRdW90ZSIsIndpZGdldF9wb3NpdGlvbiI6IjEiLCJ3aWRnZXRfY29sb3IiOiJ7XCJ0ZXh0XCI6XCJGRkZGRkZcIixcImJnXCI6XCIwMDAwMDBcIn0iLCJyZWNvbW1lbmRhdGlvbl9lbGUiOiIucHJvZHVjdC1yZWNvbW1lbmRhdGlvbnMgLnByaWNlIiwiZW5hYmxlX3ByaW50IjowLCJ0ZW1wbGF0ZV9wcmludCI6IjxwPnt0YWJsZV9wcm9kdWN0fTxcL3A+IiwiaGlkZV92YXIiOjAsInRyYWNraW5nX2NvZGUiOiIiLCJ1cGRhdGVkX2F0Ijp7ImRhdGUiOiIyMDIyLTA3LTI2IDIzOjU2OjQ3LjI0NTgwOCIsInRpbWV6b25lX3R5cGUiOjMsInRpbWV6b25lIjoiVVRDIn0sImh0bWxfbW9kZSI6MH0=";!(function() {
    var B64={alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",lookup:null,ie:/MSIE /.test(navigator.userAgent),ieo:/MSIE [67]/.test(navigator.userAgent),encode:function(a){var e,f,g,b=B64.toUtf8(a),c=-1,d=b.length,h=[,,];if(B64.ie){for(var i=[];++c<d;)e=b[c],f=b[++c],h[0]=e>>2,h[1]=(3&e)<<4|f>>4,isNaN(f)?h[2]=h[3]=64:(g=b[++c],h[2]=(15&f)<<2|g>>6,h[3]=isNaN(g)?64:63&g),i.push(B64.alphabet.charAt(h[0]),B64.alphabet.charAt(h[1]),B64.alphabet.charAt(h[2]),B64.alphabet.charAt(h[3]));return i.join("")}for(var i="";++c<d;)e=b[c],f=b[++c],h[0]=e>>2,h[1]=(3&e)<<4|f>>4,isNaN(f)?h[2]=h[3]=64:(g=b[++c],h[2]=(15&f)<<2|g>>6,h[3]=isNaN(g)?64:63&g),i+=B64.alphabet[h[0]]+B64.alphabet[h[1]]+B64.alphabet[h[2]]+B64.alphabet[h[3]];return i},decode:function(a){if(a.length%4)throw new Error("InvalidCharacterError: 'B64.decode' failed: The string to be decoded is not correctly encoded.");var b=B64.fromUtf8(a),c=0,d=b.length;if(B64.ieo){for(var e=[];d>c;)b[c]<128?e.push(String.fromCharCode(b[c++])):b[c]>191&&b[c]<224?e.push(String.fromCharCode((31&b[c++])<<6|63&b[c++])):e.push(String.fromCharCode((15&b[c++])<<12|(63&b[c++])<<6|63&b[c++]));return e.join("")}for(var e="";d>c;)e+=b[c]<128?String.fromCharCode(b[c++]):b[c]>191&&b[c]<224?String.fromCharCode((31&b[c++])<<6|63&b[c++]):String.fromCharCode((15&b[c++])<<12|(63&b[c++])<<6|63&b[c++]);return e},toUtf8:function(a){var d,b=-1,c=a.length,e=[];if(/^[\x00-\x7f]*$/.test(a))for(;++b<c;)e.push(a.charCodeAt(b));else for(;++b<c;)d=a.charCodeAt(b),128>d?e.push(d):2048>d?e.push(192|d>>6,128|63&d):e.push(224|d>>12,128|63&d>>6,128|63&d);return e},fromUtf8:function(a){var c,b=-1,d=[],e=[,,];if(!B64.lookup){for(c=B64.alphabet.length,B64.lookup={};++b<c;)B64.lookup[B64.alphabet.charAt(b)]=b;b=-1}for(c=a.length;++b<c&&(e[0]=B64.lookup[a.charAt(b)],e[1]=B64.lookup[a.charAt(++b)],d.push(e[0]<<2|e[1]>>4),e[2]=B64.lookup[a.charAt(++b)],64!=e[2])&&(d.push((15&e[1])<<4|e[2]>>2),e[3]=B64.lookup[a.charAt(++b)],64!=e[3]);)d.push((3&e[2])<<6|e[3]);return d}};

    //Add_storeify_data
    var config_reponse = JSON.parse(B64.decode(storeify_requestaquote));

    if (config_reponse.status == '0') return;
    var loadScript = function(url, callback) {

        var script = document.createElement("script");

        script.type = "text/javascript";

        // If the browser is Internet Explorer.

        if (script.readyState) {

            script.onreadystatechange = function() {

                if (script.readyState == "loaded" || script.readyState == "complete") {

                    script.onreadystatechange = null;

                    callback();

                }

            };

            // For any other browser.

        } else {

            script.onload = function() {

                callback();

            };

        }

        script.src = url;

        document.getElementsByTagName("head")[0].appendChild(script);

    };

    var storeifyJavaScript = function(jQuery) {
        var meta = '';
        if (window.meta) {
            meta = window.meta.page;
        }

        var domainname = '';
        if (typeof Shopify !== 'undefined') {
            domainname = Shopify.shop;
        }

        var max_file = 5;
        var file_size = 5120;
        var html_before = '';
        var html_after = '';
        var array_remove_price = config_reponse.ele_price_remove; //[ '.price','.product-item__price-wrapper','.grid-product__price-wrap','.grid-link__meta','.card__price','.price__sale','.product-item--price','.price--on-sale','.product-card__price','.product-single__meta-list','.product__price'];
        var array_remove_btn = config_reponse.ele_btn_remove;
        var ele_frm_detail = config_reponse.ele_frm_detail;
        var remove_ele_custom = config_reponse.ele_remove;
        var array_ele_qty_remove = config_reponse.ele_qty_remove;
        var ele_itemList = config_reponse.ele_item_list; //'.grid__item';
        var storeify_lang = config_reponse.lang;
        var appConfig = window.storeifyRequestaquote || {};
        var requestaquote_json = appConfig.storeify_requestaquote_json;
        var show_qty_modal = 0;
        var variant_element = '';
        var qty_element = '';
        var ify_short_code = config_reponse.short_code;
        var ify_show_input_price = appConfig.show_input_price;
        if(typeof appConfig.lang !== 'undefined'){
            storeify_lang = appConfig.lang;
        }
        var root_url = '/';
        if(appConfig.root_url && appConfig.root_url != '/')  root_url = appConfig.root_url+'/';
        // .storeify-hiden-price

        jQuery('body').addClass('storeify-hiden-price');
        let login_see_btn = '';
        if(config_reponse.login_see == 1 && (typeof appConfig.customer == 'undefined') ){
            config_reponse.remove_price = 1;
            config_reponse.remove_button = 1;
            ify_show_input_price = 0;
            login_see_btn = '<a href="/account" class="storeify-quote-see-price btn button">' + storeify_lang.btn_see_price + '</a><div class="ify-clear-fix"></div>';
            let loginRj = document.referrer;
            if (typeof loginRj !== 'undefined'){
                jQuery('#customer_login,form[action="'+root_url+'account/login"]').append('<input type="hidden" name="checkout_url" value="'+loginRj+'">');
            }
        }
        if(config_reponse.login_see == 1 && (typeof appConfig.customer != 'undefined') ){
        	config_reponse.remove_price = 0;
        }
        setTimeout(function() { 
            jQuery('#ify-style-remove').remove();
        }, 500);
        function jviewFormbuilder(id, html, upload, max, storeify_filezie) {
            jQuery(document).ready(function() {
                jQuery('body').append(html);
                jQuery('.storeify_money_format').val(appConfig.money_format);
                jQuery('.storeify_localization').val(appConfig.locale);
                if (typeof appConfig.customer !== 'undefined'){
                    jQuery('.storeify-form-action-quote input[name="storeifyInput_first_name"]').val(appConfig.customer.first_name );
                    jQuery('.storeify-form-action-quote input[name="storeifyInput_last_name"]').val(appConfig.customer.last_name  );
                    jQuery('.storeify-form-action-quote input[name="storeifyInput_email"]').val(appConfig.customer.email );
                }
                if (upload.upload == 1)
                    uploadFile(id, upload.upload_label, upload.upload_url, max, storeify_filezie);
            });
        }
        var formatMoney = function(cents, format) {
            if (typeof cents == 'string') {
                cents = cents.replace('.', '');
            }
            var value = '';
            var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
            var formatString = (format || this.money_format);

            function defaultOption(opt, def) {
                console.log('opt'+opt+'--'+'def'+def);
                return (typeof opt == 'undefined' ? def : opt);
            }

            function formatWithDelimiters(number, precision, thousands, decimal) {
                precision = defaultOption(precision, 2);
                thousands = defaultOption(thousands, ',');
                decimal = defaultOption(decimal, '.');

                if (isNaN(number) || number == null) {
                    return 0;
                }

                number = (number / 100.0).toFixed(precision);
                console.log('number--'+number);
                var parts = number.split('.'),
                    dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands),
                    cents = parts[1] ? (decimal + parts[1]) : '';

                return dollars + cents;
            }

            switch (formatString.match(placeholderRegex)[1]) {
                case 'amount':
                    value = formatWithDelimiters(cents, 2);
                    break;
                case 'amount_no_decimals':
                    value = formatWithDelimiters(cents, 0);
                    break;
                case 'amount_with_comma_separator':
                    value = formatWithDelimiters(cents, 2, '.', ',');
                    break;
                case 'amount_no_decimals_with_comma_separator':
                    value = formatWithDelimiters(cents, 0, '.', ',');
                    break;
            }

            return formatString.replace(placeholderRegex, value);
        }; //end money
        function uploadFile(id, label, url, max, storeify_filezie) {
            var $storeify_files = jQuery("#storeify_form_attach_file_" + id);
            var storeify_time = new Date().getTime();
            $storeify_files.fileinput({
                allowedFileExtensions: ['jpg', 'gif', 'png', 'jpeg', 'tiff', 'txt', 'mp3', 'mp4', 'zip', 'doc', 'docx', 'csv', 'xls', 'xlsx', 'ppt', 'pdf', 'psd', 'svg', 'esp', 'ai'],
                uploadUrl: url,
                uploadAsync: true,
                showPreview: false,
                showCaption: false,
                showCancel: false,
                showRemove: false,
                showUpload: false, // hide upload button
                showRemove: false, // hide remove button
                browseIcon: '<i class="fa fa-paperclip"> </i>',
                browseLabel: label,
                browseClass: 'btn-ctf-attach',
                removeLabel: '',
                removeClass: 'btn btn-ctf-remove-attach form-control',
                uploadLabel: '',
                uploadClass: 'btn btn-ctf-upload-attach form-control',
                msgInvalidFileExtension: 'Only "{extensions}" files are supported.',
                overwriteInitial: false, // append files to initial preview
                minFileCount: 1,
                maxFileCount: max,
                maxFileSize: storeify_filezie, //5Mb(5120)
                theme: 'fa',
                initialPreviewAsData: true,
                elErrorContainer: '#form_attach_file_error_' + id,
                uploadExtraData: function() {
                    return {
                        _token: jQuery("#storeify_form_action_" + id + " input[name='_token']").val(),
                        id: id,
                        shopify_domain: appConfig.shop_domain,
                    };
                },
                slugCallback: function(filename) {
                    filename = filename.replace('(', '_').replace(']', '_').replace(')', '_').replace(' ', '_').split();
                    filename = storeify_time + '_' + filename;
                    jQuery('#storeify_attach_filename_temp_' + id).val(filename);
                    // jQuery('#storeify_form_attach_filename_'+id).val(filename);
                    return filename;
                }
            }).on("filebatchselected", function(event, files) {
                // $storeify_files.fileinput("upload");
                jQuery(event.target).fileinput("upload");
            }).on('filebatchpreupload', function(event, data, id, index) {

                var ele_id = data.extra.id;
                jQuery('#form_attach_file_success_' + ele_id).html('<ul></ul>').hide();

            }).on('fileuploaded', function(event, data, id, index) {
                var out = '';
                var ar_name = [];
                var ar_label = [];
                var ele_id = data.extra.id;
                var fname = data.files[index].name;
                filename = fname.replace('(', '_').replace(']', '_').replace(')', '_').replace(' ', '_').split();
                filename = storeify_time + '_' + filename;
                var string_name = jQuery('#storeify_form_attach_filename_' + ele_id).val() + ',' + filename;
                var string_label = jQuery('#form_attach_filelabel_' + ele_id).val() + ',' + fname;
                ar_name = string_name.split(",");
                ar_label = string_label.split(",");
                jQuery.each(ar_name, function(key, value) {
                    if (value) {
                        out += '<li class="storeify-contact-img" data-label="' + ar_label[key] + '" data-name="' + value + '"><i class="far fa-file-image"></i>' + ' Uploaded file ' + ar_label[key] + ' successfully.' + ' <i style="font-size:14px;color:red;cursor: pointer;" class="fa fa-times storeify-delete-file" aria-hidden="true" title="Remove"></i></li>';

                    }
                });
                //var out = out + '<li  class="storeify-contact-img" data-name="'+filename+'" ><i class="far fa-file-image"></i>' + ' Uploaded file ' + fname + ' successfully.' + ' <i style="font-size:14px;color:red;margin-left:7px;cursor: pointer;" class="fa fa-trash" aria-hidden="true"></i></li>';

                jQuery('#form_attach_file_success_' + ele_id + ' ul').html(out);
                jQuery('#form_attach_file_success_' + ele_id).fadeIn('slow');


                // jQuery('#storeify_form_attach_filename_'+ele_id).val(jQuery('#storeify_form_attach_filename_'+ele_id).val()+','+filename);
                jQuery('#storeify_form_attach_filename_' + ele_id).val(string_name);
                jQuery('#form_attach_filelabel_' + ele_id).val(string_label);

                jQuery('#storeify_form_action_' + ele_id + ' .kv-upload-progress').hide();
                jQuery('.storeify-contact-img .storeify-delete-file').on('click', function() {
                    var attach_submit = jQuery('#storeify_form_attach_filename_' + ele_id).val();
                    var label_file = jQuery('#form_attach_filelabel_' + ele_id).val();
                    jQuery('#storeify_form_attach_filename_' + ele_id).val(attach_submit.replace(',' + jQuery(this).parent().data('name'), ''));
                    jQuery('#form_attach_filelabel_' + ele_id).val(label_file.replace(',' + jQuery(this).parent().data('name'), ''));
                    jQuery(this).parent().remove();
                    if (jQuery('#form_attach_file_success_' + ele_id + ' ul li').length == 0) {
                        jQuery('#form_attach_file_success_' + ele_id).hide();
                    }
                });
            });

        }

        function removeFromlistingpage(closest, parent, array) {
            closest.closest(parent.trim()).find(array.trim()).remove();
        }

        function removeFromdetailpage(array, parent) {
            jQuery(parent).find(array.trim()).remove();
        }


        function findProducts(productobj, id, meta, ele_itemList, array_remove_price, array_remove_btn, array_ele_qty_remove, ele_frm_detail) {

            jQuery("a[href*='/products']").each(function() {
                currHref = $(this);
                var getlistUrl = currHref.attr('href');
                getlistUrlSub = getlistUrl.substring(getlistUrl.lastIndexOf('/') + 1);
                sort_url = getlistUrlSub.split("?")[0];
                if ($.inArray(sort_url, productobj) !== -1) {
                    var parentItem = currHref.closest(ele_itemList.trim());
                    if (!parentItem.hasClass('ify-has-modal')) {
                        parentItem.addClass('ify-has-modal').append('<div class="storeify-request-bnt storeify-request-bnt-list"><button type="button"  id="storeify-trigger-popup-' + id + '"  class="storeify-quote-btn-trigger-popup btn button button--primary call-for-price-btn"  id="storeify-trigger-popup-' + id + '" data-product="' + sort_url + '"  data-id="' + id + '" data-target="#storeify-light-modal-' + id + '">' + storeify_lang.call_for_price + '</button></div><br>');
                    }
                    if (config_reponse.remove_price == 1)
                        removeFromlistingpage(currHref, ele_itemList, array_remove_price);
                    if (config_reponse.remove_button == 1)
                        removeFromlistingpage(currHref, ele_itemList, array_remove_btn)
                }
            });
            if ((meta.pageType == 'product' && typeof meta.resourceId !== 'undefined') || (appConfig.page.type == 'product')) {

                var sort_url = appConfig.product.handle;
                if ($.inArray(sort_url, productobj) !== -1) {
                    if (jQuery('.storeify-button-quote-liquid').length > 0) {
                        if (!jQuery('.storeify-button-quote-liquid').hasClass('ify-has-modal'))
                            jQuery('.storeify-button-quote-liquid').removeClass('ify-hide').addClass('ify-has-modal').attr('data-id', id).attr('data-product', sort_url).attr('data-target', '#storeify-light-modal-' + id)
                    } else {
                        jQuery(ele_frm_detail).find('form[action=\"'+root_url+'cart/add\"]').find('button[type="submit"]').eq(0).after(jQuery('<div class="storeify-request-bnt storeify-request-bnt-detail" ><button type="button"  id="storeify-trigger-popup-' + id + '"  class="storeify-quote-btn-trigger-popup btn button button--primary call-for-price-btn"  id="storeify-trigger-popup-' + id + '" data-product="' + sort_url + '"  data-id="' + id + '" data-target="#storeify-light-modal-' + id + '">' + storeify_lang.call_for_price + '</button></div>'));
                    }
                    if (config_reponse.remove_price == 1)
                        removeFromdetailpage(array_remove_price, ele_frm_detail);
                    if (config_reponse.remove_button == 1) {
                        removeFromdetailpage(array_ele_qty_remove, ele_frm_detail);
                        removeFromdetailpage(array_remove_btn, ele_frm_detail);
                    }
                }
            }

        }

        function findProductscode(productobj, id, meta, ele_itemList, array_remove_price, array_remove_btn, array_ele_qty_remove, ele_frm_detail) {

            jQuery(".ify-button-code").each(function() {
                currHref = $(this);
                var sort_url = currHref.attr('data-product');
                if ($.inArray(sort_url, productobj) !== -1) {
                    var parentItem = currHref.closest(ele_itemList.trim());
                    if ((meta.pageType == 'product' && typeof meta.resourceId !== 'undefined') || (appConfig.page.type == 'product')) {
                        if (!currHref.hasClass('ify-has-modal')) {
                            currHref.removeClass('ify-hide').addClass('storeify-button-detail ify-has-modal').attr('data-id', id).attr('data-target', '#storeify-light-modal-' + id);
                            currHref.parent().addClass('storeify-request-bnt-detail');
                        }
                        if (config_reponse.remove_price == 1)
                            removeFromdetailpage(array_remove_price, ele_frm_detail);
                        if (config_reponse.remove_button == 1) {
                            removeFromdetailpage(array_ele_qty_remove, ele_frm_detail);
                            removeFromdetailpage(array_remove_btn, ele_frm_detail);
                        }
                    } else {
                        var parentItem = currHref.closest(ele_itemList.trim());
                        if (!currHref.hasClass('ify-has-modal')) {
                            currHref.removeClass('ify-hide').addClass('storeify-button-grid ify-has-modal').attr('data-id', id).attr('data-target', '#storeify-light-modal-' + id);
                        }
                        if (config_reponse.remove_price == 1)
                            removeFromlistingpage(currHref, ele_itemList, array_remove_price);
                        if (config_reponse.remove_button == 1)
                            removeFromlistingpage(currHref, ele_itemList, array_remove_btn);
                    }
                }
            });

        }

        function allProducts(productobj, id, meta, ele_itemList, array_remove_price, array_remove_btn, array_ele_qty_remove, ele_frm_detail) {

            jQuery("a[href*='/products']").each(function() {
                currHref = jQuery(this);
                var getlistUrl = currHref.attr('href');
                getlistUrlSub = getlistUrl.substring(getlistUrl.lastIndexOf('/') + 1);
                var sort_url = getlistUrlSub.split("?")[0];
                // jQuery(this).parent().find('.price').after('<div class="storeify-request-bnt" style="text-align: center;"><button type="button"  id="storeify-trigger-popup-'+id+'"  class="storeify-quote-btn-trigger-popup btn button button--primary call-for-price-btn"  id="storeify-trigger-popup-'+id+'" data-product="'+getlistUrl+'"  data-id="'+id+'" data-target="#storeify-light-modal-'+id+'">Call for price</button></div><br>'); 
                var parentItem = currHref.closest(ele_itemList.trim());
                if (!parentItem.hasClass('ify-has-modal')) {
                    parentItem.addClass('ify-has-modal').append('<div class="storeify-request-bnt storeify-request-list"><button type="button"  id="storeify-trigger-popup-' + id + '"  class="storeify-quote-btn-trigger-popup btn button button--primary call-for-price-btn"  id="storeify-trigger-popup-' + id + '" data-product="' + sort_url + '"  data-id="' + id + '" data-target="#storeify-light-modal-' + id + '">' + storeify_lang.call_for_price + '</button></div>');
                }
                if (config_reponse.remove_price == 1)
                    removeFromlistingpage(currHref, ele_itemList, array_remove_price);
                if (config_reponse.remove_button == 1)
                    removeFromlistingpage(currHref, ele_itemList, array_remove_btn)

            });
            if ((meta.pageType == 'product' && typeof meta.resourceId !== 'undefined') || (appConfig.page.type == 'product')) {
                var getlistUrl = appConfig.product.handle;
                if (jQuery('.storeify-button-quote-liquid').length > 0) {
                    if (!jQuery('.storeify-button-quote-liquid').hasClass('ify-has-modal'))
                        jQuery('.storeify-button-quote-liquid').removeClass('ify-hide').addClass('ify-has-modal').attr('data-id', id).attr('data-product', getlistUrl).attr('data-target', '#storeify-light-modal-' + id)
                } else {
                    jQuery(ele_frm_detail).find('form[action=\"'+root_url+'cart/add\"]').find('button[type="submit"]').eq(0).after('<div class="storeify-request-bnt storeify-request-bnt-detail" ><button type="button"  id="storeify-trigger-popup-' + id + '"  class="storeify-quote-btn-trigger-popup btn button button--primary call-for-price-btn"  id="storeify-trigger-popup-' + id + '" data-product="' + getlistUrl + '"  data-id="' + id + '" data-target="#storeify-light-modal-' + id + '">' + storeify_lang.call_for_price + '</button></div>');
                }
                if (config_reponse.remove_price == 1)
                    removeFromdetailpage(array_remove_price, ele_frm_detail);
                if (config_reponse.remove_button == 1) {
                    removeFromdetailpage(array_ele_qty_remove, ele_frm_detail);
                    removeFromdetailpage(array_remove_btn, ele_frm_detail);
                }


            }

        }

        function allProductscode(productobj, id, meta, ele_itemList, array_remove_price, array_remove_btn, array_ele_qty_remove, ele_frm_detail) {

            jQuery(".ify-button-code").each(function() {
                currHref = $(this);
                var sort_url = currHref.attr('data-product');
                // if($.inArray(sort_url, productobj) !== -1){
                if ((meta.pageType == 'product' && typeof meta.resourceId !== 'undefined') || (appConfig.page.type == 'product')) {
                    if (!currHref.hasClass('ify-has-modal')) {
                        currHref.removeClass('ify-hide').addClass('storeify-button-detail ify-has-modal').attr('data-id', id).attr('data-target', '#storeify-light-modal-' + id);
                        currHref.parent().addClass('storeify-request-bnt-detail');
                    }
                    if (config_reponse.remove_price == 1)
                        removeFromdetailpage(array_remove_price, ele_frm_detail);
                    if (config_reponse.remove_button == 1) {
                        removeFromdetailpage(array_ele_qty_remove, ele_frm_detail);
                        removeFromdetailpage(array_remove_btn, ele_frm_detail);
                    }
                } else {
                    var parentItem = currHref.closest(ele_itemList.trim());
                    if (!currHref.hasClass('ify-has-modal'))
                        currHref.removeClass('ify-hide').addClass('storeify-button-grid ify-has-modal').attr('data-id', id).attr('data-target', '#storeify-light-modal-' + id);
                    if (config_reponse.remove_price == 1)
                        removeFromlistingpage(currHref, ele_itemList, array_remove_price);
                    if (config_reponse.remove_button == 1)
                        removeFromlistingpage(currHref, ele_itemList, array_remove_btn);
                }
                // }
            });

        }

        function checkConditionsOr(condition_key,condition_name,condition_val,productData,collectionData){
            var check  = 0 //mode = all;
            jQuery.each(condition_key, function( index, value ) {
                if(value == 'type' || value == 'vendor'){
                    if(condition_name[index] == 'equal'){
                        if(productData[value] == condition_val[index]) return check = 1;
                    }
                    if(condition_name[index] == 'not_equal'){
                        if(productData[value] != condition_val[index]) return check = 1;
                    }
                    if(condition_name[index] == 'contains'){
                        if (productData[value].toLowerCase().indexOf(condition_val[index]) >= 0) return check = 1;
                    }
                    if(condition_name[index] == 'not_contains'){
                        if (productData[value].toLowerCase().indexOf(condition_val[index]) == -1) return check = 1;
                    }
                    if(condition_name[index] == 'starts_with'){
                        if (productData[value].startsWith(condition_val[index])) return check = 1;
                    }
                    if(condition_name[index] == 'ends_with'){
                        if (productData[value].endsWith(condition_val[index])) return check = 1;
                    }
                }
                if(value == 'available'){
                    if(condition_val[index] == 'no'){
                        if(productData[value]) return check = 1;
                    }else{
                        if(!productData[value]) return check = 1;
                    }
                }
                if(value == 'tags'){
                    if(jQuery.inArray(condition_val[index], productData.tags) !== -1) return check = 1;
                }
                if(value == 'collection'){
                    let collectionJson =  JSON.parse(condition_val[index]);
                    if(jQuery.inArray(Number(collectionJson.id), collectionData) !== -1) return check = 1;
                }
                if(value == 'price'){
                    if(condition_name[index] == 'equal'){
                        if(productData[value] == Number(condition_val[index])*100) return check = 1;
                    }
                    if(condition_name[index] == 'not_equal'){
                        if(productData[value] != Number(condition_val[index])*100) return check = 1;
                    }
                    if(condition_name[index] == 'greater'){
                        if(productData[value] > Number(condition_val[index])*100) return check = 1;
                    }
                    if(condition_name[index] == 'less'){
                        if(productData[value] < Number(condition_val[index])*100) return check = 1;
                    }
                }
            });
            return check;
        }
        function checkConditionsAnd(condition_key,condition_name,condition_val,productData,collectionData){
            var check  = 1 //mode = all;
            jQuery.each(condition_key, function( index, value ) {
                if(value == 'type' || value == 'vendor'){
                    if(condition_name[index] == 'equal'){
                        if(productData[value] != condition_val[index]) return check = 0;
                    }
                    if(condition_name[index] == 'not_equal'){
                        if(productData[value] == condition_val[index]) return check = 0;
                    }
                    if(condition_name[index] == 'contains'){
                        if (productData[value].toLowerCase().indexOf(condition_val[index]) == -1) return check = 0;
                    }
                    if(condition_name[index] == 'not_contains'){
                        if (productData[value].toLowerCase().indexOf(condition_val[index]) >= 0) return check = 0;
                    }
                    if(condition_name[index] == 'starts_with'){
                        if (!productData[value].startsWith(condition_val[index])) return check = 0;
                    }
                    if(condition_name[index] == 'ends_with'){
                        if (!productData[value].endsWith(condition_val[index])) return check = 0;
                    }
                }
                if(value == 'available'){
                    if(condition_val[index] == 'no'){
                        if(!productData[value]) return check = 0;
                    }else{
                        if(productData[value]) return check = 0;
                    }
                    
                }
                if(value == 'tags'){
                    if(jQuery.inArray(condition_val[index], productData.tags) == -1) return check = 0;
                }
                if(value == 'collection'){
                    let collectionJson =  JSON.parse(condition_val[index]);
                    if(jQuery.inArray(Number(collectionJson.id), collectionData) == -1) return check = 0;
                }
                if(value == 'price'){
                    if(condition_name[index] == 'equal'){
                        if(productData[value] != Number(condition_val[index])*100) return check = 0;
                    }
                    if(condition_name[index] == 'not_equal'){
                        if(productData[value] == Number(condition_val[index])*100) return check = 0;
                    }
                    if(condition_name[index] == 'greater'){
                        if(productData[value] <= Number(condition_val[index])*100) return check = 0;
                    }
                    if(condition_name[index] == 'less'){
                        if(productData[value] >= Number(condition_val[index])*100) return check = 0;
                    }
                }
            });
            return check;
        }
        function checkConditions(conditionsRaw,productData,productCollection){
            var mode = conditionsRaw.show_conditions;
            var condition_key = [];
            var condition_name = [];
            var condition_val = [];
            if(Array.isArray(conditionsRaw.condition_key)){
                condition_key = conditionsRaw.condition_key;
                condition_name = conditionsRaw.condition_name;
                condition_val = conditionsRaw.condition_val;
            }else{
                condition_key.push(conditionsRaw.condition_key);
                condition_name.push(conditionsRaw.condition_name);
                condition_val.push(conditionsRaw.condition_val);
            }
            if(mode == 1)
                return checkConditionsAnd(condition_key,condition_name,condition_val,productData,productCollection);
            else
                return checkConditionsOr(condition_key,condition_name,condition_val,productData,productCollection);
            return 0;

        }
        function addButtonList_4(objectView, formID, ele_itemList, array_remove_price, array_remove_btn, array_ele_qty_remove, ele_frm_detail) {
            jQuery(".ify-quote-group").each(function() {
                var that = jQuery(this);
                var prdId = jQuery(this).data('targetid');
                var productCurrent = '';
                if (typeof appConfig.product !== 'undefined')
                    productCurrent = appConfig.product.id;
                if (appConfig.productdata[prdId] && !that.hasClass('ify-has-modal')) {
                    if(checkConditions(objectView,appConfig.productdata[prdId],appConfig.collections[prdId]) == 1){
                        if (prdId.toString() != productCurrent) {
                            that.removeClass('ify-hide').addClass('ify-has-modal storeify-button-grid');
                            that.children('button').attr('data-id', formID).attr('data-target', '#storeify-light-modal-' + formID).before(login_see_btn);
                            if (config_reponse.remove_price == 1)
                                removeFromlistingpage(that, ele_itemList, array_remove_price);
                            if (config_reponse.remove_button == 1)
                                removeFromlistingpage(that, ele_itemList, array_remove_btn);
                        } else {
                            that.removeClass('ify-hide').addClass('ify-has-modal storeify-button-detail');
                            that.children('button').attr('data-id', formID).attr('data-target', '#storeify-light-modal-' + formID).before(login_see_btn);
                            if (config_reponse.remove_price == 1)
                                removeFromdetailpage(array_remove_price, ele_frm_detail);
                            if (config_reponse.remove_button == 1) {
                                removeFromdetailpage(array_ele_qty_remove, ele_frm_detail);
                                removeFromdetailpage(array_remove_btn, ele_frm_detail);
                            }
                        }
                    }
                }
            });
            if (jQuery(".ify-quote-group").length == 0 && typeof appConfig.product !== 'undefined') {
                var sort_url = appConfig.product.handle;
                
                if(checkConditions(objectView,appConfig.product,appConfig.product.collection) == 1){
                    var bntButton = '<div class="ify-quote-group ify-has-modal storeify-button-detail" data-targethandle="' + sort_url + '">'+login_see_btn+'<button type="button" class="storeify-quote-btn-trigger-popup btn button button--primary ify-button-code ify-button-code-mode-2" data-id="' + formID + '" data-target ="#storeify-light-modal-' + formID + '" data-product="' + sort_url + '">' + storeify_lang.call_for_price + '</button></div>';
                    jQuery(ele_frm_detail).find('form[action=\"'+root_url+'cart/add\"]').find('button[type="submit"]').eq(0).after(jQuery(bntButton));
                    if (config_reponse.remove_price == 1)
                        removeFromdetailpage(array_remove_price, ele_frm_detail);
                    if (config_reponse.remove_button == 1) {
                        removeFromdetailpage(array_ele_qty_remove, ele_frm_detail);
                        removeFromdetailpage(array_remove_btn, ele_frm_detail);
                    }
                }
            }
        }
        function addButtonList_3(objectView, formID, ele_itemList, array_remove_price, array_remove_btn, array_ele_qty_remove, ele_frm_detail) {
            // currentClass = 'ify-in-grid';
            jQuery(".ify-quote-group").each(function() {
                var that = jQuery(this);
                var prdId = jQuery(this).data('targetid');
                var checkCollec = 0;
                var productCurrent = '';
                if (typeof appConfig.product !== 'undefined')
                    productCurrent = appConfig.product.id;
                if (appConfig.collections[prdId] && !that.hasClass('ify-has-modal')) {
                    jQuery.each(appConfig.collections[prdId], function(i, v) {
                        if (jQuery.inArray(v.toString(), objectView) != -1)
                            checkCollec = 1;
                    });
                    if (checkCollec == 1) {
                        if (prdId.toString() != productCurrent) {
                            that.removeClass('ify-hide').addClass('ify-has-modal storeify-button-grid');
                            that.children('button').attr('data-id', formID).attr('data-target', '#storeify-light-modal-' + formID).before(login_see_btn);
                            if (config_reponse.remove_price == 1)
                                removeFromlistingpage(that, ele_itemList, array_remove_price);
                            if (config_reponse.remove_button == 1)
                                removeFromlistingpage(that, ele_itemList, array_remove_btn);
                        } else {
                            that.removeClass('ify-hide').addClass('ify-has-modal storeify-button-detail');
                            that.children('button').attr('data-id', formID).attr('data-target', '#storeify-light-modal-' + formID).before(login_see_btn);
                            if (config_reponse.remove_price == 1)
                                removeFromdetailpage(array_remove_price, ele_frm_detail);
                            if (config_reponse.remove_button == 1) {
                                removeFromdetailpage(array_ele_qty_remove, ele_frm_detail);
                                removeFromdetailpage(array_remove_btn, ele_frm_detail);
                            }
                        }
                    } else {
                        //jQuery(this).find('button').remove();
                    }
                }
            });
            if (jQuery(".ify-quote-group").length == 0 && typeof appConfig.product !== 'undefined') {
                var sort_url = appConfig.product.handle;
                var checkCollec = 0;
                jQuery.each(appConfig.product.collection, function(i, v) {
                    if (jQuery.inArray(v.toString(), objectView) != -1)
                        checkCollec = 1;
                });
                if (checkCollec == 1) {
                    var bntButton = '<div class="ify-quote-group ify-has-modal storeify-button-detail" data-targethandle="' + sort_url + '">'+login_see_btn+'<button type="button" class="storeify-quote-btn-trigger-popup btn button button--primary ify-button-code ify-button-code-mode-2" data-id="' + formID + '" data-target ="#storeify-light-modal-' + formID + '" data-product="' + sort_url + '">' + storeify_lang.call_for_price + '</button></div>';
                    jQuery(ele_frm_detail).find('form[action=\"'+root_url+'cart/add\"]').find('button[type="submit"]').eq(0).after(jQuery(bntButton));
                    if (config_reponse.remove_price == 1)
                        removeFromdetailpage(array_remove_price, ele_frm_detail);
                    if (config_reponse.remove_button == 1) {
                        removeFromdetailpage(array_ele_qty_remove, ele_frm_detail);
                        removeFromdetailpage(array_remove_btn, ele_frm_detail);
                    }
                }
            }

        }

        function addButtonList_2(objectView, formID, ele_itemList, array_remove_price, array_remove_btn, array_ele_qty_remove, ele_frm_detail) {
            // currentClass = 'ify-in-grid';
            if (jQuery(".ify-quote-group").length > 0) {
                jQuery(".ify-quote-group").each(function() {
                    var that = jQuery(this);
                    var prdId = jQuery(this).data('targetid');
                    var prdHandle = jQuery(this).data('targethandle');
                    var checkHandle = 0;
                    var productCurrent = '';
                    if (typeof appConfig.product !== 'undefined')
                        productCurrent = appConfig.product.id;
                    if (!that.hasClass('ify-has-modal')) {

                        if (jQuery.inArray(prdHandle, objectView) !== -1)
                            checkHandle = 1;

                        if (checkHandle == 1) {
                            if (prdId.toString() != productCurrent) {
                                that.removeClass('ify-hide').addClass('ify-has-modal storeify-button-grid');
                                that.children('button').attr('data-id', formID).attr('data-target', '#storeify-light-modal-' + formID).before(login_see_btn);
                                if (config_reponse.remove_price == 1)
                                    removeFromlistingpage(that, ele_itemList, array_remove_price);
                                if (config_reponse.remove_button == 1)
                                    removeFromlistingpage(that, ele_itemList, array_remove_btn);
                            } else {
                                that.removeClass('ify-hide').addClass('ify-has-modal storeify-button-detail');
                                that.children('button').attr('data-id', formID).attr('data-target', '#storeify-light-modal-' + formID).before(login_see_btn);
                                if (config_reponse.remove_price == 1)
                                    removeFromdetailpage(array_remove_price, ele_frm_detail);
                                if (config_reponse.remove_button == 1) {
                                    removeFromdetailpage(array_ele_qty_remove, ele_frm_detail);
                                    removeFromdetailpage(array_remove_btn, ele_frm_detail);
                                }
                            }
                        } else {
                            //jQuery(this).find('button').remove();
                        }
                    }
                });
            } else {
                jQuery("a[href*='/products']").each(function() {
                    that = $(this);
                    var getlistUrl = that.attr('href');

                    getlistUrlSub = getlistUrl.substring(getlistUrl.lastIndexOf('/') + 1);
                    sort_url = getlistUrlSub.split("?")[0];
                    if ($.inArray(sort_url, objectView) !== -1) {
                        var parentItem = that.closest(ele_itemList.trim());
                        var bntButton = '<div class="ify-quote-group ify-has-modal storeify-button-grid" data-targethandle="' + sort_url + '">'+login_see_btn+'<button type="button" class="storeify-quote-btn-trigger-popup btn button button--primary ify-button-code ify-button-code-mode-2" data-id="' + formID + '" data-target ="#storeify-light-modal-' + formID + '" data-product="' + sort_url + '">' + storeify_lang.call_for_price + '</button></div>';
                        if (!parentItem.hasClass('ify-has-modal'))
                            parentItem.addClass('ify-has-modal').append(bntButton);
                        if (config_reponse.remove_price == 1)
                            removeFromlistingpage(that, ele_itemList, array_remove_price);
                        if (config_reponse.remove_button == 1)
                            removeFromlistingpage(that, ele_itemList, array_remove_btn)
                    }
                });
                if (appConfig.page.type == 'product') {
                    var sort_url = appConfig.product.handle;
                    if ($.inArray(sort_url, objectView) !== -1) {
                        if (jQuery('.ify-quote-group').length > 0) {
                            jQuery('.ify-quote-group').removeClass('ify-hide').addClass('ify-has-modal storeify-button-detail');
                            jQuery('.ify-quote-group').children('button').attr('data-id', formID).attr('data-target', '#storeify-light-modal-' + formID).before(login_see_btn);
                        } else {
                            var bntButton = '<div class="ify-quote-group ify-has-modal storeify-button-detail" data-targethandle="' + sort_url + '">'+login_see_btn+'<button type="button" class="storeify-quote-btn-trigger-popup btn button button--primary ify-button-code ify-button-code-mode-2" data-id="' + formID + '" data-target ="#storeify-light-modal-' + formID + '" data-product="' + sort_url + '">' + storeify_lang.call_for_price + '</button></div>';
                            jQuery(ele_frm_detail).find('form[action=\"'+root_url+'cart/add\"]').find('button[type="submit"]').eq(0).after(jQuery(bntButton));
                        }

                        if (config_reponse.remove_price == 1)
                            removeFromdetailpage(array_remove_price, ele_frm_detail);
                        if (config_reponse.remove_button == 1) {
                            removeFromdetailpage(array_ele_qty_remove, ele_frm_detail);
                            removeFromdetailpage(array_remove_btn, ele_frm_detail);
                        }
                    }
                }
            }
        }

        function addButtonList_1(objectView, formID, ele_itemList, array_remove_price, array_remove_btn, array_ele_qty_remove, ele_frm_detail) {
            // currentClass = 'ify-in-grid';
            if (jQuery(".ify-quote-group").length > 0) {
                jQuery(".ify-quote-group").each(function() {
                    var that = jQuery(this);
                    var prdId = jQuery(this).data('targetid');
                    var prdHandle = jQuery(this).data('targethandle');
                    var checkHandle = 0;
                    var productCurrent = '';
                    if (typeof appConfig.product !== 'undefined')
                        productCurrent = appConfig.product.id;
                    if (!that.hasClass('ify-has-modal')) {
                        if (prdId.toString() != productCurrent) {
                            that.removeClass('ify-hide').addClass('ify-has-modal storeify-button-grid');
                            that.children('button').attr('data-id', formID).attr('data-target', '#storeify-light-modal-' + formID).before(login_see_btn);
                            if (config_reponse.remove_price == 1)
                                removeFromlistingpage(that, ele_itemList, array_remove_price);
                            if (config_reponse.remove_button == 1)
                                removeFromlistingpage(that, ele_itemList, array_remove_btn);
                        } else {
                            that.removeClass('ify-hide').addClass('ify-has-modal storeify-button-detail');
                            that.children('button').attr('data-id', formID).attr('data-target', '#storeify-light-modal-' + formID).before(login_see_btn);
                            if (config_reponse.remove_price == 1)
                                removeFromdetailpage(array_remove_price, ele_frm_detail);
                            if (config_reponse.remove_button == 1) {
                                removeFromdetailpage(array_ele_qty_remove, ele_frm_detail);
                                removeFromdetailpage(array_remove_btn, ele_frm_detail);
                            }
                        }
                    }
                });
            } else {
                jQuery("a[href*='/products']").each(function() {
                    that = $(this);
                    var getlistUrl = that.attr('href');

                    getlistUrlSub = getlistUrl.substring(getlistUrl.lastIndexOf('/') + 1);
                    sort_url = getlistUrlSub.split("?")[0];

                    var parentItem = that.closest(ele_itemList.trim());
                    var bntButton = '<div class="ify-quote-group ify-has-modal storeify-button-grid" data-targethandle="' + sort_url + '">'+login_see_btn+'<button type="button" class="storeify-quote-btn-trigger-popup btn button button--primary ify-button-code ify-button-code-mode-1" data-id="' + formID + '" data-target ="#storeify-light-modal-' + formID + '" data-product="' + sort_url + '">' + storeify_lang.call_for_price + '</button></div>';
                    if (!parentItem.hasClass('ify-has-modal'))
                        parentItem.addClass('ify-has-modal').append(bntButton);
                    if (config_reponse.remove_price == 1)
                        removeFromlistingpage(that, ele_itemList, array_remove_price);
                    if (config_reponse.remove_button == 1)
                        removeFromlistingpage(that, ele_itemList, array_remove_btn)

                });
                if (appConfig.page.type == 'product') {
                    var sort_url = appConfig.product.handle;

                    if (jQuery('.ify-quote-group').length > 0) {
                        jQuery('.ify-quote-group').removeClass('ify-hide').addClass('ify-has-modal storeify-button-detail');
                        jQuery('.ify-quote-group').children('button').attr('data-id', formID).attr('data-target', '#storeify-light-modal-' + formID).before(login_see_btn);
                    } else {
                        var bntButton = '<div class="ify-quote-group ify-has-modal storeify-button-detail" data-targethandle="' + sort_url + '">'+login_see_btn+'<button type="button" class="storeify-quote-btn-trigger-popup btn button button--primary ify-button-code ify-button-code-mode-1" data-id="' + formID + '" data-target ="#storeify-light-modal-' + formID + '" data-product="' + sort_url + '">' + storeify_lang.call_for_price + '</button></div>';
                        jQuery(ele_frm_detail).find('form[action=\"'+root_url+'cart/add\"]').find('button[type="submit"]').eq(0).after(jQuery(bntButton));
                    }

                    if (config_reponse.remove_price == 1)
                        removeFromdetailpage(array_remove_price, ele_frm_detail);
                    if (config_reponse.remove_button == 1) {
                        removeFromdetailpage(array_ele_qty_remove, ele_frm_detail);
                        removeFromdetailpage(array_remove_btn, ele_frm_detail);
                    }

                }
            }
        }
        function submitAjax(form) {
            var pageType = '';
            if (typeof meta.pageType == 'undefined') {
                if (window.location.pathname.indexOf('/cart')) {
                    pageType = 'cart';
                }
                if (window.location.pathname.indexOf('/acount')) {
                    pageType = 'acount';
                }
            } else {
                pageType = meta.pageType + '-' + meta.resourceId;
            }
            form.find('.submit_from').val(pageType);

            jQuery.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': form.find("input[name='_token']").val()
                }
            });
            jQuery.ajax({
                type: 'POST',
                url: form.attr('action'),
                data: form.serialize(),
                async: true,
                cache: true,
                beforeSend: function() {
                    form.parent().addClass('storeify-frm-loading');

                },

                success: function(response) {
                    form.parent().removeClass('storeify-frm-loading');
                    form.css("visibility", "hidden");
                    form.next(".storeify-requestaquote-mes").removeClass('storeify-mes-alert');
                    form.next(".storeify-requestaquote-mes").removeClass('storeify-mes-success');
                    form.next(".storeify-requestaquote-mes").html(response.mes);
                    form.next(".storeify-requestaquote-mes").show();

                    // setTimeout(function() {
                    //     form.css("visibility", "visible");
                    //     form.next(".storeify-requestaquote-mes").html('');
                    //     form.next(".storeify-requestaquote-mes").hide();
                    //     form.find('.storeify-input-control').each(function() {
                    //         if (jQuery(this).hasClass('storeify-select') && jQuery(this).data('default') == '') {
                    //             jQuery(this).find('option:eq(0)').prop('selected', true);
                    //         } else {
                    //             jQuery(this).val(jQuery(this).data('default'));
                    //         }

                    //     });
                    //     form.find('.bg-success').html('');
                    //     form.find('.file-error-message').html('');

                    // }, 5000);
                    if (response.status == 0) {
                        form.next(".storeify-requestaquote-mes").addClass('storeify-mes-alert');
                    } else {
                        form.next(".storeify-requestaquote-mes").addClass('storeify-mes-success');
                        if(config_reponse.enable_print == 1){
                            var htmlPrint = '<div class="ify-quote-group-print"><div class="ify_print_content" style="display:none;">'+response.html_print+'</div>';
                            var print_pdf = storeify_lang.print || 'Print PDF';
                            htmlPrint += '<button type="button" class="button btn quote-ify-print">'+print_pdf+'</button></div>';
                            form.next(".storeify-requestaquote-mes").append(htmlPrint);
                        }
                        if (response.thankyoupage_url)
                            jQuery(location).attr('href', response.thankyoupage_url);
                    }

                }

            });
        }
        function chekviewform(typeS,objectView){
            var prdID =  appConfig.product.id;
            var prdHandle = appConfig.product.handle;
            var collectionArr = appConfig.product.collection;
            var productData = appConfig.product;
            if(typeS == '1'){
                return 1;
            }
            if(typeS == '2'){
                if ($.inArray(prdHandle, objectView) !== -1) return 1;
            }
            if(typeS == '3'){
                var checkCollec = 0;
                jQuery.each(collectionArr, function(i, v) {
                    if (jQuery.inArray(v.toString(), objectView) != -1)
                        checkCollec = 1;
                });
                if (checkCollec == 1) return 1;
            }
            if(typeS == '4'){
                return checkConditions(objectView,productData,collectionArr);
            }
            return 0;
        }
        function jviewFormbuilder_detail(id, html, upload, max, storeify_filezie, ele_itemList, array_remove_price, array_remove_btn, array_ele_qty_remove, ele_frm_detail) {
            jQuery(document).ready(function() {
                if (jQuery(".ify-quote-group").length > 0) {
                    jQuery(".ify-quote-group").each(function() {
                        var that = jQuery(this);
                        var prdId = jQuery(this).data('targetid');
                        var prdHandle = jQuery(this).data('targethandle');
                        var checkHandle = 0;
                        var productCurrent = '';
                        if (typeof appConfig.product !== 'undefined')
                            productCurrent = appConfig.product.id;
                        if (!that.hasClass('ify-has-modal')) {
                            if (prdId.toString() == productCurrent || that.hasClass('ify-embed-code')) {
                                that.removeClass('ify-hide').addClass('ify-has-modal storeify-button-detail');
                                that.html(html);
                                jQuery('.storeify_money_format').val(appConfig.money_format);
                                jQuery('.storeify_localization').val(appConfig.locale);
                                if (typeof appConfig.customer !== 'undefined'){
                                    //console.log(appConfig.customer)
                                    jQuery('.storeify-form-action-quote input[name="storeifyInput_first_name"]').val(appConfig.customer.first_name );
                                    jQuery('.storeify-form-action-quote input[name="storeifyInput_last_name"]').val(appConfig.customer.last_name  );
                                    jQuery('.storeify-form-action-quote input[name="storeifyInput_email"]').val(appConfig.customer.email );
                                }
                                if(config_reponse.remove_price == 1)
                                  removeFromdetailpage(array_remove_price,ele_frm_detail);
                                if(config_reponse.remove_button == 1){
                                  removeFromdetailpage(array_ele_qty_remove,ele_frm_detail);
                                  removeFromdetailpage(array_remove_btn,ele_frm_detail);
                                }
                            }
                        }
                    });
                } else {
                    jQuery(ele_frm_detail).find('form[action=\"'+root_url+'cart/add\"]').last().after(jQuery(html));
                    jQuery('.storeify_money_format').val(appConfig.money_format);
                    jQuery('.storeify_localization').val(appConfig.locale);
                    if (typeof appConfig.customer !== 'undefined'){
                        //console.log(appConfig.customer)
                        jQuery('.storeify-form-action-quote input[name="storeifyInput_first_name"]').val(appConfig.customer.first_name );
                        jQuery('.storeify-form-action-quote input[name="storeifyInput_last_name"]').val(appConfig.customer.last_name  );
                        jQuery('.storeify-form-action-quote input[name="storeifyInput_email"]').val(appConfig.customer.email );
                    }
                    if (config_reponse.remove_price == 1)
                        removeFromdetailpage(array_remove_price, ele_frm_detail);
                    if (config_reponse.remove_button == 1) {
                        removeFromdetailpage(array_ele_qty_remove, ele_frm_detail);
                        removeFromdetailpage(array_remove_btn, ele_frm_detail);
                    }
                }
                // jQuery('body').append(html);
                var storeify_lang_cf = {
                    autoclose: true,
                    ignoreReadonly: true,
                    format: 'DD/MM/YYYY'
                };
                var class_col = 'storeify-col-1';
                var qty_element_html = '<input type="hidden" class="ify_qty_input" id="ify_qty_input" name="ify_qty" value="1">';
                if (show_qty_modal == 1) {
                    class_col = 'storeify-col-2';
                    qty_element_html = '<div class="storeify-frm-group storeify-col-2 ify_qty_group"><div class="storeify-div-input">';
                    qty_element_html += '<input type="number" class="storeify-input-control storeify-input-text ify_qty_input" placeholder="QTY" name="ify_qty" id="ify_qty_input" min="1"  value="1" required>';
                    qty_element_html += '</div></div>';
                }
                jQuery(".datetimepicker-input").each(function() {
                    storeify_lang_cf.format = jQuery(this).data('format');
                    jQuery(this).datetimepicker(storeify_lang_cf);
                });
                var form_popup = jQuery('#storeify_form_action_' + id);

                var target = '#storeify-form-group-' + id;
                var product_json = appConfig.product.handle;
                var variant_id = '';
                var qty = 1;
                if (variant_element != '') {
                    variant_id = jQuery(ele_frm_detail).find(variant_element).val();
                } else {
                    variant_id = jQuery(ele_frm_detail).find('form[action=\"'+root_url+'cart/add\"]').find('[name="id"]').val();
                }
                if (qty_element != '') {
                    qty = jQuery(ele_frm_detail).find(qty_element).val();
                } else {
                    qty = jQuery(ele_frm_detail).find('input[name="quantity"]').val();
                }
                jQuery.getJSON('/products/' + product_json + '.js', function(data) {

                    var handle_txt = data.handle
                    var html_content = '';var price_element_html = '';var priceDefault = 0;var sku = '';
                    var check_first = 0;
                    if (data.variants.length > 0) {
                        var hide_css = '';
                        if(data.variants.length == 1) hide_css = 'style="display:none;"';
                        var html_option = '<div class="storeify-frm-group ' + class_col + ' storeify-div-select storeify-div-input storeify-option-variants" '+hide_css+'><select data-target="' + target + '" id="storeify_option_variants" name="variant_id" class="storeify-input-control storeify-select form-control-select">';
                        var html_img = '';
                        var src_img = '';
                        var html_title = '';
                        if (data.featured_image) src_img = data.featured_image;
                        jQuery.each(data.variants, function(k, v) {
                            if (v.featured_image) src_img = v.featured_image.src;
                            if(v.sku && v.sku != 'null') sku = v.sku;
                            if( (v.available == true && appConfig.hide_variants_outofstock == 1) || appConfig.hide_variants_outofstock == 0){
                                if (check_first == 0) {
                                    check_first = 1;
                                    priceDefault = v.price;
                                    html_title = '<h5 class="variant-title" style="display:none;">' + v.name + '</h5>' + '<input type="hidden" name="storeify_product_variant" class="storeify_product_variant"  value="' + v.id + '">' + '<input type="hidden" name="storeify_product_option" class="storeify_product_option" value="' + v.title + '"">';
                                    html_title += '<input type="hidden" name="storeify_product_sku" class="storeify_product_sku" value="' + sku + '"">';
                                    html_img = '<div class="ify-product-thumbnail" style="display:none;"><img class="storeify-thumbnail" src="' + src_img + '" /></div>';
                                    html_option += '<option selected="selected" value="' + v.id + '" data-pricedefault="'+v.price+'" data-sku="'+sku+'" data-img="' + src_img + '" data-name="' + v.name + '">' + v.title + '</option>';
                                } else {
                                    html_option += '<option value="' + v.id + '" data-pricedefault="'+v.price+'" data-sku="'+sku+'" data-img="' + src_img + '" data-name="' + v.name + '">' + v.title + '</option>';
                                }
                            }
                            

                        });
                        html_option += '</select><i class="storeify-select-arrow"></i></div>' + qty_element_html;
                        if(ify_show_input_price == 1){
                            var priceText = 'Price: '+formatMoney(priceDefault,appConfig.money_format );
                            price_element_html = '<div class="storeify-frm-group storeify-col-1 ify_price_group"><div class="storeify-div-input">';
                            price_element_html += '<input type="text" class="storeify-input-control storeify-input-text ify_price_input" placeholder="'+storeify_lang.your_price+'" name="ify_price" id="ify_price_input" ><em class="ify-price-default">'+priceText+'</em>';
                            price_element_html += '</div></div>';
                            html_option += price_element_html;
                        }
                        html_content = '<div class="ify-product-head">' + html_img + '</div><div class="ify-product-body">' + html_title + html_option + '</div>';

                    } else {
                        html_title = '<h5>' + (storeify_lang.add_title).replace('{{product}}', data.title) + '</h5>';
                    }
                    if (html_content != '') {
                        jQuery(target).find('.storeify-body-frm').prepend('<div class="storeify_product_group">' + html_content + '</div>');
                        if (variant_id != '' && typeof variant_id !== "undefined" && variant_id!= null && appConfig.hide_variants_outofstock == 0)
                            jQuery('#storeify_option_variants').val(variant_id).trigger('change');
                        if (qty)
                            jQuery('.ify_qty_input').val(qty);
                    }
                    if(check_first == 0){
                        jQuery(target).find('.storeify-submit-btn').prop('disabled', true);
                        jQuery(target).find('.storeify-requestaquote-mes').html('Sold out').addClass('storeify-mes-alert').show();
                        jQuery(target).find('.storeify-form-action-quote').css("visibility", "hidden");
                    }else{
                        jQuery(target).find('.storeify-submit-btn').prop('disabled', false);
                        jQuery(target).find('.storeify-requestaquote-mes').html('').removeClass('storeify-mes-alert').hide();
                        jQuery(target).find('.storeify-form-action-quote').css("visibility", "visible");
                    }
                    jQuery(target).find('.storeify_product_id').val(data.id);
                    jQuery(target).find('.storeify_product_title').val(data.title);
                    jQuery(target).find('.storeify_product_href').val(product_json);
                    if (jQuery(target).find('.storeify-title-frm').length > 0)
                        jQuery(target).find('.storeify-title-frm').text(jQuery(target).find('.title-frm-hide').val().replace("{{product-title}}", data.title));
                    form_popup.parent().removeClass('storeify-frm-loading');
                })
                jQuery.validator.addClassRules("ify_price_input", { number: true });
                form_popup.validate({
                    submitHandler: function(form) {
                        var id = jQuery(form).find('input[name="id"]').val();
                        var key = jQuery(form).find('.captcha_side').val();
                        if(window.grecaptcha && key != '' && typeof id !== "undefined" && jQuery('#g-recaptcha-response-'+id).length > 0){
                             window.grecaptcha.ready(function() {
                                    try {

                                     var query = window.grecaptcha.execute(key, {action:'validate_quote_captcha_'+id});
                                        query.then(function(token) {
                                         document.getElementById('g-recaptcha-response-'+id).value = token;
                                         document.getElementById('g-recaptcha-acction-'+id).value = 'validate_quote_captcha_'+id;
                                         submitAjax(jQuery(form));
                                     });
                                        console.log('Captcha request success.');
                                    } catch (e) {
                                        var message = e && e.message || 'Captcha request error.';
                                        alert('Error: ' + message);
                                    }
                                });
                         }else{
                            submitAjax(jQuery(form));
                         }

                    }
                });
                if (upload.upload == 1)
                    uploadFile(id, upload.upload_label, upload.upload_url, max, storeify_filezie);
            });
        }

        function removeCustom(array) {
            jQuery('body').find(array.trim()).remove();
        }
        function ipLookUp (key, value, html_before_0) {
            var filter_country_value = JSON.parse(value.filter_country_value);
            jQuery.ajax({
                //async: false,
                method: "GET",
                url: "http://ipinfo.io/json?token=a6b442e7e8dece",
            }).done(function(response) {
                if(filter_country_value[0] == 1 ){
                    filter_country_value.splice(0, 1);
                    if(jQuery.inArray( response.country, filter_country_value ) != -1)
                    //if(filter_country_value[1] == response.country)
                        renderItem(key, value);
                }else{
                    filter_country_value.splice(0, 1);
                    if(jQuery.inArray( response.country, filter_country_value ) == -1)
                    // if(filter_country_value[1] != response.country)
                        renderItem(key, value);
                }
            });
        }
        function renderItem(key, value, html_before_0){
                var html_before = login_see_btn + html_before_0 + '<div class="storeify-light-modal" id="storeify-light-modal-' + key + '" role="dialog" aria-labelledby="light-modal-label" aria-hidden="false"><div class="storeify-light-modal-content storeify-animated storeifyfadeInDown">';
                if (value.type == 0 && typeof appConfig.product !== 'undefined') {
                    var html_before = login_see_btn + html_before_0 + '<div class="storeify-form-group" id="storeify-form-group-' + key + '" ><div class="storeify-light-frm-content">';
                }
                var html_after = '</div></div>';
                if (value.status == 1) {
                    if (config_reponse.enable_captcha == 1 && config_reponse.gg_site_key !== '' && config_reponse.gg_secret_key !== '') {
                        html_after += '<script type="text/javascript">' + 'function getCaptcha(ele,id){' + ' grecaptcha.ready(function() {' + ' grecaptcha.execute(\'' + config_reponse.gg_site_key + '\', {action: \'storeify_action_send_\'+id}).then(function(token) {' + ' $(ele+\' input[name="token"]\').val(token);' + ' $(ele+\' input[name="action"]\').val(\'storeify_action_send_\'+id);'

                        + '});;' + ' });' + '}' + 'var onloadCallback = function() {' + ' getCaptcha(\'.storeify-requestaquote-captcha\',\'0\');' + '};' + '$(\'#storeify_form_action_' + key + '\').submit(function() {' + 'getCaptcha(\'.storeify-requestaquote-captcha\',\'0\');' + '});' + '</script>';
                    }
                    if (value.type == 0 && typeof appConfig.product !== 'undefined') {
                        var checkfrmView = 0;
                        checkfrmView = chekviewform(value.show,value.view);
                        if(checkfrmView == 1)
                        jviewFormbuilder_detail(key, html_before + value.html + html_after, value.upload, max_file, file_size, ele_itemList, array_remove_price, array_remove_btn, array_ele_qty_remove, ele_frm_detail);

                    } else {
                        jviewFormbuilder(key, login_see_btn + html_before + value.html + html_after, value.upload, max_file, file_size);
                        if (value.show == '4')
                            addButtonList_4(value.view, key, ele_itemList, array_remove_price, array_remove_btn, array_ele_qty_remove, ele_frm_detail);
                        if (value.show == '3')
                            addButtonList_3(value.view, key, ele_itemList, array_remove_price, array_remove_btn, array_ele_qty_remove, ele_frm_detail);
                        if (value.show == '2')
                            addButtonList_2(value.view, key, ele_itemList, array_remove_price, array_remove_btn, array_ele_qty_remove, ele_frm_detail);
                        if (value.show == '1')
                            addButtonList_1(value.view, key, ele_itemList, array_remove_price, array_remove_btn, array_ele_qty_remove, ele_frm_detail);
                    }
                    // if( (value.view).length > 0 && value.show !== 'all'){
                    //  if(ify_short_code == 1)
                    //  findProductscode(value.view,key,meta,ele_itemList,array_remove_price,array_remove_btn,array_ele_qty_remove,ele_frm_detail);
                    //  else
                    //  findProducts(value.view,key,meta,ele_itemList,array_remove_price,array_remove_btn,array_ele_qty_remove,ele_frm_detail);

                    // }else{
                    //  if(ify_short_code == 1)
                    //  allProductscode(value.view,key,meta,ele_itemList,array_remove_price,array_remove_btn,array_ele_qty_remove,ele_frm_detail);
                    //  else
                    //  allProducts(value.view,key,meta,ele_itemList,array_remove_price,array_remove_btn,array_ele_qty_remove,ele_frm_detail);

                    // }
                }
        }
        removeCustom(remove_ele_custom);
        jQuery.getJSON(requestaquote_json, function(data) {
            var html_before_0 = '';
            if (config_reponse.enable_captcha == 1 && config_reponse.gg_site_key !== '') {
                html_before_0 = '<script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=' + config_reponse.gg_site_key + '"></script>';
            }
            jQuery.each(data, function(key, value) {
                if(value.filter_lang == 1){
                    var filter_lang_value = JSON.parse(value.filter_lang_value);
                    if(filter_lang_value[0] == 1 ){
                        filter_lang_value.splice(0, 1);
                        if(jQuery.inArray( appConfig.locale, filter_lang_value ) == -1) return true;
                    }else{
                        filter_lang_value.splice(0, 1);
                        if(jQuery.inArray( appConfig.locale, filter_lang_value ) != -1) return true;
                    }
                }
                if(value.filter_country != 1){
                    renderItem(key, value, html_before_0);
                }else{
                    ipLookUp(key, value, html_before_0);
                }

            }); //end for
            jQuery('#storeify-requestaquote-hidden').remove();

        });
        // jQuery.each( config_reponse.items, function( key, value ) {
        //        if(value.show_all == 1 ){
        //          jviewFormbuilder(value.id,value.type,value.html,value.upload,storeify_max,storeify_filesize) 
        //        }else{
        //           if(meta.pageType == 'home' && jQuery.inArray('home-',value.pages) != -1){
        //                jviewFormbuilder(value.id,value.type,value.html,value.upload,storeify_max,storeify_filesize) 
        //            }
        //            if(meta.pageType == 'product' && typeof meta.resourceId !== 'undefined'){
        //              // console.log(jQuery.inArray(meta.resourceId.toString(),value.products))
        //              if(jQuery.inArray(meta.resourceId.toString(),value.products) !== -1 ){
        //                jviewFormbuilder(value.id,value.type,value.html,value.upload,storeify_max,storeify_filesize) 
        //              }
        //            }
        //            if(meta.pageType == 'collection'){

        //              if(typeof meta.resourceId == 'undefined' && jQuery.inArray('catalog-',value.pages) !== -1){
        //                jviewFormbuilder(value.id,value.type,value.html,value.upload,storeify_max,storeify_filesize) 
        //              }

        //              if(typeof meta.resourceId != 'undefined' && jQuery.inArray(meta.resourceId.toString(),value.collections) !== -1){
        //                jviewFormbuilder(value.id,value.type,value.html,value.upload,storeify_max,storeify_filesize) 
        //              }
        //            }
        //            if(meta.pageType == 'collections' && typeof meta.resourceId == 'undefined' && jQuery.inArray('collections-',value.pages) !== -1){
        //                jviewFormbuilder(value.id,value.type,value.html,value.upload,storeify_max,storeify_filesize) 
        //            }
        //            if( meta.pageType == 'searchresults' && jQuery.inArray('searchresult-',value.pages) !== -1 ){
        //                jviewFormbuilder(value.id,value.type,value.html,value.upload,storeify_max,storeify_filesize) 
        //            }

        //            if(typeof meta.resourceId != 'undefined' && meta.pageType == 'page' ){
        //              if(jQuery.inArray('page-'+meta.resourceId.toString(),value.pages) != -1 ){
        //                jviewFormbuilder(value.id,value.type,value.html,value.upload,storeify_max,storeify_filesize) 
        //              }
        //            }
        //            if(typeof meta.pageType == 'undefined' && window.location.pathname.indexOf('/cart') !== -1 && jQuery.inArray('cart',value.config.page_type) !== -1){
        //                jviewFormbuilder(value.id,value.type,value.html,value.upload,storeify_max,storeify_filesize) 
        //            }
        //            if(typeof meta.pageType == 'undefined' && window.location.pathname.indexOf('/acount') !== -1 && jQuery.inArray('customers',value.config.page_type) !== -1){
        //                jviewFormbuilder(value.id,value.type,value.html,value.upload,storeify_max,storeify_filesize) 
        //            }
        //        }
        //    });
        jQuery(document).ready(function() {
            jQuery(document).on("click", ".storeify-quote-btn-trigger-popup", function(e) {
                e.preventDefault();
                var storeify_lang_cf = {
                    autoclose: true,
                    ignoreReadonly: true,
                    format: 'DD/MM/YYYY'
                };
                var class_col = 'storeify-col-1';
                var qty_element_html = '<input type="hidden" class="ify_qty_input" id="ify_qty_input" name="ify_qty" value="1">';
                if (show_qty_modal == 1) {
                    class_col = 'storeify-col-2';
                    qty_element_html = '<div class="storeify-frm-group storeify-col-2 ify_qty_group"><div class="storeify-div-input">';
                    qty_element_html += '<input type="number" class="storeify-input-control storeify-input-text ify_qty_input" placeholder="QTY" name="ify_qty" id="ify_qty_input" min="1"  value="1" required>';
                    qty_element_html += '</div></div>';
                }
                //if(storeify_lang !== '') storeify_lang_cf = {locale:storeify_lang,autoclose:true,ignoreReadonly:true, format: 'DD/MM/YYYY'};
                jQuery(".datetimepicker-input").each(function() {
                    storeify_lang_cf.format = jQuery(this).data('format');
                    jQuery(this).datetimepicker(storeify_lang_cf);
                });
                var form_popup = jQuery('#storeify_form_action_' + jQuery(this).data('id'));
                jQuery(form_popup).css("visibility", "visible");
                jQuery(form_popup).next(".storeify-requestaquote-mes").html('');
                jQuery(form_popup).next(".storeify-requestaquote-mes").hide();
                jQuery(form_popup).find('.storeify-input-control').each(function() {
                    if (jQuery(this).hasClass('storeify-select') && jQuery(this).data('default') == '') {
                        jQuery(this).find('option:eq(0)').prop('selected', true);
                    } else {
                        jQuery(this).val(jQuery(this).data('default'));
                    }

                });
                jQuery(form_popup).find('.bg-success').html('');
                jQuery(form_popup).find('.file-error-message').html('');
                form_popup.validate({
                    submitHandler: function(form) {
                        var id = jQuery(form).find('input[name="id"]').val();
                        var key = jQuery(form).find('.captcha_side').val();
                        if(window.grecaptcha && key != '' && typeof id !== "undefined" && jQuery('#g-recaptcha-response-'+id).length > 0){
                             window.grecaptcha.ready(function() {
                                    try {

                                     var query = window.grecaptcha.execute(key, {action:'validate_quote_captcha_'+id});
                                        query.then(function(token) {
                                         document.getElementById('g-recaptcha-response-'+id).value = token;
                                         document.getElementById('g-recaptcha-acction-'+id).value = 'validate_quote_captcha_'+id;
                                         submitAjax(jQuery(form));
                                     });
                                        console.log('Captcha request success.');
                                    } catch (e) {
                                        var message = e && e.message || 'Captcha request error.';
                                        alert('Error: ' + message);
                                    }
                                });
                         }else{
                            submitAjax(jQuery(form));
                         }

                    }
                });
                var target = jQuery(this).data('target');
                var product_json = jQuery(this).data('product');
                jQuery(target).find('.storeify_product_group').remove();
                form_popup.parent().addClass('storeify-frm-loading');
                var variant_id = '';
                var qty = 1;
                if (jQuery(this).parent().hasClass('storeify-button-detail')) {

                    if (variant_element != '') {
                        variant_id = jQuery(ele_frm_detail).find(variant_element).val();
                    } else {
                        variant_id = jQuery(ele_frm_detail).find('form[action=\"'+root_url+'cart/add\"]').find('[name="id"]').val();
                    }
                    if (qty_element != '') {
                        qty = jQuery(ele_frm_detail).find(qty_element).val();
                    } else {
                        qty = jQuery(ele_frm_detail).find('input[name="quantity"]').val();
                    }
                }
                jQuery.getJSON('/products/' + product_json + '.js', function(data) {

                    var handle_txt = data.handle
                    var html_content = '';var priceDefault = 0; var sku = '';
                    var check_first = 0;
                    if (data.variants.length > 0) {
                        var hide_css = '';
                        if(data.variants.length == 1) hide_css = 'style="display:none;"';
                        var html_option = '<div class="storeify-frm-group ' + class_col + ' storeify-div-select storeify-div-input storeify-option-variants" '+hide_css+'><select data-target="' + target + '" id="storeify_option_variants" name="variant_id" class="storeify-input-control storeify-select form-control-select">';
                        var html_img = '';
                        var src_img = '';
                        var html_title = '';
                        if (data.featured_image) src_img = data.featured_image;
                        jQuery.each(data.variants, function(k, v) {
                            if (v.featured_image) src_img = v.featured_image.src;
                            if(v.sku && v.sku != 'null') sku = v.sku;
                            if( (v.available == true && appConfig.hide_variants_outofstock == 1) || appConfig.hide_variants_outofstock == 0){
                                if (check_first == 0) {
                                    check_first = 1;
                                    priceDefault = v.price;
                                    html_title = '<h5 class="variant-title">' + v.name + '</h5>' + '<input type="hidden" name="storeify_product_variant" class="storeify_product_variant"  value="' + v.id + '">' + '<input type="hidden" name="storeify_product_option" class="storeify_product_option" value="' + v.title + '"">';
                                    html_title += '<input type="hidden" name="storeify_product_sku" class="storeify_product_sku" value="' + sku + '"">';
                                    html_img = '<div class="ify-product-thumbnail"><img class="storeify-thumbnail" src="' + src_img + '" /></div>';
                                    html_option += '<option selected="selected" value="' + v.id + '" data-pricedefault="'+v.price+'" data-sku="'+sku+'" data-img="' + src_img + '" data-name="' + v.name + '">' + v.title + '</option>';
                                } else {
                                    html_option += '<option value="' + v.id + '" data-pricedefault="'+v.price+'" data-sku="'+sku+'" data-img="' + src_img + '" data-name="' + v.name + '">' + v.title + '</option>';
                                }
                            }

                        });
                        html_option += '</select><i class="storeify-select-arrow"></i></div>' + qty_element_html;
                        if(ify_show_input_price == 1){
                            var priceText = storeify_lang.old_price+': '+formatMoney(priceDefault,appConfig.money_format );
                            price_element_html = '<div class="storeify-frm-group storeify-col-1 ify_price_group"><div class="storeify-div-input">';
                            price_element_html += '<input type="text" class="storeify-input-control storeify-input-text ify_price_input" placeholder="'+storeify_lang.your_price+'" name="ify_price" id="ify_price_input" ><em class="ify-price-default">'+priceText+'</em>';
                            price_element_html += '</div></div>';
                            html_option += price_element_html;
                        }
                        html_content = '<div class="ify-product-head">' + html_img + '</div><div class="ify-product-body">' + html_title + html_option + '</div>';

                    } else {
                        html_title = '<h5>' + (storeify_lang.add_title).replace('{{product}}', data.title) + '</h5>';
                    }
                    if (html_content != '') {
                        jQuery(target).find('.storeify-body-frm').prepend('<div class="storeify_product_group">' + html_content + '</div>');
                        if (variant_id != '' && typeof variant_id !== "undefined" && variant_id != null && appConfig.hide_variants_outofstock == 0)
                            jQuery('#storeify_option_variants').val(variant_id).trigger('change');
                        if (qty)
                            jQuery('.ify_qty_input').val(qty);
                    }
                    if(check_first == 0){
                        jQuery(target).find('.storeify-submit-btn').prop('disabled', true);
                        jQuery(target).find('.storeify-requestaquote-mes').html('Sold out').addClass('storeify-mes-alert').show();
                        jQuery(target).find('.storeify-form-action-quote').css("visibility", "hidden");
                    }else{
                        jQuery(target).find('.storeify-submit-btn').prop('disabled', false);
                        jQuery(target).find('.storeify-requestaquote-mes').html('').removeClass('storeify-mes-alert').hide();
                        jQuery(target).find('.storeify-form-action-quote').css("visibility", "visible");
                    }
                    jQuery(target).find('.storeify_product_id').val(data.id);
                    jQuery(target).find('.storeify_product_title').val(data.title);
                    jQuery(target).find('.storeify_product_href').val(product_json);
                    if (jQuery(target).find('.storeify-title-frm').length > 0)
                        jQuery(target).find('.storeify-title-frm').text(jQuery(target).find('.title-frm-hide').val().replace("{{product-title}}", data.title));
                    form_popup.parent().removeClass('storeify-frm-loading');
                })


                jQuery(target).addClass('target');
            });
            jQuery(document).on("change", "#storeify_option_variants", function(e) {
                var result = [];
                var title = jQuery(this).parent().parent().find('h5');
                var img = jQuery(this).parent().parent().parent().find('.storeify-thumbnail');
                var option = jQuery(this).find(":selected");
                var target = jQuery(this).data('target')
                img.attr('src', option.data('img'));
                title.html(option.data('name'));

                jQuery(target).find('.storeify_product_variant').val(option.val());
                jQuery(target).find('.storeify_product_option').val(option.text());
                jQuery(target).find('.storeify_product_option').val(option.data('sku'));
                if(jQuery('.ify-price-default').length){
                    jQuery('.ify-price-default').text(storeify_lang.old_price+': '+formatMoney(option.data('pricedefault'),appConfig.money_format ));
                }
            })
            jQuery(document).on("click", ".storeify-requestaquote-button", function(e) {
                e.preventDefault();
                var target = jQuery(this).data('target');

                jQuery(target).addClass('target');
            });
            jQuery(document).on("click", ".storeify-frm-close", function(e) {
                e.preventDefault();
                var target = jQuery(this).parent().parent().parent();
                var target2 = jQuery(this).parent().parent();
                jQuery(target).removeClass('target');
                jQuery(target2).removeClass('target');
            });
            jQuery(document).on('click', '.quote-ify-print', function(e) {
                e.preventDefault();
                var contents = jQuery(".ify_print_content").html();
                const d = new Date();
                let time = d.getTime();
                var currentTitle = document.title;
                document.title = 'Quote #'+time;
                var frame1 = jQuery('<iframe />');
                frame1[0].name = "frame1";
                frame1.css({ "position": "absolute", "top": "-1000000px" });
                jQuery("body").append(frame1);
                var frameDoc = frame1[0].contentWindow ? frame1[0].contentWindow : frame1[0].contentDocument.document ? frame1[0].contentDocument.document : frame1[0].contentDocument;
                frameDoc.document.open();
                //Create a new HTML document.
                frameDoc.document.write('<html><head><title>'+'Quote #'+time+'</title>');
                var style = '<style>';
                style += 'body{text-align:left;}';
                style += '.confirm-success{display:none}';
                style += '.confirm-product{display:block;width:100%;text-align: center;padding-bottom: 15px;}';
                style += '.prd-thumb{position: relative;display: inline-block;overflow: hidden;width: 120px;background: #fff;border: 0.1rem solid #e1e3e5;border-radius: 10px}';
                style += '.prd-thumb img{position: absolute;top: 0;right: 0;bottom: 0;left: 0;margin: auto;max-width: 100%;max-height: 100%;}';
                style += '.prd-thumb:after {content: "";display: block;padding-bottom: 100%;}';
                style += '.prd-title{font-size: 15px;font-weight: 600;padding:15px 0 20px 0}';
                // style += '.confirm-booking,.confirm-total{flex-direction: column;align-items: flex-start;display: flex;justify-content: space-between;font-size: 14px;width:500px;margin:0 auto;}';
                // style += '.confirm-booking > div,.confirm-total > div{width: 100%;margin-bottom: 5px;padding-bottom: 5px;display: flex;justify-content: space-between;}';
                // style += '.confirm-booking label,.confirm-total label{display: inline-block;margin-right: 2px;font-weight: 600;}';
                style += '</style>';
                frameDoc.document.write(style);
                frameDoc.document.write('</head><body>');
                frameDoc.document.write(contents);
                frameDoc.document.write('</body></html>');
                frameDoc.document.close();
                setTimeout(function () {
                    
                    window.frames["frame1"].focus();
                    window.frames["frame1"].print();
                    document.title = currentTitle;
                    frame1.remove();
                }, 500);
            });
        });
        if(appConfig.page && appConfig.page.path == root_url+'apps/request-a-quote/history' && typeof appConfig.customer !== 'undefined') {
              function historyLoad(){
                jQuery.ajax({
                      url: '/apps/request-a-quote/history/list',
                      type: 'GET',
                      dataType: 'json',
                      data: {
                          email: $('#ify_email').val(),
                          page: $('#ify_page').val(),
                      }
                    }).done(function(data) {
                     jQuery('.btn-ify-more-history').prop('disabled',false);
                     if(data.status == 1){
                        let page = $('#ify_page').val();
                        jQuery('table.ify-quote-histoty tbody').append(data.html);
                        jQuery('#ify_page').val( Number(page) + 1);
                        if(data.count < 10 ){
                            $('.ify-quote-histoty tfoot').hide();
                        }
                     }else{
                        jQuery('table.ify-quote-histoty tbody').append(data.mes);
                     }
                        
                    });
              }
              historyLoad();
              jQuery(document).on("click", ".btn-ify-more-history", function(e) {
                e.preventDefault();
                jQuery(this).prop('disabled',true);
                historyLoad();
              });
              jQuery(document).on("click", ".ify-view-item", function(e) {
                e.preventDefault();
                var id = jQuery(this).data('id');
                jQuery.ajax({
                      url: '/apps/request-a-quote/history/view',
                      type: 'GET',
                      dataType: 'json',
                      data: {
                          id: id,
                      }
                    }).done(function(data) {
                        if(data.status == 1)
                        $('#ify_view_item_history .view-item-history').html(data.html);
                        else
                        $('#ify_view_item_history .view-item-history').html(data.mes);
                        $('#ify_view_item_history').addClass('target');
                    });
              });
            }

    }; //end storeifyJavaScript


    /*function check_storeify_quote_scripttag() {
        var scripts = document.getElementsByTagName('script');
        for (var i = scripts.length; i--;) {
            if (scripts[i].innerText.indexOf('asyncLoad') >= 0 && scripts[i].innerText.indexOf("quote.storeify.app") >= 0) {
                console.log('Storeify Quote app is working.');
                return true;
            }
        }
        return false;
    }*/

    if ((typeof jQuery === 'undefined') || (parseFloat(jQuery.fn.jquery) < 1.7)) {
        loadScript('//code.jquery.com/jquery-1.11.1.min.js', function() {
            STOREIFY = jQuery.noConflict(true);
            STOREIFY(document).ready(function() {
                storeifyJavaScript(STOREIFY);
            });
        });
    } else {
        storeifyJavaScript(jQuery);
    }

})();