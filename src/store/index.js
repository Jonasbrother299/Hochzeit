import { proxy } from "valtio";

const state = proxy({
  intro: true,
  clicked: null,
  urls: [1, 2, 3, 4, 1, 2, 3, 2, 3].map((u) => `/${u}.webp`),
  urlsMain: [
    "project1_1",
    "project2_1",
    "project3_1",
    "project4_1",
    "project5_1",
    "project6_1",
  ].map((u) => `/${u}.jpg`),
});

export default state;
