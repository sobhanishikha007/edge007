import { loadFragment } from '../fragment/fragment.js';
import {
  buildBlock, decorateBlock, decorateIcons, loadBlock, loadCSS,
} from '../../scripts/aem.js';

// This is not a traditional block, so there is no decorate function. Instead, links to
// a */modals/* path  are automatically transformed into a modal. Other blocks can also use
// the createModal() and openModal() functions.

export async function createModal(contentNodes, fragmentUrl = null) {
  await loadCSS(`${window.hlx.codeBasePath}/blocks/modal/modal.css`);
  const dialog = document.createElement('dialog');
  const dialogContent = document.createElement('div');
  dialogContent.classList.add('modal-content');
  dialogContent.append(...contentNodes);
  dialog.append(dialogContent);

  const closeButton = document.createElement('button');
  closeButton.classList.add('close-button');
  closeButton.setAttribute('aria-label', 'Close');
  closeButton.type = 'button';
  closeButton.innerHTML = '<span class="icon icon-close"></span>';
  closeButton.addEventListener('click', () => dialog.close());
  dialog.append(closeButton);


  if(dialogContent.querySelector('a[href="#close"]') != null) {
    dialogContent.querySelector('a[href="#close"]').setAttribute('data-modal', true);
    dialogContent.querySelector('a[href="#close"]').addEventListener('click', () => dialog.close());
    dialogContent.querySelector('a[href="#close"]').href = 'javascript:void(0)';
  }

  if(fragmentUrl != null) {
    dialogContent.querySelector('a[href="#continue"]').setAttribute('data-modal', true);
    dialogContent.querySelector('a[href="#continue"]').setAttribute('target', '_blank');
    dialogContent.querySelector('a[href="#continue"]').addEventListener('click', () => dialog.close());
    dialogContent.querySelector('a[href="#continue"]').href = fragmentUrl;
  }

  // close dialog on clicks outside the dialog. https://stackoverflow.com/a/70593278/79461
  dialog.addEventListener('click', (event) => {
    const dialogDimensions = dialog.getBoundingClientRect();
    if (event.clientX < dialogDimensions.left || event.clientX > dialogDimensions.right
      || event.clientY < dialogDimensions.top || event.clientY > dialogDimensions.bottom) {
      dialog.close();
    }
  });

  const block = buildBlock('modal', '');
  document.querySelector('main').append(block);
  decorateBlock(block);
  await loadBlock(block);
  decorateIcons(closeButton);

  dialog.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    block.remove();
  });

  block.append(dialog);
  return {
    block,
    showModal: () => {
      dialog.showModal();
      // Google Chrome restores the scroll position when the dialog is reopened,
      // so we need to reset it.
      setTimeout(() => { dialogContent.scrollTop = 0; }, 0);

      document.body.classList.add('modal-open');
    },
  };
}

export async function openModal(fragmentUrl) {
  const path = fragmentUrl.startsWith('http')
    ? new URL(fragmentUrl, window.location).pathname
    : fragmentUrl;

  const fragment = await loadFragment(path);
  const { showModal } = await createModal(fragment.childNodes);
  showModal();
}

export async function openWOL(fragmentUrl) {
  const path = '/modals/modal-wol';

  const fragment = await loadFragment(path);
  const { showModal } = await createModal(fragment.childNodes, fragmentUrl);
  showModal();
}