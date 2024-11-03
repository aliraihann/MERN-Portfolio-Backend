import mongoose, { mongo } from "mongoose";

const introSchema = new mongoose.Schema({
    welcomeText: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    caption: {
        type: String,
    },
    description: {
        type: String,
    },
});

const aboutSchema = new mongoose.Schema({
    imgUrl: {
        type: String
    },
    description1: {
        type: String,
        required: true
    },
    description2: {
        type: String
    },
    skills: {
        type: Array,
        required: true
    },
});

const experienceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    period: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    technologies: {
        type: Array,
        required: true
    },
});

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    linkedin: {
        type: String,
        required: true
    },
    github: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

const Intro = mongoose.model("intros", introSchema);
const About = mongoose.model("abouts", aboutSchema);
const Experience = mongoose.model("experiences", experienceSchema);
const Project = mongoose.model("projects", projectSchema);
const Contact = mongoose.model("contacts", contactSchema);

export {Intro, About, Experience, Project, Contact};