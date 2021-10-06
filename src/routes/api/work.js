import { Client } from '@notionhq/client';

function fromNotionObject(notionPage) {
  return {
    id: notionPage.id,
    ...notionPage.properties
  }
}

export async function get() {

  const { NOTION_TOKEN, NOTION_WORK_DATABASE, NOTION_WORK_START, NOTION_WORK_END } = process.env;

  const notion = new Client({
    auth: NOTION_TOKEN,
  });

  const work = await notion.databases.query({
    database_id: NOTION_WORK_DATABASE,
    sorts: [
      {
        property: NOTION_WORK_START,
        direction: 'descending'
      },
      {
        property: NOTION_WORK_END,
        direction: 'descending'
      }
    ]
  });
	
	return {
    body: {
      data: work.results.map(fromNotionObject)
    }
  };
}