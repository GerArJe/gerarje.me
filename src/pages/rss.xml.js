import rss from "@astrojs/rss";
import { FULL_NAME, PAGE_NAME } from "../core/constants/text.contant";
import { getCollection } from "astro:content";

export async function get(context) {
	const projects = await getCollection("work");
	return rss({
		title: `${PAGE_NAME}`,
		description: `${FULL_NAME} portfolio`,
		site: context.site,
		items: projects.map((project) => ({
			...project.data,
			pubDate: project.data.publishDate,
			link: `/work/${project.slug}`,
		})),
		customData: `<language>en-us</language>`,
	});
}
