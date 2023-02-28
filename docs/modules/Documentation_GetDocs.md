[OneBE Framework - v2.6.7](../README.md) / [Exports](../modules.md) / Documentation/GetDocs

# Module: Documentation/GetDocs

## Table of contents

### Enumerations

- [DocsType](../enums/Documentation_GetDocs.DocsType.md)

### Functions

- [GetDocs](Documentation_GetDocs.md#getdocs)

## Functions

### GetDocs

▸ **GetDocs**(`type?`): `string` \| `Record`<`string`, `any`\>

Function used to generate the documentation of the application routes
and entities based on the given generator passed as input.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `type?` | [`DocsType`](../enums/Documentation_GetDocs.DocsType.md) | `DocsType.SWAGGER_YAML` | The type of the documentation generator. |

#### Returns

`string` \| `Record`<`string`, `any`\>
