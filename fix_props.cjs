const fs = require('fs');

function replaceFile(path, regex, replacement) {
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace(regex, replacement);
  fs.writeFileSync(path, content);
}

replaceFile('src/App.jsx', '<Navbar />', '<Navbar onReportClick={() => setIsModalOpen(true)} />');
replaceFile('src/App.jsx', '<Hero />', '<Hero onReportClick={() => setIsModalOpen(true)} />');
replaceFile('src/App.jsx', '<LiveFeed />', '<LiveFeed onReportClick={() => setIsModalOpen(true)} />');

replaceFile('src/components/Navbar.jsx', 'export default function Navbar() {', 'export default function Navbar({ onReportClick }) {');
replaceFile('src/components/Navbar.jsx', /<motion\.button[^>]*>\s*<Plus className="h-4 w-4" \/> Report Item\s*<\/motion\.button>/, (match) => match.replace('<motion.button', '<motion.button onClick={onReportClick}'));
replaceFile('src/components/Navbar.jsx', /<motion\.button\s+whileHover=\{\{ scale: 1\.05 \}\}\s+whileTap=\{\{ scale: 0\.95 \}\}\s+className="md:hidden[^"]*"\s*>\s*<Plus className="h-4 w-4" \/> Report\s*<\/motion\.button>/, (match) => match.replace('<motion.button', '<motion.button onClick={onReportClick}'));

replaceFile('src/components/Hero.jsx', 'export default function Hero() {', 'export default function Hero({ onReportClick }) {');
replaceFile('src/components/Hero.jsx', /<AlertCircle className="h-4 w-4" \/> I Lost Something\s*<\/motion\.button>/, '<AlertCircle className="h-4 w-4" /> I Lost Something\n          </motion.button>'.replace('</motion.button>', ' onClick={onReportClick}></motion.button>'));
replaceFile('src/components/Hero.jsx', /<motion\.button\s+whileHover=\{\{ scale: 1\.03 \}\}\s+whileTap=\{\{ scale: 0\.97 \}\}\s+className="h-\[52px\] px-8 rounded-full bg-white text-black font-bold text-\[14px\] flex items-center gap-2 hover:bg-\[\#C8FF00\] transition-colors cursor-pointer shadow-lg shadow-white\/10"/, (match) => match + " onClick={onReportClick}");

replaceFile('src/components/Hero.jsx', /<motion\.button\s+whileHover=\{\{ scale: 1\.03 \}\}\s+whileTap=\{\{ scale: 0\.97 \}\}\s+className="h-\[52px\] px-8 rounded-full bg-black\/20 backdrop-blur-md border border-white\/30 text-white font-semibold text-\[14px\] flex items-center gap-2 hover:bg-white\/10 transition-colors cursor-pointer"/, (match) => match + " onClick={onReportClick}");


replaceFile('src/components/LiveFeed.jsx', 'export default function LiveFeed() {', 'export default function LiveFeed({ onReportClick }) {');
replaceFile('src/components/LiveFeed.jsx', /<motion\.button whileHover=\{\{ scale: 1\.02 \}\}\s+whileTap=\{\{ scale: 0\.98 \}\}\s+className="h-11 px-5 rounded-full bg-\[\#C8FF00\] text-black font-semibold text-\[13px\] hover:bg-\[\#d4ff33\] flex items-center justify-center shrink-0 transition-colors shadow-\[0_0_20px_rgba\(200,255,0,0\.2\)\]"\s*>\s*Report Lost Item\s*<\/motion\.button>/, (match) => match.replace('<motion.button', '<motion.button onClick={onReportClick}'));

