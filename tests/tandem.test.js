describe('getTandemRepeat', function () {

    it('should return tandem repeat with index, substring, number repeats via JSON', function () {
        chai.expect(tandem("GAGGCATCATCATCATCATTGCC")).to.equal('[{"4-CAT": 5}]');
    });

    it('return empty JSON if not found any tandem repeat', function () {
        chai.expect(tandem("GAGTGCACGCATCAVATCAGTTGCC")).to.equal("[{}]");
    });

    it('return false if input is empty', function () {
        chai.expect(tandem("")).to.equal(false);
    });

});