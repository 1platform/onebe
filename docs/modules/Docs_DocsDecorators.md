[Spark OneBE - v0.9.15](../README.md) / [Exports](../modules.md) / Docs/DocsDecorators

# Module: Docs/DocsDecorators

## Table of contents

### Enumerations

- [MethodMetadataType](../enums/Docs_DocsDecorators.MethodMetadataType.md)

### Type aliases

- [ClassDocs](Docs_DocsDecorators.md#classdocs)
- [EntityDocs](Docs_DocsDecorators.md#entitydocs)
- [RouteDocs](Docs_DocsDecorators.md#routedocs)

### Variables

- [controller](Docs_DocsDecorators.md#controller)
- [method](Docs_DocsDecorators.md#method)
- [schema](Docs_DocsDecorators.md#schema)

### Functions

- [getElementDocs](Docs_DocsDecorators.md#getelementdocs)
- [getEntityDocs](Docs_DocsDecorators.md#getentitydocs)

## Type aliases

### ClassDocs

Ƭ **ClassDocs**: `Record`<`string`, `string`\>

Type used to define a Class Documentation

___

### EntityDocs

Ƭ **EntityDocs**: `Record`<`string`, [`ResponseValue`](Router_RouteTypes.md#responsevalue)<`any`\>\>

Type used to define a Route Documentation

___

### RouteDocs

Ƭ **RouteDocs**: `Record`<[`MethodMetadataType`](../enums/Docs_DocsDecorators.MethodMetadataType.md), `Record`<`string`, [`ResponseValue`](Router_RouteTypes.md#responsevalue)<`any`\>\>\>

Type used to define a Route Documentation

## Variables

### controller

• **controller**: `Object`

A list of decorators to define properties of a controller.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description` | <T\>(`description`: `string`) => [`ControllerDecoratorFunction`](Router_RouteTypes.md#controllerdecoratorfunction)<`T`\> |
| `name` | <T\>(`description`: `string`) => [`ControllerDecoratorFunction`](Router_RouteTypes.md#controllerdecoratorfunction)<`T`\> |

___

### method

• **method**: `Object`

A list of decorators to define properties of a method.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `body` | (`parameter`: `string`, `type`: `string`, `description?`: `string`) => [`RouteDecorator`](Router_RouteTypes.md#routedecorator)<[`Route`](../classes/Router_Route.Route.md)\> |
| `description` | (`description`: `string`) => [`RouteDecorator`](Router_RouteTypes.md#routedecorator)<[`Route`](../classes/Router_Route.Route.md)\> |
| `parameter` | (`parameter`: `string`, `isNumeric`: `boolean`, `description?`: `string`) => [`RouteDecorator`](Router_RouteTypes.md#routedecorator)<[`Route`](../classes/Router_Route.Route.md)\> |
| `query` | (`parameter`: `string`, `type`: `string`, `description?`: `string`) => [`RouteDecorator`](Router_RouteTypes.md#routedecorator)<[`Route`](../classes/Router_Route.Route.md)\> |
| `request` | (`type`: `string`, `description?`: `string`) => [`RouteDecorator`](Router_RouteTypes.md#routedecorator)<[`Route`](../classes/Router_Route.Route.md)\> |
| `response` | (`type`: `string`, `statusCode`: [`HTTPStatus`](../enums/HTTP_HTTPStatus.HTTPStatus.md), `description?`: `string`) => [`RouteDecorator`](Router_RouteTypes.md#routedecorator)<[`Route`](../classes/Router_Route.Route.md)\> |
| `responseStatus` | (`statusCode`: [`HTTPStatus`](../enums/HTTP_HTTPStatus.HTTPStatus.md), `description?`: `string`) => [`RouteDecorator`](Router_RouteTypes.md#routedecorator)<[`Route`](../classes/Router_Route.Route.md)\> |
| `throws` | <TResponse\>(`errorCode`: [`HTTPStatus`](../enums/HTTP_HTTPStatus.HTTPStatus.md), `description`: `string`, `response?`: [`ResponseValue`](Router_RouteTypes.md#responsevalue)<`TResponse`\>) => [`RouteDecorator`](Router_RouteTypes.md#routedecorator)<[`Route`](../classes/Router_Route.Route.md)\> |

___

### schema

• **schema**: `Object`

A list of decorators to define entities.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entity` | <T\>(`name`: `string`, `description`: `string`) => [`ControllerDecoratorFunction`](Router_RouteTypes.md#controllerdecoratorfunction)<`T`\> |
| `property` | (`type`: [`BodyParameterType`](../enums/Docs_DocsInterfaces.BodyParameterType.md), `options?`: `Record`<`string`, `unknown`\>) => [`EntityDecorator`](Router_RouteTypes.md#entitydecorator)<[`Constructor`](Router_RouteTypes.md#constructor)\> |

## Functions

### getElementDocs

▸ **getElementDocs**<`Type`\>(`target`, `propertyKey?`): `Type`

A method that retrieves the element Documentation

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | `Record`<`string`, `unknown`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`Route`](../classes/Router_Route.Route.md) | The target route |
| `propertyKey?` | `string` | The property key |

#### Returns

`Type`

___

### getEntityDocs

▸ **getEntityDocs**<`Type`\>(`target`, `propertyKey?`): `Type`

A method that retrieves the entity Documentation

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | `Record`<`string`, `unknown`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`Constructor`](Router_RouteTypes.md#constructor) | The target route |
| `propertyKey?` | `string` | The property key |

#### Returns

`Type`
