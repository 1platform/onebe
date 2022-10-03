[OneBE Framework - v2.1.7](../README.md) / [Exports](../modules.md) / [Documentation/Definition/RouteMetadata](../modules/Documentation_Definition_RouteMetadata.md) / IRouteMetadata

# Interface: IRouteMetadata

[Documentation/Definition/RouteMetadata](../modules/Documentation_Definition_RouteMetadata.md).IRouteMetadata

Interface describing an object used to hold the metadata information
about a route (controller).

## Table of contents

### Properties

- [basePath](Documentation_Definition_RouteMetadata.IRouteMetadata.md#basepath)
- [controller](Documentation_Definition_RouteMetadata.IRouteMetadata.md#controller)
- [customPath](Documentation_Definition_RouteMetadata.IRouteMetadata.md#custompath)
- [description](Documentation_Definition_RouteMetadata.IRouteMetadata.md#description)
- [endpoints](Documentation_Definition_RouteMetadata.IRouteMetadata.md#endpoints)
- [group](Documentation_Definition_RouteMetadata.IRouteMetadata.md#group)
- [isAPI](Documentation_Definition_RouteMetadata.IRouteMetadata.md#isapi)
- [isDocs](Documentation_Definition_RouteMetadata.IRouteMetadata.md#isdocs)
- [name](Documentation_Definition_RouteMetadata.IRouteMetadata.md#name)

## Properties

### basePath

• **basePath**: `string`[]

A list of base paths that will be prepended to each endpoint URL.

___

### controller

• **controller**: `string`

The Route Class name - The name of the Class that exposes the route.

___

### customPath

• `Optional` **customPath**: `string`

When using the

**`Custom`**

decorator on a Route, the framework needs to keep
track of what it is and apply it accordingly.

___

### description

• `Optional` **description**: `string`

A description of what the route does.

___

### endpoints

• **endpoints**: `Record`<`string`, [`IEndpointMetadata`](Documentation_Definition_RouteMetadata.IEndpointMetadata.md)<`any`, `any`\>\>

A map containing all the endpoint exposed by the route, where the key is
the name of the method that performs the desired action.

___

### group

• `Optional` **group**: `string`[]

A list of groups of which this route is a member of.

___

### isAPI

• `Optional` **isAPI**: `boolean`

Flag used to describe if the endpoint is an API endpoint or not.
If an endpoint is an API endpoint, then the base path of the URL
will be the one configured in `api.path`.

___

### isDocs

• `Optional` **isDocs**: `boolean`

Flag used to describe if the endpoint is a Documentation endpoint or not.
If an endpoint is a Documentaation endpoint, then the base path of the URL
will be the one configured in `docs.path`.

___

### name

• `Optional` **name**: `string`

The name of the Route/Controller. The name should describe what does
the route do. For example: UserController -> "User Management Controller"
