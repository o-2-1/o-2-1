import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
//   {
//     title: 'Коммунизм возможен',
//       Svg: require('@site/static/img/red_flag_13.svg').default,
//     description: (
//       <>
//           Счастье всем, даром и никто не уйдёт обиженным!
//       </>
//     ),
//   },
//   {
//     title: 'Развиваем рабочее движение',
//     Svg: require('@site/static/img/organize-fish.svg').default,
//     description: (
//       <>
//           Сила рабочего класса — в организации.
//       </>
//     ),
//   },
//   {
//     title: 'Строим коммунистическую партию',
//     Svg: require('@site/static/img/power_fist_2.svg').default,
//     description: (
// 	<>
// 	    А если в партию сгрудились малые –<br></br>
// сдайся, враг, замри и ляг!<br></br>
// Партия – рука миллионопалая, <br></br>
// сжатая в один громящий кулак.
//       </>
//     ),
//   },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
