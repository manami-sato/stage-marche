import { stageType } from 'src/types/stage';

export const stageArray: stageType[] = [
  {
    name: 'ミュージカル『エリザベート』',
    path: 'elisabeth',
    imgLength: 1,
    type: 0,
    genre: [0, 0],
    description:
      '作品の説明が入ります。どういうおもしろさがあるのかなとかそういうこと。大体このくらいまで文章を入れられます。長ければ文末が3点リーダに置き換わらないです。',
    schedule: [
      {
        place: '博多座',
        prefecture: 39,
        date: {
          start: {
            y: 2023,
            m: 1,
            d: 1,
          },
          end: {
            y: 2023,
            m: 4,
            d: 10,
          },
        },
        time: {
          matinee: {
            start: ['13', '00'],
            end: ['15', '30'],
          },
          soiree: {
            start: ['17', '00'],
            end: ['20', '30'],
          },
        },
      },
    ],
  },
  {
    name: 'しびれ雲',
    path: 'shibiregumo',
    imgLength: 1,
    type: 1,
    genre: [1, 4],
    description:
      '作品の説明が入ります。どういうおもしろさがあるのかなとかそういうこと。大体このくらいまで文章を入れられます。長ければ文末が3点リーダに置き換わらないです。',
    schedule: [
      {
        place: '兵庫県立芸術文化センター 阪急中ホール',
        prefecture: 27,
        date: {
          start: {
            y: 2023,
            m: 1,
            d: 1,
          },
          end: {
            y: 2023,
            m: 4,
            d: 10,
          },
        },
        time: {
          matinee: undefined,
          soiree: {
            start: ['17', '00'],
            end: ['20', '30'],
          },
        },
      },
    ],
  },
  {
    name: 'Endless SHOCK',
    path: 'endlessshock',
    imgLength: 1,
    type: 0,
    genre: [1, 5],
    description:
      '作品の説明が入ります。どういうおもしろさがあるのかなとかそういうこと。大体このくらいまで文章を入れられます。長ければ文末が3点リーダに置き換わらないです。',
    schedule: [
      {
        place: '梅田芸術劇場 メインホール',
        prefecture: 26,
        date: {
          start: {
            y: 2023,
            m: 1,
            d: 1,
          },
          end: {
            y: 2023,
            m: 4,
            d: 10,
          },
        },
        time: {
          matinee: {
            start: ['17', '00'],
            end: ['20', '30'],
          },
          soiree: undefined,
        },
      },
    ],
  },
];

export const prefectureArray = [
  '北海道',
  '青森',
  '岩手',
  '宮城',
  '秋田',
  '山形',
  '福島',
  '茨城',
  '栃木',
  '群馬',
  '埼玉',
  '千葉',
  '東京',
  '神奈川',
  '新潟',
  '富山',
  '石川',
  '福井',
  '山梨',
  '長野',
  '岐阜',
  '静岡',
  '愛知',
  '三重',
  '滋賀',
  '京都',
  '大阪',
  '兵庫',
  '奈良',
  '和歌山',
  '鳥取',
  '島根',
  '岡山',
  '広島',
  '山口',
  '徳島',
  '香川',
  '愛媛',
  '高知',
  '福岡',
  '佐賀',
  '長崎',
  '熊本',
  '大分',
  '宮崎',
  '鹿児島',
  '沖縄',
];
