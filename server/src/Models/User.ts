import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from '.'

interface UserAttributes {
    id: string,
    name: string,
    username: string,
    password: string,
}

interface UserCreationAttributes
    extends Optional<UserAttributes, 'id'>{}

interface UserInstance
    extends Model<UserAttributes, UserCreationAttributes>, UserAttributes{
        createdAt?: Date;
        updatedAt?: Date;
    }

const User = sequelize.define<UserInstance>(
    'User',
    {
        id: {
            allowNull: false,
            autoIncrement: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            unique: true,
          },
        name: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
        username: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
        password: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
    }
);

export default User;