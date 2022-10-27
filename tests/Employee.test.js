const Employee = require("../lib/Employee")

describe("NewEmployee", () =>{
    describe("Initialiation", () => {
        it('Should create a new employee when it is entered within the prompt', () => {
            const NewEmployee = new Employee();
            expect(typeof(NewEmployee)).toBe("object")
        })
    })
})

