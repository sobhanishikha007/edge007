export default function decorate(block) {
    const bgImageBlock = block.children[0];
    const htmlTextBlock = block.children[1];
    const leftTextBlock = block.children[2];
    const middleTextBlock = block.children[3];
    const rightTextBlock = block.children[4];
    const overlayImageBlock = block.children[5];

    const bgImage = bgImageBlock.querySelector('picture');
    const htmlText = htmlTextBlock.querySelector('div:last-child');
    const leftText = leftTextBlock.querySelector('div:last-child');
    const middleText = middleTextBlock.querySelector('div:last-child');
    const rightText = rightTextBlock.querySelector('div:last-child');
    const overlayImage = overlayImageBlock.querySelector('div:last-child');

    const container = document.createElement('div');
    container.classList.add('hero-container');
    bgImage.classList.add("hero-image");
    container.appendChild(bgImage);

    htmlText.classList.add('hero-text');
    container.appendChild(htmlText);

    overlayImage.classList.add('hero-overlay');
    container.appendChild(overlayImage);
    console.log(leftTextBlock);

    // const heroBox = document.createElement('div');
    // heroBox.classList.add('hero-box');

    // boxTitle.classList.add('hero-box-title');
    // heroBox.appendChild(boxTitle);
    // const boxContent = document.createElement('div');
    // boxContent.classList.add('hero-box-content');
    // boxContentTop.classList.add('hero-box-top');
    // boxContent.appendChild(boxContentTop);
    // boxContentMiddle.classList.add('hero-box-middle');
    // boxContent.appendChild(boxContentMiddle);
    // boxContentBottom.classList.add('hero-box-bottom');
    // boxContent.appendChild(boxContentBottom);
    // heroBox.appendChild(boxContent);

    // const boxDivider = document.createElement('div');
    // boxDivider.classList.add('hero-box-divider');
    // heroBox.appendChild(boxDivider);

    // const cards = document.createElement('div');
    // cards.classList.add('hero-box-cards');

    // const card1 = document.createElement('div');
    // card1.classList.add('hero-box-card');
    // card1Img.classList.add('hero-box-card-image');
    // card1.appendChild(card1Img);
    // card1Text.classList.add('hero-box-card-text');
    // card1.appendChild(card1Text);
    // cards.appendChild(card1);

    // heroBox.appendChild(cards);
    // container.appendChild(heroBox);

    block.textContent = '';
    block.append(container);
  }