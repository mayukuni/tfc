import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

const team = {
  id: 1,
  teamName: 'Avaí/Kindermann',
}

describe('Team', () => {
  let chaiHttpResponse: Response;

  it('verifica se o endpoint /teams retorna todos os times e status 200', async () => {

    chaiHttpResponse = await chai.request(app).get('/teams');

    expect(chaiHttpResponse.status).to.be.equal(200);
  });

  it('verifica se o endpoint /teams/:id retorna o time específico e status 200', async () => {

    chaiHttpResponse = await chai.request(app).get('/teams/1');

    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body.id).to.eql(team.id);
    expect(chaiHttpResponse.body.teamName).to.eql(team.teamName);
  });
});