import mdsvex from "mdsvex"
import sveltePreprocess from "svelte-preprocess"
import adapterStatic from "@sveltejs/adapter-static"
import mdsvexConfig from "./mdsvex.config.cjs"

/** @type {import('@sveltejs/kit').Config} */
export default {

	extensions: [
		".svelte", ...mdsvexConfig.extensions,
	],

	preprocess: [
		mdsvex.mdsvex(mdsvexConfig),
		sveltePreprocess({ postcss: true }),
	],

	kit: {
		adapter: adapterStatic(),
		paths: {
			base: process.env.BASE_URL || `/${process.env.npm_package_name}`,
		},
	},

}
