import useSound from 'use-sound';
import audioA from '../assets/a.wav';
import audioB from '../assets/b.wav';
import audioC from '../assets/c.wav';
import audioD from '../assets/d.wav';
import audioE from '../assets/e.wav';
import audioF from '../assets/f.wav';
import audioG from '../assets/g.wav';
import audioH from '../assets/h.wav';
import audioI from '../assets/i.wav';
import audioJ from '../assets/j.wav';
import audioK from '../assets/k.wav';
import audioL from '../assets/l.wav';
import audioM from '../assets/m.wav';
import audioN from '../assets/n.wav';
import audioO from '../assets/o.wav';
import audioP from '../assets/p.wav';
import audioQ from '../assets/q.wav';
import audioR from '../assets/r.wav';
import audioS from '../assets/s.wav';
import audioT from '../assets/t.wav';
import audioU from '../assets/u.wav';
import audioV from '../assets/v.wav';
import audioW from '../assets/w.wav';
import audioX from '../assets/x.wav';
import audioY from '../assets/y.wav';
import audioZ from '../assets/z.wav';
import audioAE from '../assets/ae.wav';
import audioOE from '../assets/oe.wav';
import audioUE from '../assets/ue.wav';
import audioEsszett from '../assets/esszett.wav';
import { useState } from 'react';
import { ExposedData, PlayFunction } from 'use-sound/dist/types';

export const useAlphabetAudio = () => {
  const [stopTarget, setStopTarget] = useState<ExposedData | null>(null);

  const [playA, optionsA] = useSound(audioA);
  const [playB, optionsB] = useSound(audioB);
  const [playC, optionsC] = useSound(audioC);
  const [playD, optionsD] = useSound(audioD);
  const [playE, optionsE] = useSound(audioE);
  const [playF, optionsF] = useSound(audioF);
  const [playG, optionsG] = useSound(audioG);
  const [playH, optionsH] = useSound(audioH);
  const [playI, optionsI] = useSound(audioI);
  const [playJ, optionsJ] = useSound(audioJ);
  const [playK, optionsK] = useSound(audioK);
  const [playL, optionsL] = useSound(audioL);
  const [playM, optionsM] = useSound(audioM);
  const [playN, optionsN] = useSound(audioN);
  const [playO, optionsO] = useSound(audioO);
  const [playP, optionsP] = useSound(audioP);
  const [playQ, optionsQ] = useSound(audioQ);
  const [playR, optionsR] = useSound(audioR);
  const [playS, optionsS] = useSound(audioS);
  const [playT, optionsT] = useSound(audioT);
  const [playU, optionsU] = useSound(audioU);
  const [playV, optionsV] = useSound(audioV);
  const [playW, optionsW] = useSound(audioW);
  const [playX, optionsX] = useSound(audioX);
  const [playY, optionsY] = useSound(audioY);
  const [playZ, optionsZ] = useSound(audioZ);

  const [playAE, optionsAE] = useSound(audioAE);
  const [playOE, optionsOE] = useSound(audioOE);
  const [playUE, optionsUE] = useSound(audioUE);
  const [playEsszett, optionsEsszett] = useSound(audioEsszett);

  // Assign the play() function to each alphabet.
  const alphabets = new Map([
    ['a', [playA, optionsA]],
    ['b', [playB, optionsB]],
    ['c', [playC, optionsC]],
    ['d', [playD, optionsD]],
    ['e', [playE, optionsE]],
    ['f', [playF, optionsF]],
    ['g', [playG, optionsG]],
    ['h', [playH, optionsH]],
    ['i', [playI, optionsI]],
    ['j', [playJ, optionsJ]],
    ['k', [playK, optionsK]],
    ['l', [playL, optionsL]],
    ['m', [playM, optionsM]],
    ['n', [playN, optionsN]],
    ['o', [playO, optionsO]],
    ['p', [playP, optionsP]],
    ['q', [playQ, optionsQ]],
    ['r', [playR, optionsR]],
    ['s', [playS, optionsS]],
    ['t', [playT, optionsT]],
    ['u', [playU, optionsU]],
    ['v', [playV, optionsV]],
    ['w', [playW, optionsW]],
    ['x', [playX, optionsX]],
    ['y', [playY, optionsY]],
    ['z', [playZ, optionsZ]],
    ['ä', [playAE, optionsAE]],
    ['ö', [playOE, optionsOE]],
    ['ü', [playUE, optionsUE]],
    ['ß', [playEsszett, optionsEsszett]],
  ]);

  const playAudio = (char: string) => {
    if (stopTarget) {
      stopTarget.stop();
    }

    if (alphabets.has(char)) {
      let soundFunctions = alphabets.get(char);

      if (Array.isArray(soundFunctions)) {
        const play = soundFunctions[0] as PlayFunction;
        const options = soundFunctions[1] as ExposedData;
        play();
        setStopTarget(options);
      }
    }
  };

  return playAudio;
};
