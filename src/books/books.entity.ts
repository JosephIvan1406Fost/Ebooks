import { Entity, PrimaryGeneratedColumn, Column,JoinColumn, ManyToOne } from 'typeorm';
import { Authors } from 'src/authors/authors.entity'; 
import { CategoryBooks } from 'src/category-books/category-books.entity';

@Entity()
export class Books {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  pages: number;

  @ManyToOne(() => Authors)
  @JoinColumn({ name: 'authorid' })
    author: Authors;

    @ManyToOne(() => CategoryBooks)
    @JoinColumn({ name: 'categoryid' })
    category: CategoryBooks;

 
}
