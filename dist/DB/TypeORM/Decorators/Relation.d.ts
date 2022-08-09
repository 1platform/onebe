import { JoinColumnOptions, ObjectType, RelationOptions } from "typeorm";
import { Constructor, PropertyDecorator } from "../../../Documentation/MetadataTypes";
export { JoinTable } from "typeorm";
export declare function ManyToOne<T = Constructor>(typeFunctionOrTarget: string | ((type?: any) => ObjectType<T>), options?: RelationOptions): PropertyDecorator;
export declare function ManyToMany<T = Constructor>(typeFunctionOrTarget: string | ((type?: any) => ObjectType<T>), inverseSide?: string | ((object: T) => any), options?: RelationOptions): PropertyDecorator;
export declare function OneToMany<T = Constructor>(typeFunctionOrTarget: string | ((type?: any) => ObjectType<T>), inverseSide?: string | ((object: T) => any), options?: RelationOptions): PropertyDecorator;
export declare function OneToOne<T = Constructor>(typeFunctionOrTarget: string | ((type?: any) => ObjectType<T>), options?: RelationOptions): PropertyDecorator;
export declare function JoinColumn(options?: JoinColumnOptions & {
    description?: string;
}): PropertyDecorator;
