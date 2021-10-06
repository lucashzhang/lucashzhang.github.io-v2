import { Client } from '@notionhq/client';

function fromNotionObject(notionPage) {
  return {
    id: notionPage.id,
    ...notionPage.properties
  }
}

export async function get() {

  const { NOTION_TOKEN, NOTION_PROJECTS_DATABASE } = process.env;

  const notion = new Client({
    auth: NOTION_TOKEN,
  });

  const projects = await notion.databases.query({
    database_id: NOTION_PROJECTS_DATABASE,
  });
	
	return {
    body: {
      data: projects.results.map(fromNotionObject)
    }
  };
}