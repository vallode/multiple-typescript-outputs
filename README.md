# Multiple Typescript Outputs

This example repository demonstrates the ability to support multiple "standards" of importing modules within the JS ecosystem. The example library is a replica of the infamous 'is-number' library providing a native ES Module and CommonJS file output and using Node's "exports" field to map these correctly.

This means a CommonJS application can `require` the library without the need to use a workaround and a native ES Module application can simply `import` it instead.
