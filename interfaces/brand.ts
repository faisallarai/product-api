import { Optional, Model } from 'sequelize';

export interface BrandAttributes {
    id?: string;
    name: string;
}

export interface BrandCreationAttributes extends Optional<BrandAttributes, 'id'> {}
  
export interface BrandInstance extends Model<BrandAttributes, BrandCreationAttributes>, BrandAttributes {
    created_at?: Date;
    updated_at?: Date;
}