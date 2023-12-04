import { readFileSync } from 'fs'
import { expect as expectChai } from 'chai'

export class Contract {
    validateContract(res, schemaDir, schemaFile) {
        let path = require('path');
        let schema = readFileSync(path.resolve(schemaDir, schemaFile));
        let schemaParsed = JSON.parse(schema);
        console.log(schemaParsed)

        try {
            console.log('Starting API Contract Validation');
            console.log('Contract name to be validated: ', schemaFile);
            const chai = require('chai')
            chai.use(require('chai-json-schema-ajv'))
            expectChai(res).to.be.jsonSchema(schemaParsed);
            console.log('Successfully validated contract');
        } catch (error) {
            console.error('Contract validation error: ', error);
            throw error;
        }
    }
}