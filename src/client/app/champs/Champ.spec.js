import Champ from './Champ.vue';

describe('Champ', ()=>{
  it('should be a champ', ()=>{
      expect(Champ.name).toEqual('Champ');
    });

  it(`should return ['champ']`,()=>{
    expect(Champ.props).toEqual(['champ']);
  });
});
