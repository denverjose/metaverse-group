import { services } from "./services-constants";

const BOT_NAME = "TPX";

const servicesListHtml = services
  .map(
    (service) =>
      `<li style="margin-left: 20px;" class="list-disc">${service.title}</li>`,
  )
  .join("");

export const initialMessage = `
    Hi, I'm TPX's Assistant! I'm here to answer your
    <ul>${servicesListHtml}</ul>
    or any other related services questions. How can I help you today?
`;

export const botName = `${BOT_NAME} Assistant`;
