window.addEventListener('DOMContentLoaded', init);

function init() {

  function CreateGalleryElement(solution, dataLocation, urlImg) {

    this.createElementItem = document.createElement('li');
    this.createElementItem.classList.add('solutions__item');
    this.createElementItem.classList.add(solution);
    this.createElementItem.setAttribute('data-location', dataLocation);
    this.createElementItem.setAttribute('style', `background-image: url(${urlImg})`);
    this.ElementsList = document.querySelector('.solutions__list');
    this.ElementsList.appendChild(this.createElementItem);


  }



  let elemArray = [
    {
      solution: 'home',
      dataLocation: 'Проект 1',
      urlImg: './img/photo/1_home/1_home_anna-min.jpg'
    },
    {
      solution: 'home',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/1_home/1_home_kvartira_voroncovskaya_1-min.jpg'
    },
    {
      solution: 'home',
      dataLocation: 'Проект 3',
      urlImg: './img/photo/1_home/1_home_kvartira_voroncovskaya_2-min.jpg'
    },
    {
      solution: 'home',
      dataLocation: 'Проект 4',
      urlImg: './img/photo/1_home/1_home_ohota_1-min.jpg'
    },
    {
      solution: 'home',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/1_home/1_home_ohota_2-min.jpg'
    },
    {
      solution: 'home',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/1_home/1_home_ohota_3-min.jpg'
    },
    {
      solution: 'home',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/1_home/1_home_ohota_4-min.jpg'
    },
    {
      solution: 'home',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/1_home/1_home_romanov_pereulok_1-min.jpg'
    },
    {
      solution: 'home',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/1_home/1_home_romanov_pereulok_2-min.jpg'
    },
    {
      solution: 'home',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/1_home/1_home_romanov_pereulok_3-min.jpg'
    },
    {
      solution: 'home',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/1_home/1_home_truzhennikov_1-min.jpg'
    },
    {
      solution: 'home',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/1_home/1_home_truzhennikov_2-min.jpg'
    },
    {
      solution: 'office',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/2_office/2_office_google_1-min.jpg'
    },
    {
      solution: 'office',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/2_office/2_office_google_2-min.jpg'
    },
    {
      solution: 'office',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/2_office/2_office_google_3-min.jpg'
    },
    {
      solution: 'office',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/2_office/2_office_motol_1-min.jpg'
    },
    {
      solution: 'office',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/2_office/2_office_motol_2-min.jpg'
    },
    {
      solution: 'office',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/2_office/2_office_motol_3-min.jpg'
    },
    {
      solution: 'office',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/2_office/2_office_nokia_1-min.jpg'
    },
    {
      solution: 'office',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/2_office/2_office_nokia_2-min.jpg'
    },
    {
      solution: 'office',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/2_office/2_office_nokia_3-min.jpg'
    },
    {
      solution: 'office',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/2_office/2_office_trub_1-min.jpg'
    },
    {
      solution: 'office',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/2_office/2_office_trub_2-min.jpg'
    },
    {
      solution: 'office',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/2_office/2_office_trub_3-min.jpg'
    },
    {
      solution: 'office',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/2_office/2_office_yandex_1-min.jpg'
    },
    {
      solution: 'office',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/2_office/2_office_yandex_2-min.jpg'
    },
    {
      solution: 'office',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/2_office/2_office_yandex_3-min.jpg'
    },
    {
      solution: 'horeca',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/3_horeca/3_horeca_bageteriya_1-min.jpg'
    },
    {
      solution: 'horeca',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/3_horeca/3_horeca_bageteriya_2-min.jpg'
    },
    {
      solution: 'horeca',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/3_horeca/3_horeca_botanica_1-min.jpg'
    },
    {
      solution: 'horeca',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/3_horeca/3_horeca_botanica_2-min.jpg'
    },
    {
      solution: 'horeca',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/3_horeca/3_horeca_botanica_3-min.jpg'
    },
    {
      solution: 'horeca',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/3_horeca/3_horeca_cdl_1-min.jpg'
    },
    {
      solution: 'horeca',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/3_horeca/3_horeca_cdl_2-min.jpg'
    },
    {
      solution: 'horeca',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/3_horeca/3_horeca_cdl_3-min.jpg'
    },
    {
      solution: 'horeca',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/3_horeca/3_horeca_chicha_1-min.jpg'
    },
    {
      solution: 'horeca',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/3_horeca/3_horeca_chicha_2-min.jpg'
    },
    {
      solution: 'horeca',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/3_horeca/3_horeca_chicha_3-min.jpg'
    },
    {
      solution: 'horeca',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/3_horeca/3_horeca_druzhba_1-min.jpg'
    },
    {
      solution: 'horeca',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/3_horeca/3_horeca_druzhba_2-min.jpg'
    },
    {
      solution: 'horeca',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/3_horeca/3_horeca_druzhba_3-min.jpg'
    },
    {
      solution: 'horeca',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/3_horeca/3_horeca_fresh_1-min.jpg'
    },
    {
      solution: 'horeca',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/3_horeca/3_horeca_fresh_2-min.jpg'
    },
    {
      solution: 'horeca',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/3_horeca/3_horeca_kafe1991_1-min.jpg'
    },
    {
      solution: 'horeca',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/3_horeca/3_horeca_kafe1991_2-min.jpg'
    },
    {
      solution: 'horeca',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/3_horeca/3_horeca_kafe1991_3-min.jpg'
    },
    {
      solution: 'horeca',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/3_horeca/3_horeca_labarge_1-min.jpg'
    },
    {
      solution: 'trade',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/4_torgovoe/4_torgovoe_almaata_1-min.jpg'
    },
    {
      solution: 'trade',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/4_torgovoe/4_torgovoe_almaata_2-min.jpg'
    },
    {
      solution: 'trade',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/4_torgovoe/4_torgovoe_almaata_3-min.jpg'
    },
    {
      solution: 'trade',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/4_torgovoe/4_torgovoe_butik_luks_1-min.jpg'
    },
    {
      solution: 'trade',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/4_torgovoe/4_torgovoe_butik_luks_2-min.jpg'
    },
    {
      solution: 'trade',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/4_torgovoe/4_torgovoe_sportmagazin_1-min.jpg'
    },
    {
      solution: 'trade',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/4_torgovoe/4_torgovoe_sportmagazin_2-min.jpg'
    },
    {
      solution: 'trade',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/4_torgovoe/4_torgovoe_sportmagazin_3-min.jpg'
    },
    {
      solution: 'prom',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/5_promishlennoe/5_promyshlennoe_horeca_ibis_stupino_2-min.jpg'
    },
    {
      solution: 'prom',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/5_promishlennoe/5_promyshlennoe_horeca_ibis_stupino_3-min.jpg'
    },
    {
      solution: 'prom',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/5_promishlennoe/5_promyshlennoe_horeca_ibis_stupino_1-min.jpg'
    },
    {
      solution: 'prom',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/5_promishlennoe/5_promyshlennoe_novogorsk_kurort_1-min.jpg'
    },
    {
      solution: 'prom',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/5_promishlennoe/5_promyshlennoe_novogorsk_kurort_3-min.jpg'
    },
    {
      solution: 'prom',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/5_promishlennoe/5_promyshlennoe_novogorsk_kurort_2-min.jpg'
    },
    {
      solution: 'prom',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/5_promishlennoe/5_promyshlennoe_novotel_krasnoyarsk_1-min.jpg'
    },
    {
      solution: 'prom',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/5_promishlennoe/5_promyshlennoe_novotel_krasnoyarsk_2-min.jpg'
    },
    {
      solution: 'prom',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/5_promishlennoe/5_promyshlennoe_novotel_krasnoyarsk_3-min.jpg'
    },
    {
      solution: 'prom',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/5_promishlennoe/5_promyshlennoe_pioneer_1-min.jpg'
    },
    {
      solution: 'prom',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/5_promishlennoe/5_promyshlennoe_pioneer_2-min.jpg'
    },
    {
      solution: 'prom',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/5_promishlennoe/5_promyshlennoe_pioneer_3-min.jpg'
    },
    {
      solution: 'prom',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/5_promishlennoe/5_promyshlennoe_sambo70_1-min.jpg'
    },
    {
      solution: 'prom',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/5_promishlennoe/5_promyshlennoe_sambo70_2-min.jpg'
    },
    {
      solution: 'prom',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/5_promishlennoe/5_promyshlennoe_sambo70_3-min.jpg'
    },
    {
      solution: 'prom',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/5_promishlennoe/5_promyshlennoe_bolshaya_spasskaya-min.jpg'
    },
    {
      solution: 'prom',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/5_promishlennoe/5_promyshlennoe_ibis_krasnoyarsk_3-min.jpg'
    },
    {
      solution: 'prom',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/5_promishlennoe/5_promyshlennoe_ibis_krasnoyarsk_2-min.jpg'
    },
    {
      solution: 'prom',
      dataLocation: 'Проект 2',
      urlImg: './img/photo/5_promishlennoe/5_promyshlennoe_ibis_krasnoyarsk_1-min.jpg'
    }

  ]

  elemArray.forEach((item) => {
    let createGalleryElement = new CreateGalleryElement(item.solution, item.dataLocation, item.urlImg);
  })
}
