"use strict";(self.webpackChunktquic_website=self.webpackChunktquic_website||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/docs/intro","docId":"intro"},{"type":"category","label":"Getting Started","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Installation","href":"/docs/getting_started/installation","docId":"getting_started/installation"},{"type":"link","label":"Example tools","href":"/docs/getting_started/demo","docId":"getting_started/demo"},{"type":"link","label":"Next step","href":"/docs/getting_started/next","docId":"getting_started/next"}],"href":"/docs/category/getting-started"},{"type":"category","label":"Tutorial","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Core concepts","href":"/docs/tutorial/core_concepts","docId":"tutorial/core_concepts"},{"type":"link","label":"Using the Rust API","href":"/docs/tutorial/rust","docId":"tutorial/rust"},{"type":"link","label":"Using the C API","href":"/docs/tutorial/c","docId":"tutorial/c"}],"href":"/docs/category/tutorial"},{"type":"category","label":"API Reference","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Rust QUIC API Reference","href":"/docs/api_reference/rust_quic","docId":"api_reference/rust_quic"},{"type":"link","label":"Rust HTTP/3 API Reference","href":"/docs/api_reference/rust_h3","docId":"api_reference/rust_h3"},{"type":"link","label":"C/C++ QUIC API Reference","href":"/docs/api_reference/c_quic","docId":"api_reference/c_quic"},{"type":"link","label":"C/C++ HTTP/3 API Reference","href":"/docs/api_reference/c_h3","docId":"api_reference/c_h3"}],"href":"/docs/category/api-reference"},{"type":"category","label":"Contributing","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"How to contribute codes","href":"/docs/how_to_contribute/contribute_codes","docId":"how_to_contribute/contribute_codes"},{"type":"link","label":"How to contribute documents","href":"/docs/how_to_contribute/contribute_docs","docId":"how_to_contribute/contribute_docs"},{"type":"link","label":"Development Guides","href":"/docs/how_to_contribute/development_guides","docId":"how_to_contribute/development_guides"},{"type":"link","label":"Releasing Process","href":"/docs/how_to_contribute/releasing_process","docId":"how_to_contribute/releasing_process"}],"href":"/docs/category/contributing"},{"type":"category","label":"Frequently Asked Questions","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Installation","href":"/docs/faq/installation","docId":"faq/installation"},{"type":"link","label":"Usage","href":"/docs/faq/usage","docId":"faq/usage"},{"type":"link","label":"Performance","href":"/docs/faq/performance","docId":"faq/performance"},{"type":"link","label":"Trouble shooting","href":"/docs/faq/trouble_shooting","docId":"faq/trouble_shooting"},{"type":"link","label":"Development","href":"/docs/faq/development","docId":"faq/development"}],"href":"/docs/category/frequently-asked-questions"},{"type":"category","label":"Further Readings","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Comparison","href":"/docs/further_readings/comparison","docId":"further_readings/comparison"},{"type":"link","label":"Benchmark","href":"/docs/further_readings/benchmark","docId":"further_readings/benchmark"},{"type":"link","label":"Conformance","href":"/docs/further_readings/conformance","docId":"further_readings/conformance"},{"type":"link","label":"Library Size Optimization","href":"/docs/further_readings/minimizing_size","docId":"further_readings/minimizing_size"},{"type":"link","label":"Resources","href":"/docs/further_readings/resources","docId":"further_readings/resources"}],"href":"/docs/category/further-readings"}]},"docs":{"api_reference/c_h3":{"id":"api_reference/c_h3","title":"C/C++ HTTP/3 API Reference","description":"Preliminaries","sidebar":"tutorialSidebar"},"api_reference/c_quic":{"id":"api_reference/c_quic","title":"C/C++ QUIC API Reference","description":"Preliminaries","sidebar":"tutorialSidebar"},"api_reference/rust_h3":{"id":"api_reference/rust_h3","title":"Rust HTTP/3 API Reference","description":"The Rust documentation of TQUIC is autogenerated by cargo and is available at the docs.rs.","sidebar":"tutorialSidebar"},"api_reference/rust_quic":{"id":"api_reference/rust_quic","title":"Rust QUIC API Reference","description":"The Rust documentation of TQUIC is autogenerated by cargo and is available at the docs.rs.","sidebar":"tutorialSidebar"},"faq/development":{"id":"faq/development","title":"Development","description":"What are the regulations for code review?","sidebar":"tutorialSidebar"},"faq/installation":{"id":"faq/installation","title":"Installation","description":"Failed to run custom build command for TQUIC?","sidebar":"tutorialSidebar"},"faq/performance":{"id":"faq/performance","title":"Performance","description":"How fast is TQUIC?","sidebar":"tutorialSidebar"},"faq/trouble_shooting":{"id":"faq/trouble_shooting","title":"Trouble shooting","description":"How to analyze encrypted QUIC traffic?","sidebar":"tutorialSidebar"},"faq/usage":{"id":"faq/usage","title":"Usage","description":"Whether TQUIC supports mobile platforms?","sidebar":"tutorialSidebar"},"further_readings/benchmark":{"id":"further_readings/benchmark","title":"Benchmark","description":"Methods for testing","sidebar":"tutorialSidebar"},"further_readings/comparison":{"id":"further_readings/comparison","title":"Comparison","description":"The industry currently offers numerous available QUIC implementations. However, we have selected only a few for comparative analysis. The main reasons behind our choice are as follows:","sidebar":"tutorialSidebar"},"further_readings/conformance":{"id":"further_readings/conformance","title":"Conformance","description":"We perform protocol conformance tests based on the methodology introduced in a paper titled \\"Formal specification and testing of QUIC\\" published at SIGCOMM 2019. We have upgraded the initial formal specification to incorporate support for QUIC v1 and resolved some issues in the ivy toolchain.","sidebar":"tutorialSidebar"},"further_readings/minimizing_size":{"id":"further_readings/minimizing_size","title":"Library Size Optimization","description":"Basic Optimization","sidebar":"tutorialSidebar"},"further_readings/resources":{"id":"further_readings/resources","title":"Resources","description":"Specifications","sidebar":"tutorialSidebar"},"getting_started/demo":{"id":"getting_started/demo","title":"Example tools","description":"The example tools are built by adding an option --all to the cargo build command. They are generated and saved in the directory ./target/release/.","sidebar":"tutorialSidebar"},"getting_started/installation":{"id":"getting_started/installation","title":"Installation","description":"Supported Platforms","sidebar":"tutorialSidebar"},"getting_started/next":{"id":"getting_started/next","title":"Next step","description":"If you want to use TQUIC in your program, refer to the Tutorial","sidebar":"tutorialSidebar"},"how_to_contribute/contribute_codes":{"id":"how_to_contribute/contribute_codes","title":"How to contribute codes","description":"The purpose of this document is to guide you through the process of developing TQUIC in a local environment and submitting your changes to the official TQUIC repository.","sidebar":"tutorialSidebar"},"how_to_contribute/contribute_docs":{"id":"how_to_contribute/contribute_docs","title":"How to contribute documents","description":"TQUIC\'s documentation is mainly divided into the following categories:","sidebar":"tutorialSidebar"},"how_to_contribute/development_guides":{"id":"how_to_contribute/development_guides","title":"Development Guides","description":"Layout of the top level directories","sidebar":"tutorialSidebar"},"how_to_contribute/releasing_process":{"id":"how_to_contribute/releasing_process","title":"Releasing Process","description":"The development of TQUIC follows git-flow branching model and adheres to Semantic Versioning.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Introduction","description":"What is QUIC?","sidebar":"tutorialSidebar"},"tutorial/c":{"id":"tutorial/c","title":"Using the C API","description":"This tutorial describes how to use the TQUIC C API.","sidebar":"tutorialSidebar"},"tutorial/core_concepts":{"id":"tutorial/core_concepts","title":"Core concepts","description":"Commonly used terms in the TQUIC APIs are described below.","sidebar":"tutorialSidebar"},"tutorial/rust":{"id":"tutorial/rust","title":"Using the Rust API","description":"This tutorial describes how to use the TQUIC RUST API.","sidebar":"tutorialSidebar"}}}')}}]);