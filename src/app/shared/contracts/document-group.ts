import {Document} from './document';

export interface DocumentGroup {
  id: number;
  name: string;
  documents: Document[];
}
