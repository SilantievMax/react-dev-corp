import React from 'react'
import Heading from '../../generic/Heading/Heading'
import Layout from '../../Layout/Layout'
import CardCase from './CardCase/CardCase'
import styles from './History.module.css'
import img1 from '../../../assets/images/history1.webp'
import img2 from '../../../assets/images/history2.webp'
import img3 from '../../../assets/images/history3.webp'
import img4 from '../../../assets/images/history4.webp'
import img5 from '../../../assets/images/history5.webp'
import CardHistory from './CardHistory/CardHistory'

const caseArry = [
  {
    img: img4,
    isSoon: false,
    heading: 'StartUp Space',
    description:
      'Акселератор для молодых стартапов, дающий возможность проходить различные программы для улучшения своих профессиональных навыков, знакомства с инвесторами и нетворкинга. Благодаря участию в этом мероприятии, наш проект смог найти новых людей в команду, понять некоторые свои ошибки, обрести полезные связи. Выиграли возможность участия в крупном акселерторе Web3.0'
  },
  {
    img: img5,
    isSoon: true,
    heading: 'Zborka labs',
    description:
      'Акселератор для молодых стартапов, дающий возможность проходить различные программы для улучшения своих профессиональных навыков, знакомства с инвесторами и нетворкинга. Благодаря участию в этом мероприятии, наш проект смог найти новых людей в команду, понять некоторые свои ошибки, обрести полезные связи. Выиграли возможность участия в крупном акселерторе Web3.0'
  }
]

const historyArry = [
  {
    id: 1,
    img: img1,
    description:
      'Идея. Без идеи не было бы ничего. Самые великие изобретения, картины, проекты, самолёты, машины часы и многое другое начались с идеи. Это, впринципе, логично. Но вот задача: как довести эту идею до чего-то, что будет по истене нужно и интересно, а также она что сможет дать? С таким же вопросом столкнулся и отец идеи (название будем менять, надо придумать за выходные) Святослав Кратик. Святослав понял, что для того, чтобы реализовать что-то грандиозное, это что-то нужно разбить на части, цели. А также Святослав понял, что в основе чего-то большого лежит много факторов: ресурсы, финансы, связи, команда. И Святослав начал действовать.'
  },
  {
    id: 2,
    img: img2,
    description:
      'Собрал вокруг себя единомышленников. Потом из этого числа получилось сделать команду, создать первые продукты, с которыми можно  было получить второй компонент успешной реализации, а именно связи.'
  },
  {
    id: 3,
    img: img3,
    description:
      'Пройдя мероприятия, программы, был получен профессиональный опыт, увеличена команда, а главное, идея получила поддержку и смогла развиваться дальше. Сейчас идёт бурная работа, чтобы создать что-то очень важное и нужное, что поможет обычному человеку. И нужно помнить: только мы сами создаём свое будущее.'
  }
]

const History = () => {
  return (
    <div className={styles.popup}>
      <div className={styles.wrapper}>
        <Heading heading='История' />
        {historyArry.map(e => (
          <CardHistory key={e.id} id={e.id} img={e.img} description={e.description} />
        ))}
        <Heading heading='кейсы' />
        {caseArry.map(e => (
          <CardCase
            key={e.img}
            img={e.img}
            heading={e.heading}
            description={e.description}
            isSoon={e.isSoon}
          />
        ))}
      </div>
    </div>
  )
}

export default History
