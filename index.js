const app = require("express")();
const bodyParser = require("body-parser");

const port = 8081

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res, next) => {

    return res.json({message: "You will need to authorize. Consider using the client node package to handle authorization"});
});


app.listen(port);
