import generateList from '../../src/i18n-list-generator.js';

describe('generateList', () => {
  describe('when passing a LTR code', () => {
    it('produces the right string', () => {
      expect(generateList([1, 2, 3], 'en')).to.equal('1, 2, 3');
      expect(generateList([1, 2, 3], 'fr')).to.equal('1, 2, 3');
    });
  });

  describe('when passing `ar`', () => {
    it('produces the right string', () => {
      expect(generateList([1, 2, 3], 'ar')).to.equal('3 ،2 ،1');
    });
  });

  describe('when passing `he`', () => {
    it('produces the right string', () => {
      expect(generateList([1, 2, 3], 'he')).to.equal('3 ,2 ,1');
    });
  });

  describe('when passing an unknown code', () => {
    it('assumes LTR', () => {
      expect(generateList([1, 2, 3], 'asdf')).to.equal('1, 2, 3');
    });
  });
});
