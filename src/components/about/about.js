import React from 'react';
import contentBg from '../contacts/contentBg.jpg';

import './about.css';

const About = () => {
  return (
    <div className="solop-content-bg solop-bg">
      <img src={contentBg} alt="content backgound" />  
      <div className="solop-content scroll-block">
        <h1>Адвокат Солоп Валентин Петрович</h1>
        <p>
          Солоп Валентин Петрович займається адвокатською практикою в місті
          Нововолинськ і пропонує клієнтам повний спектр юридичних послуг від
          надання юридичних консультацій до комплексного юридичного супроводу
          підприємницької діяльності.
        </p>
        <p className="solop-about-item">Освіта:</p>
        <p>
          Юридична вища: диплом магістра Національної юридичної академії України
          ім. Я. Мудрого (м. Харків) від 2012 року. Факультет господарського
          права. Кваліфікація - юрист;
        </p>
        <p class="solop-about-item">Стажування:</p>
        <p>
          2009 рік - Прокуратура, суд; 2011 рік - Прокуратура, суд; 2012 рік -
          Державна адміністрація залізничного транспорту України (юридичний
          департамент);
        </p>
        <p className="solop-about-item">Досвід роботи:</p>
        <p>
          Сім років успішної юридичної практики. Маю досвід роботи як в
          підприємствах державної форми власності, в тому числі юридичний
          департамент ПАТ «Укрзалізниця», так і в топових юридичних фірмах міста
          Києва, зокрема ТОВ «ЮК «Ващенко, Бугай і партнери» (VB PARTNERS), ТОВ
          «ЮФ «Горецький та партнери». Адвокатською діяльністю займаюсь з червня
          2018 року. Свідоцтво про право на зайняття адвокатською діяльністю №
          000212 від 04.06.2018, видане Радою адвокатів м. Києва.
        </p>
        <p className="solop-about-item">Спеціалізація:</p>
        <p>
          Трудові спори, сімейні спори (розірвання шлюбу, поділ майна, аліменти
          та інше), спадкові спори (спадщина), житлові спори, земельні спори,
          кредитні спори, спори про стягнення грошових коштів (майна),
          господарське та корпоративне право, податкові спори, договірне право
          (спори, що виникають на підставі договірних правовідносин), справи про
          адміністративні правопорушення (ДТП, порушення правил ДР), виконавче
          провадження.
        </p>
        <br />
        <br />
      </div>
    </div>
  );
};

export default About;
