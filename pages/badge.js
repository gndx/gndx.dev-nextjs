import { useState, useEffect, useCallback } from 'react'
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core'
import { connector } from '@config/web3/'
import useGndxBadge from '@hooks/useGndxBadge'
import { ellipseAddress } from '@utils/ellipseAddress'
import { XCircleIcon } from '@heroicons/react/solid'
import axios from 'axios';
import Cookies from 'js-cookie'

export const Home = () => {
  const [maxSupply, setMaxSupply] = useState(0)
  const [totalSupply, setTotalSupply] = useState(0)
  const [isMinting, setIsMinting] = useState(false)

  const [alert, setAlert] = useState({
    active: false,
    title: '',
    description: '',
    status: '',
  });

  const mintAmount = 1

  const { active, activate, deactivate, account, error, chainId } = useWeb3React()
  const gndxBadge = useGndxBadge()
  const isPolygonNetwork = chainId === 137

  const isUnsupportedChain = error instanceof UnsupportedChainIdError

  const connect = useCallback(() => {
    activate(connector)
    localStorage.setItem('previouslyConnected', 'true')
  }, [activate])

  const disconnect = () => {
    deactivate()
    localStorage.removeItem('previouslyConnected')
  }

  const getMaxSupply = useCallback(async () => {
    if (gndxBadge) {
      const totalSupply = await gndxBadge.methods.totalSupply().call()
      setTotalSupply(totalSupply)
    }
  })

  const getTotalSupply = useCallback(async () => {
    if (gndxBadge) {
      const maxSupply = await gndxBadge.methods.maxSupply().call()
      setMaxSupply(maxSupply)
    }
  })

  const mint = () => {
    setIsMinting(true)
    if (gndxBadge) {
      gndxBadge.methods
        .mint(mintAmount)
        .send({
          from: account,
        })
        .on('transactionHash', (txHash) => {
          Cookies.set('requestToken', txHash, { expires: 7 });
          setAlert({
            active: true,
            title: 'transactionHash',
            description: txHash,
            status: 'info',
          })
        })
        .on('receipt', () => {
          setIsMinting(false)
          setAlert({
            active: true,
            title: 'Confirmed',
            description: 'NFT minted',
            status: 'success',
          })
        })
        .on('error', (error) => {
          setIsMinting(false)
          setAlert({
            active: true,
            title: 'Error',
            description: error.message,
            status: 'error',
          })
        })
    }
  }

  const handleRequest = (event) => {
    event.preventDefault();
    const isRequest = Cookies.get('requestToken');

    if (isRequest) {
      setAlert({
        active: true,
        title: 'Error',
        description: 'You have already requested a badge',
        status: 'error',
      });
    } else {
      if (account) {
        const data = {
          'wallet': account,
          'timestamp': new Date().getTime(),
          'date': new Date().toLocaleString(),
          'network': isPolygonNetwork ? 'Polygon' : 'Ethereum',
        }
        axios.post('/api/request', data)
          .then(response => {
            if (response.data.success) {
              localStorage.setItem('request', true);
              Cookies.set('requestToken', new Date().getTime(), { expires: 7 });
              setAlert({
                active: true,
                title: 'Success',
                description: 'Solicitud enviada',
                status: 'success',
              });
            } else {
              setAlert({
                active: true,
                title: 'Error',
                description: error.message,
                status: 'error',
              });
            }
          }).catch(error => {
            setAlert({
              active: true,
              title: 'Error',
              description: error.message,
              status: 'error',
            });
          });
      } else {
        setAlert(true);
      }
    }
  }

  useEffect(() => {
    if (isPolygonNetwork) {
      getMaxSupply()
      getTotalSupply()
    }
  }, [getMaxSupply, getTotalSupply])

  useEffect(() => {
    if (localStorage.getItem('previouslyConnected') === 'true') connect()
  }, [connect])

  return (
    <>
      <div className="relative bg-white overflow-hidden">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r to-red-600 from-blue-500">
                  Desbloquea tu NFT Sorpresa
                </span>
              </h1>
              <p className="mt-4 mb-4 text-xl text-gray-500 ">
                Recibe uno de los 300 NFTs (non-fungible token) disponibles en agradecimiento por
                participar en mi mas reciente platica sobre Web3.
              </p>
              {active && (
                <span className="sm:inline text-xs font-semibold p-2 bg-green-200 text-teal-700 rounded-md mr-4">
                  {ellipseAddress(account)} -{' '}
                  <XCircleIcon
                    className="inline h-5 w-5 text-indigo-500 cursor-pointer"
                    onClick={disconnect}
                  />
                </span>
              )}
            </div>
            <div>
              <div className="mt-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                >
                  <div className="absolute hidden md:hidden lg:hidden xl:block transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://arepa.s3.amazonaws.com/gndx_bg_02.png"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://arepa.s3.amazonaws.com/gndx_bg_02.png"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://arepa.s3.amazonaws.com/gndx_bg_02.png"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://arepa.s3.amazonaws.com/gndx_bg_01.png"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://arepa.s3.amazonaws.com/gndx_bg_02.png"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://arepa.s3.amazonaws.com/gndx_bg_02.png"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://arepa.s3.amazonaws.com/gndx_bg_02.png"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {alert.active && (
                  <div x-data className="inline-block w-6/12 bg-indigo-100 p-5 rounded mb-8">
                    <div className="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
                      <div className="flex space-x-3">
                        <div className="flex-1 leading-tight text-sm text-black font-medium">
                          {alert.description}
                        </div>
                        <button type="button" onClick={() => setAlert({ active: false })}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="flex-none fill-current text-indigo-600 h-3 w-3"
                          >
                            <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {active ? (
                  <>
                    {isPolygonNetwork && (<span className="flex text-sm block mb-1">📦 Network: Polygon Mainnet </span>)}
                  </>
                ) : (
                  <>
                    <a
                      href="#"
                      className="inline-block items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                      onClick={connect}
                    >
                      {isUnsupportedChain ? 'Red no Soportada' : 'Conectar wallet'}
                    </a>
                  </>
                )}
                {active && (
                  <div className="block">
                    {!isUnsupportedChain && (
                      <div className="flex">
                        {isPolygonNetwork && (
                          <div className="mr-4">
                            <a
                              href="#"
                              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                              onClick={mint}
                            >
                              Obtener NFT
                            </a>
                            <span className="flex pb-6 text-sm mt-1">
                              ⚡ Instantaneo: (Se pagan tarifas).
                            </span>
                          </div>
                        )}
                        <div>
                          <a
                            href="#"
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                            onClick={handleRequest}
                          >
                            Solicitar NFT
                          </a>
                          <span className="flex pb-6 text-sm mt-1">
                            ⌛ Solicitar [12hrs]: (Gratis).
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              GndxBadge
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              In gratitude for participating in the talk about web3.
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              This badge is a digital collectible item created as a blockchain powered NFT
              (non-fungible token).
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
