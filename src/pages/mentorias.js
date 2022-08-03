import siteMetadata from '@data/siteMetadata'
import coursesData from '@data/coursesData'
import { PageSEO } from 'src/components/SEO'

export default function Mentoring() {
  return (
    <>
      <PageSEO
        title={`¿Quieres aprender JavaScript?`}
        description="Aprender JavaScript con Oscar Barajas, Todos mis cursos acerca de JavaScript, Webpack, React, Svelte entre otros."
      />
      <div className="divide-y divide-gray-200">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            ¿Quieres aprender JavaScript, React, NextJS?
          </h1>
          <p className="text-lg leading-7 text-gray-500">
            Soy un apasionado por la educación, enseñar siempre ha sido un gusto para mí, te dejo la
            lista de los cursos que tengo actualmente en Platzi. Si, Quieres ver todos mis curso
            visita mi perfil en{' '}
            <a href="https://platzi.com/teachers/gndx/" target="_blank" rel="referrer noreferrer">
              Platzi
            </a>
            .
          </p>
          <p className="text-lg leading-7 text-gray-500">
            💻 21 Cursos &nbsp;&nbsp;&nbsp; 💖 35,298 Opiniones &nbsp;&nbsp;&nbsp; 😀 16,913
            Estudiantes
          </p>
        </div>
      </div>
    </>
  )
}
