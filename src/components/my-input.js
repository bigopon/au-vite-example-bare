import { bindable } from "aurelia"

export class MyInput {
    static containerless = true
    static capture = true

    @bindable label
}
