[Spark OneBE - v1.0.30](../README.md) / [Exports](../modules.md) / Authentication/AuthDecorators

# Module: Authentication/AuthDecorators

## Table of contents

### Functions

- [Basic](Authentication_AuthDecorators.md#basic)
- [Bearer](Authentication_AuthDecorators.md#bearer)
- [extractUser](Authentication_AuthDecorators.md#extractuser)

## Functions

### Basic

▸ **Basic**(`target`, `propertyKey`, `descriptor`): `void`

Decorator to enable Basic Authentication for an endpoint.

Attaches to the property of the target the following metadata:
- route:auth
- route:auth:basic

Based on this metadata we know what to generate in the Documentation generator.

**`Decorator`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`Route`](../classes/Router_Route.Route.md) | The target on which we apply the decorator. |
| `propertyKey` | `string` | The property key on which we apply the decorator. |
| `descriptor` | `PropertyDescriptor` | The descriptor of the property we want to decorate. |

#### Returns

`void`

___

### Bearer

▸ **Bearer**(`target`, `propertyKey`, `descriptor`): `void`

Decorator to enable Bearer Authentication for an endpoint.

Attaches to the property of the target the following metadata:
- route:auth
- route:auth:bearer

Based on this metadata we know what to generate in the Documentation generator.

**`Decorator`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`Route`](../classes/Router_Route.Route.md) | The target on which we apply the decorator. |
| `propertyKey` | `string` | The property key on which we apply the decorator. |
| `descriptor` | `PropertyDescriptor` | The descriptor of the property we want to decorate. |

#### Returns

`void`

___

### extractUser

▸ **extractUser**(`target`, `propertyKey`, `descriptor`): `void`

Type used to define a Route Decorator function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`Route`](../classes/Router_Route.Route.md) | The target on which we apply the decorator. |
| `propertyKey` | `string` | The property on which we apply the decorator. |
| `descriptor` | `PropertyDescriptor` | The property descriptor of the property we want to apply the decorator on. |

#### Returns

`void`
