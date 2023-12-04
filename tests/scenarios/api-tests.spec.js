import { test, expect } from '@playwright/test'
import { Contract } from '../../helpers/contract';

const contract = new Contract


test('GET context 1', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/2')
    expect(response.status()).toBe(200)

    console.log(await response.json())
    contract.validateContract(await response.json(), 'schema/', 'get-schema.json')

  /*
    let path = require('path');
    let schema = readFileSync(path.resolve('tests/modules/schema/', 'get-schema.json'));
    let schemaParsed = JSON.parse(schema);
    console.log(schemaParsed)
    const chai = require('chai')
    chai.use(require('chai-json-schema-ajv'))
    expectChai(await response.json()).to.be.jsonSchema(schemaParsed);*/
  });

  test('POST context', async ({ request }) => {
    const response = await request.post("https://reqres.in/api/users", {
        headers: {

        },
        data: {
            "name": "Bia",
            "job": "qa"
        }
    })    
    expect(response.status()).toBe(201);

    const text = await response.text();
    expect(text).toContain(Bia);
 
    console.log(await response.json());
  });