import { add } from "./src/add";

describe("add.ts", ()=> {
    interface("Adds 2+2" , ()=> {
        expect(add(2, 2)).toBe(4);

    })
})
