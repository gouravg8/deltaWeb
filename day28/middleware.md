# 1. What are MiddleWares?
#### It is an intermidiary

Request --> [Middleware] --> Response

a. in Express
    -> Middleware in express are functions that come into play After the server recieves the request and Before the responce is sent to the client

b. common Middleware functions
    - methodOverride
    - bodyParser
    - express.static
    - express.urlencoded

c. Properties
    - MW can access req and res Obj
    - chaining is possible (form one MW to another MW using next())
    - send a response -> they can send response directly from it to the client(res.send())

d. What MW can do
    - execute any code
    - make changes in Req, Res obj
    - End the Req, Res cycle( by proving {res})
    - call next MW function in the stack (using next())

e. work of MW
    - send responce
    - do {next}(what to do next) thing

    Can be
    - pathed(for special route)
        ex: app.use('/', (req, res)=> //code )
    - non-pathed(for all api routes)
        ex: app.use((req, res) => //code )
    ===They both will print what was on it but NOT specified what to do next()===
        ----loading...----
    
f. using next()
- next MW funtion is commonly denoted by 'next' name

        app.use((req, res, next)=>{
            console.log('hey biro');
            next()
        })

    - if current MW did not end the req-res cycle, it must call next() to pass the control to the next MW function

    NOTE: Do not write code after next()

g. Create utility MW's
    - Logger(print usefull informations on console)

        app.use((req, res, next)=>{
            res.restime = new Date(Date.now()).toString();
            console.log(req.method, req.path, req.resTime, req.hostname);
            next(); //passing the control to the next MW
        })
    
h. exploring app.use()
    - we can check Authorized or not user using MW before accesing the API's
    - Write MW very end of the all api's

        app.use((req, res)=>{
            res.send('page not found');
        })

i. API TOKEN  as Query String
    MiddleWare(For normal code)

        app.use('/api', (req, res, next)=>{
            let {token} = req.body;
            if(token === 'giveAccess'){
                next();
            }
            res.send('access denied');
        })
    
        app.get('/api', (req, res)=> res.send('Data'));

        // error handling MW
        app.use((err, req, res, next)=>{
            res.send(err)
        })

j. Passing Multiple MW's

    const checkToken = (req, res, next) = >{
        // bahut sara code to check the token is valid or not
    }

    app.get('/api', checkToken, (req, res) => res.send('Data'));

## 2. Error handling MW
- Normal Error Handling MW(it will execute next non-error-handler MW or go to there provide route method)

        app.use((err, req, res, next) =>{
            log('there is error, by Error Handler MW');
            next();
        })

- Error handling Error handler MW(it will search for next error handling MW)

        app.use((err, req, res, next)=>{
            log('first error handler');
            next(err);
        })

        app.use((err, req, res, next)=>{
            log('second error handler');
            next(err);  // it can give the control to next error handling MW or return to desired route
        })


l. Custom Error Class
-> utils>ExpressError.js

    class ExpressError extends Error{
        constructor(status, message){
            super();
            this.status = status;
            this.message = message;
        }
    }

    default export ExpressError;

-> index.js
    import ExpressError from '.utils/ExpressError.js'

    return new ExpressError(401, 'Faltu ka error');


m. Handle Async Errors
Note: in Async functions the next is not called, we have to call it explicitly

MiddleWare(Async):

    const checkToken = async(req, res, next)=>{
        let {token} = await req.query;
        if(token !== 'giveaccess'){
            next(new ExpressErro(401, 'Access forbid ho'));
        }
        next();
    }

n. Try-Catch for Async Error handling

    try{
        // code that may cause the error
    }catch(err){
        next(err);  // send error to error handling MW
    }

o. replace TryCatch with wrapAsync(beause async tryCatch is bulkey and we want lighter option)
    utils> wrapAsync.js

    function wrapAsync(fn){
        return function(req, res, next){
            fn(req, res, next).catch(err=> next(err));
        }
    }

p. Mongoose Errors
-> to get Error name and send Error message
make another MW to handling specific error like 'ValidationError'

    function handleError(err){
        console.log('validation error hai, sahi se fill karo');
        return err;
    }

    app.use((err, req, res, next)=>{
        if(err.name === 'ValidationError') err = handleError(err);
        next(err);
    })

q. Client side validation
form validation
    -> when we enter data in the form the browser and/or the server will check to see that the data is in the correct formate and within the contraints set by application

validation: client side-> (front to back){required: set to input. default error handler}
            server side-> (db(schema)/ error handle)

r. validation for schema
-> use joi to validate each input
-> it help us to validate server side schema

schema.js

    import Joi from 'joi'
    const listingSchema = Joi.object({
        listing: Joi.object({
            title: Joi.string().required(),
            description: Joi.string().required(),
            location: Joi.string().required(),
            country: Joi.string().required(),
            price: Joi.number().min(0),
            image: Joi.string().allow("", null),
        }).required()
    })
    export default listingSchema

index.js

    import listingSchema form 'schema.js'
    app.post('/listing', (req, res, next)=>{
        /// code
        const result = await listingSchema.validate(req.body);
        if(result.error) throw new ExpressError(400, result.error);
        /// code
    })