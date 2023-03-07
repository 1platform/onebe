[OneBE Framework - v2.6.16](../README.md) / [Exports](../modules.md) / [Services/PaginationDefinition](../modules/Services_PaginationDefinition.md) / IPaginatedOptions

# Interface: IPaginatedOptions<Entity\>

[Services/PaginationDefinition](../modules/Services_PaginationDefinition.md).IPaginatedOptions

## Type parameters

| Name |
| :------ |
| `Entity` |

## Implemented by

- [`PaginatedOptions`](../classes/Services_PaginationDefinition.PaginatedOptions.md)

## Table of contents

### Properties

- [options](Services_PaginationDefinition.IPaginatedOptions.md#options)
- [page](Services_PaginationDefinition.IPaginatedOptions.md#page)
- [size](Services_PaginationDefinition.IPaginatedOptions.md#size)

## Properties

### options

• `Optional` **options**: `FindManyOptions`<`Entity`\>

A list of options to be used in the data filtering and displaying.

___

### page

• `Optional` **page**: `number`

The page we need to fetch.

___

### size

• `Optional` **size**: `number`

How many records should be returned.
