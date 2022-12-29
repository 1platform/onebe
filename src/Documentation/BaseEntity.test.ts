import { describe, expect, test } from "@jest/globals";
import { BaseEntity } from "@/Documentation/index";
import { createEntity } from "@/Documentation/BaseEntity";

class Sample extends BaseEntity {
  public field1: string;
  public field2: number;
}

describe("BaseEntity", () => {
  test("Create a BaseEntity without options", () => {
    const sample: Sample = createEntity<Sample>(Sample);
    expect(sample.field1).toBeUndefined();
    expect(sample.field2).toBeUndefined();
  });
  test("Create a BaseEntity with options", () => {
    const sample = createEntity<Sample>(Sample, {
      field1: "ana",
      field2: 2,
    });
    expect(sample.field1).not.toBeUndefined();
    expect(sample.field2).not.toBeUndefined();
    expect(sample.field1).toBe("ana");
    expect(sample.field2).toBe(2);
  });
  test("BaseEntity.toJSON to get the JSON", () => {
    const sample = createEntity<Sample>(Sample, {
      field1: "ana",
      field2: 2,
    });
    expect(sample.field1).not.toBeUndefined();
    expect(sample.field2).not.toBeUndefined();
    expect(sample.field1).toBe("ana");
    expect(sample.field2).toBe(2);
    expect(sample.toJSON()).toStrictEqual({
      field1: "ana",
      field2: 2,
    });
    expect(sample.toObject()).toStrictEqual(sample.toJSON());
  });
});
