import { Client } from '@notionhq/client';

function fromNotionObject(notionPage) {
  return {
    id: notionPage.id,
    ...notionPage.properties,
    Tags: notionPage.properties.Tags?.multi_select?.map(item => item.name) ?? []
  }
}

export async function get() {

  const { NOTION_TOKEN, NOTION_DATABASE } = process.env;

  const notion = new Client({
    auth: NOTION_TOKEN,
  });

  const res = await notion.databases.query({
    database_id: NOTION_DATABASE,
  });

  const simplified = res.results.map(fromNotionObject);
	
	return {
    body: {
      work: simplified.filter(item => item.Tags.includes('work')),
      projects: simplified.filter(item => item.Tags.includes('project'))
    }
  };
}