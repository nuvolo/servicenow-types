import { Mod } from "./common";
const addons: Mod.AddOns = {
  dependencies: [
    {
      name: "GlideSystem",
      path: "./GlideSystem"
    }
  ],
  variables: [
    {
      name: "gs",
      type: "GlideSystem"
    }
  ]
};

export default addons;
