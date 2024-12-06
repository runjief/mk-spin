import {AlignText} from './constants.js';

export const props = [

  {
    name: 'Workout',
    radius: 0.84,
    itemLabelRadius: 0.92,
    itemLabelRadiusMax: 0.33,
    itemLabelRotation: 180,
    itemLabelAlign: AlignText.left,
    // itemLabelColors: ['#c4bca5', '#fff'],
    itemLabelColors: ['#fff'],
    itemLabelBaselineOffset: -0.07,
    itemLabelFont: 'Amatic SC',
    // itemLabelFont: 'Gloria Hallelujah',

    itemLabelFontSizeMax: 50,  // maximum font size in pixels (relative to 500px container)
    // itemBackgroundColors: ['#ede4cc', '#c4bca5','#ffffed', '#ede4cc', '#c4bca5', '#ede4cc', '#c4bca5', '#ede4cc', '#c4bca5'],
    itemBackgroundColors: ['#ce5b54','#f4d6ce', '#55a4c2','#f2d778',],
   rotationSpeedMax: 500,
    rotationResistance: -100,
    lineWidth: 0,
    lineColor: '#fff',
    image: './img/3d.png',
    imageScale: 0.5,
    overlayImage: './img/example-0-overlay.svg',
    items: [
      {
        label: '-50% off',
        weight:0.2,
      },
      {
        label: '-30% off',
        weight: 0.3,
      },
      // {
      //   label: '-35% off',
      // },
      // {
      //   label: '-30% off',
      // },
      // {
      //   label: '-25% off',
      // },
      {
        label: '-10% off',
        weight:0.3,
      },
      {
        label: '-20% off',
        weight:0.2,
      },






    ],

  },

  {
    name: 'Takeaway',
    radius: 0.89,
    pointerAngle: 90,
    itemLabelRadius: 0.92,
    itemLabelRadiusMax: 0.37,
    itemLabelRotation: 0,
    // itemLabelAlign: AlignText.right,
    itemLabelColors: ['#000'],
    itemLabelBaselineOffset: -0.06,
    itemLabelFont: 'Rubik',
    itemBackgroundColors: ['#fbf8c4', '#e4f1aa', '#c0d26e', '#ff7d7d'],
    rotationSpeedMax: 700,
    rotationResistance: -110,
    lineWidth: 0,
    overlayImage: './img/example-1-overlay.svg',
    borderWidth: 0,
    items: [
      {
        label: 'Japanese',
      },
      {
        label: 'Fish N Chips',
      },
      {
        label: 'Sandwich',
      },
      {
        label: 'Sub Sandwich',
        weight: 1.3,
      },
      {
        label: 'Tacos / Mexican',
      },
      {
        label: 'Noodle Box',
      },
      {
        label: 'BBQ Chicken',
      },
      {
        label: 'Fried Chicken',
        weight: 1.3,
      },
      {
        label: 'Indian',
      },
      {
        label: 'Thai',
      },
      {
        label: 'Juice Smoothie',
      },
      {
        label: 'Burgers',
        weight: 1.3,
      },
      {
        label: 'Souvlaki / Kebab',
      },
      {
        label: 'Italian',
      },
      {
        label: 'Sushi',
      },
      {
        label: 'Subways',
        weight: 1.3,
      },
      {
        label: 'Pie / Bakery',
      },
      {
        label: 'Chinese',
      },
      {
        label: 'Korean',
      },
      {
        label: 'Pizza',
        weight: 1.3,
      },
    ],
  },

  {
    name: 'Movies',
    radius: 0.88,
    itemLabelRadius: 0.92,
    itemLabelRadiusMax: 0.4,
    itemLabelRotation: 0,
    // itemLabelAlign: AlignText.right,
    itemLabelBaselineOffset: -0.13,
    itemLabelFont: 'Pragati Narrow',
    itemBackgroundColors: ['#c7160c', '#fff'],
    itemLabelColors: ['#fff', '#000'],
    rotationSpeedMax: 700,
    rotationResistance: -70,
    lineWidth: 0,
    overlayImage: './img/example-2-overlay.svg',
    items: [
      {
        label: 'Action',
      },
      {
        label: 'Horror',
      },
      {
        label: 'Science Fict.',
      },
      {
        label: 'Comedy',
      },
      {
        label: 'Romance',
      },
      {
        label: 'Thriller',
      },
      {
        label: 'Western',
      },
      {
        label: 'Indie',
      },
      {
        label: 'Crime',
      },
      {
        label: 'Documentary',
      },
      {
        label: 'Drama',
      },
      {
        label: 'Musical',
      },
      {
        label: 'Mystery',
      },
      {
        label: 'War',
      },
      {
        label: 'Sports',
      },
      {
        label: 'Fantasy',
      },
    ],
  },

  {
    name: 'Money',
    radius: 0.88,
    itemLabelRadius: 0.93,
    itemLabelRotation: 180,
    // itemLabelAlign: AlignText.left,
    itemLabelColors: ['#000'],
    itemLabelBaselineOffset: -0.06,
    itemLabelFont: 'Arial',
    itemLabelFontSizeMax: 22,
    lineWidth: 1,
    lineColor: '#000',
    overlayImage: './img/example-3-overlay.svg',
    items: [
      {
        label: '$ 50',
      },
      {
        label: '$ 200',
      },
      {
        label: '$ 1000',
        weight: 0.6,
        backgroundColor: '#f23925',
        labelColor: '#fff',
      },
      {
        label: '$ 100',
      },
      {
        label: '$ 200',
      },
      {
        label: '$ 500',
        weight: 0.8,
        backgroundColor: '#b1ddff',
      },
      {
        label: '$ 100',
      },
      {
        label: '$ 50',
      },
      {
        label: '$ 5000',
        weight: 0.4,
        backgroundColor: '#000',
        labelColor: '#fff',
      },
      {
        label: '$ 50',
      },
      {
        label: '$ 200',
      },
      {
        label: '$ 500',
        weight: 0.8,
        backgroundColor: '#b1ddff',
      },
      {
        label: '$ 100',
      },
      {
        label: '$ 200',
      },
      {
        label: '$ 1000',
        weight: 0.6,
        backgroundColor: '#f23925',
        labelColor: '#fff',
      },
      {
        label: '$ 100',
      },
      {
        label: '$ 50',
      },
      {
        label: '$ 500',
        weight: 0.8,
        backgroundColor: '#b1ddff',
      },
    ],
  },

  {
    name: 'King of Nerds',
    itemLabelRadius: 0.92,
    itemLabelRadiusMax: 0.3,
    itemLabelColors: ['hsl(0, 0%, 20%)'],
    itemLabelFont: 'Gloria Hallelujah',
    itemLabelBaselineOffset: -0.2,
    rotationSpeedMax: 400,
    rotationResistance: -100,
    image: './img/example-4-image.svg',
    lineWidth: 0,
    items: [
      {
        label: 'SHELDON',
        weight: 2.9,
      },
      {
        label: 'PENNY',
      },
      {
        label: 'LEONARD',
      },
      {
        label: 'HOWARD',
      },
      {
        label: 'BERNADETTE',
      },
      {
        label: 'RAJ',
      },
      {
        label: 'AMY',
      },
    ],
  },

  {
    name: 'Rock Paper Scissors',
    itemBackgroundColors: ['hsl(310, 100%, 95%)'],
    lineColor: 'hsl(350, 20%, 40%)',
    lineWidth: 2,
    borderColor: 'hsl(350, 20%, 40%)',
    borderWidth: 4,
    items: [
      {
        image: './img/example-5-item-0.svg',
        imageRadius: 0.6,
        imageScale: 1.2,
      },
      {
        image: './img/example-5-item-1.svg',
        imageRadius: 0.6,
        imageScale: 1.2,
      },
      {
        image: './img/example-5-item-2.svg',
        imageRadius: 0.6,
        imageScale: 1.2,
      },
      {
        image: './img/example-5-item-3.svg',
        imageRadius: 0.6,
        imageScale: 1.2,
      },
      {
        image: './img/example-5-item-4.svg',
        imageRadius: 0.6,
        imageScale: 1.2,
      },
    ],
  },

  {
    name: 'Basic',
    items: [
      {
        label: 'one',
      },
      {
        label: 'two',
      },
      {
        label: 'three',
      },
    ],
  },

];