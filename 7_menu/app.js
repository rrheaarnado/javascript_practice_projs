const menu = [
  {
    id: 1,
    title: "Co-Working",
    duration: "(Hourly)",
    category: "co-working",
    price: 50,
    img: "./images/co-working.jpeg",
    desc: `Co-working space available at an hourly rate with high-speed internet and comfortable seating.`,
  },
  {
    id: 2,
    title: "Co-Working",
    duration: "(Early Bird)",
    category: "co-working",
    price: 300,
    img: "./images/co-working1.jpg",
    desc: `Early bird co-working package for the whole day at a discounted rate.`,
  },
  {
    id: 3,
    title: "Co-Working",
    duration: "(Regular)",
    category: "co-working",
    price: 400,
    img: "./images/co-working2.jpeg",
    desc: `Regular full-day co-working package with unlimited coffee and high-speed internet.`,
  },

  {
    id: 5,
    title: "Meeting Room",
    duration: "(4 Pax)",
    category: "meeting room",
    price: 400,
    img: "./images/meetingroom1.jpg",
    desc: `Private meeting room for up to 4 people with projector and whiteboard.`,
  },
  {
    id: 6,
    title: "Meeting Room",
    duration: "(8 Pax)",
    category: "meeting room",
    price: 600,
    img: "./images/meetingroom2.jpeg",
    desc: `Spacious meeting room for up to 8 people with projector, whiteboard, and refreshments.`,
  },
  {
    id: 7,
    title: "Meeting Room",
    duration: "(12 Pax)",
    category: "meeting room",
    price: 800,
    img: "./images/meetingroom3.jpeg",
    desc: `Large meeting room for up to 12 people with complete audio-visual setup and refreshments.`,
  },
  {
    id: 8,
    title: "Hybrid Pass",
    duration: "(10 days)",
    category: "co-working",
    price: 1500,
    img: "./images/co-working3.png",
    desc: `10-day hybrid pass for flexible co-working with access to all amenities.`,
  },
  {
    id: 9,
    title: "Overnight Pass",
    duration: "(9PM Onwards)",
    category: "co-working",
    price: 500,
    img: "./images/co-working.jpeg",
    desc: `Overnight co-working pass with 24-hour access and complimentary refreshments.`,
  },
  {
    id: 10,
    title: "Private Office",
    duration: "(1-2 Pax)",
    category: "private office",
    price: 6000,
    img: "./images/privateoffice1.jpeg",
    desc: `Private office space for 1-2 people with dedicated workstations and internet access.`,
  },
  {
    id: 11,
    title: "Private Office",
    duration: "(2-4 Pax)",
    category: "private office",
    price: 90000,
    img: "./images/privateoffice2.jpeg",
    desc: `Private office space for 2-4 people with dedicated workstations and internet access.`,
  },
  {
    id: 12,
    title: "Private Office",
    duration: "(6-8 Pax)",
    category: "private office",
    price: 120000,
    img: "./images/privateoffice3.jpeg",
    desc: `Private office space for 6-8 people with dedicated workstations and internet access.`,
  },
  {
    id: 13,
    title: "Private Office",
    duration: "(8-12 Pax)",
    category: "private office",
    price: 200000,
    img: "./images/privateoffice4.jpeg",
    desc: `Private office space for 8-12 people with dedicated workstations and internet access.`,
  },
];

const sectionCenter = document.querySelector('.section-center')

window.addEventListener("DOMContentLoaded", function () {
  displayItems(menu);

});

function displayItems(item) {

  let displayMenu = item.map(function (item) {
    // console.log(item);
    return `
    <article class="menu-item">
    <img src= ${item.img} class="photo">
    <div class="item-info">
      <header>
        <div> <h4>${item.title}</h4>
        <h5>${item.duration}</h5>
        </div>
        <h5 class=""price>₱${item.price}</h5>
      </header>

      <p class="item-text">
        ${item.desc}
      </p>
    </div>
  </article>`;
  });

  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;

}