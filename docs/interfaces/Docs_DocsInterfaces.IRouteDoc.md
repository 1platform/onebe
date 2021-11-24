[Spark OneBE - v1.0.1](../README.md) / [Exports](../modules.md) / [Docs/DocsInterfaces](../modules/Docs_DocsInterfaces.md) / IRouteDoc

# Interface: IRouteDoc

[Docs/DocsInterfaces](../modules/Docs_DocsInterfaces.md).IRouteDoc

Interface for Route doc

## Table of contents

### Properties

- [basicSpecific](Docs_DocsInterfaces.IRouteDoc.md#basicspecific)
- [bearerSpecific](Docs_DocsInterfaces.IRouteDoc.md#bearerspecific)
- [controllerName](Docs_DocsInterfaces.IRouteDoc.md#controllername)
- [description](Docs_DocsInterfaces.IRouteDoc.md#description)
- [errors](Docs_DocsInterfaces.IRouteDoc.md#errors)
- [isAuthenticated](Docs_DocsInterfaces.IRouteDoc.md#isauthenticated)
- [methodName](Docs_DocsInterfaces.IRouteDoc.md#methodname)
- [parameters](Docs_DocsInterfaces.IRouteDoc.md#parameters)
- [path](Docs_DocsInterfaces.IRouteDoc.md#path)
- [query](Docs_DocsInterfaces.IRouteDoc.md#query)
- [request](Docs_DocsInterfaces.IRouteDoc.md#request)
- [response](Docs_DocsInterfaces.IRouteDoc.md#response)
- [responseStatus](Docs_DocsInterfaces.IRouteDoc.md#responsestatus)
- [summary](Docs_DocsInterfaces.IRouteDoc.md#summary)
- [tag](Docs_DocsInterfaces.IRouteDoc.md#tag)
- [verb](Docs_DocsInterfaces.IRouteDoc.md#verb)

## Properties

### basicSpecific

• **basicSpecific**: `boolean`

___

### bearerSpecific

• **bearerSpecific**: `boolean`

___

### controllerName

• `Optional` **controllerName**: `string`

___

### description

• `Optional` **description**: `string`

___

### errors

• `Optional` **errors**: `Record`<`string`, `string`\>

___

### isAuthenticated

• **isAuthenticated**: `boolean`

___

### methodName

• `Optional` **methodName**: `string`

___

### parameters

• `Optional` **parameters**: `Record`<`string`, [`IParameterDoc`](Docs_DocsInterfaces.IParameterDoc.md)\>

___

### path

• **path**: `string`

___

### query

• `Optional` **query**: `Record`<`string`, [`IQueryParameterDoc`](Docs_DocsInterfaces.IQueryParameterDoc.md)\>

___

### request

• `Optional` **request**: `Record`<`string`, [`IBodyDoc`](Docs_DocsInterfaces.IBodyDoc.md)\>

___

### response

• `Optional` **response**: `Record`<`string`, [`IBodyDoc`](Docs_DocsInterfaces.IBodyDoc.md)\>

___

### responseStatus

• `Optional` **responseStatus**: [`HTTPStatus`](../enums/HTTP_HTTPStatus.HTTPStatus.md)

___

### summary

• `Optional` **summary**: `string`

___

### tag

• `Optional` **tag**: `string`

___

### verb

• **verb**: [`HTTPVerb`](../enums/HTTP_HTTPVerb.HTTPVerb.md)
