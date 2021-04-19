module.exports = {
	roots: ['<rootDir>/tests'],
	verbose: true,
	collectCoverage: true,
	transform: {
		'^.+\\.tsx?$': 'ts-jest'
	},
	moduleFileExtensions: ['js', 'ts'],
	globals: {
		'ts-jest': {
			diagnostics: false,
			tsconfig: '<rootDir>/tests/tsconfig.json'
		}
	},
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1'
	}
};
