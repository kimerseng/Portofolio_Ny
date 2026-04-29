import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { motion, AnimatePresence } from "framer-motion";

import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import Certificate from "../components/Certificate";

import AOS from "aos";
import "aos/dist/aos.css";

import { Code, Award, Boxes } from "lucide-react";
import { Photo, PhotoAlbum } from "@mui/icons-material";

/* ---------------- Toggle Button ---------------- */
const ToggleButton = ({ onClick, isShowingMore, show }) => {
  if (!show) return null;
  return (
    <div className="mt-6 flex justify-center">
      <button
        onClick={onClick}
        className="px-3 py-1.5 text-slate-300 hover:text-white text-sm font-medium transition-all flex items-center gap-2 bg-white/5 hover:bg-white/10 rounded-md border border-white/10"
      >
        {isShowingMore ? "See Less" : "See More"}
      </button>
    </div>
  );
};

ToggleButton.propTypes = {
  onClick: PropTypes.func,
  isShowingMore: PropTypes.bool,
  show: PropTypes.bool,
};

/* ---------------- Tab Panel ---------------- */
function TabPanel({ children, value, index }) {
  return (
    <div hidden={value !== index}>
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

/* ---------------- Data ---------------- */
const techStacks = [
  { icon: "html.svg", language: "HTML" },
  { icon: "css.svg", language: "CSS" },
  { icon: "javascript.svg", language: "JavaScript" },
  { icon: "tailwind.svg", language: "Tailwind CSS" },
  { icon: "reactjs.svg", language: "ReactJS" },
  { icon: "vite.svg", language: "Vite" },
  { icon: "nodejs.svg", language: "Node JS" },
  { icon: "bootstrap.svg", language: "Bootstrap" },
  { icon: "figma.svg", language: "Figma" },
  { icon: "nextjs.svg", language: "Next.js" },
  { icon: "vercel.svg", language: "Vercel" },
  { icon: "github.svg", language: "Github" },
];

const projects = [
  {
    image: "/new.png",
    name: "ABA Chines New Year 2026",
    description: "Simple calculator project.",
    tech: "HTML, JS, Tailwind",
    link: "https://www.youtube.com/watch?v=YCsXB14MPl4",
  },
     {
    image: "/beer.png",
    name: "Greed life beer",
    description: "Simple calculator project.",
    tech: "HTML, JS, Tailwind",
    link: "https://www.youtube.com/watch?v=AACHLRIi04I",
  },
  {
    image: "/worthy.png",
    name: "I am Worthy.",
    description: "Shorten long URLs with analytics.",
    tech: "React, Node.js, MongoDB",
    link: "https://youtu.be/WxgtNsXbRM4",
  },
  {
    image: "/basket.png",
    name: "Flat Bamboo Basket",
    description: "Simple calculator project.",
    tech: "HTML, JS, Tailwind",
    link: "https://youtu.be/3HdXF1cx_to",
  },
  {
    image: "/later.png",
    name: "Regret Later",
    description: "Simple calculator project.",
    tech: "HTML, JS, Tailwind",
    link: "https://youtu.be/vGE6JmfMnYc",
  },
  {
    image: "/night.png",
    name: "At Night",
    description: "Simple calculator project.",
    tech: "HTML, JS, Tailwind",
    link: "https://youtu.be/sdkHgWLPNwc",
  },
  {
    image: "/form.png",
    name: "From What ?",
    description: "Simple calculator project.",
    tech: "HTML, JS, Tailwind",
    link: "https://youtu.be/q18xUt5zz64",
  },
  {
    image: "/water.png",
    name: "Water Festival",
    description: "Simple calculator project.",
    tech: "HTML, JS, Tailwind",
    link: "https://youtu.be/Hr62GqtiLMY",
  },
  {
    image: "/living.png",
    name: "RLiving and Buddhism",
    description: "Simple calculator project.",
    tech: "HTML, JS, Tailwind",
    link: "https://youtu.be/T37HOpZaHew",
  },
  {
    image: "/little.png",
    name: "Little by little",
    description: "Simple calculator project.",
    tech: "HTML, JS, Tailwind",
    link: "https://youtu.be/er5jD1PGLtA",
  },
  {
    image: "/content.png",
    name: "Video Content",
    description: "Simple calculator project.",
    tech: "HTML, JS, Tailwind",
    link: "https://youtu.be/-uOu9gVXmeE",
  },

];

const certificates = [
  { image: "/certificate.png" },
];

/* ---------------- Main Component ---------------- */
export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);

  const initialItems = 10;

  /* AOS */
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  /* Fake fetch fix (removed broken firebase code) */
  const fetchData = useCallback(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
    localStorage.setItem("certificates", JSON.stringify(certificates));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleShowMore = (type) => {
    if (type === "projects") setShowAllProjects((p) => !p);
    else setShowAllCertificates((p) => !p);
  };

  return (
    <div className="md:px-[10%] px-[5%] w-full bg-[#030014]" id="Portofolio">
      {/* HEADER */}
      <div className="text-center pb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
          Portfolio Showcase
        </h2>
      </div>

      <Box>
        {/* TABS */}
        <AppBar position="static" sx={{ bgcolor: "transparent" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            textColor="secondary"
            indicatorColor="secondary"
          >
            <Tab icon={<Code />} label="Projects" sx={{ color: "#ffffffff" }} />
<Tab icon={<Award />} label="Certificates" sx={{ color: "#ffff" }} />
<Tab icon={<Photo />} label="Photo" sx={{ color: "#ffff" }} />
          </Tabs>
        </AppBar>

        {/* PANELS (NO SwipeableViews anymore) */}
        <TabPanel value={value} index={0}>
          <div className="grid md:grid-cols-3 gap-5">
            {projects.slice(0, initialItems).map((p, i) => (
              <CardProject
                key={i}
                Img={p.image}
                Title={p.name}
                Description={p.description}
                Link={p.link}
                id={p.tech}
              />
            ))}
            <AnimatePresence>
              {showAllProjects &&
                projects.slice(initialItems).map((p, i) => (
                  <motion.div
                    key={`extra-project-${i}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <CardProject
                      Img={p.image}
                      Title={p.name}
                      Description={p.description}
                      Link={p.link}
                      id={p.tech}
                    />
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>

          <ToggleButton
            onClick={() => toggleShowMore("projects")}
            isShowingMore={showAllProjects}
            show={projects.length > initialItems}
          />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <div className="grid md:grid-cols-3 gap-5">
            <AnimatePresence>
              {(showAllCertificates
                ? certificates
                : certificates.slice(0, initialItems)
              ).map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <Certificate ImgSertif={c.image} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <ToggleButton
            onClick={() => toggleShowMore("certificates")}
            isShowingMore={showAllCertificates}
            show={certificates.length > initialItems}
          />
        </TabPanel>

        <TabPanel value={value} index={2}>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-5">
            {techStacks.map((t, i) => (
              <TechStackIcon
                key={i}
                TechStackIcon={t.icon}
                Language={t.language}
              />
            ))}
          </div>
        </TabPanel>
      </Box>
    </div>
  );
}

