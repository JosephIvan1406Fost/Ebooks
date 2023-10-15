import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'authors' })
export class Authors {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 50 })
  firstname: string;
  
  @Column({ type: 'varchar', length: 50 })
  lastname: string;


}
