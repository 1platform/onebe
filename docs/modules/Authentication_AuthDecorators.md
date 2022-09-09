[OneBE Framework - v2.0.1](../README.md) / [Exports](../modules.md) / Authentication/AuthDecorators

# Module: Authentication/AuthDecorators

## Table of contents

### Functions

- [Basic](Authentication_AuthDecorators.md#basic)
- [Bearer](Authentication_AuthDecorators.md#bearer)
- [extractUser](Authentication_AuthDecorators.md#extractuser)

## Functions

### Basic

▸ **Basic**(`target`, `propertyKey`, `descriptor`): `void`

Decorator used to enable Basic Authentication for an endpoint.

Using this decorator you can restrict the access to an endpoint only to the users
that are authenticated. Also, by using this decorator we mark the endpoint as
authenticated in the generated documentation files.

Using the basic authentication method, the authentication engine requires that
the user pass a valid username and password combination to it. The credentials
must be passed inside the `Authorization` header after the token `Basic` and
in a base64 encoded version.

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

Decorator used to enable Bearer Authentication for an endpoint.

Using this decorator you can restrict the access to an endpoint only to the users
that are authenticated. Also, by using this decorator we mark the endpoint as
authenticated in the generated documentation files.

Using the bearer authentication method, the authentication engine requires that
the `Authorization` header be present in the request and have a valid value:
the token Bearer followed by a JSON Web Token (JWT).

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
