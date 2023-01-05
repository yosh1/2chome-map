import { Category } from "./Category";

export type Bar = {
  id?: string;
  name: string;
  kana?: string;
  english?: string;
  postalCode?: string;
  address?: string;
  building?: string;
  tel?: string;
  open?: string; // 検討
  close?: string; // 検討
  holiday?: string; // 検討
  logo?: string;
  image?: string;
  categories?: string[]; // categoryIds
  languages?: string[];
  twitter?: string;
  instagram?: string;
  url?: string;
};