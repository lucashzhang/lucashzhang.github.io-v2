const { Client } = require("@notionhq/client");

function fromNotionObject(notionPage) {
  return {
    id: notionPage.id,
    ...notionPage.properties,
  };
}

exports.handler = async () => {
  const { NOTION_TOKEN, NOTION_WORK_DATABASE, NOTION_WORK_START, NOTION_WORK_END } =
    process.env;
  const notion = new Client({
    auth: NOTION_TOKEN,
  });

  try {
    const work = await notion.databases.query({
      database_id: NOTION_WORK_DATABASE,
      sorts: [
        {
          property: NOTION_WORK_START,
          direction: "descending",
        },
        {
          property: NOTION_WORK_END,
          direction: "descending",
        },
      ],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        data: work.results.map(fromNotionObject),
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch work from notion' })
    }
  }

  
};
