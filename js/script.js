document.addEventListener("DOMContentLoaded", function() {
    try{
        $('.goods-slider').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
              {
                breakpoint: 1360,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  dots: true
                }
              },
              {
                breakpoint: 700,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  dots: true,
                  arrows: false,
                }
              },
            ]
          }); 
          $('.proj-slider').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
              {
                breakpoint: 1360,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  dots: true
                }
              },
              {
                breakpoint: 1000,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows: false,
                  dots: true
                }
              },
              {
                breakpoint: 720,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                  dots: true
                }
              }
            ]
          });
          $('.banner-slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            autoplay: true,
          });
          $('.slider-certifications').slick({
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
              {
                breakpoint: 630,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
              },
            ]
          });
          $('.tabs-content__card-slider').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
              {
                breakpoint: 1080,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint: 760,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows: false,
                  dots: true
                }
              },
            ]
          });
          $('.slider').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
              {
                breakpoint: 1360,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  dots: true
                }
              },
              {
                breakpoint: 960,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  dots: true
                }
              },
              {
                breakpoint: 580,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: true
                }
              }
            ]
          });
          $('.product-card__slider-big').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            asNavFor: '.product-card__slider-nav',
            responsive: [
              {
                breakpoint: 580,
                settings: {
                  arrows: true,
                  dots: true
                }
              },
            ]
          });
          $('.product-card__slider-nav').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            asNavFor: '.product-card__slider-big',
            focusOnSelect: true,
          });
          $('.product-card__vidio-slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
              {
                breakpoint: 960,
                settings: {
                  dots: true
                }
              },
            ]
          });
          $('.completed-projects__slider').slick({
            infinite: true,
            slidesToShow: 7,
            slidesToScroll: 2,
            arrows: true,
            responsive: [
              {
                breakpoint: 1430,
                settings: {
                  slidesToShow: 6,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 1360,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 1080,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 2,
                  dots: true,
                  arrows: false
                }
              },
              {
                breakpoint: 820,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  dots: true,
                  arrows: false
                }
              },
              {
                breakpoint: 620,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  dots: true,
                  arrows: false
                }
              },
            ]
          });
          $('.reviews-slider').slick({
            infinite: true,
            slidesToShow: 9,
            slidesToScroll: 3,
            arrows: true,
            responsive: [
              {
                breakpoint: 1430,
                settings: {
                  slidesToShow: 8,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 1360,
                settings: {
                  slidesToShow: 7,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 1150,
                settings: {
                  slidesToShow: 6,
                  slidesToScroll: 2,
                }
              }, 
              {
                breakpoint: 1000,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll: 2,
                  arrows: false
                }
              },
              {
                breakpoint: 800,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 680,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
              },
            ]
          });
        } catch (e) {}
        try{
          function tabs (tabsItems, tabsItem, tabsItemContent, acteveClass) {
              const tabs = document.querySelectorAll(tabsItems),
              tab = document.querySelector(tabsItem),
              tabsContent = document.querySelectorAll(tabsItemContent);
          if(tabs){
              tabs.forEach((tab) => 
                  tab.addEventListener('click', function(e){
                      e.preventDefault();
                      const id = e.target.getAttribute('href').replace('#', '');

                      tabs.forEach((child) => child.classList.remove(acteveClass));
                      tabsContent.forEach((child) => child.classList.add('tab-hide'));
                      
                      tab.classList.add(acteveClass);
                      document.getElementById(id).classList.remove('tab-hide');
                  })
                  );
                  if(tab){
                      tab.click();
                  }

      }; }
            tabs('.tabs__btn', '.tabs__btn', '.tabs-content__item', 'tabs__btn-active')
      } catch (e) {}
      try{
        const q = document.querySelectorAll('.product-nav-top__quantity');
        q.forEach((i) => {
          if(i.textContent == '' || i.textContent == '0'){
            i.classList.add('hide');
          }
        })
      } catch (e) {}
      const menuTrig = document.querySelector('.mob-menu-trig'),
      closeLine = document.querySelector('.mob-menu-trig__close'),
      mobMenu = document.querySelector('.mob-menu');

      closeLine.addEventListener('click', () => {
        mobMenu.classList.add('hide');
      })

      menuTrig.addEventListener('click', () => {
        mobMenu.classList.remove('hide');
      })
      try{
        const finalCard = document.querySelectorAll('.certifications-card'),
        wrap = document.querySelector('.cert__modal'),
        wrapClose = document.querySelector('.cert-modal__close'),
        imgWrap = wrap.querySelector('.modal-img');
      
        finalCard.forEach((i) =>{
            i.addEventListener('click', (e) =>{
                let self = e.target.closest('.certifications-card');
                img = self.querySelector('.certifications-card__img').src;
                imgWrap.src = img;
                wrap.classList.remove('hide');
            });
        });
        wrapClose.addEventListener('click', () => {
          wrap.classList.add('hide');
        })
        wrap.addEventListener('click', (e) => {
          if (e.target === wrap.querySelector('.modal__dialoge') || e.target === wrap.querySelector('.modal-close')){
            wrap.classList.add('hide');
          }     
      });  
        document.addEventListener('keydown', (e) => {
          if (e.code === "Escape" && !modal.classList.contains('modal-off')) { 
            wrap.classList.add('hide');
          }
      });
      } catch (e) {}
      const headerLogo = document.querySelector('.header-logo'),
      headerLogoMob = document.querySelector('.header-city'),
      logoQ = window.matchMedia("(max-width: 960px)"),
      cartQ = window.matchMedia("(max-width: 580px)"),
      mobCart = document.querySelector('.header-cart'),
      mobCartWrap = document.querySelector('.mob-cart'),
      mobMenInf = document.querySelector('.header-center__content'),
      mobMenInfWrap = document.querySelector('.mob-menu__info');
      if(logoQ.matches){
        headerLogoMob.append(headerLogo);
      }
      if(cartQ.matches){
        mobCartWrap.append(mobCart);
        mobMenInfWrap.append(mobMenInf);
      }
      try{
        const wrB = document.querySelector('.mob-morebtn'),
        moB = wrB.closest('.section__po').querySelector('.seeall-link');
        if(logoQ.matches){
          wrB.append(moB);
        }
      } catch (e) {}
      try{
        const acHeader = document.querySelectorAll('.ac-header');
        acHeader.forEach((i) => {
            i.addEventListener('click', () => {
            let self = i.closest('.product-information__section'),
            cont = self.querySelector('.gc-content'),
            selfHead =  self.querySelector('.ac-header');
            cont.classList.toggle('cont-show');
            selfHead.classList.toggle('ac-header-active');
          })
        })
      } catch (e) {}
      try{
        const qq = window.matchMedia("(max-width: 1080px)"),
        perr = document.querySelector('#spec'),
        t = perr.querySelector('.section-title'),
        wr = perr.querySelector('.mob-tw');
        if(qq.matches){
          wr.append(t);
        }
      } catch (e) {}
      try{
        const selectHeader = document.querySelectorAll('.select__header'),
        selectItem = document.querySelectorAll('.select__item');


        document.addEventListener('click', (e) => {
                    if (e.target.classList.contains('select__header')) {
                        e.target.closest('.select').classList.remove('is-active');
                    }  else {
                         document.querySelectorAll('.select').forEach((i) => {
                            i.classList.add('is-active');
                        });
                    }
        });

        selectItem.forEach((item) => {
            item.addEventListener('click', selectChoose)
        });

        function selectChoose() {
            const text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.add('is-active');
        }

      } catch (e) {}
});