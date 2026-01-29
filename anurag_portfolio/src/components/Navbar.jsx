export default function Navbar({theme,setTheme}){return(<nav className='navbar'>
<div>Anurag</div><div>
<a href='#summary'>Summary</a>
<a href='#experience'>Experience</a>
<a href='#projects'>Projects</a>
</div>
<button onClick={()=>setTheme(theme==='light'?'dark':'light')}>{theme==='light'?'🌙':'☀️'}</button>
</nav>);}