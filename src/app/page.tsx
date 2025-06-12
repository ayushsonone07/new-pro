import Text from "@/components/Text";
import { Button } from "@/components/ui/button";
import 'aos/dist/aos.css'; 
import { FaInstagram, FaGithub, FaLinkedin, FaYoutube, FaFacebookF  } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import ProjectsSection from "@/components/projectSection";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Badges from "@/components/Badges";

export default function Home() {
  return (
    <main className="relative bg-black text-white font-[family-name:var(--font-geist-sans)] overflow-hidden bg-[url('/Moon.svg')]">
      {/* Intro Section (Background Layer) */}
      <section className="">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-center">
          <p className="text-2xl">Hi, I am</p>
          <h1 className="text-6xl font-bold mt-2 h-40 sm:h-12"><Text /></h1>
          <div className="mt-8">
            <Link href="/cv"><Button className="hover:bg-white hover:text-black">Download CV</Button></Link>
          </div>
          <div className="flex gap-5 justify-end mt-24">
            <Link href='https://www.instagram.com/ayushsonone07/' className="bg-white text-black text-md px-3 py-3 rounded-full ease-in-out duration-500 hover:text-white hover:bg-linear-65 from-purple-500 via-pink-500 to-gray-500"><FaInstagram  /></Link>
            <Link href='https://github.com/ayushsonone07' className="bg-white text-black text-md px-3 py-3 rounded-full ease-in-out duration-500 hover:text-white hover:bg-linear-65 from-black to-gray-500"><FaGithub /></Link>
            <Link href='https://www.linkedin.com/in/ayush-sonone-4a3100220/' className="bg-white text-black text-md px-3 py-3 rounded-full ease-in-out duration-500 hover:text-white hover:bg-linear-65 from-blue-500 to-gray-500"><FaLinkedin /></Link>
            <Link href='https://www.youtube.com/@ayushsonone4772' className="bg-white text-black text-md px-3 py-3 rounded-full ease-in-out duration-500 hover:text-white hover:bg-linear-65 from-red-500 to-gray-500"><FaYoutube /></Link>
            <Link href='https://www.facebook.com/aayush.sonone.7' className="bg-white text-black text-md px-3 py-3 rounded-full ease-in-out duration-500 hover:text-white hover:bg-linear-65 from-blue-500 to-gray-500"><FaFacebookF /></Link>
            <Link href='https://x.com/sononeayush07' className="bg-white text-black text-md px-3 py-3 rounded-full ease-in-out duration-500 hover:text-white hover:bg-linear-65 from-black to-gray-500"><FaXTwitter /></Link>
          </div>
          <p className="mt-12">scroll down &darr;</p>
        </div>
      </section>

      {/* Overlapping Grid Section */}
      <section className="grid sm:grid-cols-2 grid-cols-1 gap-3 mx-10">
        <div className="h-48 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl pointer-events-auto">
        <h1 className="text-center pt-5 text-5xl">Projects</h1>
        <p className="text-xs text-wrap px-5 py-2 text-center">Explore my hands-on projects that demonstrate real-world problem-solving using modern web technologies.</p>
        <br/>
          <Drawer>
            <DrawerTrigger className=" w-full">
              <span className="text-black bg-white px-5 py-2 rounded-lg">View Projects</span>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle className="text-white">
                  <h1 className="text-7xl text-white font-light">Projects</h1>
                </DrawerTitle> 
                <DrawerDescription>
                  <div className="max-h-[400px] ">
                    <div className="m-2"><ProjectsSection/></div>
                  </div>
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose>
                  <Button variant="outline">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>

        <div className="h-48 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl pointer-events-auto">
          <h2 className="text-center pt-5 text-5xl">Skills</h2>
          <p className="text-xs text-wrap px-5 py-2 text-center">Discover the technical and soft skills I've mastered across frontend, backend, and databases.</p>
        <br/>
          <Drawer>
            <DrawerTrigger className="w-full">
              <span className="text-black bg-white px-5 py-2 rounded-lg">View Skills</span>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle className="text-white">
                  <h1 className="text-7xl text-white font-light">Skills</h1>
                </DrawerTitle> 
                <DrawerDescription>
                  <div className="h-screen"><Skills/></div>
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose>
                  <Button variant="outline">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>

        <div className="h-48 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl pointer-events-auto">
        <h1 className="text-center pt-5 text-5xl">Certifications</h1>
        <p className="text-xs text-wrap px-5 py-2 text-center">Browse certifications that validate my skills and continuous learning in software development.</p>
        <br/>
          <Drawer>
            <DrawerTrigger className=" w-full">
              <span className="text-black bg-white px-5 py-2 rounded-lg">View Certificates</span>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle className="text-white">
                  <h1 className="text-6xl text-white font-light">Certifications</h1>
                </DrawerTitle> 
                  <div className="h-screen"><Certifications/></div>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose>
                  <Button variant="outline">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>

        <div className="h-48 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl pointer-events-auto">
        <h1 className="text-center pt-5 text-5xl">Badges</h1>
        <p className="text-xs text-wrap px-5 py-2 text-center">Earned badges showcase my achievements and participation in tech challenges and learning platforms.</p>
        <br/>
          <Drawer>
            <DrawerTrigger className="w-full mb-12">
              <span className="text-black bg-white px-5 py-2 rounded-lg">View Badges</span>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle className="text-white">
                  <h1 className="text-7xl text-white font-light">Badges</h1>
                </DrawerTitle> 
                  <div className="h-screen"><Badges/></div>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose>
                  <Button variant="outline">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>

      </section>

      <section className="experience-section p-6 min-h-screen flex flex-col items-center justify-center ">
      <div className="w-full max-w-4xl">
        {/* Work Experience */}
        <div id="work-experience" className="mb-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-lg text-white">
          <h1 className="text-3xl font-bold mb-4">Work Experience</h1>

          <div className="job mb-6">
            <h2 className="text-xl font-semibold">Front End Developer</h2>
            <p><strong>Company:</strong>KVC Consultants ltd</p>
            <p><strong>Duration:</strong> July 2024 – Present</p>
            <p><strong>Description:</strong> Worked on developing and maintaining frontend applications using Next.js</p>
          </div>

          <div className="job mb-6">
            <h2 className="text-xl font-semibold">PHP Developer Intern</h2>
            <p><strong>Company:</strong>Tech Global Solutions</p>
            <p><strong>Duration:</strong> Sep 2023 – Jan 2024</p>
            <p><strong>Description:</strong> Built dynamic pages using CodeIgniter and Bootstrap, and handled MySQL database queries.</p>
          </div>
        </div>

        {/* Education */}
        <div id="education" className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-lg text-white">
          <h1 className="text-3xl font-bold mb-4">Education</h1>

          <div className="education-entry">
            <h2 className="text-xl font-semibold">Bachelor of Technology (B.Tech)</h2>
            <p><strong>University:</strong>RGPV University</p>
            <p><strong>Year:</strong> 2019 – 2023</p>
            <p><strong>Branch:</strong>Electronics & Communication</p>
          </div>
        </div>

        <div className="my-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-lg text-white">
          <h1 className="text-2xl">Have a Project in mind ?</h1>
          <a href="mailto:ayuhsonone27@gmail.com?subject=Project Inquiry&body=Hi, I’d like to connect with you!" className="text-blue-400 font-bold">Let's talk &#8599;</a>
        </div>
      </div>
    </section>
    </main>
  );
}
