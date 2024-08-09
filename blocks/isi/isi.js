import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the isi
 * @param {Element} block The isi block element
 */
export default async function decorate(block) {
  // load isi as fragment
  const isiMeta = getMetadata('isi');
  const isiPath = isiMeta ? new URL(isiMeta, window.location).pathname : '/isi';
  const fragment = await loadFragment(isiPath);

  // decorate isi DOM
  block.textContent = '';
  const isi = document.createElement('div');
  while (fragment.firstElementChild) isi.append(fragment.firstElementChild);

  block.append(isi);

  // load safety as fragment
  const safetyPath = '/safety';
  const safetyFragment = await loadFragment(safetyPath);

  // decorate isi DOM
  const safety = document.createElement('div');
  safety.classList.add('safety-bar');
  while (safetyFragment.firstElementChild) safety.append(safetyFragment.firstElementChild);

  block.append(safety);

  const scrollIsi = document.querySelector(".isi");
  document.addEventListener("scroll", (event) => {
    if(window.scrollY > scrollIsi.offsetTop - window.innerHeight) {
      document.querySelector('.safety-bar').classList.add('safety-bar-hidden');
    }else {
      document.querySelector('.safety-bar').classList.remove('safety-bar-hidden');
    }
  });
  
}
