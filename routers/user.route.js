const { Router } = require("express");
const userService = require("../services/user.service");
const route = Router();

// C R U D
// POST GET PUT DELETE

route.get("/", async (req, res) => {
  const users = await userService.getAllUser();
  res.jsonp(users);
});

route.get("/:userId", async (req, res) => {
  const userId = await userService.getUserById(req.params.userId);
  res.jsonp(userId)
});

route.post("/", async (req, res) => {
  const user = await userService.createUser(req.body);
  res.jsonp(user);
});

route.put("/:userId", async(req, res) => {
    const user = await userService.updateUserById(req.params.userId, req.body);
    res.jsonp(user)
})

route.delete("/:userId", async(req, res) => {
    const user = await userService.deleteUser(req.params.userId);
    res.jsonp(user)
})


module.exports = route;
