import lume from "lume/mod.ts";
import nav from "lume/plugins/nav.ts";
import robots from "lume/plugins/robots.ts";
import icons from "lume/plugins/icons.ts";
import esbuild from "lume/plugins/esbuild.ts";
import check_urls from "lume/plugins/check_urls.ts";
import favicon from "lume/plugins/favicon.ts";
import metas from "lume/plugins/metas.ts";
import brotli from "lume/plugins/brotli.ts";
import gzip from "lume/plugins/gzip.ts";

const site = lume({
  src: "./src",
  location: new URL("https://banana.obnx.dev"),
});

site.add("css");
site.add([".svg"]);

site.use(nav());
site.use(robots());
site.use(icons());
site.use(esbuild());
site.use(check_urls());
site.use(favicon());
site.use(metas());
site.use(brotli());
site.use(gzip());

export default site;
