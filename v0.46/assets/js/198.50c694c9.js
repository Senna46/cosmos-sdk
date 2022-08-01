(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{723:function(l,d,b){"use strict";b.r(d);var a=b(1),t=Object(a.a)({},(function(){var l=this,d=l.$createElement,b=l._self._c||d;return b("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[b("h1",{attrs:{id:"changes-to-make"}},[b("a",{staticClass:"header-anchor",attrs:{href:"#changes-to-make"}},[l._v("#")]),l._v(" Changes to make")]),l._v(" "),b("h2",{attrs:{id:"validator-self-unbonding-which-exceed-minimum-self-delegation-could-be-required-to-start-instantly"}},[b("a",{staticClass:"header-anchor",attrs:{href:"#validator-self-unbonding-which-exceed-minimum-self-delegation-could-be-required-to-start-instantly"}},[l._v("#")]),l._v(" Validator self-unbonding (which exceed minimum self delegation) could be required to start instantly")]),l._v(" "),b("p",[l._v("Cases that trigger unbonding process")]),l._v(" "),b("ul",[b("li",[l._v("Validator undelegate can unbond more tokens than his minimum_self_delegation and it will automatically turn the validator into unbonding\nIn this case, unbonding should start instantly.")]),l._v(" "),b("li",[l._v("Validator miss blocks and get slashed")]),l._v(" "),b("li",[l._v("Validator get slashed for double sign")])]),l._v(" "),b("p",[b("strong",[l._v("Note:")]),l._v(" When a validator begins the unbonding process, it could be required to turn the validator into unbonding state instantly.\nThis is different than a specific delegator beginning to unbond. A validator beginning to unbond means that it's not in the set any more.\nA delegator unbonding from a validator removes their delegation from the validator.")]),l._v(" "),b("h2",{attrs:{id:"pending-development"}},[b("a",{staticClass:"header-anchor",attrs:{href:"#pending-development"}},[l._v("#")]),l._v(" Pending development")]),l._v(" "),b("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQ2hhbmdlcyB0byBtYWtlCi8vIOKAlCBJbXBsZW1lbnQgY29ycmVjdCBuZXh0IGVwb2NoIHRpbWUgY2FsY3VsYXRpb24KLy8g4oCUIEZvciB2YWxpZGF0b3Igc2VsZiB1bmRlbGVnYXRpb24sIGl0IGNvdWxkIGJlIHJlcXVpcmVkIHRvIGRvIHN0YXJ0IG9uIGVuZCBibG9ja2VyCi8vIOKAlCBJbXBsZW1lbnQgVE9ET3Mgb24gdGhlIFBSICM0NgovLyBJbXBsZW1lbnQgQ0xJIGNvbW1hbmRzIGZvciBxdWVyeWluZwovLyDigJQgQnVmZmVyZWRWYWxpZGF0b3JzCi8vIOKAlCBCdWZmZXJlZE1zZ0NyZWF0ZVZhbGlkYXRvclF1ZXVlLCBCdWZmZXJlZE1zZ0VkaXRWYWxpZGF0b3JRdWV1ZQovLyDigJQgQnVmZmVyZWRNc2dVbmphaWxRdWV1ZSwgQnVmZmVyZWRNc2dEZWxlZ2F0ZVF1ZXVlLCBCdWZmZXJlZE1zZ1JlZGVsZWdhdGlvblF1ZXVlLCBCdWZmZXJlZE1zZ1VuZGVsZWdhdGVRdWV1ZQovLyBXcml0ZSBlcG9jaCByZWxhdGVkIHRlc3RzIHdpdGggbmV3IHNjZW5hcmlvcwovLyDigJQgU2ltdWxhdGlvbiB0ZXN0IGlzIGltcG9ydGFudCBmb3IgZmluZGluZyBidWdzIFtBc2sgRGV2IGZvciBxdWVzdGlvbnMpCi8vIOKAlCBDYW4gZWFzaWx5IGFkZCBhIHNpbXVsYXRvciBjaGVjayB0byBtYWtlIHN1cmUgYWxsIGRlbGVnYXRpb24gYW1vdW50cyBpbiBxdWV1ZSBhZGQgdXAgdG8gdGhlIHNhbWUgYW1vdW50IHRoYXTigJlzIGluIHRoZSBFcG9jaFVuYm9uZGVkUG9vbAovLyDigJQgSeKAmWQgbGlrZSBpdCBhZGRlZCBhcyBhbiBpbnZhcmlhbnQgdGVzdCBmb3IgdGhlIHNpbXVsYXRvcgovLyDigJQgdGhlIHNpbXVsYXRvciBzaG91bGQgY2hlY2sgdGhhdCB0aGUgc3VtIG9mIGFsbCB0aGUgcXVldWVkIGRlbGVnYXRpb25zIGFsd2F5cyBlcXVhbHMgdGhlIGFtb3VudCBrZXB0IHRyYWNrIGluIHRoZSBkYXRhCi8vIOKAlCBTdGFraW5nL1NsYXNoaW5nL0Rpc3RyaWJ1dGlvbiBtb2R1bGUgcGFyYW1zIGFyZSBiZWluZyBtb2RpZmllZCBieSBnb3Zlcm5hbmNlIGJhc2VkIG9uIHZvdGUgcmVzdWx0IGluc3RhbnRseS4gV2Ugc2hvdWxkIHRlc3QgdGhlIGVmZmVjdC4KLy8g4oCUIOKAlCBTaG91bGQgdGVzdCB0byBzZWUgd2hhdCB3b3VsZCBoYXBwZW4gaWYgbWF4X3ZhbGlkYXRvcnMgaXMgY2hhbmdlZCB0aG91Z2gsIGluIHRoZSBtaWRkbGUgb2YgYW4gZXBvY2gKLy8g4oCUIHdlIHNob3VsZCBkZWZpbmUgc29tZSBuZXcgaW52YXJpYW50cyB0aGF0IGhlbHAgY2hlY2sgdGhhdCBldmVyeXRoaW5nIGlzIHdvcmtpbmcgc21vb3RobHkgd2l0aCB0aGVzZSBuZXcgY2hhbmdlcyBmb3IgMyBtb2R1bGVzIGUuZy4gaHR0cHM6Ly9naXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2Jsb2IvbWFpbi94L3N0YWtpbmcva2VlcGVyL2ludmFyaWFudHMuZ28KLy8g4oCUIOKAlCBXaXRoaW4gRXBvY2gsIFZhbGlkYXRpb25Qb3dlciA9IFZhbGlkYXRpb25Qb3dlciAtIFNsYXNoQW1vdW50Ci8vIOKAlCDigJQgV2hlbiBlcG9jaCBhY3Rpb25zIHF1ZXVlIGlzIGVtcHR5LCBFcG9jaERlbGVnYXRpb25Qb29sIGJhbGFuY2Ugc2hvdWxkIGJlIHplcm8KLy8g4oCUIHdlIHNob3VsZCBjb3VudCBhbGwgdGhlIGRlbGVnYXRpb24gY2hhbmdlcyB0aGF0IGhhcHBlbiBkdXJpbmcgdGhlIGVwb2NoLCBhbmQgdGhlbiBtYWtlIHN1cmUgdGhhdCB0aGUgcmVzdWx0aW5nIGNoYW5nZSBhdCB0aGUgZW5kIG9mIHRoZSBlcG9jaCBpcyBhY3R1YWxseSBjb3JyZWN0Ci8vIOKAlCBJZiB0aGUgdmFsaWRhdG9yIHRoYXQgSSBkZWxlZ2F0ZWQgdG8gZG91YmxlIHNpZ25zIGF0IGJsb2NrIDE2LCBJIHNob3VsZCBzdGlsbCBnZXQgc2xhc2hlZCBpbnN0YW50bHkgYmVjYXVzZSBldmVuIHRob3VnaCBJIGFza2VkIHRvIHVuYm9uZCBhdCAxNCwgdGhleSBzdGlsbCB1c2VkIG15IHBvd2VyIGF0IGJsb2NrIDE2LCBJIHNob3VsZCBvbmx5IGJlIG5vdCBsaWFibGUgZm9yIHNsYXNoZXMgb25jZSBteSBwb3dlciBpcyBzdG9wcGVkIGJlaW5nIHVzZWQKLy8g4oCUIE9uIHRoZSBjb252ZXJzZSBvZiB0aGlzLCBJIHNob3VsZCBzdGlsbCBiZSBnZXR0aW5nIHJld2FyZHMgd2hpbGUgbXkgcG93ZXIgaXMgYmVpbmcgdXNlZC4gIEkgc2hvdWxkbuKAmXQgc3RvcCByZWNlaXZpbmcgcmV3YXJkcyB1bnRpbCBibG9jayAyMAo="}})],1)}),[],!1,null,null,null);d.default=t.exports}}]);