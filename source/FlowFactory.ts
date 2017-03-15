import { IFlow } from './Flows/IFlow'

export class FlowFactory {
    public IFlow getFlow(type:string) {
        return null;
    }

    public addCustomFlow(type:string, render:function():any):void {

    }
}