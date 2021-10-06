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
  const { NOTION_PROJECTS_DATABASE } = process.env;

  const projects = await notion.databases.query({
    database_id: NOTION_PROJECTS_DATABASE,
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: projects.results.map(fromNotionObject)
    }),
  };
};
