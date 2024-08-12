import type { Service } from "./types";

export const WHATSAPP_URI = "https://wa.me/34635067158?text=";

export const SERVICES: Service[] = [
  {
    id: "sesion1:1",
    name: "Sesión 1:1",
    link: WHATSAPP_URI + "Hola! Me gustaría reservar cita para sesión 1:1",
  },
  {
    id: "registrosakashicos",
    name: "Registros Akáshicos",
    link:
      WHATSAPP_URI + "Hola! Me gustaría reservar cita para Registros Akáshicos",
  },
  {
    id: "pnlycoaching",
    name: "PNL y Coaching",
    link: WHATSAPP_URI + "Hola! Me gustaría reservar cita para PNL y Coaching",
  },
  {
    id: "tapping",
    name: "Tapping",
    link: WHATSAPP_URI + "Hola! Me gustaría reservar cita para Tapping",
  },
  {
    id: "escrituraterapeutica",
    name: "Escritura Terapéutica",
    link:
      WHATSAPP_URI +
      "Hola! Me gustaría reservar cita para Escritura Terapéutica",
  },
  {
    id: "meditacion/mindfulness",
    name: "Meditación / Mindfulness",
    link:
      WHATSAPP_URI +
      "Hola! Me gustaría reservar cita para Meditación/Mindfulness",
  },
];
