import type { Service } from "./types";

export const WHATSAPP_URI = "https://wa.me/34635067158?text=";

export const SERVICES: Service[] = [
  {
    id: "sesion1:1",
    name: "Sesión 1:1",
    link: WHATSAPP_URI + "Hola! Me gustaría reservar cita para sesión 1:1",
  },
  {
    id: "aperturaregistrosakashicos",
    name: "Apertura de Registros Akáshicos",
    link:
      WHATSAPP_URI +
      "Hola! Me gustaría reservar cita para Apertura de Registros Akáshicos",
  },
  {
    id: "tapping",
    name: "Tapping",
    link:
      WHATSAPP_URI + "Hola! Me gustaría reservar cita para audio de Tapping",
  },
  {
    id: "full",
    name: "Tapping + Escritura Terapéutica + Sesión 1:1",
    link:
      WHATSAPP_URI +
      "Hola! Me gustaría reservar cita para Tapping + Escritura Terapéutica + Sesión 1:1",
  },
];
