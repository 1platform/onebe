[OneBE Framework - v2.4.11](../README.md) / [Exports](../modules.md) / Scheduler/IScheduleDefinition

# Module: Scheduler/IScheduleDefinition

## Table of contents

### Interfaces

- [IScheduleDefinition](../interfaces/Scheduler_IScheduleDefinition.IScheduleDefinition.md)

### Type Aliases

- [TRunner](Scheduler_IScheduleDefinition.md#trunner)
- [TRunnerAsync](Scheduler_IScheduleDefinition.md#trunnerasync)

## Type Aliases

### TRunner

Ƭ **TRunner**: () => `void`

#### Type declaration

▸ (): `void`

Type used to define how a task runner job should look like.

##### Returns

`void`

___

### TRunnerAsync

Ƭ **TRunnerAsync**: () => [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Type declaration

▸ (): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Type used to define how an async task runner job should look like.

##### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>
