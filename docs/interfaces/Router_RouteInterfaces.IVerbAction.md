[Spark OneBE - v0.0.0](../README.md) / [Exports](../modules.md) / [Router/RouteInterfaces](../modules/Router_RouteInterfaces.md) / IVerbAction

# Interface: IVerbAction<Request, Response\>

[Router/RouteInterfaces](../modules/Router_RouteInterfaces.md).IVerbAction

The VerbAction parameter contents.

## Type parameters

| Name | Type |
| :------ | :------ |
| `Request` | `any` |
| `Response` | `any` |

## Table of contents

### Properties

- [actionCallback](Router_RouteInterfaces.IVerbAction.md#actioncallback)
- [basePath](Router_RouteInterfaces.IVerbAction.md#basepath)
- [groupName](Router_RouteInterfaces.IVerbAction.md#groupname)
- [method](Router_RouteInterfaces.IVerbAction.md#method)
- [passRequest](Router_RouteInterfaces.IVerbAction.md#passrequest)
- [path](Router_RouteInterfaces.IVerbAction.md#path)
- [propertyKey](Router_RouteInterfaces.IVerbAction.md#propertykey)
- [target](Router_RouteInterfaces.IVerbAction.md#target)

## Properties

### actionCallback

• **actionCallback**: [`CallbackExtractorParameter`](../modules/Router_RouteTypes.md#callbackextractorparameter)<`Request`, `Response`\>

The action callback list for the given route.

___

### basePath

• **basePath**: `string`

The base path of the route endpoint.

___

### groupName

• **groupName**: `string`

The name of the controller.

___

### method

• **method**: [`HTTPVerb`](../enums/HTTP_HTTPVerb.HTTPVerb.md)

The HTTP Verb used for the route endpoint.

___

### passRequest

• **passRequest**: `boolean`

Pass the request and response objects.

___

### path

• **path**: `string`

The path of the route endpoint.

___

### propertyKey

• **propertyKey**: `string`

The name of the route endpoint function.

___

### target

• **target**: [`Route`](../classes/Router_Route.Route.md)

The target Controller.
