[Spark OneBE - v1.0.13](../README.md) / [Exports](../modules.md) / [Utils/StringUtils](Utils_StringUtils.md) / formatter

# Namespace: formatter

[Utils/StringUtils](Utils_StringUtils.md).formatter

## Table of contents

### Functions

- [create](Utils_StringUtils.formatter.md#create)
- [extend](Utils_StringUtils.formatter.md#extend)

## Functions

### create

▸ **create**(`transformers`): typeof [`formatter`](Utils_StringUtils.md#formatter)

create a format function with given transformers

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transformers` | `Transformers` | functions which convert a string, indexed by a name |

#### Returns

typeof [`formatter`](Utils_StringUtils.md#formatter)

___

### extend

▸ **extend**(`prototype`, `transformers`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prototype` | `any` | prototype which should be extended by format (usually String.prototype) |
| `transformers` | `Transformers` | functions which convert a string, indexed by a name |

#### Returns

`void`
