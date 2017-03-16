import { FlowResult } from "./Models/FlowResult";

/**
 * Represents the a builder to vuild flows results.
 */
export interface IFlowResultBuilder {
    /**
     * Return a builder FlowResult.
     */
    getResult():Promise<FlowResult>
}