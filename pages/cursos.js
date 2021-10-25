import siteMetadata from '@/data/siteMetadata'
import coursesData from '@/data/coursesData'
import { PageSEO } from '@/components/SEO'

export default function Cursos() {
  return (
    <>
      <PageSEO
        title={`¿Quieres aprender JavaScript?`}
        description="Aprender JavaScript con Oscar Barajas, Todos mis cursos acerca de JavaScript, Webpack, React, Svelte entre otros."
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            ¿Quieres aprender JavaScript?
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Soy un apasionado por la educación, enseñar siempre ha sido un gusto para mí, te dejo la
            lista de los cursos que tengo actualmente en Platzi. Si, Quieres ver todos mis curso
            visita mi perfil en{' '}
            <a href="https://platzi.com/teachers/gndx/" target="_blank" rel="referrer noreferrer">
              Platzi
            </a>
            .
          </p>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            💻 21 Cursos &nbsp;&nbsp;&nbsp; 💖 35,298 Opiniones &nbsp;&nbsp;&nbsp; 😀 16,913
            Estudiantes
          </p>
        </div>
        <div className="container py-12">
          <div className="grid grid-cols-3 gap-4">
            {coursesData?.map((course) => (
              <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow shadow-lg p-3 w-full">
                <img src={course.badge} width="78" className="mr-4 rounded" />
                <div className="text-gray-700">
                  <h2 className="text-gray-800 font-bold text-2md">
                    <a href={course.url} target="_blank" rel="referrer noreferrer">
                      {course.title}
                    </a>
                  </h2>
                  <p className="text-sm">{course.reviews} Opiniones</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
