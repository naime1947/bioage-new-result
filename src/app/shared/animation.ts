import {
  animation,
  style,
  animate,
  trigger,
  transition,
  useAnimation,
  state,
  keyframes,
} from '@angular/animations';

export const simpleFadeAnimation = trigger('simpleFadeAnimation', [
  transition('*=>*', [style({ opacity: 0 }), animate(1000)]),
]);

export const heartBeat = (animationTime: number = 1300, delay: number = 10) => {
  return trigger(`heartBeat`, [
    transition('void => *', [
      animate(
        `${animationTime}ms ${delay}ms ease-in`,
        keyframes([
          style({ transform: 'scale(1)', offset: 0 }),
          style({ transform: 'scale(1.1)', offset: 0.24 }),
          style({ transform: 'scale(.9)', offset: 0.48 }),
          style({ transform: 'scale(1.1)', offset: 0.72 }),
          style({ transform: 'scale(1)', offset: 1 }),
        ])
      ),
    ]),
  ]);
};

export const slideInLeft = (animationTime: number = 1000, delay: number = 10) => {
  return trigger(`slideInLeft`, [
    transition('void => *', [
      animate(
        `${animationTime}ms ${delay}ms ease-in`,
        keyframes([
          style({ transform: 'translate3d(-100%, 0, 0)', visibility: 'visible', offset: 0 }),
          style({ transform: 'translateZ(0)', offset: 1 })
        ])
      ),
    ]),
  ]);
};

export const slideInRight = (animationTime: number = 1000, delay: number = 10) => {
  return trigger(`slideInRight`, [
    transition('void => *', [
      animate(
        `${animationTime}ms ${delay}ms ease-in`,
        keyframes([
          style({ transform: 'translate3d(100%, 0, 0)', visibility: 'visible', offset: 0 }),
          style({ transform: 'translateZ(0)', offset: 1 })
        ])
      ),
    ]),
  ]);
};

export const flipInX = (animationTime: number = 1000, delay: number = 10) => {
  return trigger(`flipInX`, [
    transition('void => *', [
      animate(
        `${animationTime}ms ${delay}ms ease-in`,
        keyframes([
          style({
            transform: 'perspective(400px) rotateX(90deg)',
            opacity: 0.1,
            offset: 0,
          }),
          style({
            transform: 'perspective(400px) rotateX(-20deg)',
            opacity: .5,
            offset: 0.2,
          }),
          style({
            transform: 'perspective(400px) rotateX(10deg)',
            opacity: 1,
            offset: 0.4,
          }),
          style({
            transform: 'perspective(400px) rotateX(-5deg)',
            offset: 0.7,
          }),
          style({
            transform: 'perspective(400px)',

            offset: 1,
          }),

        ])
      ),
    ]),
  ]);
};
