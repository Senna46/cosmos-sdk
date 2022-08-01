(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{706:function(t,e,o){"use strict";o.r(e);var s=o(1),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"gov"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#gov"}},[t._v("#")]),t._v(" "),o("code",[t._v("gov")])]),t._v(" "),o("h2",{attrs:{id:"abstract"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),o("p",[t._v("This paper specifies the Governance module of the Cosmos-SDK, which was first\ndescribed in the "),o("a",{attrs:{href:"https://cosmos.network/about/whitepaper",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cosmos Whitepaper"),o("OutboundLink")],1),t._v(" in\nJune 2016.")]),t._v(" "),o("p",[t._v("The module enables Cosmos-SDK based blockchain to support an on-chain governance\nsystem. In this system, holders of the native staking token of the chain can vote\non proposals on a 1 token 1 vote basis. Next is a list of features the module\ncurrently supports:")]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("Proposal submission:")]),t._v(" Users can submit proposals with a deposit. Once the\nminimum deposit is reached, proposal enters voting period")]),t._v(" "),o("li",[o("strong",[t._v("Vote:")]),t._v(" Participants can vote on proposals that reached MinDeposit")]),t._v(" "),o("li",[o("strong",[t._v("Inheritance and penalties:")]),t._v(" Delegators inherit their validator's vote if\nthey don't vote themselves.")]),t._v(" "),o("li",[o("strong",[t._v("Claiming deposit:")]),t._v(" Users that deposited on proposals can recover their\ndeposits if the proposal was accepted OR if the proposal never entered voting period.")])]),t._v(" "),o("p",[t._v("This module will be used in the Cosmos Hub, the first Hub in the Cosmos network.\nFeatures that may be added in the future are described in "),o("RouterLink",{attrs:{to:"/modules/gov/05_future_improvements.html"}},[t._v("Future Improvements")]),t._v(".")],1),t._v(" "),o("h2",{attrs:{id:"contents"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[t._v("#")]),t._v(" Contents")]),t._v(" "),o("p",[t._v("The following specification uses "),o("em",[t._v("ATOM")]),t._v(" as the native staking token. The module\ncan be adapted to any Proof-Of-Stake blockchain by replacing "),o("em",[t._v("ATOM")]),t._v(" with the native\nstaking token of the chain.")]),t._v(" "),o("ol",[o("li",[o("strong",[o("RouterLink",{attrs:{to:"/modules/gov/01_concepts.html"}},[t._v("Concepts")])],1),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/modules/gov/01_concepts.html#proposal-submission"}},[t._v("Proposal submission")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/modules/gov/01_concepts.html#Deposit"}},[t._v("Deposit")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/modules/gov/01_concepts.html#vote"}},[t._v("Vote")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/modules/gov/01_concepts.html#software-upgrade"}},[t._v("Software Upgrade")])],1)])]),t._v(" "),o("li",[o("strong",[o("RouterLink",{attrs:{to:"/modules/gov/02_state.html"}},[t._v("State")])],1),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/modules/gov/02_state.html#parameters-and-base-types"}},[t._v("Parameters and base types")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/modules/gov/02_state.html#deposit"}},[t._v("Deposit")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/modules/gov/02_state.html#validatorgovinfo"}},[t._v("ValidatorGovInfo")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/modules/gov/02_state.html#proposals"}},[t._v("Proposals")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/modules/gov/02_state.html#stores"}},[t._v("Stores")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/modules/gov/02_state.html#proposal-processing-queue"}},[t._v("Proposal Processing Queue")])],1)])]),t._v(" "),o("li",[o("strong",[o("RouterLink",{attrs:{to:"/modules/gov/03_messages.html"}},[t._v("Messages")])],1),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/modules/gov/03_messages.html#proposal-submission"}},[t._v("Proposal Submission")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/modules/gov/03_messages.html#deposit"}},[t._v("Deposit")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/modules/gov/03_messages.html#vote"}},[t._v("Vote")])],1)])]),t._v(" "),o("li",[o("strong",[o("RouterLink",{attrs:{to:"/modules/gov/04_events.html"}},[t._v("Events")])],1),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/modules/gov/04_events.html#endblocker"}},[t._v("EndBlocker")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/modules/gov/04_events.html#handlers"}},[t._v("Handlers")])],1)])]),t._v(" "),o("li",[o("strong",[o("RouterLink",{attrs:{to:"/modules/gov/05_future_improvements.html"}},[t._v("Future Improvements")])],1)]),t._v(" "),o("li",[o("strong",[o("RouterLink",{attrs:{to:"/modules/gov/06_params.html"}},[t._v("Parameters")])],1)]),t._v(" "),o("li",[o("strong",[o("RouterLink",{attrs:{to:"/modules/gov/07_client.html"}},[t._v("Client")])],1),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/modules/gov/07_client.html#cli"}},[t._v("CLI")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/modules/gov/07_client.html#grpc"}},[t._v("gRPC")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/modules/gov/07_client.html#rest"}},[t._v("REST")])],1)])])])])}),[],!1,null,null,null);e.default=r.exports}}]);