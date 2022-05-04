const mongoose = require('mongoose');

//this model will be used while creating a new project by a contractor
const projectSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    contractorId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'Contractor Id is required']
    },
    contractorEthAddress: {
        type: String,
        required: [true, 'Ethereum address of contractor is required'],
        length: [42, 'Invalid ethereum address'],
    },
    issueId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Issue',
        required: [true, 'Id of an issue is required']
    },
    location: {
        type: String,
        required: [true, 'Location is required']
    },
    requiredFundings: {
        type: Number,
        required: [true, 'How much fundings is needed?'],
    },
    fundingsTillDate: {
        type: Number,
        default: 0,
    },
    duration: {
        type: Number,
        required: [true, 'Duration of project is required'],
    },
    deadline: {
        type: Date,
        default: Date.now,
    },
    acceptedCurrencies: [
        {
            type: String,
            required: [true, 'Currencies which are acceptable, is required']
        }
    ],
    projectFile: {
        type: String,
        default: 'Project file'
    },
    category: {
        type: String,
        required: [true, 'Category is required']
    },
    status: {
        type: String,
        default: 'Pending',
    },
    approver: {
        type: String,
        default: 'Government'
    },
    donors: {
        type:[
            {
                type: String,
                length: [42, 'Donor address is invalid'],
            }
        ],
        default:[]
    }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;