import { DataTypes, Model, UUIDV4 } from 'sequelize';
import bcrypt from 'bcrypt'
import db from '../../config/database.config';

export interface studentAttributes {
    id: string;
    team_id: string;
    student_name: string;
    mobile: number;
    email: string;
    password: string;
    date_of_birth: string;
    institute_name: string;
    stream: string;
    city: string;
    district: string;
    state: string;
    country: string;
    status: Enumerator;
}

export class student extends Model<studentAttributes> { }

student.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: function () {
                return generateMyId()
            },
            primaryKey: true
        },
        team_id: {
            type: DataTypes.STRING
        },
        student_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mobile: {
            type: DataTypes.BIGINT,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_of_birth: {
            type: DataTypes.STRING,
            allowNull: false
        },
        institute_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        stream: {
            type: DataTypes.STRING
        },
        city: {
            type: DataTypes.STRING,
        },
        district: {
            type: DataTypes.STRING
        },
        state: {
            type: DataTypes.STRING
        },
        country: {
            type: DataTypes.STRING
        },
        status: {
            type: DataTypes.ENUM('Active', 'Inactive')
        }
    },
    {
        hooks: {},
        sequelize: db,
        tableName: 'student',
    }
);

function generateMyId() {
    return UUIDV4;
}
