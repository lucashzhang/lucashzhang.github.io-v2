const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

function fromNotionObject(notionPage) {
  return {
    id: notionPage.id,
    ...notionPage.properties
  }
}

exports.handler = async () => {
  const { NOTION_WORK_DATABASE, NOTION_WORK_START, NOTION_WORK_END } =
    process.env;

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
      data: work.results.map(fromNotionObject)
    }),
  };
};
