[Spark OneBE - v0.9.15](../README.md) / [Exports](../modules.md) / Docs/DocsHelpers

# Module: Docs/DocsHelpers

## Table of contents

### Interfaces

- [IPropertyOptions](../interfaces/Docs_DocsHelpers.IPropertyOptions.md)
- [IPropertyResult](../interfaces/Docs_DocsHelpers.IPropertyResult.md)

### Type aliases

- [PropertyDefinitionFunction](Docs_DocsHelpers.md#propertydefinitionfunction)

### Variables

- [docsHelpers](Docs_DocsHelpers.md#docshelpers)

## Type aliases

### PropertyDefinitionFunction

Ƭ **PropertyDefinitionFunction**: (`propertyName`: `string`, `type`: [`BodyParameterType`](../enums/Docs_DocsInterfaces.BodyParameterType.md), `options?`: [`IPropertyOptions`](../interfaces/Docs_DocsHelpers.IPropertyOptions.md)) => [`IPropertyResult`](../interfaces/Docs_DocsHelpers.IPropertyResult.md)

#### Type declaration

▸ (`propertyName`, `type`, `options?`): [`IPropertyResult`](../interfaces/Docs_DocsHelpers.IPropertyResult.md)

Interface property definition method.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertyName` | `string` | The name of the property we want to document. |
| `type` | [`BodyParameterType`](../enums/Docs_DocsInterfaces.BodyParameterType.md) | The data type of the property. |
| `options?` | [`IPropertyOptions`](../interfaces/Docs_DocsHelpers.IPropertyOptions.md) | The options passed to the documentation engine. |

##### Returns

[`IPropertyResult`](../interfaces/Docs_DocsHelpers.IPropertyResult.md)

## Variables

### docsHelpers

• **docsHelpers**: `Object`

Documentation helper function to document interfaces and properties.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `interface` | (`name`: `string`, `description?`: `string`) => [`IPropertyResult`](../interfaces/Docs_DocsHelpers.IPropertyResult.md) |
| `property` | (`interfaceName`: `string`, `propertyName`: `string`, `type`: [`BodyParameterType`](../enums/Docs_DocsInterfaces.BodyParameterType.md), `options`: [`IPropertyOptions`](../interfaces/Docs_DocsHelpers.IPropertyOptions.md)) => [`IPropertyResult`](../interfaces/Docs_DocsHelpers.IPropertyResult.md) |
