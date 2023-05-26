import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'users' })
export class MssqlUser {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  lastName!: string;

  @Column({ nullable: true })
  password?: string;

  @Column({ unique: true })
  email!: string;

  @Column({ nullable: true })
  is_active?: boolean;

}
