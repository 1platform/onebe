[OneBE Framework - v2.1.5](../README.md) / [Exports](../modules.md) / Authentication/AuthDecorators

# Module: Authentication/AuthDecorators

## Table of contents

### Type Aliases

- [SignMethodOptions](Authentication_AuthDecorators.md#signmethodoptions)

### Functions

- [Basic](Authentication_AuthDecorators.md#basic)
- [Bearer](Authentication_AuthDecorators.md#bearer)
- [ExtractUser](Authentication_AuthDecorators.md#extractuser)
- [VerifyURL](Authentication_AuthDecorators.md#verifyurl)
- [signURL](Authentication_AuthDecorators.md#signurl)

## Type Aliases

### SignMethodOptions

Ƭ **SignMethodOptions**: `Object`

A list with all the options that you can pass to the sign method.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `address?` | `string` | If specified, the URL will be valid only when this Address parameter is specified. |
| `expireAt?` | `number` | If you don't specify the Time To Live (TTL) parameter, you can specify a timestamp at which the URL will not be valid. |
| `method?` | `string` \| `string`[] | The method or a list of methods allowed to access the endpoint secured by the signed URL. |
| `timeToLive?` | `number` | How many seconds should the URL be valid. |

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

### ExtractUser

▸ **ExtractUser**(`target`, `propertyKey`, `descriptor`): `void`

Middleware used to extract the user from the request when using Bearer Authentication
on a mixed route (Public and Protected).

Use this middleware when you have to provide an endpoint that based on the values
available in the header, return additional information.

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

### VerifyURL

▸ **VerifyURL**(): [`RouteDecorator`](Router_RouteTypes.md#routedecorator)

Middleware used to verify if a signed URL is valid.

**`Decorator`**

#### Returns

[`RouteDecorator`](Router_RouteTypes.md#routedecorator)

___

### signURL

▸ **signURL**(`url`, `options?`): `string`

Function used to create signed URLs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The URL to be signed. |
| `options?` | [`SignMethodOptions`](Authentication_AuthDecorators.md#signmethodoptions) | The options used for the URL signing. |

#### Returns

`string`
