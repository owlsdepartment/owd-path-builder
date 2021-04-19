import { PathNode } from '@/node';
import PathBuilder from '@/PathBuilder';

let lib: PathBuilder;

describe('Given an instance of PathBuilder', () => {
	beforeEach(() => {
		lib = new PathBuilder();
	});

	describe('when I need string', () => {
		it('should return a string', () => {
			expect(typeof lib.toString()).toBe('string');
		});
	});

	describe('when I check if is closed', () => {
		it('should return a false value', () => {
			expect(lib.isClosed).toBeFalsy();
		});
	});
});

describe('Called close method', () => {
	beforeEach(() => {
		lib = new PathBuilder();
		lib.close();
	});

	describe('when I check if is closed', () => {
		it('should return a true value', () => {
			expect(lib.isClosed).toBeTruthy();
		});
	});

	describe('when I call toString', () => {
		it('should return "Z"', () => {
			expect(lib.toString()).toEqual('Z');
		});
	});

	describe('when I try to add another node', () => {
		it('should throw an error', () => {
			expect(() => {
				lib.addPathNode(new PathNode());
			}).toThrowError('You cannot add node to path, that has been already closed');
		});
	});
});

describe('Created path in relative mode', () => {
	beforeEach(() => {
		lib = new PathBuilder();
		lib.relative();
	});

	describe('when I call toString', () => {
		beforeEach(() => {
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

		it('should return proper path string', () => {
			expect(lib.toString()).toEqual('m10 10 l20 20 h10 v10 c10 0 10 10 10 10 q10 0 10 10 s10 20 15 15 a30 50 -45 0 1 215.1 109.9 Z');
		});
	});

	describe('when I call relative', () => {
		beforeEach(() => {
			lib.moveTo(10, 10)
				.line(20, 20)
				.absolute()
				.line(10, 10)
				.close();
		});

		it('should switch to relative mode', () => {
			expect(lib.toString()).toEqual('m10 10 l20 20 L10 10 Z');
		});
	});
});

describe('Created path in absolute mode', () => {
	beforeEach(() => {
		lib = new PathBuilder();
		lib.absolute();
	});

	describe('when I call toString', () => {
		beforeEach(() => {
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

		it('should return proper path string', () => {
			expect(lib.toString()).toEqual('M10 10 L20 20 H10 V10 C10 0 10 10 10 10 Q10 0 10 10 S10 20 15 15 A30 50 -45 0 1 215.1 109.9 Z');
		});
	});

	describe('when I call relative', () => {
		beforeEach(() => {
			lib.moveTo(10, 10)
				.line(20, 20)
				.relative()
				.line(10, 10)
				.close();
		});

		it('should switch to relative mode', () => {
			expect(lib.toString()).toEqual('M10 10 L20 20 l10 10 Z');
		});
	});
});
