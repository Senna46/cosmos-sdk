(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{784:function(e,t,s){"use strict";s.r(t);var a=s(1),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"concepts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#concepts"}},[e._v("#")]),e._v(" Concepts")]),e._v(" "),s("p",[s("strong",[e._v("Note:")]),e._v(" The auth module is different from the "),s("RouterLink",{attrs:{to:"/modules/modules/authz/"}},[e._v("authz module")]),e._v(".")],1),e._v(" "),s("p",[e._v("The differences are:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("auth")]),e._v(" - authentication of accounts and transactions for Cosmos SDK applications and is responsible for specifying the base transaction and account types.")]),e._v(" "),s("li",[s("code",[e._v("authz")]),e._v(" - authorization for accounts to perform actions on behalf of other accounts and enables a granter to grant authorizations to a grantee that allows the grantee to execute messages on behalf of the granter.")])]),e._v(" "),s("h2",{attrs:{id:"gas-fees"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gas-fees"}},[e._v("#")]),e._v(" Gas & Fees")]),e._v(" "),s("p",[e._v("Fees serve two purposes for an operator of the network.")]),e._v(" "),s("p",[e._v("Fees limit the growth of the state stored by every full node and allow for\ngeneral purpose censorship of transactions of little economic value. Fees\nare best suited as an anti-spam mechanism where validators are disinterested in\nthe use of the network and identities of users.")]),e._v(" "),s("p",[e._v("Fees are determined by the gas limits and gas prices transactions provide, where\n"),s("code",[e._v("fees = ceil(gasLimit * gasPrices)")]),e._v(". Txs incur gas costs for all state reads/writes,\nsignature verification, as well as costs proportional to the tx size. Operators\nshould set minimum gas prices when starting their nodes. They must set the unit\ncosts of gas in each token denomination they wish to support:")]),e._v(" "),s("p",[s("code",[e._v("simd start ... --minimum-gas-prices=0.00001stake;0.05photinos")])]),e._v(" "),s("p",[e._v("When adding transactions to mempool or gossipping transactions, validators check\nif the transaction's gas prices, which are determined by the provided fees, meet\nany of the validator's minimum gas prices. In other words, a transaction must\nprovide a fee of at least one denomination that matches a validator's minimum\ngas price.")]),e._v(" "),s("p",[e._v("Tendermint does not currently provide fee based mempool prioritization, and fee\nbased mempool filtering is local to node and not part of consensus. But with\nminimum gas prices set, such a mechanism could be implemented by node operators.")]),e._v(" "),s("p",[e._v("Because the market value for tokens will fluctuate, validators are expected to\ndynamically adjust their minimum gas prices to a level that would encourage the\nuse of the network.")])])}),[],!1,null,null,null);t.default=o.exports}}]);