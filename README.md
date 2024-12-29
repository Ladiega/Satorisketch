This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.




## Satori dependences

- [Lucide Icons] (https://lucide.dev/guide/packages/lucide-react)
icon library
pnpm
pnpm install lucide-react
# or
npm
npm install lucide-react


## Vercel deploy
 https://satorisketch.vercel.app/ 
 update# Satorisketch
 Test


## Custam Hook explained by chatGpt
Espanol

Explicación detallada
	1.	Hook personalizado: useInView
	•	Usa useRef para observar el elemento DOM de cada card.
	•	Usa IntersectionObserver para detectar si el elemento está visible en el viewport.
	•	Actualiza el estado isVisible cuando el elemento entra al viewport.
	2.	Clases de animación de Tailwind
	•	opacity-0: La card está oculta inicialmente.
	•	translate-y-10: Desplaza la card hacia abajo fuera de su posición.
	•	opacity-100 translate-y-0: Hace visible la card y la devuelve a su posición original.
	•	transition-all duration-700 ease-out: Suaviza la transición y establece una duración de 700ms.
	3.	Aplicación del Hook
	•	Cada card tiene su propio hook para observar cuándo entra en el viewport.
	•	Se aplica el hook en cada div usando ref y se vincula el estado isVisible.
	4.	Estructura reutilizable
	•	Las cards usan el mismo patrón y lógica, lo que permite una estructura clara y fácil de mantener.