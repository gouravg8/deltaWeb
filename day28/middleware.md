# 1. What are MiddleWares?

> **It is an intermidiary**

`Request` --> `[Middleware]` --> `Response`

1. in Express
   -> Middleware in express are functions that come into play After the server recieves the request and Before the responce is sent to the client

2. common Middleware functions - methodOverride - bodyParser - express.static - express.urlencoded

3. Properties - MW can access req and res Obj - chaining is possible (form one MW to another MW using `next()`) - send a response -> they can send response directly from it to the client(`res.send()`)

4. What MW can do - execute any code - make changes in Req, Res obj - End the Req, Res cycle( by proving {`res`}) - call next MW function in the stack (using `next()`)

5. work of MW - send responce - do {`next`}(what to do next) thing  
   Can be

   - pathed(for special route)

     ```js
     app.use('/', (req, res)=> /*code*/ )
     ```

   - non-pathed(for all api routes)

     ```js
     app.use((req, res) => /*code*/ )
     ```

   They both will print what was on it but NOT specified what to do next()  
    **`loading...`**

6. using next()

   - next MW funtion is commonly denoted by 'next' name

     ```js
     app.use((req, res, next) => {
       console.log("hey biro");
       next();
     });
     ```

   - if current MW did not end the req-res cycle, it must call next() to pass the control to the next MW function

   NOTE: Do not write code after next()

7. Create utility MW's - Logger(print usefull informations on console)

   ```js
   app.use((req, res, next) => {
     res.restime = new Date(Date.now()).toString();
     console.log(req.method, req.path, req.resTime, req.hostname);
     next(); //passing the control to the next MW
   });
   ```

8. exploring `app.use()` - we can check Authorized or not user using MW before accesing the API's - Write MW very end of the all api's

   ```js
   app.use((req, res) => {
     res.send("page not found");
   });
   ```

9. API TOKEN as Query String  
   MiddleWare(For normal code)

   ```js
   app.use("/api", (req, res, next) => {
     let { token } = req.body;
     if (token === "giveAccess") {
       next();
     }
     res.send("access denied");
   });

   app.get("/api", (req, res) => res.send("Data"));

   // error handling MW
   app.use((err, req, res, next) => {
     res.send(err);
   });
   ```

10. Passing Multiple MW's

    ```js
    const checkToken = (req, res, next) = >{
        // bahut sara code to check the token is valid or not
    }

    app.get('/api', checkToken, (req, res) => res.send('Data'));
    ```

## 2. Error handling MW

- Normal Error Handling MW(it will execute next non-error-handler MW or go to there provide route method)

  ```js
  app.use((err, req, res, next) => {
    log("there is error, by Error Handler MW");
    next();
  });
  ```

- Error handling Error handler MW(it will search for next error handling MW)

  ```js
  app.use((err, req, res, next) => {
    log("first error handler");
    next(err);
  });

  app.use((err, req, res, next) => {
    log("second error handler");
    next(err); // it can give the control to next error handling MW or return to desired route
  });
  ```

1. Custom Error Class

    - `utils>ExpressError.js`

    ```js
    class ExpressError extends Error {
      constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
      }
    }
    export default ExpressError;
    ```

    - `index.js`
      import ExpressError from `'.utils/ExpressError.js'`

    ```js
    return new ExpressError(401, "Faltu ka error");
    ```

2. Handle Async Errors
    _Note: in Async functions the next is not called, we have to call it explicitly_

    MiddleWare(Async):

    ```js
    const checkToken = async (req, res, next) => {
      let { token } = await req.query;
      if (token !== "giveaccess") {
        next(new ExpressErro(401, "Access forbid ho"));
      }
      next();
    };
    ```

3. Try-Catch for Async Error handling

    ```js
    try {
      // code that may cause the error
    } catch (err) {
      next(err); // send error to error handling MW
    }
    ```

4. replace TryCatch with wrapAsync(beause async tryCatch is bulkey and we want lighter option)
    utils> wrapAsync.js

    ```js
    function wrapAsync(fn) {
      return function (req, res, next) {
        fn(req, res, next).catch((err) => next(err));
      };
    }
    ```

5. Mongoose Errors
    -> to get Error name and send Error message
    make another MW to handling specific error like 'ValidationError'

    ```js
    function handleError(err) {
      console.log("validation error hai, sahi se fill karo");
      return err;
    }

    app.use((err, req, res, next) => {
      if (err.name === "ValidationError") err = handleError(err);
      next(err);
    });
    ```

6. Client side validation
    form validation - when we enter data in the form the browser and/or the server will check to see that the data is in the correct formate and within the contraints set by application

    - validation: client side-> **(front to back){required: set to input. default error handler}**
    - server side-> **(db(schema)/ error handle)**

7. validation for schema  
    - use joi to validate each input  
    - it help us to validate server side schema

    `schema.js`

    ```js
    import Joi from "joi";
    const listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.number().min(0),
        image: Joi.string().allow("", null),
    }).required(),
    });
    export default listingSchema;
    ```

    `index.js`

    ```js
    import listingSchema form 'schema.js'
    app.post('/listing', (req, res, next)=>{
        /// code
        const result = await listingSchema.validate(req.body);
        if(result.error) throw new ExpressError(400, result.error);
        /// code
    })
    ```
