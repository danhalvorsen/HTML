import axios from 'axios';
import { ChecklistPreview, PoPreview } from '../../mockRoutes/api.types';
import { server } from '../../mockRoutes/server'; 

describe('/PurchaseOrder', () => {

  beforeAll(() => server.listen())
  afterAll(() => server.close())
  
  it('/PurchaseOrder - Should get payload accoring to queryparameters', async () => {
    const res = await axios.get<PoPreview>('/PurchaseOrder?plantId=PCS$$2000&callOffId=1000');
    expect(res.status).toBe(200);
    expect(res.data).toHaveProperty('callOffId')
    expect(res.data).toHaveProperty('isPurchaseOrder');
    expect(res.data).toHaveProperty('title');
    expect(res.data).toHaveProperty('description');
    expect(res.data).toHaveProperty('responsibleCode');
  });
});

describe('/PurchaseOrder/CheckLists', () => {
  
  beforeAll(() => server.listen())
  afterAll(() => server.close())

  it('/PurchaseOrder/CheckLists/Query', async () =>{
    const res = await axios.get<Array<ChecklistPreview>>('/PurchaseOrder/CheckLists?plantId=PCS$$2000&callOffId=1000');
    expect(res.data.length).toBe(5);
    expect(res.data[0]).toHaveProperty('id');
    expect(res.data[0]).toHaveProperty('tagId');
    expect(res.data[0]).toHaveProperty('tagNo');
    expect(res.data[0]).toHaveProperty('tagDescription');
    expect(res.data[0]).toHaveProperty('responsibleCode');
    expect(res.data[0]).toHaveProperty('formularType');
    expect(res.data[0]).toHaveProperty('formularGroup');
    expect(res.data[0]).toHaveProperty('sheetNo');
    expect(res.data[0]).toHaveProperty('subSheetNo');
    expect(res.data[0]).toHaveProperty('isRestrictedForUser');
    expect(res.data[0]).toHaveProperty('hasElectronicForm');
    expect(res.data[0]).toHaveProperty('attachmentCount');
    expect(res.data[0]).toHaveProperty('isSigned');
    expect(res.data[0]).toHaveProperty('isVerified');
  });
});
