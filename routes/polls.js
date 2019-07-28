const express = require('express');
const router  = express.Router();


module.exports = (db) => {

  // route to list all polls
  router.get("/", (req, res) => {
    db.query(`SELECT title FROM polls;`)
      .then(data => {
        const polls = data.rows;
        res.json({ polls });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
    // res.send("Hello! This page will list all the polls");
  });

  // route to create a new poll
  router.get("/new", (req, res) => {
    res.send("Create a new poll here");
  });

  // route to submit poll
  router.post("/", (req, res) => {
    res.send("Send email to creator, submit poll to database");
  });

  // route to show poll results,
  // router.get("/:admin_url", (req, res) => {
  //   res.send("Send email to creator, submit poll to database");
  // });

  // route to show admin & voter links after poll creation
  router.get("/show/:id", (req, res) => {
    res.send("Links Here!");
  });

  // route to show poll results,
  router.get("/admin/:admin_url", (req, res) => {
    console.log('params:',req.params);
    res.send("Send email to creator, submit poll to database");
  });

  // route to vote on poll
  router.get("/voter/:voter_url", (req, res) => {
    res.send("Voter page");
  });


  // route to vote on poll
  router.post("/:voter_url", (req, res) => {
    res.send("submit vote");
  });

  return router;

};
