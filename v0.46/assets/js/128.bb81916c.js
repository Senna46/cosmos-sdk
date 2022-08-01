(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{626:function(e,t,a){"use strict";a.r(t);var d=a(1),o=Object(d.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"module-interfaces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module-interfaces"}},[e._v("#")]),e._v(" Module Interfaces")]),e._v(" "),a("p",{attrs:{synopsis:""}},[e._v("This document details how to build CLI and REST interfaces for a module. Examples from various Cosmos SDK modules are included.")]),e._v(" "),a("h2",{attrs:{id:"prerequisite-readings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisite-readings"}},[e._v("#")]),e._v(" Prerequisite Readings")]),e._v(" "),a("ul",[a("li",{attrs:{prereq:""}},[a("RouterLink",{attrs:{to:"/building-modules/intro.html"}},[e._v("Building Modules Intro")])],1)]),e._v(" "),a("h2",{attrs:{id:"cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cli"}},[e._v("#")]),e._v(" CLI")]),e._v(" "),a("p",[e._v("One of the main interfaces for an application is the "),a("RouterLink",{attrs:{to:"/core/cli.html"}},[e._v("command-line interface")]),e._v(". This entrypoint adds commands from the application's modules enabling end-users to create "),a("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#messages"}},[a("strong",[e._v("messages")])]),e._v(" wrapped in transactions and "),a("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#queries"}},[a("strong",[e._v("queries")])]),e._v(". The CLI files are typically found in the module's "),a("code",[e._v("./client/cli")]),e._v(" folder.")],1),e._v(" "),a("h3",{attrs:{id:"transaction-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transaction-commands"}},[e._v("#")]),e._v(" Transaction Commands")]),e._v(" "),a("p",[e._v("In order to create messages that trigger state changes, end-users must create "),a("RouterLink",{attrs:{to:"/core/transactions.html"}},[e._v("transactions")]),e._v(" that wrap and deliver the messages. A transaction command creates a transaction that includes one or more messages.")],1),e._v(" "),a("p",[e._v("Transaction commands typically have their own "),a("code",[e._v("tx.go")]),e._v(" file that lives within the module's "),a("code",[e._v("./client/cli")]),e._v(" folder. The commands are specified in getter functions and the name of the function should include the name of the command.")]),e._v(" "),a("p",[e._v("Here is an example from the "),a("code",[e._v("x/bank")]),e._v(" module:")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gTmV3U2VuZFR4Q21kIHJldHVybnMgYSBDTEkgY29tbWFuZCBoYW5kbGVyIGZvciBjcmVhdGluZyBhIE1zZ1NlbmQgdHJhbnNhY3Rpb24uCmZ1bmMgTmV3U2VuZFR4Q21kKCkgKmNvYnJhLkNvbW1hbmQgewoJY21kIDo9ICZhbXA7Y29icmEuQ29tbWFuZHsKCQlVc2U6ICAgJnF1b3Q7c2VuZCBbZnJvbV9rZXlfb3JfYWRkcmVzc10gW3RvX2FkZHJlc3NdIFthbW91bnRdJnF1b3Q7LAoJCVNob3J0OiAmcXVvdDtTZW5kIGZ1bmRzIGZyb20gb25lIGFjY291bnQgdG8gYW5vdGhlci4mcXVvdDssCgkJTG9uZzogYFNlbmQgZnVuZHMgZnJvbSBvbmUgYWNjb3VudCB0byBhbm90aGVyLgpOb3RlLCB0aGUgJy0tZnJvbScgZmxhZyBpcyBpZ25vcmVkIGFzIGl0IGlzIGltcGxpZWQgZnJvbSBbZnJvbV9rZXlfb3JfYWRkcmVzc10uCldoZW4gdXNpbmcgJy0tZHJ5LXJ1bicgYSBrZXkgbmFtZSBjYW5ub3QgYmUgdXNlZCwgb25seSBhIGJlY2gzMiBhZGRyZXNzLgpgLAoJCUFyZ3M6IGNvYnJhLkV4YWN0QXJncygzKSwKCQlSdW5FOiBmdW5jKGNtZCAqY29icmEuQ29tbWFuZCwgYXJncyBbXXN0cmluZykgZXJyb3IgewoJCQljbWQuRmxhZ3MoKS5TZXQoZmxhZ3MuRmxhZ0Zyb20sIGFyZ3NbMF0pCgkJCWNsaWVudEN0eCwgZXJyIDo9IGNsaWVudC5HZXRDbGllbnRUeENvbnRleHQoY21kKQoJCQlpZiBlcnIgIT0gbmlsIHsKCQkJCXJldHVybiBlcnIKCQkJfQoKCQkJdG9BZGRyLCBlcnIgOj0gc2RrLkFjY0FkZHJlc3NGcm9tQmVjaDMyKGFyZ3NbMV0pCgkJCWlmIGVyciAhPSBuaWwgewoJCQkJcmV0dXJuIGVycgoJCQl9CgoJCQljb2lucywgZXJyIDo9IHNkay5QYXJzZUNvaW5zTm9ybWFsaXplZChhcmdzWzJdKQoJCQlpZiBlcnIgIT0gbmlsIHsKCQkJCXJldHVybiBlcnIKCQkJfQoKCQkJbXNnIDo9IHR5cGVzLk5ld01zZ1NlbmQoY2xpZW50Q3R4LkdldEZyb21BZGRyZXNzKCksIHRvQWRkciwgY29pbnMpCgoJCQlyZXR1cm4gdHguR2VuZXJhdGVPckJyb2FkY2FzdFR4Q0xJKGNsaWVudEN0eCwgY21kLkZsYWdzKCksIG1zZykKCQl9LAoJfQoKCWZsYWdzLkFkZFR4RmxhZ3NUb0NtZChjbWQpCgoJcmV0dXJuIGNtZAp9"}})],1),e._v(" "),a("p",[e._v("In the example, "),a("code",[e._v("NewSendTxCmd()")]),e._v(" creates and returns the transaction command for a transaction that wraps and delivers "),a("code",[e._v("MsgSend")]),e._v(". "),a("code",[e._v("MsgSend")]),e._v(" is the message used to send tokens from one account to another.")]),e._v(" "),a("p",[e._v("In general, the getter function does the following:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Constructs the command:")]),e._v(" Read the "),a("a",{attrs:{href:"https://pkg.go.dev/github.com/spf13/cobra",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cobra Documentation"),a("OutboundLink")],1),e._v(" for more detailed information on how to create commands.\n"),a("ul",[a("li",[a("strong",[e._v("Use:")]),e._v(" Specifies the format of the user input required to invoke the command. In the example above, "),a("code",[e._v("send")]),e._v(" is the name of the transaction command and "),a("code",[e._v("[from_key_or_address]")]),e._v(", "),a("code",[e._v("[to_address]")]),e._v(", and "),a("code",[e._v("[amount]")]),e._v(" are the arguments.")]),e._v(" "),a("li",[a("strong",[e._v("Args:")]),e._v(" The number of arguments the user provides. In this case, there are exactly three: "),a("code",[e._v("[from_key_or_address]")]),e._v(", "),a("code",[e._v("[to_address]")]),e._v(", and "),a("code",[e._v("[amount]")]),e._v(".")]),e._v(" "),a("li",[a("strong",[e._v("Short and Long:")]),e._v(" Descriptions for the command. A "),a("code",[e._v("Short")]),e._v(" description is expected. A "),a("code",[e._v("Long")]),e._v(" description can be used to provide additional information that is displayed when a user adds the "),a("code",[e._v("--help")]),e._v(" flag.")]),e._v(" "),a("li",[a("strong",[e._v("RunE:")]),e._v(" Defines a function that can return an error. This is the function that is called when the command is executed. This function encapsulates all of the logic to create a new transaction.\n"),a("ul",[a("li",[e._v("The function typically starts by getting the "),a("code",[e._v("clientCtx")]),e._v(", which can be done with "),a("code",[e._v("client.GetClientTxContext(cmd)")]),e._v(". The "),a("code",[e._v("clientCtx")]),e._v(" contains information relevant to transaction handling, including information about the user. In this example, the "),a("code",[e._v("clientCtx")]),e._v(" is used to retrieve the address of the sender by calling "),a("code",[e._v("clientCtx.GetFromAddress()")]),e._v(".")]),e._v(" "),a("li",[e._v("If applicable, the command's arguments are parsed. In this example, the arguments "),a("code",[e._v("[to_address]")]),e._v(" and "),a("code",[e._v("[amount]")]),e._v(" are both parsed.")]),e._v(" "),a("li",[e._v("A "),a("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html"}},[e._v("message")]),e._v(" is created using the parsed arguments and information from the "),a("code",[e._v("clientCtx")]),e._v(". The constructor function of the message type is called directly. In this case, "),a("code",[e._v("types.NewMsgSend(fromAddr, toAddr, amount)")]),e._v(". Its good practice to call "),a("RouterLink",{attrs:{to:"/basics/tx-lifecycle.html#ValidateBasic"}},[a("code",[e._v("msg.ValidateBasic()")])]),e._v(" and other validation methods before broadcasting the message.")],1),e._v(" "),a("li",[e._v("Depending on what the user wants, the transaction is either generated offline or signed and broadcasted to the preconfigured node using "),a("code",[e._v("tx.GenerateOrBroadcastTxCLI(clientCtx, flags, msg)")]),e._v(".")])])])])]),e._v(" "),a("li",[a("strong",[e._v("Adds transaction flags:")]),e._v(" All transaction commands must add a set of transaction "),a("a",{attrs:{href:"#flags"}},[e._v("flags")]),e._v(". The transaction flags are used to collect additional information from the user (e.g. the amount of fees the user is willing to pay). The transaction flags are added to the constructed command using "),a("code",[e._v("AddTxFlagsToCmd(cmd)")]),e._v(".")]),e._v(" "),a("li",[a("strong",[e._v("Returns the command:")]),e._v(" Finally, the transaction command is returned.")])]),e._v(" "),a("p",[e._v("Each module must implement "),a("code",[e._v("NewTxCmd()")]),e._v(", which aggregates all of the transaction commands of the module. Here is an example from the "),a("code",[e._v("x/bank")]),e._v(" module:")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gTmV3VHhDbWQgcmV0dXJucyBhIHJvb3QgQ0xJIGNvbW1hbmQgaGFuZGxlciBmb3IgYWxsIHgvYmFuayB0cmFuc2FjdGlvbiBjb21tYW5kcy4KZnVuYyBOZXdUeENtZCgpICpjb2JyYS5Db21tYW5kIHsKCXR4Q21kIDo9ICZhbXA7Y29icmEuQ29tbWFuZHsKCQlVc2U6ICAgICAgICAgICAgICAgICAgICAgICAgdHlwZXMuTW9kdWxlTmFtZSwKCQlTaG9ydDogICAgICAgICAgICAgICAgICAgICAgJnF1b3Q7QmFuayB0cmFuc2FjdGlvbiBzdWJjb21tYW5kcyZxdW90OywKCQlEaXNhYmxlRmxhZ1BhcnNpbmc6ICAgICAgICAgdHJ1ZSwKCQlTdWdnZXN0aW9uc01pbmltdW1EaXN0YW5jZTogMiwKCQlSdW5FOiAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50LlZhbGlkYXRlQ21kLAoJfQoKCXR4Q21kLkFkZENvbW1hbmQoCgkJTmV3U2VuZFR4Q21kKCksCgkJTmV3TXVsdGlTZW5kVHhDbWQoKSwKCSkKCglyZXR1cm4gdHhDbWQKfQ=="}})],1),e._v(" "),a("p",[e._v("Each module must also implement the "),a("code",[e._v("GetTxCmd()")]),e._v(" method for "),a("code",[e._v("AppModuleBasic")]),e._v(" that simply returns "),a("code",[e._v("NewTxCmd()")]),e._v(". This allows the root command to easily aggregate all of the transaction commands for each module. Here is an example:")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gR2V0VHhDbWQgcmV0dXJucyB0aGUgcm9vdCB0eCBjb21tYW5kIGZvciB0aGUgYmFuayBtb2R1bGUuCmZ1bmMgKEFwcE1vZHVsZUJhc2ljKSBHZXRUeENtZCgpICpjb2JyYS5Db21tYW5kIHsKCXJldHVybiBjbGkuTmV3VHhDbWQoKQp9"}})],1),e._v(" "),a("h3",{attrs:{id:"query-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-commands"}},[e._v("#")]),e._v(" Query Commands")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#queries"}},[e._v("Queries")]),e._v(" allow users to gather information about the application or network state; they are routed by the application and processed by the module in which they are defined. Query commands typically have their own "),a("code",[e._v("query.go")]),e._v(" file in the module's "),a("code",[e._v("./client/cli")]),e._v(" folder. Like transaction commands, they are specified in getter functions. Here is an example of a query command from the "),a("code",[e._v("x/auth")]),e._v(" module:")],1),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gR2V0QWNjb3VudENtZCByZXR1cm5zIGEgcXVlcnkgYWNjb3VudCB0aGF0IHdpbGwgZGlzcGxheSB0aGUgc3RhdGUgb2YgdGhlCi8vIGFjY291bnQgYXQgYSBnaXZlbiBhZGRyZXNzLgpmdW5jIEdldEFjY291bnRDbWQoKSAqY29icmEuQ29tbWFuZCB7CgljbWQgOj0gJmFtcDtjb2JyYS5Db21tYW5kewoJCVVzZTogICAmcXVvdDthY2NvdW50IFthZGRyZXNzXSZxdW90OywKCQlTaG9ydDogJnF1b3Q7UXVlcnkgZm9yIGFjY291bnQgYnkgYWRkcmVzcyZxdW90OywKCQlBcmdzOiAgY29icmEuRXhhY3RBcmdzKDEpLAoJCVJ1bkU6IGZ1bmMoY21kICpjb2JyYS5Db21tYW5kLCBhcmdzIFtdc3RyaW5nKSBlcnJvciB7CgkJCWNsaWVudEN0eCwgZXJyIDo9IGNsaWVudC5HZXRDbGllbnRRdWVyeUNvbnRleHQoY21kKQoJCQlpZiBlcnIgIT0gbmlsIHsKCQkJCXJldHVybiBlcnIKCQkJfQoJCQlrZXksIGVyciA6PSBzZGsuQWNjQWRkcmVzc0Zyb21CZWNoMzIoYXJnc1swXSkKCQkJaWYgZXJyICE9IG5pbCB7CgkJCQlyZXR1cm4gZXJyCgkJCX0KCgkJCXF1ZXJ5Q2xpZW50IDo9IHR5cGVzLk5ld1F1ZXJ5Q2xpZW50KGNsaWVudEN0eCkKCQkJcmVzLCBlcnIgOj0gcXVlcnlDbGllbnQuQWNjb3VudChjbWQuQ29udGV4dCgpLCAmYW1wO3R5cGVzLlF1ZXJ5QWNjb3VudFJlcXVlc3R7QWRkcmVzczoga2V5LlN0cmluZygpfSkKCQkJaWYgZXJyICE9IG5pbCB7CgkJCQlub2RlLCBlcnIyIDo9IGNsaWVudEN0eC5HZXROb2RlKCkKCQkJCWlmIGVycjIgIT0gbmlsIHsKCQkJCQlyZXR1cm4gZXJyMgoJCQkJfQoJCQkJc3RhdHVzLCBlcnIyIDo9IG5vZGUuU3RhdHVzKGNvbnRleHQuQmFja2dyb3VuZCgpKQoJCQkJaWYgZXJyMiAhPSBuaWwgewoJCQkJCXJldHVybiBlcnIyCgkJCQl9CgkJCQljYXRjaGluZ1VwIDo9IHN0YXR1cy5TeW5jSW5mby5DYXRjaGluZ1VwCgkJCQlpZiAhY2F0Y2hpbmdVcCB7CgkJCQkJcmV0dXJuIGVycm9ycy5XcmFwZihlcnIsICZxdW90O3lvdXIgbm9kZSBtYXkgYmUgc3luY2luZywgcGxlYXNlIGNoZWNrIG5vZGUgc3RhdHVzIHVzaW5nIGAvc3RhdHVzYCZxdW90OykKCQkJCX0KCQkJCXJldHVybiBlcnIKCQkJfQoKCQkJcmV0dXJuIGNsaWVudEN0eC5QcmludFByb3RvKHJlcy5BY2NvdW50KQoJCX0sCgl9CgoJZmxhZ3MuQWRkUXVlcnlGbGFnc1RvQ21kKGNtZCkKCglyZXR1cm4gY21kCn0="}})],1),e._v(" "),a("p",[e._v("In the example, "),a("code",[e._v("GetAccountCmd()")]),e._v(" creates and returns a query command that returns the state of an account based on the provided account address.")]),e._v(" "),a("p",[e._v("In general, the getter function does the following:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Constructs the command:")]),e._v(" Read the "),a("a",{attrs:{href:"https://pkg.go.dev/github.com/spf13/cobra",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cobra Documentation"),a("OutboundLink")],1),e._v(" for more detailed information on how to create commands.\n"),a("ul",[a("li",[a("strong",[e._v("Use:")]),e._v(" Specifies the format of the user input required to invoke the command. In the example above, "),a("code",[e._v("account")]),e._v(" is the name of the query command and "),a("code",[e._v("[address]")]),e._v(" is the argument.")]),e._v(" "),a("li",[a("strong",[e._v("Args:")]),e._v(" The number of arguments the user provides. In this case, there is exactly one: "),a("code",[e._v("[address]")]),e._v(".")]),e._v(" "),a("li",[a("strong",[e._v("Short and Long:")]),e._v(" Descriptions for the command. A "),a("code",[e._v("Short")]),e._v(" description is expected. A "),a("code",[e._v("Long")]),e._v(" description can be used to provide additional information that is displayed when a user adds the "),a("code",[e._v("--help")]),e._v(" flag.")]),e._v(" "),a("li",[a("strong",[e._v("RunE:")]),e._v(" Defines a function that can return an error. This is the function that is called when the command is executed. This function encapsulates all of the logic to create a new query.\n"),a("ul",[a("li",[e._v("The function typically starts by getting the "),a("code",[e._v("clientCtx")]),e._v(", which can be done with "),a("code",[e._v("client.GetClientQueryContext(cmd)")]),e._v(". The "),a("code",[e._v("clientCtx")]),e._v(" contains information relevant to query handling.")]),e._v(" "),a("li",[e._v("If applicable, the command's arguments are parsed. In this example, the argument "),a("code",[e._v("[address]")]),e._v(" is parsed.")]),e._v(" "),a("li",[e._v("A new "),a("code",[e._v("queryClient")]),e._v(" is initialized using "),a("code",[e._v("NewQueryClient(clientCtx)")]),e._v(". The "),a("code",[e._v("queryClient")]),e._v(" is then used to call the appropriate "),a("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#grpc-queries"}},[e._v("query")]),e._v(".")],1),e._v(" "),a("li",[e._v("The "),a("code",[e._v("clientCtx.PrintProto")]),e._v(" method is used to format the "),a("code",[e._v("proto.Message")]),e._v(" object so that the results can be printed back to the user.")])])])])]),e._v(" "),a("li",[a("strong",[e._v("Adds query flags:")]),e._v(" All query commands must add a set of query "),a("a",{attrs:{href:"#flags"}},[e._v("flags")]),e._v(". The query flags are added to the constructed command using "),a("code",[e._v("AddQueryFlagsToCmd(cmd)")]),e._v(".")]),e._v(" "),a("li",[a("strong",[e._v("Returns the command:")]),e._v(" Finally, the query command is returned.")])]),e._v(" "),a("p",[e._v("Each module must implement "),a("code",[e._v("GetQueryCmd()")]),e._v(", which aggregates all of the query commands of the module. Here is an example from the "),a("code",[e._v("x/auth")]),e._v(" module:")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CXR5cGVIYXNoICAgPSAmcXVvdDtoYXNoJnF1b3Q7Cgl0eXBlQWNjU2VxID0gJnF1b3Q7YWNjX3NlcSZxdW90OwoJdHlwZVNpZyAgICA9ICZxdW90O3NpZ25hdHVyZSZxdW90OwoKCWV2ZW50Rm9ybWF0ID0gJnF1b3Q7e2V2ZW50VHlwZX0ue2V2ZW50QXR0cmlidXRlfT17dmFsdWV9JnF1b3Q7CikKCi8vIEdldFF1ZXJ5Q21kIHJldHVybnMgdGhlIHRyYW5zYWN0aW9uIGNvbW1hbmRzIGZvciB0aGlzIG1vZHVsZQpmdW5jIEdldFF1ZXJ5Q21kKCkgKmNvYnJhLkNvbW1hbmQgewoJY21kIDo9ICZhbXA7Y29icmEuQ29tbWFuZHsKCQlVc2U6ICAgICAgICAgICAgICAgICAgICAgICAgdHlwZXMuTW9kdWxlTmFtZSwKCQlTaG9ydDogICAgICAgICAgICAgICAgICAgICAgJnF1b3Q7UXVlcnlpbmcgY29tbWFuZHMgZm9yIHRoZSBhdXRoIG1vZHVsZSZxdW90OywKCQlEaXNhYmxlRmxhZ1BhcnNpbmc6ICAgICAgICAgdHJ1ZSwKCQlTdWdnZXN0aW9uc01pbmltdW1EaXN0YW5jZTogMiwKCQlSdW5FOiAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50LlZhbGlkYXRlQ21kLAoJfQoKCWNtZC5BZGRDb21tYW5kKA=="}})],1),e._v(" "),a("p",[e._v("Each module must also implement the "),a("code",[e._v("GetQueryCmd()")]),e._v(" method for "),a("code",[e._v("AppModuleBasic")]),e._v(" that returns the "),a("code",[e._v("GetQueryCmd()")]),e._v(" function. This allows for the root command to easily aggregate all of the query commands for each module. Here is an example:")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gR2V0UXVlcnlDbWQgcmV0dXJucyB0aGUgdHJhbnNhY3Rpb24gY29tbWFuZHMgZm9yIHRoaXMgbW9kdWxlCmZ1bmMgR2V0UXVlcnlDbWQoKSAqY29icmEuQ29tbWFuZCB7CgljbWQgOj0gJmFtcDtjb2JyYS5Db21tYW5kewoJCVVzZTogICAgICAgICAgICAgICAgICAgICAgICB0eXBlcy5Nb2R1bGVOYW1lLAoJCVNob3J0OiAgICAgICAgICAgICAgICAgICAgICAmcXVvdDtRdWVyeWluZyBjb21tYW5kcyBmb3IgdGhlIGF1dGggbW9kdWxlJnF1b3Q7LAoJCURpc2FibGVGbGFnUGFyc2luZzogICAgICAgICB0cnVlLAoJCVN1Z2dlc3Rpb25zTWluaW11bURpc3RhbmNlOiAyLAoJCVJ1bkU6ICAgICAgICAgICAgICAgICAgICAgICBjbGllbnQuVmFsaWRhdGVDbWQsCgl9CgoJY21kLkFkZENvbW1hbmQoCgkJR2V0QWNjb3VudENtZCgpLAoJCUdldEFjY291bnRzQ21kKCksCgkJUXVlcnlQYXJhbXNDbWQoKSwKCQlRdWVyeU1vZHVsZUFjY291bnRzQ21kKCksCgkpCgoJcmV0dXJuIGNtZAp9"}})],1),e._v(" "),a("h3",{attrs:{id:"flags"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flags"}},[e._v("#")]),e._v(" Flags")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/core/cli.html#flags"}},[e._v("Flags")]),e._v(" allow users to customize commands. "),a("code",[e._v("--fees")]),e._v(" and "),a("code",[e._v("--gas-prices")]),e._v(" are examples of flags that allow users to set the "),a("RouterLink",{attrs:{to:"/basics/gas-fees.html"}},[e._v("fees")]),e._v(" and gas prices for their transactions.")],1),e._v(" "),a("p",[e._v("Flags that are specific to a module are typically created in a "),a("code",[e._v("flags.go")]),e._v(" file in the module's "),a("code",[e._v("./client/cli")]),e._v(" folder. When creating a flag, developers set the value type, the name of the flag, the default value, and a description about the flag. Developers also have the option to mark flags as "),a("em",[e._v("required")]),e._v(" so that an error is thrown if the user does not include a value for the flag.")]),e._v(" "),a("p",[e._v("Here is an example that adds the "),a("code",[e._v("--from")]),e._v(" flag to a command:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y21kLkZsYWdzKCkuU3RyaW5nKEZsYWdGcm9tLCAmcXVvdDsmcXVvdDssICZxdW90O05hbWUgb3IgYWRkcmVzcyBvZiBwcml2YXRlIGtleSB3aXRoIHdoaWNoIHRvIHNpZ24mcXVvdDspCg=="}}),e._v(" "),a("p",[e._v("In this example, the value of the flag is a "),a("code",[e._v("String")]),e._v(", the name of the flag is "),a("code",[e._v("from")]),e._v(" (the value of the "),a("code",[e._v("FlagFrom")]),e._v(" constant), the default value of the flag is "),a("code",[e._v('""')]),e._v(", and there is a description that will be displayed when a user adds "),a("code",[e._v("--help")]),e._v(" to the command.")]),e._v(" "),a("p",[e._v("Here is an example that marks the "),a("code",[e._v("--from")]),e._v(" flag as "),a("em",[e._v("required")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y21kLk1hcmtGbGFnUmVxdWlyZWQoRmxhZ0Zyb20pCg=="}}),e._v(" "),a("p",[e._v("For more detailed information on creating flags, visit the "),a("a",{attrs:{href:"https://github.com/spf13/cobra",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cobra Documentation"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("As mentioned in "),a("a",{attrs:{href:"#transaction-commands"}},[e._v("transaction commands")]),e._v(", there is a set of flags that all transaction commands must add. This is done with the "),a("code",[e._v("AddTxFlagsToCmd")]),e._v(" method defined in the Cosmos SDK's "),a("code",[e._v("./client/flags")]),e._v(" package.")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQWRkVHhGbGFnc1RvQ21kIGFkZHMgY29tbW9uIGZsYWdzIHRvIGEgbW9kdWxlIHR4IGNvbW1hbmQuCmZ1bmMgQWRkVHhGbGFnc1RvQ21kKGNtZCAqY29icmEuQ29tbWFuZCkgewoJY21kLkZsYWdzKCkuU3RyaW5nUCh0bWNsaS5PdXRwdXRGbGFnLCAmcXVvdDtvJnF1b3Q7LCAmcXVvdDtqc29uJnF1b3Q7LCAmcXVvdDtPdXRwdXQgZm9ybWF0ICh0ZXh0fGpzb24pJnF1b3Q7KQoJY21kLkZsYWdzKCkuU3RyaW5nKEZsYWdLZXlyaW5nRGlyLCAmcXVvdDsmcXVvdDssICZxdW90O1RoZSBjbGllbnQgS2V5cmluZyBkaXJlY3Rvcnk7IGlmIG9taXR0ZWQsIHRoZSBkZWZhdWx0ICdob21lJyBkaXJlY3Rvcnkgd2lsbCBiZSB1c2VkJnF1b3Q7KQoJY21kLkZsYWdzKCkuU3RyaW5nKEZsYWdGcm9tLCAmcXVvdDsmcXVvdDssICZxdW90O05hbWUgb3IgYWRkcmVzcyBvZiBwcml2YXRlIGtleSB3aXRoIHdoaWNoIHRvIHNpZ24mcXVvdDspCgljbWQuRmxhZ3MoKS5VaW50NjRQKEZsYWdBY2NvdW50TnVtYmVyLCAmcXVvdDthJnF1b3Q7LCAwLCAmcXVvdDtUaGUgYWNjb3VudCBudW1iZXIgb2YgdGhlIHNpZ25pbmcgYWNjb3VudCAob2ZmbGluZSBtb2RlIG9ubHkpJnF1b3Q7KQoJY21kLkZsYWdzKCkuVWludDY0UChGbGFnU2VxdWVuY2UsICZxdW90O3MmcXVvdDssIDAsICZxdW90O1RoZSBzZXF1ZW5jZSBudW1iZXIgb2YgdGhlIHNpZ25pbmcgYWNjb3VudCAob2ZmbGluZSBtb2RlIG9ubHkpJnF1b3Q7KQoJY21kLkZsYWdzKCkuU3RyaW5nKEZsYWdOb3RlLCAmcXVvdDsmcXVvdDssICZxdW90O05vdGUgdG8gYWRkIGEgZGVzY3JpcHRpb24gdG8gdGhlIHRyYW5zYWN0aW9uIChwcmV2aW91c2x5IC0tbWVtbykmcXVvdDspCgljbWQuRmxhZ3MoKS5TdHJpbmcoRmxhZ0ZlZXMsICZxdW90OyZxdW90OywgJnF1b3Q7RmVlcyB0byBwYXkgYWxvbmcgd2l0aCB0cmFuc2FjdGlvbjsgZWc6IDEwdWF0b20mcXVvdDspCgljbWQuRmxhZ3MoKS5TdHJpbmcoRmxhZ0dhc1ByaWNlcywgJnF1b3Q7JnF1b3Q7LCAmcXVvdDtHYXMgcHJpY2VzIGluIGRlY2ltYWwgZm9ybWF0IHRvIGRldGVybWluZSB0aGUgdHJhbnNhY3Rpb24gZmVlIChlLmcuIDAuMXVhdG9tKSZxdW90OykKCWNtZC5GbGFncygpLlN0cmluZyhGbGFnTm9kZSwgJnF1b3Q7dGNwOi8vbG9jYWxob3N0OjI2NjU3JnF1b3Q7LCAmcXVvdDsmbHQ7aG9zdCZndDs6Jmx0O3BvcnQmZ3Q7IHRvIHRlbmRlcm1pbnQgcnBjIGludGVyZmFjZSBmb3IgdGhpcyBjaGFpbiZxdW90OykKCWNtZC5GbGFncygpLkJvb2woRmxhZ1VzZUxlZGdlciwgZmFsc2UsICZxdW90O1VzZSBhIGNvbm5lY3RlZCBMZWRnZXIgZGV2aWNlJnF1b3Q7KQoJY21kLkZsYWdzKCkuRmxvYXQ2NChGbGFnR2FzQWRqdXN0bWVudCwgRGVmYXVsdEdhc0FkanVzdG1lbnQsICZxdW90O2FkanVzdG1lbnQgZmFjdG9yIHRvIGJlIG11bHRpcGxpZWQgYWdhaW5zdCB0aGUgZXN0aW1hdGUgcmV0dXJuZWQgYnkgdGhlIHR4IHNpbXVsYXRpb247IGlmIHRoZSBnYXMgbGltaXQgaXMgc2V0IG1hbnVhbGx5IHRoaXMgZmxhZyBpcyBpZ25vcmVkICZxdW90OykKCWNtZC5GbGFncygpLlN0cmluZ1AoRmxhZ0Jyb2FkY2FzdE1vZGUsICZxdW90O2ImcXVvdDssIEJyb2FkY2FzdFN5bmMsICZxdW90O1RyYW5zYWN0aW9uIGJyb2FkY2FzdGluZyBtb2RlIChzeW5jfGFzeW5jfGJsb2NrKSZxdW90OykKCWNtZC5GbGFncygpLkJvb2woRmxhZ0RyeVJ1biwgZmFsc2UsICZxdW90O2lnbm9yZSB0aGUgLS1nYXMgZmxhZyBhbmQgcGVyZm9ybSBhIHNpbXVsYXRpb24gb2YgYSB0cmFuc2FjdGlvbiwgYnV0IGRvbid0IGJyb2FkY2FzdCBpdCAod2hlbiBlbmFibGVkLCB0aGUgbG9jYWwgS2V5YmFzZSBpcyBub3QgYWNjZXNzaWJsZSkmcXVvdDspCgljbWQuRmxhZ3MoKS5Cb29sKEZsYWdHZW5lcmF0ZU9ubHksIGZhbHNlLCAmcXVvdDtCdWlsZCBhbiB1bnNpZ25lZCB0cmFuc2FjdGlvbiBhbmQgd3JpdGUgaXQgdG8gU1RET1VUICh3aGVuIGVuYWJsZWQsIHRoZSBsb2NhbCBLZXliYXNlIG9ubHkgYWNjZXNzZWQgd2hlbiBwcm92aWRpbmcgYSBrZXkgbmFtZSkmcXVvdDspCgljbWQuRmxhZ3MoKS5Cb29sKEZsYWdPZmZsaW5lLCBmYWxzZSwgJnF1b3Q7T2ZmbGluZSBtb2RlIChkb2VzIG5vdCBhbGxvdyBhbnkgb25saW5lIGZ1bmN0aW9uYWxpdHkpJnF1b3Q7KQoJY21kLkZsYWdzKCkuQm9vbFAoRmxhZ1NraXBDb25maXJtYXRpb24sICZxdW90O3kmcXVvdDssIGZhbHNlLCAmcXVvdDtTa2lwIHR4IGJyb2FkY2FzdGluZyBwcm9tcHQgY29uZmlybWF0aW9uJnF1b3Q7KQoJY21kLkZsYWdzKCkuU3RyaW5nKEZsYWdLZXlyaW5nQmFja2VuZCwgRGVmYXVsdEtleXJpbmdCYWNrZW5kLCAmcXVvdDtTZWxlY3Qga2V5cmluZydzIGJhY2tlbmQgKG9zfGZpbGV8a3dhbGxldHxwYXNzfHRlc3R8bWVtb3J5KSZxdW90OykKCWNtZC5GbGFncygpLlN0cmluZyhGbGFnU2lnbk1vZGUsICZxdW90OyZxdW90OywgJnF1b3Q7Q2hvb3NlIHNpZ24gbW9kZSAoZGlyZWN0fGFtaW5vLWpzb258ZGlyZWN0LWF1eCksIHRoaXMgaXMgYW4gYWR2YW5jZWQgZmVhdHVyZSZxdW90OykKCWNtZC5GbGFncygpLlVpbnQ2NChGbGFnVGltZW91dEhlaWdodCwgMCwgJnF1b3Q7U2V0IGEgYmxvY2sgdGltZW91dCBoZWlnaHQgdG8gcHJldmVudCB0aGUgdHggZnJvbSBiZWluZyBjb21taXR0ZWQgcGFzdCBhIGNlcnRhaW4gaGVpZ2h0JnF1b3Q7KQoJY21kLkZsYWdzKCkuU3RyaW5nKEZsYWdGZWVQYXllciwgJnF1b3Q7JnF1b3Q7LCAmcXVvdDtGZWUgcGF5ZXIgcGF5cyBmZWVzIGZvciB0aGUgdHJhbnNhY3Rpb24gaW5zdGVhZCBvZiBkZWR1Y3RpbmcgZnJvbSB0aGUgc2lnbmVyJnF1b3Q7KQoJY21kLkZsYWdzKCkuU3RyaW5nKEZsYWdGZWVHcmFudGVyLCAmcXVvdDsmcXVvdDssICZxdW90O0ZlZSBncmFudGVyIGdyYW50cyBmZWVzIGZvciB0aGUgdHJhbnNhY3Rpb24mcXVvdDspCgljbWQuRmxhZ3MoKS5TdHJpbmcoRmxhZ1RpcCwgJnF1b3Q7JnF1b3Q7LCAmcXVvdDtUaXAgaXMgdGhlIGFtb3VudCB0aGF0IGlzIGdvaW5nIHRvIGJlIHRyYW5zZmVycmVkIHRvIHRoZSBmZWUgcGF5ZXIgb24gdGhlIHRhcmdldCBjaGFpbi4gVGhpcyBmbGFnIGlzIG9ubHkgdmFsaWQgd2hlbiB1c2VkIHdpdGggLS1hdXgmcXVvdDspCgljbWQuRmxhZ3MoKS5Cb29sKEZsYWdBdXgsIGZhbHNlLCAmcXVvdDtHZW5lcmF0ZSBhdXggc2lnbmVyIGRhdGEgaW5zdGVhZCBvZiBzZW5kaW5nIGEgdHgmcXVvdDspCgoJLy8gLS1nYXMgY2FuIGFjY2VwdCBpbnRlZ2VycyBhbmQgJnF1b3Q7YXV0byZxdW90OwoJY21kLkZsYWdzKCkuU3RyaW5nKEZsYWdHYXMsICZxdW90OyZxdW90OywgZm10LlNwcmludGYoJnF1b3Q7Z2FzIGxpbWl0IHRvIHNldCBwZXItdHJhbnNhY3Rpb247IHNldCB0byAlcSB0byBjYWxjdWxhdGUgc3VmZmljaWVudCBnYXMgYXV0b21hdGljYWxseSAoZGVmYXVsdCAlZCkmcXVvdDssIEdhc0ZsYWdBdXRvLCBEZWZhdWx0R2FzTGltaXQpKQp9"}})],1),e._v(" "),a("p",[e._v("Since "),a("code",[e._v("AddTxFlagsToCmd(cmd *cobra.Command)")]),e._v(" includes all of the basic flags required for a transaction command, module developers may choose not to add any of their own (specifying arguments instead may often be more appropriate).")]),e._v(" "),a("p",[e._v("Similarly, there is a "),a("code",[e._v("AddQueryFlagsToCmd(cmd *cobra.Command)")]),e._v(" to add common flags to a module query command.")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQWRkUXVlcnlGbGFnc1RvQ21kIGFkZHMgY29tbW9uIGZsYWdzIHRvIGEgbW9kdWxlIHF1ZXJ5IGNvbW1hbmQuCmZ1bmMgQWRkUXVlcnlGbGFnc1RvQ21kKGNtZCAqY29icmEuQ29tbWFuZCkgewoJY21kLkZsYWdzKCkuU3RyaW5nKEZsYWdOb2RlLCAmcXVvdDt0Y3A6Ly9sb2NhbGhvc3Q6MjY2NTcmcXVvdDssICZxdW90OyZsdDtob3N0Jmd0OzombHQ7cG9ydCZndDsgdG8gVGVuZGVybWludCBSUEMgaW50ZXJmYWNlIGZvciB0aGlzIGNoYWluJnF1b3Q7KQoJY21kLkZsYWdzKCkuSW50NjQoRmxhZ0hlaWdodCwgMCwgJnF1b3Q7VXNlIGEgc3BlY2lmaWMgaGVpZ2h0IHRvIHF1ZXJ5IHN0YXRlIGF0ICh0aGlzIGNhbiBlcnJvciBpZiB0aGUgbm9kZSBpcyBwcnVuaW5nIHN0YXRlKSZxdW90OykKCWNtZC5GbGFncygpLlN0cmluZ1AodG1jbGkuT3V0cHV0RmxhZywgJnF1b3Q7byZxdW90OywgJnF1b3Q7dGV4dCZxdW90OywgJnF1b3Q7T3V0cHV0IGZvcm1hdCAodGV4dHxqc29uKSZxdW90OykKCgkvLyBzb21lIGJhc2UgY29tbWFuZHMgZG9lcyBub3QgcmVxdWlyZSBjaGFpbklEIGUuZyBgc2ltZCB0ZXN0bmV0YCB3aGlsZSBzdWJjb21tYW5kcyBkbwoJLy8gaGVuY2UgdGhlIGZsYWcgc2hvdWxkIG5vdCBiZSByZXF1aXJlZCBmb3IgdGhvc2UgY29tbWFuZHMKCV8gPSBjbWQuTWFya0ZsYWdSZXF1aXJlZChGbGFnQ2hhaW5JRCkKfQ=="}})],1),e._v(" "),a("h2",{attrs:{id:"grpc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grpc"}},[e._v("#")]),e._v(" gRPC")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://grpc.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("gRPC"),a("OutboundLink")],1),e._v(" is a Remote Procedure Call (RPC) framework. RPC is the preferred way for external clients like wallets and exchanges to interact with a blockchain.")]),e._v(" "),a("p",[e._v("In addition to providing an ABCI query pathway, the Cosmos SDK provides a gRPC proxy server that routes gRPC query requests to ABCI query requests.")]),e._v(" "),a("p",[e._v("In order to do that, modules must implement "),a("code",[e._v("RegisterGRPCGatewayRoutes(clientCtx client.Context, mux *runtime.ServeMux)")]),e._v(" on "),a("code",[e._v("AppModuleBasic")]),e._v(" to wire the client gRPC requests to the correct handler inside the module.")]),e._v(" "),a("p",[e._v("Here's an example from the "),a("code",[e._v("x/auth")]),e._v(" module:")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gUmVnaXN0ZXJHUlBDR2F0ZXdheVJvdXRlcyByZWdpc3RlcnMgdGhlIGdSUEMgR2F0ZXdheSByb3V0ZXMgZm9yIHRoZSBhdXRoIG1vZHVsZS4KZnVuYyAoQXBwTW9kdWxlQmFzaWMpIFJlZ2lzdGVyR1JQQ0dhdGV3YXlSb3V0ZXMoY2xpZW50Q3R4IGNsaWVudC5Db250ZXh0LCBtdXggKnJ1bnRpbWUuU2VydmVNdXgpIHsKCWlmIGVyciA6PSB0eXBlcy5SZWdpc3RlclF1ZXJ5SGFuZGxlckNsaWVudChjb250ZXh0LkJhY2tncm91bmQoKSwgbXV4LCB0eXBlcy5OZXdRdWVyeUNsaWVudChjbGllbnRDdHgpKTsgZXJyICE9IG5pbCB7CgkJcGFuaWMoZXJyKQoJfQp9"}})],1),e._v(" "),a("h2",{attrs:{id:"grpc-gateway-rest"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grpc-gateway-rest"}},[e._v("#")]),e._v(" gRPC-gateway REST")]),e._v(" "),a("p",[e._v("Applications need to support web services that use HTTP requests (e.g. a web wallet like "),a("a",{attrs:{href:"https://keplr.app",target:"_blank",rel:"noopener noreferrer"}},[e._v("Keplr"),a("OutboundLink")],1),e._v("). "),a("a",{attrs:{href:"https://github.com/grpc-ecosystem/grpc-gateway",target:"_blank",rel:"noopener noreferrer"}},[e._v("grpc-gateway"),a("OutboundLink")],1),e._v(" translates REST calls into gRPC calls, which might be useful for clients that do not use gRPC.")]),e._v(" "),a("p",[e._v("Modules that want to expose REST queries should add "),a("code",[e._v("google.api.http")]),e._v(" annotations to their "),a("code",[e._v("rpc")]),e._v(" methods, such as in the example below from the "),a("code",[e._v("x/auth")]),e._v(" module:")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gUXVlcnkgZGVmaW5lcyB0aGUgZ1JQQyBxdWVyaWVyIHNlcnZpY2UuCnNlcnZpY2UgUXVlcnkgewogIC8vIEFjY291bnRzIHJldHVybnMgYWxsIHRoZSBleGlzdGluZyBhY2NvdW50cwogIC8vCiAgLy8gU2luY2U6IGNvc21vcy1zZGsgMC40MwogIHJwYyBBY2NvdW50cyhRdWVyeUFjY291bnRzUmVxdWVzdCkgcmV0dXJucyAoUXVlcnlBY2NvdW50c1Jlc3BvbnNlKSB7CiAgICBvcHRpb24gKGdvb2dsZS5hcGkuaHR0cCkuZ2V0ID0gJnF1b3Q7L2Nvc21vcy9hdXRoL3YxYmV0YTEvYWNjb3VudHMmcXVvdDs7CiAgfQoKICAvLyBBY2NvdW50IHJldHVybnMgYWNjb3VudCBkZXRhaWxzIGJhc2VkIG9uIGFkZHJlc3MuCiAgcnBjIEFjY291bnQoUXVlcnlBY2NvdW50UmVxdWVzdCkgcmV0dXJucyAoUXVlcnlBY2NvdW50UmVzcG9uc2UpIHsKICAgIG9wdGlvbiAoZ29vZ2xlLmFwaS5odHRwKS5nZXQgPSAmcXVvdDsvY29zbW9zL2F1dGgvdjFiZXRhMS9hY2NvdW50cy97YWRkcmVzc30mcXVvdDs7CiAgfQoKICAvLyBQYXJhbXMgcXVlcmllcyBhbGwgcGFyYW1ldGVycy4KICBycGMgUGFyYW1zKFF1ZXJ5UGFyYW1zUmVxdWVzdCkgcmV0dXJucyAoUXVlcnlQYXJhbXNSZXNwb25zZSkgewogICAgb3B0aW9uIChnb29nbGUuYXBpLmh0dHApLmdldCA9ICZxdW90Oy9jb3Ntb3MvYXV0aC92MWJldGExL3BhcmFtcyZxdW90OzsKICB9CgogIC8vIE1vZHVsZUFjY291bnRzIHJldHVybnMgYWxsIHRoZSBleGlzdGluZyBtb2R1bGUgYWNjb3VudHMuCiAgLy8KICAvLyBTaW5jZTogY29zbW9zLXNkayAwLjQ2CiAgcnBjIE1vZHVsZUFjY291bnRzKFF1ZXJ5TW9kdWxlQWNjb3VudHNSZXF1ZXN0KSByZXR1cm5zIChRdWVyeU1vZHVsZUFjY291bnRzUmVzcG9uc2UpIHsKICAgIG9wdGlvbiAoZ29vZ2xlLmFwaS5odHRwKS5nZXQgPSAmcXVvdDsvY29zbW9zL2F1dGgvdjFiZXRhMS9tb2R1bGVfYWNjb3VudHMmcXVvdDs7CiAgfQoKICAvLyBCZWNoMzJQcmVmaXggcXVlcmllcyBiZWNoMzJQcmVmaXgKICAvLwogIC8vIFNpbmNlOiBjb3Ntb3Mtc2RrIDAuNDYKICBycGMgQmVjaDMyUHJlZml4KEJlY2gzMlByZWZpeFJlcXVlc3QpIHJldHVybnMgKEJlY2gzMlByZWZpeFJlc3BvbnNlKSB7CiAgICBvcHRpb24gKGdvb2dsZS5hcGkuaHR0cCkuZ2V0ID0gJnF1b3Q7L2Nvc21vcy9hdXRoL3YxYmV0YTEvYmVjaDMyJnF1b3Q7OwogIH0KCiAgLy8gQWRkcmVzc0J5dGVzVG9TdHJpbmcgY29udmVydHMgQWNjb3VudCBBZGRyZXNzIGJ5dGVzIHRvIHN0cmluZwogIC8vCiAgLy8gU2luY2U6IGNvc21vcy1zZGsgMC40NgogIHJwYyBBZGRyZXNzQnl0ZXNUb1N0cmluZyhBZGRyZXNzQnl0ZXNUb1N0cmluZ1JlcXVlc3QpIHJldHVybnMgKEFkZHJlc3NCeXRlc1RvU3RyaW5nUmVzcG9uc2UpIHsKICAgIG9wdGlvbiAoZ29vZ2xlLmFwaS5odHRwKS5nZXQgPSAmcXVvdDsvY29zbW9zL2F1dGgvdjFiZXRhMS9iZWNoMzIve2FkZHJlc3NfYnl0ZXN9JnF1b3Q7OwogIH0KCiAgLy8gQWRkcmVzc1N0cmluZ1RvQnl0ZXMgY29udmVydHMgQWRkcmVzcyBzdHJpbmcgdG8gYnl0ZXMKICAvLwogIC8vIFNpbmNlOiBjb3Ntb3Mtc2RrIDAuNDYKICBycGMgQWRkcmVzc1N0cmluZ1RvQnl0ZXMoQWRkcmVzc1N0cmluZ1RvQnl0ZXNSZXF1ZXN0KSByZXR1cm5zIChBZGRyZXNzU3RyaW5nVG9CeXRlc1Jlc3BvbnNlKSB7CiAgICBvcHRpb24gKGdvb2dsZS5hcGkuaHR0cCkuZ2V0ID0gJnF1b3Q7L2Nvc21vcy9hdXRoL3YxYmV0YTEvYmVjaDMyL3thZGRyZXNzX3N0cmluZ30mcXVvdDs7CiAgfQp9"}})],1),e._v(" "),a("p",[e._v("gRPC gateway is started in-process along with the application and Tendermint. It can be enabled or disabled by setting gRPC Configuration "),a("code",[e._v("enable")]),e._v(" in "),a("RouterLink",{attrs:{to:"/run-node/run-node.html#configuring-the-node-using-apptoml"}},[a("code",[e._v("app.toml")])]),e._v(".")],1),e._v(" "),a("p",[e._v("The Cosmos SDK provides a command for generating "),a("a",{attrs:{href:"https://swagger.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Swagger"),a("OutboundLink")],1),e._v(" documentation ("),a("code",[e._v("protoc-gen-swagger")]),e._v("). Setting "),a("code",[e._v("swagger")]),e._v(" in "),a("RouterLink",{attrs:{to:"/run-node/run-node.html#configuring-the-node-using-apptoml"}},[a("code",[e._v("app.toml")])]),e._v(" defines if swagger documentation should be automatically registered.")],1),e._v(" "),a("h2",{attrs:{hide:"",id:"next"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),a("p",{attrs:{hide:""}},[e._v("Read about the recommended "),a("RouterLink",{attrs:{to:"/building-modules/structure.html"}},[e._v("module structure")])],1)],1)}),[],!1,null,null,null);t.default=o.exports}}]);