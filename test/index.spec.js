import chai from 'chai';
import PathBuilder from '../dist/owd-path-builder.js';

chai.expect();

const expect = chai.expect;

let lib;

describe('Given an instance of PathBuilder library', () => {
	before(() => {
		lib = new PathBuilder();
	});

	describe('when I need string', () => {
		it('should return a string', () => {
			expect(lib.toString()).to.be.a('string');
		});
	});

	describe('when I check if is closed', () => {
		it('should return a false value', () => {
			expect(lib.isClosed).to.be.false;
		});
	});
});

describe('Called close method', () => {
	before(() => {
		lib = new PathBuilder();
		lib.close();
	});

	describe('when I check if is closed', () => {
		it('should return a true value', () => {
			expect(lib.isClosed).to.be.true;
		});
	});
	
	describe('when I call toString', () => {
		it('should return "Z"', () => {
			expect(lib.toString()).to.equal('Z');
		});
	});
});

describe('Created path in relative mode', () => {
	before(() => {
		lib = new PathBuilder();
		lib.moveTo(10, 10)
			.line(20, 20)
			.horizontalLine(10)
			.verticalLine(10)
			.curve(10, 0, 10, 10, 10, 10)
			.quadraticCurve(10, 0, 10, 10)
			.symmetricCurve(10, 20, 15, 15)
			.arc(30, 50, -45, 0, 1, 215.1, 109.9)
			.close();
	});

	describe('when I call toString', () => {
		it('should return proper path string', () => {
			expect(lib.toString()).to.equal('m10 10 l20 20 h10 v10 c10 0 10 10 10 10 q10 0 10 10 s10 20 15 15 a30 50 -45 0 1 215.1 109.9 Z');
		});
	});
});

describe('Created path in absolute mode', () => {
	before(() => {
		lib = new PathBuilder();
		lib.absolute()
			.moveTo(10, 10)
			.line(20, 20)
			.horizontalLine(10)
			.verticalLine(10)
			.curve(10, 0, 10, 10, 10, 10)
			.quadraticCurve(10, 0, 10, 10)
			.symmetricCurve(10, 20, 15, 15)
			.arc(30, 50, -45, 0, 1, 215.1, 109.9)
			.close();
	});

	describe('when I call toString', () => {
		it('should return proper path string', () => {
			expect(lib.toString()).to.equal('M10 10 L20 20 H10 V10 C10 0 10 10 10 10 Q10 0 10 10 S10 20 15 15 A30 50 -45 0 1 215.1 109.9 Z');
		});
	});
});