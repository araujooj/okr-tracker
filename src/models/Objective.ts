import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Category from './Category';
import User from './User';

@Entity('objectives')
class Objective {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @Column()
  category_id: string;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'user_id' })
  tasked: User;

  @ManyToOne(() => Category, category => category.objective, { eager: true })
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @Column()
  objective: string;

  @Column()
  conclusion_progress: number;

  @Column('timestamp with time zone')
  date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default Objective;
