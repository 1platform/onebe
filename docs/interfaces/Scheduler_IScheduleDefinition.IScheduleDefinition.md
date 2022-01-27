[Spark OneBE - v1.0.13](../README.md) / [Exports](../modules.md) / [Scheduler/IScheduleDefinition](../modules/Scheduler_IScheduleDefinition.md) / IScheduleDefinition

# Interface: IScheduleDefinition

[Scheduler/IScheduleDefinition](../modules/Scheduler_IScheduleDefinition.md).IScheduleDefinition

Task scheduler parameter definition.

## Table of contents

### Properties

- [executionExpression](Scheduler_IScheduleDefinition.IScheduleDefinition.md#executionexpression)
- [runner](Scheduler_IScheduleDefinition.IScheduleDefinition.md#runner)

## Properties

### executionExpression

• **executionExpression**: `string`

The expression used to specify when to run the job.

___

### runner

• **runner**: [`TRunner`](../modules/Scheduler_IScheduleDefinition.md#trunner) \| [`TRunnerAsync`](../modules/Scheduler_IScheduleDefinition.md#trunnerasync)

The task runner function.
