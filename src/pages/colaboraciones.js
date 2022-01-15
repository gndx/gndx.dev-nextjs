import siteMetadata from '@data/siteMetadata';
import coursesData from '@data/coursesData';
import { PageSEO } from 'src/components/SEO';

export default function Collaborations() {
  return (
    <>
      <PageSEO
        title={`¿Quieres aprender JavaScript?`}
        description="Aprender JavaScript con Oscar Barajas, Todos mis cursos acerca de JavaScript, Webpack, React, Svelte entre otros."
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Colaboremos Juntos
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
          <div className="w-full">
            <form className="w-full max-w-lg mx-auto my-5" action="https://www.actionforms.io/e/r/gndx-form" method="any">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Nombre
                  </label>
                  <input name="firstName" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Jane" />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                    Apellido
                  </label>
                  <input name="lastName" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    Twitter | GitHub | Instagram | LinkedIn | Youtube
                  </label>
                  <input name="social" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="@" />
                  <p className="text-gray-600 text-xs italic">Comparte conmigo la red social que más utilizas</p>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    ¿Cómo colaboramos?
                  </label>
                  <textarea name="textArea" rows="5" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="..." />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                    Ciudad
                  </label>
                  <input name="city" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Sopó" />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                    Pais
                  </label>
                  <input name="country" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Colombia" />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                    Tipo
                  </label>
                  <div className="relative">
                    <select name="type" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                      <option>Meetup</option>
                      <option>Workshop</option>
                      <option>Mentor</option>
                      <option>Colaboración</option>
                      <option>Patrocinio</option>
                      <option>Otro</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>
                </div>

              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <br />
                <div className="w-full px-3">
                  <button className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Colaboremos Juntos 🖖
                  </button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  );
};
