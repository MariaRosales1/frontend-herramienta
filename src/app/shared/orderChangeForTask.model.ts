export class OrderChangeForTask {

    public numberOrder: number;
    public priority: string;
    public description: string;
    public state?: string;
    public phase: string;
    public idSprint: string;
    public stateTask: string;
    public checked: boolean;

    constructor() {
        this.checked = false;
    }

}