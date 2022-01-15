import siteMetadata from '@data/siteMetadata'
import coursesData from '@data/coursesData'
import { PageSEO } from 'src/components/SEO'

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
        <div className="container">
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coursesData?.map((course) => (
                <div className="w-full bg-gray rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center" key={`courses-${course.reviews}`}>
                  <div>
                    <img className="object-center object-fill h-32 w-full" src={course.badge} alt="photo" />
                  </div>
                  <div className="text-center py-8 sm:py-6">
                    <a href={course.url} target="_blank" rel="referrer noreferrer">
                      <p className="text-xl text-gray-700 font-bold mb-2">{course.title}</p>
                      <p className="text-base text-gray-400 font-normal">{course.reviews} Opiniones</p>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
