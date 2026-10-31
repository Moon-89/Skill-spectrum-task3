const LOREM_FEATURE = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.'
const LOREM_SHOWCASE = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque nisi architecto autem molestias corrupti officia veniam.'
const LOREM_QUOTE = '“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vitae ipsa asperiores inventore aperiam iure?”'
const LOREM_BIO = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.'
const LOREM_TESTIMONIAL = '“Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.”'
const LOREM_POST = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.'

export const LEAD = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos quaerat sapiente nam, id vero.'

export const NAV_ITEMS = [
  { label: 'Home', href: '#home-section' },
  { label: 'Features', href: '#features-section' },
  {
    label: 'About Us',
    href: '#about-section',
    children: [
      { label: 'More templates by Colorlib', href: 'https://colorlib.com/wp/templates/', external: true, primary: true },
      { label: 'Our Team', href: '#our-team-section' },
      {
        label: 'More Links',
        href: '#',
        children: [
          { label: 'Menu One', href: '#' },
          { label: 'Menu Two', href: '#' },
          { label: 'Menu Three', href: '#' },
        ],
      },
    ],
  },
  { label: 'Testimonials', href: '#testimonials-section' },
  { label: 'Blog', href: '#blog-section' },
  { label: 'Contact', href: '#contact-section' },
]

export const FEATURES = [
  { title: 'Marketing Consulting', icon: 'fa-solid fa-arrows-rotate', delay: 0 },
  { title: 'Market Analysis', icon: 'fa-solid fa-store', delay: 100 },
  { title: 'Easy Purchase', icon: 'fa-solid fa-basket-shopping', delay: 200 },
  { title: 'Free Updates', icon: 'fa-solid fa-rotate-left', delay: 0 },
  { title: '100% Satisfied', icon: 'fa-regular fa-face-smile', delay: 100 },
  { title: 'Easy Plugin', icon: 'fa-solid fa-plug', delay: 200 },
].map((feature) => ({ ...feature, text: LOREM_FEATURE }))

const GIFT_CARD = {
  image: 'images/undraw_gift_card_6ekc.svg',
  width: 833,
  height: 678,
  author: 'Grey Simpson',
  photo: 'images/person_4.jpg',
}
const METRICS = {
  image: 'images/undraw_metrics_gtu7.svg',
  width: 1007,
  height: 608,
  author: 'Kimberly Gush',
  photo: 'images/person_1.jpg',
  reversed: true,
}

export const SHOWCASE = [GIFT_CARD, METRICS, GIFT_CARD, METRICS].map((item) => ({
  ...item,
  title: 'Communicate and gather feedback',
  text: LOREM_SHOWCASE,
  role: 'Co-Founder, XYZ Inc.',
  quote: LOREM_QUOTE,
}))

export const MISSION = {
  text: 'Eos cumque optio dolores excepturi rerum temporibus magni recusandae eveniet, totam omnis consectetur maxime quibusdam expedita dolorem dolor nobis dicta labore quaerat esse magnam unde, aperiam delectus! At maiores, itaque.',
  points: ['Laborum enim quasi at modi', 'Ad at tempore', 'Labore quaerat esse'],
}

export const TEAM = [
  { name: 'Cloe Marena', role: 'President', photo: 'images/person_1.jpg', delay: 100 },
  { name: 'John Rooster', role: 'Marketing', photo: 'images/person_2.jpg', delay: 200 },
  { name: 'Will Turner', role: 'Marketing', photo: 'images/person_3.jpg', delay: 300 },
  { name: 'Nicolas Stainer', role: 'Financing', photo: 'images/person_4.jpg', delay: 0 },
  { name: 'George Brook', role: 'Founder', photo: 'images/person_5.jpg', delay: 100 },
  { name: 'Emely Hopson', role: 'Marketing', photo: 'images/person_6.jpg', delay: 200 },
].map((member) => ({ ...member, bio: LOREM_BIO }))

export const TEAM_SOCIALS = [
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: 'fa-brands fa-facebook-f' },
  { label: 'X (Twitter)', href: 'https://x.com/', icon: 'fa-brands fa-x-twitter' },
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: 'fa-brands fa-instagram' },
]

export const FOOTER_SOCIALS = [
  ...TEAM_SOCIALS,
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'fa-brands fa-linkedin-in' },
  { label: 'Pinterest', href: 'https://www.pinterest.com/', icon: 'fa-brands fa-pinterest-p' },
]

export const TESTIMONIALS = [
  { name: 'John Smith', photo: 'images/person_3.jpg' },
  { name: 'Robert Aguilar', photo: 'images/person_2.jpg' },
  { name: 'Roger Spears', photo: 'images/person_4.jpg' },
  { name: 'Kyle McDonald', photo: 'images/person_1.jpg' },
].map((testimonial) => ({ ...testimonial, quote: LOREM_TESTIMONIAL }))

export const POSTS = [
  { author: 'Ham Brook', image: 'images/img_1.jpg', alt: 'Business strategy article' },
  { author: 'James Porter', image: 'images/img_2.jpg', alt: 'Business growth article' },
  { author: 'James Porter', image: 'images/img_3.jpg', alt: 'Business success article' },
].map((post) => ({
  ...post,
  title: 'Make Your Business More Profitable',
  date: 'Jan 18, 2040',
  category: 'News',
  excerpt: LOREM_POST,
}))
