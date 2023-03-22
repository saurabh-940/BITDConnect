import express from "express";
import event from "../schema/eveSchema.js";
import clubLogin from "../schema/userSchema.js";
import multer from "multer";
import moment from "moment/moment.js";

const router = express.Router();

const imgconfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads");
  },
  filename: (req, file, callback) => {
    callback(null, `imgae-${Date.now()}.${file.originalname}`);
  },
});

const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback(new Error("only images is allowd"));
  }
};

const upload = multer({
  storage: imgconfig,
  fileFilter: isImage,
});

router.post("/AddEvent", upload.single("photo"), async (req, res) => {
  const { filename } = req.file;
  const teve = req.body;

  if (!filename || !teve) {
    res.status(401).json({ status: 401, message: "fill all the data" });
  }
  try {
    const date = moment(new Date()).format("YYYY-MM-DD");

    const newEvent = new event({
      club: teve.club,
      eventname: teve.eventname,
      eventdesc: teve.eventdesc,
      eventdate: teve.eventdate,
      venue: teve.venue,
      reglink: teve.reglink,
      eventlink: teve.eventlink,
      evePoster: filename,
      date: date,
    });

    const finaldata = await newEvent.save();

    res.status(201).json({ status: 201, finaldata });
  } catch (error) {
    res.status(401).json({ status: 401, error });
  }
});

router.get("/Club", async (req, res) => {
  try {
    const getEve = await event.find();

    res.status(201).json({ status: 201, getEve });
  } catch (error) {
    res.status(401).json({ status: 401, error });
  }
});

router.get("/Login", async (req, res) => {
  try {
    const getEmail = await clubLogin.find();

    res.status(201).json({ status: 201, getEmail });
  } catch (error) {
    res.status(401).json({ status: 401, error });
  }
});

export default router;

// const addEve = async (req, res) => {
//   const teve = request.body;
//   const newEve = event(teve);

//   try {
//     await newEve.save();
//     response.status(201).json(newEve);
//   } catch (err) {
//     response.status(401).json({ message: err.message });
//   }

// };

// const getEve = async (request, response) => {
//   try {
//     const newEvent = await event.find({});
//     response.status(201).json(newEvent);
//   } catch (err) {
//     response.status(401).json({ message: err.message });
//   }
// };

// router.post("/AddEvent", addEve);
// router.get("/Club", getEve);
