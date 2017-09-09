
import { PFComment } from "app/models/pf-comment";

export interface PFImage {
  id: number;
  title: string;
  brief: string;
  description: string;
  imageUrl: string;
  labels?: string[];
  commets?: PFComment[];
  createdAt?: Date;
}