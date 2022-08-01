(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{625:function(e,o,t){"use strict";t.r(o);var c=t(1),n=Object(c.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"encoding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#encoding"}},[e._v("#")]),e._v(" Encoding")]),e._v(" "),t("p",{attrs:{synopsis:""}},[e._v("While encoding in the Cosmos SDK used to be mainly handled by "),t("code",[e._v("go-amino")]),e._v(" codec, the Cosmos SDK is moving towards using "),t("code",[e._v("gogoprotobuf")]),e._v(" for both state and client-side encoding.")]),e._v(" "),t("h2",{attrs:{id:"pre-requisite-readings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite Readings")]),e._v(" "),t("ul",[t("li",{attrs:{prereq:""}},[t("RouterLink",{attrs:{to:"/basics/app-anatomy.html"}},[e._v("Anatomy of a Cosmos SDK application")])],1)]),e._v(" "),t("h2",{attrs:{id:"encoding-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#encoding-2"}},[e._v("#")]),e._v(" Encoding")]),e._v(" "),t("p",[e._v("The Cosmos SDK utilizes two binary wire encoding protocols, "),t("a",{attrs:{href:"https://github.com/tendermint/go-amino/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Amino"),t("OutboundLink")],1),e._v(" which is an object encoding specification and "),t("a",{attrs:{href:"https://developers.google.com/protocol-buffers",target:"_blank",rel:"noopener noreferrer"}},[e._v("Protocol Buffers"),t("OutboundLink")],1),e._v(", a subset of Proto3 with an extension for\ninterface support. See the "),t("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/proto3",target:"_blank",rel:"noopener noreferrer"}},[e._v("Proto3 spec"),t("OutboundLink")],1),e._v("\nfor more information on Proto3, which Amino is largely compatible with (but not with Proto2).")]),e._v(" "),t("p",[e._v("Due to Amino having significant performance drawbacks, being reflection-based, and\nnot having any meaningful cross-language/client support, Protocol Buffers, specifically\n"),t("a",{attrs:{href:"https://github.com/gogo/protobuf/",target:"_blank",rel:"noopener noreferrer"}},[e._v("gogoprotobuf"),t("OutboundLink")],1),e._v(", is being used in place of Amino.\nNote, this process of using Protocol Buffers over Amino is still an ongoing process.")]),e._v(" "),t("p",[e._v("Binary wire encoding of types in the Cosmos SDK can be broken down into two main\ncategories, client encoding and store encoding. Client encoding mainly revolves\naround transaction processing and signing, whereas store encoding revolves around\ntypes used in state-machine transitions and what is ultimately stored in the Merkle\ntree.")]),e._v(" "),t("p",[e._v('For store encoding, protobuf definitions can exist for any type and will typically\nhave an Amino-based "intermediary" type. Specifically, the protobuf-based type\ndefinition is used for serialization and persistence, whereas the Amino-based type\nis used for business logic in the state-machine where they may convert back-n-forth.\nNote, the Amino-based types may slowly be phased-out in the future, so developers\nshould take note to use the protobuf message definitions where possible.')]),e._v(" "),t("p",[e._v("In the "),t("code",[e._v("codec")]),e._v(" package, there exists two core interfaces, "),t("code",[e._v("BinaryCodec")]),e._v(" and "),t("code",[e._v("JSONCodec")]),e._v(",\nwhere the former encapsulates the current Amino interface except it operates on\ntypes implementing the latter instead of generic "),t("code",[e._v("interface{}")]),e._v(" types.")]),e._v(" "),t("p",[e._v("In addition, there exists two implementations of "),t("code",[e._v("Codec")]),e._v(". The first being\n"),t("code",[e._v("AminoCodec")]),e._v(", where both binary and JSON serialization is handled via Amino. The\nsecond being "),t("code",[e._v("ProtoCodec")]),e._v(", where both binary and JSON serialization is handled\nvia Protobuf.")]),e._v(" "),t("p",[e._v("This means that modules may use Amino or Protobuf encoding, but the types must\nimplement "),t("code",[e._v("ProtoMarshaler")]),e._v(". If modules wish to avoid implementing this interface\nfor their types, they may use an Amino codec directly.")]),e._v(" "),t("h3",{attrs:{id:"amino"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#amino"}},[e._v("#")]),e._v(" Amino")]),e._v(" "),t("p",[e._v("Every module uses an Amino codec to serialize types and interfaces. This codec typically\nhas types and interfaces registered in that module's domain only (e.g. messages),\nbut there are exceptions like "),t("code",[e._v("x/gov")]),e._v(". Each module exposes a "),t("code",[e._v("RegisterLegacyAminoCodec")]),e._v(" function\nthat allows a user to provide a codec and have all the types registered. An application\nwill call this method for each necessary module.")]),e._v(" "),t("p",[e._v("Where there is no protobuf-based type definition for a module (see below), Amino\nis used to encode and decode raw wire bytes to the concrete type or interface:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"YnogOj0ga2VlcGVyLmNkYy5NdXN0TWFyc2hhbCh0eXBlT3JJbnRlcmZhY2UpCmtlZXBlci5jZGMuTXVzdFVubWFyc2hhbChieiwgJmFtcDt0eXBlT3JJbnRlcmZhY2UpCg=="}}),e._v(" "),t("p",[e._v("Note, there are length-prefixed variants of the above functionality and this is\ntypically used for when the data needs to be streamed or grouped together\n(e.g. "),t("code",[e._v("ResponseDeliverTx.Data")]),e._v(")")]),e._v(" "),t("h4",{attrs:{id:"authz-authorizations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#authz-authorizations"}},[e._v("#")]),e._v(" Authz authorizations")]),e._v(" "),t("p",[e._v("Since the "),t("code",[e._v("MsgExec")]),e._v(" message type can contain different messages instances, it is important that developers\nadd the following code inside the "),t("code",[e._v("init")]),e._v(" method of their module's "),t("code",[e._v("codec.go")]),e._v(" file:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aW1wb3J0IGF1dGh6Y29kZWMgJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay94L2F1dGh6L2NvZGVjJnF1b3Q7Cgppbml0KCkgewogICAgLy8gUmVnaXN0ZXIgYWxsIEFtaW5vIGludGVyZmFjZXMgYW5kIGNvbmNyZXRlIHR5cGVzIG9uIHRoZSBhdXRoeiBBbWlubyBjb2RlYyBzbyB0aGF0IHRoaXMgY2FuIGxhdGVyIGJlCiAgICAvLyB1c2VkIHRvIHByb3Blcmx5IHNlcmlhbGl6ZSBNc2dHcmFudCBhbmQgTXNnRXhlYyBpbnN0YW5jZXMKICAgIFJlZ2lzdGVyTGVnYWN5QW1pbm9Db2RlYyhhdXRoemNvZGVjLkFtaW5vKQp9Cg=="}}),e._v(" "),t("p",[e._v("This will allow the "),t("code",[e._v("x/authz")]),e._v(" module to properly serialize and de-serializes "),t("code",[e._v("MsgExec")]),e._v(" instances using Amino,\nwhich is required when signing this kind of messages using a Ledger.")]),e._v(" "),t("h3",{attrs:{id:"gogoproto"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gogoproto"}},[e._v("#")]),e._v(" Gogoproto")]),e._v(" "),t("p",[e._v("Modules are encouraged to utilize Protobuf encoding for their respective types. In the Cosmos SDK, we use the "),t("a",{attrs:{href:"https://github.com/gogo/protobuf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gogoproto"),t("OutboundLink")],1),e._v(" specific implementation of the Protobuf spec that offers speed and DX improvements compared to the official "),t("a",{attrs:{href:"https://github.com/protocolbuffers/protobuf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google protobuf implementation"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"guidelines-for-protobuf-message-definitions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#guidelines-for-protobuf-message-definitions"}},[e._v("#")]),e._v(" Guidelines for protobuf message definitions")]),e._v(" "),t("p",[e._v("In addition to "),t("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/proto3#simple",target:"_blank",rel:"noopener noreferrer"}},[e._v("following official Protocol Buffer guidelines"),t("OutboundLink")],1),e._v(", we recommend using these annotations in .proto files when dealing with interfaces:")]),e._v(" "),t("ul",[t("li",[e._v("use "),t("code",[e._v("cosmos_proto.accepts_interface")]),e._v(" to annote fields that accept interfaces")]),e._v(" "),t("li",[e._v("pass the same fully qualified name as "),t("code",[e._v("protoName")]),e._v(" to "),t("code",[e._v("InterfaceRegistry.RegisterInterface")])]),e._v(" "),t("li",[e._v("annotate interface implementations with "),t("code",[e._v("cosmos_proto.implements_interface")])]),e._v(" "),t("li",[e._v("pass the same fully qualified name as "),t("code",[e._v("protoName")]),e._v(" to "),t("code",[e._v("InterfaceRegistry.RegisterInterface")])])]),e._v(" "),t("h3",{attrs:{id:"transaction-encoding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#transaction-encoding"}},[e._v("#")]),e._v(" Transaction Encoding")]),e._v(" "),t("p",[e._v("Another important use of Protobuf is the encoding and decoding of\n"),t("RouterLink",{attrs:{to:"/core/transactions.html"}},[e._v("transactions")]),e._v(". Transactions are defined by the application or\nthe Cosmos SDK but are then passed to the underlying consensus engine to be relayed to\nother peers. Since the underlying consensus engine is agnostic to the application,\nthe consensus engine accepts only transactions in the form of raw bytes.")],1),e._v(" "),t("ul",[t("li",[e._v("The "),t("code",[e._v("TxEncoder")]),e._v(" object performs the encoding.")]),e._v(" "),t("li",[e._v("The "),t("code",[e._v("TxDecoder")]),e._v(" object performs the decoding.")])]),e._v(" "),t("p",[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gVHhEZWNvZGVyIHVubWFyc2hhbHMgdHJhbnNhY3Rpb24gYnl0ZXMKdHlwZSBUeERlY29kZXIgZnVuYyh0eEJ5dGVzIFtdYnl0ZSkgKFR4LCBlcnJvcikKCi8vIFR4RW5jb2RlciBtYXJzaGFscyB0cmFuc2FjdGlvbiB0byBieXRlcwp0eXBlIFR4RW5jb2RlciBmdW5jKHR4IFR4KSAoW11ieXRlLCBlcnJvcik="}})],1),e._v(" "),t("p",[e._v("A standard implementation of both these objects can be found in the "),t("RouterLink",{attrs:{to:"/x/auth/spec/"}},[t("code",[e._v("auth")]),e._v(" module")]),e._v(":")],1),e._v(" "),t("p",[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSB0eAoKaW1wb3J0ICgKCSZxdW90O2ZtdCZxdW90OwoKCSZxdW90O2dvb2dsZS5nb2xhbmcub3JnL3Byb3RvYnVmL2VuY29kaW5nL3Byb3Rvd2lyZSZxdW90OwoKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvY29kZWMmcXVvdDsKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvY29kZWMvdW5rbm93bnByb3RvJnF1b3Q7CglzZGsgJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcyZxdW90OwoJc2RrZXJyb3JzICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMvZXJyb3JzJnF1b3Q7CgkmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzL3R4JnF1b3Q7CikKCi8vIERlZmF1bHRUeERlY29kZXIgcmV0dXJucyBhIGRlZmF1bHQgcHJvdG9idWYgVHhEZWNvZGVyIHVzaW5nIHRoZSBwcm92aWRlZCBNYXJzaGFsZXIuCmZ1bmMgRGVmYXVsdFR4RGVjb2RlcihjZGMgY29kZWMuUHJvdG9Db2RlY01hcnNoYWxlcikgc2RrLlR4RGVjb2RlciB7CglyZXR1cm4gZnVuYyh0eEJ5dGVzIFtdYnl0ZSkgKHNkay5UeCwgZXJyb3IpIHsKCQkvLyBNYWtlIHN1cmUgdHhCeXRlcyBmb2xsb3cgQURSLTAyNy4KCQllcnIgOj0gcmVqZWN0Tm9uQURSMDI3VHhSYXcodHhCeXRlcykKCQlpZiBlcnIgIT0gbmlsIHsKCQkJcmV0dXJuIG5pbCwgc2RrZXJyb3JzLldyYXAoc2RrZXJyb3JzLkVyclR4RGVjb2RlLCBlcnIuRXJyb3IoKSkKCQl9CgoJCXZhciByYXcgdHguVHhSYXcKCgkJLy8gcmVqZWN0IGFsbCB1bmtub3duIHByb3RvIGZpZWxkcyBpbiB0aGUgcm9vdCBUeFJhdwoJCWVyciA9IHVua25vd25wcm90by5SZWplY3RVbmtub3duRmllbGRzU3RyaWN0KHR4Qnl0ZXMsICZhbXA7cmF3LCBjZGMuSW50ZXJmYWNlUmVnaXN0cnkoKSkKCQlpZiBlcnIgIT0gbmlsIHsKCQkJcmV0dXJuIG5pbCwgc2RrZXJyb3JzLldyYXAoc2RrZXJyb3JzLkVyclR4RGVjb2RlLCBlcnIuRXJyb3IoKSkKCQl9CgoJCWVyciA9IGNkYy5Vbm1hcnNoYWwodHhCeXRlcywgJmFtcDtyYXcpCgkJaWYgZXJyICE9IG5pbCB7CgkJCXJldHVybiBuaWwsIGVycgoJCX0KCgkJdmFyIGJvZHkgdHguVHhCb2R5CgoJCS8vIGFsbG93IG5vbi1jcml0aWNhbCB1bmtub3duIGZpZWxkcyBpbiBUeEJvZHkKCQl0eEJvZHlIYXNVbmtub3duTm9uQ3JpdGljYWxzLCBlcnIgOj0gdW5rbm93bnByb3RvLlJlamVjdFVua25vd25GaWVsZHMocmF3LkJvZHlCeXRlcywgJmFtcDtib2R5LCB0cnVlLCBjZGMuSW50ZXJmYWNlUmVnaXN0cnkoKSkKCQlpZiBlcnIgIT0gbmlsIHsKCQkJcmV0dXJuIG5pbCwgc2RrZXJyb3JzLldyYXAoc2RrZXJyb3JzLkVyclR4RGVjb2RlLCBlcnIuRXJyb3IoKSkKCQl9CgoJCWVyciA9IGNkYy5Vbm1hcnNoYWwocmF3LkJvZHlCeXRlcywgJmFtcDtib2R5KQoJCWlmIGVyciAhPSBuaWwgewoJCQlyZXR1cm4gbmlsLCBzZGtlcnJvcnMuV3JhcChzZGtlcnJvcnMuRXJyVHhEZWNvZGUsIGVyci5FcnJvcigpKQoJCX0KCgkJdmFyIGF1dGhJbmZvIHR4LkF1dGhJbmZvCgoJCS8vIHJlamVjdCBhbGwgdW5rbm93biBwcm90byBmaWVsZHMgaW4gQXV0aEluZm8KCQllcnIgPSB1bmtub3ducHJvdG8uUmVqZWN0VW5rbm93bkZpZWxkc1N0cmljdChyYXcuQXV0aEluZm9CeXRlcywgJmFtcDthdXRoSW5mbywgY2RjLkludGVyZmFjZVJlZ2lzdHJ5KCkpCgkJaWYgZXJyICE9IG5pbCB7CgkJCXJldHVybiBuaWwsIHNka2Vycm9ycy5XcmFwKHNka2Vycm9ycy5FcnJUeERlY29kZSwgZXJyLkVycm9yKCkpCgkJfQoKCQllcnIgPSBjZGMuVW5tYXJzaGFsKHJhdy5BdXRoSW5mb0J5dGVzLCAmYW1wO2F1dGhJbmZvKQoJCWlmIGVyciAhPSBuaWwgewoJCQlyZXR1cm4gbmlsLCBzZGtlcnJvcnMuV3JhcChzZGtlcnJvcnMuRXJyVHhEZWNvZGUsIGVyci5FcnJvcigpKQoJCX0KCgkJdGhlVHggOj0gJmFtcDt0eC5UeHsKCQkJQm9keTogICAgICAgJmFtcDtib2R5LAoJCQlBdXRoSW5mbzogICAmYW1wO2F1dGhJbmZvLAoJCQlTaWduYXR1cmVzOiByYXcuU2lnbmF0dXJlcywKCQl9CgoJCXJldHVybiAmYW1wO3dyYXBwZXJ7CgkJCXR4OiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZVR4LAoJCQlib2R5Qno6ICAgICAgICAgICAgICAgICAgICAgICByYXcuQm9keUJ5dGVzLAoJCQlhdXRoSW5mb0J6OiAgICAgICAgICAgICAgICAgICByYXcuQXV0aEluZm9CeXRlcywKCQkJdHhCb2R5SGFzVW5rbm93bk5vbkNyaXRpY2FsczogdHhCb2R5SGFzVW5rbm93bk5vbkNyaXRpY2FscywKCQl9LCBuaWwKCX0KfQoKLy8gRGVmYXVsdEpTT05UeERlY29kZXIgcmV0dXJucyBhIGRlZmF1bHQgcHJvdG9idWYgSlNPTiBUeERlY29kZXIgdXNpbmcgdGhlIHByb3ZpZGVkIE1hcnNoYWxlci4KZnVuYyBEZWZhdWx0SlNPTlR4RGVjb2RlcihjZGMgY29kZWMuUHJvdG9Db2RlY01hcnNoYWxlcikgc2RrLlR4RGVjb2RlciB7CglyZXR1cm4gZnVuYyh0eEJ5dGVzIFtdYnl0ZSkgKHNkay5UeCwgZXJyb3IpIHsKCQl2YXIgdGhlVHggdHguVHgKCQllcnIgOj0gY2RjLlVubWFyc2hhbEpTT04odHhCeXRlcywgJmFtcDt0aGVUeCkKCQlpZiBlcnIgIT0gbmlsIHsKCQkJcmV0dXJuIG5pbCwgc2RrZXJyb3JzLldyYXAoc2RrZXJyb3JzLkVyclR4RGVjb2RlLCBlcnIuRXJyb3IoKSkKCQl9CgoJCXJldHVybiAmYW1wO3dyYXBwZXJ7CgkJCXR4OiAmYW1wO3RoZVR4LAoJCX0sIG5pbAoJfQp9CgovLyByZWplY3ROb25BRFIwMjdUeFJhdyByZWplY3RzIHR4Qnl0ZXMgdGhhdCBkbyBub3QgZm9sbG93IEFEUi0wMjcuIFRoaXMgaXMgTk9UCi8vIGEgZ2VuZXJpYyBBRFItMDI3IGNoZWNrZXIsIGl0IG9ubHkgYXBwbGllcyBkZWNvZGluZyBUeFJhdy4gU3BlY2lmaWNhbGx5LCBpdAovLyBvbmx5IGNoZWNrcyB0aGF0OgovLyAtIGZpZWxkIG51bWJlcnMgYXJlIGluIGFzY2VuZGluZyBvcmRlciAoMSwgMiwgYW5kIHBvdGVudGlhbGx5IG11bHRpcGxlIDNzKSwKLy8gLSBhbmQgdmFyaW50cyBhcmUgYXMgc2hvcnQgYXMgcG9zc2libGUuCi8vIEFsbCBvdGhlciBBRFItMDI3IGVkZ2UgY2FzZXMgKGUuZy4gZGVmYXVsdCB2YWx1ZXMpIGFyZSBub3QgYXBwbGljYWJsZSB3aXRoCi8vIFR4UmF3LgpmdW5jIHJlamVjdE5vbkFEUjAyN1R4UmF3KHR4Qnl0ZXMgW11ieXRlKSBlcnJvciB7CgkvLyBNYWtlIHN1cmUgYWxsIGZpZWxkcyBhcmUgb3JkZXJlZCBpbiBhc2NlbmRpbmcgb3JkZXIgd2l0aCB0aGlzIHZhcmlhYmxlLgoJcHJldlRhZ051bSA6PSBwcm90b3dpcmUuTnVtYmVyKDApCgoJZm9yIGxlbih0eEJ5dGVzKSAmZ3Q7IDAgewoJCXRhZ051bSwgd2lyZVR5cGUsIG0gOj0gcHJvdG93aXJlLkNvbnN1bWVUYWcodHhCeXRlcykKCQlpZiBtICZsdDsgMCB7CgkJCXJldHVybiBmbXQuRXJyb3JmKCZxdW90O2ludmFsaWQgbGVuZ3RoOyAldyZxdW90OywgcHJvdG93aXJlLlBhcnNlRXJyb3IobSkpCgkJfQoJCS8vIFR4UmF3IG9ubHkgaGFzIGJ5dGVzIGZpZWxkcy4KCQlpZiB3aXJlVHlwZSAhPSBwcm90b3dpcmUuQnl0ZXNUeXBlIHsKCQkJcmV0dXJuIGZtdC5FcnJvcmYoJnF1b3Q7ZXhwZWN0ZWQgJWQgd2lyZSB0eXBlLCBnb3QgJWQmcXVvdDssIHByb3Rvd2lyZS5CeXRlc1R5cGUsIHdpcmVUeXBlKQoJCX0KCQkvLyBNYWtlIHN1cmUgZmllbGRzIGFyZSBvcmRlcmVkIGluIGFzY2VuZGluZyBvcmRlci4KCQlpZiB0YWdOdW0gJmx0OyBwcmV2VGFnTnVtIHsKCQkJcmV0dXJuIGZtdC5FcnJvcmYoJnF1b3Q7dHhSYXcgbXVzdCBmb2xsb3cgQURSLTAyNywgZ290IHRhZ051bSAlZCBhZnRlciB0YWdOdW0gJWQmcXVvdDssIHRhZ051bSwgcHJldlRhZ051bSkKCQl9CgkJcHJldlRhZ051bSA9IHRhZ051bQoKCQkvLyBBbGwgMyBmaWVsZHMgb2YgVHhSYXcgaGF2ZSB3aXJlVHlwZSA9PSAyLCBzbyB0aGVpciBuZXh0IGNvbXBvbmVudAoJCS8vIGlzIGEgdmFyaW50LCBzbyB3ZSBjYW4gc2FmZWx5IGNhbGwgQ29uc3VtZVZhcmludCBoZXJlLgoJCS8vIEJ5dGUgc3RydWN0dXJlOiAmbHQ7dmFyaW50IG9mIGJ5dGVzIGxlbmd0aCZndDsmbHQ7Ynl0ZXMgc2VxdWVuY2UmZ3Q7CgkJLy8gSW5uZXIgIGZpZWxkcyBhcmUgdmVyaWZpZWQgaW4gYERlZmF1bHRUeERlY29kZXJgCgkJbGVuZ3RoUHJlZml4LCBtIDo9IHByb3Rvd2lyZS5Db25zdW1lVmFyaW50KHR4Qnl0ZXNbbTpdKQoJCWlmIG0gJmx0OyAwIHsKCQkJcmV0dXJuIGZtdC5FcnJvcmYoJnF1b3Q7aW52YWxpZCBsZW5ndGg7ICV3JnF1b3Q7LCBwcm90b3dpcmUuUGFyc2VFcnJvcihtKSkKCQl9CgkJLy8gV2UgbWFrZSBzdXJlIHRoYXQgdGhpcyB2YXJpbnQgaXMgYXMgc2hvcnQgYXMgcG9zc2libGUuCgkJbiA6PSB2YXJpbnRNaW5MZW5ndGgobGVuZ3RoUHJlZml4KQoJCWlmIG4gIT0gbSB7CgkJCXJldHVybiBmbXQuRXJyb3JmKCZxdW90O2xlbmd0aCBwcmVmaXggdmFyaW50IGZvciB0YWdOdW0gJWQgaXMgbm90IGFzIHNob3J0IGFzIHBvc3NpYmxlLCByZWFkICVkLCBvbmx5IG5lZWQgJWQmcXVvdDssIHRhZ051bSwgbSwgbikKCQl9CgoJCS8vIFNraXAgb3ZlciB0aGUgYnl0ZXMgdGhhdCBzdG9yZSBmaWVsZE51bWJlciBhbmQgd2lyZVR5cGUgYnl0ZXMuCgkJXywgXywgbSA9IHByb3Rvd2lyZS5Db25zdW1lRmllbGQodHhCeXRlcykKCQlpZiBtICZsdDsgMCB7CgkJCXJldHVybiBmbXQuRXJyb3JmKCZxdW90O2ludmFsaWQgbGVuZ3RoOyAldyZxdW90OywgcHJvdG93aXJlLlBhcnNlRXJyb3IobSkpCgkJfQoJCXR4Qnl0ZXMgPSB0eEJ5dGVzW206XQoJfQoKCXJldHVybiBuaWwKfQoKLy8gdmFyaW50TWluTGVuZ3RoIHJldHVybnMgdGhlIG1pbmltdW0gbnVtYmVyIG9mIGJ5dGVzIG5lY2Vzc2FyeSB0byBlbmNvZGUgYW4KLy8gdWludCB1c2luZyB2YXJpbnQgZW5jb2RpbmcuCmZ1bmMgdmFyaW50TWluTGVuZ3RoKG4gdWludDY0KSBpbnQgewoJc3dpdGNoIHsKCS8vIE5vdGU6IDEmbHQ7Jmx0O04gPT0gMioqTi4KCWNhc2UgbiAmbHQ7IDEmbHQ7Jmx0Oyg3KToKCQlyZXR1cm4gMQoJY2FzZSBuICZsdDsgMSZsdDsmbHQ7KDcqMik6CgkJcmV0dXJuIDIKCWNhc2UgbiAmbHQ7IDEmbHQ7Jmx0Oyg3KjMpOgoJCXJldHVybiAzCgljYXNlIG4gJmx0OyAxJmx0OyZsdDsoNyo0KToKCQlyZXR1cm4gNAoJY2FzZSBuICZsdDsgMSZsdDsmbHQ7KDcqNSk6CgkJcmV0dXJuIDUKCWNhc2UgbiAmbHQ7IDEmbHQ7Jmx0Oyg3KjYpOgoJCXJldHVybiA2CgljYXNlIG4gJmx0OyAxJmx0OyZsdDsoNyo3KToKCQlyZXR1cm4gNwoJY2FzZSBuICZsdDsgMSZsdDsmbHQ7KDcqOCk6CgkJcmV0dXJuIDgKCWNhc2UgbiAmbHQ7IDEmbHQ7Jmx0Oyg3KjkpOgoJCXJldHVybiA5CglkZWZhdWx0OgoJCXJldHVybiAxMAoJfQp9Cg=="}})],1),e._v(" "),t("p",[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSB0eAoKaW1wb3J0ICgKCSZxdW90O2ZtdCZxdW90OwoKCSZxdW90O2dpdGh1Yi5jb20vZ29nby9wcm90b2J1Zi9wcm90byZxdW90OwoKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvY29kZWMmcXVvdDsKCXNkayAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzJnF1b3Q7Cgl0eHR5cGVzICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMvdHgmcXVvdDsKKQoKLy8gRGVmYXVsdFR4RW5jb2RlciByZXR1cm5zIGEgZGVmYXVsdCBwcm90b2J1ZiBUeEVuY29kZXIgdXNpbmcgdGhlIHByb3ZpZGVkIE1hcnNoYWxlcgpmdW5jIERlZmF1bHRUeEVuY29kZXIoKSBzZGsuVHhFbmNvZGVyIHsKCXJldHVybiBmdW5jKHR4IHNkay5UeCkgKFtdYnl0ZSwgZXJyb3IpIHsKCQl0eFdyYXBwZXIsIG9rIDo9IHR4Ligqd3JhcHBlcikKCQlpZiAhb2sgewoJCQlyZXR1cm4gbmlsLCBmbXQuRXJyb3JmKCZxdW90O2V4cGVjdGVkICVULCBnb3QgJVQmcXVvdDssICZhbXA7d3JhcHBlcnt9LCB0eCkKCQl9CgoJCXJhdyA6PSAmYW1wO3R4dHlwZXMuVHhSYXd7CgkJCUJvZHlCeXRlczogICAgIHR4V3JhcHBlci5nZXRCb2R5Qnl0ZXMoKSwKCQkJQXV0aEluZm9CeXRlczogdHhXcmFwcGVyLmdldEF1dGhJbmZvQnl0ZXMoKSwKCQkJU2lnbmF0dXJlczogICAgdHhXcmFwcGVyLnR4LlNpZ25hdHVyZXMsCgkJfQoKCQlyZXR1cm4gcHJvdG8uTWFyc2hhbChyYXcpCgl9Cn0KCi8vIERlZmF1bHRKU09OVHhFbmNvZGVyIHJldHVybnMgYSBkZWZhdWx0IHByb3RvYnVmIEpTT04gVHhFbmNvZGVyIHVzaW5nIHRoZSBwcm92aWRlZCBNYXJzaGFsZXIuCmZ1bmMgRGVmYXVsdEpTT05UeEVuY29kZXIoY2RjIGNvZGVjLlByb3RvQ29kZWNNYXJzaGFsZXIpIHNkay5UeEVuY29kZXIgewoJcmV0dXJuIGZ1bmModHggc2RrLlR4KSAoW11ieXRlLCBlcnJvcikgewoJCXR4V3JhcHBlciwgb2sgOj0gdHguKCp3cmFwcGVyKQoJCWlmIG9rIHsKCQkJcmV0dXJuIGNkYy5NYXJzaGFsSlNPTih0eFdyYXBwZXIudHgpCgkJfQoKCQlwcm90b1R4LCBvayA6PSB0eC4oKnR4dHlwZXMuVHgpCgkJaWYgb2sgewoJCQlyZXR1cm4gY2RjLk1hcnNoYWxKU09OKHByb3RvVHgpCgkJfQoKCQlyZXR1cm4gbmlsLCBmbXQuRXJyb3JmKCZxdW90O2V4cGVjdGVkICVULCBnb3QgJVQmcXVvdDssICZhbXA7d3JhcHBlcnt9LCB0eCkKCX0KfQo="}})],1),e._v(" "),t("p",[e._v("See "),t("RouterLink",{attrs:{to:"/architecture/adr-020-protobuf-transaction-encoding.html"}},[e._v("ADR-020")]),e._v(" for details of how a transaction is encoded.")],1),e._v(" "),t("h3",{attrs:{id:"interface-encoding-and-usage-of-any"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#interface-encoding-and-usage-of-any"}},[e._v("#")]),e._v(" Interface Encoding and Usage of "),t("code",[e._v("Any")])]),e._v(" "),t("p",[e._v("The Protobuf DSL is strongly typed, which can make inserting variable-typed fields difficult. Imagine we want to create a "),t("code",[e._v("Profile")]),e._v(" protobuf message that serves as a wrapper over "),t("RouterLink",{attrs:{to:"/basics/accounts.html"}},[e._v("an account")]),e._v(":")],1),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"bWVzc2FnZSBQcm9maWxlIHsKICAvLyBhY2NvdW50IGlzIHRoZSBhY2NvdW50IGFzc29jaWF0ZWQgdG8gYSBwcm9maWxlLgogIGNvc21vcy5hdXRoLnYxYmV0YTEuQmFzZUFjY291bnQgYWNjb3VudCA9IDE7CiAgLy8gYmlvIGlzIGEgc2hvcnQgZGVzY3JpcHRpb24gb2YgdGhlIGFjY291bnQuCiAgc3RyaW5nIGJpbyA9IDQ7Cn0K"}}),e._v(" "),t("p",[e._v("In this "),t("code",[e._v("Profile")]),e._v(" example, we hardcoded "),t("code",[e._v("account")]),e._v(" as a "),t("code",[e._v("BaseAccount")]),e._v(". However, there are several other types of "),t("RouterLink",{attrs:{to:"/x/auth/spec/05_vesting.html"}},[e._v("user accounts related to vesting")]),e._v(", such as "),t("code",[e._v("BaseVestingAccount")]),e._v(" or "),t("code",[e._v("ContinuousVestingAccount")]),e._v(". All of these accounts are different, but they all implement the "),t("code",[e._v("AccountI")]),e._v(" interface. How would you create a "),t("code",[e._v("Profile")]),e._v(" that allows all these types of accounts with an "),t("code",[e._v("account")]),e._v(" field that accepts an "),t("code",[e._v("AccountI")]),e._v(" interface?")],1),e._v(" "),t("p",[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQWNjb3VudEkgaXMgYW4gaW50ZXJmYWNlIHVzZWQgdG8gc3RvcmUgY29pbnMgYXQgYSBnaXZlbiBhZGRyZXNzIHdpdGhpbiBzdGF0ZS4KLy8gSXQgcHJlc3VtZXMgYSBub3Rpb24gb2Ygc2VxdWVuY2UgbnVtYmVycyBmb3IgcmVwbGF5IHByb3RlY3Rpb24sCi8vIGEgbm90aW9uIG9mIGFjY291bnQgbnVtYmVycyBmb3IgcmVwbGF5IHByb3RlY3Rpb24gZm9yIHByZXZpb3VzbHkgcHJ1bmVkIGFjY291bnRzLAovLyBhbmQgYSBwdWJrZXkgZm9yIGF1dGhlbnRpY2F0aW9uIHB1cnBvc2VzLgovLwovLyBNYW55IGNvbXBsZXggY29uZGl0aW9ucyBjYW4gYmUgdXNlZCBpbiB0aGUgY29uY3JldGUgc3RydWN0IHdoaWNoIGltcGxlbWVudHMgQWNjb3VudEkuCnR5cGUgQWNjb3VudEkgaW50ZXJmYWNlIHsKCXByb3RvLk1lc3NhZ2UKCglHZXRBZGRyZXNzKCkgc2RrLkFjY0FkZHJlc3MKCVNldEFkZHJlc3Moc2RrLkFjY0FkZHJlc3MpIGVycm9yIC8vIGVycm9ycyBpZiBhbHJlYWR5IHNldC4KCglHZXRQdWJLZXkoKSBjcnlwdG90eXBlcy5QdWJLZXkgLy8gY2FuIHJldHVybiBuaWwuCglTZXRQdWJLZXkoY3J5cHRvdHlwZXMuUHViS2V5KSBlcnJvcgoKCUdldEFjY291bnROdW1iZXIoKSB1aW50NjQKCVNldEFjY291bnROdW1iZXIodWludDY0KSBlcnJvcgoKCUdldFNlcXVlbmNlKCkgdWludDY0CglTZXRTZXF1ZW5jZSh1aW50NjQpIGVycm9yCgoJLy8gRW5zdXJlIHRoYXQgYWNjb3VudCBpbXBsZW1lbnRzIHN0cmluZ2VyCglTdHJpbmcoKSBzdHJpbmcKfQ=="}})],1),e._v(" "),t("p",[e._v("In "),t("RouterLink",{attrs:{to:"/architecture/adr-019-protobuf-state-encoding.html"}},[e._v("ADR-019")]),e._v(", it has been decided to use "),t("a",{attrs:{href:"https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/any.proto",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("Any")]),t("OutboundLink")],1),e._v("s to encode interfaces in protobuf. An "),t("code",[e._v("Any")]),e._v(" contains an arbitrary serialized message as bytes, along with a URL that acts as a globally unique identifier for and resolves to that message's type. This strategy allows us to pack arbitrary Go types inside protobuf messages. Our new "),t("code",[e._v("Profile")]),e._v(" then looks like:")],1),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"bWVzc2FnZSBQcm9maWxlIHsKICAvLyBhY2NvdW50IGlzIHRoZSBhY2NvdW50IGFzc29jaWF0ZWQgdG8gYSBwcm9maWxlLgogIGdvb2dsZS5wcm90b2J1Zi5BbnkgYWNjb3VudCA9IDEgWwogICAgKGNvc21vc19wcm90by5hY2NlcHRzX2ludGVyZmFjZSkgPSAmcXVvdDtBY2NvdW50SSZxdW90OzsgLy8gQXNzZXJ0cyB0aGF0IHRoaXMgZmllbGQgb25seSBhY2NlcHRzIEdvIHR5cGVzIGltcGxlbWVudGluZyBgQWNjb3VudElgLiBJdCBpcyBwdXJlbHkgaW5mb3JtYXRpb25hbCBmb3Igbm93LgogIF07CiAgLy8gYmlvIGlzIGEgc2hvcnQgZGVzY3JpcHRpb24gb2YgdGhlIGFjY291bnQuCiAgc3RyaW5nIGJpbyA9IDQ7Cn0K"}}),e._v(" "),t("p",[e._v('To add an account inside a profile, we need to "pack" it inside an '),t("code",[e._v("Any")]),e._v(" first, using "),t("code",[e._v("codectypes.NewAnyWithValue")]),e._v(":")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dmFyIG15QWNjb3VudCBBY2NvdW50SQpteUFjY291bnQgPSAuLi4gLy8gQ2FuIGJlIGEgQmFzZUFjY291bnQsIGEgQ29udGludW91c1Zlc3RpbmdBY2NvdW50IG9yIGFueSBzdHJ1Y3QgaW1wbGVtZW50aW5nIGBBY2NvdW50SWAKCi8vIFBhY2sgdGhlIGFjY291bnQgaW50byBhbiBBbnkKYWNjQW55LCBlcnIgOj0gY29kZWN0eXBlcy5OZXdBbnlXaXRoVmFsdWUobXlBY2NvdW50KQppZiBlcnIgIT0gbmlsIHsKICByZXR1cm4gbmlsLCBlcnIKfQoKLy8gQ3JlYXRlIGEgbmV3IFByb2ZpbGUgd2l0aCB0aGUgYW55Lgpwcm9maWxlIDo9IFByb2ZpbGUgewogIEFjY291bnQ6IGFjY0FueSwKICBCaW86ICZxdW90O3NvbWUgYmlvJnF1b3Q7LAp9CgovLyBXZSBjYW4gdGhlbiBtYXJzaGFsIHRoZSBwcm9maWxlIGFzIHVzdWFsLgpieiwgZXJyIDo9IGNkYy5NYXJzaGFsKHByb2ZpbGUpCmpzb25CeiwgZXJyIDo9IGNkYy5NYXJzaGFsSlNPTihwcm9maWxlKQo="}}),e._v(" "),t("p",[e._v("To summarize, to encode an interface, you must 1/ pack the interface into an "),t("code",[e._v("Any")]),e._v(" and 2/ marshal the "),t("code",[e._v("Any")]),e._v(". For convenience, the Cosmos SDK provides a "),t("code",[e._v("MarshalInterface")]),e._v(" method to bundle these two steps. Have a look at "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.46.0-rc1/x/auth/keeper/keeper.go#L230-L233",target:"_blank",rel:"noopener noreferrer"}},[e._v("a real-life example in the x/auth module"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("The reverse operation of retrieving the concrete Go type from inside an "),t("code",[e._v("Any")]),e._v(', called "unpacking", is done with the '),t("code",[e._v("GetCachedValue()")]),e._v(" on "),t("code",[e._v("Any")]),e._v(".")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cHJvZmlsZUJ6IDo9IC4uLiAvLyBUaGUgcHJvdG8tZW5jb2RlZCBieXRlcyBvZiBhIFByb2ZpbGUsIGUuZy4gcmV0cmlldmVkIHRocm91Z2ggZ1JQQy4KdmFyIG15UHJvZmlsZSBQcm9maWxlCi8vIFVubWFyc2hhbCB0aGUgYnl0ZXMgaW50byB0aGUgbXlQcm9maWxlIHN0cnVjdC4KZXJyIDo9IGNkYy5Vbm1hcnNoYWwocHJvZmlsZWJ6LCAmYW1wO215UHJvZmlsZSkKCi8vIExldCdzIHNlZSB0aGUgdHlwZXMgb2YgdGhlIEFjY291bnQgZmllbGQuCmZtdC5QcmludGYoJnF1b3Q7JVRcbiZxdW90OywgbXlQcm9maWxlLkFjY291bnQpICAgICAgICAgICAgICAgICAgLy8gUHJpbnRzICZxdW90O0FueSZxdW90OwpmbXQuUHJpbnRmKCZxdW90OyVUXG4mcXVvdDssIG15UHJvZmlsZS5BY2NvdW50LkdldENhY2hlZFZhbHVlKCkpIC8vIFByaW50cyAmcXVvdDtCYXNlQWNjb3VudCZxdW90OywgJnF1b3Q7Q29udGludW91c1Zlc3RpbmdBY2NvdW50JnF1b3Q7IG9yIHdoYXRldmVyIHdhcyBpbml0aWFsbHkgcGFja2VkIGluIHRoZSBBbnkuCgovLyBHZXQgdGhlIGFkZHJlc3Mgb2YgdGhlIGFjY291bnR0LgphY2NBZGRyIDo9IG15UHJvZmlsZS5BY2NvdW50LkdldENhY2hlZFZhbHVlKCkuKEFjY291bnRJKS5HZXRBZGRyZXNzKCkK"}}),e._v(" "),t("p",[e._v("It is important to note that for "),t("code",[e._v("GetCachedValue()")]),e._v(" to work, "),t("code",[e._v("Profile")]),e._v(" (and any other structs embedding "),t("code",[e._v("Profile")]),e._v(") must implement the "),t("code",[e._v("UnpackInterfaces")]),e._v(" method:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAocCAqUHJvZmlsZSkgVW5wYWNrSW50ZXJmYWNlcyh1bnBhY2tlciBjb2RlY3R5cGVzLkFueVVucGFja2VyKSBlcnJvciB7CiAgaWYgcC5BY2NvdW50ICE9IG5pbCB7CiAgICB2YXIgYWNjb3VudCBBY2NvdW50SQogICAgcmV0dXJuIHVucGFja2VyLlVucGFja0FueShwLkFjY291bnQsICZhbXA7YWNjb3VudCkKICB9CgogIHJldHVybiBuaWwKfQo="}}),e._v(" "),t("p",[e._v("The "),t("code",[e._v("UnpackInterfaces")]),e._v(" gets called recursively on all structs implementing this method, to allow all "),t("code",[e._v("Any")]),e._v("s to have their "),t("code",[e._v("GetCachedValue()")]),e._v(" correctly populated.")]),e._v(" "),t("p",[e._v("For more information about interface encoding, and especially on "),t("code",[e._v("UnpackInterfaces")]),e._v(" and how the "),t("code",[e._v("Any")]),e._v("'s "),t("code",[e._v("type_url")]),e._v(" gets resolved using the "),t("code",[e._v("InterfaceRegistry")]),e._v(", please refer to "),t("RouterLink",{attrs:{to:"/architecture/adr-019-protobuf-state-encoding.html"}},[e._v("ADR-019")]),e._v(".")],1),e._v(" "),t("h4",{attrs:{id:"any-encoding-in-the-cosmos-sdk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#any-encoding-in-the-cosmos-sdk"}},[e._v("#")]),e._v(" "),t("code",[e._v("Any")]),e._v(" Encoding in the Cosmos SDK")]),e._v(" "),t("p",[e._v("The above "),t("code",[e._v("Profile")]),e._v(" example is a fictive example used for educational purposes. In the Cosmos SDK, we use "),t("code",[e._v("Any")]),e._v(" encoding in several places (non-exhaustive list):")]),e._v(" "),t("ul",[t("li",[e._v("the "),t("code",[e._v("cryptotypes.PubKey")]),e._v(" interface for encoding different types of public keys,")]),e._v(" "),t("li",[e._v("the "),t("code",[e._v("sdk.Msg")]),e._v(" interface for encoding different "),t("code",[e._v("Msg")]),e._v("s in a transaction,")]),e._v(" "),t("li",[e._v("the "),t("code",[e._v("AccountI")]),e._v(" interface for encodinig different types of accounts (similar to the above example) in the x/auth query responses,")]),e._v(" "),t("li",[e._v("the "),t("code",[e._v("Evidencei")]),e._v(" interface for encoding different types of evidences in the x/evidence module,")]),e._v(" "),t("li",[e._v("the "),t("code",[e._v("AuthorizationI")]),e._v(" interface for encoding different types of x/authz authorizations,")]),e._v(" "),t("li",[e._v("the "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.46.0-rc1/x/staking/types/staking.pb.go#L306-L339",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("Validator")]),t("OutboundLink")],1),e._v(" struct that contains information about a validator.")])]),e._v(" "),t("p",[e._v("A real-life example of encoding the pubkey as "),t("code",[e._v("Any")]),e._v(" inside the Validator struct in x/staking is shown in the following example:")]),e._v(" "),t("p",[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gTmV3VmFsaWRhdG9yIGNvbnN0cnVjdHMgYSBuZXcgVmFsaWRhdG9yCi8vbm9saW50OmludGVyZmFjZXIKZnVuYyBOZXdWYWxpZGF0b3Iob3BlcmF0b3Igc2RrLlZhbEFkZHJlc3MsIHB1YktleSBjcnlwdG90eXBlcy5QdWJLZXksIGRlc2NyaXB0aW9uIERlc2NyaXB0aW9uKSAoVmFsaWRhdG9yLCBlcnJvcikgewoJcGtBbnksIGVyciA6PSBjb2RlY3R5cGVzLk5ld0FueVdpdGhWYWx1ZShwdWJLZXkpCglpZiBlcnIgIT0gbmlsIHsKCQlyZXR1cm4gVmFsaWRhdG9ye30sIGVycgoJfQoKCXJldHVybiBWYWxpZGF0b3J7CgkJT3BlcmF0b3JBZGRyZXNzOiAgIG9wZXJhdG9yLlN0cmluZygpLAoJCUNvbnNlbnN1c1B1YmtleTogICBwa0FueSwKCQlKYWlsZWQ6ICAgICAgICAgICAgZmFsc2UsCgkJU3RhdHVzOiAgICAgICAgICAgIFVuYm9uZGVkLAoJCVRva2VuczogICAgICAgICAgICBzZGsuWmVyb0ludCgpLAoJCURlbGVnYXRvclNoYXJlczogICBzZGsuWmVyb0RlYygpLAoJCURlc2NyaXB0aW9uOiAgICAgICBkZXNjcmlwdGlvbiwKCQlVbmJvbmRpbmdIZWlnaHQ6ICAgaW50NjQoMCksCgkJVW5ib25kaW5nVGltZTogICAgIHRpbWUuVW5peCgwLCAwKS5VVEMoKSwKCQlDb21taXNzaW9uOiAgICAgICAgTmV3Q29tbWlzc2lvbihzZGsuWmVyb0RlYygpLCBzZGsuWmVyb0RlYygpLCBzZGsuWmVyb0RlYygpKSwKCQlNaW5TZWxmRGVsZWdhdGlvbjogc2RrLk9uZUludCgpLAoJfSwgbmlsCn0="}})],1),e._v(" "),t("h2",{attrs:{id:"faq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),t("h3",{attrs:{id:"how-to-create-modules-using-protobuf-encoding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-create-modules-using-protobuf-encoding"}},[e._v("#")]),e._v(" How to create modules using protobuf encoding")]),e._v(" "),t("h4",{attrs:{id:"defining-module-types"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#defining-module-types"}},[e._v("#")]),e._v(" Defining module types")]),e._v(" "),t("p",[e._v("Protobuf types can be defined to encode:")]),e._v(" "),t("ul",[t("li",[e._v("state")]),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#messages"}},[t("code",[e._v("Msg")]),e._v("s")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/building-modules/query-services.html"}},[e._v("Query services")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/building-modules/genesis.html"}},[e._v("genesis")])],1)]),e._v(" "),t("h4",{attrs:{id:"naming-and-conventions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#naming-and-conventions"}},[e._v("#")]),e._v(" Naming and conventions")]),e._v(" "),t("p",[e._v("We encourage developers to follow industry guidelines: "),t("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/style",target:"_blank",rel:"noopener noreferrer"}},[e._v("Protocol Buffers style guide"),t("OutboundLink")],1),e._v("\nand "),t("a",{attrs:{href:"https://buf.build/docs/style-guide",target:"_blank",rel:"noopener noreferrer"}},[e._v("Buf"),t("OutboundLink")],1),e._v(", see more details in "),t("RouterLink",{attrs:{to:"/architecture/adr-023-protobuf-naming.html"}},[e._v("ADR 023")])],1),e._v(" "),t("h3",{attrs:{id:"how-to-update-modules-to-protobuf-encoding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-update-modules-to-protobuf-encoding"}},[e._v("#")]),e._v(" How to update modules to protobuf encoding")]),e._v(" "),t("p",[e._v("If modules do not contain any interfaces (e.g. "),t("code",[e._v("Account")]),e._v(" or "),t("code",[e._v("Content")]),e._v("), then they\nmay simply migrate any existing types that\nare encoded and persisted via their concrete Amino codec to Protobuf (see 1. for further guidelines) and accept a "),t("code",[e._v("Marshaler")]),e._v(" as the codec which is implemented via the "),t("code",[e._v("ProtoCodec")]),e._v("\nwithout any further customization.")]),e._v(" "),t("p",[e._v("However, if a module type composes an interface, it must wrap it in the "),t("code",[e._v("sdk.Any")]),e._v(" (from "),t("code",[e._v("/types")]),e._v(" package) type. To do that, a module-level .proto file must use "),t("a",{attrs:{href:"https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/any.proto",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("google.protobuf.Any")]),t("OutboundLink")],1),e._v(" for respective message type interface types.")]),e._v(" "),t("p",[e._v("For example, in the "),t("code",[e._v("x/evidence")]),e._v(" module defines an "),t("code",[e._v("Evidence")]),e._v(" interface, which is used by the "),t("code",[e._v("MsgSubmitEvidence")]),e._v(". The structure definition must use "),t("code",[e._v("sdk.Any")]),e._v(" to wrap the evidence file. In the proto file we define it as follows:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"Ly8gcHJvdG8vY29zbW9zL2V2aWRlbmNlL3YxYmV0YTEvdHgucHJvdG8KCm1lc3NhZ2UgTXNnU3VibWl0RXZpZGVuY2UgewogIHN0cmluZyAgICAgICAgICAgICAgc3VibWl0dGVyID0gMTsKICBnb29nbGUucHJvdG9idWYuQW55IGV2aWRlbmNlICA9IDIgWyhjb3Ntb3NfcHJvdG8uYWNjZXB0c19pbnRlcmZhY2UpID0gJnF1b3Q7RXZpZGVuY2UmcXVvdDtdOwp9Cg=="}}),e._v(" "),t("p",[e._v("The Cosmos SDK "),t("code",[e._v("codec.Codec")]),e._v(" interface provides support methods "),t("code",[e._v("MarshalInterface")]),e._v(" and "),t("code",[e._v("UnmarshalInterface")]),e._v(" to easy encoding of state to "),t("code",[e._v("Any")]),e._v(".")]),e._v(" "),t("p",[e._v("Module should register interfaces using "),t("code",[e._v("InterfaceRegistry")]),e._v(" which provides a mechanism for registering interfaces: "),t("code",[e._v("RegisterInterface(protoName string, iface interface{}, impls ...proto.Message)")]),e._v(" and implementations: "),t("code",[e._v("RegisterImplementations(iface interface{}, impls ...proto.Message)")]),e._v(" that can be safely unpacked from Any, similarly to type registration with Amino:")]),e._v(" "),t("p",[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gSW50ZXJmYWNlUmVnaXN0cnkgcHJvdmlkZXMgYSBtZWNoYW5pc20gZm9yIHJlZ2lzdGVyaW5nIGludGVyZmFjZXMgYW5kCi8vIGltcGxlbWVudGF0aW9ucyB0aGF0IGNhbiBiZSBzYWZlbHkgdW5wYWNrZWQgZnJvbSBBbnkKdHlwZSBJbnRlcmZhY2VSZWdpc3RyeSBpbnRlcmZhY2UgewoJQW55VW5wYWNrZXIKCWpzb25wYi5BbnlSZXNvbHZlcgoKCS8vIFJlZ2lzdGVySW50ZXJmYWNlIGFzc29jaWF0ZXMgcHJvdG9OYW1lIGFzIHRoZSBwdWJsaWMgbmFtZSBmb3IgdGhlCgkvLyBpbnRlcmZhY2UgcGFzc2VkIGluIGFzIGlmYWNlLiBUaGlzIGlzIHRvIGJlIHVzZWQgcHJpbWFyaWx5IHRvIGNyZWF0ZQoJLy8gYSBwdWJsaWMgZmFjaW5nIHJlZ2lzdHJ5IG9mIGludGVyZmFjZSBpbXBsZW1lbnRhdGlvbnMgZm9yIGNsaWVudHMuCgkvLyBwcm90b05hbWUgc2hvdWxkIGJlIGEgd2VsbC1jaG9zZW4gcHVibGljIGZhY2luZyBuYW1lIHRoYXQgcmVtYWlucyBzdGFibGUuCgkvLyBSZWdpc3RlckludGVyZmFjZSB0YWtlcyBhbiBvcHRpb25hbCBsaXN0IG9mIGltcGxzIHRvIGJlIHJlZ2lzdGVyZWQKCS8vIGFzIGltcGxlbWVudGF0aW9ucyBvZiBpZmFjZS4KCS8vCgkvLyBFeDoKCS8vICAgcmVnaXN0cnkuUmVnaXN0ZXJJbnRlcmZhY2UoJnF1b3Q7Y29zbW9zLmJhc2UudjFiZXRhMS5Nc2cmcXVvdDssICgqc2RrLk1zZykobmlsKSkKCVJlZ2lzdGVySW50ZXJmYWNlKHByb3RvTmFtZSBzdHJpbmcsIGlmYWNlIGludGVyZmFjZXt9LCBpbXBscyAuLi5wcm90by5NZXNzYWdlKQoKCS8vIFJlZ2lzdGVySW1wbGVtZW50YXRpb25zIHJlZ2lzdGVycyBpbXBscyBhcyBjb25jcmV0ZSBpbXBsZW1lbnRhdGlvbnMgb2YKCS8vIHRoZSBpbnRlcmZhY2UgaWZhY2UuCgkvLwoJLy8gRXg6CgkvLyAgcmVnaXN0cnkuUmVnaXN0ZXJJbXBsZW1lbnRhdGlvbnMoKCpzZGsuTXNnKShuaWwpLCAmYW1wO01zZ1NlbmR7fSwgJmFtcDtNc2dNdWx0aVNlbmR7fSkKCVJlZ2lzdGVySW1wbGVtZW50YXRpb25zKGlmYWNlIGludGVyZmFjZXt9LCBpbXBscyAuLi5wcm90by5NZXNzYWdlKQoKCS8vIExpc3RBbGxJbnRlcmZhY2VzIGxpc3QgdGhlIHR5cGUgVVJMcyBvZiBhbGwgcmVnaXN0ZXJlZCBpbnRlcmZhY2VzLgoJTGlzdEFsbEludGVyZmFjZXMoKSBbXXN0cmluZwoKCS8vIExpc3RJbXBsZW1lbnRhdGlvbnMgbGlzdHMgdGhlIHZhbGlkIHR5cGUgVVJMcyBmb3IgdGhlIGdpdmVuIGludGVyZmFjZSBuYW1lIHRoYXQgY2FuIGJlIHVzZWQKCS8vIGZvciB0aGUgcHJvdmlkZWQgaW50ZXJmYWNlIHR5cGUgVVJMLgoJTGlzdEltcGxlbWVudGF0aW9ucyhpZmFjZVR5cGVVUkwgc3RyaW5nKSBbXXN0cmluZwp9"}})],1),e._v(" "),t("p",[e._v("In addition, an "),t("code",[e._v("UnpackInterfaces")]),e._v(" phase should be introduced to deserialization to unpack interfaces before they're needed. Protobuf types that contain a protobuf "),t("code",[e._v("Any")]),e._v(" either directly or via one of their members should implement the "),t("code",[e._v("UnpackInterfacesMessage")]),e._v(" interface:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBVbnBhY2tJbnRlcmZhY2VzTWVzc2FnZSBpbnRlcmZhY2UgewogIFVucGFja0ludGVyZmFjZXMoSW50ZXJmYWNlVW5wYWNrZXIpIGVycm9yCn0K"}}),e._v(" "),t("h2",{attrs:{hide:"",id:"next"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),t("p",{attrs:{hide:""}},[e._v("Learn about "),t("RouterLink",{attrs:{to:"/core/grpc_rest.html"}},[e._v("gRPC, REST and other endpoints")])],1)],1)}),[],!1,null,null,null);o.default=n.exports}}]);