<script lang="ts">
  import { onMount } from 'svelte';
  import { YandexMetrikaHit, YandexSearchForm, YandexSearchSerp } from 'daks-svelte';

  const robots = 'noindex, follow';
  const title = 'СКМ • Поиск';
  const description = 'Поиск на сайте предпрятия СКМ';
  const canonical = '';

  onMount(() => document?.lazyloadInstance?.update());
</script>

<YandexMetrikaHit
  {robots}
  {title}
  {description}
  {canonical} />

<main
  class="mb-0"
  itemprop="mainContentOfPage">
  <header class="content mb-12">
    <h1 class="title">Результаты поиска</h1>
  </header>

  <YandexSearchForm
    class="content mb-8 px-5 xs:pr-[44px] sm:pr-[52px] md:pr-[55px] lg:pr-[142px] xl:pr-[170px]"
    reload={true}
    reverse={true} />

  <YandexSearchSerp class="content pr-8 lg:pr-4" />
</main>
