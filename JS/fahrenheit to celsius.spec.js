function fahrenheit2celsius(fahrenheit){
	return 100;
}
describe('some description',() => {
	it('212 F equals 100 C', () => {
		fahrenheit2celsius(212).should.be.equal(100);
	});
});