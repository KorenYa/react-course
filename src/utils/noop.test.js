import noop from './noop';
describe('noop', () => {
    it('should return false', () => {
        expect(noop()).toBeFalsy();
    });
});
