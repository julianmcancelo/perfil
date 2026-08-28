/* ============================================================
   Contenido del perfil
   Editá únicamente este archivo para actualizar el sitio.

   Datos tomados del perfil público de GitHub (@julianmcancelo)
   el 28/08/2026. Los valores marcados con "// completar" quedan
   pendientes de información que no figura en GitHub (años,
   instituciones, enlaces de verificación).
   ============================================================ */

export interface EnlaceSocial {
  etiqueta: string;
  href: string;
}

export interface Proyecto {
  nombre: string;
  sigla?: string;
  descripcion: string;
  etiquetas?: string[];
  href?: string;
  destacado?: string;
}

export interface Experiencia {
  anio: string;
  rol: string;
  organizacion: string;
  detalle?: string;
}

export interface GrupoTecnologias {
  titulo: string;
  items: string[];
}

export interface Certificacion {
  nombre: string;
  emisor: string;
  estado?: string;
  href?: string;
}

export interface Perfil {
  nombre: string;
  nombreCorto?: string;
  titular: string;
  presentacion: string[];
  ubicacion?: string;
  email: string;
  sociales: EnlaceSocial[];
  proyectos: Proyecto[];
  experiencia: Experiencia[];
  tecnologias: GrupoTecnologias[];
  certificaciones: Certificacion[];
  lema?: string;
}

