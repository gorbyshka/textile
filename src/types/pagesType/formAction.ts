
export type FormAction = {

    type: "CHANGE";
    name: string;
    value: string;

} | { type: "RESET" };
