import Layout from '../components/layout';
import Link from 'next/link';

function About() {
	return (
		<Layout>
			<main>
				<div id="about">
					<h1>About the Detector</h1>
					<p>This app uses a trained model to detect threatening speech. It has been trained with over 25 thousand labeled tweets that are categorized into hate speech, offensive language, or neither. In its current state the THreat Detector can take in any twitter user handle and will search through the most recent 3,254 tweets the user has posted, looking for hateful or offensive language. It will then return a reading on the percentage of hateful/offensive language used by the user. It currently only has access to the twitter API, but expansion into web crawling and more API's is on the list. </p>
				</div>
				<div id="about">

					<h1>Meet The Team</h1>

					<h2>Hexx King</h2>

					<p>
					My name is Hexx King I was born and raised in Texas but I have been living in Seattle, WA since 2013. I am a very active member in the LGBTQIA community and I enjoy roller skating and playing video games in my free time. I was originally  drawn to coding through an interest in cyber security and ethical hacking and in April 2020, I joined Code Fellows and wrote my very first line of code! I plan to continue my education in software development while also pursuing internships that will lead to a technical program management role. <a href="https://github.com/HexxKing">GitHub</a> | <a href="https://www.linkedin.com/in/hexx-king/">LinkedIn</a>
					</p>

					<h2>Taylor Johnson</h2>

					<p> I am a problem solver with a knack for technology. Before I entered the world of Software Development I was a Manufacturing Engineer. I  loved setting up new machines and learning their software. Designing tools to produce the perfect part while still meeting the constraints of the machine was very satisfying.  I realized my favorite part  of the job was learning new problem solving technologies. When it became clear I was ready for a career change, software development stood out as the ultimate problem solving technology. I started teaching myself web development and was immediately hooked. I found my way into a boot camp which pushed my capacity for learning even farther.  The more I learn the more it becomes clear that Software Development is exactly where I want to be.<a href="https://github.com/johnson-tay09">GitHub</a> | <a href="https://www.linkedin.com/in/taylor-johnson0/">LinkedIn</a>
					</p>

					<h2>Lee Thomas</h2>

					<p> First and foremost, I am a full stack software engineer. I have always been passionate about tech, whether its building computers, AI, machine learning, the list goes on. I was on track to major in Economics and go to law school but when covid hit it gave me an opportunity to switch up my path and get into the tech industry. I learned how to code from a fantastic boot camp called Code Fellows and I have been loving it ever since. I have never been happier to wake up, learn, work and build something new everyday. <a href="https://github.com/LeeThomas13">GitHub</a> | <a href="https://www.linkedin.com/in/lee-thomas-aa75aa1a1/">LinkedIn</a>
					</p>

					<h2>Ryan Pilon</h2>

					<p>Before starting code fellows my primary source of income was manual labor based job.  Minimal thinking and lots of physical aspects to my work. Though my interest lied in using my brain for problem solving, I started as an electrical apprentice for almost a year. I decided to pursue a different way of income so that I could maintain a career long term with less physical demand. I talked to an old friend late last summer and introduced me to the "jobs of the future" after doing some research the appeal was immediate and decided to dive in head first and learn Software Development.  Quickly I realized software development and complex electrical systems have many similarities. Problem solving is what I enjoy, what gives me passion for my job. Also learning and growing as a skilled professional, and as a person, always interests me and keeps me passionate about a career. The ideal environment I would use this skill is in the back end coding field.  I have previous experience with public speaking, body language skills, and working in a team. <a href="https://github.com/MkayButters">GitHub</a> | <a href="https://www.linkedin.com/in/ryanpilon95/">LinkedIn</a>
					</p>
				</div>
			<footer>
			&trade;The GOAT
			</footer>
			</main>
		</Layout>
	);
}

export default About;
