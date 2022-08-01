(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{727:function(e,s,t){"use strict";t.r(s);var a=t(1),o=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"state"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[e._v("#")]),e._v(" State")]),e._v(" "),t("h2",{attrs:{id:"messages-queue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#messages-queue"}},[e._v("#")]),e._v(" Messages queue")]),e._v(" "),t("p",[e._v("Messages are queued to run at the end of each epoch. Queued messages have an epoch number and for each epoch number, the queues are iterated over and each message is executed.")]),e._v(" "),t("h3",{attrs:{id:"message-queues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#message-queues"}},[e._v("#")]),e._v(" Message queues")]),e._v(" "),t("p",[e._v("Each module has one unique message queue that is specific to that module.")]),e._v(" "),t("h2",{attrs:{id:"actions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#actions"}},[e._v("#")]),e._v(" Actions")]),e._v(" "),t("p",[e._v("A module will add a message that implements the "),t("code",[e._v("sdk.Msg")]),e._v(" interface. These message will be executed at a later time (end of the next epoch).")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBNc2cgaW50ZXJmYWNlIHsKICBwcm90by5NZXNzYWdlCgogIC8vIFJldHVybiB0aGUgbWVzc2FnZSB0eXBlLgogIC8vIE11c3QgYmUgYWxwaGFudW1lcmljIG9yIGVtcHR5LgogIFJvdXRlKCkgc3RyaW5nCgogIC8vIFJldHVybnMgYSBodW1hbi1yZWFkYWJsZSBzdHJpbmcgZm9yIHRoZSBtZXNzYWdlLCBpbnRlbmRlZCBmb3IgdXRpbGl6YXRpb24KICAvLyB3aXRoaW4gdGFncwogIFR5cGUoKSBzdHJpbmcKCiAgLy8gVmFsaWRhdGVCYXNpYyBkb2VzIGEgc2ltcGxlIHZhbGlkYXRpb24gY2hlY2sgdGhhdAogIC8vIGRvZXNuJ3QgcmVxdWlyZSBhY2Nlc3MgdG8gYW55IG90aGVyIGluZm9ybWF0aW9uLgogIFZhbGlkYXRlQmFzaWMoKSBlcnJvcgoKICAvLyBHZXQgdGhlIGNhbm9uaWNhbCBieXRlIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBNc2cuCiAgR2V0U2lnbkJ5dGVzKCkgW11ieXRlCgogIC8vIFNpZ25lcnMgcmV0dXJucyB0aGUgYWRkcnMgb2Ygc2lnbmVycyB0aGF0IG11c3Qgc2lnbi4KICAvLyBDT05UUkFDVDogQWxsIHNpZ25hdHVyZXMgbXVzdCBiZSBwcmVzZW50IHRvIGJlIHZhbGlkLgogIC8vIENPTlRSQUNUOiBSZXR1cm5zIGFkZHJzIGluIHNvbWUgZGV0ZXJtaW5pc3RpYyBvcmRlci4KICBHZXRTaWduZXJzKCkgW11BY2NBZGRyZXNzCiB9Cg=="}}),e._v(" "),t("h2",{attrs:{id:"buffered-messages-export-import"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#buffered-messages-export-import"}},[e._v("#")]),e._v(" Buffered Messages Export / Import")]),e._v(" "),t("p",[e._v("For now, the "),t("code",[e._v("x/epoching")]),e._v(" module is implemented to export all buffered messages without epoch numbers. When state is imported, buffered messages are stored on current epoch to run at the end of current epoch.")]),e._v(" "),t("h2",{attrs:{id:"genesis-transactions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#genesis-transactions"}},[e._v("#")]),e._v(" Genesis Transactions")]),e._v(" "),t("p",[e._v("We execute epoch after execution of genesis transactions to see the changes instantly before node start.")]),e._v(" "),t("h2",{attrs:{id:"execution-on-epochs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#execution-on-epochs"}},[e._v("#")]),e._v(" Execution on epochs")]),e._v(" "),t("ul",[t("li",[e._v("Try executing the message for the epoch")]),e._v(" "),t("li",[e._v("If success, make changes as it is")]),e._v(" "),t("li",[e._v("If failure, try making revert extra actions done on handlers (e.g. EpochDelegationPool deposit)")]),e._v(" "),t("li",[e._v("If revert fail, panic")])])],1)}),[],!1,null,null,null);s.default=o.exports}}]);