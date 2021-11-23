import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, HttpStatus } from '@nestjs/common';
import * as request from 'supertest';
import { HomeDetailModule } from '../src/home-detail/home-detail.module';
import { getRepositoryToken } from '@nestjs/typeorm';
import { HomeDetail } from '../src/home-detail/entities/home-detail.entity';
import { response } from 'express';
import { HomeDetailService } from '../src/home-detail/home-detail.service';

describe('E2E Tests for HomeDeatilController Endpoints', () => {
  
  let app = `http://localhost:5000`;

  beforeEach(async () => {});

  it('should create a data', () => {
    const data = {
      title: 'My Travel Plans for 2020',
      body: 'Plans to travel to Kenya',
    };
    return request(app)
      .post('/api/me/home-detail')
      .set('Accept', 'application/json')
      .send(data)
      .expect(HttpStatus.CREATED)
      .expect((res) => {
        expect(res.body).toHaveProperty('title');
      });
  });

  it('should get all data', () => {
    return request(app)
      .get('/api/me/home-detail')
      .set('Accept', 'application/json')
      .expect(HttpStatus.OK)
      .expect((response) => {
        expect(response.body.length).toBeGreaterThan(-1);
      });
  });

  it('should get a data', () => {
    return request(app)
      .get('/api/me/home-detail/1')
      .set('Accept', 'application/json')
      .expect(HttpStatus.OK)
      .expect((res) => {
        expect(res.body).toHaveProperty('title');
      });
  });
});
