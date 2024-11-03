import { Router } from "express";
import {
  Intro,
  About,
  Contact,
  Experience,
  Project,
} from "../models/portfolioModel.js";
import User from "../models/userModel.js";

const router = Router();
/* get all portfolio data */
router.get("/get-portfolio-data", async (req, res) => {
  try {
    const intros = await Intro.find();
    const about = await About.find();
    const contacts = await Contact.find();
    const experiences = await Experience.find();
    const projects = await Project.find();

    let sortedExperience = experiences.slice().sort((a,b) => {
      let aPeriod = new Date(a.period.split('-')[1].trim());
      let bPeriod = new Date(b.period.split('-')[1].trim());
      return bPeriod - aPeriod;
  })
    res.status(200).send({
      intro: intros[0],
      about: about[0],
      contact: contacts[0],
      experiences: sortedExperience,
      projects: projects,
    });
  } catch (error) {
    console.error("Error adding project:", error);
    res.status(500).send({
      success: false,
      message: "An error occurred while getting the portfolio data",
      error: error.message,
    });
  }
});

/* update intro */
router.post("/update-intro", async (req, res) => {
  try {
    const intro = await Intro.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: intro,
      success: true,
      message: "Intro updated successfully",
    });
  } catch (error) {
    console.error("Error adding project:", error);
    res.status(500).send({
      success: false,
      message: "An error occurred while adding the intro",
      error: error.message,
    });
  }
});

/* update about */
router.post("/update-about", async (req, res) => {
  try {
    const about = await About.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: about,
      success: true,
      message: "About updated successfully",
    });
  } catch (error) {
    console.error("Error adding project:", error);
    res.status(500).send({
      success: false,
      message: "An error occurred while adding the about",
      error: error.message,
    });
  }
});

/* add experience */
router.post("/add-experience", async (req, res) => {
  try {
    const experience = new Experience(req.body);
    await experience.save();
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience added successfully",
    });
  } catch (error) {
    console.error("Error adding project:", error);
    res.status(500).send({
      success: false,
      message: "An error occurred while adding the experience",
      error: error.message,
    });
  }
});

/* update experience */
router.put("/update-experience", async (req, res) => {
  try {
    const experience = await Experience.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience updated successfully",
    });
  } catch (error) {
    console.error("Error adding project:", error);
    res.status(500).send({
      success: false,
      message: "An error occurred while updating the experience",
      error: error.message,
    });
  }
});

/* delete experience */
router.post("/delete-experience", async (req, res) => {
  try {
    const experience = await Experience.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience deleted successfully",
    });
  } catch (error) {
    console.error("Error adding project:", error);
    res.status(500).send({
      success: false,
      message: "An error occurred while deleting the experience",
      error: error.message,
    });
  }
});

/* add project */
router.post("/add-project", async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(200).send({
      data: project,
      success: true,
      message: "Project added successfully",
    });
  } catch (error) {
    console.error("Error adding project:", error);
    res.status(500).send({
      success: false,
      message: "An error occurred while adding the project",
      error: error.message,
    });
  }
});

/* update project */
router.put("/update-project", async (req, res) => {
  try {
    const project = await Project.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: project,
      success: true,
      message: "Project updated successfully",
    });
  } catch (error) {
    console.error("Error updating project:", error);
    res.status(500).send({
      success: false,
      message: "An error occurred while adding the project",
      error: error.message,
    });
  }
});

/* delete project */
router.post("/delete-project", async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: project,
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting project:", error);
    res.status(500).send({
      success: false,
      message: "An error occurred while adding the project",
      error: error.message,
    });
  }
});

/* update contact */
router.put("/update-contact", async (req, res) => {
  try {
    const contact = await Contact.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: contact,
      success: true,
      message: "Contact updated successfully",
    });
  } catch (error) {
    console.error("Error updating contact:", error);
    res.status(500).send({
      success: false,
      message: "An error occurred while adding the project",
      error: error.message,
    });
  }
});

/* admin login */
router.post("/admin-login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    user.password = "";
    if (user) {
      res.status(200).send({
        data: user,
        success: true,
        message: "Login successfully",
      });
    } else {
      res.status(400).send({
        success: false,
        message: "Invalid username or password",
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router;
