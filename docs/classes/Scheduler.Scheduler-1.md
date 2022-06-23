[Spark OneBE - v1.0.30](../README.md) / [Exports](../modules.md) / [Scheduler](../modules/Scheduler.md) / Scheduler

# Class: Scheduler

[Scheduler](../modules/Scheduler.md).Scheduler

Task scheduler that runs the jobs registered in the application.

## Table of contents

### Constructors

- [constructor](Scheduler.Scheduler-1.md#constructor)

### Methods

- [register](Scheduler.Scheduler-1.md#register)
- [run](Scheduler.Scheduler-1.md#run)

## Constructors

### constructor

• **new Scheduler**()

## Methods

### register

▸ **register**(`executionExpression`, `runner`): `void`

Method used to register new jobs in the tasks scheduler.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `executionExpression` | `string` | The expression used to specify when to run the job. |
| `runner` | [`TRunner`](../modules/Scheduler_IScheduleDefinition.md#trunner) \| [`TRunnerAsync`](../modules/Scheduler_IScheduleDefinition.md#trunnerasync) | The task runner function. |

#### Returns

`void`

___

### run

▸ **run**(): `void`

Method used to start the task scheduler.

#### Returns

`void`
