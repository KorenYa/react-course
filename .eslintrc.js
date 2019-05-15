module.exports = {
    extends: 'airbnb',
    rules: {
        'import/no-named-as-default': 0, //https://stackoverflow.com/questions/44437203/how-do-i-resolve-eslint-import-no-named-as-default
        'react/prop-types': 0, //TODO remove after migration to flow from propTypes
        'react/require-default-props': 0, //TODO remove after migration to flow from propTypes
        'no-shadow': 'off', //https://stackoverflow.com/questions/37682705/avoid-no-shadow-eslint-error-with-mapdispatchtoprops
        'no-restricted-globals': ['error', 'event', 'info']
    },
    env: {
        browser: true, //https://stackoverflow.com/questions/42377038/error-document-is-not-defined-eslint-react
        jest: true //https://stackoverflow.com/questions/31629389/how-to-use-eslint-with-jest
    }
};
