import 'chai/register-should';
import { TagRepository } from '../../../my-pwa-ts/src/repositories/base/interfaces/tagRepository';
import { QueryFilter } from '../../../my-pwa-ts/src/repositories/base/interfaces/QueryFilter';
import { db } from '../../../my-pwa-ts/src/database/SomethingDexie';
import { FakerTag } from '../../../my-pwa-ts/src/mockRoutes/faker';

export const Foo = async(id : number) => {

  var usedIds: Array<number> = [];
  await db.tags.each((item) => {
      usedIds.push(item.tag.id);
    });
    return usedIds;
};

describe('TestMe - Tag', () => {
  
  var fakeTag = FakerTag();
  var tagRepository = new TagRepository();
   
  let filter : QueryFilter = {
    id: "tag.id",
    value: fakeTag.tag.id
  };

  before(() => async () => {

  });

  after(() => async () => {
    db.delete().then(() => {}).catch(() => {});  
  })

  it('should be able to insert a Tag into indexedDb and find it afterwards', async () => {
    
    await tagRepository.create(fakeTag);
    let searchResult = await tagRepository.findOne(filter);  
    searchResult.should.be.a('object');
    searchResult.tag.id.should.be.equal(fakeTag.tag.id); 
  });

  it('Should not be able to insert a object two times', async () => {
    await tagRepository.create(fakeTag);

    let searchResult = await tagRepository.find(filter);
    searchResult.should.be.an('array'); 
  });
});