export const perfil: Perfil = {
  nombre: "Julián Manuel Cancelo",
  nombreCorto: "Julián Cancelo",
  titular: "Desarrollador back-end · Analista funcional · Ciberdefensa",
  presentacion: [
    "Desarrollador con orientación al back-end, radicado en Lanús, provincia de Buenos Aires. Trabajo principalmente con TypeScript y Node.js, construyo interfaces con Next.js y React, y desarrollo aplicaciones móviles con Flutter y React Native.",
    "He llevado sistemas propios a producción, entre ellos plataformas de gestión académica, de comercios y de eventos institucionales.",
    "Actualmente curso la carrera de Analista Funcional y complemento mi formación con estudios en ciberdefensa, orientados al análisis de redes y a la seguridad ofensiva y defensiva.",
    "Me interesa convertir ideas en productos reales y en uso, con especial atención a la calidad del código y a la seguridad.",
  ],
  ubicacion: "Lanús, Buenos Aires, Argentina",
  email: "jcancelo.dev@gmail.com",
  sociales: [
    { etiqueta: "GitHub", href: "https://github.com/julianmcancelo" },
    { etiqueta: "LinkedIn", href: "https://www.linkedin.com/in/juliancancelo" },
  ],
  proyectos: [
    {
      nombre: "SiGIC",
      sigla: "Si",
      destacado: "En producción",
      descripcion:
        "Sistema de Gestión Integral de Colación y Ceremonias. Cubre el ciclo completo de un acto de colación: padrón de graduados, autogestión de invitados, editor visual de anfiteatro con asignación de butacas en tiempo real, acreditación por QR y matriz de autorizaciones de portería. Proyecto final del Instituto Tecnológico Beltrán.",
      etiquetas: ["Next.js", "PostgreSQL", "Flutter", "Vercel"],
      href: "https://sigic-one.vercel.app",
    },
    {
      nombre: "Kipi",
      sigla: "Ki",
      destacado: "Web 3D en tiempo real",
      descripcion:
        "Aplicación web de modelado 3D paramétrico en tiempo real para fabricación aditiva FDM. Genera llaveros y tarjetas con cavidades calibradas para etiquetas NFC, vectoriza logotipos a partir de imágenes y asigna filamentos para sistemas multicolor como Bambu Lab AMS.",
      etiquetas: ["Next.js", "Three.js", "TypeScript", "Tailwind CSS"],
      href: undefined, // repositorio privado
    },
    {
      nombre: "Grana 3D",
      sigla: "G3",
      destacado: "App de gestión",
      descripcion:
        "Aplicación de gestión para un taller de impresión 3D: ventas, stock, catálogo de productos y eventos. El control de acceso por roles se resuelve íntegramente en las reglas de seguridad de Firestore, sin servidor propio.",
      etiquetas: ["React Native", "Expo", "TypeScript", "Firebase"],
      href: undefined, // repositorio privado
    },
    {
      nombre: "Bitácora Docente",
      sigla: "BD",
      destacado: "App educativa",
      descripcion:
        "Aplicación móvil de gestión académica para docentes: instituciones, cursos, estudiantes, asistencias, actividades y calificaciones desde un único lugar. Incluye baja lógica y traslado de estudiantes entre cursos con historial auditable. En desarrollo.",
      etiquetas: ["Flutter", "Dart", "Firebase", "Riverpod"],
      href: undefined, // repositorio privado
    },
    {
      nombre: "Aura Fitness",
      sigla: "AF",
      destacado: "En desarrollo",
      descripcion:
        "Aplicación de entrenamiento con rutinas, seguimiento de progreso y registro de ayunos, integrada con Health Connect.",
      etiquetas: ["Flutter", "Dart", "Health Connect"],
      href: undefined, // repositorio privado
    },
    {
      nombre: "@jcancelo/google-wallet",
      sigla: "GW",
      destacado: "Librería",
      descripcion:
        "Librería tipada, con API en español, para crear, firmar criptográficamente y emitir pases de Google Wallet (entradas, credenciales y tarjetas de fidelidad) desde Node.js, Next.js y React, sin gestionar manualmente la firma JWT RS256. Incluye componente de botón para React.",
      etiquetas: ["TypeScript", "Node.js", "React"],
      href: undefined, // repositorio privado
    },
  ],
  experiencia: [
    {
      anio: "2026",
      rol: "Práctica profesionalizante — Proyecto final",
      organizacion: "Instituto Tecnológico Beltrán",
      detalle:
        "Desarrollo y despliegue en producción de SiGIC, plataforma de gestión de ceremonias de colación.",
    },
    {
      anio: "Actualidad",
      rol: "Desarrollo de sistemas para el sector público",
      organizacion: "Municipio de Lanús", // confirmar denominación exacta, organismo y período
      detalle:
        "Sistemas de credenciales, habilitaciones comerciales e inspecciones municipales.",
    },
    {
      anio: "Actualidad",
      rol: "Estudiante de Analista Funcional",
      organizacion: "Institución educativa", // completar
      detalle:
        "Relevamiento de requerimientos, documentación técnica y análisis de sistemas.",
    },
    {
      anio: "Actualidad",
      rol: "Formación en Ciberdefensa",
      organizacion: "Institución educativa", // completar
      detalle:
        "Seguridad ofensiva y defensiva, análisis de redes y evaluación de vulnerabilidades.",
    },
  ],
  tecnologias: [
    {
      titulo: "Lenguajes",
      items: ["TypeScript", "JavaScript", "Dart", "Python", "PHP", "C#"],
    },
    {
      titulo: "Back-end y datos",
      items: [
        "Node.js",
        "Express",
        "PostgreSQL",
        "Firebase / Firestore",
        "MongoDB",
      ],
    },
    {
      titulo: "Front-end y móvil",
      items: [
        "React",
        "Next.js",
        "React Native",
        "Expo",
        "Flutter",
        "Riverpod",
        "Zustand",
        "Three.js",
        "Tailwind CSS",
      ],
    },
    {
      titulo: "Herramientas y despliegue",
      items: ["Git", "GitHub", "Docker", "Vercel", "Shorebird", "VS Code"],
    },
    {
      titulo: "Seguridad y análisis",
      items: ["Kali Linux", "Wireshark", "Burp Suite"],
    },
  ],
  certificaciones: [
    {
      nombre: "Analista Funcional",
      emisor: "Institución educativa", // completar
      estado: "En curso",
    },
    {
      nombre: "Ciberdefensa",
      emisor: "Institución educativa", // completar
      estado: "En curso",
    },
  ],
  lema: "El código es poesía; la seguridad, el candado.",
};
