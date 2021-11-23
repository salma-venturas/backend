import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateHomeDetailDto } from './dto/create-home-detail.dto';
import { ResponseHomeDetailDto } from './dto/response-home-detail.dto';
import { HomeDetailRepository } from './home-detail.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { HomeDetail } from './entities/home-detail.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HomeDetailService {
  constructor(
    @InjectRepository(HomeDetail)
    private homeDetailRepository: Repository<HomeDetail>,
  ) {}

  async create(createHomeDetailDto: CreateHomeDetailDto): Promise<HomeDetail> {
    try {
      const data: HomeDetail = await this.homeDetailRepository.create(createHomeDetailDto); // adding new data
      return this.homeDetailRepository.save(data);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll() {
    return await this.homeDetailRepository.find();
  }

  // async findOne(id: number) {
  //   return await this.homeDetailRepository.findOne(id);
  // }

  async findOne(id: number): Promise<any> {
    const myExampleArray = [
      {
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      },
      {
        userId: 1,
        id: 2,
        title: "",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      },
      {
        userId: 1,
        id: 3,
        title: "",
        body: "",
      },
      {
        userId: 1,
        id: 4,
        title: "eum et est occaecati",
        body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      },
      {
        userId: 1,
        id: 5,
        title: "nesciunt quas odio",
        body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
      },
      {
        userId: 1,
        id: 6,
        title: "dolorem eum magni eos aperiam quia",
        body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
      },
      {
        userId: 1,
        id: 7,
        title: "magnam facilis autem",
        body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
      },
      {
        userId: 1,
        id: 8,
        title: "dolorem dolore est ipsam",
        body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
      },
      {
        userId: 1,
        id: 9,
        title: "nesciunt iure omnis dolorem tempora et accusantium",
        body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
      },
      {
        userId: 1,
        id: 10,
        title: "optio molestias id quia eum",
        body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
      },
    ];

    const myArray = myExampleArray
      .filter((myArray) => myArray.id === id)
      .map((myArray) => myArray);

    if (myArray.length) {
      return await myArray[0];
    } else {
      return " NO data found";
    }
  }
}
