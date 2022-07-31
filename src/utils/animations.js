import diplomAnimation from "./animations/diplomAnimation";
import zooAnimation from "./animations/zooAnimation";
import galleryAnimation from "./animations/galleryAnimation";
import mmgAnimation from "./animations/mmgAnimation";
import galleryNgAnimation from "./animations/galleryNgAnimation";
import twentyFortyEightAnimation from "./animations/twentyFortyEightAnimation";
import asyncRaceAnimation from "./animations/asyncRaceAnimation";
import mrsAnimation from "./animations/mrsAnimation";
import jsClockAnimation from "./animations/jsClockAnimation";
import wackAMoleAnimation from "./animations/wackAMoleAnimation";
import shpargalikiAnimation from "./animations/shpargalikiAnimation";
import contactListAnimation from "./animations/contactListAnimation";
import pseudoSocialNetworkAnimation from "./animations/pseudoSocialNetwork";
import countersAnimation from "./animations/counters";

let timersArray = [];

export function animationCreator(name, array, element) {
  if (name === "diplom") {
    timersArray = diplomAnimation(array, element);
  }

  if (name === "zoo") {
    return zooAnimation(array, element);
  }

  if (name === "mmg") {
    return mmgAnimation(array, element);
  }

  if (name === "gallery") {
    return galleryAnimation(array, element);
  }

  if (name === "galleryNg") {
    return galleryNgAnimation(array, element);
  }

  if (name === "2048") {
    return twentyFortyEightAnimation(array, element);
  }

  if (name === "asyncRace") {
    timersArray = asyncRaceAnimation(array, element);
  }

  if (name === "multiRockSlider") {
    timersArray = mrsAnimation(array, element);
  }

  if (name === "jsClock") {
    timersArray = jsClockAnimation(array, element);
  }

  if (name === "wackAMole") {
    timersArray = wackAMoleAnimation(array, element);
  }

  if (name === "shpargaliki") {
    timersArray = shpargalikiAnimation(array, element);
  }

  if (name === "contactList") {
    timersArray = contactListAnimation(array, element);
  }

  if (name === "pseudoSocialNetwork") {
    timersArray = pseudoSocialNetworkAnimation(array, element);
  }

  if (name === "counters") {
    timersArray = countersAnimation(array, element);
  }
}

export function animationCancel(image, element) {
  timersArray.forEach((timer) => {
    clearTimeout(timer);
  });
  element.setAttribute("style", `background-image: url(${image}`);
  timersArray = [];
}
