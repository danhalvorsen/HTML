import { db } from './../../../my-pwa-ts/src/db';
import 'chai/register-should';
import { TagRepository } from '../../../my-pwa-ts/src/repositories/base/interfaces/tagRepository';
import { FakerTag } from '../../../my-pwa-ts/src/mockRoutes/faker';
import { QueryFilter } from '../../../my-pwa-ts/src/repositories/base/interfaces/QueryFilter';

describe('Tag Repository ', () => {
    before(() => async () => {
       db.open();
    });
  
    after(() => async () => {
       db.delete().then(() => {}).catch(() => {});  
    })
  
    it('should be able to insert a Tag into indexedDb and find it afterwards', async () => {
      var fakeTag = FakerTag();
      let filter : QueryFilter = {
        id: "tag.id",
        value: fakeTag.tag.id
      };
      var tagRepository = new TagRepository();
      await tagRepository.create(fakeTag);
      let searchResult = await tagRepository.findOne(filter);  
      searchResult.should.be.a('object');
      searchResult.tag.id.should.be.equal(fakeTag.tag.id); 
    });
  
    it('Should not be able to insert a object two times', async () => {
      
      var tagRepository = new TagRepository();
      var fakeTag = FakerTag();
      let filter : QueryFilter = {
        id: "tag.id",
        value: fakeTag.tag.id
      };
      await tagRepository.create(fakeTag);
  
      let searchResult = await tagRepository.find(filter);
      searchResult.should.be.an('array'); 
      
    });
  
      
     
  });