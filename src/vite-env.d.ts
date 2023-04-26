/// <reference types="svelte" />
/// <reference types="vite/client" />

type TMenu = {
  name: string,
  link: string,
  component: string,
  icon: string,
  child: any[{ name: string, component: string, link: string }]
}

type TDataPageHeader = {
  head: [{ title: string; descripstion: string }];
  breadcrumbs: [{ b1: string; b2: string; b3: string }];
};

type TGroup = "1" | "2" | "3";

type TField = {
  name: string,
  type?: string,
  kind: string,
  label: string,
  value: string,
  items?: any[],
  option?: {}
}

type TElement = {
  column: TGroup,
  child: TField[]
}
