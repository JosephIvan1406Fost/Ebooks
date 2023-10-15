import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'category_books' })
export class CategoryBooks {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;
}
