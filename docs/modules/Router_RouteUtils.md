[Spark OneBE - v1.0.16](../README.md) / [Exports](../modules.md) / Router/RouteUtils

# Module: Router/RouteUtils

## Table of contents

### Functions

- [defineMiddleware](Router_RouteUtils.md#definemiddleware)
- [getAfterAllHooksCallbacks](Router_RouteUtils.md#getafterallhookscallbacks)
- [getAfterHooksCallbacks](Router_RouteUtils.md#getafterhookscallbacks)
- [getBeforeAllHooksCallbacks](Router_RouteUtils.md#getbeforeallhookscallbacks)
- [getBeforeHooksCallbacks](Router_RouteUtils.md#getbeforehookscallbacks)
- [getRouteCallbacks](Router_RouteUtils.md#getroutecallbacks)

## Functions

### defineMiddleware

▸ **defineMiddleware**(...`middlewares`): [`RouteDecorator`](Router_RouteTypes.md#routedecorator)

Function used to define a middleware decorator.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...middlewares` | [`HTTPMiddleware`](HTTP_HTTPTypes.md#httpmiddleware)[] | A list of middlewares you want to apply on the route. |

#### Returns

[`RouteDecorator`](Router_RouteTypes.md#routedecorator)

___

### getAfterAllHooksCallbacks

▸ **getAfterAllHooksCallbacks**(`target`): [`RouteHooksCallbacks`](Router_RouteTypes.md#routehookscallbacks)

Returns a list with Route Hook Callbacks applied after all route definitions are ran.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`Route`](../classes/Router_Route.Route.md) | The target on which we apply the callbacks. |

#### Returns

[`RouteHooksCallbacks`](Router_RouteTypes.md#routehookscallbacks)

___

### getAfterHooksCallbacks

▸ **getAfterHooksCallbacks**(`target`, `property`): [`RouteHooksCallbacks`](Router_RouteTypes.md#routehookscallbacks)

Returns a list with Route Hook Callbacks applied after a route definition is ran.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`Route`](../classes/Router_Route.Route.md) | The target on which we apply the callbacks. |
| `property` | `string` | The property for which we apply the callback. |

#### Returns

[`RouteHooksCallbacks`](Router_RouteTypes.md#routehookscallbacks)

___

### getBeforeAllHooksCallbacks

▸ **getBeforeAllHooksCallbacks**(`target`): [`RouteHooksCallbacks`](Router_RouteTypes.md#routehookscallbacks)

Returns a list with Route Hook Callbacks applied before all route definitions are ran.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`Route`](../classes/Router_Route.Route.md) | The target on which we apply the callbacks. |

#### Returns

[`RouteHooksCallbacks`](Router_RouteTypes.md#routehookscallbacks)

___

### getBeforeHooksCallbacks

▸ **getBeforeHooksCallbacks**(`target`, `property`): [`RouteHooksCallbacks`](Router_RouteTypes.md#routehookscallbacks)

Returns a list with Route Hook Callbacks applied before a route definition is ran.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`Route`](../classes/Router_Route.Route.md) | The target on which we apply the callbacks. |
| `property` | `string` | The property for which we apply the callback. |

#### Returns

[`RouteHooksCallbacks`](Router_RouteTypes.md#routehookscallbacks)

___

### getRouteCallbacks

▸ **getRouteCallbacks**(`target`): [`RouteCallbacks`](Router_RouteTypes.md#routecallbacks)

Returns a list with Route Callbacks applied to a route.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`Route`](../classes/Router_Route.Route.md) | The target on which we apply the callbacks. |

#### Returns

[`RouteCallbacks`](Router_RouteTypes.md#routecallbacks)
