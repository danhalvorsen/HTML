
import { IMcPkgPreview, ITagDetails, ITagPreview, ITag  } from '../mockRoutes/api.types';

type KeyTag = Pick<ITag, 'details.id'|'tag'>
export default class Tag implements KeyTag {
    

}