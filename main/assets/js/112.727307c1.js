(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{604:function(e,t,g){"use strict";g.r(t);var a=g(1),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,g=e._self._c||t;return g("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[g("h1",{attrs:{id:"adr-050-sign-mode-textual"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#adr-050-sign-mode-textual"}},[e._v("#")]),e._v(" ADR 050: SIGN_MODE_TEXTUAL")]),e._v(" "),g("h2",{attrs:{id:"changelog"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),g("ul",[g("li",[e._v("Dec 06, 2021: Initial Draft.")]),e._v(" "),g("li",[e._v("Feb 07, 2022: Draft read and concept-ACKed by the Ledger team.")]),e._v(" "),g("li",[e._v("May 16, 2022: Change status to Accepted.")])]),e._v(" "),g("h2",{attrs:{id:"status"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),g("p",[e._v("Accepted. Implementation started. Small value renderers details still need to be polished.")]),e._v(" "),g("h2",{attrs:{id:"abstract"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),g("p",[e._v("This ADR specifies SIGN_MODE_TEXTUAL, a new string-based sign mode that is targetted at signing with hardware devices.")]),e._v(" "),g("h2",{attrs:{id:"context"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),g("p",[e._v("Protobuf-based SIGN_MODE_DIRECT was introduced in "),g("RouterLink",{attrs:{to:"/architecture/adr-020-protobuf-transaction-encoding.html"}},[e._v("ADR-020")]),e._v(" and is intended to replace SIGN_MODE_LEGACY_AMINO_JSON in most situations, such as mobile wallets and CLI keyrings. However, the "),g("a",{attrs:{href:"https://www.ledger.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ledger"),g("OutboundLink")],1),e._v(" hardware wallet is still using SIGN_MODE_LEGACY_AMINO_JSON for displaying the sign bytes to the user. Hardware wallets cannot transition to SIGN_MODE_DIRECT as:")],1),e._v(" "),g("ul",[g("li",[e._v("SIGN_MODE_DIRECT is binary-based and thus not suitable for display to end-users. Technically, hardware wallets could simply display the sign bytes to the user. But this would be considered as blind signing, and is a security concern.")]),e._v(" "),g("li",[e._v("hardware cannot decode the protobuf sign bytes due to memory constraints, as the Protobuf definitions would need to be embedded on the hardware device.")])]),e._v(" "),g("p",[e._v("In an effort to remove Amino from the SDK, a new sign mode needs to be created for hardware devices. "),g("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/6513",target:"_blank",rel:"noopener noreferrer"}},[e._v("Initial discussions"),g("OutboundLink")],1),e._v(" propose a string-based sign mode, which this ADR formally specifies.")]),e._v(" "),g("h2",{attrs:{id:"decision"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),g("p",[e._v("We propose to have SIGN_MODE_TEXTUAL’s signing payload "),g("code",[e._v("SignDocTextual")]),e._v(" to be an array of strings, encoded as a "),g("code",[e._v("\\n")]),e._v('-delimited string (see point #9). Each string corresponds to one "screen" on the hardware wallet device, with no (or little) additional formatting done by the hardware wallet itself.')]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"bWVzc2FnZSBTaWduRG9jVGV4dHVhbCB7CiAgcmVwZWF0ZWQgc3RyaW5nIHNjcmVlbnMgPSAxOwp9Cg=="}}),e._v(" "),g("p",[e._v("The string array MUST follow the specifications below.")]),e._v(" "),g("h3",{attrs:{id:"_1-bijectivity-with-protobuf-transactions"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#_1-bijectivity-with-protobuf-transactions"}},[e._v("#")]),e._v(" 1. Bijectivity with Protobuf transactions")]),e._v(" "),g("p",[e._v("The encoding and decoding operations between a Protobuf transaction (whose definition can be found "),g("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/master/proto/cosmos/tx/v1beta1/tx.proto#L13",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),g("OutboundLink")],1),e._v(") and the string array MUST be bijective.")]),e._v(" "),g("p",[e._v("We concede that bijectivity is not strictly needed. Avoiding transaction malleability only requires collision resistance on the encoding. Lossless encoding also does not require decodability. However, bijectivity assures both non-malleability and losslessness.")]),e._v(" "),g("p",[e._v("Bijectivity will be tested in two ways:")]),e._v(" "),g("ul",[g("li",[e._v("by providing a set of test fixtures between a transaction's Proto JSON representation and its TEXTUAL representation, and checking that encoding/decoding in both directions matches the fixtures,")]),e._v(" "),g("li",[e._v("by using property testing on the proto transaction itself, and testing that the composition of encoding and decoding yields the original transaction itself.")])]),e._v(" "),g("p",[e._v("This also prevents users signing over any hashed transaction data (fee, transaction body, "),g("code",[e._v("Msg")]),e._v(" content that might be hashed etc), which is a security concern for Ledger's security team.")]),e._v(" "),g("p",[e._v("We propose to maintain functional tests using bijectivity in the SDK.")]),e._v(" "),g("h3",{attrs:{id:"_2-only-ascii-32-127-characters-allowed"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#_2-only-ascii-32-127-characters-allowed"}},[e._v("#")]),e._v(" 2. Only ASCII 32-127 characters allowed")]),e._v(" "),g("p",[e._v("Ledger devices have limited character display capabilities, so all strings MUST only contain ASCII characters in the 32-127 range.")]),e._v(" "),g("p",[e._v("In particular, the newline "),g("code",[e._v('"\\n"')]),e._v(" (ASCII: 10) character is forbidden.")]),e._v(" "),g("h3",{attrs:{id:"_3-strings-should-have-the-key-value-format"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#_3-strings-should-have-the-key-value-format"}},[e._v("#")]),e._v(" 3. Strings SHOULD have the "),g("code",[e._v("<key>: <value>")]),e._v(" format")]),e._v(" "),g("p",[e._v("Given the Regex "),g("code",[e._v("/^(\\* )?(>* )?(.*: )?(.*)$/")]),e._v(", all strings SHOULD match the Regex with capture groups 3 and 4 non-empty. This is helpful for UIs displaying SignDocTextual to users.")]),e._v(" "),g("ul",[g("li",[e._v("The initial "),g("code",[e._v("*")]),e._v(" character is optional and denotes the Ledger Expert mode, see #5.")]),e._v(" "),g("li",[e._v("Strings can also include a number of "),g("code",[e._v(">")]),e._v(" character to denote nesting.")]),e._v(" "),g("li",[e._v("In the case where the first Regex capture group is not empty, it represents an indicative key, whose associated value is given in the second capture group. This MAY be used in the Ledger app to perform custom on-screen formatting, for example to break long lines into multiple screens.")])]),e._v(" "),g("p",[e._v("This Regex is however not mandatory, to allow for some flexibility, for example to display an English sentence to denote end of sections.")]),e._v(" "),g("p",[e._v("The "),g("code",[e._v("<value>")]),e._v(" itself can contain the "),g("code",[e._v('": "')]),e._v(" characters.")]),e._v(" "),g("h3",{attrs:{id:"_4-values-are-encoded-using-value-renderers"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#_4-values-are-encoded-using-value-renderers"}},[e._v("#")]),e._v(" 4. Values are encoded using Value Renderers")]),e._v(" "),g("p",[e._v("Value Renderers describe how Protobuf types are encoded to and decoded from a string array. The full specification of Value Renderers can be found in "),g("RouterLink",{attrs:{to:"/architecture/adr-050-sign-mode-textual-annex1.html"}},[e._v("Annex 1")]),e._v(".")],1),e._v(" "),g("h3",{attrs:{id:"_5-strings-starting-with-are-only-shown-in-expert-mode"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#_5-strings-starting-with-are-only-shown-in-expert-mode"}},[e._v("#")]),e._v(" 5. Strings starting with "),g("code",[e._v("*")]),e._v(" are only shown in Expert mode")]),e._v(" "),g("p",[e._v("Ledger devices have the an Expert mode for advanced users. Expert mode needs to be manually activated by the device holder, inside the device settings. There is currently no official documentation on Expert mode, but according to the "),g("a",{attrs:{href:"https://twitter.com/Ledger_Support/status/1364524431800950785",target:"_blank",rel:"noopener noreferrer"}},[e._v("@Ledger_Support twitter account"),g("OutboundLink")],1),e._v(",")]),e._v(" "),g("blockquote",[g("p",[e._v("Expert mode enables further, more sophisticated features. This could be useful for advanced users")])]),e._v(" "),g("p",[e._v("Strings starting with the "),g("code",[e._v("*")]),e._v(" character will only be shown in Expert mode. These strings are either hardcoded in the transaction envelope (see point #7).")]),e._v(" "),g("p",[e._v("For hardware wallets that don't have an expert mode, all strings MUST be shown on the device.")]),e._v(" "),g("h3",{attrs:{id:"_6-strings-may-contain-characters-to-denote-nesting"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#_6-strings-may-contain-characters-to-denote-nesting"}},[e._v("#")]),e._v(" 6. Strings MAY contain "),g("code",[e._v(">")]),e._v(" characters to denote nesting")]),e._v(" "),g("p",[e._v("Protobuf objects can be arbitrarily complex, containing nested arrays and messages. In order to help the Ledger-signing users, we propose to use the "),g("code",[e._v(">")]),e._v(" symbol in the beginning of strings to represent nested objects, where each additional "),g("code",[e._v(">")]),e._v(" represents a new level of nesting.")]),e._v(" "),g("h3",{attrs:{id:"_7-encoding-of-the-transaction-envelope"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#_7-encoding-of-the-transaction-envelope"}},[e._v("#")]),e._v(" 7. Encoding of the Transaction Envelope")]),e._v(" "),g("p",[e._v('We define "transaction envelope" as all data in a transaction that is not in the '),g("code",[e._v("TxBody.Messages")]),e._v(" field. Transaction envelope includes fee, signer infos and memo, but don't include "),g("code",[e._v("Msg")]),e._v("s. "),g("code",[e._v("//")]),e._v(" denotes comments and are not shown on the Ledger device.")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Q2hhaW4gSUQ6ICZsdDtzdHJpbmcmZ3Q7CkFjY291bnQgbnVtYmVyOiAmbHQ7dWludDY0Jmd0OwoqUHVibGljIEtleTogJmx0O2Jhc2U2NF9zdHJpbmcmZ3Q7ClNlcXVlbmNlOiAmbHQ7dWludDY0Jmd0OwombHQ7VHhCb2R5Jmd0OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTZWUgIzguCkZlZTogJmx0O2NvaW5zJmd0OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNlZSB2YWx1ZSByZW5kZXJlcnMgZm9yIGNvaW5zIGVuY29kaW5nLgoqRmVlIHBheWVyOiAmbHQ7c3RyaW5nJmd0OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTa2lwcGVkIGlmIG5vIGZlZV9wYXllciBzZXQKKkZlZSBncmFudGVyOiAmbHQ7c3RyaW5nJmd0OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2tpcHBlZCBpZiBubyBmZWVfZ3JhbnRlciBzZXQKTWVtbzogJmx0O3N0cmluZyZndDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2tpcHBlZCBpZiBubyBtZW1vIHNldAoqR2FzIExpbWl0OiAmbHQ7dWludDY0Jmd0OwoqVGltZW91dCBIZWlnaHQ6ICAmbHQ7dWludDY0Jmd0OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTa2lwcGVkIGlmIG5vIHRpbWVvdXRfaGVpZ2h0IHNldApUaXBwZXI6ICZsdDtzdHJpbmcmZ3Q7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSdzIGEgdGlwClRpcDogJmx0O3N0cmluZyZndDsKKlRoaXMgdHJhbnNhY3Rpb24gaGFzICZsdDtpbnQmZ3Q7IGJvZHkgZXh0ZW5zaW9uOiAgICAgICAgICAgICAgICAgLy8gU2tpcHBlZCBpZiBubyBib2R5IGV4dGVuc2lvbiBvcHRpb25zCiombHQ7cmVwZWF0ZWQgQW55Jmd0OwoqVGhpcyB0cmFuc2FjdGlvbiBoYXMgJmx0O2ludCZndDsgYm9keSBub24tY3JpdGljYWwgZXh0ZW5zaW9uczogICAvLyBTa2lwcGVkIGlmIG5vIGJvZHkgbm9uLWNyaXRpY2FsIGV4dGVuc2lvbiBvcHRpb25zCiombHQ7cmVwZWF0ZWQgQW55Jmd0OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNlZSB2YWx1ZSByZW5kZXJlcnMgZm9yIEFueSBhbmQgYXJyYXkgZW5jb2RpbmcuCipUaGlzIHRyYW5zYWN0aW9uIGhhcyAmbHQ7aW50Jmd0OyBib2R5IGF1dGggaW5mbyBleHRlbnNpb25zOiAgICAgIC8vIFNraXBwZWQgaWYgbm8gYXV0aCBpbmZvIGV4dGVuc2lvbiBvcHRpb25zCiombHQ7cmVwZWF0ZWQgQW55Jmd0OwoqVGhpcyB0cmFuc2FjdGlvbiBoYXMgJmx0O2ludCZndDsgb3RoZXIgc2lnbmVyczogICAgICAgICAgICAgICAgICAvLyBTa2lwcGVkIGlmIHRoZXJlIGlzIG9ubHkgb25lIHNpZ25lcgoqU2lnbmVyICgmbHQ7aW50Jmd0Oy8mbHQ7aW50Jmd0Oyk6CipQdWJsaWMgS2V5OiAmbHQ7YmFzZTY0X3N0cmluZyZndDsKKlNlcXVlbmNlOiAmbHQ7dWludDY0Jmd0OwoqRW5kIG9mIG90aGVyIHNpZ25lcnMK"}}),e._v(" "),g("h3",{attrs:{id:"_8-encoding-of-the-transaction-body"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#_8-encoding-of-the-transaction-body"}},[e._v("#")]),e._v(" 8. Encoding of the Transaction Body")]),e._v(" "),g("p",[e._v("Transaction Body is the "),g("code",[e._v("Tx.TxBody.Messages")]),e._v(" field, which is an array of "),g("code",[e._v("Any")]),e._v("s, where each "),g("code",[e._v("Any")]),e._v(" packs a "),g("code",[e._v("sdk.Msg")]),e._v(". Since "),g("code",[e._v("sdk.Msg")]),e._v("s are widely used, they have a slightly different encoding than usual array of "),g("code",[e._v("Any")]),e._v("s (Protobuf: "),g("code",[e._v("repeated google.protobuf.Any")]),e._v(") described in Annex 1.")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"VGhpcyB0cmFuc2FjdGlvbiBoYXMgJmx0O2ludCZndDsgbWVzc2FnZTogICAvLyBPcHRpb25hbCAncycgZm9yICZxdW90O21lc3NhZ2UmcXVvdDsgaWYgdGhlcmUncyBpcyAmZ3Q7MSBzZGsuTXNncy4KLy8gRm9yIGVhY2ggTXNnLCBwcmludCB0aGUgZm9sbG93aW5nIDIgbGluZXM6Ck1zZyAoJmx0O2ludCZndDsvJmx0O2ludCZndDspOiAmbHQ7c3RyaW5nJmd0OyAgICAgICAgICAgLy8gRS5nLiBNc2cgKDEvMik6IGJhbmsgdjFiZXRhMSBzZW5kIGNvaW5zCiZsdDt2YWx1ZSByZW5kZXJpbmcgb2YgTXNnIHN0cnVjdCZndDsKRW5kIG9mIHRyYW5zYWN0aW9uIG1lc3NhZ2VzCg=="}}),e._v(" "),g("h4",{attrs:{id:"example"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),g("p",[e._v("Given the following Protobuf message:")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"bWVzc2FnZSBHcmFudCB7CiAgZ29vZ2xlLnByb3RvYnVmLkFueSAgICAgICBhdXRob3JpemF0aW9uID0gMSBbKGNvc21vc19wcm90by5hY2NlcHRzX2ludGVyZmFjZSkgPSAmcXVvdDtBdXRob3JpemF0aW9uJnF1b3Q7XTsKICBnb29nbGUucHJvdG9idWYuVGltZXN0YW1wIGV4cGlyYXRpb24gICAgPSAyIFsoZ29nb3Byb3RvLnN0ZHRpbWUpID0gdHJ1ZSwgKGdvZ29wcm90by5udWxsYWJsZSkgPSBmYWxzZV07Cn0KCm1lc3NhZ2UgTXNnR3JhbnQgewogIG9wdGlvbiAoY29zbW9zLm1zZy52MS5zaWduZXIpID0gJnF1b3Q7Z3JhbnRlciZxdW90OzsKICBvcHRpb24gKGNvc21vcy5tc2cudjEudGV4dHVhbC50eXBlX3VybCkgPSAmcXVvdDthdXRoeiB2MWJldGExIGdyYW50JnF1b3Q7OwoKICBzdHJpbmcgZ3JhbnRlciA9IDEgWyhjb3Ntb3NfcHJvdG8uc2NhbGFyKSA9ICZxdW90O2Nvc21vcy5BZGRyZXNzU3RyaW5nJnF1b3Q7XTsKICBzdHJpbmcgZ3JhbnRlZSA9IDIgWyhjb3Ntb3NfcHJvdG8uc2NhbGFyKSA9ICZxdW90O2Nvc21vcy5BZGRyZXNzU3RyaW5nJnF1b3Q7XTsKfQo="}}),e._v(" "),g("p",[e._v("and a transaction containing 1 such "),g("code",[e._v("sdk.Msg")]),e._v(", we get the following encoding:")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"VGhpcyB0cmFuc2FjdGlvbiBoYXMgMSBtZXNzYWdlOgpNc2cgKDEvMSk6IGF1dGh6IHYxYmV0YTEgZ3JhbnQKR3JhbnRlcjogY29zbW9zMWFiYy4uLmRlZgpHcmFudGVlOiBjb3Ntb3MxZ2hpLi4uamtsCkVuZCBvZiB0cmFuc2FjdGlvbiBtZXNzYWdlcwo="}}),e._v(" "),g("h3",{attrs:{id:"_9-signing-payload-and-wire-format"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#_9-signing-payload-and-wire-format"}},[e._v("#")]),e._v(" 9. Signing Payload and Wire Format")]),e._v(" "),g("p",[e._v("This string array is encoded as a single "),g("code",[e._v("\\n")]),e._v("-delimited string before transmitted to the hardware device, and this long string is the signing payload signed by the hardware wallet.")]),e._v(" "),g("h2",{attrs:{id:"additional-formatting-by-the-hardware-device"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#additional-formatting-by-the-hardware-device"}},[e._v("#")]),e._v(" Additional Formatting by the Hardware Device")]),e._v(" "),g("p",[e._v("Hardware devices differ in screen sizes and memory capacities. The above specifications are all verified on the protocol level, but we still allow the hardware device to add custom formatting rules that are specific to the device. Rules can include:")]),e._v(" "),g("ul",[g("li",[e._v("if a string is too long, show it on multiple screens,")]),e._v(" "),g("li",[e._v("break line between the "),g("code",[e._v("key")]),e._v(" and "),g("code",[e._v("value")]),e._v(" from #3,")]),e._v(" "),g("li",[e._v("perform line breaks on a number or a coin values only when necessary. For example, a "),g("code",[e._v("sdk.Coins")]),e._v(" with multiple denoms would be better shown as one denom per line instead of an coin amount being cut in the middle.")])]),e._v(" "),g("h2",{attrs:{id:"examples"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),g("h4",{attrs:{id:"example-1-simple-msgsend"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#example-1-simple-msgsend"}},[e._v("#")]),e._v(" Example 1: Simple "),g("code",[e._v("MsgSend")])]),e._v(" "),g("p",[e._v("JSON:")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90O2JvZHkmcXVvdDs6IHsKICAgICZxdW90O21lc3NhZ2VzJnF1b3Q7OiBbCiAgICAgIHsKICAgICAgICAmcXVvdDtAdHlwZSZxdW90OzogJnF1b3Q7L2Nvc21vcy5iYW5rLnYxYmV0YTEuTXNnU2VuZCZxdW90OywKICAgICAgICAmcXVvdDtmcm9tJnF1b3Q7OiAmcXVvdDtjb3Ntb3MxLi4uYWJjJnF1b3Q7LAogICAgICAgICZxdW90O3RvJnF1b3Q7OiAmcXVvdDtjb3Ntb3MxLi4uZGVmJnF1b3Q7LAogICAgICAgICZxdW90O2Ftb3VudCZxdW90OzogWwogICAgICAgICAgewogICAgICAgICAgICAmcXVvdDtkZW5vbSZxdW90OzogJnF1b3Q7dWF0b20mcXVvdDssCiAgICAgICAgICAgICZxdW90O2Ftb3VudCZxdW90OzogMTAwMDAwMDAKICAgICAgICAgIH0KICAgICAgICBdCiAgICAgIH0KICAgIF0KICB9LAogICZxdW90O2F1dGhfaW5mbyZxdW90OzogewogICAgJnF1b3Q7c2lnbmVyX2luZm9zJnF1b3Q7OiBbCiAgICAgIHsKICAgICAgICAmcXVvdDtwdWJsaWNfa2V5JnF1b3Q7OiAmcXVvdDtpUS4uLj09JnF1b3Q7LAogICAgICAgICZxdW90O21vZGVfaW5mbyZxdW90OzogeyAmcXVvdDtzaW5nbGUmcXVvdDs6IHsgJnF1b3Q7bW9kZSZxdW90OzogJnF1b3Q7U0lHTl9NT0RFX1RFWFRVQUwmcXVvdDsgfSB9LAogICAgICAgICZxdW90O3NlcXVlbmNlJnF1b3Q7OiAyCiAgICAgIH0KICAgIF0sCiAgICAmcXVvdDtmZWUmcXVvdDs6IHsKICAgICAgJnF1b3Q7YW1vdW50JnF1b3Q7OiBbCiAgICAgICAgewogICAgICAgICAgJnF1b3Q7ZGVub20mcXVvdDs6ICZxdW90O2F0b20mcXVvdDssCiAgICAgICAgICAmcXVvdDthbW91bnQmcXVvdDs6IDAuMDAyCiAgICAgICAgfQogICAgICBdLAogICAgICAmcXVvdDtnYXNfbGltaXQmcXVvdDs6IDEwMDAwMAogICAgfQogIH0sCiAgLy8gQWRkaXRpb25hbCBTaWduZXJEYXRhLgogICZxdW90O2NoYWluX2lkJnF1b3Q7OiAmcXVvdDtzaW1hcHAtMSZxdW90OywKICAmcXVvdDthY2NvdW50X251bWJlciZxdW90OzogMTAKfQo="}}),e._v(" "),g("p",[e._v("SIGN_MODE_TEXTUAL:")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Q2hhaW4gSUQ6IHNpbWFwcC0xCkFjY291bnQgbnVtYmVyOiAxMAoqUHVibGljIEtleTogaVEuLi49PSAgICAgICAgLy8gQmFzZTY0IHB1YmtleQpTZXF1ZW5jZTogMgpUaGlzIHRyYW5zYWN0aW9uIGhhcyAxIG1lc3NhZ2U6Ck1lc3NhZ2UgKDEvMSk6IGJhbmsgdjFiZXRhMSBzZW5kIGNvaW5zCkZyb206IGNvc21vczEuLi5hYmMKVG86IGNvc21vczEuLi5kZWYKQW1vdW50OiAxMCBhdG9tICAgICAgICAgICAgLy8gQ29udmVyc2lvbiBmcm9tIHVhdG9tIHRvIGF0b20gdXNpbmcgdmFsdWUgcmVuZGVyZXJzCkVuZCBvZiB0cmFuc2FjdGlvbiBtZXNzYWdlcwpGZWU6IDAuMDAyIGF0b20KKkdhczogMTAwJzAwMAo="}}),e._v(" "),g("h4",{attrs:{id:"example-2-multi-msg-transaction-with-3-signers"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#example-2-multi-msg-transaction-with-3-signers"}},[e._v("#")]),e._v(" Example 2: Multi-Msg Transaction with 3 signers")]),e._v(" "),g("h4",{attrs:{id:"example-3-legacy-multisig"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#example-3-legacy-multisig"}},[e._v("#")]),e._v(" Example 3: Legacy Multisig")]),e._v(" "),g("h4",{attrs:{id:"example-4-fee-payer-with-tips"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#example-4-fee-payer-with-tips"}},[e._v("#")]),e._v(" Example 4: Fee Payer with Tips")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90O2JvZHkmcXVvdDs6IHsKICAgICZxdW90O21lc3NhZ2VzJnF1b3Q7OiBbCiAgICAgIHsKICAgICAgICAmcXVvdDtAdHlwZSZxdW90OzogJnF1b3Q7L2Nvc21vcy5iYW5rLnYxYmV0YTEuTXNnU2VuZCZxdW90OywKICAgICAgICAmcXVvdDtmcm9tJnF1b3Q7OiAmcXVvdDtjb3Ntb3MxLi4udGlwcGVyJnF1b3Q7LAogICAgICAgICZxdW90O3RvJnF1b3Q7OiAmcXVvdDtjb3Ntb3MxLi4uYWJjJnF1b3Q7LAogICAgICAgICZxdW90O2Ftb3VudCZxdW90OzogWwogICAgICAgICAgewogICAgICAgICAgICAmcXVvdDtkZW5vbSZxdW90OzogJnF1b3Q7dWF0b20mcXVvdDssCiAgICAgICAgICAgICZxdW90O2Ftb3VudCZxdW90OzogMTAwMDAwMDAKICAgICAgICAgIH0KICAgICAgICBdCiAgICAgIH0KICAgIF0KICB9LAogICZxdW90O2F1dGhfaW5mbyZxdW90OzogewogICAgJnF1b3Q7c2lnbmVyX2luZm9zJnF1b3Q7OiBbCiAgICAgIHsKICAgICAgICAmcXVvdDtwdWJsaWNfa2V5JnF1b3Q7OiAmcXVvdDtpUS4uLj09JnF1b3Q7LAogICAgICAgICZxdW90O21vZGVfaW5mbyZxdW90OzogeyAmcXVvdDtzaW5nbGUmcXVvdDs6IHsgJnF1b3Q7bW9kZSZxdW90OzogJnF1b3Q7U0lHTl9NT0RFX0RJUkVDVF9BVVgmcXVvdDsgfSB9LAogICAgICAgICZxdW90O3NlcXVlbmNlJnF1b3Q7OiA0MgogICAgICB9LAogICAgICB7CiAgICAgICAgJnF1b3Q7cHVibGljX2tleSZxdW90OzogJnF1b3Q7aVIuLi49PSZxdW90OywKICAgICAgICAmcXVvdDttb2RlX2luZm8mcXVvdDs6IHsgJnF1b3Q7c2luZ2xlJnF1b3Q7OiB7ICZxdW90O21vZGUmcXVvdDs6ICZxdW90O1NJR05fTU9ERV9URVhUVUFMJnF1b3Q7IH0gfSwKICAgICAgICAmcXVvdDtzZXF1ZW5jZSZxdW90OzogMgogICAgICB9CiAgICBdLAogICAgJnF1b3Q7ZmVlJnF1b3Q7OiB7CiAgICAgICZxdW90O2Ftb3VudCZxdW90OzogWwogICAgICAgIHsKICAgICAgICAgICZxdW90O2Rlbm9tJnF1b3Q7OiAmcXVvdDthdG9tJnF1b3Q7LAogICAgICAgICAgJnF1b3Q7YW1vdW50JnF1b3Q7OiAwLjAwMgogICAgICAgIH0KICAgICAgXSwKICAgICAgJnF1b3Q7Z2FzX2xpbWl0JnF1b3Q7OiAxMDAwMDAsCiAgICAgICZxdW90O3BheWVyJnF1b3Q7OiAmcXVvdDtjb3Ntb3MxLi4uZmVlcGF5ZXImcXVvdDsKICAgIH0sCiAgICAmcXVvdDt0aXAmcXVvdDs6IHsKICAgICAgJnF1b3Q7YW1vdW50JnF1b3Q7OiBbCiAgICAgICAgewogICAgICAgICAgJnF1b3Q7ZGVub20mcXVvdDs6ICZxdW90O2liYy9DREM0NTg3ODc0Qjg1QkVBNEZDRUMzQ0VBNUExMTk1MTM5Nzk5QTFGRUU3MTFBMDdEOTcyNTM3RTE4RkRBMzlEJnF1b3Q7LAogICAgICAgICAgJnF1b3Q7YW1vdW50JnF1b3Q7OiAyMDAKICAgICAgICB9CiAgICAgIF0sCiAgICAgICZxdW90O3RpcHBlciZxdW90OzogJnF1b3Q7Y29zbW9zMS4uLnRpcHBlciZxdW90OwogICAgfQogIH0sCiAgLy8gQWRkaXRpb25hbCBTaWduZXJEYXRhLgogICZxdW90O2NoYWluX2lkJnF1b3Q7OiAmcXVvdDtzaW1hcHAtMSZxdW90OywKICAmcXVvdDthY2NvdW50X251bWJlciZxdW90OzogMTAKfQo="}}),e._v(" "),g("p",[e._v("SIGN_MODE_TEXTUAL for the feepayer:")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Q2hhaW4gSUQ6IHNpbWFwcC0xCkFjY291bnQgbnVtYmVyOiAxMAoqUHVibGljIEtleTogaVIuLi49PQpTZXF1ZW5jZTogMgpUaGlzIHRyYW5zYWN0aW9uIGhhcyAxIG1lc3NhZ2U6Ck1lc3NhZ2UgKDEvMSk6IGJhbmsgdjFiZXRhMSBzZW5kIGNvaW5zCkZyb206IGNvc21vczEuLi5hYmMKVG86IGNvc21vczEuLi5kZWYKQW1vdW50OiAxMCBhdG9tCkVuZCBvZiB0cmFuc2FjdGlvbiBtZXNzYWdlcwpGZWU6IDAuMDAyIGF0b20KRmVlIFBheWVyOiBjb3Ntb3MxLi4uZmVlcGF5ZXIKVGlwcGVyOiBjb3Ntb3MxLi4udGlwcGVyClRpcDogMjAwIGliYy9DREM0NTg3ODc0Qjg1QkVBNEZDRUMzQ0VBNUExMTk1MTM5Nzk5QTFGRUU3MTFBMDdEOTcyNTM3RTE4RkRBMzlECipHYXM6IDEwMCcwMDAKKlRoaXMgdHJhbnNhY3Rpb24gaGFzIDEgb3RoZXIgc2lnbmVyOgoqU2lnbmVyICgxLzIpOgoqUHVibGljIEtleTogaVEuLi49PQoqU2lnbiBtb2RlOiBEaXJlY3QgQXV4CipTZXF1ZW5jZTogNDIKKkVuZCBvZiBvdGhlciBzaWduZXJzCg=="}}),e._v(" "),g("h4",{attrs:{id:"example-5-complex-transaction-with-nested-messages"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#example-5-complex-transaction-with-nested-messages"}},[e._v("#")]),e._v(" Example 5: Complex Transaction with Nested Messages")]),e._v(" "),g("p",[e._v("JSON:")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90O2JvZHkmcXVvdDs6IHsKICAgICZxdW90O21lc3NhZ2VzJnF1b3Q7OiBbCiAgICAgIHsKICAgICAgICAmcXVvdDtAdHlwZSZxdW90OzogJnF1b3Q7L2Nvc21vcy5iYW5rLnYxYmV0YTEuTXNnU2VuZCZxdW90OywKICAgICAgICAmcXVvdDtmcm9tJnF1b3Q7OiAmcXVvdDtjb3Ntb3MxLi4uYWJjJnF1b3Q7LAogICAgICAgICZxdW90O3RvJnF1b3Q7OiAmcXVvdDtjb3Ntb3MxLi4uZGVmJnF1b3Q7LAogICAgICAgICZxdW90O2Ftb3VudCZxdW90OzogWwogICAgICAgICAgewogICAgICAgICAgICAmcXVvdDtkZW5vbSZxdW90OzogJnF1b3Q7dWF0b20mcXVvdDssCiAgICAgICAgICAgICZxdW90O2Ftb3VudCZxdW90OzogMTAwMDAwMDAKICAgICAgICAgIH0KICAgICAgICBdCiAgICAgIH0sCiAgICAgIHsKICAgICAgICAmcXVvdDtAdHlwZSZxdW90OzogJnF1b3Q7L2Nvc21vcy5nb3YudjEuTXNnU3VibWl0UHJvcG9zYWwmcXVvdDssCiAgICAgICAgJnF1b3Q7cHJvcG9zZXImcXVvdDs6ICZxdW90O2Nvc21vczEuLi5naGkmcXVvdDssCiAgICAgICAgJnF1b3Q7bWVzc2FnZXMmcXVvdDs6IFsKICAgICAgICAgIHsKICAgICAgICAgICAgJnF1b3Q7QHR5cGUmcXVvdDs6ICZxdW90Oy9jb3Ntb3MuYmFuay52MWJldGExLk1zZ1NlbmQmcXVvdDssCiAgICAgICAgICAgICZxdW90O2Zyb20mcXVvdDs6ICZxdW90O2Nvc21vczEuLi5qa2wmcXVvdDssCiAgICAgICAgICAgICZxdW90O3RvJnF1b3Q7OiAmcXVvdDtjb3Ntb3MxLi4ubW5vJnF1b3Q7LAogICAgICAgICAgICAmcXVvdDthbW91bnQmcXVvdDs6IFsKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICAmcXVvdDtkZW5vbSZxdW90OzogJnF1b3Q7dWF0b20mcXVvdDssCiAgICAgICAgICAgICAgICAmcXVvdDthbW91bnQmcXVvdDs6IDIwMDAwMDAwCiAgICAgICAgICAgICAgfQogICAgICAgICAgICBdCiAgICAgICAgICB9LAogICAgICAgICAgewogICAgICAgICAgICAmcXVvdDtAdHlwZSZxdW90OzogJnF1b3Q7L2Nvc21vcy5hdXRoei52MWJldGExLk1zZ0V4ZWMmcXVvdDssCiAgICAgICAgICAgICZxdW90O2dyYW50ZWUmcXVvdDs6ICZxdW90O2Nvc21vczEuLi5wcXImcXVvdDssCiAgICAgICAgICAgICZxdW90O21zZ3MmcXVvdDs6IFsKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICAmcXVvdDtAdHlwZSZxdW90OzogJnF1b3Q7L2Nvc21vcy5iYW5rLnYxYmV0YTEuTXNnU2VuZCZxdW90OywKICAgICAgICAgICAgICAgICZxdW90O2Zyb20mcXVvdDs6ICZxdW90O2Nvc21vczEuLi5zdHUmcXVvdDssCiAgICAgICAgICAgICAgICAmcXVvdDt0byZxdW90OzogJnF1b3Q7Y29zbW9zMS4uLnZ3eCZxdW90OywKICAgICAgICAgICAgICAgICZxdW90O2Ftb3VudCZxdW90OzogWwogICAgICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICAgICAgJnF1b3Q7ZGVub20mcXVvdDs6ICZxdW90O3VhdG9tJnF1b3Q7LAogICAgICAgICAgICAgICAgICAgICZxdW90O2Ftb3VudCZxdW90OzogMzAwMDAwMDAKICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgXQogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgJnF1b3Q7QHR5cGUmcXVvdDs6ICZxdW90Oy9jb3Ntb3MuYmFuay52MWJldGExLk1zZ1NlbmQmcXVvdDssCiAgICAgICAgICAgICAgICAmcXVvdDtmcm9tJnF1b3Q7OiAmcXVvdDtjb3Ntb3MxLi4uYWJjJnF1b3Q7LAogICAgICAgICAgICAgICAgJnF1b3Q7dG8mcXVvdDs6ICZxdW90O2Nvc21vczEuLi5kZWYmcXVvdDssCiAgICAgICAgICAgICAgICAmcXVvdDthbW91bnQmcXVvdDs6IFsKICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICZxdW90O2Rlbm9tJnF1b3Q7OiAmcXVvdDt1YXRvbSZxdW90OywKICAgICAgICAgICAgICAgICAgICAmcXVvdDthbW91bnQmcXVvdDs6IDQwMDAwMDAwCiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIF0KICAgICAgICAgICAgICB9CiAgICAgICAgICAgIF0KICAgICAgICAgIH0KICAgICAgICBdLAogICAgICAgICZxdW90O2luaXRpYWxfZGVwb3NpdCZxdW90OzogWwogICAgICAgICAgewogICAgICAgICAgICAmcXVvdDtkZW5vbSZxdW90OzogJnF1b3Q7YXRvbSZxdW90OywKICAgICAgICAgICAgJnF1b3Q7YW1vdW50JnF1b3Q7OiAxMDAuMDEKICAgICAgICAgIH0KICAgICAgICBdCiAgICAgIH0KICAgIF0KICB9LAogICZxdW90O2F1dGhfaW5mbyZxdW90OzogewogICAgJnF1b3Q7c2lnbmVyX2luZm9zJnF1b3Q7OiBbCiAgICAgIHsKICAgICAgICAmcXVvdDtwdWJsaWNfa2V5JnF1b3Q7OiAmcXVvdDtpUS4uLj09JnF1b3Q7LAogICAgICAgICZxdW90O21vZGVfaW5mbyZxdW90OzogeyAmcXVvdDtzaW5nbGUmcXVvdDs6IHsgJnF1b3Q7bW9kZSZxdW90OzogJnF1b3Q7U0lHTl9NT0RFX1RFWFRVQUwmcXVvdDsgfSB9LAogICAgICAgICZxdW90O3NlcXVlbmNlJnF1b3Q7OiAyCiAgICAgIH0sCiAgICAgIHsKICAgICAgICAmcXVvdDtwdWJsaWNfa2V5JnF1b3Q7OiAmcXVvdDtpUi4uLj09JnF1b3Q7LAogICAgICAgICZxdW90O21vZGVfaW5mbyZxdW90OzogeyAmcXVvdDtzaW5nbGUmcXVvdDs6IHsgJnF1b3Q7bW9kZSZxdW90OzogJnF1b3Q7U0lHTl9NT0RFX0RJUkVDVCZxdW90OyB9IH0sCiAgICAgICAgJnF1b3Q7c2VxdWVuY2UmcXVvdDs6IDQyCiAgICAgIH0KICAgIF0sCiAgICAmcXVvdDtmZWUmcXVvdDs6IHsKICAgICAgJnF1b3Q7YW1vdW50JnF1b3Q7OiBbCiAgICAgICAgewogICAgICAgICAgJnF1b3Q7ZGVub20mcXVvdDs6ICZxdW90O2F0b20mcXVvdDssCiAgICAgICAgICAmcXVvdDthbW91bnQmcXVvdDs6IDAuMDAyCiAgICAgICAgfQogICAgICBdLAogICAgICAmcXVvdDtnYXNfbGltaXQmcXVvdDs6IDEwMDAwMAogICAgfQogIH0sCiAgLy8gQWRkaXRpb25hbCBTaWduZXJEYXRhLgogICZxdW90O2NoYWluX2lkJnF1b3Q7OiAmcXVvdDtzaW1hcHAtMSZxdW90OywKICAmcXVvdDthY2NvdW50X251bWJlciZxdW90OzogMTAKfQp9Cg=="}}),e._v(" "),g("p",[e._v("SIGN_MODE_TEXTUAL for 1st signer "),g("code",[e._v("cosmos1...abc")]),e._v(":")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Q2hhaW4gSUQ6IHNpbWFwcC0xCkFjY291bnQgbnVtYmVyOiAxMAoqUHVibGljIEtleTogaVEuLi49PQpTZXF1ZW5jZTogMgpUaGlzIHRyYW5zYWN0aW9uIGhhcyAyIG1lc3NhZ2VzOgpNZXNzYWdlICgxLzIpOiBiYW5rIHYxYmV0YTEgc2VuZCBjb2lucwpGcm9tOiBjb3Ntb3MxLi4uYWJjClRvOiBjb3Ntb3MxLi4uZGVmCkFtb3VudDogMTAgYXRvbQpNZXNzYWdlICgyLzIpOiBnb3YgdjEgc3VibWl0IHByb3Bvc2FsCk1lc3NhZ2VzOiAyIE1lc3NhZ2VzCiZndDsgTWVzc2FnZSAoMS8yKTogYmFuayB2MWJldGExIHNlbmQgY29pbnMKJmd0OyBGcm9tOiBjb3Ntb3MxLi4uamtsCiZndDsgVG86IGNvc21vczEuLi5tbm8KJmd0OyBBbW91bnQ6IDIwIGF0b20KJmd0OyBNZXNzYWdlICgyLzIpOiBhdXRoeiB2MWJldGEgZXhlYwomZ3Q7IEdyYW50ZWU6IGNvc21vczEuLi5wcXIKJmd0OyBNc2dzOiAyIE1zZ3MKJmd0OyZndDsgTXNnICgxLzIpOiBiYW5rIHYxYmV0YTEgc2VuZCBjb2lucwomZ3Q7Jmd0OyBGcm9tOiBjb3Ntb3MxLi4uc3R1CiZndDsmZ3Q7IFRvOiBjb3Ntb3MxLi4udnd4CiZndDsmZ3Q7IEFtb3VudDogMzAgYXRvbQomZ3Q7Jmd0OyBNc2cgKDIvMik6IGJhbmsgdjFiZXRhMSBzZW5kIGNvaW5zCiZndDsmZ3Q7IEZyb206IGNvc21vczEuLi5hYmMKJmd0OyZndDsgVG86IGNvc21vczEuLi5kZWYKJmd0OyZndDsgQW1vdW50OiA0MCBhdG9tCiZndDsgRW5kIG9mIE1zZ3MKRW5kIG9mIHRyYW5zYWN0aW9uIG1lc3NhZ2VzClByb3Bvc2VyOiBjb3Ntb3MxLi4uZ2hpCkluaXRpYWwgRGVwb3NpdDogMTAwLjAxIGF0b20KRW5kIG9mIHRyYW5zYWN0aW9uIG1lc3NhZ2VzCkZlZTogMC4wMDIgYXRvbQoqR2FzOiAxMDAnMDAwCipUaGlzIHRyYW5zYWN0aW9uIGhhcyAxIG90aGVyIHNpZ25lcjoKKlNpZ25lciAoMi8yKToKKlB1YmxpYyBLZXk6IGlSLi4uPT0KKlNpZ24gbW9kZTogRGlyZWN0CipTZXF1ZW5jZTogNDIKKkVuZCBvZiBvdGhlciBzaWduZXJzCg=="}}),e._v(" "),g("h2",{attrs:{id:"consequences"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),g("h3",{attrs:{id:"backwards-compatibility"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[e._v("#")]),e._v(" Backwards Compatibility")]),e._v(" "),g("p",[e._v("SIGN_MODE_TEXTUAL is purely additive, and doesn't break any backwards compatibility with other sign modes.")]),e._v(" "),g("h3",{attrs:{id:"positive"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),g("ul",[g("li",[e._v("Human-friendly way of signing in hardware devices.")]),e._v(" "),g("li",[e._v("Once SIGN_MODE_TEXTUAL is shipped, SIGN_MODE_LEGACY_AMINO_JSON can be deprecated and removed. On the longer term, once the ecosystem has totally migrated, Amino can be totally removed.")])]),e._v(" "),g("h3",{attrs:{id:"negative"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),g("ul",[g("li",[e._v("Some fields are still encoded in non-human-readable ways, such as public keys in base64.")]),e._v(" "),g("li",[e._v("New ledger app needs to be released, still unclear")])]),e._v(" "),g("h3",{attrs:{id:"neutral"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),g("ul",[g("li",[e._v("If the transaction is complex, the string array can be arbitrarily long, and some users might just skip some screens and blind sign.")])]),e._v(" "),g("h2",{attrs:{id:"further-discussions"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#further-discussions"}},[e._v("#")]),e._v(" Further Discussions")]),e._v(" "),g("ul",[g("li",[e._v("Some details on value renderers need to be polished, see "),g("RouterLink",{attrs:{to:"/architecture/adr-050-sign-mode-textual-annex1.html"}},[e._v("Annex 1")]),e._v(".")],1),e._v(" "),g("li",[e._v("Are ledger apps able to support both SIGN_MODE_LEGACY_AMINO_JSON and SIGN_MODE_TEXTUAL at the same time?")]),e._v(" "),g("li",[e._v("Open question: should we add a Protobuf field option to allow app developers to overwrite the textual representation of certain Protobuf fields and message? This would be similar to Ethereum's "),g("a",{attrs:{href:"https://github.com/ethereum/EIPs/pull/4430",target:"_blank",rel:"noopener noreferrer"}},[e._v("EIP4430"),g("OutboundLink")],1),e._v(", where the contract developer decides on the textual representation.")]),e._v(" "),g("li",[e._v("Internationalization.")])]),e._v(" "),g("h2",{attrs:{id:"references"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),g("ul",[g("li",[g("p",[g("RouterLink",{attrs:{to:"/architecture/adr-050-sign-mode-textual-annex1.html"}},[e._v("Annex 1")])],1)]),e._v(" "),g("li",[g("p",[e._v("Initial discussion: https://github.com/cosmos/cosmos-sdk/issues/6513")])]),e._v(" "),g("li",[g("p",[e._v("Living document used in the working group: https://hackmd.io/fsZAO-TfT0CKmLDtfMcKeA?both")])]),e._v(" "),g("li",[g("p",[e._v("Working group meeting notes: https://hackmd.io/7RkGfv_rQAaZzEigUYhcXw")])]),e._v(" "),g("li",[g("p",[e._v('Ethereum\'s "Described Transactions" https://github.com/ethereum/EIPs/pull/4430')])])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);