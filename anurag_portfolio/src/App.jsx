import React,{useState,useEffect}from"react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Section from "./components/Section";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import "./App.css";
export default function App(){
 const[theme,setTheme]=useState("light");
 useEffect(()=>{document.body.setAttribute("data-theme",theme);},[theme]);
 return(<>
 <Navbar theme={theme} setTheme={setTheme}/>
 <Header/>
 <div className="container">
 <Section title="Professional Summary"><p>Detail-oriented B.Tech student specializing in Data Science.</p></Section>
 <Experience/><Projects/><Skills/><Education/><Certifications/>
 </div>
 <Footer/>
 </>);
}