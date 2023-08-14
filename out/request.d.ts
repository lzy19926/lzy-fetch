type FinalResponse = {
    status: number;
    message: any;
};
interface Fetch {
    cancel(): void;
    get(): FinalResponse;
    post(): FinalResponse;
    delete(): FinalResponse;
    put(): FinalResponse;
    patch(): FinalResponse;
    head(): FinalResponse;
    options(): FinalResponse;
    rpc(): FinalResponse;
}
declare const _default: Fetch;
export default _default;
