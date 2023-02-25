<script lang="ts">
  import { onMount } from 'svelte';
  import { YandexMetrikaHit, Async, CarouselKit } from 'daks-svelte';

  import { screens } from '$lib/assets/images/presentation';
  const getter = async () => ({
    dataset: await screens()
  });

  const show = (x: number): number =>
    (x < 640 && 1) || (x < 768 && 2) || (x < 1024 && 3) || (x < 1280 && 4) || 5;

  const title = 'СУ 363 • О предприятии';
  const description = 'О предприятии Строительное Управление № 363';

  onMount(() => document?.lazyload.update());
</script>

<YandexMetrikaHit
  {title}
  {description} />

<svelte:body itemtype="https://schema.org/AboutPage" />

<main itemprop="mainContentOfPage">
  <header class="content xs:mb-12">
    <h1
      class="title"
      itemprop="name">
      О предприятии
    </h1>
  </header>

  <Async
    let:value
    {getter}>
    <CarouselKit
      class="container hidden xs:block mb-8 drop-shadow-md rounded-lg overflow-hidden opa"
      custom={{progress: '!bottom-0'}}
      {...value}
      {show}
      ratio={16 / 9}
      duration={15000}
      controls="play"
      progress
      stream
      check />
  </Async>

  <div class="content readable">
    <h2 class="mb-4">Основные направления деятельности:</h2>

    <ul class="pl-5 sm:pl-6 lg:pl-7 -indent-4 leading-7">
      <li>Снос зданий и сооружений;</li>
      <li>Вырубка деревьев, кустарников и корчевка пней. Земляные работы;</li>
      <li>Устройство свайных оснований и фундаментов;</li>
      <li>Устройство гидроизоляции и утепления стен, фундаментов;</li>
      <li>Устройство монолитных железобетонных кострукций;</li>
      <li>Устройство кровли и молниезащиты;</li>
      <li>Каменная кладка, утройство перегородок;</li>
      <li>Изготовление и монтаж металлоконструкций;</li>
      <li>Установка конструкций витражей и окон;</li>
      <li>Установка внутренних и наружных дверных блоков, ворот;</li>
      <li>Монтаж вентилируемых фасадов и фасадов по системе "Теплый дом";</li>
      <li>Внутренняя отделка зданий;</li>
      <li class="">
        Монтаж внутренних инженерных коммуникаций: канализация, отопление, водоснабжение,
        вентиляция, кондиционирование, электромонтажные работы, слаботочные системы, системы
        пожарной безопасности, спринклерное пожаротушение;
      </li>
      <li>Вертикальный транспорт и подъемное оборудование;</li>
      <li>Поставка и монтаж оборудования и оснащения;</li>
      <li>Монтаж ИТП, ТП;</li>
      <li>Благоустройство и озеленение территории. Устройство дорог, парковок, проездов;</li>
      <li>Прокладка и перекладка наружных коммуникаций;</li>
      <li>Наружное освещение;</li>
      <li>Оснащение объектов технологическим оборудованием, мебелью.</li>
    </ul>
  </div>
</main>
