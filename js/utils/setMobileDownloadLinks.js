//@ts-check
import { getMobileOS } from "./getMobileOS";

export function setMobileDownloadLinks() {
  console.log("running");
  let os = getMobileOS();
  if (os === "iOs") return;

  // Get all links and set android playstore link
  let links = document.querySelectorAll("[data-android]");
  links.forEach((link) => {
    //@ts-ignore
    if (link.dataset.android) {
      //@ts-ignore
      link.href = link.dataset.android;
    }
  });
}
