import type { Service } from "./types";

export const WHATSAPP_URI = "https://wa.me/34635067158?text=";

export const SERVICES: Service[] = [
  {
    id: "sesion1:1",
    name: "Aplica aquí a una Sesión de Diagnóstico",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfIzZPi0hwfAJoQTH7fTg_kzJgo8z5Ed-UVFmH8VA11twBziQ/viewform",
  },
  {
    id: "aperturaregistrosakashicos",
    name: `Aplica aquí a mi Acompañamiento Individual "Relaciones Libres y Conscientes"`,
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdffeBFNMqH0QUa6PQWaUplzCOgIxibFeWN07cfbSbIN_yTrw/viewform",
  },
  {
    id: "tapping",
    name: "No sabes cuál es la mejor opción para tu momento? Contáctame al Whatsapp",
    link:
      WHATSAPP_URI +
      "Hola, Aldana! Me gustaría tener más información sobre tus sesiones de psicoterapia. Gracias!",
  },
];
