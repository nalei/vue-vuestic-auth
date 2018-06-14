<template>
  <vue-event-calendar :events="demoEvents"></vue-event-calendar>
</template>

<script>

export default {
  name: 'event-calendar',
  data () {
    return {
      demoEvents: [
        {
          date: '2018/05/12',
          title: 'Кастинг',
          desc: 'Кастинг для рекламной съемки ювелирной компании'
        },
        { date: '2018/05/15',
          title: 'Кастинг',
          desc: 'Кастинг для участия в национальном конкурсе',
          customClass: 'disabled highlight' // Custom classes to an calendar cell
        },
        { date: '2018/06/01',
          title: 'Кастинг',
          desc: 'Требуется девушка для участия в фотопроекте',
        },
        { date: '2018/06/16',
          title: 'Кастинг',
          desc: 'Кастинг для съемоки видеоклипа',
        }
      ]
    }
  }
}
</script>