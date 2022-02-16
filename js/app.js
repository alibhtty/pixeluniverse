// source: https://www.leagueoflegends.com/en-us/champions/

const App = {
  data() {
    return {
      isFullscreen: false,
      activeIndex: 0,
      list: [
      {
        name: 'pato',
        role: 'assassin',
        difficulty: 'moderate',
        desc: 'Utterly ruthless and without mercy, Zed is the leader of the Order of Shadow, an organization he created with the intent of militarizing Ionia\'s magical and martial traditions to drive out Noxian invaders.',
        img: '../assets/img/banner/black.jpg', /* 1215 x 717 */
        thumbImg: '../assets/img/colections/1/pato01-720x.png' },

      {
        name: 'yuumi',
        role: 'support',
        difficulty: 'low',
        desc: 'A magical cat from Bandle City, Yuumi was once the familiar of a yordle enchantress, Norra. When her master mysteriously disappeared, Yuumi became the Keeper of Norra\'s sentient Book of Thresholds, traveling through portals in its pages to search for her. Yearning for affection.',
        img: '../assets/img/banner/card-bg1.gif',
        thumbImg: '../assets/img/colections/1/pato02-720x.png' },

      {
        name: 'morgana',
        role: 'mage',
        difficulty: 'low',
        desc: 'Conflicted between her celestial and mortal natures, Morgana bound her wings to embrace humanity, and inflicts her pain and bitterness upon the dishonest and the corrupt. She rejects laws and traditions she believes are unjust, and fights for truth from the shadows of Demacia—even as others seek to repress it—by casting shields and chains of dark fire.',
        img: '../assets/img/banner/black.jpg',
        thumbImg: '../assets/img/colections/1/pato03-720x.png' },

      {
        name: 'vex',
        role: 'mage',
        difficulty: 'low',
        desc: 'In the black heart of the Shadow Isles, a lone yordle trudges through the spectral fog, content in its murky misery. With an endless supply of teen angst and a powerful shadow in tow, Vex lives in her own self-made slice of gloom, far from the revolting cheer of the “normie” world.',
        img: '../assets/img/banner/black.jpg',
        thumbImg: '../assets/img/colections/1/pato04-720x.png' },

      {
        name: 'irelia',
        role: 'fighter',
        difficulty: 'moderate',
        desc: 'The Noxian occupation of Ionia produced many heroes, none more unlikely than young Irelia of Navori. Trained in the ancient dances of her province, she adapted her art for war, using the graceful and carefully practised movements to levitate a host of deadly blades.',
        img: '../assets/img/banner/black.jpg',
        thumbImg: '../assets/img/colections/1/pato05-720x.png' },

      {
        name: 'yasuo',
        role: 'fighter',
        difficulty: 'high',
        desc: 'An Ionian of deep resolve, Yasuo is an agile swordsman who wields the air itself against his enemies. As a proud young man, he was falsely accused of murdering his master—unable to prove his innocence, he was forced to slay his own brother in self defense.',
        img: '../assets/img/banner/black.jpg',
        thumbImg: '../assets/img/colections/1/pato01-720x.png' },

      {
        name: 'graves',
        role: 'marksman',
        difficulty: 'low',
        desc: 'Malcolm Graves is a renowned mercenary, gambler, and thief—a wanted man in every city and empire he has visited. Even though he has an explosive temper, he possesses a strict sense of criminal honor, often enforced at the business end of his double-barreled shotgun Destiny.',
        img: '../assets/img/banner/black.jpg',
        thumbImg: '../assets/img/colections/1/pato02-720x.png' },

      {
        name: 'leona',
        role: 'tank',
        difficulty: 'moderate',
        desc: 'Imbued with the fire of the sun, Leona is a holy warrior of the Solari who defends Mount Targon with her Zenith Blade and the Shield of Daybreak. Her skin shimmers with starfire while her eyes burn with the power of the celestial Aspect within her.',
        img: '../assets/img/banner/black.jpg',
        thumbImg: '../assets/img/colections/1/pato03-720x.png' }] };



  },
  computed: {
    activeInfo() {
      if (!this.list.length) return null;
      return this.list[this.activeIndex];
    },
    itemPosition() {
      const len = this.list.length;
      return this.list.map((_, key) => {
        const deg = 360 / len * key - 90;
        const radius = '1.7rem';
        return `rotate(${deg}deg) translate(${radius}) rotate(${-deg}deg)`;
      });
    } },

  methods: {
    toggleFullScreen() {
      const el = document.documentElement;
      if (!this.isFullscreen) {
        // open
        if (el.requestFullscreen) {
          el.requestFullscreen();
        } else if (el.webkitRequestFullscreen) {/* Safari */
          el.webkitRequestFullscreen();
        } else if (el.msRequestFullscreen) {/* IE11 */
          el.msRequestFullscreen();
        }
      } else {
        // close
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {/* Safari */
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {/* IE11 */
          document.msExitFullscreen();
        }
      }
      this.isFullscreen = !this.isFullscreen;

    } } };



Vue.createApp(App).mount('#app');
//# sourceURL=pen.js