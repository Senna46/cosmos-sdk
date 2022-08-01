(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{682:function(t,e,a){"use strict";a.r(e);var n=a(1),i=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"concepts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#concepts"}},[t._v("#")]),t._v(" Concepts")]),t._v(" "),a("h2",{attrs:{id:"states"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#states"}},[t._v("#")]),t._v(" States")]),t._v(" "),a("p",[t._v("At any given time, there are any number of validators registered in the state\nmachine. Each block, the top "),a("code",[t._v("MaxValidators")]),t._v(" (defined by "),a("code",[t._v("x/staking")]),t._v(") validators\nwho are not jailed become "),a("em",[t._v("bonded")]),t._v(", meaning that they may propose and vote on\nblocks. Validators who are "),a("em",[t._v("bonded")]),t._v(" are "),a("em",[t._v("at stake")]),t._v(", meaning that part or all of\ntheir stake and their delegators' stake is at risk if they commit a protocol fault.")]),t._v(" "),a("p",[t._v("For each of these validators we keep a "),a("code",[t._v("ValidatorSigningInfo")]),t._v(" record that contains\ninformation partaining to validator's liveness and other infraction related\nattributes.")]),t._v(" "),a("h2",{attrs:{id:"tombstone-caps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tombstone-caps"}},[t._v("#")]),t._v(" Tombstone Caps")]),t._v(" "),a("p",[t._v("In order to mitigate the impact of initially likely categories of non-malicious\nprotocol faults, the Cosmos Hub implements for each validator\na "),a("em",[t._v("tombstone")]),t._v(" cap, which only allows a validator to be slashed once for a double\nsign fault. For example, if you misconfigure your HSM and double-sign a bunch of\nold blocks, you'll only be punished for the first double-sign (and then immediately tombstombed). This will still be quite expensive and desirable to avoid, but tombstone caps\nsomewhat blunt the economic impact of unintentional misconfiguration.")]),t._v(" "),a("p",[t._v('Liveness faults do not have caps, as they can\'t stack upon each other. Liveness bugs are "detected" as soon as the infraction occurs, and the validators are immediately put in jail, so it is not possible for them to commit multiple liveness faults without unjailing in between.')]),t._v(" "),a("h2",{attrs:{id:"infraction-timelines"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#infraction-timelines"}},[t._v("#")]),t._v(" Infraction Timelines")]),t._v(" "),a("p",[t._v("To illustrate how the "),a("code",[t._v("x/slashing")]),t._v(" module handles submitted evidence through\nTendermint consensus, consider the following examples:")]),t._v(" "),a("p",[a("strong",[t._v("Definitions")]),t._v(":")]),t._v(" "),a("p",[a("em",[t._v("[")]),t._v(" : timeline start"),a("br"),t._v(" "),a("em",[t._v("]")]),t._v(" : timeline end"),a("br"),t._v(" "),a("em",[t._v("C"),a("sub",[t._v("n")])]),t._v(" : infraction "),a("code",[t._v("n")]),t._v(" committed"),a("br"),t._v(" "),a("em",[t._v("D"),a("sub",[t._v("n")])]),t._v(" : infraction "),a("code",[t._v("n")]),t._v(" discovered"),a("br"),t._v(" "),a("em",[t._v("V"),a("sub",[t._v("b")])]),t._v(" : validator bonded"),a("br"),t._v(" "),a("em",[t._v("V"),a("sub",[t._v("u")])]),t._v(" : validator unbonded")]),t._v(" "),a("h3",{attrs:{id:"single-double-sign-infraction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#single-double-sign-infraction"}},[t._v("#")]),t._v(" Single Double Sign Infraction")]),t._v(" "),a("p",[t._v("[----------C"),a("sub",[t._v("1")]),t._v("----D"),a("sub",[t._v("1")]),t._v(",V"),a("sub",[t._v("u")]),t._v("-----]")]),t._v(" "),a("p",[t._v("A single infraction is committed then later discovered, at which point the\nvalidator is unbonded and slashed at the full amount for the infraction.")]),t._v(" "),a("h3",{attrs:{id:"multiple-double-sign-infractions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multiple-double-sign-infractions"}},[t._v("#")]),t._v(" Multiple Double Sign Infractions")]),t._v(" "),a("p",[t._v("[----------C"),a("sub",[t._v("1")]),t._v("--C"),a("sub",[t._v("2")]),t._v("---C"),a("sub",[t._v("3")]),t._v("---D"),a("sub",[t._v("1")]),t._v(",D"),a("sub",[t._v("2")]),t._v(",D"),a("sub",[t._v("3")]),t._v("V"),a("sub",[t._v("u")]),t._v("-----]")]),t._v(" "),a("p",[t._v("Multiple infractions are committed and then later discovered, at which point the\nvalidator is jailed and slashed for only one infraction. Because the validator\nis also tombstoned, they can not rejoin the validator set.")])])}),[],!1,null,null,null);e.default=i.exports}}]);