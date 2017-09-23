
import { PFComment } from "app/models/pf-comment";
import { PFOwner } from "app/models/pf-owner";

export interface PFImage {
  id: number;
  title: string;
  brief: string;
  description: string;
  owner: PFOwner;
  imageUrl: string;
  labels?: string[];
  comments?: PFComment[];
  createdAt?: Date;
}