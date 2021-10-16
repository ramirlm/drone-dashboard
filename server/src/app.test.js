const rewire = require("rewire")
const app = rewire("./app")
const App = app.__get__("App")
// @ponicode
describe("middlewares", () => {
    let inst

    beforeEach(() => {
        inst = new App()
    })

    test("0", () => {
        let callFunction = () => {
            inst.middlewares()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("routes", () => {
    let inst

    beforeEach(() => {
        inst = new App()
    })

    test("0", () => {
        let callFunction = () => {
            inst.routes()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("exceptionHandler", () => {
    let inst

    beforeEach(() => {
        inst = new App()
    })

    test("0", () => {
        let callFunction = () => {
            inst.exceptionHandler()
        }
    
        expect(callFunction).not.toThrow()
    })
})
