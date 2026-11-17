import type { ProductFeatureGroup } from './product-types';

export const BO7_CHEAT_FEATURE_GROUPS: ProductFeatureGroup[] = [
  {
    "name": "Aiming and Weapon Control",
    "items": [
      {
        "name": "Aimbot",
        "desc": "Helps the crosshair track a target."
      },
      {
        "name": "Triggerbot",
        "desc": "Triggers a shot when a target crosses the reticle."
      },
      {
        "name": "No recoil control for perfect shots",
        "desc": "Reduces crosshair movement caused by recoil."
      }
    ]
  },
  {
    "name": "Visibility and Awareness",
    "items": [
      {
        "name": "ESP",
        "desc": "Adds markers to the main view."
      },
      {
        "name": "Wallhack",
        "desc": "Displays target indicators through obstacles."
      },
      {
        "name": "Radar",
        "desc": "Shows nearby targets in a radar overlay."
      }
    ]
  },
  {
    "name": "Movement and Capture",
    "items": [
      {
        "name": "Speed",
        "desc": "Adjusts movement speed."
      },
      {
        "name": "Stream-proof",
        "desc": "Controls overlay visibility in supported captures. Check the provider for supported recording modes."
      }
    ]
  }
];
