import {Wheel} from 'https://cdn.jsdelivr.net/npm/spin-wheel@5.0.2/dist/spin-wheel-esm.js';
import {loadFonts, loadImages} from './utils.js';
import {props} from './props.js';
import * as easing from './easing.js';

const easingFunctions = [
  {
    label: 'default (easeSinOut)',
    function: null,
  },
  {
    label: 'easeSinInOut',
    function: easing.sinInOut,
  },
  {
    label: 'easeCubicOut',
    function: easing.cubicOut,
  },
  {
    label: 'easeCubicInOut',
    function: easing.cubicInOut,
  },
  {
    label: 'easeElasticOut',
    function: easing.elasticOut,
  },
  {
    label: 'easeBounceOut',
    function: easing.bounceOut,
  },
];

window.onload = async () => {

  await loadFonts(props.map(i => i.itemLabelFont));

  const wheel = new Wheel(document.querySelector('.wheel-wrapper'));
  const dropdown = document.querySelector('select');

  const images = [];

  for (const p of props) {
    // Initalise dropdown with the names of each example:
    const opt = document.createElement('option');
    opt.textContent = p.name;
    dropdown.append(opt);

    // Convert image urls into actual images:
    images.push(initImage(p, 'image'));
    images.push(initImage(p, 'overlayImage'));
    for (const item of p.items) {
      images.push(initImage(item, 'image'));
    }
  }

  await loadImages(images);

  // Show the wheel once everything has loaded
  document.querySelector('.wheel-wrapper').style.visibility = 'visible';

  // Handle dropdown change:
  dropdown.onchange = () => {
    wheel.init({
      ...props[dropdown.selectedIndex],
      rotation: wheel.rotation, // Preserve value.
    });
  };

  // Select default:
  dropdown.options[0].selected = 'selected';
  dropdown.onchange();

  // Save object globally for easy debugging.
  window.wheel = wheel;
wheel.isInteractive = false;
  const btnSpin = document.querySelector('button');
  let modifier = 0;

  window.addEventListener('click', async (e) => {

    // Listen for click event on spin button:
    // if (e.target === btnSpin) {
    //   // const {duration, winningItemRotaion} = calcSpinToValues();
    //   const easing = easingFunctions[4];
    //   const easingFunction = easing.function;
    //   const duration = 2600;
    //   const revolutions = 3;
    //   wheel.spinToItem(0, duration, true, revolutions, 1, easingFunction);
    //   // wheel.spinToItem(winningItemIndex, duration, true, 2, 1, easing)
    //   // wheel.spinTo(winningItemRotaion, duration);
    // }

    if (e.target === btnSpin) {
      try {
        const response = await fetch('https://spin-wheel.fly.dev/spin', {
          method: 'POST',
          headers: {
            'accept': 'application/json'
          },
          body: ''
        });
        const data = await response.json();
        console.log('Spin response:', data);
        
        const easing = easingFunctions[4];
        const easingFunction = easing.function;
        const duration = 1500;
        const revolutions = 3;
        const target = data.selected_item.id;
        wheel.pointerAngle = getRandomNumberInCombinedRange();
        console.log(wheel.pointerAngle)
        wheel.spinToItem(target, duration, true, revolutions, 1, easingFunction);
      } catch (error) {
        console.error('Error fetching spin result:', error);
      }
    }
  });

function getRandomNumberInCombinedRange() {
  // Randomly decide which range to use: 50% chance for each range
  const useFirstRange = Math.random() < 0.5;

  if (useFirstRange) {
    // Generate a number in the range 342-360
    return Math.floor(Math.random() * (360 - 342 + 1)) + 342;
  } else {
    // Generate a number in the range 0-18
    return Math.floor(Math.random() * (18 - 0 + 1)) + 0;
  }
}


  function calcSpinToValues() {
    const duration = 3000;
    const winningItemRotaion = getRandomInt(360, 360 * 1.75) + modifier;
    modifier += 360 * 1.75;
    return {duration, winningItemRotaion};
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function initImage(obj, pName) {
    if (!obj[pName]) return null;
    const i = new Image();
    i.src = obj[pName];
    obj[pName] = i;
    return i;
  }

};