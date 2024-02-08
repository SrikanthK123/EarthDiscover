import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Test from './components/Test';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Galaxy from './components/Galaxy';
import NavBar from './components/NavBar';
import Planets from './components/Planets';
import SinglePlanet from './components/SinglePlanet';
import GalaxyWorld from './Images/Mercury.mp4'
import Earth4K from './Images/Earth4k.mp4'
import Venus from './Images/Venus4K.mp4'
import Mars4K from './Images/Mars4K.mp4'
import Jupiter4K from './Images/jupiter4K.mp4'
import Saturn4K from './Images/saturn4K.mp4'
import Uranus from './Images/Uranus.mp4' 
import Neptune from './Images/Neptune.mp4'
import Footer from './components/Footer';
import Nature from './components/Nature';
import Bird from './components/Bird';
import SingleAnimal from './components/SingleAnimal';
import OceanWorld from './components/OceanWorld';


function App() {

  const Planet = [
    {
      title : "Mercury",
      video : `${GalaxyWorld}`,
      para1 : "Mercury, known to humanity since ancient times, has captivated observers with its visibility to the naked eye. The Romans, drawing inspiration from their god of commerce and travel, named the planet Mercury. Despite its prominence, observing Mercury proves challenging due to its proximity to the Sun, causing it to appear as either an evening star or a morning star at different times throughout the year.",
      para2 : " In the mid-1970s, the Mariner 10 spacecraft revolutionized our understanding of Mercury by providing the first close-up images of the planet's cratered surface. Fast forward to 2011, and the MESSENGER spacecraft became the first to orbit Mercury, embarking on an extensive mission to map its terrain and study its geology.",
      Orbital : "Mercury has an orbital period of about 88 Earth days, making it the planet with the shortest year.",
      OrbitalImag : "https://images.unsplash.com/photo-1640270772837-48fda64883a4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Distance : "Mercury is the closest planet to the Sun, with an average distance of approximately 57.9 million kilometers (about 36 million miles).",
      DistanceImag : "https://wallpaperaccess.com/full/2920218.jpg",
      Surface : "Mercury's surface is heavily cratered, resembling the Moon's surface. Impact craters, created by collisions with asteroids and comets, cover much of the planet.",
      SurfaceImag : "https://img.theepochtimes.com/assets/uploads/2016/05/10/Mercury--1200x675.jpg",
      Atmosphere : "Mercury has a very thin atmosphere, known as an exosphere, composed mainly of oxygen, sodium, hydrogen, and helium. However, this atmosphere is so thin that it cannot support human life.",
      AtmosphereImag : "https://curiosmos.com/wp-content/uploads/2021/12/7eaef8b44ede652a56eafde17393670f.jpg",
      Temperature : " Mercury experiences extreme temperature variations due to its lack of a substantial atmosphere to retain heat. Daytime temperatures on the planet's surface can reach up to 430 degrees Celsius (800 degrees Fahrenheit).",
      TemperatureImag : "https://www.universetoday.com/wp-content/uploads/2017/03/mercury-ice-water-deposits.jpg",
      Moons : " Mercury doesn't have a moon because its proximity to the Sun and weak gravity make it challenging for a moon to form and remain in a stable orbit. Additionally, gravitational forces from the Sun could disrupt any potential moons around Mercury.",
      MoonsImag : "https://i.ytimg.com/vi/oLBrtKrq5kQ/maxresdefault.jpg"
    },
    {
      title : "Venus",
      video :`${Venus}`,
      para1 : "Venus, named after the Roman goddess of love, has a captivating history blending mythology and space exploration. Early observations as the Morning and Evening Star led to Soviet missions in the mid-20th century, revealing a scorching atmosphere dominated by carbon dioxide.",
      para2 : " Modern probes, like NASA's Magellan, uncovered Venus's volcanic plains and highland regions. Ongoing interest in Venus continues, with proposed missions aiming to explore its atmosphere and geology, providing crucial insights into the planet's complex history.",
      Orbital : "Venus takes approximately 225 Earth days to complete one orbit, exhibiting a longer year than Mercury but shorter than Earth.",
      OrbitalImag : "https://space-travel.weebly.com/uploads/1/0/0/0/10007066/4433338_orig.jpg",
      Distance : "Venus orbits at an average distance of about 108.2 million kilometers from the Sun, showcasing a thick atmosphere that contributes to its intense greenhouse effect.",
      DistanceImag : "https://wallpaperaccess.com/full/116978.jpg",
      Surface : "Volcanic plains, mountains, and large impact craters.Venus has volcanic plains and highland regions, with a thick atmosphere that obscures detailed surface observations.",
      SurfaceImag : "https://th.bing.com/th/id/R.c5b91c56605f7ac6c69b6a59949087ee?rik=OljbsFL6Sejqtg&riu=http%3a%2f%2fplanetfacts.org%2fwp-content%2fuploads%2f2010%2f05%2fVenus_surface-400.jpg&ehk=yJtCCdK%2fxUqVehaacj73oAipm3O0UA5S%2b46PmVyJXq0%3d&risl=&pid=ImgRaw&r=0",
      Atmosphere : "Venus boasts a thick atmosphere predominantly composed of carbon dioxide, with clouds of sulfuric acid creating a greenhouse effect that leads to scorching surface temperatures.",
      AtmosphereImag : "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2008/02/molecules_in_the_venusian_atmosphere/9941384-2-eng-GB/Molecules_in_the_Venusian_atmosphere_pillars.jpg",
      Temperature : "Extremely hot with an average surface temperature of around 467 degrees Celsius.",
      TemperatureImag : "https://th.bing.com/th/id/OIP.3TdXLYp8N2wHW-BhSiRTLQAAAA?rs=1&pid=ImgDetMain",
      Moons : "Venus doesn't have a moon because its proximity to the Sun and weak gravity make it challenging for a moon to form and remain in a stable orbit. Additionally, gravitational forces from the Sun could disrupt any potential moons around venus",
      MoonsImag : "https://th.bing.com/th/id/OIP.3eWnIpa7ZJIS_eGmGmLEHAHaHa?rs=1&pid=ImgDetMain"
    },
    {
      title : "Earth",
      video :`${Earth4K}`,
      para1 : "Earth, our home planet, is the only known celestial body to support life. Its history is intricately linked with the evolution of life forms, shaping diverse ecosystems over millions of years",
      para2 : "Geological processes, including plate tectonics and erosion, have shaped its continents and landscapes. The emergence of complex life forms, including humans, has left a profound impact on Earth's ecosystems.",
      Orbital : " Earth has an orbital period of approximately 365.25 days, defining the time it takes to complete one orbit around the Sun. This duration governs our calendar year and influences seasonal changes.",
      OrbitalImag : "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Distance : "Earth is situated at an average distance of about 149.6 million kilometers from the Sun, defining its orbit and ensuring a habitable climate",
      DistanceImag : "https://i0.wp.com/usdailyreport.com/wp-content/uploads/2020/05/Sun-Environment-Extreme-Weather-History.jpg?fit=818%2C490&ssl=1",
      Surface : "Earth's surface is a mosaic of oceans, continents, and mountains, shaped by dynamic geological processes. Its diversity sustains complex ecosystems and supports a wide array of life.",
      SurfaceImag : "https://free4kwallpapers.com/uploads/originals/2020/02/11/edge-of-earth-but-its-amazing-wallpaper.jpg",
      Atmosphere : " Nitrogen and oxygen-rich atmosphere.Earth's life-sustaining atmosphere, primarily consisting of nitrogen and oxygen, regulates temperatures and supports a diverse range of ecosystems. Its dynamic composition facilitates weather patterns and shields the planet from harmful solar radiation",
      AtmosphereImag : "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Temperature : "Ranges from extremely cold to hot, but within a habitable range.Earth exhibits temperature extremes from around -128.6°F (-89.2°C) in Antarctica to 134°F (56.7°C) in Death Valley, showcasing its diverse climatic range.",
      TemperatureImag : "https://www.npl.co.uk/getmedia/387d50c3-859a-433c-82c8-35b55a017ead/Temperature-Earth-Measured-hdr-d-1476647750.jpg.aspx?width=1920&height=1080&ext=.jpg&ext=.jpg",
      Moons : "Earth has one moon, known as 'The Moon,' influencing tides and contributing to the planet's stability and climate balance.",
      MoonsImag : "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title : "Mars",
      video :`${Mars4K}`,
      para1 : "Mars, known as the 'Red Planet,' has fascinated humanity for centuries. Ancient astronomers noted its reddish appearance, associating it with various deities. In modern times, Mars became a key target for space exploration.",
      para2 : "Numerous missions, including the rovers Spirit and Opportunity, have unveiled its rusty surface, polar ice caps, and potential signs of past water. The pursuit of Mars as a potential habitat for life continues with missions like NASA's Perseverance rover.",
      Orbital : "Mars has an orbital period of roughly 687 Earth days, making its journey around the Sun slower than Earth's.",
      OrbitalImag : "https://images.unsplash.com/photo-1696384036025-c7d7b7f6584d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Distance : "Mars orbits at an average distance of approximately 227.9 million kilometers from the Sun, with a diverse landscape that includes valleys, deserts, and polar ice caps.",
      DistanceImag : "https://www.worldatlas.com/r/w1200/upload/94/3f/83/shutterstock-51857866.jpg",
      Surface : "Reddish appearance due to iron oxide. Features include valleys, deserts, and polar ice caps.Mars exhibits a diverse surface with red-hued plains, towering volcanoes like Olympus Mons, and a canyon system, including Valles Marineris.",
      SurfaceImag : "https://wallpaperaccess.com/full/538145.jpg",
      Atmosphere : " Thin atmosphere with mostly carbon dioxide.Mars has a thin atmosphere mainly composed of carbon dioxide, with traces of nitrogen and argon, creating a tenuous envelope around the planet.",
      AtmosphereImag : "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2018/04/comparing_the_atmospheres_of_mars_and_earth/17444033-1-eng-GB/Comparing_the_atmospheres_of_Mars_and_Earth_pillars.jpg",
      Temperature : "Mars undergoes temperature fluctuations, with average highs around -80°F (-62°C) and colder nighttime temperatures, influenced by its thin atmosphere.",
      TemperatureImag : "https://th.bing.com/th/id/R.9a18882105b8f06d761b3f87ae605290?rik=ErYfs9nSUS3eaQ&riu=http%3a%2f%2ftaylormars.weebly.com%2fuploads%2f6%2f7%2f0%2f8%2f67082275%2f114869930.png&ehk=GYnpsGdzo0wozxh4y4zn0bTZySCS3vFNljDn%2fcbxOzE%3d&risl=&pid=ImgRaw&r=0",
      Moons : "Mars has two small moons, Phobos and Deimos, which are irregularly shaped and thought to be captured asteroids.",
      MoonsImag : "https://www.worldatlas.com/r/w1200/upload/80/c7/c0/shutterstock-317082452.jpg"
    },
    {
      title : "Jupiter",
      video :`${Jupiter4K}`,
      para1 : "Jupiter, the largest planet in our solar system, holds a prominent place in both mythology and scientific exploration. Named after the king of the Roman gods, Jupiter's massive size influences the dynamics of the entire solar system.",
      para2 : "Galileo's telescopic observations in the 17th century revealed its four largest moons, now known as the Galilean moons. Spacecraft like Juno continue to study Jupiter's atmosphere, magnetic field, and diverse moons, contributing to our understanding of giant gas planets.",
      Orbital : "Jupiter, being a giant gas planet, has a lengthy orbital period of about 11.86 Earth years, contributing to its gravitational influence.",
      OrbitalImag : "https://images.unsplash.com/photo-1630839437035-dac17da580d0?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Distance : "Jupiter, the largest planet, orbits the Sun at an average distance of about 778.5 million kilometers, influencing the dynamics of the entire solar system.",
      DistanceImag : "https://labs.blogs.com/.a/6a00d8341caed853ef017ee84e8f42970d-800wi",
      Surface : " No solid surface. Composed mostly of hydrogen and helium.Jupiter, a gas giant, lacks a solid surface, featuring prominent cloud bands and the iconic Great Red Spot.",
      SurfaceImag : "https://cdn.mos.cms.futurecdn.net/VkeNe4SQ5GQfzSWZXmXwyi-970-80.jpg",
      Atmosphere : " Thick atmosphere with bands of clouds and the Great Red Spot.Jupiter's atmosphere is predominantly composed of hydrogen and helium, featuring colorful cloud bands and iconic storm systems such as the Great Red Spot.",
      AtmosphereImag : "https://i.redd.it/uymsthghsxmx.jpg",
      Temperature : "Jupiter, being a gas giant, lacks a solid surface, and its upper atmosphere experiences temperatures ranging from -145°F (-98°C) to much hotter regions.",
      TemperatureImag : "https://www.universetoday.com/wp-content/uploads/2008/06/Jupiter_diagram.svg_-e1418001524689.png",
      Moons : "Jupiter boasts a staggering 79 known moons, including the four large Galilean moons: Io, Europa, Ganymede, and Callisto",
      MoonsImag : "https://wallpaperaccess.com/full/932344.jpg"
    },
    {
      title : "Saturn",
      video :`${Saturn4K}`,
      para1 : "Saturn, famous for its spectacular ring system, has intrigued sky gazers throughout history. Galileo's observations in the 17th century hinted at its ringed structure. In the 20th century, spacecraft like Voyager and Cassini provided detailed images and data about its stunning rings and diverse moons",
      para2 : " Saturn's rings, composed of ice particles and debris, remain a focus of ongoing research, unraveling the mysteries of their formation and dynamics.",
      Orbital : "Saturn's orbital period is around 29.46 Earth years, reflecting its vast distance from the Sun and the slow pace of its orbit.",
      OrbitalImag : "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Distance : "Saturn, known for its stunning rings, orbits at an average distance of approximately 1.43 billion kilometers from the Sun, captivating observers with its unique features.",
      DistanceImag : "https://imageio.forbes.com/specials-images/imageserve/5fd632a5df91b015b35a3cc2/0x0.jpg?format=jpg&width=1200",
      Surface : "No solid surface. Known for its prominent ring system.Saturn's surface is primarily composed of gas, and its most notable feature is its mesmerizing ring system.",
      SurfaceImag : "https://wallpaperaccess.com/full/498406.jpg",
      Atmosphere : "  Primarily hydrogen and helium.Saturn's atmosphere, primarily consisting of hydrogen and helium, showcases intricate cloud patterns and atmospheric features in addition to its iconic ring system.",
      AtmosphereImag : "https://img.huffingtonpost.com/asset/5988787b2200002d001a4c19.jpeg?cache=4YSr9IM55K&ops=1200_630",
      Temperature : "Saturn's outer atmosphere, like Jupiter, exhibits extreme cold, with temperatures reaching as low as -285°F (-176°C).",
      TemperatureImag : "https://planetfacts.org/wp-content/uploads/2010/05/Saturn_high-res-temp-pac-man-like-image.jpg",
      Moons : "Saturn is surrounded by a vast system of moons, with 83 known moons, including Titan, Enceladus, and Mimas.",
      MoonsImag : "https://th.bing.com/th/id/R.1b34576dfd45eee8651df738ba9c14b1?rik=mdbOQVW%2bDvhZLg&riu=http%3a%2f%2fbaileysaturnsite.weebly.com%2fuploads%2f6%2f6%2f9%2f8%2f66982667%2f197484576.png&ehk=4psqzplvDyMHCQnfVHqO4WEnzHIX5hPVubjFaF5sXWY%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      title : "Uranus",
      video :`${Uranus}`,
      para1 : "Uranus, a distant and enigmatic ice giant, was discovered in 1781 by William Herschel. Its initial observations revealed an unexpected deviation from predicted orbits, leading to the recognition of a new planet.",
      para2 : "Uranus's peculiar tilt and retrograde rotation set it apart. Although less explored than its gas giant counterparts, missions like Voyager 2 have provided valuable insights into its atmosphere, composition, and unique characteristics.",
      Orbital : "Uranus, with a unique tilt, completes one orbit in about 84 Earth years, experiencing distinct seasons due to its axial inclination.",
      OrbitalImag : "https://wallpaperaccess.com/full/415311.jpg",
      Distance : "Uranus orbits at an average distance of about 2.87 billion kilometers from the Sun, characterized by its tilted rotational axis and icy composition.",
      DistanceImag : "https://wallpaperaccess.com/full/1661578.jpg",
      Surface : "No solid surface. Unique for its tilted axis of rotation.Uranus, an ice giant, has no solid surface visible from space, and its atmosphere is predominantly composed of hydrogen and helium.",
      SurfaceImag : "https://rnz-ressh.cloudinary.com/image/upload/s--FliWmgmZ--/ar_16:10,c_fill,f_auto,g_auto,q_auto,w_1050/4LSGKDI_049_f0226944_jpg",
      Atmosphere : "  Primarily hydrogen and helium, with traces of methane.Uranus has a hydrogen and helium-rich atmosphere, with traces of methane that contribute to its distinctive blue-green hue.",
      AtmosphereImag : "https://i.pinimg.com/originals/ab/0d/10/ab0d10baa078cbe877083db5d0e4790d.jpg",
      Temperature : "Uranus, an ice giant, experiences frigid temperatures, with its upper atmosphere averaging around -224°F (-143°C).",
      TemperatureImag : "https://i0.wp.com/www.rankred.com/wp-content/uploads/2019/06/Temperature-of-Uranus-Rings.jpg?fit=850%2C712&ssl=1",
      Moons : " Uranus has 27 known moons, including Titania, Oberon, Miranda, Ariel, and Umbriel.",
      MoonsImag : "https://images.fineartamerica.com/images-medium-large-5/artwork-comparing-the-moons-of-uranus-mark-garlick.jpg"
    },
    {
      title : "Neptune",
      video :`${Neptune}`,
      para1 : "Neptune, the farthest known planet in our solar system, completed its discovery in 1846 based on mathematical predictions. Named after the Roman god of the sea, Neptune remained a mystery until Voyager 2's flyby in 1989.",
      para2 : "The spacecraft unveiled its deep blue atmosphere, dynamic storms, and the Great Dark Spot. Ongoing observations, including those from telescopes and future missions, continue to enhance our understanding of Neptune's distant and dynamic realm.",
      Orbital : "Neptune, the farthest known planet, has an orbital period of approximately 164.79 Earth years, completing a lengthy journey around the Sun.",
      OrbitalImag : "https://wallpaperaccess.com/full/4466176.jpg",
      Distance : "Neptune, the farthest known planet, orbits at an average distance of around 4.5 billion kilometers from the Sun, featuring a dynamic atmosphere with storms and the Great Dark Spot.",
      DistanceImag : "https://newsroom.unsw.edu.au/sites/default/files/styles/full_width__450_2x/public/thumbnails/image/200220_neptune_shutterstock_2.jpg?itok=shJbGn83",
      Surface : "No solid surface. Dark storms and the Great Dark Spot.Neptune's surface, like Uranus, is primarily composed of gas, featuring dynamic storms, including the Great Dark Spot.",
      SurfaceImag : "https://storage.needpix.com/rsynced_images/neptune-11630_1280.jpg",
      Atmosphere : "Primarily hydrogen and helium, with traces of methane.Neptune's atmosphere, similar to Uranus, is predominantly composed of hydrogen and helium, with additional traces of methane, featuring dynamic storms and a striking deep-blue color.",
      AtmosphereImag : "https://c8.alamy.com/comp/2BEGD6T/neptune-illustration-2BEGD6T.jpg",
      Temperature : "Neptune, with its dynamic atmosphere, encounters temperatures as low as -330°F (-201°C), making it one of the coldest planets in the solar system.",
      TemperatureImag : "https://cdn.downtoearth.org.in/library/large/2022-04-12/0.97742200_1649764723_neptune-temp.png",
      Moons : "Neptune has 14 known moons, including Triton, a large moon with unique retrograde motion.",
      MoonsImag : "https://orbitaltoday.com/wp-content/uploads/2023/05/5-neptune-moons.jpg"
    }
  ]
  const Animals = [
    {
      title : "Parrot",
      TagName : "Rainbow Wings, Nature Sings.",
      Desc :"Nature's living art, adorned in vivid hues, echoing joy with every playful chirp.",
      Gif : "https://media.tenor.com/xIqWzH7UoTAAAAAM/love-parrots.gif",
      Origin : "Parrots are believed to have originated in warmer regions of Asia, Africa, and Australia. They are found in tropical and subtropical regions worldwide.",
      OriginImg : "https://www.hdwallpapers.in/download/macaw_parrot_4k-HD.jpg",
      Habitats: "Parrots inhabit a variety of environments, including rainforests, grasslands, deserts, and coastal regions.They are highly adaptable and can be found in both lowland and mountainous areas.",
      HabitatsImg : "https://images.unsplash.com/photo-1522272556107-2a2b67715093?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RGl2ZXJzZSUyMEhhYml0YXRzJTIwcGFycm90fGVufDB8fDB8fHww",
      Behaviors : "Parrots are known for their intelligence, problem-solving skills, and social behaviors.They often form strong pair bonds and engage in complex communication, including mimicry of human speech and sounds.",
      BehaviorsImg : "https://th.bing.com/th/id/R.7b21f4939a530e8dc207009302c0b6cf?rik=u%2ftKLZK0OHI0wg&riu=http%3a%2f%2fhdqwalls.com%2fwallpapers%2fmacaw-parrot-closeup-1i.jpg&ehk=FCcVqUNbRwZalKEiQiQGtnsZoWh0VFxtke2QOXIn4QQ%3d&risl=1&pid=ImgRaw&r=0",
      Facts : "Parrots have a well-developed sense of taste, and they use their feet as hands to explore and manipulate objects.Some parrots, like the Kea from New Zealand, are known for their playful and mischievous behavior.",
      FactsImg : "https://wallpapercave.com/wp/wp9139769.jpg",
      Longevity : "Parrots are known for their long lifespans, with some species living over 80 years in captivity.African Grey Parrots, in particular, are renowned for their intelligence and can live several decades.",
      LongevityImg : "https://i.pinimg.com/originals/37/b1/90/37b19009939437c0f3170702293409c3.jpg"
    },
    {
      title : "Humming",
      TagName : "Fluttering Elegance, Nature's Tiny Dancers.",
      Desc : "Hummingbirds, the enchanting avian jewels, are miniature wonders that grace the skies with their iridescent plumage and rapid, hovering flights.",
      Gif : "https://giffiles.alphacoders.com/868/86899.gif",
      Origin:"Native to the Americas, hummingbirds are found from Alaska to Tierra del Fuego.",
      OriginImg : "https://images.unsplash.com/photo-1552727451-6f5671e14d83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aHVtbWluZyUyMGJpcmR8ZW58MHx8MHx8fDA%3D",
      Habitats : "They inhabit a range of environments, from tropical rainforests to high-altitude mountainous regions.",
      HabitatsImg : "https://images.unsplash.com/photo-1517524501745-d45ba4383fa7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aHVtbWluZyUyMGJpcmR8ZW58MHx8MHx8fDA%3D",
      Behaviors : "Known for their hovering flight, rapid wing beats, and feeding on nectar from flowers.",
      BehaviorsImg: "https://images.unsplash.com/photo-1589258978040-b2904709b20a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGh1bW1pbmclMjBiaXJkfGVufDB8fDB8fHww",
      Facts : "Hummingbirds have excellent memories for locating food sources and can remember individual humans.",
      FactsImg : "https://pixelz.cc/wp-content/uploads/2017/12/hummingbird-uhd-4k-wallpaper.jpg",
      Longevity: "The average lifespan of hummingbirds is 3 to 5 years.",
      LongevityImg:"https://wallpapercave.com/wp/wp6350023.jpg"

  }
  ,
    {
      title : "Sparrow",
      TagName : "Sparrow Serenity, Songs in the Sky.",
      Desc : "Sparrows, the charming residents of both urban and rural landscapes, bring cheerful melodies ",
      Gif : "https://media3.giphy.com/media/ljJYd4phcl4E8/giphy.gif",
      Origin:"Sparrows are found worldwide, with various species originating from different continents.",
      OriginImg : "https://images.unsplash.com/photo-1507477338202-487281e6c27e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U3BhcnJvd3xlbnwwfHwwfHx8MA%3D%3D",
      Habitats : "They are adaptable and can thrive in urban, suburban, and rural environments.",
      HabitatsImg : "https://images.unsplash.com/photo-1539664030485-a936c7d29c6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U3BhcnJvd3xlbnwwfHwwfHx8MA%3D%3D",
      Behaviors : "Social birds, often seen in flocks, with a diet consisting mainly of seeds and insects.",
      BehaviorsImg: "https://images.unsplash.com/photo-1611610131632-3c9158792925?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFNwYXJyb3d8ZW58MHx8MHx8fDA%3D",
      Facts : "Sparrows are known for their adaptability and ability to coexist with humans in diverse habitats.",
      FactsImg : "https://images.unsplash.com/photo-1623719678037-84c54bfde8c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFNwYXJyb3d8ZW58MHx8MHx8fDA%3D",
      Longevity: "The lifespan of sparrows is typically around 2 to 5 years.",
      LongevityImg:"https://images.unsplash.com/photo-1591060839815-6c7064c477dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFNwYXJyb3d8ZW58MHx8MHx8fDA%3D"
      
  }
  ,
    {
      title : "Turkey",
      TagName : "Turkey Majesty, Strutting Through Seasons",
      Desc : "Turkeys, adorned with their impressive plumage and distinctive gobbling calls, embody the spirit of autumn.",
      Gif : "https://media1.tenor.com/images/4651b549c8427080ac9019430c15e50c/tenor.gif?itemid=15740672",
      Origin:"Native to North America, turkeys have been domesticated and introduced to other regions.",
      OriginImg : "https://images.unsplash.com/photo-1543069422-15ebb2128804?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHVya2V5JTIwYmlyZHxlbnwwfHwwfHx8MA%3D%3D",
      Habitats : "Originally found in forests, turkeys have adapted to a variety of habitats, including grasslands.",
      HabitatsImg : "https://images.unsplash.com/photo-1606335262673-31876172ac4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHVya2V5JTIwYmlyZHxlbnwwfHwwfHx8MA%3D%3D",
      Behaviors : "Ground-dwelling birds with elaborate courtship displays, particularly during mating season.",
      BehaviorsImg: "https://images.unsplash.com/photo-1461037506617-211749beac60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHR1cmtleSUyMGJpcmR8ZW58MHx8MHx8fDA%3D",
      Facts : "Wild turkeys can fly for short distances, contrary to the popular notion that they cannot.",
      FactsImg : "https://images.unsplash.com/photo-1616889638982-b06121164c3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHR1cmtleSUyMGJpcmR8ZW58MHx8MHx8fDA%3D",
      Longevity: "In the wild, turkeys usually live 3 to 5 years.",
      LongevityImg:"https://images.unsplash.com/photo-1574387313309-7c2292978b8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHVya2V5JTIwYmlyZHxlbnwwfHwwfHx8MA%3D%3D"

  }
  ,
    {
      title : "Stork",
      TagName : "Stork Grace, Bringers of New Beginnings",
      Desc : "Storks, symbols of fertility and renewal, soar through the skies with elegance.",
      Gif : "https://th.bing.com/th/id/R.5319823b5ec1806dd2413b59b13feb86?rik=7oWpkZg9eopahA&riu=http%3a%2f%2fstatic.boredpanda.com%2fblog%2fwp-content%2fuploads%2f2016%2f04%2finsta5.gif&ehk=J6Jm%2f08gfwIE18yAtzz%2b5Lr12oVVJe7m8AgkKr%2ffON4%3d&risl=&pid=ImgRaw&r=0",
      Origin:"Storks are found in various regions worldwide, with different species distributed across continents.",
      OriginImg : "https://images.unsplash.com/photo-1613414758256-5128c4c53720?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3Rvcmt8ZW58MHx8MHx8fDA%3D",
      Habitats : "Inhabit wetlands, marshes, and grasslands, and are often associated with nesting near water.",
      HabitatsImg : "https://images.unsplash.com/photo-1524055036205-019a5cc2a1b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U3Rvcmt8ZW58MHx8MHx8fDA%3D",
      Behaviors : "Known for their long legs, necks, and distinctive bill. They are migratory birds.",
      BehaviorsImg: "https://images.unsplash.com/photo-1461174008024-9faca7444bd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFN0b3JrfGVufDB8fDB8fHww",
      Facts : "Storks are known for their strong loyalty to their nesting sites, often returning to the same location each year.",
      FactsImg : "https://images.unsplash.com/photo-1594227047884-68af265e3dbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFN0b3JrfGVufDB8fDB8fHww",
      Longevity: "Storks can live up to 30 years.",
      LongevityImg:"https://images.unsplash.com/photo-1549478578-9ab218ad60b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFN0b3JrfGVufDB8fDB8fHww"

  }
  ,
    {
      title : "Pelican",
      TagName : "Pelican Panache, Wings of Coastal Charm.",
      Desc : "Pelicans, coastal connoisseurs, epitomize resilience as they glide over waters.",
      Gif : "https://media2.giphy.com/media/l41lI7ZBa7pgmk5uE/giphy.gif",
      Origin:"Pelicans are found on every continent except Antarctica, preferring coastal and inland waters.",
      OriginImg : "https://images.unsplash.com/photo-1579109191035-dfa9544f8be1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGVsaWNhbnxlbnwwfHwwfHx8MA%3D%3D",
      Habitats : " Inhabit a variety of aquatic environments, from saltwater to freshwater lakes.",
      HabitatsImg : "https://images.unsplash.com/photo-1587541563951-1ed7aed1a71a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFBlbGljYW58ZW58MHx8MHx8fDA%3D",
      Behaviors : "Known for their large throat pouches used for catching and storing fish",
      BehaviorsImg: "https://images.unsplash.com/photo-1551460351-d2610745aa0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFBlbGljYW58ZW58MHx8MHx8fDA%3D",
      Facts : "Pelicans are social birds, often seen in large flocks during migrations.",
      FactsImg : "https://plus.unsplash.com/premium_photo-1669865374493-d09e12c1a32f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFBlbGljYW58ZW58MHx8MHx8fDA%3D",
      Longevity: "Pelicans can live up to 25 years.",
      LongevityImg:"https://images.unsplash.com/photo-1593302871114-1832ed4f4bc2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFBlbGljYW58ZW58MHx8MHx8fDA%3D"
      
  }
  ,
    {
      title : "Seagull",
      TagName : "Seagull Symphony, Coastal Guardians.",
      Desc : "Seagulls, the guardians of coastal realms, navigate ocean breezes with effortless agility",
      Gif : "https://www.bing.com/th/id/OGC.807505b2263123159817ff255acd64c1?pid=1.7&rurl=http%3a%2f%2fforgifs.com%2fgallery%2fmain.php%3fg2_view%3dcore.DownloadItem%26%26g2_itemId%3d275874&ehk=F2La4isaHlX3BjfyKPfiJRdMIHQSG4Ac18aYHgIrjfY%3d",
      Origin:"Seagulls are found worldwide, with various species adapted to coastal and inland habitats.",
      OriginImg : "https://images.unsplash.com/reserve/u3x7cekkS16ajjtJcb5L_DSC_5869.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2VhZ3VsbHxlbnwwfHwwfHx8MA%3D%3D",
      Habitats : "Coastal areas, beaches, and inland lakes are common habitats for seagulls.",
      HabitatsImg : "https://images.unsplash.com/photo-1567413010197-7b436a170e8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U2VhZ3VsbHxlbnwwfHwwfHx8MA%3D%3D",
      Behaviors : "Opportunistic feeders, scavenging for food near water bodies and human settlements.",
      BehaviorsImg: "https://images.unsplash.com/photo-1569262573201-d9c7ab207647?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U2VhZ3VsbHxlbnwwfHwwfHx8MA%3D%3D",
      Facts : "Seagulls are highly intelligent birds, displaying problem-solving skills.",
      FactsImg : "https://plus.unsplash.com/premium_photo-1666622671292-e47c68cd49f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8U2VhZ3VsbHxlbnwwfHwwfHx8MA%3D%3D",
      Longevity: "The lifespan of seagulls is typically around 10 to 15 years.",
      LongevityImg:"https://images.unsplash.com/photo-1441323507636-db6a9abfb55f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFNlYWd1bGx8ZW58MHx8MHx8fDA%3D"

  }
  ,
    {
      title : "Swan",
      TagName : "Swan Serenity, Ballet on Water.",
      Desc : "Swans, epitomes of elegance, glide across serene waters with timeless grace",
      Gif : "https://www.bing.com/th/id/OGC.ed21f742ab4361bad8872ef954266739?pid=1.7&rurl=https%3a%2f%2fmedia.giphy.com%2fmedia%2feNzDOzSe72OQ0%2fgiphy.gif&ehk=lg0O%2bg19wvIyvgiFMpGAMoA7BhEBWy1gLnZXPJqzMkw%3d",
      Origin:"Swans are found in North America, Europe, Asia, and Australia, inhabiting freshwater lakes and rivers.",
      OriginImg : "https://images.unsplash.com/photo-1487972467151-efb3a8a465f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFN3YW58ZW58MHx8MHx8fDA%3D",
      Habitats : "Lakes, ponds, and slow-flowing rivers are common habitats for swans",
      HabitatsImg : "https://images.unsplash.com/photo-1593069310094-080326c950a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFN3YW58ZW58MHx8MHx8fDA%3D",
      Behaviors : "Graceful swimmers with long necks, known for their monogamous pair bonds.",
      BehaviorsImg: "https://images.unsplash.com/photo-1625518413254-f16ceb1ffe7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFN3YW58ZW58MHx8MHx8fDA%3D",
      Facts : "Swans are among the largest flying birds and can fly long distances during migration.",
      FactsImg : "https://images.unsplash.com/photo-1609525787259-da735bd41437?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFN3YW58ZW58MHx8MHx8fDA%3D",
      Longevity: "Swans can live up to 20 years or more.",
      LongevityImg:"https://images.unsplash.com/photo-1604134774179-44e6adb65dd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U3dhbnxlbnwwfHwwfHx8MA%3D%3D"

  }
  ,
    {
      title : "Penguin",
      TagName : "Penguin Harmony, Tuxedoed Wonders.",
      Desc : "Penguins, the dapper residents of icy realms, waddle through a world of black and white, showcasing communal bonds",
      Gif : "https://media.giphy.com/media/UsGtfvAkM63AsaE0wd/giphy.gif",
      Origin:"Penguins are native to the Southern Hemisphere, with various species in Antarctica, South America, Africa, Australia, and New Zealand.",
      OriginImg : "https://images.unsplash.com/photo-1598439210625-5067c578f3f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGVuZ3VpbnxlbnwwfHwwfHx8MA%3D%3D",
      Habitats : "Primarily found in and around the Southern Ocean, with some species also inhabiting temperate regions.",
      HabitatsImg : "https://images.unsplash.com/photo-1595792463990-07008351a4fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFBlbmd1aW58ZW58MHx8MHx8fDA%3D",
      Behaviors : "Flightless birds adapted to life in the water, known for their distinctive waddling walk.",
      BehaviorsImg: "https://images.unsplash.com/photo-1551415923-a2297c7fda79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UGVuZ3VpbnxlbnwwfHwwfHx8MA%3D%3D",
      Facts : "Penguins are excellent swimmers, reaching impressive speeds underwater.",
      FactsImg : "https://images.unsplash.com/photo-1586945577540-507effb6f393?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFBlbmd1aW58ZW58MHx8MHx8fDA%3D",
      Longevity: "Penguins can live up to 15 to 20 years, depending on the species.",
      LongevityImg:"https://images.unsplash.com/photo-1598439119086-35655b8c333d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFBlbmd1aW58ZW58MHx8MHx8fDA%3D"

  }
  ,
    {
      title : "Eagle",
      TagName : "Eagle Majesty, Soaring Heights Unveiled.",
      Desc : "Eagles, majestic symbols of strength and freedom, command the skies with keen vision.",
      Gif : "https://media.giphy.com/media/ivmbNx9ZjT75m/giphy.gif",
      Origin:"Eagles are found on every continent except Antarctica, with various species adapted to diverse ecosystems.",
      OriginImg : "https://images.unsplash.com/photo-1531884070720-875c7622d4c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RWFnbGV8ZW58MHx8MHx8fDA%3D",
      Habitats : "Habitats range from mountains and forests to open plains and coastal areas.",
      HabitatsImg : "https://plus.unsplash.com/premium_photo-1674458852390-ac22d6c502d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RWFnbGV8ZW58MHx8MHx8fDA%3D",
      Behaviors : "Powerful birds of prey known for their keen eyesight, strong beaks, and talons.",
      BehaviorsImg: "https://images.unsplash.com/photo-1589642314445-999ac13b0075?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEVhZ2xlfGVufDB8fDB8fHww",
      Facts : "Eagles are apex predators and play a crucial role in maintaining ecological balance.",
      FactsImg : "https://images.unsplash.com/photo-1567161569146-655f67e64017?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEVhZ2xlfGVufDB8fDB8fHww",
      Longevity: "Eagles can live up to 20 to 30 years, depending on the species.",
      LongevityImg:"https://images.unsplash.com/photo-1628703117067-fb7c9c20946e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEVhZ2xlfGVufDB8fDB8fHww"

  }
  ,
    {
      title : "Camel",
      TagName : "Camel Charm, Endurance in Every Step.",
      Desc : "Camels, the resilient nomads of arid landscapes, captivate with their enduring strength.",
      Gif : "https://www.bing.com/th/id/OGC.055a686291bcf889887d6d104647a145?pid=1.7&rurl=https%3a%2f%2fi.pinimg.com%2foriginals%2f05%2f5a%2f68%2f055a686291bcf889887d6d104647a145.gif&ehk=qBWLGms%2bPPzeA5E3JVgMNGp0roNIk9Gz8laTHEz504M%3d",
      Origin:"Camels are native to arid regions of the Middle East and North Africa.",
      OriginImg : "https://images.unsplash.com/photo-1598113972215-96c018fb1a0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2FtZWx8ZW58MHx8MHx8fDA%3D",
      Habitats : "Well-adapted to desert environments, they are also found in steppes and savannas.",
      HabitatsImg : "https://images.unsplash.com/photo-1599475504246-11c1217748c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENhbWVsfGVufDB8fDB8fHww",
      Behaviors : "Known for their ability to store water, camels are often used as pack animals in harsh terrains.",
      BehaviorsImg: "https://images.unsplash.com/photo-1495833066942-79abe24b0c1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fENhbWVsfGVufDB8fDB8fHww",
      Facts : "Camels have three eyelids and can close their nostrils to protect against sandstorms.",
      FactsImg : "https://plus.unsplash.com/premium_photo-1664301183877-85b1070c12b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2FtZWx8ZW58MHx8MHx8fDA%3D",
      Longevity: "Camels can live up to 40 to 50 years.",
      LongevityImg:"https://plus.unsplash.com/premium_photo-1661936495413-875706d59696?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2FtZWx8ZW58MHx8MHx8fDA%3D"

  } ,
  {
    title : "Porcupine",
    TagName : "Porcupine Prowess, Quills of Quiet Majesty.",
    Desc : "Porcupines, clad in a cloak of protective quills, embody a gentle resilience, navigating the night with quiet grace and a natural shield.",
    Gif : "https://www.bing.com/th/id/OGC.80a1a74cfa553501ab9b8688fdc7ada1?pid=1.7&rurl=https%3a%2f%2fww2.kqed.org%2fscience%2fwp-content%2fuploads%2fsites%2f35%2f2019%2f04%2fDL607_Porcupines_eat_leaf.gif&ehk=CfU7mVW1AZGCFR46Xg%2bJZHHqsCIO0PpTGd7eMxhCUBw%3d",
    Origin:"Porcupines are found in various habitats worldwide, including forests, deserts, and grasslands",
    OriginImg : "https://images.unsplash.com/photo-1605369179590-014a88d4560a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UG9yY3VwaW5lfGVufDB8fDB8fHww",
    Habitats : "They adapt to different environments, seeking shelter in hollow trees or burrows.",
    HabitatsImg : "https://images.unsplash.com/photo-1552301783-4009815286ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UG9yY3VwaW5lfGVufDB8fDB8fHww",
    Behaviors : "Nocturnal creatures with sharp quills for defense, they are herbivores feeding on bark, leaves, and plants.",
    BehaviorsImg: "https://images.unsplash.com/photo-1571233086095-e6d989da9f94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UG9yY3VwaW5lfGVufDB8fDB8fHww",
    Facts : "Contrary to a common myth, porcupines cannot shoot their quills but can raise and lower them as a defensive mechanism.",
    FactsImg : "https://images.unsplash.com/photo-1618527324482-d84be63d8077?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFBvcmN1cGluZXxlbnwwfHwwfHx8MA%3D%3D",
    Longevity: "Porcupines typically live around 5 to 7 years.",
    LongevityImg:"https://images.unsplash.com/photo-1606925268450-8d9d42dd8290?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFBvcmN1cGluZXxlbnwwfHwwfHx8MA%3D%3D"

} ,
{
  title : "Lion",
  TagName : "Lion Majesty, Roaring Echoes of the Savanna.",
  Desc : "Lions, the regal rulers of the grasslands, exhibit strength in their majestic mane and a communal spirit",
  Gif : "https://www.bing.com/th/id/OGC.c9b0813157fe1b333be08a861084c06d?pid=1.7&rurl=https%3a%2f%2fmedia1.tenor.com%2fimages%2fc9b0813157fe1b333be08a861084c06d%2ftenor.gif%3fitemid%3d7211163&ehk=vRFyn%2f3hvWrGIdlsnLrbB2%2fKq5PGVCTB0kCvNWPN3oo%3d",
  Origin:"Lions are native to parts of Africa and South Asia, living in savannas, grasslands, and open woodlands.",
  OriginImg : "https://images.unsplash.com/photo-1552410260-0fd9b577afa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TGlvbnxlbnwwfHwwfHx8MA%3D%3D",
  Habitats : "They thrive in a variety of environments, forming social groups known as prides.",
  HabitatsImg : "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TGlvbnxlbnwwfHwwfHx8MA%3D%3D",
  Behaviors : "Apex predators known for their hunting prowess, with females often taking on the role of primary hunters.",
  BehaviorsImg: "https://images.unsplash.com/photo-1585468274952-66591eb14165?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TGlvbnxlbnwwfHwwfHx8MA%3D%3D",
  Facts : " Lions are the only big cats that live in social groups, displaying complex social behaviors.",
  FactsImg : "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fExpb258ZW58MHx8MHx8fDA%3D",
  Longevity: "Lions in the wild typically live around 10 to 14 years.",
  LongevityImg:"https://images.unsplash.com/photo-1512614521719-2806f69d406b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fExpb258ZW58MHx8MHx8fDA%3D"

} ,
{
  title : "Monkey",
  TagName : "Monkey Magic, Canopy Dancers in the Jungle.",
  Desc : "Monkeys, the playful acrobats of the treetops, bring joy with their antics, showcasing intelligence",
  Gif : "https://www.bing.com/th/id/OGC.e20f3b98846f1f4ea2c93c5694649721?pid=1.7&rurl=https%3a%2f%2fmedia.giphy.com%2fmedia%2fMLevfeEsXHVhC%2fgiphy.gif&ehk=sBFtIehvub857uJxVKV88LepOAkC03IRYeaJQBYcTEg%3d",
  Origin:"Monkeys are found in various habitats across Africa, Asia, and the Americas.",
  OriginImg : "https://images.unsplash.com/photo-1516708274537-6f91e34ccaf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fE1vbmtleXxlbnwwfHwwfHx8MA%3D%3D",
  Habitats : "They inhabit rainforests, savannas, mountains, and urban areas, displaying adaptability.",
  HabitatsImg : "https://images.unsplash.com/flagged/photo-1566127992631-137a642a90f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TW9ua2V5fGVufDB8fDB8fHww",
  Behaviors : "Highly social animals, monkeys are known for their agility, communication through vocalizations, and complex social structures.",
  BehaviorsImg: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TW9ua2V5fGVufDB8fDB8fHww",
  Facts : "Some monkey species use tools, displaying a level of intelligence in problem-solving.",
  FactsImg : "https://plus.unsplash.com/premium_photo-1687773950863-0cf0e0a088ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8TW9ua2V5fGVufDB8fDB8fHww",
  Longevity: "Depending on the species, monkeys can live up to 10 to 40 years.",
  LongevityImg:"https://images.unsplash.com/photo-1531989417401-0f85f7e673f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fE1vbmtleXxlbnwwfHwwfHx8MA%3D%3D"

} ,
{
  title : "Tiger",
  TagName : "Tiger Grace, Stripes of Silent Majesty.",
  Desc : "Tigers, the elusive guardians of dense forests, move with silent elegance.",
  Gif : "https://www.bing.com/th/id/OGC.4c13e2dd0ebe125e625e4d8cbf1f0f6b?pid=1.7&rurl=https%3a%2f%2fmedia.giphy.com%2fmedia%2fR9z50rPINd5ew%2fgiphy.gif&ehk=YEMseTCtKwjUxb4ismN6tGEJ7wil7fu0LLPURugXqYI%3d",
  Origin:"Tigers are native to parts of Asia, including India, Russia, and Southeast Asia.",
  OriginImg : "https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFRpZ2VyfGVufDB8fDB8fHww",
  Habitats : "They inhabit a range of ecosystems, including mangrove swamps, grasslands, and dense forests.",
  HabitatsImg : "https://images.unsplash.com/photo-1602612639468-cd507b1cada9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFRpZ2VyfGVufDB8fDB8fHww",
  Behaviors : "Solitary and powerful predators, tigers are known for their distinctive striped coat.",
  BehaviorsImg: "https://images.unsplash.com/photo-1551972251-12070d63502a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFRpZ2VyfGVufDB8fDB8fHww",
  Facts : "Tigers are excellent swimmers and often enjoy being in the water.",
  FactsImg : "https://th.bing.com/th/id/OIP.jnYHwCKRDTxgf6IdTecvCAHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.4&pid=1.7",
  Longevity: "Tigers in the wild typically live around 10 to 15 years.",
  LongevityImg:"https://plus.unsplash.com/premium_photo-1661963643193-8bedab8db800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFRpZ2VyfGVufDB8fDB8fHww"

} ,
{
  title : "Elephant",
  TagName : "Elephant Majesty, Gentle Giants of Wisdom.",
  Desc : "Elephants, the wise wanderers of diverse landscapes, command attention with their large ears, trunks, and a deep familial connection that speaks of empathy and memory.",
  Gif : "https://th.bing.com/th/id/R.eb40d7d0f4b1ed201498d47d0f1a9232?rik=TCI5MQEgi6jhXQ&riu=http%3a%2f%2fbestanimations.com%2fAnimals%2fMammals%2fElephants%2felephants%2felephant-animated-gif-24.gif&ehk=mmdfiqMxX3%2falt6e7Dv3QudLJ%2fE0VOnuAK4HfOAiG58%3d&risl=&pid=ImgRaw&r=0",
  Origin:"Elephants are native to Africa and Asia, living in a variety of habitats, including savannas, forests, and grasslands.",
  OriginImg : "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RWxlcGhhbnR8ZW58MHx8MHx8fDA%3D",
  Habitats : "They are highly adaptable, able to thrive in both arid and dense vegetation areas.",
  HabitatsImg : "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RWxlcGhhbnR8ZW58MHx8MHx8fDA%3D",
  Behaviors : "Social and intelligent animals, elephants are known for their strong family bonds and intricate communication.",
  BehaviorsImg: "https://images.unsplash.com/photo-1581852017103-68ac65514cf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RWxlcGhhbnR8ZW58MHx8MHx8fDA%3D",
  Facts : "Elephants have a remarkable memory and are capable of displaying emotions such as grief.",
  FactsImg : "https://plus.unsplash.com/premium_photo-1669740462428-0ee18a8d742e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RWxlcGhhbnR8ZW58MHx8MHx8fDA%3D",
  Longevity: "Elephants can live up to 60 years or more.",
  LongevityImg:"https://plus.unsplash.com/premium_photo-1666690195791-9b812e5382b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEVsZXBoYW50fGVufDB8fDB8fHww"

} ,
{
  title : "Panda",
  TagName : "Panda Peace, Monochrome Marvels of Bamboo Groves.",
  Desc : "Pandas, the bamboo connoisseurs, evoke tranquility with their black-and-white charm, embodying a rare blend of gentle demeanor and environmental harmony.",
  Gif : "https://www.bing.com/th/id/OGC.73264f9e46d2aa9ccdba865079cf5f18?pid=1.7&rurl=https%3a%2f%2fmedia0.giphy.com%2fmedia%2fkfLIA5rPSEdYrGvWLw%2fgiphy.gif&ehk=j4PsM3o4HKKgOXooJdtcrVAdAN2%2fPp8tq5xOZm9b5zI%3d",
  Origin:"Giant pandas are native to China, residing in mountainous regions with bamboo forests.",
  OriginImg : "https://images.unsplash.com/photo-1597953601374-1ff2d5640c85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGFuZGF8ZW58MHx8MHx8fDA%3D",
  Habitats : "They are primarily found in bamboo-dominated ecosystems but may also inhabit other forested areas.",
  HabitatsImg : "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGFuZGF8ZW58MHx8MHx8fDA%3D",
  Behaviors : "Mainly herbivores, pandas have a specialized diet consisting mainly of bamboo.",
  BehaviorsImg: "https://images.unsplash.com/photo-1540126034813-121bf29033d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8UGFuZGF8ZW58MHx8MHx8fDA%3D",
  Facts : "Despite their bear classification, pandas have a 'thumb' adapted for holding bamboo.",
  FactsImg : "https://images.unsplash.com/photo-1528359645462-5ff224bf906e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFBhbmRhfGVufDB8fDB8fHww",
  Longevity: "Giant pandas in the wild typically live around 15 to 20 years.",
  LongevityImg:"https://images.unsplash.com/photo-1540125895252-edefe1c0132e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFBhbmRhfGVufDB8fDB8fHww"

} ,
{
  title : "Horse",
  TagName : "Horse Harmony, Hooves that Echo Through History.",
  Desc : "Horses, the timeless companions of humanity, embody grace and strength, galloping through centuries as loyal partners in exploration and companionship.",
  Gif : "https://www.bing.com/th/id/OGC.c614bccb67a4f127f7fcb8d5f4b69a2f?pid=1.7&rurl=https%3a%2f%2fmedia.giphy.com%2fmedia%2fR8bcfuGTZONyw%2fgiphy.gif&ehk=av9FotvROOmfyW9gfRgZtApTSp1ciy6zAtP5Ot6x9t8%3d",
  Origin:"Horses were originally native to the steppes of Central Asia and have been domesticated and spread worldwide.",
  OriginImg : "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SG9yc2V8ZW58MHx8MHx8fDA%3D",
  Habitats : "Domesticated horses are found in various environments, including grasslands, farms, and urban areas.",
  HabitatsImg : "https://images.unsplash.com/photo-1566251037378-5e04e3bec343?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEhvcnNlfGVufDB8fDB8fHww",
  Behaviors : "Social animals with a strong flight response, horses have been crucial in transportation and agriculture.",
  BehaviorsImg: "https://images.unsplash.com/photo-1547581849-38ba650ad0de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEhvcnNlfGVufDB8fDB8fHww",
  Facts : "Horses have a unique digestive system known as hindgut fermentation.",
  FactsImg : "https://images.unsplash.com/photo-1553284966-19b8815c7817?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEhvcnNlfGVufDB8fDB8fHww",
  Longevity: "Horses typically live around 25 to 30 years.",
  LongevityImg:"https://plus.unsplash.com/premium_photo-1661855036857-7855c8de519e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEhvcnNlfGVufDB8fDB8fHww"

} ,
{
  title : "Fox",
  TagName : "Fox Finesse, Cunning Whispers in the Shadows.",
  Desc : "Foxes, the crafty dwellers of diverse landscapes, move with agility and intelligence, weaving tales of adaptability and the art of survival.",
  Gif : "https://media.giphy.com/media/WzVSEk14Yjv2w/giphy.gif",
  Origin:"Foxes are found worldwide, adapting to various environments, including forests, deserts, and urban areas.",
  OriginImg : "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Rm94fGVufDB8fDB8fHww",
  Habitats : "They are highly adaptable and have successfully colonized diverse habitats.",
  HabitatsImg : "https://images.unsplash.com/photo-1603169812512-d6560fd13fa2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Rm94fGVufDB8fDB8fHww",
  Behaviors : "Nocturnal and solitary hunters, foxes are known for their cunning and agility.",
  BehaviorsImg: "https://plus.unsplash.com/premium_photo-1669310457639-7dfa238f30bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Rm94fGVufDB8fDB8fHww",
  Facts : "Some fox species are known to cache food for later consumption.",
  FactsImg : "https://images.unsplash.com/photo-1605101479435-005f9c563944?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Rm94fGVufDB8fDB8fHww",
  Longevity: "In the wild, foxes typically live around 3 to 4 years.",
  LongevityImg:"https://images.unsplash.com/photo-1590959423699-2757e1be80f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEZveHxlbnwwfHwwfHx8MA%3D%3D "

} ,
{
  title : "Zebra",
  TagName : "Zebra Zeal, Stripes of Unity in the Savannah Symphony",
  Desc : "Zebras, the enchanting equids of the plains, mesmerize with their contrasting stripes, showcasing a harmonious blend within the African savannah's vibrant tapestry.",
  Gif : "https://www.bing.com/th/id/OGC.2932a8fe5e50b49b066ee366feb7b45f?pid=1.7&rurl=https%3a%2f%2fi.pinimg.com%2foriginals%2f95%2fff%2fae%2f95ffaec419299c9a0e13192a9692ce38.gif&ehk=qwQfoJTpCty%2fM4%2f1GJ6lqGumhm4EwJj%2bYJWM%2fAnTbcM%3d",
  Origin:"Zebras are native to Africa and are found in various regions, from savannas to grasslands.",
  OriginImg : "https://images.unsplash.com/photo-1526095179574-86e545346ae6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8WmVicmF8ZW58MHx8MHx8fDA%3D",
  Habitats : "They inhabit a range of ecosystems, displaying adaptability to both grassy plains and wooded areas.",
  HabitatsImg : "https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8WmVicmF8ZW58MHx8MHx8fDA%3D",
  Behaviors : "Social animals, zebras often form groups for protection against predators. They are known for their distinctive black-and-white striped coat.",
  BehaviorsImg: "https://plus.unsplash.com/premium_photo-1664302675980-74391b8023b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8WmVicmF8ZW58MHx8MHx8fDA%3D",
  Facts : "Each zebra's stripe pattern is unique, similar to human fingerprints. The stripes may serve as a form of camouflage in their natural environment.",
  FactsImg : "https://images.unsplash.com/photo-1586943353950-95bdbe3207a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFplYnJhfGVufDB8fDB8fHww",
  Longevity: "In the wild, zebras typically live around 20 to 30 years.",
  LongevityImg:"https://images.unsplash.com/photo-1576616241123-085ee8c75ce4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFplYnJhfGVufDB8fDB8fHww"

},
{
  title : "ClownFish",
  TagName : "Dive into Joy with Clownfish!",
  Desc :"Vibrant and social, Clownfish bring a splash of color to coral reefs, forming endearing partnerships with their sea anemone homes.",
  Gif : "https://i.pinimg.com/originals/14/9e/52/149e525cf162720f865b2a3b1b6d25b9.gif",
  Origin : "Found in the warm waters of the Pacific and Indian Oceans, especially around coral reefs.",
  OriginImg : "https://images.unsplash.com/photo-1544552866-d3ed42536cfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2xvd25GaXNofGVufDB8fDB8fHww",
  Habitats: "Inhabits anemones within coral reefs.",
  HabitatsImg : "https://images.unsplash.com/photo-1501248457956-c25fd1de2930?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENsb3duRmlzaHxlbnwwfHwwfHx8MA%3D%3D",
  Behaviors : "Form symbiotic relationships with anemones for protection.",
  BehaviorsImg : "https://images.unsplash.com/photo-1596414086775-3e321ab08f36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q2xvd25GaXNofGVufDB8fDB8fHww",
  Facts : "Can change sex, with males transforming into females.",
  FactsImg : "https://images.unsplash.com/photo-1554283231-de01aab7c2a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fENsb3duRmlzaHxlbnwwfHwwfHx8MA%3D%3D",
  Longevity : "About 6-10 years.",
  LongevityImg : "https://images.unsplash.com/photo-1613117908785-381bafe45361?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENsb3duRmlzaHxlbnwwfHwwfHx8MA%3D%3D"
},
{
  title : "AnglerFish",
  TagName : "Illuminating the Depths of Mystery!",
  Desc :"Master of the abyss, the Anglerfish lures curiosity with its bioluminescent bait in the darkest corners of the ocean.",
  Gif : "https://media1.giphy.com/media/26u48SfkJ60PQr9V6/200.gif?cid=790b76117i9br9kn191wzrdzux7t09ejtpnow0p09aib9kvq&rid=200.gif&ct=g",
  Origin : "Deep-sea habitats across the world's oceans.",
  OriginImg : "https://th.bing.com/th/id/OIP.vjdguEvtbmbmOyOneQKXnwHaEo?w=299&h=187&c=7&r=0&o=5&dpr=1.4&pid=1.7",
  Habitats: "Dwells in the abyssal zone, using a bioluminescent lure to attract prey.",
  HabitatsImg : "https://th.bing.com/th/id/OIP.ZO84qQIthfXf4yAsQxft6wHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.4&pid=1.7",
  Behaviors : "Females have a unique adaptation where smaller males fuse to their bodies.",
  BehaviorsImg : "https://th.bing.com/th/id/OIP.BqLAoEwwYGdpwnvzenTUWgHaEc?w=239&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
  Facts : "Female anglerfish can be much larger than males.",
  FactsImg : "https://th.bing.com/th/id/OIP.eMVaLuujK3zY0jqNdGOCgAHaEK?w=284&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
  Longevity : "Varies among species, but generally long-lived in the deep sea.",
  LongevityImg : "https://th.bing.com/th/id/OIP.nMchUhHrV8dfEiq-2Flv7wHaEK?w=305&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7"
},

{
  title : "GoldFish",
  TagName : "A Glimpse into Aquatic Elegance!",
  Desc :"Adored for their shimmering scales, Goldfish bring tranquility to freshwater habitats, enchanting with their fluid grace.",
  Gif : "https://bestanimations.com/media/goldfish/1715338137pretty-goldfish-gif-2.gif",
  Origin : "Domesticated from wild carp in East Asia.",
  OriginImg : "https://images.unsplash.com/photo-1625369708811-65ebfc5ca632?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8R29sZEZpc2h8ZW58MHx8MHx8fDA%3D",
  Habitats: "Commonly kept in freshwater aquariums.",
  HabitatsImg : "https://images.unsplash.com/photo-1579161256825-57ba3094f057?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8R29sZEZpc2h8ZW58MHx8MHx8fDA%3D",
  Behaviors : "Social animals with a strong sense of smell.",
  BehaviorsImg : "https://images.unsplash.com/photo-1563672285027-d35d9c0e74f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEdvbGRGaXNofGVufDB8fDB8fHww",
  Facts : "Have a three-second memory is a myth; they can remember for months.",
  FactsImg : "https://images.unsplash.com/photo-1606136025851-3c3d10b29137?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEdvbGRGaXNofGVufDB8fDB8fHww",
  Longevity : "Can live for decades with proper care.",
  LongevityImg : "https://images.unsplash.com/photo-1436891461396-6df41158de09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEdvbGRGaXNofGVufDB8fDB8fHww"
},
{
  title : "BlowFish",
  TagName : "Puffing up the Oceanic Charm!",
  Desc :"Masters of self-defense, Blowfish mesmerize with their unique ability to inflate, adding a touch of whimsy to marine life",
  Gif : "https://66.media.tumblr.com/8347fa7cade1b04f3a0891d9d7bd574a/tumblr_nsruruVlia1rr8kq5o1_500.gif",
  Origin : "Found in tropical and subtropical waters.",
  OriginImg : "https://images.unsplash.com/photo-1701279728943-e56f1708d89d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEJsb3dGaXNofGVufDB8fDB8fHww",
  Habitats: "Inhabit both saltwater and freshwater environments.",
  HabitatsImg : "https://images.unsplash.com/photo-1701280424988-af8384b32a94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEJsb3dGaXNofGVufDB8fDB8fHww",
  Behaviors : "Inflate themselves when threatened.",
  BehaviorsImg : "https://images.unsplash.com/photo-1567517411992-27bf4f633831?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Qmxvd0Zpc2h8ZW58MHx8MHx8fDA%3D",
  Facts : "Contain tetrodotoxin, a potent neurotoxin.",
  FactsImg : "https://images.unsplash.com/photo-1543292535-b51f4645c5c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Qmxvd0Zpc2h8ZW58MHx8MHx8fDA%3D",
  Longevity : "Varies among species.",
  LongevityImg : "https://images.unsplash.com/photo-1566574347516-47cf9fb86734?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Qmxvd0Zpc2h8ZW58MHx8MHx8fDA%3D"
},
{
  title : "Eel",
  TagName : "Gliding Through Liquid Shadows!",
  Desc :"Sleek and mysterious, Eels navigate both freshwater and saltwater realms, embodying the enigma of aquatic beauty.",
  Gif : "https://th.bing.com/th/id/R.51951a94ea0e0a0169b040cc11c7ade9?rik=gsAl6XzWMLDqYQ&riu=http%3a%2f%2fimg1.joyreactor.com%2fpics%2fpost%2fgif-ribbon-eel-sea-641879.gif&ehk=JAoUl%2biZ1rJOwMdfCBrwDjBYGXYoYDnoBNems1v3%2fP8%3d&risl=1&pid=ImgRaw&r=0",
  Origin : "Found in both freshwater and saltwater worldwide.",
  OriginImg : "https://images.unsplash.com/photo-1516683169270-7514e272a5fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RWVsfGVufDB8fDB8fHww",
  Habitats: "Inhabit rivers, lakes, and oceans.",
  HabitatsImg : "https://images.unsplash.com/photo-1546387907-f04f2a7589e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RWVsfGVufDB8fDB8fHww",
  Behaviors : "Some species migrate thousands of miles.",
  BehaviorsImg : "https://images.unsplash.com/photo-1511812856683-342df707ca0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RWVsfGVufDB8fDB8fHww",
  Facts : "Electric eels can generate electric shocks for navigation and hunting.",
  FactsImg : "https://images.unsplash.com/photo-1559897202-7fc939ce9db2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RWVsfGVufDB8fDB8fHww",
  Longevity : "Can live for several decades.",
  LongevityImg : ""
},
{
  title : "Seaurchin",
  TagName : "Nature's Delicate Sculptors of the Ocean Floor!",
  Desc :"Adorned with intricate spines, Sea Urchins play a vital role in marine ecosystems, delicately shaping the underwater landscape.",
  Gif : "https://media.giphy.com/media/4Fx0XwUkus5CU/giphy.gif",
  Origin : "Found in oceans globally.",
  OriginImg : "",
  Habitats: "Inhabit rocky seabeds, coral reefs, and seagrass beds.",
  HabitatsImg : "",
  Behaviors : "Feed on algae and small particles.",
  BehaviorsImg : "",
  Facts : "Have a complex mouth structure called Aristotle's lantern.",
  FactsImg : "",
  Longevity : "Varies among species.",
  LongevityImg : "https://images.unsplash.com/photo-1526590947186-27bdb2de3b33?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEVlbHxlbnwwfHwwfHx8MA%3D%3D"
},
{
  title : "JellyFish",
  TagName : "Drifting Elegance in Ocean Currents!",
  Desc :"Translucent and graceful, Jellyfish gracefully float through the sea, embodying the ethereal dance of ocean currents.",
  Gif : "https://49.media.tumblr.com/d99437a252a5acd1ef1e9485d61cf64d/tumblr_o01qty2NzP1ucd1kno1_500.gif",
  Origin : "Found in oceans worldwide.",
  OriginImg : "https://plus.unsplash.com/premium_photo-1684993670772-ade94ef56cef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SmVsbHlGaXNofGVufDB8fDB8fHww",
  Habitats: "Drift in open water or cling to substrates.",
  HabitatsImg : "https://images.unsplash.com/photo-1532191343016-47bf741b8b3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SmVsbHlGaXNofGVufDB8fDB8fHww",
  Behaviors : "Propel themselves using pulsations.",
  BehaviorsImg : "https://images.unsplash.com/photo-1508311603478-ce574376c3cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEplbGx5RmlzaHxlbnwwfHwwfHx8MA%3D%3D",
  Facts : "Bioluminescent in some species.",
  FactsImg : "https://plus.unsplash.com/premium_photo-1684992858411-3e3ddf37c4c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEplbGx5RmlzaHxlbnwwfHwwfHx8MA%3D%3D",
  Longevity : "Typically a few months to a few years.",
  LongevityImg : "https://plus.unsplash.com/premium_photo-1683894555681-d7bad2410d10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEplbGx5RmlzaHxlbnwwfHwwfHx8MA%3D%3D"
},
{
  title : "Dolphin",
  TagName : "Smiles of the Ocean!",
  Desc :"Intelligent and social, Dolphins captivate with their playful antics and heartwarming interactions, spreading joy across the waves",
  Gif : "https://bestanimations.com/Animals/Mammals/Dolphins/dolphin/dolphin-animated-gif-13.gif",
  Origin : "Found in oceans globally.",
  OriginImg : "https://images.unsplash.com/photo-1562742686-0b38a29473ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fERvbHBoaW58ZW58MHx8MHx8fDA%3D",
  Habitats: "Inhabit both coastal and offshore waters.",
  HabitatsImg : "https://images.unsplash.com/photo-1591106167857-f1f9257e671b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fERvbHBoaW58ZW58MHx8MHx8fDA%3D",
  Behaviors : "Highly intelligent and social animals.",
  BehaviorsImg : "https://images.unsplash.com/photo-1591706405280-f03acb082051?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RG9scGhpbnxlbnwwfHwwfHx8MA%3D%3D",
  Facts : "Use echolocation for communication and hunting.",
  FactsImg : "https://images.unsplash.com/photo-1539131258078-89aaa90dd845?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fERvbHBoaW58ZW58MHx8MHx8fDA%3D",
  Longevity : "Can live for several decades.",
  LongevityImg : "https://images.unsplash.com/photo-1591106167857-f1f9257e671b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fERvbHBoaW58ZW58MHx8MHx8fDA%3D"
},
{
  title : "Whale",
  TagName : "Guardians of the Vast Blue Horizon!",
  Desc :"Majestic and colossal, Whales traverse the oceans with gentle strength, harmonizing the symphony of marine life.",
  Gif : "https://media3.giphy.com/media/fA8pSJwdjXrfKFmBVz/giphy.gif",
  Origin : "Found in oceans worldwide.",
  OriginImg : "https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2hhbGV8ZW58MHx8MHx8fDA%3D",
  Habitats: "Migrate between feeding and breeding grounds.",
  HabitatsImg : "https://images.unsplash.com/photo-1617925109341-2b99305cdee2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8V2hhbGV8ZW58MHx8MHx8fDA%3D",
  Behaviors : "Singing, breaching, and tail slapping are common behaviors.",
  BehaviorsImg : "https://plus.unsplash.com/premium_photo-1664302949339-34d7bc4e66fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8V2hhbGV8ZW58MHx8MHx8fDA%3D",
  Facts : "Blue whales are the largest animals on Earth.",
  FactsImg : "https://images.unsplash.com/photo-1602587557695-9fa83da489c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8V2hhbGV8ZW58MHx8MHx8fDA%3D",
  Longevity : "Varies among species, some can live over a century.",
  LongevityImg : "https://images.unsplash.com/photo-1606576974184-17d3ca6a9fc1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFdoYWxlfGVufDB8fDB8fHww"
},
{
  title : "Crocodile",
  TagName : "Ambassadors of Ancient Waters!",
  Desc :"Survivors through the ages, Crocodiles embody stealth and resilience, patrolling riverbanks with ancient grace.",
  Gif : "https://img.buzzfeed.com/buzzfeed-static/static/2017-10/26/23/asset/buzzfeed-prod-fastlane-02/anigif_sub-buzz-21352-1509076593-2.gif",
  Origin : "Found in tropical and subtropical region",
  OriginImg : "https://images.unsplash.com/photo-1614065613125-17553fbc59f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q3JvY29kaWxlfGVufDB8fDB8fHww",
  Habitats: "Inhabit freshwater habitats like rivers and swamps.",
  HabitatsImg : "https://images.unsplash.com/photo-1605649461784-7d5e4df56c97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q3JvY29kaWxlfGVufDB8fDB8fHww",
  Behaviors : "Ambush predators with powerful jaws.",
  BehaviorsImg : "https://images.unsplash.com/photo-1611069648374-733e7bb73e5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q3JvY29kaWxlfGVufDB8fDB8fHww",
  Facts : "Have a strong maternal instinct.",
  FactsImg : "https://images.unsplash.com/photo-1595433409683-943ded8e7b1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENyb2NvZGlsZXxlbnwwfHwwfHx8MA%3D%3D",
  Longevity : "Can live for several decades.",
  LongevityImg : "https://images.unsplash.com/photo-1524697958400-63970dc9e178?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fENyb2NvZGlsZXxlbnwwfHwwfHx8MA%3D%3D"
},
{
  title : "BettaFish",
  TagName : "A Kaleidoscope of Aquatic Splendor!",
  Desc :"With vibrant hues and intricate fin displays, Betta Fish bring a burst of color and personality to freshwater habitats",
  Gif : "https://i.pinimg.com/originals/1c/2a/25/1c2a253963b35f874416cdac7ccaf35b.gif",
  Origin : "Native to Southeast Asia.",
  OriginImg : "https://th.bing.com/th/id/OIP.ImuAdAKG1E9Svmn5YvkH_gHaFq?w=247&h=190&c=7&r=0&o=5&dpr=1.4&pid=1.7",
  Habitats: "Inhabit slow-moving or stagnant waters.",
  HabitatsImg : "https://th.bing.com/th/id/OIP.eIc1cJe2i8BtoSNIGKErUgHaHa?w=183&h=183&c=7&r=0&o=5&dpr=1.4&pid=1.7",
  Behaviors : "Known for their vibrant colors and territorial behavior.",
  BehaviorsImg : "https://th.bing.com/th/id/OIP.T43Fh469FI6rlyivHyxUXgHaEK?w=308&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
  Facts : "Males have elaborate fin displays during courtship.",
  FactsImg : "https://th.bing.com/th/id/OIP.rf85xpsNTAQY8OvT6-Rd4gHaE7?w=203&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
  Longevity : "Typically 2-4 years, longer with proper care.",
  LongevityImg : "https://th.bing.com/th/id/OIP.IOeM15F19gK3UuEiH_QVCwHaE7?w=293&h=196&c=7&r=0&o=5&dpr=1.4&pid=1.7"
},
{
  title : "Turtle",
  TagName : "Guardians of Oceans and Shores",
  Desc :"Slow and steadfast, Turtles embody wisdom as they navigate the seas, symbolizing the delicate balance of marine ecosystems.",
  Gif : "https://media3.giphy.com/media/3o7WILK5HhHf46Gb4c/giphy.gif",
  Origin : "Found in oceans, seas, and freshwater habitats globally.",
  OriginImg : "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VHVydGxlfGVufDB8fDB8fHww",
  Habitats: "Nest on beaches and migrate long distances.",
  HabitatsImg : "https://plus.unsplash.com/premium_photo-1684943834601-3a5e8e8f7005?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VHVydGxlfGVufDB8fDB8fHww",
  Behaviors : "Breathe air and lay eggs on land.",
  BehaviorsImg : "https://plus.unsplash.com/premium_photo-1683894555693-831f43eed903?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8VHVydGxlfGVufDB8fDB8fHww",
  Facts : "Some species can live over a century.",
  FactsImg : "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VHVydGxlfGVufDB8fDB8fHww",
  Longevity : "Varies among species.",
  LongevityImg : "https://images.unsplash.com/photo-1573551089778-46a7abc39d9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFR1cnRsZXxlbnwwfHwwfHx8MA%3D%3D"
},
{
  title : "MantaRay",
  TagName : "Gliding with Grace in Open Waters!",
  Desc :"Manta Rays, with their expansive wings, evoke awe as they gracefully soar through the open ocean, embodying aquatic majesty",
  Gif : "https://www.newscientist.com/wp-content/uploads/2016/03/manta.gif",
  Origin : "Found in tropical and subtropical waters.",
  OriginImg : "https://images.unsplash.com/photo-1567784055803-b9d0a50d88e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWFudGFSYXl8ZW58MHx8MHx8fDA%3D",
  Habitats: "Inhabit open ocean and coral reef areas.",
  HabitatsImg : "https://plus.unsplash.com/premium_photo-1661962624481-d8c21480d0d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWFudGFSYXl8ZW58MHx8MHx8fDA%3D",
  Behaviors : "Filter feeders, often seen somersaulting.",
  BehaviorsImg : "https://images.unsplash.com/photo-1544552866-fef1d68c69b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFudGFSYXl8ZW58MHx8MHx8fDA%3D",
  Facts : "Have the largest brain-to-body ratio of any fish.",
  FactsImg : "https://images.pexels.com/photos/6229930/pexels-photo-6229930.jpeg?auto=compress&cs=tinysrgb&w=600",
  Longevity : "Can live for several decades.",
  LongevityImg : "https://wallpapercave.com/wp/wp2372093.jpg"
},
{
  title : "Seahorse",
  TagName : "Whimsical Wonders of Ocean Gardens!",
  Desc :"With unique courting rituals, Seahorses enchant with their charm, bringing a touch of whimsy to underwater realms.",
  Gif : "https://i.pinimg.com/originals/61/ae/26/61ae262a8bbc66f390482232a290b4be.gif",
  Origin : "Found in shallow tropical and temperate waters.",
  OriginImg : "https://images.unsplash.com/photo-1595503147345-445c90a74a0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U2VhaG9yc2V8ZW58MHx8MHx8fDA%3D",
  Habitats: "Inhabit seagrasses and coral reefs.",
  HabitatsImg : "https://images.unsplash.com/photo-1501562146-c66d8ef18068?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFNlYWhvcnNlfGVufDB8fDB8fHww",
  Behaviors : "Unique in their upright posture and monogamous behavior.",
  BehaviorsImg : "https://images.unsplash.com/photo-1568605504495-2ac1d267a492?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFNlYWhvcnNlfGVufDB8fDB8fHww",
  Facts : "Male seahorses carry and give birth to the offspring.",
  FactsImg : "https://images.unsplash.com/photo-1615708257979-d365fa66d1cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFNlYWhvcnNlfGVufDB8fDB8fHww",
  Longevity : "Typically 1-5 years.",
  LongevityImg : "https://images.unsplash.com/photo-1635506167158-635543e6b67c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFNlYWhvcnNlfGVufDB8fDB8fHww"
},
{
  title : "Octopus",
  TagName : "Masters of Camouflage and Intelligence!",
  Desc :"Masters of disguise, Octopuses captivate with their intelligence and adaptability, creating an ever-changing spectacle in ocean depths.",
  Gif : "https://media2.giphy.com/media/26n6XsLU5UQ63c7V6/giphy.gif ",
  Origin : "Found in oceans globally.",
  OriginImg : "https://images.unsplash.com/photo-1628944681206-2ee8d63b0a6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8T2N0b3B1c3xlbnwwfHwwfHx8MA%3D%3D",
  Habitats: "Inhabit various marine environments.",
  HabitatsImg : "https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8T2N0b3B1c3xlbnwwfHwwfHx8MA%3D%3D",
  Behaviors : "Highly intelligent with the ability to change color and texture.",
  BehaviorsImg : "https://images.unsplash.com/photo-1547716752-9a0331effbef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8T2N0b3B1c3xlbnwwfHwwfHx8MA%3D%3D",
  Facts : "Can fit through very small openings due to their soft bodies.",
  FactsImg : "https://images.unsplash.com/photo-1583180527676-8dbfe98c2c87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8T2N0b3B1c3xlbnwwfHwwfHx8MA%3D%3D",
  Longevity : "Usually short-lived, a few years at most.",
  LongevityImg : "https://images.unsplash.com/photo-1510637234398-d25c9570a0a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fE9jdG9wdXN8ZW58MHx8MHx8fDA%3D"
},
{
  title : "Manatee",
  TagName : "Gentle Giants of Coastal Calm!",
  Desc :"Known for their gentle nature, Manatees embody coastal serenity, gliding through waters with a tranquil grace.",
  Gif : "https://media2.giphy.com/media/1xncWRBE8c6Xrg26IT/giphy.gif",
  Origin : "Found in warm, shallow coastal waters.",
  OriginImg : "https://images.unsplash.com/photo-1502727002602-2e55a2b341a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFuYXRlZXxlbnwwfHwwfHx8MA%3D%3D",
  Habitats: "Inhabit rivers, estuaries, and coastal areas.",
  HabitatsImg : "https://images.unsplash.com/photo-1561486462-89834a03cb72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWFuYXRlZXxlbnwwfHwwfHx8MA%3D%3D",
  Behaviors : "Herbivores known for slow movements.",
  BehaviorsImg : "https://images.unsplash.com/photo-1601768417564-a3cbbc441f9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TWFuYXRlZXxlbnwwfHwwfHx8MA%3D%3D",
  Facts : "Often referred to as 'sea cows'.",
  FactsImg : "https://images.unsplash.com/photo-1514854560434-dac06a4c6701?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TWFuYXRlZXxlbnwwfHwwfHx8MA%3D%3D",
  Longevity : "Can live for several decades.",
  LongevityImg : "https://images.unsplash.com/photo-1547409706-33cc240a1f5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fE1hbmF0ZWV8ZW58MHx8MHx8fDA%3D"
},
{
  title : "Shark",
  TagName : "Apex Predators of the Deep Blue!",
  Desc :"Majestic and powerful, Sharks command respect as rulers of the marine kingdom, embodying the apex predator's prowess.",
  Gif : "https://cdn.acidcow.com/pics/20190501/sharks_06.gif",
  Origin : "Found in oceans worldwide.",
  OriginImg : "https://images.unsplash.com/photo-1560275619-4662e36fa65c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2hhcmt8ZW58MHx8MHx8fDA%3D",
  Habitats: "Inhabit various marine environments.",
  HabitatsImg : "https://plus.unsplash.com/premium_photo-1661937904930-dce9d5e86990?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U2hhcmt8ZW58MHx8MHx8fDA%3D",
  Behaviors : "Apex predators with diverse hunting strategies.",
  BehaviorsImg : "https://images.unsplash.com/photo-1531959870249-9f9b729efcf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2hhcmt8ZW58MHx8MHx8fDA%3D",
  Facts : "Some species can detect electrical fields produced by other animals.",
  FactsImg : "https://images.unsplash.com/photo-1564731071754-001b53a902fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U2hhcmt8ZW58MHx8MHx8fDA%3D",
  Longevity : "Varies among species.",
  LongevityImg : "https://images.unsplash.com/photo-1563186627-0d185db94083?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U2hhcmt8ZW58MHx8MHx8fDA%3D"
},
{
  title : "Narwhal",
  TagName : "The Unicorns of Arctic Waters!",
  Desc :"With their legendary tusks, Narwhals navigate Arctic realms, captivating with their mythical presence in icy waters.",
  Gif : "https://media.giphy.com/media/RwArfY1RpSbyo/giphy.gif",
  Origin : "Arctic waters near Canada, Greenland, and Russia.",
  OriginImg : "https://th.bing.com/th/id/OIP.KFeDLTa4W12myWEtPpNAaQHaEK?rs=1&pid=ImgDetMain",
  Habitats: "Often found in sea ice-covered regions.",
  HabitatsImg : "https://cdn.mos.cms.futurecdn.net/CBWaUkCyostaK4vcRZRseL-1200-80.jpg",
  Behaviors : "Known for the long, spiral tusk of males.",
  BehaviorsImg : "https://th.bing.com/th/id/R.d84aff99a978852870bddcc3b54d543a?rik=t0fbmtQ6jTflcw&riu=http%3a%2f%2fyesofcorsa.com%2fwp-content%2fuploads%2f2018%2f02%2fNarwhal-Best-Wallpaper-1024x576.jpg&ehk=rEEIElkIX4u%2bJ1YKCg9P%2fcncxbdfZPOO4rxBYizU5cE%3d&risl=&pid=ImgRaw&r=0",
  Facts : "Tusk function is not fully understood, possibly used in communication.",
  FactsImg : "https://wallpapercave.com/wp/wp1956454.jpg",
  Longevity : "Can live several decades.",
  LongevityImg : "https://c4.wallpaperflare.com/wallpaper/462/907/619/animals-ice-narwhals-nature-wallpaper-preview.jpg"
},


{
  title:'Starfish',
  TagName : "Guiding the Ocean's Symphony with Graceful Arms!",
  Desc : "Graceful and resilient, starfish adorn the seas with their vibrant arms, symbolizing the timeless beauty and balance of marine life.",
  Gif : "https://i.pinimg.com/originals/fd/de/d1/fdded14b4d47db3feb4352243e40293d.gif",
  Origin : "Starfish, also known as sea stars, are found in oceans worldwide",
  OriginImg : "https://images.unsplash.com/photo-1520301267532-5b3708e14b09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RhciUyMGZpc2h8ZW58MHx8MHx8fDA%3D",
  Habitats : "Starfish are adaptable and can be found in a variety of habitats, including rocky shores, coral reefs, sandy bottoms, and seagrass beds.",
  HabitatsImg : "https://plus.unsplash.com/premium_photo-1693932440279-50a3466eac5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RhciUyMGZpc2h8ZW58MHx8MHx8fDA%3D",
  Behaviors : "Starfish are known for their unique method of feeding. They use their tube feet to pry open shells, and their stomach exits their body to digest prey externally.",
  BehaviorsImg : "https://plus.unsplash.com/premium_photo-1681255760617-e2006ca94434?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3RhciUyMGZpc2h8ZW58MHx8MHx8fDA%3D",
  Facts : "Some starfish can regenerate lost arms or even their entire body. Certain species have remarkable color-changing abilities for camouflage.",
  FactsImg : "https://plus.unsplash.com/premium_photo-1694250866050-6153c23d112e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3RhciUyMGZpc2h8ZW58MHx8MHx8fDA%3D",
  Longevity : "The lifespan of a starfish varies among species. While some live for only a few years, others, especially deep-sea species, can have much longer lifespans.",
  LongevityImg : "https://images.unsplash.com/photo-1581807066633-0968d81eaca0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN0YXIlMjBmaXNofGVufDB8fDB8fHww"
}
  ]
  
   
  

  return (
    <div className="App">
   
  
   <Router>
  <NavBar/>
  
    <Switch>
    <Route exact path = '/EarthDiscover'> <Test/></Route>
      <Route exact path = '/GalaxyWorld'><Galaxy/></Route>
      {Planet.map((planetItem, index) => (
        <Route
          key={index}
          exact
          path={`/${planetItem.title}`}
        >
          <SinglePlanet
            title={planetItem.title}
            video={planetItem.video}
            para1={planetItem.para1}
            para2={planetItem.para2}
            Orbital={planetItem.Orbital}
            OrbitalImag={planetItem.OrbitalImag}
            Distance={planetItem.Distance}
            DistanceImag={planetItem.DistanceImag}
            Surface={planetItem.Surface}
            SurfaceImag={planetItem.SurfaceImag}
            Atmosphere={planetItem.Atmosphere}
            AtmosphereImag={planetItem.AtmosphereImag}
            Temperature={planetItem.Temperature}
            TemperatureImag={planetItem.TemperatureImag}
            Moons={planetItem.Moons}
            MoonsImag={planetItem.MoonsImag}
          />
        </Route>
       
      ))}
       <Route exact path="/Nature"><Nature/></Route>
       <Route exact path="/Birds"><Bird/></Route>
       {Animals.map((animal, index) => (
        <Route
          key={index}
          exact
          path={`/${animal.title}`}
        >
          <SingleAnimal
            title={animal.title}
            TagName={animal.TagName}
            Desc={animal.Desc}
            Origin={animal.Origin}
            OriginImg={animal.OriginImg}
            Habitats={animal.Habitats}
            HabitatsImg={animal.HabitatsImg}
            Behaviors={animal.Behaviors}
            BehaviorsImg={animal.BehaviorsImg}
            Facts={animal.Facts}
            FactsImg={animal.FactsImg}
            Longevity={animal.Longevity}
            LongevityImg={animal.LongevityImg}
            Gif={animal.Gif}
            
          />
        </Route>
       
      ))}
      <Route exact path="/OceanWorld"><OceanWorld/></Route>
      <Route exact path="/About"><About/></Route>
      

    </Switch>
    <Footer/>
   </Router>
   
    </div>
  );
}

export default App;
