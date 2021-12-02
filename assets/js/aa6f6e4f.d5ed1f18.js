"use strict";(self.webpackChunkspringwolf_docs=self.webpackChunkspringwolf_docs||[]).push([[757],{9603:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var i=a(7462),t=a(3366),o=(a(7294),a(3905)),r=["components"],d={sidebar_position:4},c="Documenting Producers",p={unversionedId:"documenting-producers",id:"documenting-producers",isDocsHomePage:!1,title:"Documenting Producers",description:"Unlike consumers which are defined declaratively with an annotation, producers are defined imperatively, and there is no implementation uniform enough so that metadata can be picked up automatically.",source:"@site/docs/documenting-producers.md",sourceDirName:".",slug:"/documenting-producers",permalink:"/docs/documenting-producers",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/documenting-producers.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/configuration"},next:{title:"Providing An Example Producer",permalink:"/docs/providing-an-example-producer"}},l=[{value:"ProducerData",id:"producerdata",children:[{value:"Channel Name",id:"channel-name",children:[],level:3},{value:"Binding",id:"binding",children:[],level:3},{value:"Payload Type",id:"payload-type",children:[],level:3}],level:2},{value:"Example",id:"example",children:[],level:2}],s={toc:l};function u(e){var n=e.components,a=(0,t.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"documenting-producers"},"Documenting Producers"),(0,o.kt)("p",null,"Unlike consumers which are defined declaratively with an annotation, producers are defined imperatively, and there is no implementation uniform enough so that metadata can be picked up automatically."),(0,o.kt)("p",null,"Because producers are also an important part of Async APIs, Springwolf provides a way to explicitly add them to the generated document, by declaring them in the ",(0,o.kt)("inlineCode",{parentName:"p"},"AsyncApiDocket")," using the ",(0,o.kt)("inlineCode",{parentName:"p"},"ProducerData")," object."),(0,o.kt)("h2",{id:"producerdata"},"ProducerData"),(0,o.kt)("p",null,"Below is an example of describing a Kafka producer:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Bean\npublic AsyncApiDocket asyncApiDocket() {\n\n    ProducerData exampleProducerData = ProducerData.builder()\n            .channelName("example-producer-topic")\n            .binding(ImmutableMap.of("kafka", new KafkaOperationBinding()))\n            .payloadType(ExamplePayloadDto.class)\n            .build();\n  \n    return AsyncApiDocket.builder()\n            .basePackage(...)\n            .info(...)\n            .server(...)\n            .producer(exampleProducerData)\n            .build();\n}\n')),(0,o.kt)("h3",{id:"channel-name"},"Channel Name"),(0,o.kt)("p",null,"The channel name (or topic name in case of Kafka). "),(0,o.kt)("p",null,"This is the name that will be used to publish messages to by the UI (if an ",(0,o.kt)("a",{parentName:"p",href:"providing-an-example-producer"},"example producer is provided"),")."),(0,o.kt)("h3",{id:"binding"},"Binding"),(0,o.kt)("p",null,"This property is used to discriminate the producer's protocl and provide protocol-specific properties (see ",(0,o.kt)("a",{parentName:"p",href:"https://www.asyncapi.com/docs/specifications/v2.0.0#operationBindingsObject"},"Operation Binding Object"),")."),(0,o.kt)("h3",{id:"payload-type"},"Payload Type"),(0,o.kt)("p",null,"The class object of the payload published to this channel."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"See a full example ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/springwolf/springwolf-core/blob/master/springwolf-examples/springwolf-kafka-example/src/main/java/io/github/stavshamir/springwolf/example/configuration/AsyncApiConfiguration.java"},"here"),"."))}u.isMDXComponent=!0}}]);