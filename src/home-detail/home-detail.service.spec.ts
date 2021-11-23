import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { HomeDetail } from './entities/home-detail.entity';
import { HomeDetailService } from './home-detail.service';

describe('HomeDetailService', () => {
  let service: HomeDetailService;
  const mockHomeDetailRepository = {
    create: jest.fn(),
    save: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HomeDetailService,
        {
          provide: getRepositoryToken(HomeDetail),
          useValue: mockHomeDetailRepository,
        },
      ],
    }).compile();

    service = module.get<HomeDetailService>(HomeDetailService);
  });

  it('should be create a new data and return', async () => {
    mockHomeDetailRepository.create.mockReturnValue({
      title: 'qui est esse',
      body: 'est rerum tempore',
    }),
      mockHomeDetailRepository.save.mockReturnValue({
        id: 1,
        title: 'qui est esse',
        body: 'est rerum tempore',
      });
    const data: HomeDetail = await service.create({
      title: 'qui est esse',
      body: 'est rerum tempore',
    });
    expect(data).toStrictEqual({
      id: 1,
      title: 'qui est esse',
      body: 'est rerum tempore',
    });
  });

  it('should be retrive all data', async () => {
    mockHomeDetailRepository.findAll.mockReturnValue([
      {
        id: 1,
        title: 'qui est esse',
        body: 'est rerum tempore',
      },
      {
        id: 2,
        title: 'This is test title',
        body: 'This is test body',
      },
    ]);
    const homes = mockHomeDetailRepository.findAll();
    expect(homes).toEqual([
      {
        id: 1,
        title: 'qui est esse',
        body: 'est rerum tempore',
      },
      {
        id: 2,
        title: 'This is test title',
        body: 'This is test body',
      },
    ]);
  });

  it('should be retrive one data by id', async () => {
    mockHomeDetailRepository.findOne.mockReturnValue({
      id: 2,
      title: 'This is test title',
      body: 'This is test body',
    });
    const homes = mockHomeDetailRepository.findOne();
    expect(homes).toEqual({
      id: 2,
      title: 'This is test title',
      body: 'This is test body',
    });
  });
});
