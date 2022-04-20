import 'chai/register-should';
import { TagRepository } from '../../../my-pwa-ts/src/repositories/base/interfaces/tagRepository';
import { FakerTag } from './../../../my-pwa-ts/src/mockRoutes/faker';
import { db } from '../../../my-pwa-ts/src/database/mcAppDatabase';
import { QueryFilter } from '../../../my-pwa-ts/src/repositories/base/interfaces/QueryFilter';


describe('Tag', () => {
  
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
