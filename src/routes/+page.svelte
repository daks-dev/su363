<script lang="ts">
  import { YandexMetrikaHit, LightboxKit, Icon } from 'daks-svelte';

  import type { PageData } from './$types';
  export let data: PageData;
  const { images, thumbnails, labels } = data;

  const canonical = process.env.APP_CANONICAL ? new URL(process.env.APP_CANONICAL).origin : '';

  import microdata from '$configs/microdata';
  const { itemtype, name, logo, email, telephone, address } = microdata.organization;

  const button = `
    py-4 px-5 rounded-lg
    text-cyan-600 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-200
    dark:text-slate-400 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700
    shadow-md shadow-slate-500/20
  `;

  const title = 'СУ 363 • Строительное Управление № 363 Москва';
  const description =
    'Строительство и ремонт, строительный и технический надзор в Москве. Строительное Управление № 363';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <div
    class="
      wrapper py-12
      flex flex-wrap items-start"
    itemscope
    {itemtype}>
    <header
      class="flex flex-col grow mb-8"
      style:--text-shadow-val="7px">
      <h1
        class="
          mb-8
          font-extrabold text-shadow
          text-7xl sm:text-9xl"
        itemprop="name">
        <span class="text-rose-700">СУ</span>
        <span class="text-gray-600">363</span>
      </h1>
      <h2
        class="
          ml-2
          text-shadow text-xl sm:text-2xl md:text-3xl 2xl:text-4xl">
        Строительное Управление №&nbsp;363 Москва
      </h2>
      <meta
        itemprop="name"
        content={name} />
      <meta
        itemprop="email"
        content={email} />
      <meta
        itemprop="telephone"
        content={telephone} />
      <link
        itemprop="logo"
        href={`${canonical}${logo}`} />
    </header>
    <div
      class="grow lg:max-w-xs xl:max-w-sm lg:pt-4 px-2"
      itemprop="address"
      itemscope
      itemtype={address.itemtype}>
      <div
        class="
          xs:hidden
          w-full flex flex-row justify-around items-center">
        <a
          class={button}
          href="tel://{telephone.replace(/[\s-()]/g, '')}">
          <Icon
            class="w-16 h-16"
            icon="ic:round-phone-in-talk" />
        </a>
        <a
          class={button}
          href="mailto:{email}">
          <Icon
            icon="ic:round-mail-outline"
            class="w-16 h-16" />
        </a>
      </div>
      <div
        class="
          hidden xs:flex flex-col justify-center items-center gap-y-4 lg:gap-y-5
          text-slate-600 dark:text-slate-400">
        <a
          class="
            font-semibold
            text-2xl sm:text-4xl lg:text-3xl xl:text-4xl
            hover:text-sky-500
            transition-all duration-200 ease-in-out"
          href="tel://{telephone.replace(/[\s-()]/g, '')}">
          {telephone}
        </a>
        <a
          rel="nofollow noreferrer"
          class="
            text-center lg:text-start
            sm:text-lg md:text-xl lg:text-lg xl:text-xl
            hover:text-sky-500
            transition-all duration-200 ease-in-out"
          href={address.url}
          target="_blank"
          itemprop="url">
          <span itemprop="streetAddress">{@html address.streetAddress}</span>
        </a>
      </div>
      <meta
        itemprop="postalCode"
        content={address.postalCode} />
      <meta
        itemprop="addressRegion"
        content={address.addressRegion} />
      <meta
        itemprop="addressLocality"
        content={address.addressLocality} />
    </div>
  </div>

  <LightboxKit
    class="
      wrapper
      sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8"
    {images}
    {thumbnails}
    {labels}
    grid
    centered
    rounded
    shadow
    scale
    grayscale />
</main>
