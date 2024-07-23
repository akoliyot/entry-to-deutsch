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

export const useAlphabetAudio = (onAudioEnd: () => void) => {
  const [stopTarget, setStopTarget] = useState<ExposedData | null>(null);

  const useSoundOptions = {
    onend: onAudioEnd,
  };

  const [playA, optionsA] = useSound(audioA, useSoundOptions);
  const [playB, optionsB] = useSound(audioB, useSoundOptions);
  const [playC, optionsC] = useSound(audioC, useSoundOptions);
  const [playD, optionsD] = useSound(audioD, useSoundOptions);
  const [playE, optionsE] = useSound(audioE, useSoundOptions);
  const [playF, optionsF] = useSound(audioF, useSoundOptions);
  const [playG, optionsG] = useSound(audioG, useSoundOptions);
  const [playH, optionsH] = useSound(audioH, useSoundOptions);
  const [playI, optionsI] = useSound(audioI, useSoundOptions);
  const [playJ, optionsJ] = useSound(audioJ, useSoundOptions);
  const [playK, optionsK] = useSound(audioK, useSoundOptions);
  const [playL, optionsL] = useSound(audioL, useSoundOptions);
  const [playM, optionsM] = useSound(audioM, useSoundOptions);
  const [playN, optionsN] = useSound(audioN, useSoundOptions);
  const [playO, optionsO] = useSound(audioO, useSoundOptions);
  const [playP, optionsP] = useSound(audioP, useSoundOptions);
  const [playQ, optionsQ] = useSound(audioQ, useSoundOptions);
  const [playR, optionsR] = useSound(audioR, useSoundOptions);
  const [playS, optionsS] = useSound(audioS, useSoundOptions);
  const [playT, optionsT] = useSound(audioT, useSoundOptions);
  const [playU, optionsU] = useSound(audioU, useSoundOptions);
  const [playV, optionsV] = useSound(audioV, useSoundOptions);
  const [playW, optionsW] = useSound(audioW, useSoundOptions);
  const [playX, optionsX] = useSound(audioX, useSoundOptions);
  const [playY, optionsY] = useSound(audioY, useSoundOptions);
  const [playZ, optionsZ] = useSound(audioZ, useSoundOptions);

  const [playAE, optionsAE] = useSound(audioAE, useSoundOptions);
  const [playOE, optionsOE] = useSound(audioOE, useSoundOptions);
  const [playUE, optionsUE] = useSound(audioUE, useSoundOptions);
  const [playEsszett, optionsEsszett] = useSound(audioEsszett, useSoundOptions);

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
