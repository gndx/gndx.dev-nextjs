const admin = require("firebase-admin");
const serviceAccount = require("@config/serviceAccountKey.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://gndx-asuka.firebaseapp.com"
  });
}

const db = admin.firestore();

export default async (req, res) => {
  try {
    if (req.method === 'POST') {
      if (req.body.wallet) {
        await db.collection("gndxbadge").doc().set(req.body)
          .then(() => {
            console.log("Document successfully written!");
            res.status(200).json({ success: true });
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
            res.status(200).json(error);
          });
      } else {
        res.status(400).json({
          error: "Message is required"
        });
      }
    } else {
      res.status(200).json({
        error: "Invalid request"
      });
    }
  } catch (e) {
    res.status(400).end();
  }
}