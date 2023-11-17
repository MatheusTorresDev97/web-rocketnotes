const knex = require("../database/knex")
const AppError = require("../utils/AppError.js")

class SessionsController {
  async create(req, res) {
    const { email, password } = req.body;

    const user = await knex("users").where({email}).first()

    if(!user) {
      throw new AppError("E-mail e/ou senha inválido", 401)
    }

    return res.json(user);
  }
}

module.exports = SessionsController;
