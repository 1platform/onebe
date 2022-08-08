import { ColumnOptions, JoinColumnOptions } from "typeorm";
import { PropertyDecorator } from "../../../Documentation/MetadataTypes";
import { PrimaryColumnOptions } from "typeorm/decorator/columns/PrimaryColumn";
import { PrimaryGeneratedColumnNumericOptions } from "typeorm/decorator/options/PrimaryGeneratedColumnNumericOptions";
import { ViewColumnOptions } from "typeorm/decorator/options/ViewColumnOptions";
import { ColumnEmbeddedOptions } from "typeorm/decorator/options/ColumnEmbeddedOptions";
interface IExtendedColumnOptions extends ColumnOptions {
    description?: string;
}
export declare function UpdateDateColumn(options?: IExtendedColumnOptions): PropertyDecorator;
export declare function DeleteDateColumn(options?: IExtendedColumnOptions): PropertyDecorator;
export declare function CreateDateColumn(options?: IExtendedColumnOptions): PropertyDecorator;
export declare function PrimaryColumn(options?: PrimaryColumnOptions & {
    description?: string;
}): PropertyDecorator;
export declare function PrimaryGeneratedColumn(strategy: PrimaryGeneratedColumnNumericOptions | string, options: PrimaryGeneratedColumnNumericOptions & {
    description?: string;
}): PropertyDecorator;
export declare function VersionColumn(options?: IExtendedColumnOptions): PropertyDecorator;
export declare function ViewColumn(options?: ViewColumnOptions & {
    description?: string;
}): PropertyDecorator;
export declare function ObjectIdColumn(options?: IExtendedColumnOptions): PropertyDecorator;
export declare function Column(options?: ColumnOptions & ColumnEmbeddedOptions & {
    description?: string;
}): PropertyDecorator;
export declare function JoinColumn(options?: JoinColumnOptions & {
    description?: string;
}): PropertyDecorator;
export {};
