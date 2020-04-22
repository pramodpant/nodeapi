//all errors caught by async wrapper and sent to the error handler. no need for try/catch
//
//passing the next middleware to catch() function will automatically call the integrated express error handler.
//express provides it automatically.
//AsyncWrapper has been imported in routes.js -> root.js
//for imlementation of catch, see the controlller->root.js file and see the async also in same file.
// passing next in func() also allows to send custom error codes

export const AsyncWrapper = func => (req,res,next) => func(req,res,next).catch(next);