const { Router } = require("express")

const usersRoutes = Router()

function myMiddleware(req, res, next) {
    console.log('Você passsou pelo Middleware');
    if (!req.body.isAdmin) {
        return res.json({ message: "user unauthorized" })
    }

    next()
}

const UsersController = require("../controllers/UsersController")

const usersController = new UsersController();

//usersRoutes.use(myMiddleware)
usersRoutes.post("/", myMiddleware, usersController.create);

module.exports = usersRoutes;