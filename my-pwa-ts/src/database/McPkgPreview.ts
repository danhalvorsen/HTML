import { IMcPkgPreview } from '../mockRoutes/api.types';
import something, { KeyMcPkgPreview } from './mcAppDatabase';

export class McPkgPreview implements KeyMcPkgPreview {
  id: number;
  mcPkgNo: string;
  preview: IMcPkgPreview;

  constructor(preview: IMcPkgPreview) {
    this.id = preview.id;
    this.mcPkgNo = preview.mcPkgNo;
    this.preview = preview;
  }

  save(obj: IMcPkgPreview) {
      something.transaction()
  }
}
