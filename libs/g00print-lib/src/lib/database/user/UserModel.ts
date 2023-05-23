import { DataTypes } from 'sequelize';
import { connect } from '../client'
import { User } from './user-lib';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('admin', 'user'),
        allowNull: false,
        defaultValue: false
    },
    refreshToken: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: false,
    sequelize: connect,
    tableName: 'users'
})


User.authenticate = async (email: string, password: string) => {
    const getToken = "secretNinja"
    const user = await User.findOne({ where: { email } });

    if (!user) {
        throw new Error('User not found');
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
        throw new Error('Password is incorrect');
    }
    const token = jwt.sign({ id: user.id, role: user.role }, getToken, { expiresIn: '1h' });
    return token;
}


User.beforeCreate(async (user) => {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
});

User.beforeUpdate(async (user) => {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
});




export default User;


