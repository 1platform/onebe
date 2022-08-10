import { RouteDecorator } from "../../../Router/RouteTypes";
import { IEndpointBodyParameter } from "../../Definition/RouteMetadata";
import { QueryParameterType } from "../../Definition/DataTypes";
export declare function Parameter(parameter: string, isNumeric?: boolean, description?: string): RouteDecorator;
export declare function Query(parameter: string, type?: QueryParameterType, description?: string): RouteDecorator;
export declare function Request(entity: string, isArray?: boolean, description?: string): RouteDecorator;
export declare function Body(parameters: IEndpointBodyParameter[] | IEndpointBodyParameter): RouteDecorator;
