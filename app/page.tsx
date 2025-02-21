import Layout from "@/components/layout/Layout"
import Home2 from "@/components/sections/Home2"
import Service2 from "@/components/sections/Service2"
import Projects2 from "@/components/sections/Projects2"
import Skills2 from "@/components/sections/Skills2"
import Education2 from "@/components/sections/Education2"
import Contact2 from "@/components/sections/Contact2"

export default function Home() {

	return (
		<>
			<Layout headerStyle={2} footerStyle={2}>
				<Home2 />
				<Skills2 />
				<Service2 />
				<Education2 />
				<Projects2 />
				<Contact2 />
			</Layout>
		</>
	)
}