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
     * 
     */
    public getFlow(type:string, data:any):IFlow {
        
        let map:FlowTypeMap = this._flowTypeMapList.find(function(map) { return map.type == type });

        if (!map)
            throw new Error(`The type [{type}] dont have any asociated build function in the factory.`);

        return map.buildFunction(data);
    }

    /**
     * 
     */
    public addCustomFlow(type:string,  buildFunction:(data:any) => IFlow):void {
        
        if (this._flowTypeMapList.find(function(map) { return map.type == type }))
            throw new Error(`The type [{type}] already has a asociated build function in the factory.`);
        

        this._flowTypeMapList.push({
             type: type
            ,buildFunction: buildFunction
        });
    }
}

let factoryInstance = new FlowFactory();

export = factoryInstance;
