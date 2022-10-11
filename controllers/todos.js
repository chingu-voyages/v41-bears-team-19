const Todo = require("../models/Todo");
const User = require("../models/User");

module.exports = {
  getTodos: async (req, res) => {
    // console.log(req.user);
    try {
        const todoItems = await Todo.find({ userId: req.user.id });

        // Counts all items in todo collection where status does not equal 'completed'
        const itemsLeft = await Todo.countDocuments().
            where('userId').equals(req.user.id).
            where('status').ne('Completed');

        //selects all items that have the same team but do not have the same userId as the current user.
        const teamItems = await Todo.
            find().
            where('team').equals(req.user.team).
            where('userId').ne(req.user._id);
            
        //selects all users that have the same team as the current user
        const teamMembers = await User.
            find().
            where('team').equals(req.user.team);

        teamItems.forEach(item => { //Adds userName from User collection to team todo object array
          teamMembers.forEach(member => {
              if (member._id == item.userId) {
                  item.userName = member.userName;
              }
          })
        })

        res.render("todos.ejs", {
          todos: todoItems,
          left: itemsLeft,
          user: req.user,
          team: teamItems,
          teamMembers: teamMembers,
        });
    } catch (err) {
      console.log(err);
    }
  },
  createTodo: async (req, res) => {
    try {
      let dueDate = req.body.dueDate;
      console.log(`dueDate: ${dueDate}`);
      let dueDateSliced = dueDate.slice(0, 11);
      console.log(`dueDateSliced: ${dueDateSliced}`);
      await Todo.create({
        todo: req.body.todoItem,
        completed: false,
        userId: req.body.teamMember,
        dueDate: dueDateSliced,
        status: "Not Started",
        team: req.user.team,
      });
      console.log("Todo has been added!");
      res.redirect("/todos");
    } catch (err) {
      console.log(err);
    }
  },
  updateStatus: async (req, res) => {
    try {
      await Todo.findOneAndUpdate(
        { _id: req.body.todoIdFromJSFile },
        {
          status: req.body.status,
        }
      );
      console.log(req.body, "Status Updated");
      res.json("Status Updated");
    } catch (err) {
      console.log(err);
    }
  },
  markComplete: async (req, res) => {
    try {
      await Todo.findOneAndUpdate(
        { _id: req.body.todoIdFromJSFile },
        {
          completed: true,
        }
      );
      console.log("Marked Complete");
      res.json("Marked Complete");
    } catch (err) {
      console.log(err);
    }
  },
  markIncomplete: async (req, res) => {
    try {
      await Todo.findOneAndUpdate(
        { _id: req.body.todoIdFromJSFile },
        {
          completed: false,
        }
      );
      console.log("Marked Incomplete");
      res.json("Marked Incomplete");
    } catch (err) {
      console.log(err);
    }
  },
  deleteTodo: async (req, res) => {
    console.log(req.body.todoIdFromJSFile);
    try {
      await Todo.findOneAndDelete({ _id: req.body.todoIdFromJSFile });
      console.log("Deleted Todo");
      res.json("Deleted It");
    } catch (err) {
      console.log(err);
    }
  },
};
