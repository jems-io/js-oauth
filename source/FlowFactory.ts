import { IFlow } from './Flows/IFlow'

type FlowTypeMap= {
    type:string,
    buildFunction:(data:any) => IFlow
};

/**
 * Represents a factory that produce materialized instances of flows.
 */
class FlowFactory {
  
    private _flowTypeMapList:FlowTypeMap[];

    /**
     * Get a new flow instance builded with the given type and data.
     * @param type Represents the type of flow to instantiate.
     * @param data Represents the data to deserialize into the flow.
     */
    public getFlow(type:string, data:any):IFlow {
        
        let map:FlowTypeMap = this._flowTypeMapList.find(function(map:FlowTypeMap) { return map.type == type });

        if (!map)
            throw new Error('The type [' + type + '] dont have any asociated build function in the factory.');

        return map.buildFunction(data);
    }

    /**
     * Set the given build function as a builder for the given type. 
     * @param type Represents the type to assing the builder function.
     * @param buildFunction  Represents the function the build the flow of the given type.
     */
    public setFlowTypeBuilder(type:string,  buildFunction:(data:any) => IFlow):void {
        
        if (this._flowTypeMapList.find(function(map:FlowTypeMap) { return map.type == type }))
            throw new Error('The type [' + type + '] already has a asociated build function in the factory.');
        

        this._flowTypeMapList.push({
             type: type
            ,buildFunction: buildFunction
        });
    }
}

export = new FlowFactory();
