const timeStampMiddleware = require('../lib/middleware/timestamp.js');

describe('it is getting the date and function is running', ()=> {
    
    let consoleSpy;
    beforeEach(()=> {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(()=> {
        // put back the implementation of console.log
        consoleSpy.mockRestore();
    });
    
    let req = {};
    let res = {};
    let next = jest.fn();

    it('properly running get date requests', ()=> {
        timeStampMiddleware(req, res, next);
        expect(consoleSpy).toHaveBeenCalled();
    }); 
});
