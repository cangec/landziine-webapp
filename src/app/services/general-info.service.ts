import { Injectable } from '@angular/core';

@Injectable()
export class GeneralInfoService {

  public generalInfo: IGeneralInfo = {
    architects: [
      {
        name: 'Svetlana Makarovic',
        profileImage: {
          imgUrl: 'https://i.pinimg.com/736x/08/36/24/0836245fef0801fdfdf1af5ab20b54d3--black-white-fashion-fashion-portraits.jpg',
          thumbUrl: 'https://i.pinimg.com/736x/08/36/24/0836245fef0801fdfdf1af5ab20b54d3--black-white-fashion-fashion-portraits.jpg'
        },
        leader: false,
        id: 122353456
      }
    ]
  };

  public generalInfoIndividual: IGeneralInfoIndividual = {
    skills: [
      {
        id: 124,
        name: 'Dancing',
        rating: 3
      },
      {
        id: 12345,
        name: 'Singing',
        rating: 1
      },
      {
        id: 346,
        name: 'Drwaing',
        rating: 1
      },
      {
        id: 3460,
        name: 'Swimming',
        rating: 2
      }
    ]
  };

  constructor() {
  }

}

interface IGeneralInfo {
  id?: number;
  name?: string;
  philosophy?: string;
  email?: string;
  address?: string;
  phone?: string;
  website?: string;
  coverImage?: {
    imgUrl: string
  };
  architects?: IArchitect[];
}

interface IArchitect {
  id?: number;
  name: string;
  profileImage: {
    imgUrl: string,
    thumbUrl: string
  };
  leader: boolean;
}

interface IGeneralInfoIndividual {
  id?: number;
  name?: string;
  description?: string;
  email?: string;
  education?: string;
  eductaion2?: string;
  website?: string;
  coverImage?: {
    imgUrl: string
  };
  privateInfo?: {
    address?: string,
    phone?: number
  };
  skills: ISkill[];
}

interface ISkill {
  id?: number;
  rating?: number;
  name?: string;
}
