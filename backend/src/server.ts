import express from "express";
import cors from "cors";
import { desserts, sample_tags } from "./dessert-data"

const app = express();
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.get("/api/desserts", (req,res) => {
    res.send(desserts);
})

app.get("/api/desserts/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm;
    const dessert = desserts.filter(desserts => 
        desserts.name.toLowerCase().includes(searchTerm.toLowerCase()));
        res.send(dessert);
})

app.get("/api/desserts/tags", (req, res) => {
    res.send(sample_tags);
})

app.get("/api/desserts/tag/:tagName", (req, res) => {
    const tagName = req.params.tagName;
    const dessert = desserts.filter(desserts => 
        desserts.tags?.includes(tagName));
    res.send(dessert);
})

app.get("/api/desserts/:dessertId", (req, res) => {
    const dessertId = req.params.dessertId;
    const dessert = desserts.find(dessert => dessert.id == dessertId);
    res.send(dessert);
})

const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})