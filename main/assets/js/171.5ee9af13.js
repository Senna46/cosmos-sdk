(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{790:function(e,t,a){"use strict";a.r(t);var s=a(1),c=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"messages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#messages"}},[e._v("#")]),e._v(" Messages")]),e._v(" "),a("p",[e._v("In this section we describe the processing of messages for the authz module.")]),e._v(" "),a("h2",{attrs:{id:"msggrant"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msggrant"}},[e._v("#")]),e._v(" MsgGrant")]),e._v(" "),a("p",[e._v("An authorization grant is created using the "),a("code",[e._v("MsgGrant")]),e._v(" message.\nIf there is already a grant for the "),a("code",[e._v("(granter, grantee, Authorization)")]),e._v(" triple, then the new grant overwrites the previous one. To update or extend an existing grant, a new grant with the same "),a("code",[e._v("(granter, grantee, Authorization)")]),e._v(" triple should be created.")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnR3JhbnQgaXMgYSByZXF1ZXN0IHR5cGUgZm9yIEdyYW50IG1ldGhvZC4gSXQgZGVjbGFyZXMgYXV0aG9yaXphdGlvbiB0byB0aGUgZ3JhbnRlZQovLyBvbiBiZWhhbGYgb2YgdGhlIGdyYW50ZXIgd2l0aCB0aGUgcHJvdmlkZWQgZXhwaXJhdGlvbiB0aW1lLgptZXNzYWdlIE1zZ0dyYW50IHsKICBvcHRpb24gKGNvc21vcy5tc2cudjEuc2lnbmVyKSA9ICZxdW90O2dyYW50ZXImcXVvdDs7CgogIHN0cmluZyBncmFudGVyID0gMSBbKGNvc21vc19wcm90by5zY2FsYXIpID0gJnF1b3Q7Y29zbW9zLkFkZHJlc3NTdHJpbmcmcXVvdDtdOwogIHN0cmluZyBncmFudGVlID0gMiBbKGNvc21vc19wcm90by5zY2FsYXIpID0gJnF1b3Q7Y29zbW9zLkFkZHJlc3NTdHJpbmcmcXVvdDtdOwoKICBjb3Ntb3MuYXV0aHoudjFiZXRhMS5HcmFudCBncmFudCA9IDMgWyhnb2dvcHJvdG8ubnVsbGFibGUpID0gZmFsc2VdOwp9"}})],1),e._v(" "),a("p",[e._v("The message handling should fail if:")]),e._v(" "),a("ul",[a("li",[e._v("both granter and grantee have the same address.")]),e._v(" "),a("li",[e._v("provided "),a("code",[e._v("Expiration")]),e._v(" time is less than current unix timestamp (but a grant will be created if no "),a("code",[e._v("expiration")]),e._v(" time is provided since "),a("code",[e._v("expiration")]),e._v(" is optional).")]),e._v(" "),a("li",[e._v("provided "),a("code",[e._v("Grant.Authorization")]),e._v(" is not implemented.")]),e._v(" "),a("li",[a("code",[e._v("Authorization.MsgTypeURL()")]),e._v(" is not defined in the router (there is no defined handler in the app router to handle that Msg types).")])]),e._v(" "),a("h2",{attrs:{id:"msgrevoke"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msgrevoke"}},[e._v("#")]),e._v(" MsgRevoke")]),e._v(" "),a("p",[e._v("A grant can be removed with the "),a("code",[e._v("MsgRevoke")]),e._v(" message.")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"bWVzc2FnZSBNc2dSZXZva2UgewogIG9wdGlvbiAoY29zbW9zLm1zZy52MS5zaWduZXIpID0gJnF1b3Q7Z3JhbnRlciZxdW90OzsKCiAgc3RyaW5nIGdyYW50ZXIgICAgICA9IDEgWyhjb3Ntb3NfcHJvdG8uc2NhbGFyKSA9ICZxdW90O2Nvc21vcy5BZGRyZXNzU3RyaW5nJnF1b3Q7XTsKICBzdHJpbmcgZ3JhbnRlZSAgICAgID0gMiBbKGNvc21vc19wcm90by5zY2FsYXIpID0gJnF1b3Q7Y29zbW9zLkFkZHJlc3NTdHJpbmcmcXVvdDtdOwogIHN0cmluZyBtc2dfdHlwZV91cmwgPSAzOwp9"}})],1),e._v(" "),a("p",[e._v("The message handling should fail if:")]),e._v(" "),a("ul",[a("li",[e._v("both granter and grantee have the same address.")]),e._v(" "),a("li",[e._v("provided "),a("code",[e._v("MsgTypeUrl")]),e._v(" is empty.")])]),e._v(" "),a("p",[e._v("NOTE: The "),a("code",[e._v("MsgExec")]),e._v(" message removes a grant if the grant has expired.")]),e._v(" "),a("h2",{attrs:{id:"msgexec"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msgexec"}},[e._v("#")]),e._v(" MsgExec")]),e._v(" "),a("p",[e._v("When a grantee wants to execute a transaction on behalf of a granter, they must send "),a("code",[e._v("MsgExec")]),e._v(".")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"bWVzc2FnZSBNc2dFeGVjIHsKICBvcHRpb24gKGNvc21vcy5tc2cudjEuc2lnbmVyKSA9ICZxdW90O2dyYW50ZWUmcXVvdDs7CgogIHN0cmluZyBncmFudGVlID0gMSBbKGNvc21vc19wcm90by5zY2FsYXIpID0gJnF1b3Q7Y29zbW9zLkFkZHJlc3NTdHJpbmcmcXVvdDtdOwogIC8vIEF1dGhvcml6YXRpb24gTXNnIHJlcXVlc3RzIHRvIGV4ZWN1dGUuIEVhY2ggbXNnIG11c3QgaW1wbGVtZW50IEF1dGhvcml6YXRpb24gaW50ZXJmYWNlCiAgLy8gVGhlIHgvYXV0aHogd2lsbCB0cnkgdG8gZmluZCBhIGdyYW50IG1hdGNoaW5nIChtc2cuc2lnbmVyc1swXSwgZ3JhbnRlZSwgTXNnVHlwZVVSTChtc2cpKQogIC8vIHRyaXBsZSBhbmQgdmFsaWRhdGUgaXQuCiAgcmVwZWF0ZWQgZ29vZ2xlLnByb3RvYnVmLkFueSBtc2dzID0gMiBbKGNvc21vc19wcm90by5hY2NlcHRzX2ludGVyZmFjZSkgPSAmcXVvdDtzZGsuTXNnLCBhdXRoei5BdXRob3JpemF0aW9uJnF1b3Q7XTsKfQ=="}})],1),e._v(" "),a("p",[e._v("The message handling should fail if:")]),e._v(" "),a("ul",[a("li",[e._v("provided "),a("code",[e._v("Authorization")]),e._v(" is not implemented.")]),e._v(" "),a("li",[e._v("grantee doesn't have permission to run the transaction.")]),e._v(" "),a("li",[e._v("if granted authorization is expired.")])])])}),[],!1,null,null,null);t.default=c.exports}}]);