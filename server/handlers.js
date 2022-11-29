const { MongoClient, ObjectId } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;
console.log("🚀 ~ file: handlers.js ~ line 16 ~ MONGO_URI", MONGO_URI);

// const MONGO_URI = "mongodb+srv://ousmanesock:yOL2D68gKtAggvkN@cluster0.bcerdru.mongodb.net/?retryWrites=true&w=majority"

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const showCoordinates = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    console.log("Connected");
    const db = client.db("PrecisionDroneSpray");
    const getCoordinates = await db
      .collection("Coordinates")
      .findOne({ _id: ObjectId("637c432281e4dc2184ea3fcc") });
    res.status(200).json({
      status: 200,
      message: "Coordinates",
      data: getCoordinates,
    });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
    console.log(error);
  } finally {
    client.close();
    console.log("Disconnected");
  }
};

const addCoordinates = async (req, res) => {
  console.log(req.body);
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    console.log("Connected");
    const db = client.db("PrecisionDroneSpray");

    const getCoordinates = await db
      .collection("Coordinates")
      .findOne({ _id: ObjectId("637c432281e4dc2184ea3fcc") });

    res.status(200).json({
      status: 200,
      message: "Coordinates added",
      data: getCoordinates,
    });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
    console.log(error);
  } finally {
    client.close();
    console.log("Disconnected");
  }
};

const updateCoordinates = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("PrecisionDroneSpray");
    const getCoordinates = await db.collection("Coordinates").find().toArray();
    console.log(getCoordinates, "coords");
    const coordinatesToUpdate = getCoordinates[0].coordinates;
    const updateCoord = await db.collection("Coordinates").updateOne(
      { _id: ObjectId("637c432281e4dc2184ea3fcc") },
      {
        $push: {
          coordinates: req.body.coordinates,
        },
      }
    );

    console.log(updateCoord);
    res
      .status(200)
      .json({ status: 200, message: "Coordinates added", data: updateCoord });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
    console.log(error);
  } finally {
    client.close();
    console.log("Disconnected");
  }
};

const deleteCoordinates = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("PrecisionDroneSpray");
    const updateCoord = await db.collection("Coordinates").updateOne(
      { _id: ObjectId("637c432281e4dc2184ea3fcc") },
      {
        $pull: {
          coordinates: { lat: req.body.coordinates.lat },
        },
      }
    );

    console.log(updateCoord);
    res
      .status(200)
      .json({ status: 200, message: "Coordinates added", data: updateCoord });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
    console.log(error);
  } finally {
    client.close();
    console.log("Disconnected");
  }
};

module.exports = {
  addCoordinates,
  updateCoordinates,
  showCoordinates,
  deleteCoordinates,
};
