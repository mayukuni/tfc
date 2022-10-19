import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('LeaderBoard', () => {
  let chaiHttpResponse: Response;

  it('verifica se o endpoint /leaderboard/home retorna todos os placares e status 200', async () => {
    chaiHttpResponse = await chai.request(app).get('/leaderboard/home');

    expect(chaiHttpResponse.status).to.be.equal(200);
  });

  it('verifica se o endpoint /leaderboard/away retorna todos os placares e status 200', async () => {
    chaiHttpResponse = await chai.request(app).get('/leaderboard/away');

    expect(chaiHttpResponse.status).to.be.equal(200);
  });
});
