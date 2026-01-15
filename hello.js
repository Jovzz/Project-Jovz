const app = require("./app");


app.get("/getData", (req, res) => {
    const query = "SELECT * FROM students";

    db.execute(query, (err, results) => {
        if (err) {
            console.error("Error executing query:", err);
            res.status(500).send("Error fetching data");
        } else {
            res.json(results);
        }
    });
});
app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
})