[OneBE Framework - v2.2.0](../README.md) / [Exports](../modules.md) / Services/PaginationDefinition

# Module: Services/PaginationDefinition

## Table of contents

### Classes

- [PaginatedEntity](../classes/Services_PaginationDefinition.PaginatedEntity.md)
- [PaginatedOptions](../classes/Services_PaginationDefinition.PaginatedOptions.md)

### Functions

- [generatePaginatedEntityDocs](Services_PaginationDefinition.md#generatepaginatedentitydocs)

## Functions

### generatePaginatedEntityDocs

▸ **generatePaginatedEntityDocs**(`name`): `string`

Function used to quickly generate documentation for a paginated entity.
The result of the function is always: `Paginated<Entity Name>`. For example
`PaginatedUser` when you pass `User` as input.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the entity you want to document. |

#### Returns

`string`
