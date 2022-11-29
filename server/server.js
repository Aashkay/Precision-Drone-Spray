const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require('cors')
const {
	addCoordinates,
	updateCoordinates,
	showCoordinates,
	deleteCoordinates
} = require("./handlers");
express()
	.use(helmet())
	.use(cors())
	.use(morgan("tiny"))
	.use(express.json())
	.get("/precisiondronespray", (req, res) => {
		res.status(200).json({ status: 200, message: "Welcome!" });
	})
	.get("/getCoordinates", showCoordinates)
	.post("/addCoordinates", addCoordinates)
	.post("/updateCoordinates", updateCoordinates)
	.post("/deleteCoordinates", deleteCoordinates)


	.listen(8000, () => {
		console.log(`Server launched on port 8000`);
	});
