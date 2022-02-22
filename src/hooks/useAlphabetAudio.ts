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
import audioAe from '../assets/ae.wav';
import audioOe from '../assets/oe.wav';
import audioUe from '../assets/ue.wav';
import audioEsszett from '../assets/esszett.wav';



export const useAlphabetAudio = () => {
    // Assign the play() function to each alphabet.
    const alphabets = new Map([
        ['a', useSound(audioA)[0]], 
        ['b', useSound(audioB)[0]],
        ['c', useSound(audioC)[0]],
        ['d', useSound(audioD)[0]],
        ['e', useSound(audioE)[0]],
        ['f', useSound(audioF)[0]],
        ['g', useSound(audioG)[0]],
        ['h', useSound(audioH)[0]],
        ['i', useSound(audioI)[0]],
        ['j', useSound(audioJ)[0]],
        ['k', useSound(audioK)[0]],
        ['l', useSound(audioL)[0]],
        ['m', useSound(audioM)[0]],
        ['n', useSound(audioN)[0]],
        ['o', useSound(audioO)[0]],
        ['p', useSound(audioP)[0]],
        ['q', useSound(audioQ)[0]],
        ['r', useSound(audioR)[0]],
        ['s', useSound(audioS)[0]],
        ['t', useSound(audioT)[0]],
        ['u', useSound(audioU)[0]],
        ['v', useSound(audioV)[0]],
        ['w', useSound(audioW)[0]],
        ['x', useSound(audioX)[0]],
        ['y', useSound(audioY)[0]],
        ['z', useSound(audioZ)[0]],
        ['ä', useSound(audioAe)[0]],
        ['ö', useSound(audioOe)[0]],
        ['ü', useSound(audioUe)[0]],
        ['ß', useSound(audioEsszett)[0]],
    ]);
    
    const playAudio = (char: string) => {
        console.log('playing audio for ', char)

        if (alphabets.has(char)) {
            alphabets.get(char)?.();
        }
    }
    return playAudio;
}