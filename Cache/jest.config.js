//jest.config.js
module.exports = {
    setupFilesAfterEnv: ['./src/tests/Integration/jest.setup.js'],
     globals: {
    'ts-jest': {
      // ts-jest configuration goes here
    }},

    preset: 'ts-jest',
};