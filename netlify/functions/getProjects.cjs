const { Client } = require("@notionhq/client");

function fromNotionObject(notionPage) {
  return {
    id: notionPage.id,
    ...notionPage.properties
  }
}

exports.handler = async () => {
  const { NOTION_TOKEN, NOTION_PROJECTS_DATABASE } = process.env;
  const notion = new Client({
    auth: NOTION_TOKEN,
  });

  try {
    const projects = await notion.databases.query({
      database_id: NOTION_PROJECTS_DATABASE,
    });
  
    return {
      statusCode: 200,
      body: JSON.stringify({
        data: projects.results.map(fromNotionObject)
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch projects from notion' })
    }
  }
};
