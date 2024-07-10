export default function decorate(block) {
    // block.textContent = '';
    const heroImgBlock = block.children[0];
    const boxTitleBlock = block.children[1];
    const boxContentTopBlock = block.children[2];
    const boxContentMiddleBlock = block.children[3];
    const boxContentBottomBlock = block.children[4];
    const card1Block = block.children[5];
    const card2Block = block.children[6];
    const card3Block = block.children[7];

    const heroImge = heroImgBlock.querySelector('picture');
    const boxTitle = boxTitleBlock.querySelector('div:last-child');
    const boxContentTop = boxContentTopBlock.querySelector('div:last-child');
    const boxContentMiddle = boxContentMiddleBlock.querySelector('div:last-child');
    const boxContentBottom = boxContentBottomBlock.querySelector('div:last-child');
    const card1Img = card1Block.querySelector('picture');
    const card1Text = card1Block.querySelector('div:last-child');
    const card2Img = card2Block.querySelector('picture');
    const card2Text = card2Block.querySelector('div:last-child');
    const card3Img = card3Block.querySelector('picture');
    const card3Text = card3Block.querySelector('div:last-child');

    const container = document.createElement('div');
    container.classList.add('hero-container');
    heroImge.classList.add("hero-image");
    container.appendChild(heroImge);

    const heroBox = document.createElement('div');
    heroBox.classList.add('hero-box');

    boxTitle.classList.add('hero-box-title');
    heroBox.appendChild(boxTitle);
    const boxContent = document.createElement('div');
    boxContent.classList.add('hero-box-content');
    boxContentTop.classList.add('hero-box-top');
    boxContent.appendChild(boxContentTop);
    boxContentMiddle.classList.add('hero-box-middle');
    boxContent.appendChild(boxContentMiddle);
    boxContentBottom.classList.add('hero-box-bottom');
    boxContent.appendChild(boxContentBottom);
    heroBox.appendChild(boxContent);

    const cards = document.createElement('div');
    cards.classList.add('hero-box-cards');

    const card1 = document.createElement('div');
    card1.classList.add('hero-box-card');
    card1Img.classList.add('hero-box-card-image');
    card1.appendChild(card1Img);
    card1Text.classList.add('hero-box-card-text');
    card1.appendChild(card1Text);
    cards.appendChild(card1);

    const card2 = document.createElement('div');
    card2.classList.add('hero-box-card');
    card2Img.classList.add('hero-box-card-image');
    card2.appendChild(card2Img);
    card2Text.classList.add('hero-box-card-text');
    card2.appendChild(card2Text);
    cards.appendChild(card2);

    const card3 = document.createElement('div');
    card3.classList.add('hero-box-card');
    card3Img.classList.add('hero-box-card-image');
    card3.appendChild(card3Img);
    card3Text.classList.add('hero-box-card-text');
    card3.appendChild(card3Text);
    cards.appendChild(card3);

    heroBox.appendChild(cards);
    container.appendChild(heroBox);

    block.textContent = '';
    block.append(container);
  }