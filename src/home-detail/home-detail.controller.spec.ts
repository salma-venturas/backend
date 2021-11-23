import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { HomeDetail } from './entities/home-detail.entity';
import { HomeDetailController } from './home-detail.controller';
import { HomeDetailService } from './home-detail.service';

describe('HomeDetailController', () => {
  let homeDetailController: HomeDetailController;

  const mockService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
  };

  const mockHomeDetailRepository = {
    create: jest.fn(),
    save: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomeDetailController],
      providers: [
        { provide: HomeDetailService, useValue: mockService },
        {
          provide: getRepositoryToken(HomeDetail),
          useValue: mockHomeDetailRepository,
        },
      ],
    }).compile();

    homeDetailController =
      module.get<HomeDetailController>(HomeDetailController);
  });

  it('should create a data', () => {
    mockService.create.mockReturnValue({
      id: 1,
      title: 'This is a test title',
      body: 'This is a test body',
    });
    expect(
      homeDetailController.create({
        title: 'This is a test title',
        body: 'This is a test body',
      }),
    ).toEqual({
      id: 1,
      title: 'This is a test title',
      body: 'This is a test body',
    });
  });

  it('should findAll data', async () => {
    mockService.findAll.mockReturnValue([
      {
        id: 1,
        title: 'This is a test title',
        body: 'This is a test body',
      },
      {
        id: 2,
        title: 'This is a test title_1',
        body: 'This is a test body_1',
      },
      {
        id: 3,
        title: 'This is a test title_3',
        body: 'This is a test body_3',
      },
    ]);
    const homes = homeDetailController.findAll();
    expect(homes).toEqual([
      {
        id: 1,
        title: 'This is a test title',
        body: 'This is a test body',
      },
      {
        id: 2,
        title: 'This is a test title_1',
        body: 'This is a test body_1',
      },
      {
        id: 3,
        title: 'This is a test title_3',
        body: 'This is a test body_3',
      },
    ]);
  });


it('should retrive data by id', async () => {
  mockService.findOne.mockReturnValue(
    {
      id: 1,
      title: 'This is a test title',
      body: 'This is a test body',
    }
   );
   const homes = homeDetailController.findOne('1');
   expect(homes).toEqual({id: 1,
    title: 'This is a test title',
    body: 'This is a test body'
  });
});
})