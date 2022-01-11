'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Songs', [
      { title: 'Dawn and Dusk', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', songUrl: 'https://res.cloudinary.com/jenn/video/upload/v1641835506/sproutcloud/songs/Ketsa_-_05_Dusk-and-Dawn_yzniaw.mp3', imgUrl: 'https://res.cloudinary.com/jenn/image/upload/v1641836844/sproutcloud/images/dima-langemann-unsplash_ayfvtu.jpg', userId: 1 },
      { title: "Always Bright", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', songUrl: 'https://res.cloudinary.com/jenn/video/upload/v1641836936/sproutcloud/songs/Ketsa_-_07_Always-Bright_sh63w1.mp3', imgUrl: 'https://res.cloudinary.com/jenn/image/upload/v1641837136/sproutcloud/images/david-boca-unsplash_ozfyfi.jpg', userId: 1 },
      { title: 'Dissolution', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', songUrl: 'https://res.cloudinary.com/jenn/video/upload/v1641837257/sproutcloud/songs/Ketsa_-_10_Dissolution_hssu5z.mp3', imgUrl: 'https://res.cloudinary.com/jenn/image/upload/v1641839263/sproutcloud/images/annie-spratt-0ZPSX_mQ3xI-unsplash_gd3x6e.jpg', userId: 1 },
      { title: 'Enchanted Forest', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', songUrl: 'https://res.cloudinary.com/jenn/video/upload/v1641837908/sproutcloud/songs/Audiobinger_-_Enchanted_Forest_iabufi.mp3', imgUrl: 'https://res.cloudinary.com/jenn/image/upload/v1641838356/sproutcloud/images/mauro-baldin-0jUyVImwaGQ-unsplash_zyb2dr.jpg', userId: 2 },
      { title: 'Memories', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', songUrl: 'https://res.cloudinary.com/jenn/video/upload/v1641838437/sproutcloud/songs/Audiobinger_-_Memories_q8yr05.mp3', imgUrl: 'https://res.cloudinary.com/jenn/image/upload/v1641838510/sproutcloud/images/nong-v-MCForsxac5E-unsplash_trltzl.jpg', userId: 2 },
      { title: 'Soul Zone', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', songUrl: 'https://res.cloudinary.com/jenn/video/upload/v1641838622/sproutcloud/songs/Ketsa_-_Soul_Zone_oaz51a.mp3', imgUrl: 'https://res.cloudinary.com/jenn/image/upload/v1641838692/sproutcloud/images/jr-korpa-gQq8nhB6hb0-unsplash_f5uow2.jpg', userId: 2 },
      { title: 'Happy Swing', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', songUrl: 'https://res.cloudinary.com/jenn/video/upload/v1641838915/sproutcloud/songs/Serge_Quadrado_-_Happy_Swing_lsiywe.mp3', imgUrl: 'https://res.cloudinary.com/jenn/image/upload/v1641839812/sproutcloud/images/chris-bair-A10y2Eq7OHY-unsplash_zjwlhf.jpg', userId: 3 },
      { title: 'Funk Bright', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', songUrl: 'https://res.cloudinary.com/jenn/video/upload/v1641839867/sproutcloud/songs/Ketsa_-_13_Funk-Bright_aig8me.mp3', imgUrl: 'https://res.cloudinary.com/jenn/image/upload/v1641839962/sproutcloud/images/jakob-owens-St4wG5QEYJQ-unsplash_ied3gr.jpg', userId: 3 },
      { title: 'Unfocused', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', songUrl: 'https://res.cloudinary.com/jenn/video/upload/v1641840019/sproutcloud/songs/Ketsa_-_Unfocused_eq4nyj.mp3', imgUrl: 'https://res.cloudinary.com/jenn/image/upload/v1641840102/sproutcloud/images/drew-beamer-GwT85ykUo_E-unsplash_n1kjea.jpg', userId: 3 },
      { title: 'Not This Way', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', songUrl: 'https://res.cloudinary.com/jenn/video/upload/v1641840193/sproutcloud/songs/Ketsa_-_08_Not-This-Way_wytodt.mp3', imgUrl: 'https://res.cloudinary.com/jenn/image/upload/v1641840344/sproutcloud/images/ryan-gerrard-cyIPnkGHMI8-unsplash_g02h4r.jpg', userId: 1 },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
