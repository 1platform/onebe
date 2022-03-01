[Spark OneBE - v1.0.23](../README.md) / [Exports](../modules.md) / [Router/RouteInterfaces](../modules/Router_RouteInterfaces.md) / IVerbDecorators

# Interface: IVerbDecorators<Request, Response\>

[Router/RouteInterfaces](../modules/Router_RouteInterfaces.md).IVerbDecorators

The VerbDecorators parameter contents.

## Type parameters

| Name | Type |
| :------ | :------ |
| `Request` | `any` |
| `Response` | `any` |

## Table of contents

### Properties

- [descriptor](Router_RouteInterfaces.IVerbDecorators.md#descriptor)
- [method](Router_RouteInterfaces.IVerbDecorators.md#method)
- [passRequest](Router_RouteInterfaces.IVerbDecorators.md#passrequest)
- [path](Router_RouteInterfaces.IVerbDecorators.md#path)
- [propertyKey](Router_RouteInterfaces.IVerbDecorators.md#propertykey)
- [target](Router_RouteInterfaces.IVerbDecorators.md#target)

## Properties

### descriptor

• **descriptor**: `PropertyDescriptor`

The property descriptor of the route endpoint function.

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
