import { DataTypes } from "sequelize";
import { connect } from "../client";

const File = connect.define('File', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    creator: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    path: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    renderPath: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    desc: {
        type: DataTypes.TEXT,
        allowNull: false
    },
}, {
    timestamps: false,
    tableName: 'files'
})

export default File;