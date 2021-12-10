import { useMemo } from 'react';
import { useWeb3React } from '@web3-react/core';
import GndxBadgeArtifacts from '@config/artifacts';

const { address, abi } = GndxBadgeArtifacts;

const useGndxBadge = () => {
  const { active, library, chainId } = useWeb3React();

  const GndxBadge = useMemo(() => {
    if (active) return new library.eth.Contract(abi, address[chainId]);
  }, [active, chainId, library?.eth?.Contract]);

  return GndxBadge;
};

export default useGndxBadge;
