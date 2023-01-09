[OneBE Framework - v2.4.6](../README.md) / [Exports](../modules.md) / Commands/DefaultProject/jsonFiles

# Module: Commands/DefaultProject/jsonFiles

## Table of contents

### Interfaces

- [DefinePackageJsonOptions](../interfaces/Commands_DefaultProject_jsonFiles.DefinePackageJsonOptions.md)

### Functions

- [babelrcFile](Commands_DefaultProject_jsonFiles.md#babelrcfile)
- [eslintrcFile](Commands_DefaultProject_jsonFiles.md#eslintrcfile)
- [nodemonFile](Commands_DefaultProject_jsonFiles.md#nodemonfile)
- [packageJsonFile](Commands_DefaultProject_jsonFiles.md#packagejsonfile)
- [tsconfigFile](Commands_DefaultProject_jsonFiles.md#tsconfigfile)

## Functions

### babelrcFile

▸ **babelrcFile**(): `Record`<`string`, `any`\>

Function used to generate the `.babelrc.json` file contents.

#### Returns

`Record`<`string`, `any`\>

___

### eslintrcFile

▸ **eslintrcFile**(): `Record`<`string`, `any`\>

Function used to generate the `.eslintrc.json` file contents.

#### Returns

`Record`<`string`, `any`\>

___

### nodemonFile

▸ **nodemonFile**(): `Record`<`string`, `any`\>

Function used to generate the `nodemon.json` file contents.

#### Returns

`Record`<`string`, `any`\>

___

### packageJsonFile

▸ **packageJsonFile**(`projectName`, `options`): `Record`<`string`, `any`\>

Function used to generate the `package.json` file contents.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `projectName` | `string` | The name of the project to be created. |
| `options` | `Partial`<[`DefinePackageJsonOptions`](../interfaces/Commands_DefaultProject_jsonFiles.DefinePackageJsonOptions.md)\> | A list with additional options used for generating the file. |

#### Returns

`Record`<`string`, `any`\>

___

### tsconfigFile

▸ **tsconfigFile**(): `Record`<`string`, `any`\>

Function used to generate the `tsconfig.json` file contents.

#### Returns

`Record`<`string`, `any`\>
