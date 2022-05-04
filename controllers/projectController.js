const { query } = require('express');
const Project = require('../models/projectModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.createNewProject = catchAsync(
    async (req, res, next) => {

        const { contractorId, contractorEthAddress, issueId } = req.body;

        const projectIfPresent = await Project.findOne({ contractorId, issueId, contractorEthAddress });

        if (projectIfPresent) {
            return next(new AppError('You have already submitted a project regarding the mentioned issue!', 400));
        }

        const project = await Project.create(req.body);

        res.json({
            success: true,
            project,
            message: 'The project is created successfully!'
        });

    }
);

exports.getAProject = catchAsync(
    async (req, res, next) => {
        const project = await Project.findById(req.params.projectId);

        if (!project) {
            return next(new AppError('Project is not found!'));
        }

        res.json({
            status: true,
            project,
        });
    }
);

exports.getAllProjects = catchAsync(
    async (req, res, next) => {

        const projects = await Project.find(req.query);

        res.json({
            success: true,
            length: projects.length,
            projects,
        })
    }
)