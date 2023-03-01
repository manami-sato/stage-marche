import { stageType } from 'src/types/stage';

export const stageArray: stageType[] = [
  {
    name: 'ミュージカル『エリザベート』',
    img: 'elisabeth',
    type: 0,
    genre: [0, 0],
    schedule: {
      start: {
        yyyy: 2023,
        mm: 1,
        dd: 1,
      },
      end: {
        yyyy: 2023,
        mm: 4,
        dd: 10,
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
    place: '博多座',
    prefecture: 39,
  },
  {
    name: 'しびれ雲',
    img: 'shibiregumo',
    type: 1,
    genre: [1, 4],
    schedule: {
      start: {
        yyyy: 2023,
        mm: 1,
        dd: 1,
      },
      end: {
        yyyy: 2023,
        mm: 4,
        dd: 10,
      },
    },
    time: {
      matinee: undefined,
      soiree: {
        start: ['17', '00'],
        end: ['20', '30'],
      },
    },
    place: '兵庫県立芸術文化センター 阪急中ホール',
    prefecture: 27,
  },
  {
    name: 'Endless SHOCK',
    img: 'endlessshock',
    type: 0,
    genre: [1, 5],
    schedule: {
      start: {
        yyyy: 2023,
        mm: 1,
        dd: 1,
      },
      end: {
        yyyy: 2023,
        mm: 4,
        dd: 10,
      },
    },
    time: {
      matinee: {
        start: ['17', '00'],
        end: ['20', '30'],
      },
      soiree: undefined,
    },
    place: '梅田芸術劇場 メインホール',
    prefecture: 26,
  },
];

export const prefectureArray = [
  '北海道',
  '青森県',
  '岩手県',
  '宮城県',
  '秋田県',
  '山形県',
  '福島県',
  '茨城県',
  '栃木県',
  '群馬県',
  '埼玉県',
  '千葉県',
  '東京都',
  '神奈川県',
  '新潟県',
  '富山県',
  '石川県',
  '福井県',
  '山梨県',
  '長野県',
  '岐阜県',
  '静岡県',
  '愛知県',
  '三重県',
  '滋賀県',
  '京都府',
  '大阪府',
  '兵庫県',
  '奈良県',
  '和歌山県',
  '鳥取県',
  '島根県',
  '岡山県',
  '広島県',
  '山口県',
  '徳島県',
  '香川県',
  '愛媛県',
  '高知県',
  '福岡県',
  '佐賀県',
  '長崎県',
  '熊本県',
  '大分県',
  '宮崎県',
  '鹿児島県',
  '沖縄県',
];