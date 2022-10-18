import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

const validUser = { email: 'admin@admin.com', password: 'secret_admin'};
const invalidUser = { email: 'user@user.com', password: 'invalid_password'};

describe('Login', () => {
  let chaiHttpResponse: Response;

  it('verifica se o endpoint /login retorna 200 com dados válidos', async () => {

    chaiHttpResponse = await chai.request(app).post('/login').send(validUser);

    expect(chaiHttpResponse.status).to.be.equal(200);
  });

  it('verifica se o endpoint /login retorna 401 com dados inválidos', async () => {

    chaiHttpResponse = await chai.request(app).post('/login').send(invalidUser);

    expect(chaiHttpResponse.status).to.be.equal(401);
  });

  // it('verifica se é possível realizar o login sem inserir o password', async () => {
  //   const user = { email: 'admin@admin.com' };

  //   chaiHttpResponse = await chai
  //     .request(app)
  //     .post('/login')
  //     .send(user);

  //   expect(chaiHttpResponse.status).to.be.equal(400);
  // });

  // it('verifica se é possível realizar o login sem inserir o password', async () => {
  //   const user = { password: 'secret_admin' };

  //   chaiHttpResponse = await chai
  //     .request(app)
  //     .post('/login')
  //     .send(user);

  //   expect(chaiHttpResponse.status).to.be.equal(400);
  // });
});